module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        neonPrimary: '#7f5af0',
        neonAccent: '#d946ef',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #111827, #1f2937)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
