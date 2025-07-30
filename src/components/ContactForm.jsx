import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      // zastąp poniższy URL swoim endpointem (np. Formspree lub własnym API)
      const res = await fetch('https://formspree.io/f/yourFormID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Error sending');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg" data-aos="fade-up">
      <h2 className="text-2xl font-semibold mb-4">Napisz do mnie</h2>

      <label className="block mb-2">
        <span className="text-gray-300">Imię</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-neon"
        />
      </label>

      <label className="block mb-2">
        <span className="text-gray-300">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-neon"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-300">Wiadomość</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          className="w-full mt-1 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-neon"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-2 bg-neon text-white font-semibold rounded hover:bg-opacity-80 transition"
      >
        {status === 'sending' ? 'Wysyłam...' : 'Wyślij wiadomość'}
      </button>

      {status === 'success' && <p className="mt-4 text-green-400">Wiadomość wysłana!</p>}
      {status === 'error'   && <p className="mt-4 text-red-400">Coś poszło nie tak. Spróbuj ponownie.</p>}
    </form>
  );
}
