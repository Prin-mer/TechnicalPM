// src/components/Testimonials.jsx

import React from "react";

const testimonials = [
  {
    name: "Anthony Obasi",
    image: "/testimonials/anthony.jpg",
    quote:
      "Nkem’s analytical, communication, problem-solving, and teamwork skills are truly impressive.",
  },
  {
    name: "Tosin Okumoye",
    image: "/testimonials/tosin.jpg",
    quote:
      "He has a firm grasp of business analysis knowledge areas and engages stakeholders effectively.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">
        Testimonials
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="max-w-sm text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md"
          >
            <img
              src={testi.image}
              alt={testi.name}
              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-purple-500 mb-4"
            />
            <p className="italic text-gray-700 dark:text-gray-200 mb-2">
              “{testi.quote}”
            </p>
            <p className="font-semibold text-purple-600">{testi.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
￼Enter
