export default function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white tracking-tight text-center md:text-left">
        About Me
      </h2>

      {/* Photo + intro */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-10">
        {/* Portrait  */}
        <div className="shrink-0 mx-auto md:mx-0">
          <img
            src="/images/rome-portrait2.jpg"
            alt="Rome Colmenares portrait"
            className="w-64 h-80 md:w-80 md:h-96 rounded-[40%] object-cover shadow-2xl border-4 border-gray-700 hover:border-blue-500 transition-colors duration-300"
          />
        </div>

        {/* Intro text */}
        <div className="flex-1 space-y-6 text-gray-200 text-lg leading-relaxed">
          <p>
            I pair an <strong className="text-blue-300">A.A.S. in Cloud Computing</strong> and a <strong className="text-blue-300">CompTIA Security+</strong> certification (DoD 8570 <strong className="text-blue-300">IAT Level II</strong>) with <strong className="text-blue-300">20+ years of front-line technical support</strong> in high-stakes environments: critical logistics for the airline industry, where my station posted the <strong className="text-blue-300">lowest error rate by volume</strong> of any station handling United Airlines’ PetSafe program.
          </p>

          <p className="flex-1 space-y-6 text-gray-200 text-lg leading-relaxed">
            Today I run <strong className="text-blue-300">Birdseed Studios</strong>, where I build and support a production web application on Cloudflare and AWS, including LLM-powered features on the Claude API and multi-step automation workflows in n8n and Python. I am the person people come to when something breaks, and I am just as comfortable teaching the fix as making it.
          </p>
        </div>
      </div>

      {/* content */}
      <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
        {/* Bullets */}
        <ul className="space-y-4 pl-6 list-none">
          <li className="flex items-start gap-4">
            <span className="text-2xl text-blue-400 mt-1">→</span>
            <span>Technical support &amp; troubleshooting: two decades as the first point of contact by phone, email, and in person, resolving issues end to end and documenting every case.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl text-blue-400 mt-1">→</span>
            <span>Training &amp; instructional design (ATD): built and delivered technical training, e-learning, and documentation that turn complex requirements into clear, usable learning.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl text-blue-400 mt-1">→</span>
            <span>Dispatch, logistics &amp; operations: 20+ years coordinating schedules, handoffs, and resources across multiple parties, triaging what breaks in real time under tight deadlines.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl text-blue-400 mt-1">→</span>
            <span>Management &amp; leadership: led and mentored teams, resolved conflicts, and drove performance and process improvement in results-oriented settings.</span>
          </li>
        </ul>

        {/* Transition paragraph */}
        <p>
          I am looking for a role in <strong className="text-blue-300">IT support, help desk, service desk, or technical training</strong>, remote or in the College Station and Bryan, Texas area. Security, identity and access, and cloud support are where I want to keep growing, and my Security+ and A.A.S. are pointed that direction.
        </p>

        {/* Personal note */}
        <p className="italic text-gray-300 border-l-4 border-blue-500 pl-6 py-2">
          Outside of tech, I enjoy SciFi, animal training, and tabletop roleplaying games, always looking for ways to blend curiosity with practical problem-solving.
        </p>
      </div>
    </section>
  );
}