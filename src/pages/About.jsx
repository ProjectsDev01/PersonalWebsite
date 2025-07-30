function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">O mnie</h1>
      <p className="mb-2">Jestem absolwentem Inżynierii Automatyki na Politechnice Wrocławskiej (2024). Pasjonuję się automatyką, chmurą obliczeniową i systemami monitoringu.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Umiejętności</h2>
      <ul className="list-disc list-inside">
        <li>Linux, Bash, Kubernetes, Docker, Python, Prometheus, Grafana, Zabbix, OpenStack, Git/GitLab</li>
        <li>Soft skills: praca zespołowa, kreatywność, rozwiązywanie problemów, komunikacja</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Doświadczenie</h2>
      <ul className="list-none">
        <li><strong>Junior NOC Operator @ Cloudferro S.A.</strong> (11.2024 – obecnie) – monitoring OpenStack i Linux, narzędzia Grafana/Prometheus, zgłaszanie incydentów.</li>
        <li><strong>PLC Programmer @ KSC Automation</strong> (02.2023 – 08.2023) – programowanie sterowników PLC, projektowanie interfejsów SCADA, dokumentacja techniczna.</li>
      </ul>
    </div>
  );
}
