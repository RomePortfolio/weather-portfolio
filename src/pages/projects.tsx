import { useState, useEffect } from 'react';

// Helper for weather code
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

// Capitalize helper
const capitalizeCity = (str: string): string => {
  if (!str) return 'Unknown';
  return str
    .split(/,\s*|\s+/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(', ');
};

export default function Projects() {
  const [city, setCity] = useState('Houston');
  const [displayLocation, setDisplayLocation] = useState('Houston');
  const [weather, setWeather] = useState<any>(null);
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
      if (!response.ok) throw new Error('Weather fetch failed');
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError((err as Error).message || 'Weather service issue');
    } finally {
      setLoading(false);
    }
  };

  // Initial load: Houston
  useEffect(() => {
    fetchWeather(29.7604, -95.3698);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    try {
      // Strip state/comma – search only city name
      const cityOnly = city.split(',')[0].trim();

      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?` +
        `name=${encodeURIComponent(cityOnly)}&` +
        `count=1&` +
        `language=en&` +
        `format=json&` +
        `countryCode=US`;

      const geoResponse = await fetch(geoUrl);
      if (!geoResponse.ok) throw new Error('Geocoding unavailable');

      const geoData = await geoResponse.json();
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error(
          `No match for "${cityOnly}". ` +
          `Try just the city name (e.g., "Austin", "Houston", "New York"). ` +
          `Smaller towns may need a nearby larger city or more details.`
        );
      }

      const location = geoData.results[0];
      const { latitude, longitude, name, admin1, country } = location;

      await fetchWeather(latitude, longitude);

      // Accurate display from API
      let display = name || cityOnly;
      if (admin1) display += `, ${admin1}`;
      if (country) display += `, ${country}`;
      setDisplayLocation(capitalizeCity(display));
    } catch (err) {
      setError((err as Error).message || 'Failed to find location');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-white">Projects & Live Demo</h2>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-semibold mb-4">Weather Checker Demo</h3>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label 
              htmlFor="city-input" 
              className="block mb-2 font-medium text-gray-700"
            >
              Enter a city:
            </label>
            <input
              id="city-input"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g., Houston, Austin, New York (state optional)"
              title="City name only works best – add state if needed but try without first"
              className="border p-2 rounded w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Fetching...' : 'Check Weather'}
          </button>
        </form>

        {error && <p className="text-red-600 font-medium">{error}</p>}

        {weather && !loading && !error && (
          <div className="mt-6">
            <div className="bg-blue-50 p-5 rounded-lg mb-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Current weather in {displayLocation}
              </h3>
              <p className="text-4xl font-bold">
                {weather.current?.temperature_2m}°F
              </p>
              <p className="text-lg mt-1">
                Feels like {weather.current?.apparent_temperature}°F
              </p>
              <p className="text-lg capitalize mt-2">
                {getWeatherDescription(weather.current?.weather_code)}
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">7-Day Forecast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-7 gap-4">
              {weather.daily?.time.map((date: string, index: number) => (
                <div key={date} className="bg-gray-50 p-3 rounded-lg text-center shadow-sm">
                  <p className="font-medium text-sm">
                    {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </p>
                  <p className="text-lg font-bold mt-1">
                    {weather.daily.temperature_2m_max[index]}° / {weather.daily.temperature_2m_min[index]}°
                  </p>
                  <p className="text-sm capitalize mt-1">
                    {getWeatherDescription(weather.daily.weather_code[index])}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="mt-8 text-gray-200">More projects coming soon!</p>
    </section>
  );
}