import { useState } from 'react';
import './index.css';  // Make sure this imports Tailwind (or move to App.css if you prefer)

function App() {
  const [city, setCity] = useState('Houston');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Rome Colmenares - Cloud & Developer Portfolio</h1>
        <p className="mt-2">Associate in Cloud Computing | Houston, TX</p>
      </header>

      {/* Main sections */}
      <main className="flex-grow container mx-auto p-6 max-w-4xl">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>Recent graduate passionate about serverless, AWS, and building useful apps. Go, Python, TypeScript. Looking for entry-level cloud/dev roles!</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "AWS (EC2, S3, Lambda, DynamoDB, Amplify)",
              "React + TypeScript",
              "Python &  Go",
              "Git & GitHub",
              "Serverless Architecture",
              "Cloud Concepts & IaC",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center font-medium text-gray-800"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Live Demo: Weather Checker</h2>
          <div className="bg-white p-6 rounded shadow">
            <label className="block mb-2 font-medium">City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="mt-4 text-gray-600">Weather will appear here (coming in Phase 2)</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:romanaegis@gmail.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md inline-block"
            >
              Email Me
            </a>
            <a
              href="https://github.com/romanaegis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-md inline-block"
            >
              GitHub
            </a>
            <a
              href="https://x.com/romanaegis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-md inline-block"
            >
              X (Twitter)
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} Rome Aegis
      </footer>
    </div>
  );
}

export default App;