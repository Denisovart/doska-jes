import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "night": "#0A090C",
        "afwhite": "#F0EDEE",
        "midgreen": "#07393C",
        "caribbean": "#2C666E",
        "pblue": "#90DDF0",
      },
      container: {
        center: true,
        padding: "25px"
      }
    },
  },
  plugins: [],
};
export default config;
