import React from "react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Introduction to Data Analysis Using Excel",
    issuer: "Rice University",
    year: "2023",
  },
  {
    title: "Professional Conduct and Ethics",
    issuer: "CIBN",
    year: "2022",
  },
  {
    title: "Programming for Everybody (Python)",
    issuer: "University of Michigan",
    year: "2021",
  },
];

const AwardsCertifications = () => {
  return (
    <section id="awards" className="py-16 bg-white dark:bg-neutral-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Awards & Certifications
        </motion.h2>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-neutral-100 dark:bg-neutral-800 shadow-md p-6 rounded-xl flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <FaCertificate className="text-yellow-500 text-2xl flex-shrink-0" />
              <div className="text-left">
                <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                  {cert.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {cert.issuer} &middot; {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <a
          href="https://www.linkedin.com/in/nkemmoye/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
        >
          See more on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default AwardsCertifications;
