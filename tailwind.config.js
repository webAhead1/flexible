/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      boxShadow: {
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        backgroundColor: '#D7CEC7',
        text: '#989595',
        white: '#FFFFFF',
        red: '#D11F1F',
        back: '#565454',
        black: '#000000',
        navyColor: '#2B4F60',
      },
      height: {
        106: '6.625rem',
      },
      backgroundImage: {
        bg2: "url('src/assets/img/a.jpg')",
        bg1: "url('src/assets/img/b.jpg')",
        t1: "url('src/assets/img/t1.png')",
        t2: "url('src/assets/img/t2.png')",
        t3: "url('src/assets/img/t3.png')",
        t4: "url('src/assets/img/t4.png')",
      },
    },
  },
};
