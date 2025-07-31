/**
 * Central theme configuration for typography, spacing, and design tokens
 * Replaces scattered style definitions across components
 */

export const typography = {
  // Heading styles
  hero: {
    fontSize: 'text-4xl md:text-6xl lg:text-7xl',
    fontWeight: 'font-black',
    fontFamily: 'font-kalam',
    letterSpacing: 'tracking-tight',
    lineHeight: 'leading-tight'
  },
  h1: {
    fontSize: 'text-3xl md:text-5xl lg:text-6xl',
    fontWeight: 'font-bold',
    fontFamily: 'font-kalam',
    letterSpacing: 'tracking-tight',
    lineHeight: 'leading-tight'
  },
  h2: {
    fontSize: 'text-2xl md:text-4xl lg:text-5xl',
    fontWeight: 'font-bold',
    fontFamily: 'font-kalam',
    letterSpacing: 'tracking-tight',
    lineHeight: 'leading-tight'
  },
  h3: {
    fontSize: 'text-xl md:text-3xl lg:text-4xl',
    fontWeight: 'font-bold',
    fontFamily: 'font-kalam',
    letterSpacing: 'tracking-tight',
    lineHeight: 'leading-snug'
  },
  h4: {
    fontSize: 'text-lg md:text-2xl lg:text-3xl',
    fontWeight: 'font-semibold',
    fontFamily: 'font-inter',
    letterSpacing: 'tracking-tight',
    lineHeight: 'leading-snug'
  },
  
  // Body text styles
  bodyLarge: {
    fontSize: 'text-lg md:text-xl',
    fontWeight: 'font-normal',
    fontFamily: 'font-inter',
    lineHeight: 'leading-relaxed'
  },
  body: {
    fontSize: 'text-base md:text-lg',
    fontWeight: 'font-normal',
    fontFamily: 'font-inter',
    lineHeight: 'leading-relaxed'
  },
  bodySmall: {
    fontSize: 'text-sm md:text-base',
    fontWeight: 'font-normal',
    fontFamily: 'font-inter',
    lineHeight: 'leading-relaxed'
  },
  
  // Special text styles
  accent: {
    className: 'pearlescent-text font-bold',
    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)'
  },
  ticker: {
    fontSize: 'text-lg md:text-xl',
    fontWeight: 'font-bold',
    fontFamily: 'font-kalam',
    transform: 'transform -rotate-1',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 0px rgba(255,255,255,0.1)'
  },
  
  // Button text styles
  buttonPrimary: {
    fontSize: 'text-base md:text-lg',
    fontWeight: 'font-bold',
    fontFamily: 'font-inter',
    letterSpacing: 'tracking-wide',
    textTransform: 'uppercase'
  },
  buttonSecondary: {
    fontSize: 'text-sm md:text-base',
    fontWeight: 'font-semibold',
    fontFamily: 'font-inter',
    letterSpacing: 'tracking-wide'
  }
};

export const spacing = {
  // Section spacing
  sectionPadding: 'py-16 md:py-24 lg:py-32',
  sectionMargin: 'mb-16 md:mb-24 lg:mb-32',
  
  // Container spacing
  containerPadding: 'px-4 md:px-6 lg:px-8',
  maxWidth: 'max-w-7xl mx-auto',
  
  // Component spacing
  cardPadding: 'p-6 md:p-8',
  cardGap: 'gap-6 md:gap-8',
  gridGap: 'gap-8 md:gap-12 lg:gap-16'
};

export const colors = {
  // Brand colors (use CSS variables)
  brand: {
    cream: 'var(--brand-cream)',
    black: 'var(--brand-black)',
    blue: 'var(--brand-blue)'
  },
  
  // Gradient combinations
  gradients: {
    urban: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    pearlescent: 'bg-gradient-to-r from-yellow-200/10 via-yellow-100/5 to-transparent',
    overlay: 'bg-gradient-to-r from-gray-900/90 via-gray-800/85 to-gray-900/90',
    card: 'bg-white/10 dark:bg-black/20 backdrop-blur-sm'
  },
  
  // Border colors
  borders: {
    default: 'border-white/10 dark:border-black/10',
    accent: 'border-yellow-200/20 dark:border-yellow-300/15',
    hover: 'hover:border-yellow-300/30'
  }
};

export const animations = {
  // Transition classes
  smooth: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-200 ease-in-out',
  slow: 'transition-all duration-500 ease-in-out',
  
  // Hover effects
  cardHover: 'hover:scale-105 hover:shadow-xl',
  buttonHover: 'hover:scale-105 hover:shadow-lg',
  
  // Visibility animations
  fadeIn: 'opacity-0 translate-y-8 transition-all duration-1000',
  fadeInVisible: 'opacity-100 translate-y-0'
};

export const shadows = {
  card: 'shadow-xl hover:shadow-2xl',
  glow: 'shadow-lg hover:shadow-yellow-300/20',
  urban: '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
};

// Helper function to combine theme classes
export const combineClasses = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Typography utility functions
export const getTypographyClasses = (variant: keyof typeof typography): string => {
  const style = typography[variant];
  return Object.values(style).join(' ');
};

export const getResponsiveClasses = (base: string, md?: string, lg?: string): string => {
  let classes = base;
  if (md) classes += ` md:${md}`;
  if (lg) classes += ` lg:${lg}`;
  return classes;
};