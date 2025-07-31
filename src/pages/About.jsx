// src/pages/About.jsx
import React from 'react';
import ServiceHero from '../components/ServiceHero';

export default function About() {
  return (
    <>
      {/* Intro Section */}
      <section className="p-8 bg-gray-900 text-gray-100" data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-neonPrimary">About Me</h1>
          <p className="text-lg text-gray-300">
            I hold a B.Eng in Industrial Automation with a specialization in Power Systems Control (ASE) from
            Wrocław University of Science and Technology (Oct 2020 – Feb 2024), and an M.Sc in Automation IT
            Systems specializing in Information Technologies Applications (ISA) (Mar 2024 – Jul 2025). After
            graduation, I relocated to Warsaw and embarked on my journey as a Junior NOC Operator managing
            OpenStack cloud environments. Previously, I gained hands-on experience programming PLC controllers
            and designing SCADA interfaces.
          </p>
        </div>
      </section>

      {/* Service Heroes */}
      <ServiceHero
        id="cloud"
        title="Cloud & DevOps Services"
        subtitle="Robust, scalable infrastructure and CI/CD pipelines"
        description="I deliver end-to-end cloud solutions: designing and maintaining OpenStack environments,
                  automating deployments with Kubernetes, Docker, Ansible, and managing storage with Ceph.
                  Offering fully automated CI/CD, advanced monitoring with Prometheus & Grafana, and GitOps workflows."
      >
        {/* SVG Animation: rotating cloud */}
        <svg
          className="absolute inset-0 mx-auto my-auto w-48 h-48 animate-spin-slow text-neonAccent"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a3 3 0 000-6 5 5 0 00-9.9-.5A4 4 0 003 15z"
          />
        </svg>
      </ServiceHero>

      <ServiceHero
        id="automation"
        title="Automation & SRE Excellence"
        subtitle="Infrastructure as Code & Reliable Operations"
        description="Specializing in writing Ansible playbooks, Terraform modules, and Helm charts.
                  I implement SRE best practices: incident response, runbooks, chaos testing,
                  and ensure 99.9% uptime through proactive monitoring and alerting."
      >
        {/* CSS Animation: pulsing line */}
        <div className="absolute bottom-10 left-1/4 w-1/2 h-1 bg-neonPrimary animate-pulse-slow"></div>
      </ServiceHero>

      <ServiceHero
        id="ai"
        title="AI & Machine Learning"
        subtitle="From prototyping to production"
        description="Building and deploying neural network models in Python: data preprocessing,
                  training with TensorFlow/PyTorch, and integrating ML APIs. Experienced in
                  MATLAB simulations and GPU-accelerated workflows."
      >
        {/* CSS Animation: blinking dot */}
        <div className="absolute top-10 right-1/4 w-4 h-4 bg-neonAccent rounded-full animate-pulse-slow"></div>
      </ServiceHero>

      {/* Add more ServiceHero blocks as needed... */}
    </>
  );
}
