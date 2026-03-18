import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (

<footer className="bg-gray-900 text-gray-300 py-12">
  <div className="max-w-6xl mx-auto px-6">

    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold text-white">
          Zahra Karimi
        </h3>
        <p className="text-sm text-gray-400">
          Web Developer | Calgary, Canada
        </p>
      </div>

      <div className="flex gap-6 text-xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:thezahrakarimi1@gmail.com"
          className="hover:text-purple-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

    </div>

    <div className="text-center text-sm text-gray-500 mt-8">
      © {new Date().getFullYear()} Zahra Karimi. All rights reserved.
    </div>

  </div>
</footer>
  )
}