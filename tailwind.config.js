/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Poppins']
      },
      colors: {
        navyColor:'#2B4F60'
      },
      height: {
        '106': '6.625rem',
      },
    },
  },
  plugins: [],
}
