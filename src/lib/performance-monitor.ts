// Performance monitoring and optimization utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private vitalsData: Record<string, number> = {};

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Initialize web vitals monitoring
  initWebVitals() {
    // Use basic performance API instead of web-vitals for now
    this.measureBasicVitals();
    console.log('Performance Monitor: Web Vitals tracking initialized');
  }

  private measureBasicVitals() {
    // Measure basic performance metrics
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const ttfb = navigation.responseStart - navigation.requestStart;
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      this.vitalsData.TTFB = ttfb;
      this.vitalsData.FCP = fcp;
      
      console.log('Performance: TTFB', ttfb);
      console.log('Performance: FCP', fcp);
    }
  }

  private onVitalsUpdate = (name: string) => (metric: any) => {
    this.vitalsData[name] = metric.value;
    
    console.log(`Performance: ${name}`, {
      value: metric.value,
      rating: this.getRating(name, metric.value),
      delta: metric.delta,
      id: metric.id
    });

    // Log performance issues
    if (this.isPerformanceIssue(name, metric.value)) {
      console.warn(`Performance Issue: ${name} is ${metric.value}ms (threshold exceeded)`);
    }

    // Send to analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.value),
        non_interaction: true,
      });
    }
  };

  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = {
      CLS: [0.1, 0.25],
      INP: [200, 500],
      LCP: [2500, 4000],
      FCP: [1800, 3000],
      TTFB: [800, 1800]
    };

    const [good, poor] = thresholds[name as keyof typeof thresholds] || [0, 0];
    
    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
  }

  private isPerformanceIssue(name: string, value: number): boolean {
    const issues = {
      CLS: 0.25,
      INP: 500,
      LCP: 4000,
      FCP: 3000,
      TTFB: 1800
    };

    return value > (issues[name as keyof typeof issues] || Infinity);
  }

  // Get current performance data
  getVitalsData() {
    return { ...this.vitalsData };
  }

  // Optimize images with intersection observer
  optimizeImages() {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px'
      });

      images.forEach(img => imageObserver.observe(img));
      console.log(`Performance Monitor: Lazy loading enabled for ${images.length} images`);
    }
  }

  // Preload critical resources
  preloadCriticalResources() {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.webp'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.includes('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.includes('.webp') || resource.includes('.jpg') || resource.includes('.png')) {
        link.as = 'image';
      }
      
      document.head.appendChild(link);
    });

    console.log('Performance Monitor: Critical resources preloaded');
  }

  // Service Worker registration
  registerServiceWorker() {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW: Registered successfully', registration);
        
        // Update available
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('SW: New version available');
              }
            });
          }
        });
      })
      .catch(error => console.log('SW: Registration failed', error));
  }

  // Font loading optimization
  optimizeFontLoading() {
    if (typeof window === 'undefined') return;

    // Use font-display: swap for better performance
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

    console.log('Performance Monitor: Font loading optimized');
  }

  // Initialize all performance optimizations
  init() {
    if (typeof window === 'undefined') return;

    this.initWebVitals();
    this.registerServiceWorker();
    this.preloadCriticalResources();
    this.optimizeFontLoading();
    
    // Delay heavy operations
    setTimeout(() => {
      this.optimizeImages();
    }, 1000);

    console.log('Performance Monitor: All optimizations initialized');
  }
}

export default PerformanceMonitor;