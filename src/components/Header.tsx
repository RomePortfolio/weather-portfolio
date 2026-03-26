import { NavLink } from 'react-router-dom';

const Header = () => {
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
  };

  return (
    <header className="bg-black/50 backdrop-blur-md text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        
        {/* Name */}
        <NavLink 
          to="/" 
          className="text-2xl font-bold hover:text-sky-400 transition-colors"
        >
          Rome Colmenares
        </NavLink>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm">
          
          {/* About */}
          <NavLink 
            to="/#about" 
            onClick={() => handleScroll('about')}
            className="text-white/90 hover:text-sky-400 transition-colors"
          >
            About
          </NavLink>

          {/* Skills */}
          <NavLink 
            to="/#skills" 
            onClick={() => handleScroll('skills')}
            className="text-white/90 hover:text-sky-400 transition-colors"
          >
            Skills
          </NavLink>

          {/* Contact */}
          <NavLink 
            to="/#contact" 
            onClick={() => handleScroll('contact')}
            className="text-white/90 hover:text-sky-400 transition-colors"
          >
            Contact
          </NavLink>

          {/* Projects Dropdown */}
          <div className="relative group ml-auto">
            <button 
              className="flex items-center gap-1 text-white/90 hover:text-sky-400 transition-colors"
            >
              Projects 
              <span className="text-xs">▼</span>
            </button>
            
            <div className="absolute hidden group-hover:block pt-2 w-56 z-50 right-0">
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg py-2 shadow-xl">
                <NavLink 
                  to="/projects" 
                  className="block px-4 py-2 hover:bg-white/10 text-white/90 hover:text-white"
                >
                  All Projects
                </NavLink>
                <NavLink 
                  to="/projects/weather" 
                  className="block px-4 py-2 hover:bg-white/10 text-white/90 hover:text-white"
                >
                  Weather Lookup
                </NavLink>
                <NavLink 
                  to="/projects/medical" 
                  className="block px-4 py-2 hover:bg-white/10 text-white/90 hover:text-white"
                >
                  Medical Billing Codes
                </NavLink>
                <NavLink 
                  to="/projects/resume-tailor" 
                  className="block px-4 py-2 hover:bg-white/10 text-white/90 hover:text-white"
                >
                  Resume Tailoring Automator
                </NavLink>
                <NavLink 
                  to="/projects/resume-checker" 
                  className="block px-4 py-2 hover:bg-white/10 text-white/90 hover:text-white"
                >
                  AI Resume Checker for Recruiters
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;