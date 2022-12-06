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
        'airdasher': "url('/assets/mr-dolphin.jpeg')",
        'capcom': "url('/assets/capcom.webp')",
        'fundamentals': "url('/assets/footsies.gif')",
        'bread': "url('/assets/akiha.jpeg')",
        '3d':  "url('/assets/3d.png')",
        'submit': "url(/assets/mentos.webp)"
      }
    },
  },
  plugins: [],
}
