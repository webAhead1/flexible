/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Poppins'],
      },
      colors: {
        navyColor: '#2B4F60',
      },
      height: {
        106: '6.625rem',
      },
    },
  },
  plugins: [],
};
