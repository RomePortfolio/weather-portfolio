const ProjectsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">All Projects</h1>
      <p className="text-center text-white/70 mb-12 text-lg">
        Click any card to explore the full project
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Weather Lookup */}
        <a 
          href="/projects/weather" 
          className="group bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-sky-400 hover:bg-black/40 transition-all duration-300 block"
        >
          <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-sky-400">Weather Lookup</h3>
          <p className="text-white/70 mb-6">Real-time weather and 7-day forecast for any US city. Powered by Open-Meteo.</p>
          <p className="text-sky-400 text-sm font-medium">React • TypeScript • Open-Meteo API →</p>
        </a>

        {/* Medical Billing Codes */}
        <a 
          href="/projects/medical" 
          className="group bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-sky-400 hover:bg-black/40 transition-all duration-300 block"
        >
          <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-sky-400">Medical Billing Codes</h3>
          <p className="text-white/70 mb-6">Live ICD-10 and CPT code search with smart parsing from icd10data.com.</p>
          <p className="text-sky-400 text-sm font-medium">React • TypeScript • DOM Parsing →</p>
        </a>

        {/* Resume Tailoring Automator */}
        <a 
          href="/projects/resume-tailor" 
          className="group bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-sky-400 hover:bg-black/40 transition-all duration-300 block"
        >
          <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-sky-400">Resume Tailoring Automator</h3>
          <p className="text-white/70 mb-6">An n8n agent workflow that rewrites a resume against any job description, with an LLM doing the tailoring. Full workflow included.</p>
          <p className="text-sky-400 text-sm font-medium">n8n • Groq Llama 3.3 • Case study →</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;