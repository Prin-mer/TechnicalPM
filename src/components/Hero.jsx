// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-center px-6">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold text-purple-600 mb-4 animate-fall-in">
          NKEM MOYE
        </h1>
        <p className="text-xl md:text-3xl text-gray-700 typing-animation">
          TECHNICAL PROJECT MANAGER
        </p>
      </div>
    </section>
  );
};

export default Hero;
