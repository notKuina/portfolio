import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/skills/")
      .then((res) => setSkills(res.data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  return (
    <section id="skills" className="pt-20 pb-10 text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-green-600 text-center">
          My Skills
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* if icon is devicon class */}
              {skill.icon?.startsWith("devicon") && (
                <i className={`${skill.icon} colored text-7xl`}></i>
              )}

              {/* if icon is an image URL */}
              {skill.icon?.startsWith("http") && (
                <div className="bg-white p-2 rounded">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 object-contain"
                    loading="lazy"
                  />
                </div>
              )}

              <p className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
