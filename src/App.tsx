import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [city, setCity] = useState<string>('Houston');
  const [weather, setWeather] = useState<any>(null);

  // Helper functions
  const getConditionName = (code: number) => {
    const codes: Record<number, string> = {
      0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
      45: "Fog", 51: "Light drizzle", 61: "Light rain", 71: "Light snow",
      80: "Rain showers", 95: "Thunderstorm",
    };
    return codes[code] || "Unknown";
  };

  const getIconCode = (code: number) => {
    const iconMap: Record<number, string> = {
      0: "01d", 1: "02d", 2: "03d", 3: "04d",
      45: "50d", 51: "09d", 61: "10d", 71: "13d",
      80: "09d", 95: "11d",
    };
    return iconMap[code] || "01d";
  };

  // Fetch weather
  const fetchWeather = async () => {
    if (!city.trim()) return;

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en`
      );
      const geoData = await geoRes.json();

      if (!geoData.results?.length) {
        alert("City not found!");
        return;
      }

      const { latitude, longitude, name, country_code } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        country: country_code,
        temp: weatherData.current.temperature_2m,
        condition: getConditionName(weatherData.current.weathercode),
        icon: getIconCode(weatherData.current.weathercode),
      });
    } catch (err) {
      console.error(err);
      alert("Error fetching weather. Try again!");
    }
  };

  // Auto-load Houston when page loads
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Rome - Cloud & Developer Portfolio</h1>
        <p className="mt-2">Associate in Cloud Computing | Houston, TX</p>
      </header>

      {/* Main */}
      <main className="flex-grow container mx-auto p-6 max-w-4xl">
        {/* About */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>Recent graduate passionate about serverless, AWS, and building useful apps. Learning Go, Python, TypeScript.</p>
        </section>

        {/* Skills - curved shadowed boxes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "AWS (EC2, S3, Lambda, DynamoDB, Amplify)",
              "React + TypeScript",
              "Python & starting Go",
              "Git & GitHub",
              "Serverless Architecture",
              "Cloud Concepts & IaC",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Weather Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Live Demo: Weather Checker</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block mb-2 font-medium text-gray-700">City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') fetchWeather(); }}
              className="border border-gray-300 p-2 rounded w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type city & press Enter"
            />

            {weather ? (
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold">{weather.city}, {weather.country}</h3>
                <p className="text-5xl font-light my-2">{weather.temp}°C</p>
                <p className="text-xl capitalize">{weather.condition}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.condition}
                  className="mx-auto"
                />
              </div>
            ) : (
              <p className="mt-4 text-gray-600 text-center">Loading Houston weather...</p>
            )}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:romanaegis@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md inline-block">Email Me</a>
            <a href="https://github.com/romanaegis" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-md inline-block">GitHub</a>
            <a href="https://x.com/rom