/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#f51302",
        redFont: "#fc0303",
      },
      fontFamily: {
        comfortaa: ["Comfortaa"],
        grenze: ["Grenze Gotisch"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
