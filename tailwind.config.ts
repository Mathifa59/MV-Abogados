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
        navy: {
          950: '#020a18',
          900: '#001F3F',
          800: '#0a2e52',
          700: '#143d6b',
        },
        gold: {
          300: '#e8c872',
          400: '#D4AF37',
          500: '#b8962e',
          600: '#8c6d1f',
        },
        ivory: {
          DEFAULT: '#F8F6F1',
          dark: '#EDE9E0',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
