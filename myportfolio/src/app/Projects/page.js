"use client";

import React, { useEffect, useState } from "react";


export default function Projects() {

  const [projects,setProjects]=useState([]);
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/projects/")
    .then(res => res.json())
    .then(data => setProjects(data));
  },[])


  return (
    <main className="bg-black text-white scroll-smooth">

      <section id="projects" className="pt-20 pb-10">
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


    </main>
  );
}
