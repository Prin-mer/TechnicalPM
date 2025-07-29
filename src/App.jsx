import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import AwardsCertifications from "./components/AwardsCertifications";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <AwardsCertifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
