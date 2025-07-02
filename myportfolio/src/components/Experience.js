import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Front-End Developer",
      company: "Alex Apps",
      period: "2022 - Present",
      points: [
        "Implementing reusable components.",
        "Participating in large scale application.",
        "Working on the performance of web applications.",
        "Generating new ideas for better user experience.",
      ],
    },
    {
      title: "Course Instructor",
      company: "Nucamp",
      period: "2023 - Present",
      points: [
        "Explaining and facilitating web development concepts.",
        "Help students with their assignments and grade them weekly.",
        "Provide support for students through their learning journey.",
      ],
    },
    {
      title: "Course Instructor",
      company: "Sprints",
      period: "2024 - Present",
      points: [
        "Teaching JavaScript, React and TailwindCSS.",
        "Participating in preparing course materials.",
        "Helping students through their way in learning web development technologies.",
      ],
    },
  ];

  return (
    <div>
      <section id="experience" className="pt-40 pb-16 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-700 mb-16 text-center">Experience</h2>
          <div className="relative border-l-4 border-green-700 pl-8">
            {experiences.map((exp, index) => (
              <div className="mb-14 relative" key={index}>
                <div className="absolute -left-5 top-0 w-4 h-4 bg-green-700 rounded-full"></div>
                <h3 className="text-2xl font-bold text-yellow-300">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
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
