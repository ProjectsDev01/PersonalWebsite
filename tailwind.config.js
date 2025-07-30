// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        neonPrimary: '#7f5af0',
        neonAccent: '#d946ef',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      }
    },
  },
  plugins: [],
};
