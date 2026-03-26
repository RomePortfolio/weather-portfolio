// src/pages/home.tsx
import { useEffect } from 'react';
import About from './about';
import Skills from './skills';
import Contact from './contact';

const ScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 200);
    }
  }, [window.location.hash]);

  return null;
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-4">   {/* Reduced top padding */}
      <ScrollToHash />

      {/* About Section - Aligned left with photo frame */}
      <div id="about" className="-ml-6">   {/* Slight left shift to align "R" and "A" */}
        <About />
      </div>

      {/* Skills Section */}
      <div id="skills" className="mt-24 -ml-6">
        <Skills />
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-24 -ml-6">
        <Contact />
      </div>
    </div>
  );
}