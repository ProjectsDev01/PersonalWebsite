// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="p-8" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-2">
        I am a graduate of Automation Engineering at Wrocław University of Science and Technology (2024). 
        I'm passionate about automation, cloud computing, and monitoring systems.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
      <ul className="list-disc list-inside">
        <li>Linux, Bash, Kubernetes, Docker, Python, Prometheus, Grafana, Zabbix, OpenStack, Git/GitLab</li>
        <li>Soft skills: teamwork, creativity, problem-solving, communication</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Experience</h2>
      <ul className="list-none">
        <li>
          <strong>Junior NOC Operator @ Cloudferro S.A.</strong> (11.2024 – present) – monitoring OpenStack and Linux systems, using Grafana/Prometheus, incident reporting.
        </li>
        <li>
          <strong>PLC Programmer @ KSC Automation</strong> (02.2023 – 08.2023) – programming PLC controllers, designing SCADA interfaces, creating technical documentation.
        </li>
      </ul>
    </div>
  );
}
