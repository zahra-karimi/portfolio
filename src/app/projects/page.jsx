"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const projects = [
    {
      title: "Real Estate Dashboard",
      image: "/images/invoice.png",
      description:
        "Contributed to the development of a real estate data management dashboard for a startup environment, and built an AI-powered invoice management system with full CRUD functionality and automated PDF data extraction.",
      tech: ["Next.js", "Express.js", "Node.js", "Firebase", "MUI"],
      link: "https://app.collegiumbuilt.com/login/",
    },
    {
      title: "Bright Path Services",
      image: "/images/BPS.png",
      description:
        "A modern WordPress website for BrightPath Services, offering digital solutions like form submissions, website creation, and branding for small businesses. Designed with a clean, user-friendly interface to showcase services effectively",
      tech: ["WordPress", "PHP", "Elementor", "HTML", "CSS", "JavaScript"],
      link: "https://zahra.wsstraining.ca/",
    },
    {
      title: "Portfolio Website",
      image: "/images/portfolio.png",
      description:
        "A personal developer portfolio showcasing projects, skills, and experience. Built with modern web technologies, it features animations, responsive design, and an intuitive user interface.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/zahra-karimi/portfolio",
    },
    {
      title: "Transit Map",
      image: "/images/transitMap.png",
      description:
        "An interactive web app that helps users explore Calgary’s transit system with link stop and route data. Designed for ease of use, it empowers seniors and travelers with clear, intuitive navigation.",
      tech: [
        "React",
        "Leaflet.js / Google Maps API",
        "Node.js",
        "REST API",
        "Tailwind",
      ],
      link: "https://github.com/EvolveU-FSD/c13-project2-team4",
    },
    {
      title: "Linktree Page",
      image: "/images/linktree.png",
      description:
        "A clean, modern an responsive linktree design to showcase my portfolio and social media links.",
      tech: ["Html", "CSS"],
      link: "https://zahra-karimi.github.io/linktree/",
    },
    {
      title: "E-commerce Website",
      image: "/images/B2B.png",
      description:
        "A business-to-business online platform, enabling efficient product ordering and inventory management. Designed for secure, seamless interactions between institutional clients and suppliers.",
      tech: ["Laravel", "Javascript", "Bootstrap", "Html", "CSS"],
      link: "https://github.com/zahra-karimi/final-project-Business-to-Business",
    },
  ];

  const totalSlides = projects.length;

  // Responsive slides
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const count = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
      setSlidesToShow(count);

      const maxIndex = Math.max(0, totalSlides - count);
      if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, totalSlides]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, totalSlides - slidesToShow);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, totalSlides - slidesToShow);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow]);

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-brand mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-500 mb-12">
          A showcase of my recent work in web development
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-[500px] flex flex-col my-4">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.link}
                          target="_blank"
                          className="bg-white/90 dark:bg-black/90 backdrop-blur-sm text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-white dark:hover:bg-black transition-colors duration-200 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0"
                        >
                          <FaExternalLinkAlt size={12} />
                          View Project
                        </a>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-brand mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs bg-[#F5FBFF] text-brand px-3 py-1 rounded-full border border-[#E0F2FE] hover:bg-[#E0F2FE] transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({
              length: Math.max(0, totalSlides - slidesToShow + 1),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-brand scale-125"
                    : "bg-[#CAE9FF] hover:bg-brand/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
