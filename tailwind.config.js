/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#10302B",
          deep: "#0A211D",
        },
        paper: "#FFFFFF",
        sand: "#F4F3EF",
        gold: {
          DEFAULT: "#C8A24A",
          soft: "#DCC488",
        },
        text: {
          DEFAULT: "#1B211F",
          inverse: "#F3F1EA",
          muted: "#4B5450",
        },
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};
