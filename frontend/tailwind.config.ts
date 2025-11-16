import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // Dynamic theme colors using CSS variables
        background: "var(--color-background, #2D2A2E)",
        backgroundDark: "var(--color-backgroundDark, #221F22)",
        backgroundLight: "var(--color-backgroundLight, #3E3B3F)",
        text: "var(--color-text, #FCFCFA)",
        textMuted: "#939293", // Muted text (not theme-dependent)
        primary: "var(--color-primary, #FF6188)",
        secondary: "var(--color-secondary, #A9DC76)",
        accent: "var(--color-accent, #FFD866)",
        cyan: "var(--color-cyan, #78DCE8)",
        purple: "var(--color-purple, #AB9DF2)",
        comment: "var(--color-comment, #727072)",
        border: "#5B595C", // Border color (not theme-dependent)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
