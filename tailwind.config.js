/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      boxShadow: {
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        backgroundColor: "#D7CEC7",
        text: "#989595",
        red: "#D11F1F",
        back: "#565454",
        white: "#FFFFFF",
        black: "#000000",
        navyColor: "#2B4F60",
      },
      height: {
        106: "6.625rem",
      },
    },
  },
  plugins: [],
};
