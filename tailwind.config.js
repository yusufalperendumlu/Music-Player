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
      },
      backgroundColor: {
        "custom-linear-gradient":
          "linear-gradient(75deg, rgb(40, 58, 88) 0%, rgba(54, 69, 98, 0) 100%)",
        "custom-linear-g":
          "linear-gradient(180deg, rgba(54, 69, 98, 0), 10% rgba(54, 69, 98, 1) 100%)",
      },
      animation: {
        marquee: "marquee 12s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
      },
      transformOrigin: {
        half: "50% 50%",
      },
    },
  },
  plugins: [],
};
