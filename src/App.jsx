import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-white dark:bg-black text-gray-900 dark:text-white scroll-smooth">
      {/* Fixed Profile Image */}
      <img
        src="/profile.jpg"
        alt="Nkem Moye"
        className="fixed top-6 right-6 w-16 h-16 object-cover rounded-md shadow-lg z-50"
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
