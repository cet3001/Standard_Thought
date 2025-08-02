import { useEffect } from 'react';

const BlogPerformanceOptimizer = () => {
  useEffect(() => {
    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      const scripts = document.querySelectorAll('script:not([src*="essential"])');
      scripts.forEach(script => {
        const scriptElement = script as HTMLScriptElement;
        if (scriptElement.src && !scriptElement.defer && !scriptElement.async) {
          scriptElement.defer = true;
        }
      });
    };

    // Optimize images with intersection observer for lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.1
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Preload critical blog assets
    const preloadCriticalAssets = () => {
      // Preload hero image
      const heroImageLink = document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.as = 'image';
      heroImageLink.href = '/lovable-uploads/blog-hero-social.jpg';
      document.head.appendChild(heroImageLink);

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href = 'https://fonts.gstatic.com/s/ibmplexmono/v19/-F63fjptAgt5VM-kVkqdyU8n3kwq0iVBeMdFBNJ0.woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Optimize focus management for keyboard navigation
    const optimizeFocusManagement = () => {
      let lastFocusedElement: Element | null = null;

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          // Track focus for better UX
          lastFocusedElement = document.activeElement;
        }
      });

      // Add focus indicators for better accessibility
      const addFocusStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
          *:focus-visible {
            outline: 2px solid #247EFF !important;
            outline-offset: 2px !important;
            border-radius: 4px !important;
          }
          
          .blog-filter-button:focus-visible,
          .blog-card:focus-visible {
            outline: 3px solid #FFD700 !important;
            outline-offset: 3px !important;
          }
        `;
        document.head.appendChild(style);
      };

      addFocusStyles();
    };

    // Enhanced alt text for images
    const enhanceImageAccessibility = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt || img.alt.trim() === '') {
          // Generate descriptive alt text based on context
          const context = img.closest('[data-category]')?.getAttribute('data-category');
          if (context) {
            img.alt = `${context} related content image`;
          } else if (img.closest('.testimonial')) {
            img.alt = 'Community member testimonial portrait';
          } else if (img.closest('.hero')) {
            img.alt = 'Urban wealth building hero image representing financial transformation';
          } else {
            img.alt = 'Blog content illustration';
          }
        }
      });
    };

    // Initialize all optimizations
    const initOptimizations = () => {
      deferNonCriticalJS();
      optimizeImages();
      preloadCriticalAssets();
      optimizeFocusManagement();
      enhanceImageAccessibility();
    };

    // Run optimizations when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initOptimizations);
    } else {
      initOptimizations();
    }

    // Cleanup
    return () => {
      // Remove any observers or listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default BlogPerformanceOptimizer;