/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        script: '"Kaushan Script", cursive;',
      },
      colors: {
        light: '#EB5959',
      },
    },
  },
  plugins: [require('daisyui')],
};
