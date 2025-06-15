
import { useEffect } from 'react';

export const usePerformance = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap'
      ];

      criticalFonts.forEach(fontUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = fontUrl;
        link.as = 'style';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Mobile-specific optimizations
    const optimizeMobilePerformance = () => {
      // Prevent zoom on input focus for iOS
      const addNoZoomMeta = () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport && window.innerWidth < 768) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
      };

      // Optimize touch targets for mobile
      const optimizeTouchTargets = () => {
        const touchElements = document.querySelectorAll('button, a, input, textarea, select');
        touchElements.forEach(element => {
          const el = element as HTMLElement;
          if (!el.style.minHeight) {
            el.style.minHeight = '44px'; // iOS recommended touch target size
          }
          el.style.touchAction = 'manipulation';
        });
      };

      // Defer non-critical JavaScript for mobile
      const deferNonCriticalScripts = () => {
        const scripts = document.querySelectorAll('script:not([data-critical])');
        scripts.forEach(script => {
          if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
            script.setAttribute('defer', 'true');
          }
        });
      };

      // Optimize images for mobile viewport
      const optimizeImagesForMobile = () => {
        const images = document.querySelectorAll('img:not([data-optimized])');
        images.forEach(img => {
          const image = img as HTMLImageElement;
          
          // Set loading strategy
          if (!image.hasAttribute('loading')) {
            const rect = image.getBoundingClientRect();
            const isAboveFold = rect.top < window.innerHeight;
            image.loading = isAboveFold ? 'eager' : 'lazy';
          }
          
          // Add mobile-friendly sizing
          if (!image.style.maxWidth) {
            image.style.maxWidth = '100%';
            image.style.height = 'auto';
          }
          
          image.setAttribute('data-optimized', 'true');
        });
      };

      if (window.innerWidth < 768) {
        addNoZoomMeta();
      }
      
      optimizeTouchTargets();
      deferNonCriticalScripts();
      optimizeImagesForMobile();
    };

    // Minimize layout shifts
    const minimizeLayoutShifts = () => {
      // Set dimensions for images without explicit sizing
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const image = img as HTMLImageElement;
        if (!image.style.aspectRatio) {
          // Use common aspect ratios based on context
          const isHero = image.closest('[data-section="hero"]');
          const isBlog = image.closest('[data-section="blog"]');
          
          if (isHero) {
            image.style.aspectRatio = '16/9';
          } else if (isBlog) {
            image.style.aspectRatio = '4/3';
          } else {
            image.style.aspectRatio = '16/9';
          }
        }
      });

      // Reserve space for dynamic content
      const dynamicElements = document.querySelectorAll('[data-dynamic-content]');
      dynamicElements.forEach(element => {
        const el = element as HTMLElement;
        if (!el.style.minHeight) {
          el.style.minHeight = '200px'; // Reserve minimum space
        }
      });
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeMobilePerformance();
    minimizeLayoutShifts();

    // Re-run mobile optimizations on resize
    const handleResize = () => {
      if (window.innerWidth < 768) {
        optimizeMobilePerformance();
      }
    };

    window.addEventListener('resize', handleResize);

    // Monitor performance metrics
    if ('web-vital' in window) {
      console.log('Performance monitoring active');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
};
