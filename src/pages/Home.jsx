// src/pages/Home.jsx
export default function Home() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-hero-gradient"
      data-aos="fade-down"
    >
      <h1 className="text-6xl font-extrabold mb-4 leading-tight text-neonPrimary">
        Cześć, jestem Bartosz Golis
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mb-8">
        DevOps & Automation Engineer | Python | Kubernetes | Docker
      </p>
      <a
        href="/o-mnie"
        className="px-8 py-3 bg-neonAccent rounded-full text-lg font-semibold animate-pulse hover:animate-none transition"
      >
        Dowiedz się więcej
      </a>
    </section>
  );
}
