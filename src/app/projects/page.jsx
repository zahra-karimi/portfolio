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
      title: "Transit Map",
      image: "/images/transitMap.png",
      description:
        "Interactive transit map showing nearby stops and routes with live data.",
      tech: ["React", "Node.js", "API"],
      github: "",
      live: "",
    },
    {
      title: "Invoice Management System",
      image: "/images/invoice.png",
      description:
        "Interactive transit map showing nearby stops and routes with live data.",
      tech: ["React", "Node.js", "API"],
      github: "",
      live: "",
    },
    {
      title: "E-commerce Website",
      image: "/images/ecomerce.png",
      description:
        "Interactive transit map showing nearby stops and routes with live data.",
      tech: ["React", "Node.js", "API"],
      github: "",
      live: "",
    },
    {
      title: "Linktree Page",
      image: "/images/linktree.png",
      description: "A responsive personal link page inspired by Linktree.",
      tech: ["Next.js", "Tailwind"],
      github: "",
      live: "",
    },
    {
      title: "Portfolio Website",
      image: "/images/portfolio.png",
      description:
        "Personal developer portfolio with animations and modern UI.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "",
      live: "",
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
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="max-w-5xl mx-auto relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
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