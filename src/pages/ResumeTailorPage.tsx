// src/pages/ResumeTailorPage.tsx
import ProjectPage from './ProjectPage';

const ResumeTailorPage = () => {
  return (
    <ProjectPage title="Resume Tailoring Automator">
      <div className="max-w-4xl mx-auto px-6 space-y-20">

        {/* Overview */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-sky-400">Project Overview</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            An n8n-powered automation that takes a job description and a candidate&rsquo;s resume,
            then uses an LLM (Groq + Llama 3.3) to rewrite the resume against the language of the
            posting. Built to solve a problem I had myself: tailoring the same resume to dozens of
            roles by hand is slow, and the parts that matter most are the easiest to forget.
          </p>
        </div>

        {/* How it works */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-sky-400">How It Works</h2>
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <ol className="space-y-5 text-white/80 leading-relaxed list-decimal list-inside">
              <li>
                A React front end collects the job description and the original resume and posts
                both to an n8n webhook.
              </li>
              <li>
                The n8n workflow normalizes the two inputs and builds the prompt, keeping the
                resume&rsquo;s factual content fixed and letting only emphasis and phrasing move.
              </li>
              <li>
                A Groq-hosted Llama 3.3 model rewrites the resume against the posting&rsquo;s
                keywords and priorities.
              </li>
              <li>
                The response is cleaned and returned to the page for review and copy-out.
              </li>
            </ol>
          </div>
        </div>

        {/* Design notes */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-sky-400">Design Notes</h2>
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <ul className="space-y-5 text-white/80 leading-relaxed list-disc list-inside">
              <li>
                <span className="text-white font-medium">Sample data built in.</span> A reviewer
                could try the tool without pasting their own resume into someone else&rsquo;s site.
              </li>
              <li>
                <span className="text-white font-medium">Defensive response handling.</span> The
                client accepted several response shapes rather than assuming one, because the
                workflow&rsquo;s output format changed as it was developed.
              </li>
              <li>
                <span className="text-white font-medium">Errors surfaced, not swallowed.</span>
                {' '}A failed call told the user what went wrong instead of silently returning nothing.
              </li>
            </ul>
          </div>
        </div>

        {/* Workflow */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-sky-400">n8n Workflow</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            The complete workflow is available below. Import the JSON into any n8n instance to
            inspect the nodes, the prompt construction and the response handling.
          </p>
          <div className="bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-white/10 text-center">
            <a
              href="/resume-tailor-workflow.json"
              download="resume-tailor-workflow.json"
              className="inline-block bg-sky-600 hover:bg-sky-500 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Download Workflow JSON
            </a>
          </div>
        </div>

        <p className="text-center text-white/60 pt-8 text-sm">
          Built with n8n, Groq Llama 3.3 and React &bull; The hosted demo endpoint is currently
          offline &bull; The full workflow is available above
        </p>
      </div>
    </ProjectPage>
  );
};

export default ResumeTailorPage;
