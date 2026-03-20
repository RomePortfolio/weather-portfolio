import { useState } from 'react';
import './App.css';  // or import './index.css' if using Tailwind there

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
          <ul className="list-disc pl-6">
            <li>AWS (EC2, S3, Lambda, DynamoDB, Amplify)</li>
            <li>React + TypeScript</li>
            <li>Python & starting Go</li>
            <li>Git & GitHub</li>
            <li>Serverless Architecture</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Live Demo: Weather Checker</h2>
          <div className="bg-white p-6 rounded shadow">
            <label className="block mb-2">City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border p-2 rounded w-full max-w-xs"
            />
            <p className="mt-4 text-gray-600">Weather will appear here (coming in Phase 2)</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>Email: Romanaegis@gmail.com | GitHub: https://github.com/romanaegis | X: @romanaegis</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} RomanAegis
      </footer>
    </div>
  );
}

export default App;