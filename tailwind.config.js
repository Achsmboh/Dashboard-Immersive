/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        biruAltera: "#19345E",
        orangeAltera: "#F47522",
        abuAltera: "#E7EBFC",
      },
      fontFamily: {
        Inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
