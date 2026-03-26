export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-100 drop-shadow-lg">
        Contact
      </h2>

      {/* connect */}
      <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-10 max-w-3xl">
        I am eager to bring my blend of <strong className="text-blue-300">technical curiosity</strong> and proven{" "}
        <strong className="text-blue-300">operational skills</strong> to work for you — let's connect!
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
        <a
          href="mailto:romanaegis@gmail.com"
          className="bg-linear-to-r from-blue-700 to-indigo-700 text-white px-8 py-4 rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl font-medium text-lg inline-flex items-center justify-center min-w-45"
        >
          Email Me
        </a>
        <a
          href="https://github.com/romanaegis"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-r from-blue-700 to-indigo-700 text-white px-8 py-4 rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl font-medium text-lg inline-flex items-center justify-center min-w-45"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rome-colmenares/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-r from-blue-700 to-indigo-700 text-white px-8 py-4 rounded-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl font-medium text-lg inline-flex items-center justify-center min-w-45"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}