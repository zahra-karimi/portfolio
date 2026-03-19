import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand text-white py-10">
      <div className="max-w-6xl mx-auto px-6">

  
        <div className="grid md:grid-cols-3 items-center gap-10">
          
        
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Zahra Karimi</h3>
            <p className="text-sm text-white/70">
              Full Stack Developer | Calgary, Canada
            </p>
          </div>

        
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold">Let’s Connect!</h3>

            <p className="text-sm text-white/70 mt-4 max-w-lg">
              Passionate about building clean, modern web applications and
              solving real-world problems.
            </p>

            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://github.com/zahra-karimi"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-accent transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/zahra-karimi456/"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-accent transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/zahra_karimizk"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-accent transition"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:thezahrakarimi1@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-accent transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
      
             <div className="text-center text-sm text-white/60">
              © {new Date().getFullYear()} Zahra Karimi. All rights reserved.
            </div>
          

        </div>

      </div>
    </footer>
  );
}