// src/pages/ResumeTailorPage.tsx
const ResumeTailorPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-950 text-white pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        <h1 className="text-5xl font-bold mb-10 text-sky-400">Resume Tailoring Automator</h1>

        {/* Overview */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-sky-400">Project Overview</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            An n8n-powered automation that takes a job description and a candidate's resume, 
            then uses AI (Groq + Llama 3.3) to intelligently tailor the resume to better match the role.
          </p>
          <p className="text-lg text-white/80 mt-4">
            This solves the common problem of generic resumes that get filtered out by ATS systems.
          </p>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-sky-400">How It Works</h2>
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <ol className="list-decimal list-inside space-y-4 text-white/80 text-lg">
              <li>Input a job description and original resume</li>
              <li>AI analyzes both and identifies key requirements</li>
              <li>Rewrites bullet points and summary to match the job naturally</li>
              <li>Outputs a clean, ATS-friendly tailored resume in Markdown</li>
            </ol>
          </div>
        </div>

        {/* Workflow */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-sky-400">n8n Workflow</h2>
          <div className="bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-white/10 text-center">
            <p className="text-white/70 mb-8 text-lg">
              Ready-to-import workflow from n8n
            </p>
            
            <a 
              href="/resume-tailor-workflow.json" 
              download="resume-tailor-workflow.json"
              className="inline-block bg-sky-600 hover:bg-sky-500 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Download Workflow JSON
            </a>
            
            <p className="text-xs text-white/50 mt-6">
              Place this file in your <code>public</code> folder
            </p>
          </div>
        </div>

        {/* Tech Highlights */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-sky-400">Tech Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black/40 p-6 rounded-2xl border border-white/10">n8n Automation</div>
            <div className="bg-black/40 p-6 rounded-2xl border border-white/10">Groq + Llama 3.3 70B</div>
            <div className="bg-black/40 p-6 rounded-2xl border border-white/10">AI Prompt Engineering</div>
            <div className="bg-black/40 p-6 rounded-2xl border border-white/10">JSON Export</div>
          </div>
        </div>

        <p className="text-center text-white/60 pt-12 text-sm">
          Built as part of my portfolio to demonstrate automation and AI skills.
        </p>
      </div>
    </div>
  );
};

export default ResumeTailorPage;