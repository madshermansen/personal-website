import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#030712",
        primary: "#A3E635",
        secondary: "#F9F9F9",
        accent: "#F9F9F9",
        text: "#F9F9F9",
      },
      margin: {
        '10-screen': '10vw',
      },
      width: {
        '80vw': '80vw',
      }
    },
  },
  plugins: [],
};
export default config;
