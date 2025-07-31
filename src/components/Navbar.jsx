// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-neonPrimary">Bartosz Golis</div>

        {/* desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-neonAccent transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-neonAccent transition">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-neonAccent transition">Projects</Link>
          </li>
          <li>
            <Link to="/cv" className="hover:text-neonAccent transition">CV</Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-neonAccent transition">Contact</a>
          </li>
        </ul>

        {/* mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-6 z-50"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="block h-0.5 bg-gray-200"/>
          <span className="block h-0.5 bg-gray-200"/>
          <span className="block h-0.5 bg-gray-200"/>
        </button>
      </nav>

      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* mobile side menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 p-6 transform transition-transform duration-300 z-50 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="mb-8 text-gray-200"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          &#10005;
        </button>
        <ul className="flex flex-col space-y-6">
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="text-gray-200 hover:text-neonAccent">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="text-gray-200 hover:text-neonAccent">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(false)} className="text-gray-200 hover:text-neonAccent">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/cv" onClick={() => setOpen(false)} className="text-gray-200 hover:text-neonAccent">
              CV
            </Link>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="text-gray-200 hover:text-neonAccent">
              Contact
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
