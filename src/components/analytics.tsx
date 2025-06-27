
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: {
      (...args: unknown[]): void;
      q?: unknown[];
    };
  }
}

const Analytics = () => {
  useEffect(() => {
    // Only load analytics in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Google Analytics 4
    const GA_MEASUREMENT_ID = 'G-PT7T8CDJZS';
    
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    script.onload = () => {
      window.gtag = window.gtag || ((...args: unknown[]) => {
        window.gtag.q = window.gtag.q || [];
        window.gtag.q.push(args);
      }) as typeof window.gtag;
      
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'scroll_depth',
          'custom_parameter_2': 'newsletter_conversion'
        }
      });

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > maxScrollDepth) {
          maxScrollDepth = scrollPercent;
          
          // Track milestone scroll depths
          if (scrollPercent >= 25 && maxScrollDepth < 25) {
            window.gtag('event', 'scroll_depth', {
              scroll_depth: '25%',
              page_location: window.location.href
            });
          }
          if (scrollPercent >= 50 && maxScrollDepth < 50) {
            window.gtag('event', 'scroll_depth', {
              scroll_depth: '50%',
              page_location: window.location.href
            });
          }
          if (scrollPercent >= 75 && maxScrollDepth < 75) {
            window.gtag('event', 'scroll_depth', {
              scroll_depth: '75%',
              page_location: window.location.href
            });
          }
          if (scrollPercent >= 90 && maxScrollDepth < 90) {
            window.gtag('event', 'scroll_depth', {
              scroll_depth: '90%',
              page_location: window.location.href
            });
          }
        }
      };

      // Throttle scroll tracking
      let scrollTimeout: NodeJS.Timeout;
      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(trackScrollDepth, 100);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // Cleanup scroll listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    };

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default Analytics;
