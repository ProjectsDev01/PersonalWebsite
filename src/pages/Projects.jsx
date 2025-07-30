import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Pobranie listy repozytoriów z GitHub (publiczne)
    fetch('https://api.github.com/users/ProjectsDev01/repos')
      .then(response => response.json())
      .then(data => {
        // Przykładowe filtrowanie projektów
        const relevant = data.filter(repo =>
          repo.name.toLowerCase().includes('detector') ||
          repo.name.toLowerCase().includes('segmentation')
        );
        setProjects(relevant);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projekty</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
