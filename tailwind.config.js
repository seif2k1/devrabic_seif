/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        neutra: ["Neutra"],
      },

      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          /* "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(-360deg)" }, */
        },
      },
    },
  },
  plugins: [],
};
