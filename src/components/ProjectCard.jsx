import React from 'react';

function ProjectCard({ project }) {
  return (
    <a href={project.html_url} target="_blank" rel="noopener noreferrer"
       className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
      <h2 className="text-xl font-semibold">{project.name}</h2>
      <p className="mt-2 text-gray-300">{project.description}</p>
    </a>
  );
}

export default ProjectCard;
