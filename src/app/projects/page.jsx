"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const projects = [
      {
      title: "Invoice Management System",
      image: "/images/invoice.png",
      description:
        "Simplifies invoice submission and tracking with full CRUD functionality. AI-powered PDF extraction automates data entry, while the platform keeps vendors and project owners informed.",
      tech: ["Next.js","Express.js", "Node.js", "Firebase","MUI"],
      github: "https://github.com/Collegium-software/collegium-app",
      live: "https://app.collegiumbuilt.com/login/",
    },
    {
      title: "Bright Path Services",
      image: "/images/BPS.png",
      description:
        "A modern WordPress website for BrightPath Services, offering digital solutions like form submissions, website creation, and branding for small businesses. Designed with a clean, user-friendly interface to showcase services effectively",
      tech: ["WordPress", "PHP", "Elementor","HTML","CSS","JavaScript"],
      github: "https://zahra.wsstraining.ca/",
      live: "https://zahra.wsstraining.ca/",
    },
    {
      title: "Portfolio Website",
      image: "/images/portfolio.png",
      description:
        "A personal developer portfolio showcasing projects, skills, and experience. Built with modern web technologies, it features animations, responsive design, and an intuitive user interface.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "",
      live: "",
    } 
    ,
    {
      title: "Transit Map",
      image: "/images/transitMap.png",
      description:
        "An interactive web app that helps users explore Calgary’s transit system with live stop and route data. Designed for ease of use, it empowers seniors and travelers with clear, intuitive navigation.",
      tech: ["React","Leaflet.js / Google Maps API","Node.js", "REST API","Tailwind"],
      github: "https://github.com/EvolveU-FSD/c13-project2-team4",
      live: "https://github.com/EvolveU-FSD/c13-project2-team4",
    },
   
    {
      title: "E-commerce Website",
      image: "/images/ecomerce.png",
      description:
        "A business-to-business online platform, enabling efficient product ordering and inventory management. Designed for secure, seamless interactions between institutional clients and suppliers.",
      tech: ["Laravel", "Javascript", "Bootstrap","Html","CSS"],
      github: "",
      live: "",
    },
    {
      title: "Linktree Page",
      image: "/images/linktree.png",
      description: "This is my very first  responsive website design. It’s a simple Linktree-style page to showcase my portfolio and social media links.",
      tech: ["Html", "CSS"],
      github: "https://zahra-karimi.github.io/linktree/",
      live: "https://zahra-karimi.github.io/linktree/",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-500 mb-12">
          A showcase of my recent work in web development
        </p>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="max-w-5xl mx-auto relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="!w-[320px] md:!w-[360px] flex justify-center"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition w-full max-w-xs md:max-w-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-sm px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
