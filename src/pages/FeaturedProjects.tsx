const projects = [
  {
    href: '/projects/resume-tailor',
    title: 'Resume Tailoring Automator',
    blurb:
      'An n8n agent workflow that rewrites a resume against any job description, with an LLM doing the tailoring. Full workflow included.',
    stack: 'n8n • Groq Llama 3.3 • React',
    tag: 'Case study',
  },
  {
    href: '/projects/weather',
    title: 'Weather Lookup',
    blurb:
      'Real-time conditions and a 7-day forecast for any US city. Built and deployed on AWS Amplify.',
    stack: 'React • TypeScript • AWS Amplify',
    tag: 'Live demo',
  },
  {
    href: '/projects/medical',
    title: 'Medical Billing Code Search',
    blurb:
      'Live ICD-10 and CPT code lookup with smart parsing, built to make a messy reference source usable.',
    stack: 'React • TypeScript • DOM parsing',
    tag: 'Live demo',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight text-center md:text-left">
        Things I&rsquo;ve Built
      </h2>
      <p className="text-gray-300 text-lg mb-10 max-w-3xl">
        I learn by building and supporting real tools. These are things I built and ran, not mockups.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className="group bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-sky-400 hover:bg-black/40 transition-all duration-300 flex flex-col"
          >
            <span className="self-start text-xs uppercase tracking-wide bg-sky-400/20 text-sky-300 px-3 py-1 rounded-full mb-4">
              {p.tag}
            </span>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-sky-400">
              {p.title}
            </h3>
            <p className="text-white/70 mb-6 flex-1">{p.blurb}</p>
            <p className="text-sky-400 text-sm font-medium">{p.stack} &rarr;</p>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center md:text-left">
        <a
          href="/projects"
          className="inline-block text-sky-300 hover:text-sky-200 font-medium border-b border-sky-400/40 hover:border-sky-300 transition-colors"
        >
          See all projects &rarr;
        </a>
      </div>
    </section>
  );
}
