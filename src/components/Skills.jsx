// src/components/Skills.jsx
import React from "react";

const skills = [
  "Project Management",
  "Power BI",
  "Business Analysis",
  "Survey Design",
  "MS PowerPoint",
  "SurveyMonkey",
];

const Skills = () => {
  return (
    <section className="py-16" id="skills">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-6 py-3 rounded-full text-sm font-semibold shadow-md animate-float"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

