import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Paleta exacta extraída del logo Monteza Villegas
        navy: {
          950: '#040b14', // Fondo principal (casi negro)
          900: '#061424', // Fondo secundario
          800: '#0e2a4a', // Tarjetas / Elementos UI (El azul del logo)
        },
        gold: {
          400: '#cfa657', // Dorado del logo (Color principal)
          500: '#b89246', // Dorado hover
          600: '#8c6d32', // Bordes oscuros
        }
      },
    },
  },
  plugins: [],
};
export default config;