// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-600">Nkem Moye</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-purple-500">About</a>
          <a href="#skills" className="hover:text-purple-500">Skills</a>
          <a href="#awards" className="hover:text-purple-500">Awards</a>
          <a href="#testimonials" className="hover:text-purple-500">Testimonials</a>
          <a href="#contact" className="hover:text-purple-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
