import React from "react";
import Testimonials from "./components/Testimonials";
import "./index.css"; // Assuming Tailwind is imported here

function App() {
  return (
    <div className="relative font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Fixed profile picture */}
      <img
        src="/profile.jpg"
        alt="Nkem Moye"
        className="fixed top-6 right-6 w-16 h-16 object-cover rounded-md shadow-lg z-50"
      />

      {/* Navigation (optional) */}
      <header className="p-6 sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-md">
        <nav className="flex justify-center gap-6 text-sm md:text-base font-medium text-purple-600">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Sections */}
      <main className="px-4 md:px-8 lg:px-20">
        {/* About section placeholder */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">About Me</h2>
          <p>
            I'm Nkem Moye, a Technical Project Manager passionate about data analytics, business analysis, and digital solutions.
          </p>
        </section>

        {/* Projects section placeholder */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Projects</h2>
          <p>Coming soon: Explore some of the impactful digital solutions I've led.</p>
        </section>

        {/* Testimonials section (full component) */}
        <Testimonials />

        {/* Contact section placeholder */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Get in Touch</h2>
          <p>Let’s connect on <a href="https://www.linkedin.com/in/nkemmoye/" className="text-yellow-500 underline">LinkedIn</a>.</p>
        </section>
      </main>

      {/* Footer (optional) */}
      <footer className="text-center text-sm py-8 text-gray-500">
        © {new Date().getFullYear()} Nkem Moye. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
￼Enter
