/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          hard: "#1E2A3E",
        },
      },
      backgroundImage: {
        "custom-gradient":
          "repeating-radial-gradient(circle at 0 0, transparent 0, #233656 10px), repeating-linear-gradient(#1e2a3e55, #1e2a3e)",
        "custom-gradient-b":
          "repeating-radial-gradient(circle at 0 0, transparent 0, #3e61d2 40px ), repeating-linear-gradient(#4767d055, #4767d0);",
        "custom-linear-wave":
          " linear-gradient(40deg, #364562 20%, #C96850 100%)",
      },
      backgroundColor: {
        "custom-linear-gradient":
          "linear-gradient(75deg, rgb(40, 58, 88) 0%, rgba(54, 69, 98, 0) 100%)",
        "custom-linear-g":
          "linear-gradient(180deg, rgba(54, 69, 98, 0), 10% rgba(54, 69, 98, 1) 100%)",
        "custom-linear-zero":
          "linear-gradient(0deg, rgba(30, 40, 62, 1), 0% rgba(54, 69, 98, 0.1) 100%)",
        "custom-linear-one":
          "linear-gradient(75deg, rgba(40, 58, 88), 0% rgba(54, 69, 98, 0) 100%)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        rounded: "rotation 30s infinite linear",
        quiet: "quiet 1.2s ease-in-out infinite",
        mid: "mid 1.2s ease-in-out infinite",
        loud: "loud 1.2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-100%, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(359deg)" },
        },
        quiet: {
          "25%": {
            transform: "scale(.6)",
          },
          "50%": {
            transform: "scale(.4)",
          },
          "75%": {
            transform: "scale(.8)",
          },
        },

        mid: {
          "25%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(.4)",
          },
          "75%": {
            transform: "scale(.6)",
          },
        },
        loud: {
          "25%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(.4)",
          },
          "75%": {
            transform: "scale(1.2)",
          },
        },
      },
      transformOrigin: {
        half: "50% 50%",
      },
    },
  },
  plugins: [],
};
