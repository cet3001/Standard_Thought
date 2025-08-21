import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LighthouseScore {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  pwa: number;
}

interface LighthouseAudit {
  id: string;
  title: string;
  score: number | null;
  displayValue?: string;
  description: string;
  warnings?: string[];
}

const LighthouseAuditor = () => {
  const [scores, setScores] = useState<LighthouseScore | null>(null);
  const [audits, setAudits] = useState<LighthouseAudit[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable in development mode and defer initialization
    if (process.env.NODE_ENV !== 'development') return;

    let timeoutId: NodeJS.Timeout;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        setIsVisible(!isVisible);
        if (!isVisible) {
          // Defer audit to prevent blocking
          timeoutId = setTimeout(runPerformanceAudits, 200);
        }
      }
    };

    // Defer event listener registration to prevent blocking
    const registrationTimeout = setTimeout(() => {
      window.addEventListener('keydown', handleKeydown);
    }, 1000);

    return () => {
      clearTimeout(registrationTimeout);
      clearTimeout(timeoutId);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isVisible]);

  const runPerformanceAudits = () => {
    // Simulate Lighthouse-style audits using browser APIs
    const auditResults: LighthouseAudit[] = [];
    
    // First Contentful Paint audit
    if ('performance' in window) {
      const fcpEntry = performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint') as PerformancePaintTiming;
      if (fcpEntry) {
        const fcpScore = fcpEntry.startTime < 1800 ? 1 : fcpEntry.startTime < 3000 ? 0.5 : 0;
        auditResults.push({
          id: 'first-contentful-paint',
          title: 'First Contentful Paint',
          score: fcpScore,
          displayValue: `${Math.round(fcpEntry.startTime)}ms`,
          description: 'Critical for AEO - users need fast answers to wealth-building queries',
          warnings: fcpEntry.startTime > 2500 ? ['Slow FCP may impact AEO ranking for financial intents'] : undefined
        });
      }

      // Largest Contentful Paint audit
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
        if (lastEntry) {
          const lcpScore = lastEntry.startTime < 2500 ? 1 : lastEntry.startTime < 4000 ? 0.5 : 0;
          auditResults.push({
            id: 'largest-contentful-paint',
            title: 'Largest Contentful Paint',
            score: lcpScore,
            displayValue: `${Math.round(lastEntry.startTime)}ms`,
            description: 'Measures loading performance for main content',
            warnings: lastEntry.startTime > 3000 ? ['LCP too slow for optimal AEO performance'] : undefined
          });
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // LCP not supported
      }
    }

    // Check for performance-impacting patterns
    auditUnusedCSS();
    auditImageOptimization();
    auditJavaScriptBundles();
    auditCacheHeaders();
    
    setAudits(auditResults);
    
    // Calculate overall scores
    setScores({
      performance: calculatePerformanceScore(),
      accessibility: checkAccessibility(),
      bestPractices: checkBestPractices(),
      seo: checkSEO(),
      pwa: checkPWA()
    });
  };

  const auditUnusedCSS = () => {
    // Check for large CSS files that might contain unused styles
    const stylesheets = Array.from(document.styleSheets);
    stylesheets.forEach(sheet => {
      try {
        if (sheet.href && sheet.href.includes('index.css')) {
          console.log('[Lighthouse] Found main CSS - check for unused styles');
        }
      } catch (e) {
        // Cross-origin stylesheet
      }
    });
  };

  const auditImageOptimization = () => {
    const images = Array.from(document.querySelectorAll('img'));
    const unoptimizedImages = images.filter(img => 
      !img.src.includes('.webp') && 
      !img.hasAttribute('loading') &&
      (img.src.includes('.jpg') || img.src.includes('.png'))
    );
    
    if (unoptimizedImages.length > 0) {
      console.warn(`[Lighthouse] Found ${unoptimizedImages.length} unoptimized images`);
    }
  };

  const auditJavaScriptBundles = () => {
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    scripts.forEach(script => {
      const src = (script as HTMLScriptElement).src;
      if (src.includes('vendor') || src.includes('chunk')) {
        console.log('[Lighthouse] Bundle detected:', src);
      }
    });
  };

  const auditCacheHeaders = () => {
    // Check if service worker is registered for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (registration) {
          console.log('[Lighthouse] Service worker registered - caching strategy active');
        } else {
          console.warn('[Lighthouse] No service worker - missing caching optimization');
        }
      });
    }
  };

  const calculatePerformanceScore = (): number => {
    // Simplified performance scoring
    const vitals = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!vitals) return 0.5;
    
    const loadTime = vitals.loadEventEnd - vitals.fetchStart;
    return loadTime < 2000 ? 1 : loadTime < 4000 ? 0.7 : 0.4;
  };

  const checkAccessibility = (): number => {
    // Basic accessibility checks
    const images = document.querySelectorAll('img:not([alt])');
    const buttons = document.querySelectorAll('button:not([aria-label]):not([title])');
    const score = 1 - ((images.length + buttons.length) * 0.1);
    return Math.max(score, 0);
  };

  const checkBestPractices = (): number => {
    // Check for HTTPS, console errors, etc.
    const isHTTPS = location.protocol === 'https:';
    return isHTTPS ? 0.9 : 0.6;
  };

  const checkSEO = (): number => {
    // Basic SEO checks
    const hasTitle = !!document.querySelector('title');
    const hasMetaDescription = !!document.querySelector('meta[name="description"]');
    const hasH1 = !!document.querySelector('h1');
    
    return (hasTitle && hasMetaDescription && hasH1) ? 0.9 : 0.6;
  };

  const checkPWA = (): number => {
    // Check for PWA features
    const hasManifest = !!document.querySelector('link[rel="manifest"]');
    const hasServiceWorker = 'serviceWorker' in navigator;
    
    return (hasManifest && hasServiceWorker) ? 0.8 : 0.4;
  };

  const getScoreColor = (score: number) => {
    if (score >= 0.9) return 'bg-green-500';
    if (score >= 0.7) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Badge variant="outline" className="opacity-50">
          Press Ctrl+Shift+L for Lighthouse
        </Badge>
      </div>
    );
  }

  return (
    <Card className="fixed top-4 right-4 w-96 max-h-96 overflow-y-auto z-50 bg-background/95 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-sm">
          Lighthouse Audit
          <button 
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            ×
          </button>
        </CardTitle>
        <CardDescription>Real-time performance monitoring</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {scores && (
          <div className="grid grid-cols-5 gap-2 text-xs">
            <div className="text-center">
              <div className={`w-8 h-8 rounded-full ${getScoreColor(scores.performance)} text-white flex items-center justify-center mx-auto mb-1`}>
                {Math.round(scores.performance * 100)}
              </div>
              <div>Perf</div>
            </div>
            <div className="text-center">
              <div className={`w-8 h-8 rounded-full ${getScoreColor(scores.accessibility)} text-white flex items-center justify-center mx-auto mb-1`}>
                {Math.round(scores.accessibility * 100)}
              </div>
              <div>A11y</div>
            </div>
            <div className="text-center">
              <div className={`w-8 h-8 rounded-full ${getScoreColor(scores.bestPractices)} text-white flex items-center justify-center mx-auto mb-1`}>
                {Math.round(scores.bestPractices * 100)}
              </div>
              <div>Best</div>
            </div>
            <div className="text-center">
              <div className={`w-8 h-8 rounded-full ${getScoreColor(scores.seo)} text-white flex items-center justify-center mx-auto mb-1`}>
                {Math.round(scores.seo * 100)}
              </div>
              <div>SEO</div>
            </div>
            <div className="text-center">
              <div className={`w-8 h-8 rounded-full ${getScoreColor(scores.pwa)} text-white flex items-center justify-center mx-auto mb-1`}>
                {Math.round(scores.pwa * 100)}
              </div>
              <div>PWA</div>
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          {audits.map(audit => (
            <div key={audit.id} className="border rounded p-2">
              <div className="flex items-center justify-between text-sm">
                <span>{audit.title}</span>
                {audit.score !== null && (
                  <Badge variant={audit.score > 0.8 ? 'default' : audit.score > 0.5 ? 'secondary' : 'destructive'}>
                    {audit.displayValue}
                  </Badge>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {audit.description}
              </div>
              {audit.warnings && audit.warnings.map((warning, i) => (
                <div key={i} className="text-xs text-yellow-600 mt-1">
                  ⚠️ {warning}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <button 
          onClick={runPerformanceAudits}
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90"
        >
          Re-run Audit
        </button>
      </CardContent>
    </Card>
  );
};

export default LighthouseAuditor;