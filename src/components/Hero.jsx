"use client";

export default function Hero() {
  return (
    <section  className="bg-white py-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand mb-6">
            Zahra Karimi
          </h1>

          <h2 className="text-2xl font-semibold text-brand-accent mb-4">
            Full Stack Developer
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
          I build modern, responsive web applications using technologies like React, Next.js, Node.js, and Tailwind CSS, with a focus on clean design and seamless user experiences.
          I enjoy solving problems and creating clean user experiences.

          </p>

          <a
            href="#projects"
            className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-hover transition duration-300 shadow-md"
          >
            View Projects
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src=""
            alt="Zahra Karimi"
            className="w-[320px] md:w-[380px] h-auto shadow-lg rounded-xl object-cover border-gray-100"
          />
        </div>
      </div>
    </section>
  );
}