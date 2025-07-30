import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ProjectsDev01/repos?per_page=100')
      .then(res => res.json())
      .then(data => {
        // sortuj po dacie ostatniego commita i filtruj prywatne, fork itp.
        const filtered = data
          .filter(r => !r.fork && r.stargazers_count > 0)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        setRepos(filtered);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-neonPrimary">Moje Projekty</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map(repo => (
          <ProjectCard key={repo.id} project={repo} />
        ))}
      </div>
    </div>
  );
}
