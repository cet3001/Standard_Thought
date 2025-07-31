import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

const PerformanceTester = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const newMetrics: PerformanceMetrics = {
          pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          timeToInteractive: navigation.domInteractive - navigation.fetchStart
        };

        // Get paint metrics if available
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            newMetrics.firstContentfulPaint = entry.startTime;
          }
        });

        setMetrics(newMetrics);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !metrics || isHidden) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-30'}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="bg-black/90 text-white p-3 rounded-lg shadow-lg text-xs max-w-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-[#FFD700]">⚡ Performance</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => window.open('https://pagespeed.web.dev/', '_blank')}
              className="text-[#FFD700] hover:underline text-xs"
            >
              Test Mobile →
            </button>
            <button 
              onClick={() => setIsHidden(true)}
              className="text-gray-400 hover:text-white text-xs"
              title="Hide performance panel"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Page Load:</span>
            <span className={metrics.pageLoadTime < 3000 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.pageLoadTime)}ms
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.firstContentfulPaint < 1800 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.firstContentfulPaint)}ms
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>TTI:</span>
            <span className={metrics.timeToInteractive < 5000 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.timeToInteractive)}ms
            </span>
          </div>
        </div>
        
        <div className="mt-2 pt-2 border-t border-gray-600 text-xs text-gray-300">
          <div>💡 <strong>Mobile Test Tools:</strong></div>
          <div>• PageSpeed Insights</div>
          <div>• Chrome DevTools</div>
          <div>• GTmetrix</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTester;