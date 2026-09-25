export default function Skills() {
  return (
    <section id="skills" className="mb-16">
    {/* skills */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-100 drop-shadow-lg">
        Skills
      </h2>
    {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          "IT Support & Help Desk",
          "CompTIA Security+ (DoD 8570 IAT Level II)",
          "Windows & Microsoft 365",
          "Issue Tracking & ITSM Fundamentals (Jira)",
          "Active Directory & Access Management",
          "Networking & Security Fundamentals",
          "ATD Instructional Design & Technical Training",
          "Technical Writing & Documentation",
          "LLM / Claude API & Agentic Workflows",
          "n8n Automation",
          "Python & SQL",
          "React + TypeScript",
          "Amazon Web Services (Lambda, S3, DynamoDB, Amplify)",
          "Cloudflare (Workers, D1, Pages)",
          "Git & GitHub",
          "Linux/Unix & Docker",

        ].map((skill, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 border border-gray-600/50 text-center font-medium text-gray-100"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}