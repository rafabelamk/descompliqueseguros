/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta no estilo Apple (mesma do guia de posts de seguro de vida).
        ink: "#1d1d1f", // texto principal
        muted: "#6e6e73", // texto de apoio
        accent: {
          DEFAULT: "#0071e3", // botões e links
          light: "#2997ff", // links sobre fundo escuro/foto
        },
        bg: "#ffffff", // fundo da página
        surface: "#f5f5f7", // seções alternadas e cards
        line: "#d2d2d7", // divisórias
      },
      fontFamily: {
        // SF Pro nos dispositivos Apple; Inter (carregada no layout) nos demais.
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          "var(--font-inter)",
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "22px",
        input: "12px",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "160px",
        "section-mobile": "96px",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};
