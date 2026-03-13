"use client"

export default function Journey() {

  const journey = [
    {
      title: "Web Developer Intern",
      company: "Collegium",
      date: "Mar 2025 – Oct 2025",
      location: "Calgary, Canada",
      description:
        "Worked on a real estate dashboard using Next.js, Material UI, and Firebase. Built UI components and collaborated closely with the development team in an agile startup environment.",
    },
    {
      title: "Full Stack Development Training",
      company: "InceptionU",
      date: "Sep 2024 – Mar 2025",
      location: "Calgary, Canada",
      description:
        "Participated in agile team-based projects building full-stack applications using React, Node.js, MongoDB, and Express. Developed an interactive Calgary transit map using APIs.",
    },
    {
      title: "Web Designer & Developer",
      company: "Taksa Market",
      date: "Oct 2022 – Dec 2022",
      location: "Remote",
      description:
        "Designed and developed a responsive website using Laravel, Nuxt.js, Vuetify, and MySQL. Delivered a scalable and user-friendly solution for the business.",
    },
    {
      title: "Web Developer",
      company: "Smart Friqi",
      date: "Jan 2021 – Jun 2021",
      location: "Kabul, Afghanistan",
      description:
        "Built web systems including CMS platforms, MIS tools, and real-time chat applications using Laravel, Vue.js, Bootstrap, and Nuxt.js.",
    },
    {
      title: "Bachelor’s Degree – Computer Science",
      company: "Kabul University",
      date: "2017 – 2021",
      location: "Afghanistan",
      description:
        "Studied core computer science topics including algorithms, software engineering, and web technologies.",
    },
    {
      title: "High School Diploma",
      company: "Asaif Mayel",
      date: "2014 – 2016",
      location: "Afghanistan",
      description:
        "Completed high school education with a focus on mathematics and science, building the foundation that led me to pursue Computer Science.",
    },

  ];

  return (
    <section id="journey" className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          My Journey
        </h2>

        <div className="relative border-l-2 border-purple-400">

          {journey.map((item, index) => (
            <div key={index} className="mb-10 ml-6">

          
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-purple-400 rounded-full"></span>

             
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition">

                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-purple-400 text-sm font-medium">
                  {item.company}
                </p>

                <p className="text-xs text-gray-500 mb-2">
                  {item.date} • {item.location}
                </p>

                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}