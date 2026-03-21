import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section id="about" className="bg-white py-6">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-center text-brand mb-8">
          About Me
        </h2>

        <p className="text-gray-600 mb-8 text-lg leading-relaxed text-justify">
          I’m a software engineer with a background in full-stack web
          development. My journey in computer science has empowered me to tackle
          diverse and dynamic web projects, turning innovative ideas into
          functional and engaging digital experiences. I take pride in being a
          quick learner and a self-starter, always eager to embrace new
          challenges and technologies. My enthusiasm for programming drives me
          to continuously improve and expand my skill set, enabling me to
          deliver high-quality solutions that meet user needs. I’m excited to
          connect with like-minded professionals and explore opportunities where
          I can contribute my skills and passion for web development.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="flex gap-4">
            {[
              {
                href: "https://www.linkedin.com/in/zahra-karimi456/",
                icon: <FaLinkedin />,
              },
              { href: "https://github.com/zahra-karimi", icon: <FaGithub /> },
              {
                href: "https://instagram.com/zahra_karimizk",
                icon: <FaInstagram />,
              },
              {
                href: "mailto:thezahrakarimi1@gmail.com",
                icon: <FaEnvelope />,
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-brand hover:text-white transition"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <a
            href="/Zahra_Karimi_Resume.pdf"
            download
            className=" inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-hover transition duration-300 shadow-md"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
