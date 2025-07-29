import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CV Website",
    description: "A clean CV-style portfolio for a Nigerian copywriter.",
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-username/cv-website",
  },
  {
    title: "Data Dashboard",
    description: "Interactive dashboard for tracking performance KPIs.",
    demoLink: "#",
    githubLink: "#",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-purple-600">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-100 text-sm"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
