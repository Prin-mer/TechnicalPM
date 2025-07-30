import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 px-4 text-sm mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} NKEM MOYE — All Rights Reserved.
        </p>
        <div className="flex items-center gap-4 text-gray-400">
          <a
            href="https://www.linkedin.com/in/nkemmoye/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="hover:text-white transition"
          >
            Resume
          </a>
          <a
            href="mailto:nkem.moye@example.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
