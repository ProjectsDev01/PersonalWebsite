// src/components/ServiceHero.jsx
import React from 'react';

export default function ServiceHero({ title, subtitle, description, children, id }) {
  return (
    <section id={id} className="relative bg-gray-900 text-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
        {/* Illustration/animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-neonPrimary to-neonAccent rounded-full animate-pulse-slow relative overflow-hidden">
            {children}
          </div>
        </div>
        {/* Text block */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-white">{title}</h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
          <p className="text-gray-400 leading-relaxed">{description}</p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 inline-block px-6 py-3 bg-neonAccent text-gray-900 font-semibold rounded-full hover:bg-neonPrimary transition"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}