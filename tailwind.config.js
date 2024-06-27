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
      },
      backgroundColor: {
        "custom-linear-gradient":
          "linear-gradient(75deg, rgb(40, 58, 88) 0%, rgba(54, 69, 98, 0) 100%)",
        "custom-linear-g":
          "linear-gradient(180deg, rgba(54, 69, 98, 0), 10% rgba(54, 69, 98, 1) 100%)",
      },
    },
  },
  plugins: [],
};
