
import type { Config } from "tailwindcss";
import { colors } from "./src/styles/tailwind/colors";
import { fonts } from "./src/styles/tailwind/fonts";
import { fontSize } from "./src/styles/tailwind/fontSize";
import { letterSpacing } from "./src/styles/tailwind/letterSpacing";
import { borderRadius } from "./src/styles/tailwind/borderRadius";
import animations from "./src/styles/tailwind/animations";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  // Optimized purging for production
  safelist: [
    // Keep essential classes that might be added dynamically
    'pearlescent-text',
    'animate-marquee',
    'bg-brand-cream',
    'bg-brand-black',
    'text-brand-cream',
    'text-brand-black',
    // Animation classes
    'animate-fade-in',
    'animate-float',
    'animate-pulse-glow',
    'animate-stagger-in',
    'animate-scale-in-smooth',
    'animate-slide-up-fade',
    'animate-parallax-float',
    // Grid and responsive classes commonly used
    'grid-cols-1',
    'grid-cols-2', 
    'grid-cols-3',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-4',
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
      backgroundImage: {
        "hero-fade":
          "radial-gradient(circle at center,rgba(10,10,10,0)_0%,rgba(10,10,10,.85)_100%)",
        dots: "url('/img/dots.svg')",
      },
      // Performance optimizations
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // Optimized spacing scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Shadow optimizations
      boxShadow: {
        'urban': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(255, 215, 0, 0.3)',
        'pearlescent': '0 0 30px rgba(255, 215, 0, 0.4)',
      },
      // Backdrop blur for performance
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for performance optimizations
    function({ addUtilities }: any) {
      const newUtilities = {
        // Hardware acceleration utilities
        '.gpu-accelerated': {
          'transform': 'translateZ(0)',
          'backface-visibility': 'hidden',
          'perspective': '1000px',
        },
        // Optimized text rendering
        '.text-rendering-optimized': {
          'text-rendering': 'optimizeSpeed',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        // Image optimization
        '.image-rendering-optimized': {
          'image-rendering': 'crisp-edges',
        },
        // Will-change for animations
        '.will-change-transform': {
          'will-change': 'transform',
        },
        '.will-change-opacity': {
          'will-change': 'opacity',
        },
      };
      addUtilities(newUtilities);
    }
  ],
} satisfies Config;

export default config;
