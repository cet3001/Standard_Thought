
import { useEffect } from 'react';
import { useIsMobile } from './use-mobile';

export const useMobilePerformance = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;

    // Critical mobile optimizations
    const optimizeMobileExperience = () => {
      // Prevent iOS zoom on input focus
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
      }

      // Optimize touch targets
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [role="button"]');
      interactiveElements.forEach(element => {
        const el = element as HTMLElement;
        const computedStyle = window.getComputedStyle(el);
        const height = parseInt(computedStyle.height);
        const width = parseInt(computedStyle.width);
        
        if (height < 44) el.style.minHeight = '44px';
        if (width < 44) el.style.minWidth = '44px';
        
        el.style.touchAction = 'manipulation';
      });

      // Optimize images for mobile viewport
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          const rect = img.getBoundingClientRect();
          img.loading = rect.top < window.innerHeight * 2 ? 'eager' : 'lazy';
        }
        
        // Add mobile-friendly sizing
        if (!img.style.maxWidth) {
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
        }

        // Add responsive attributes
        if (!img.hasAttribute('sizes')) {
          img.setAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');
        }
      });

      // Reduce animation complexity on mobile
      const animatedElements = document.querySelectorAll('[class*="animate"], [class*="transition"]');
      animatedElements.forEach(element => {
        const el = element as HTMLElement;
        if (window.innerWidth < 768) {
          el.style.animationDuration = '0.2s';
          el.style.transitionDuration = '0.2s';
        }
      });

      // Optimize backdrop blur for mobile
      const blurElements = document.querySelectorAll('.backdrop-blur-sm, .backdrop-blur');
      blurElements.forEach(element => {
        const el = element as HTMLElement;
        if (window.innerWidth < 768) {
          el.classList.remove('backdrop-blur-sm', 'backdrop-blur');
          el.classList.add('bg-white/95', 'dark:bg-brand-black/95');
        }
      });

      // Optimize scroll performance
      const scrollElements = document.querySelectorAll('[style*="scroll-behavior"]');
      scrollElements.forEach(element => {
        const el = element as HTMLElement;
        if (window.innerWidth < 768) {
          el.style.scrollBehavior = 'auto';
        }
      });
    };

    // Debounce resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(optimizeMobileExperience, 150);
    };

    // Initial optimization
    optimizeMobileExperience();

    // Listen for orientation changes and resizes
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', optimizeMobileExperience, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', optimizeMobileExperience);
      clearTimeout(resizeTimeout);
    };
  }, [isMobile]);

  return null;
};
