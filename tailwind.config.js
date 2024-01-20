/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        darkBlue: "#0F172B",
        filterBlue: "#05080f",
      },
      colors: {
        orange: "#FEA116",
      },
      animation: {
        "spin-slow": "spin 50s linear infinite",
      },
    },
  },
  plugins: [],
};
