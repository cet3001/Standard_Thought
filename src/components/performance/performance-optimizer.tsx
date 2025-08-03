import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Preconnect to external domains
    const preconnectDomains = [
      'https://www.googletagmanager.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdnjs.cloudflare.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical routes
    const criticalRoutes = ['/blog'];
    criticalRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });

    // Enhanced lazy loading with WebP support
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          loadImageWithWebP(img);
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px', // Start loading 50px before the image enters viewport
      threshold: 0.1
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Performance monitoring with detailed metrics
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Track Core Web Vitals
        import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
          onCLS((metric) => {
            console.log('CLS:', metric);
            // Track for AEO optimization
            if (metric.value > 0.1) {
              console.warn('CLS above threshold - may impact AEO ranking');
            }
          });
          onFCP((metric) => {
            console.log('FCP:', metric);
            if (metric.value > 2500) {
              console.warn('FCP slow - may impact user experience for wealth-building queries');
            }
          });
          onLCP((metric) => {
            console.log('LCP:', metric);
            if (metric.value > 2500) {
              console.warn('LCP slow - critical for answering financial intents quickly');
            }
          });
          onTTFB((metric) => {
            console.log('TTFB:', metric);
          });
        }).catch(() => {
          console.log('Web Vitals monitoring not available');
        });

        // Resource timing analysis
        analyzeResourceTiming();
      });
    }

    // Optimize font loading
    optimizeFontLoading();

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null;
};

// Enhanced image loading with WebP support
function loadImageWithWebP(img: HTMLImageElement) {
  const src = img.dataset.src;
  if (!src) return;

  // Check if browser supports WebP
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  })();

  // Convert image to WebP if supported and if it's not already
  if (supportsWebP && !src.includes('.webp') && (src.includes('.jpg') || src.includes('.png'))) {
    // For production, you'd implement actual WebP conversion here
    // For now, just load the original
    img.src = src;
  } else {
    img.src = src;
  }

  img.classList.remove('lazy');
  img.classList.add('loaded');
}

// Optimize font loading strategy
function optimizeFontLoading() {
  // Ensure font-display: swap is working
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-display: swap;
    }
    @font-face {
      font-family: 'IBM Plex Sans';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
}

// Analyze resource timing for performance insights
function analyzeResourceTiming() {
  if ('performance' in window && 'getEntriesByType' in performance) {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    resources.forEach(resource => {
      const duration = resource.responseEnd - resource.startTime;
      
      // Flag slow resources that could impact AEO
      if (duration > 1000) {
        console.warn(`Slow resource detected: ${resource.name} took ${duration}ms`);
      }
      
      // Monitor critical resources for financial content delivery
      if (resource.name.includes('blog') || resource.name.includes('credit') || resource.name.includes('investing')) {
        console.log(`Critical resource timing for ${resource.name}: ${duration}ms`);
      }
    });
  }
}

export default PerformanceOptimizer;