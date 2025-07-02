import React from 'react';

const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar 2022",
    align: "right",
    image: "/images/website1.jpeg",
    link: "https://yourusername.github.io/vacation-of-africa-demo/",
    description:
      "A travel landing page showcasing the beauty and culture of Africa using responsive layout and animations.",
  },
  {
    name: "Moola App",
    year: "Sept 2022",
    align: "left",
    image: "/images/website2.jpeg",
    link: "https://github.com/yourusername/moola-app",
    description:
      "A simple budgeting and expense tracking application built with JavaScript and Firebase.",
  },
  {
    name: "Tourzania",
    year: "Jan 2023",
    align: "right",
    image: "/images/website3.jpeg",
    link: "https://yourusername.github.io/tourzania-demo/",
    description:
      "A tourism web app allowing users to explore and book tour packages through a clean UI.",
  },
  {
    name: "Bank of Luck",
    year: "May 2024",
    align: "left",
    image: "/images/website4.jpeg",
    link: "https://github.com/yourusername/bank-of-luck",
    description:
      "A gamified banking concept app designed to teach kids money management through fun interactions.",
  },
];

function Projects() {
  return (
    <section id="projects" className="pt-40 pb-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-4">My Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I have worked on a variety of web development projects, ranging from responsive websites to full-stack applications and complex front-end interfaces.
          </p>
        </div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto">
          {projects.map((project, index) => {
            const alignClass = project.align === "left" ? "md:flex-row" : "md:flex-row-reverse";
            const textAlignClass = project.align === "left" ? "md:text-right" : "md:text-left";

            return (
              <div
                key={index}
                className={`flex w-full sm:flex-col-reverse items-center gap-8 justify-end sm:flex-col ${alignClass}`}
              >
                <div>
                  <h2 className="md:text-3xl sm:text-2xl text-yellow-300">{project.name}</h2>
                  <h3 className={`text-xl font-thin text-white font-serif sm:text-center ${textAlignClass}`}>
                    {project.year}
                  </h3>
                  <p className="text-gray-400 mt-4 mb-2 text-justify">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg flex gap-2 items-center text-green-700 hover:text-yellow-300 transition-all duration-500 cursor-pointer sm:justify-self-center ${
                      project.align === "left" ? "md:justify-self-end" : "md:justify-self-start"
                    }`}
                  >
                    View
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M8 3a.5.5 0 0 1 .5.5v6.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.498.498 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7.5 10.293V3.5A.5.5 0 0 1 8 3z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="relative max-h-[220px] max-w-[400px] rounded-xl overflow-hidden border border-white transition-transform duration-500 hover:scale-110">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
