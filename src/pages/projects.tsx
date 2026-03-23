import { useState, useEffect } from 'react';

// WMO weather code to human-readable
const getWeatherDescription = (code: number | undefined): string => {
  if (code === undefined) return 'Unknown';
  if (code === 0) return 'Clear sky';
  if (code <= 3) return 'Mainly clear / Partly cloudy';
  if (code <= 48) return 'Cloudy / Overcast';
  if (code <= 67 || (code >= 80 && code <= 82)) return 'Rain';
  if (code <= 77) return 'Snow / Sleet';
  if (code >= 95) return 'Thunderstorm';
  return 'Mixed / Unknown';
};

// Capitalize city name 
const capitalizeCity = (str: string): string => {
  if (!str) return 'Unknown';
  return str
    .split(/,\s*|\s+/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(', ');
};

// Open-Meteo
interface OpenMeteoForecast {
  latitude: number;
  longitude: number;
  elevation: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;

  current?: {
    time: string;
    interval: number;
    temperature_2m: number;
    apparent_temperature: number;
    weather_code: number;
  };
  current_units?: {
    temperature_2m: string;
    apparent_temperature: string;
    weather_code: string;
  };

  daily?: {
    time: string[]; // ISO dates like "2025-03-24"
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
  daily_units?: {
    temperature_2m_max: string;
    temperature_2m_min: string;
    weather_code: string;
  };
}

export default function Projects() {
  const [city, setCity] = useState('Houston');
  const [displayLocation, setDisplayLocation] = useState('Houston');
  const [weather, setWeather] = useState<OpenMeteoForecast | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);
    try {
      const url = `https://api.open-meteo.com/v1/forecast?` +
        `latitude=${lat}&longitude=${lon}&` +
        `current=temperature_2m,apparent_temperature,weather_code&` +
        `daily=temperature_2m_max,temperature_2m_min,weather_code&` +
        `temperature_unit=fahrenheit&timezone=America/Chicago&forecast_days=7`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Weather fetch failed: ${response.status}`);

      const data: OpenMeteoForecast = await response.json();
      setWeather(data);
    } catch (err) {
      setError((err as Error).message || 'Weather service issue – try again');
    } finally {
      setLoading(false);
    }
  };

  // Load Houston default
  useEffect(() => {
    fetchWeather(29.7604, -95.3698);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    try {
      // Use only city name for geocoding
      const cityOnly = city.split(',')[0].trim();

      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?` +
        `name=${encodeURIComponent(cityOnly)}&` +
        `count=1&language=en&format=json&countryCode=US`;

      const geoResponse = await fetch(geoUrl);
      if (!geoResponse.ok) throw new Error('Geocoding unavailable');

      const geoData = await geoResponse.json();
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error(
          `No match for "${cityOnly}". Try just the city name (e.g., "Austin", "Houston", "New York"). ` +
          `Smaller towns may need a nearby larger city.`
        );
      }

      const location = geoData.results[0];
      const { latitude, longitude, name, admin1, country } = location;

      await fetchWeather(latitude, longitude);

      //  display
      let display = name || cityOnly;
      if (admin1) display += `, ${admin1}`;
      if (country) display += `, ${country}`;
      setDisplayLocation(capitalizeCity(display));
    } catch (err) {
      setError((err as Error).message || 'Failed to find location – check spelling');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-white">Projects & Live Demo</h2>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-white">Weather Checker Demo (Houston default)</h3>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label 
              htmlFor="city-input" 
              className="block mb-2 font-medium text-gray-200"
            >
              Enter a city (US only):
            </label>
            <input
              id="city-input"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g., Houston, Austin, New York (state optional)"
              className="border p-3 rounded-xl w-full max-w-md bg-gray-800 text-white border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-lg"
              required
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 font-medium text-lg"
          >
            {loading ? 'Fetching...' : 'Check Weather'}
          </button>
        </form>

        {error && <p className="text-red-400 font-medium mb-4">{error}</p>}

{weather && !loading && !error && weather.current && weather.daily && (
  <div className="mt-6">
    {/* Current weather card */}
    <div className="bg-blue-900/30 p-6 rounded-xl mb-8 text-center border border-blue-500/30">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Current in {displayLocation}
      </h3>
      <p className="text-5xl font-bold text-white">
        {weather.current.temperature_2m}°F
      </p>
      <p className="text-lg mt-2 text-gray-300">
        Feels like {weather.current.apparent_temperature}°F
      </p>
      <p className="text-lg capitalize mt-3 text-blue-300">
        {getWeatherDescription(weather.current.weather_code)}
      </p>
    </div>

    {/* 7-Day Forecast */}
    <h3 className="text-xl font-semibold mb-4 text-white">7-Day Forecast</h3>
<div className="grid grid-cols-2 sm:grid-cols-7 gap-4">
  {weather.daily!.time.map((date: string, index: number) => (
    <div 
      key={date} 
      className="bg-gray-800/50 p-4 rounded-xl text-center border border-gray-700 hover:border-blue-500 transition"
    >
      <p className="font-medium text-sm text-gray-300">
        {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
      </p>
      <p className="text-lg font-bold mt-2 text-white">
        {weather.daily!.temperature_2m_max[index]}° / {weather.daily!.temperature_2m_min[index]}°
      </p>
      <p className="text-sm capitalize mt-2 text-blue-300">
        {getWeatherDescription(weather.daily!.weather_code[index])}
      </p>
    </div>
  ))}
</div>  </div>
)}

        {loading && <p className="text-blue-400 mt-6 text-center">Loading weather...</p>}
      </div>

      <p className="mt-8 text-gray-200">More projects (e.g., billing code explorer, serverless backend) coming soon!</p>
    </section>
  );
}