/** @type {import('tailwindcss').Config} */

const scrollbar = require('tailwind-scrollbar');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbar,
  ],
};