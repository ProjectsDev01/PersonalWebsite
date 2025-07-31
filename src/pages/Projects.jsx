import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ProjectsDev01/repos?per_page=100')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch repos');
        return res.json();
      })
      .then(data => {
        // Pomijamy forki, ale nie filtrujemy po gwiazdkach
        const filtered = data
          .filter(r => !r.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        setRepos(filtered);
      })
      .catch(err => {
        console.error(err);
        // Możesz tu ustawić stan błędu i wyświetlić komunikat w UI
      });
  }, []);

  return (
    <div className="p-8" data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-6 text-neonPrimary">My Projects</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map(repo => (
          <ProjectCard key={repo.id} project={repo} />
        ))}
      </div>
    </div>
  );
}
