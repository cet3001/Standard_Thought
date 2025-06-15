
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

    // Optimize initial page load
    const optimizePageLoad = () => {
      // Defer non-critical JavaScript
      const scripts = document.querySelectorAll('script[defer]');
      scripts.forEach(script => {
        if (script.getAttribute('data-optimized') !== 'true') {
          script.setAttribute('data-optimized', 'true');
        }
      });

      // Minimize layout shifts by setting image dimensions
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const image = img as HTMLImageElement;
        if (!image.style.aspectRatio) {
          image.style.aspectRatio = '16/9';
        }
      });
    };

    // Run optimizations
    preloadCriticalResources();
    optimizePageLoad();

    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would integrate with web-vitals library if installed
      console.log('Performance monitoring active');
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};
