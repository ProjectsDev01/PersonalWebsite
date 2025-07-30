import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Bartosz Golis</div>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
        <li><Link to="/o-mnie" className="hover:text-indigo-400">O mnie</Link></li>
        <li><Link to="/projekty" className="hover:text-indigo-400">Projekty</Link></li>
        <li><Link to="/cv" className="hover:text-indigo-400">CV</Link></li>
        <li><Link to="/kontakt" className="hover:text-indigo-400">Kontakt</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
