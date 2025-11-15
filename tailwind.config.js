/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: "var(--color-primario)",
        secundario: "var(--color-secundario)",
        texto: "var(--color-texto)",
        fondo: "var(--color-fondo)",
        iconos: "var(--color-iconos)",
        acentoclaro: "var(--color-acento-claro)",
        otro: "var(--color-otro)",
      },
      fontFamily: {
        serif: ["playfair-display", "serif"],
      },
    },
  },
  plugins: [],
};