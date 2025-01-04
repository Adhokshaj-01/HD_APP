/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSerif: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
};

