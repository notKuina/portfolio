import React from 'react'

function Hero() {
    const scrollToContact=()=>{
        const contactSection= document.getElementById("contact");
        if(contactSection){
            contactSection.scrollIntoView({behavior: "smooth"});
        }
    };
  return <>
  
  <section className="pt-40 pb-16">
    <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4">
      <div id="hero-text" className=" md:w-1/2  text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Welcome to My Portfolio</h1>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          I build amazing web experiences using modern technologies.
        </p>
        <button
         onClick={scrollToContact}
          className="border border-green-700 rounded-full py-2 px-4 text-base md:text-lg   gap-2 items-center mt-6 md:mt-10 hover:bg-green-700 transition-all duration-500 cursor-pointer self-center md:self-start">
          <span className="text-white hover:text-white transition-all duration-500"> Get in Touch</span>
        </button>
      </div>

      <div id="hero-pic" className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
        <img src="/images/pfp.jpeg" alt="samjhana"
          className="w-full max-w-[400px] md:max-w-[570px] rounded-lg shadow-lg z-10 object-cover" />

        <div className="absolute bottom-[-20%] -z-10 flex justify-center items-center rotate-90 w-full h-full">
          <i
            className="fas fa-hexagon text-orange-500 opacity-70 md:h-[90%] sm:h-[120%] min-h-[600px] animate-spin-slow text-[500px]"></i>
        </div>

        <div className="absolute bottom-[-20%] -z-10 flex justify-center items-center rotate-90 w-full h-full">
          <i
            className="fas fa-hexagon text-orange-500 opacity-70 blur-lg md:h-[90%] sm:h-[120%] min-h-[600px] animate-spin-slow text-[500px]"></i>
        </div>

        <div className="absolute bottom-[-20%] -z-10 flex justify-center items-center w-full h-full">
          <i
            className="fas fa-hexagon text-green-700 opacity-70 md:h-[90%] sm:h-[120%] min-h-[600px] animate-spin-slow text-[500px]"></i>
        </div>

        <div className="absolute bottom-[-20%] -z-10 flex justify-center items-center w-full h-full">
          <i
            className="fas fa-hexagon text-green-700 opacity-70 blur-lg md:h-[90%] sm:h-[120%] min-h-[600px] animate-spin-slow text-[500px]"></i>
        </div>
      </div>
    </div>
  </section>

  </>
}

export default Hero
