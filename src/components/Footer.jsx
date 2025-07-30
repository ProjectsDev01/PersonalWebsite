// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 mt-16">
      <div className="container mx-auto text-center text-gray-500">
        © {new Date().getFullYear()} Bartosz Golis — Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
