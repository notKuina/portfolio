import React, { useEffect, useState } from 'react';

function Experience() {
  const[experience,setExperience]=useState([]);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/experiences/")
    .then((res) =>res.json())
    .then((data) =>setExperience(data))
    .catch((err) =>console.error("Error fetching experiences:", err));
  },[]);

  return (
    <div>
      <section id="experience" className="pt-20 pb-10 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-700 mb-16 text-center">Experience</h2>
          <div className="relative border-l-4 border-green-700 pl-8">
            {experience.map((exp) => (
              <div className="mb-14 relative" key={exp.id}>
                <div className="absolute -left-5 top-0 w-4 h-4 bg-green-700 rounded-full"></div>
                <h3 className="text-2xl font-bold text-yellow-300">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.start_date}----{exp.end_date}</p>
                <ul className="list-disc list-inside text-gray-300">
                  {exp.points.map((point) => (
                    <li key={point.id}>{point.text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;



