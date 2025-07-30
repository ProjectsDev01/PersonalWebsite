// tailwind.config.js
module.exports = {
  darkMode: 'class', // tryb ciemny sterowany klasą
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        neon: '#4c1d95', // przykładowy kolor neonowy
      },
    },
  },
  plugins: [],
};
