import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 flex justify-between items-center">
      <div className="text-2xl font-extrabold text-neonPrimary">Bartosz Golis</div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-neonAccent transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/o-mnie" className="hover:text-neonAccent transition">
            O mnie
          </Link>
        </li>
        <li>
          <Link to="/projekty" className="hover:text-neonAccent transition">
            Projekty
          </Link>
        </li>
        <li>
          <Link to="/cv" className="hover:text-neonAccent transition">
            CV
          </Link>
        </li>
        <li>
          <Link to="/kontakt" className="hover:text-neonAccent transition">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
