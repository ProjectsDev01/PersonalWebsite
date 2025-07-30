import React from 'react';

function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
      <p className="mb-2"><strong>Email:</strong> <a href="mailto:bartosz.golis9@gmail.com" className="text-indigo-400">bartosz.golis9@gmail.com</a></p>
      <p className="mb-2"><strong>Telefon:</strong> +48 570 067 406</p>
      <div className="flex space-x-4">
        <a href="https://github.com/ProjectsDev01" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">GitHub</a>
        <a href="https://linkedin.com/in/bartosz-golis-915172258" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">LinkedIn</a>
      </div>
      {/* Opcjonalnie można dodać formularz kontaktowy zamiast lub obok powyższych danych */}
    </div>
  );
}

export default Contact;
