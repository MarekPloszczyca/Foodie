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
      maxWidth: {
        tablet: "830px",
        desktop: "1240px",
      },
      animation: {
        "spin-slow": "spin 50s linear infinite",
        button: "button 1500ms ease-out infinite",
        wrong: "wrong 0.5s linear",
        fromLeft: "fromLeft 1500ms ease-in-out",
        fromBottom: "fromBottom 1500ms ease-in-out forwards",
        imgDisplay: "imgDisplay 1500ms ease-in-out forwards",
        footerDisplay: "footerDisplay 1000ms ease-in forwards",
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
        fromLeft: {
          "0%": {
            transform: "translate3d(-150%,0,0)",
          },
          "100%": {
            transform: "translateZ(0)",
          },
        },
        fromBottom: {
          "0%": {
            transform: "translate3d(0,20%,0)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
        imgDisplay: {
          "0%": {
            opacity: "0",
            transform: "scale3d(.3,.3,.3)",
          },

          "100%": {
            opacity: "1",
          },
        },
        footerDisplay: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
    
      },
    },
  },
  plugins: [],
};
