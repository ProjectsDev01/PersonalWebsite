import React from 'react';
import cvFile from '../assets/cv/Bartosz_Golis_CV.pdf';

function CV() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Curriculum Vitae</h1>
      <p className="mb-4">Poniżej skrócona wersja mojego CV. Pełne CV można pobrać jako PDF:</p>
      <a href={cvFile} download="Bartosz_Golis_CV.pdf"
         className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
        Pobierz CV (PDF)
      </a>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Certyfikaty</h2>
        <ul className="list-disc list-inside">
          <li>Set Up an App Dev Environment on Google Cloud (2024)</li>
          <li>ITIL 4 Foundation Certificate in IT (2024)</li>
          <li>Develop Your Google Cloud Network Skill Badge (2025)</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Pełne CV (podgląd)</h2>
        <iframe src={cvFile} width="100%" height="600" title="CV Bartosza Golisa">
          Twój browser nie wyświetla PDF. <a href={cvFile}>Pobierz CV</a>.
        </iframe>
      </section>
    </div>
  );
}

export default CV;
