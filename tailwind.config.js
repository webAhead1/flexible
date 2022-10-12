/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*/.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      backgroundColor: "#D7CEC7",
      text: "#989595",
      white: "#FFFFFF",
      red: "#D11F1F",
      back: "#565454",
      black: "#000000",
      navyColor: "#2B4F60",
    },
    height: {
      106: "6.625rem",
    },
  },
  plugins: [],
};
