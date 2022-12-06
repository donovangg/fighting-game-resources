const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'airdasher': "url('/assets/mr-dolphin.webp')",
        'capcom': "url('/assets/capcom.webp')",
        'fundamentals': "url('/assets/footsies.gif')",
        'bread': "url('/assets/akiha.webp')",
        '3d':  "url('/assets/3d.webp')",
        'submit': "url(/assets/mentos.webp)"
      }
    },
  },
  plugins: [],
}
