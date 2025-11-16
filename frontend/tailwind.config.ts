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
        // Monokai Pro color scheme
        background: "#2D2A2E", // Dark purple-grey background
        backgroundDark: "#221F22", // Darker background for contrast
        backgroundLight: "#3E3B3F", // Lighter background for elevated surfaces
        text: "#FCFCFA", // Off-white text
        textMuted: "#939293", // Muted text
        primary: "#FF6188", // Pink - keywords
        secondary: "#A9DC76", // Green - functions
        accent: "#FFD866", // Yellow - strings
        cyan: "#78DCE8", // Cyan - properties
        purple: "#AB9DF2", // Purple - values
        comment: "#727072", // Gray - comments
        border: "#5B595C", // Border color
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
