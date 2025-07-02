import React from 'react';

function Skills() {
  return (
    <section id="skills" className="pt-40 pb-16 text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-green-600 text-center">My Skills</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12">

          <div className="flex flex-col items-center group cursor-pointer">
            <i className="devicon-html5-plain colored text-7xl"></i>
            <p className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              HTML
            </p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <i className="devicon-css3-plain colored text-7xl"></i>
            <p className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              CSS
            </p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <i className="devicon-javascript-plain colored text-7xl"></i>
            <p className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              JavaScript
            </p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <i className="devicon-github-original text-7xl"></i>
            <p className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              GitHub
            </p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <i className="devicon-react-original colored text-7xl"></i>
            <p className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ReactJS
            </p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <i className="devicon-redux-original colored text-7xl"></i>
            <p className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Redux
            </p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="bg-white p-2 rounded">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                alt="NextJS"
                className="w-20 h-20 object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              NextJS
            </p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <i className="devicon-tailwindcss-plain colored text-7xl"></i>
            <p className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              TailwindCSS
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Skills;
