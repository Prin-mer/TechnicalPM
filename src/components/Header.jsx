import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-bold text-yellow-500">NKEM MOYE</div>
        <nav className="space-x-4 text-sm font-medium hidden md:block">
          <a href="#about" className="text-gray-700 hover:text-yellow-600">About</a>
          <a href="#experience" className="text-gray-700 hover:text-yellow-600">Experience</a>
          <a href="#testimonials" className="text-gray-700 hover:text-yellow-600">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-yellow-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}
