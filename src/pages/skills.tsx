export default function Skills() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-100 drop-shadow-lg">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          "Amazon Web Services (AWS, Lambda, S3, DynamoDB, Amplify)",
          "Cloud Computing Fundamentals",
          "Serverless Architecture",
          "React + TypeScript",
          "Python Programming",
          "Golang",
          "Git & GitHub",
          "Docker & Containers (Basics)",
          "Linux/Unix Basics",
          "Networking & Security",
          "CompTIA Security+",
          "ATD Instructional Design",
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