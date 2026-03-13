"use client";

export default function Hero() {
  return (
    <section id="about" className="bg-white py-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Zahra Karimi
          </h1>

          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Full Stack Developer
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
            I build modern, responsive web applications using technologies like
            React, Next.js, and Node.js. I enjoy solving problems and creating
            clean user experiences.
          </p>

          <a
            href="#projects"
            className="inline-block bg-purple-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-500 transition duration-300"
          >
            View Projects
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src=""
            alt="Zahra Karimi"
            className="w-[380px] h-auto shadow-xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}