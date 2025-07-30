// src/components/AwardsCertifications.jsx
import React from 'react';

const awards = [
  {
    title: 'Certified Scrum Master (CSM)',
    org: 'Scrum Alliance',
    year: 2023,
  },
  {
    title: 'Project Management Professional (PMP)',
    org: 'PMI',
    year: 2022,
  },
  {
    title: 'Google Project Management Certificate',
    org: 'Google',
    year: 2021,
  },
];

const AwardsCertifications = () => {
  return (
    <section className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Awards & Certifications
      </h2>
      <ul className="max-w-3xl mx-auto space-y-6">
        {awards.map((award, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-purple-600">{award.title}</h3>
            <p className="text-gray-700">
              {award.org} — {award.year}
            </p>
          </li>
        ))}
      </ul>
      <div className="text-center mt-8">
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 font-medium hover:underline"
        >
          See more on LinkedIn →
        </a>
      </div>
    </section>
  );
};

export default AwardsCertifications;
