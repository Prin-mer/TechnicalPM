// src/components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Anthony Obasi",
    quote:
      "Nkem has excellent analytical and communication skills, with a keen eye for detail and collaboration.",
    image: "/testi1.jpg",
  },
  {
    name: "Tosin Okumoye",
    quote:
      "She understands business analysis and effectively engages stakeholders to deliver quality results.",
    image: "/testi2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-[#1f1f1f]" id="testimonials">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">
        Recommendations
      </h2>
      <div className="overflow-x-auto whitespace-nowrap flex gap-6 px-6 animate-scroll">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-lg p-6"
          >
            <img
              src={testi.image}
              alt={testi.name}
              className="w-16 h-16 rounded-full object-cover mb-4 mx-auto"
            />
            <p className="text-sm text-center italic mb-2">"{testi.quote}"</p>
            <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
              {testi.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
