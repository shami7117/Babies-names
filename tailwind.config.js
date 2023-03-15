/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        animateCircle: {
          " 40%": { transform: "scale(10)", opacity: "1", fill: "#DD4688" },

          "55%": {
            transform: "scale(11)",
            opacity: "1",
            fill: "#D46ABF",
          },
          "65%": {
            transform: "scale(12)",
            opacity: "1",
            fill: "#CC8EF5",
          },
          "75%": {
            transform: "scale(13)",
            opacity: "1",
            fill: "transparent",
            stroke: "#CC8EF5",
            "stroke-width": ".5",
          },
          "85%": {
            transform: "scale(17)",
            opacity: "1",
            fill: "transparent",
            stroke: "#CC8EF5",
            "stroke-width": ".2",
          },
          "95%": {
            transform: "scale(18)",
            opacity: "1",
            fill: "transparent",
            stroke: "#CC8EF5",
            "stroke-width": ".1",
          },
          "100%": {
            transform: "scale(19)",
            opacity: "1",
            fill: "transparent",
            stroke: "#CC8EF5",
            "stroke-width": "0",
          },
        },
        animateHeart: {
          "0%": {
            transform: "scale(.2)",
          },
          "40%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        animateHeartOut: {
          "0%": {
            transform: "scale(1.4)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      screens: {
        "3xl": "1456px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  purge: {
    enabled: true,
  },
  plugins: [],
};
