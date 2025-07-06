import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preconnect to external domains
    const preconnectDomains = [
      'https://www.googletagmanager.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Lazy load non-critical images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Performance monitoring
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Track Core Web Vitals (current metrics only)
        import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
          onCLS(console.log);
          onFCP(console.log);
          onLCP(console.log);
          onTTFB(console.log);
        }).catch(() => {
          // Fallback if web-vitals fails to load
          console.log('Web Vitals monitoring not available');
        });
      });
    }

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;