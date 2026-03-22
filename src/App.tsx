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
        temp: Math.round((weatherData.current.temperature_2m * 9/5) + 32),
        condition: getConditionName(weatherData.current.weathercode),
        icon: getIconCode(weatherData.current.weathercode),
      });
    } catch (err) {
      console.error(err);
      alert("Error fetching weather. Try again!");
    }
  };

  // Auto-load Houston
  useEffect(() => {
    fetchWeather();
  }, []);

  return (

      <div className="min-h-screen bg-animated flex flex-col">
      {/* Header */}
<header 
  className="relative min-h-[200px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden"
  style={{ backgroundImage: "url('/images/skyline.png')" }}
>
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 text-center px-4">
    <h1 className="text-5xl font-bold">Rome Colmenares</h1>
    <p className="mt-2 text-xl">Cloud Computing Professional | Houston, TX</p>
  </div>
</header>

      <main className="flex-grow container mx-auto p-6 max-w-4xl">
        {/* About */}
<section className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
  {/* Portrait on the left */}
  <div className="flex-shrink-0">
    <img
      src="/images/image.jpg"
      alt="Rome Colmenares portrait"
      className="w-68 h-84 md:w-84 md:h-100 rounded-[50%] object-cover shadow-2xl border-4 border-black"
    />
  </div>

  {/* Text content on the right */}
  <div className="text-center md:text-left text-gray-100 drop-shadow-lg">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg leading-relaxed">
      Recent graduate with an Associate’s degree in Cloud Computing, passionate about serverless architecture, AWS, and building practical, user-focused applications. Currently deepening my skills in React + TypeScript, Python, and Golang.
    </p>
    <p className="text-lg leading-relaxed mt-4">
      I bring <strong>decades of professional experience</strong> in high-stakes environments, including:
    </p>
    <ul className="list-disc pl-6 mt-3 space-y-2 text-lg">
      <li><strong>Training & instruction</strong> — designed and delivered complex training programs for diverse teams, translating technical concepts into clear, actionable learning.</li>
      <li><strong>Communications</strong> — excelled in stakeholder management, clear documentation, and cross-functional collaboration across departments and leadership levels.</li>
      <li><strong>Logistics & operations</strong> — managed large-scale coordination, resource allocation, and process optimization under tight deadlines and high pressure.</li>
      <li><strong>Management & leadership</strong> — led teams, mentored professionals, resolved conflicts, and drove performance in dynamic, results-oriented settings.</li>
    </ul>
    <p className="text-lg leading-relaxed mt-4">
      Now channeling that real-world expertise into cloud technologies — eager to bring proven leadership, communication, and operational skills to an entry-level cloud, DevOps, or developer role.
    </p>
    <p className="text-lg leading-relaxed mt-4 italic">
      Outside of tech, I enjoy SciFi, animal training, and playing table top roleplaying games — always looking for ways to blend curiosity with practical problem-solving.
    </p>
  </div>
</section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-100 drop-shadow-lg">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Amazon Web Services (AWS, Lambda, S3, DynamoDB, Amplify)",
      "Cloud Computing Fundamentals",
      "Serverless Architecture",
      "React + TypeScript",
      "Python Programming",
      "Golang",
      "Git & GitHub",
      "Docker & Containers (Basics)",
      "Linux/Unix Basics",
      "Networking & Security",
      "Comp TIA Security+",
      "Instructional Design"].map((skill, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow border-1 border-black text-center font-medium">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Weather Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-100 drop-shadow-lg">Live Demo: Weather Checker</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block mb-2 font-medium text-gray-700">City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') fetchWeather(); }}
              className="border border-black p-2 rounded w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type city & press Enter"
            />
            {weather ? (
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold">{weather.city}, {weather.country}</h3>
                <p className="text-5xl font-light my-2">{weather.temp}°F</p>
                <p className="text-xl capitalize">{weather.condition}</p>
                <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.condition} className="mx-auto" />
              </div>
            ) : (
              <p className="mt-4 text-gray-600 text-center">Loading Houston weather...</p>
            )}
          </div>
        </section>
<p className="text-lg leading-relaxed mt-4 text-gray-100 drop-shadow-lg">
  I am ager to bring my blend of <strong>technical curiosity </strong>and proven <strong>operational skills</strong> to work for you — let's connect!
</p>
        {/* Contact */}
        <section>
          <h2 className="text-3xl font-bold mb-4 mt-4 text-gray-100 drop-shadow-lg">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-4" >
            <a href="mailto:romanaegis@gmail.com" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors shadow-md inline-block">Email Me</a>
            <a href="https://github.com/romanaegis" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors shadow-md inline-block">GitHub</a>
            <a href="https://www.linkedin.com/in/rome-colmenares/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors shadow-md inline-block">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} RomanAegis
      </footer>
    </div>
  );
}

export default App;