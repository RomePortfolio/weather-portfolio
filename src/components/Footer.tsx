// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md text-white/70 py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm">
        <p>© 2026 Rome Colmenares • Built with React + TypeScript + Tailwind • Hosted on AWS Amplify</p>
        <p className="mt-2">
          <a 
            href="https://github.com/RomePortfolio/weather-portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            View Source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;