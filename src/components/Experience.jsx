import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        {/* PalmPay */}
        <div className="flex items-center space-x-4 mb-4">
          <img src="/logos/palmpay.png" alt="PalmPay Logo" className="w-10 h-10 object-contain" />
          <div>
            <h3 className="text-xl font-semibold">PalmPay</h3>
            <p className="text-gray-700">Technical Project Manager</p>
            <p className="text-sm text-gray-600">2021 – Present</p>
          </div>
        </div>

        {/* Union Bank */}
        <div className="flex items-center space-x-4 mb-6">
          <img src="/logos/unionbank.png" alt="Union Bank Logo" className="w-10 h-10 object-contain" />
          <div>
            <h3 className="text-xl font-semibold">Union Bank</h3>
            <p className="text-gray-700">Business Analyst (Contract)</p>
            <p className="text-sm text-gray-600">2019 – 2021</p>
          </div>
        </div>

        {/* See More Button */}
        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/nkemmoye/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            See more on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
￼Enter
