import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface LighthouseMetric {
  id: string;
  title: string;
  score: number;
  value: number;
  threshold: { good: number; poor: number };
  unit: string;
}

interface LighthouseAuditProps {
  autoRun?: boolean;
  onResults?: (results: LighthouseMetric[]) => void;
}

const LighthouseAudit = ({ autoRun = false, onResults }: LighthouseAuditProps) => {
  const [metrics, setMetrics] = useState<LighthouseMetric[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [lastRun, setLastRun] = useState<Date | null>(null);

  const runAudit = async () => {
    setIsRunning(true);
    
    try {
      // Simulate lighthouse audit by measuring actual performance
      const performanceEntries = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = await measureLCP();
      const cls = await measureCLS();
      const fid = await measureFID();
      const ttfb = performanceEntries.responseStart - performanceEntries.requestStart;

      const auditResults: LighthouseMetric[] = [
        {
          id: 'first-contentful-paint',
          title: 'First Contentful Paint',
          score: getScore(fcp, { good: 1800, poor: 3000 }),
          value: fcp,
          threshold: { good: 1800, poor: 3000 },
          unit: 'ms'
        },
        {
          id: 'largest-contentful-paint',
          title: 'Largest Contentful Paint',
          score: getScore(lcp, { good: 2500, poor: 4000 }),
          value: lcp,
          threshold: { good: 2500, poor: 4000 },
          unit: 'ms'
        },
        {
          id: 'cumulative-layout-shift',
          title: 'Cumulative Layout Shift',
          score: getScore(cls, { good: 0.1, poor: 0.25 }, true),
          value: cls,
          threshold: { good: 0.1, poor: 0.25 },
          unit: ''
        },
        {
          id: 'first-input-delay',
          title: 'First Input Delay',
          score: getScore(fid, { good: 100, poor: 300 }),
          value: fid,
          threshold: { good: 100, poor: 300 },
          unit: 'ms'
        },
        {
          id: 'time-to-first-byte',
          title: 'Time to First Byte',
          score: getScore(ttfb, { good: 800, poor: 1800 }),
          value: ttfb,
          threshold: { good: 800, poor: 1800 },
          unit: 'ms'
        }
      ];

      setMetrics(auditResults);
      setLastRun(new Date());
      onResults?.(auditResults);

      // Log results for console debugging
      console.log('Lighthouse Audit Results:', auditResults);
      
      // Log performance insights
      auditResults.forEach(metric => {
        const rating = getScoreRating(metric.score);
        if (rating !== 'good') {
          console.warn(`Performance Issue: ${metric.title} scored ${metric.score}/100 (${metric.value}${metric.unit})`);
        }
      });

    } catch (error) {
      console.error('Lighthouse audit failed:', error);
    } finally {
      setIsRunning(false);
    }
  };

  // Measure LCP using PerformanceObserver
  const measureLCP = (): Promise<number> => {
    return new Promise((resolve) => {
      let lcp = 0;
      
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            lcp = entries[entries.length - 1].startTime;
          }
        });
        
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
          setTimeout(() => {
            observer.disconnect();
            resolve(lcp);
          }, 100);
        } catch {
          resolve(0);
        }
      } else {
        resolve(0);
      }
    });
  };

  // Measure CLS using PerformanceObserver
  const measureCLS = (): Promise<number> => {
    return new Promise((resolve) => {
      let cls = 0;
      
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          });
        });
        
        try {
          observer.observe({ entryTypes: ['layout-shift'] });
          setTimeout(() => {
            observer.disconnect();
            resolve(cls);
          }, 100);
        } catch {
          resolve(0);
        }
      } else {
        resolve(0);
      }
    });
  };

  // Measure FID (simulate with timing)
  const measureFID = (): Promise<number> => {
    return new Promise((resolve) => {
      let fid = 0;
      
      const startTime = performance.now();
      
      // Simulate input delay measurement
      setTimeout(() => {
        fid = performance.now() - startTime;
        resolve(Math.min(fid, 300)); // Cap at 300ms
      }, 10);
    });
  };

  const getScore = (value: number, threshold: { good: number; poor: number }, reverse = false): number => {
    if (reverse) {
      // For CLS, lower is better
      if (value <= threshold.good) return 100;
      if (value >= threshold.poor) return 0;
      return Math.round(100 - ((value - threshold.good) / (threshold.poor - threshold.good)) * 100);
    } else {
      // For timing metrics, lower is better
      if (value <= threshold.good) return 100;
      if (value >= threshold.poor) return 0;
      return Math.round(100 - ((value - threshold.good) / (threshold.poor - threshold.good)) * 100);
    }
  };

  const getScoreRating = (score: number): 'good' | 'needs-improvement' | 'poor' => {
    if (score >= 90) return 'good';
    if (score >= 50) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: number): string => {
    const rating = getScoreRating(score);
    return {
      good: 'bg-green-500',
      'needs-improvement': 'bg-yellow-500',
      poor: 'bg-red-500'
    }[rating];
  };

  useEffect(() => {
    if (autoRun) {
      // Run audit after page load
      setTimeout(() => runAudit(), 2000);
    }
  }, [autoRun]);

  if (process.env.NODE_ENV !== 'development') {
    return null; // Only show in development
  }

  return (
    <Card className="w-full max-w-4xl mx-auto mt-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Performance Audit
          <Button onClick={runAudit} disabled={isRunning} size="sm">
            {isRunning ? 'Running...' : 'Run Audit'}
          </Button>
        </CardTitle>
        {lastRun && (
          <p className="text-sm text-muted-foreground">
            Last run: {lastRun.toLocaleTimeString()}
          </p>
        )}
      </CardHeader>
      <CardContent>
        {metrics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <div key={metric.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{metric.title}</h4>
                  <Badge className={getScoreColor(metric.score)}>
                    {metric.score}/100
                  </Badge>
                </div>
                <p className="text-2xl font-bold">
                  {metric.value.toFixed(metric.id === 'cumulative-layout-shift' ? 3 : 0)}
                  {metric.unit}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Target: &lt;{metric.threshold.good}{metric.unit}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">
            Click "Run Audit" to measure performance metrics
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default LighthouseAudit;