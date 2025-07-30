export default function ProjectCard({ project }) {
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-neonAccent transition"
      data-aos="zoom-in"
    >
      <h2 className="text-2xl font-semibold mb-2 text-neonAccent">{project.name}</h2>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="text-sm text-gray-400 flex justify-between">
        <span>⭐ {project.stargazers_count}</span>
        <span>🕒 {new Date(project.pushed_at).toLocaleDateString('pl-PL')}</span>
      </div>
    </a>
  );
}
