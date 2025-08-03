import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics-service';

export const useAnalyticsTracking = () => {
  const location = useLocation();
  const timeOnPageStart = useRef<number>(Date.now());
  const lastPath = useRef<string>('');

  useEffect(() => {
    // Initialize analytics on first load
    analytics.init();
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Track time spent on previous page
    if (lastPath.current && lastPath.current !== currentPath) {
      const timeSpent = (Date.now() - timeOnPageStart.current) / 1000;
      const pageType = getPageType(lastPath.current);
      analytics.trackTimeOnPage(timeSpent, pageType);
    }

    // Track new page view
    analytics.trackPageView(currentPath, document.title);

    // Mark page visits for journey tracking
    markPageVisit(currentPath);

    // Reset timer
    timeOnPageStart.current = Date.now();
    lastPath.current = currentPath;
  }, [location]);

  // Track page exit time when component unmounts
  useEffect(() => {
    return () => {
      if (lastPath.current) {
        const timeSpent = (Date.now() - timeOnPageStart.current) / 1000;
        const pageType = getPageType(lastPath.current);
        analytics.trackTimeOnPage(timeSpent, pageType);
      }
    };
  }, []);

  return { analytics };
};

// Blog post specific tracking hook
export const useBlogAnalytics = (postSlug: string, category?: string) => {
  const scrollDepthTracked = useRef<Set<number>>(new Set());
  const readStartTime = useRef<number>(Date.now());

  useEffect(() => {
    // Track blog post view
    analytics.trackBlogEngagement('View', postSlug, category);

    // Set up scroll tracking
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track at 25%, 50%, 75%, 90% milestones
      const milestones = [25, 50, 75, 90];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollDepthTracked.current.has(milestone)) {
          analytics.trackScrollDepth(milestone, postSlug);
          scrollDepthTracked.current.add(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Track final engagement metrics
      const readTime = (Date.now() - readStartTime.current) / 1000;
      if (readTime > 10) { // Only track if they spent more than 10 seconds
        analytics.trackBlogEngagement('Read Time', postSlug, category);
      }
    };
  }, [postSlug, category]);

  const trackAction = (action: string) => {
    analytics.trackBlogEngagement(action, postSlug, category);
  };

  return { trackAction };
};

// Wealth content tracking hook
export const useWealthContentTracking = (pillar: string) => {
  const trackInteraction = (action: string, contentType: string) => {
    analytics.trackWealthContent(action, contentType, pillar);
  };

  const trackDownload = (guideName: string) => {
    analytics.trackWealthContent('Download Guide', guideName, pillar);
    localStorage.setItem('downloaded_guide', 'true');
  };

  const trackFormSubmission = (formType: string, success: boolean) => {
    analytics.trackFormSubmission(formType, success);
    if (success && formType === 'newsletter') {
      localStorage.setItem('is_subscriber', 'true');
    }
  };

  return { trackInteraction, trackDownload, trackFormSubmission };
};

// Helper functions
const getPageType = (path: string): string => {
  if (path.startsWith('/blog/')) return 'blog_post';
  if (path === '/blog') return 'blog_index';
  if (path === '/') return 'homepage';
  return 'other';
};

const markPageVisit = (path: string) => {
};