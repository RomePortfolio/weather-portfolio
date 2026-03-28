// src/components/Header.tsx
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close dropdown after navigation
    setIsProjectsOpen(false);
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <header className="bg-black/50 backdrop-blur-md text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        
        {/* Logo / Name */}
        <NavLink 
          to="/" 
          className="text-2xl font-bold hover:text-blue-300 transition-colors"
        >
          Rome Colmenares
        </NavLink>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          
          {/* About, Skills, Contact */}
          <NavLink 
            to="/#about" 
            onClick={() => handleScroll('about')}
            className="hover:text-blue-300 transition-colors hidden md:block"
          >
            About
          </NavLink>

          <NavLink 
            to="/#skills" 
            onClick={() => handleScroll('skills')}
            className="hover:text-blue-300 transition-colors hidden md:block"
          >
            Skills
          </NavLink>

          <NavLink 
            to="/#contact" 
            onClick={() => handleScroll('contact')}
            className="hover:text-blue-300 transition-colors hidden md:block"
          >
            Contact
          </NavLink>

          {/* Projects Dropdown - Mobile Friendly */}
          <div className="relative">
            <button 
              onClick={toggleProjects}
              className="flex items-center gap-1 hover:text-blue-300 transition-colors focus:outline-none px-3 py-2 rounded-lg"
            >
              Projects 
              <span className={`text-xs transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute right-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl py-2 shadow-2xl z-50 
              ${isProjectsOpen ? 'block' : 'hidden'}`}>
              
              <NavLink 
                to="/projects" 
                onClick={() => setIsProjectsOpen(false)}
                className="block px-4 py-3 hover:bg-white/10 hover:text-blue-300 transition-colors"
              >
                All Projects
              </NavLink>
              <NavLink 
                to="/projects/weather" 
                onClick={() => setIsProjectsOpen(false)}
                className="block px-4 py-3 hover:bg-white/10 hover:text-blue-300 transition-colors"
              >
                Weather Lookup
              </NavLink>
              <NavLink 
                to="/projects/medical" 
                onClick={() => setIsProjectsOpen(false)}
                className="block px-4 py-3 hover:bg-white/10 hover:text-blue-300 transition-colors"
              >
                Medical Billing Codes
              </NavLink>
              <NavLink 
                to="/projects/resume-tailor" 
                onClick={() => setIsProjectsOpen(false)}
                className="block px-4 py-3 hover:bg-white/10 hover:text-blue-300 transition-colors"
              >
                Resume Tailoring Automator
              </NavLink>
              <NavLink 
                to="/projects/resume-checker" 
                onClick={() => setIsProjectsOpen(false)}
                className="block px-4 py-3 hover:bg-white/10 hover:text-blue-300 transition-colors"
              >
                AI Resume Checker for Recruiters
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;