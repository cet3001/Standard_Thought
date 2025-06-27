
import type { Config } from "tailwindcss";
import { colors } from "./src/styles/tailwind/colors";
import { fonts } from "./src/styles/tailwind/fonts";
import { fontSize } from "./src/styles/tailwind/fontSize";
import { letterSpacing } from "./src/styles/tailwind/letterSpacing";
import { borderRadius } from "./src/styles/tailwind/borderRadius";
import { animations } from "./src/styles/tailwind/animations";

const config: Config = {
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
      colors,
      fontFamily: fonts,
      fontSize,
      letterSpacing,
      borderRadius,
      keyframes: animations.keyframes,
      animation: animations.animation,
    },
  },
  plugins: [import("tailwindcss-animate")],
} satisfies Config;

export default config;
