import Projects from './pages/projects'; 
import About from './pages/about'; 
import Contact from './pages/contact';
import Skills from './pages/skills';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-950 flex flex-col">
      {/* Navigation Bar – keep sticky on top */}
      <nav className="bg-black/50 backdrop-blur-md text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
        <a href="#" className="hover:text-blue-300 transition-colors">
         Rome Colmenares Portfolio
        </a>
        </h1>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Your new hero header with skyline background */}
      <header
        className="relative min-h-[200px] md:min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/skyline.png')" }}  // Make sure this image exists in public/images/
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Rome Colmenares</h1>
          <p className="mt-3 text-xl md:text-2xl opacity-90">
            Cloud Computing Professional | Houston, TX
          </p>
        </div>
      </header>

      {/* Main content – now starts below the hero */}
      <main className="flex-grow container mx-auto p-6 max-w-4xl pt-12 md:pt-16">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-black/50 text-white p-6 text-center">
        © {new Date().getFullYear()} Rome Colmenares
      </footer>
    </div>
  );
}

export default App;