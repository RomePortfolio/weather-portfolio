import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';  // Make sure this file exists (we'll create it next if not)

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-800 flex flex-col">
      {/* Fixed navigation bar */}
      <NavBar />

      {/* Main content starts below nav */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optional: fallback for unknown paths */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        © {new Date().getFullYear()} Rome Colmenares
      </footer>
    </div>
  );
}

export default App;