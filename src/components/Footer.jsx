// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 py-4 mt-16">  {/* mniejszy padding: py-4 zamiast py-8 */}
      <div className="container mx-auto text-center text-gray-400 space-y-2">
        <h2 className="text-xl font-semibold text-gray-200">Get in Touch</h2>
        <div>
          <p>Email: <a href="mailto:bartosz.golis9@gmail.com" className="text-neonAccent hover:underline">
            bartosz.golis9@gmail.com
          </a></p>
          <p>Phone: <a href="tel:+48570067406" className="text-neonAccent hover:underline">
            +48 570 067 406
          </a></p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/ProjectsDev01" target="_blank" rel="noopener noreferrer"
             className="hover:text-neonAccent transition">GitHub</a>
          <a href="https://linkedin.com/in/bartosz-golis-915172258" target="_blank" rel="noopener noreferrer"
             className="hover:text-neonAccent transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
