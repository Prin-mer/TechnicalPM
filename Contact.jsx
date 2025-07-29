// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-[#1f1f1f]" id="contact">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
        Let’s Connect
      </h2>
      <div className="text-center">
        <p className="mb-4 text-lg text-gray-700 dark:text-gray-200">
          Interested in collaborating or learning more?
        </p>
        <a
          href="https://www.linkedin.com/in/nkemmoye/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-md transition-all duration-300"
        >
          See More on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
