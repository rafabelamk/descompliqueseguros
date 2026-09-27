/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#26326C",
          deep: "#161B3A",
        },
        orange: "#EE7D19",
        bg: "#F2F2ED",
        surface: "#FFFFFF",
        line: "#CECECA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        input: "10px",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "160px",
        "section-mobile": "96px",
      },
    },
  },
  plugins: [],
};
