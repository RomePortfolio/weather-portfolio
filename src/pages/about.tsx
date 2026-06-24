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
            I pair an <strong className="text-blue-300">Associate’s degree in Cloud Computing</strong> and a <strong className="text-blue-300">CompTIA Security+</strong> certification with <strong className="text-blue-300">decades of professional experience</strong> in high-stakes environments — critical logistics for the airline industry and private contracting. The result is an early-career technologist who already knows how to lead teams, communicate clearly, and stay calm under pressure.
          </p>

          <p className="flex-1 space-y-6 text-gray-200 text-lg leading-relaxed">
            I’m passionate about serverless architecture and AWS, and I build practical, user-focused applications — currently deepening my skills in React + TypeScript, Python, and Golang. I bring both the hard and soft skills that make me a critical asset to any diverse team.
          </p>
        </div>
      </div>

      {/* content */}
      <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
        {/* Bullets */}
        <ul className="space-y-4 pl-6 list-none">
          <li className="flex items-start gap-4">
            <span className="text-2xl text-blue-400 mt-1">→</span>
            <span>Training & instruction — designed and delivered complex training programs for diverse teams, translating technical concepts into clear, actionable learning.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl text-blue-400 mt-1">→</span>
            <span>Communications — excelled in stakeholder management, clear documentation, and cross-functional collaboration across departments and leadership levels.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl text-blue-400 mt-1">→</span>
            <span>Logistics & operations — managed large-scale coordination, resource allocation, and process optimization under tight deadlines and high pressure.</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl text-blue-400 mt-1">→</span>
            <span>Management & leadership — led teams, mentored professionals, resolved conflicts, and drove performance in dynamic, results-oriented settings.</span>
          </li>
        </ul>

        {/* Transition paragraph */}
        <p>
          Now channeling that real-world expertise into cloud technologies — eager to bring proven leadership, communication, and operational skills to an entry-level cloud, support, security (SOC), or developer role.
        </p>

        {/* Personal note */}
        <p className="italic text-gray-300 border-l-4 border-blue-500 pl-6 py-2">
          Outside of tech, I enjoy SciFi, animal training, and playing table top roleplaying games — always looking for ways to blend curiosity with practical problem-solving.
        </p>
      </div>
    </section>
  );
}