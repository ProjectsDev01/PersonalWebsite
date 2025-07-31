// src/components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-neonAccent transition-transform transform hover:-translate-y-1 overflow-hidden"
      data-aos="zoom-in"
    >
      <h2
        className="text-2xl font-semibold mb-2 text-white group-hover:text-neonAccent 
                   truncate"
        title={project.name}
      >
        {project.name}
      </h2>
      <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{new Date(project.pushed_at).toLocaleDateString('pl-PL')}</span>
      </div>
    </a>
  );
}
