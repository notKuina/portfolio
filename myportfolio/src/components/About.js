import React from 'react'

function About() {
  return<div>
    
  <section className="pt-40 pb-16" id="about">
    <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4">

      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
        <h2 className="text-4xl md:text-6xl text-green-700 mb-6 md:mb-10">About Me</h2>
        <p className="mb-6 max-w-xl px-2 md:px-0 text-justify">
          I’m Samjhana, a web developer instructor with a passion for teaching
          and coding. I specialize in React and front-end development, helping
          students build real-world projects and master modern web technologies.
          I also run a YouTube channel, CodeNest, where I create tutorials and
          courses to guide aspiring developers in their journey toward successful
          careers in tech. Outside of coding, I enjoy continuous learning and
          sharing knowledge to inspire others to achieve their goals.
        </p>
        <button id="projectsBtn"
          className="border border-green-700 rounded-full py-2 px-6 text-lg flex gap-2 items-center hover:bg-green-700 transition-all duration-500 cursor-pointer self-center md:self-start">
          <span className="text-white hover:text-white transition-all duration-500">My Projects</span>
        </button>
      </div>
      <div className="relative mt-8 md:mt-0 w-[280px] max-w-[280px] md:max-w-[400px] h-[250px] md:h-[350px] mx-auto">
        <div className="absolute overflow-hidden rounded-[100px] h-full w-full">
          <img src="/images/aboutme.jpeg" alt="About Me Image" className="h-full w-full object-cover" />
        </div>
        <div
          className="absolute bottom-[-20px] left-[-20px] h-full w-[200px] bg-green-700 rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10">
        </div>
      </div>

    </div>
  </section>

  </div>
}

export default About
