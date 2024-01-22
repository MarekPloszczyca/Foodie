/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
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
        button: "button 1500ms ease-out infinite",
        wrong: "wrong 0.5s linear"
      },
      keyframes: {
        button: {
          "0%": {
            transform:
              "translateX(-50%) translateY(-50%) translateZ(0) scale(1)",
            opacity: "1",
          },
          "100%": {
            transform:
              "translateX(-50%) translateY(-50%) translateZ(0) scale(1.5)",
            opacity: "0",
          },
        },
        wrong: {
          "0%": {
            left: "0",
          },
          "25%": {
            left: "0.2rem",
          },
          "50%": {
            left: "0",
          },
          "75%": {
            left: "-0.2rem",
          },
          "100%": {
            left: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
