
import type { Config } from "tailwindcss";

// Import extensions
import colors from "./src/styles/tailwind/colors";
import fontFamily from "./src/styles/tailwind/fonts";
import fontSize from "./src/styles/tailwind/fontSize";
import letterSpacing from "./src/styles/tailwind/letterSpacing";
import borderRadius from "./src/styles/tailwind/borderRadius";
import animations from "./src/styles/tailwind/animations";

export default {
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
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors,
      borderRadius,
      fontFamily,
      fontSize,
      letterSpacing,
      keyframes: animations.keyframes,
      animation: animations.animation,
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
