
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, targetId: string | Date, config?: any) => void;
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
      window.gtag = window.gtag || function() {
        (window.gtag as any).q = (window.gtag as any).q || [];
        (window.gtag as any).q.push(arguments);
      };
      
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

// Enhanced analytics event tracking functions
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      page_location: window.location.href
    });
  }
  
  // Also log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.log('Analytics Event:', eventName, parameters);
  }
};

export const trackNewsletterSignup = (email: string, source: string = 'newsletter_form') => {
  trackEvent('newsletter_signup', {
    method: source,
    user_email: email,
    conversion_value: 1,
    currency: 'USD'
  });
};

export const trackButtonClick = (buttonName: string, location: string, action: string = 'click') => {
  trackEvent('button_click', {
    button_name: buttonName,
    click_location: location,
    action: action,
    engagement_type: 'cta_interaction'
  });
};

export const trackBlogRead = (postTitle: string, postSlug: string) => {
  trackEvent('blog_read', {
    post_title: postTitle,
    post_slug: postSlug,
    content_type: 'blog_post',
    engagement_type: 'content_view'
  });
};

export const trackPlaybookDownload = (email: string) => {
  trackEvent('playbook_download', {
    method: 'newsletter_signup',
    user_email: email,
    conversion_value: 5,
    currency: 'USD',
    content_type: 'lead_magnet'
  });
};

export const trackSocialShare = (platform: string, postTitle: string) => {
  trackEvent('social_share', {
    platform: platform,
    post_title: postTitle,
    engagement_type: 'social_interaction'
  });
};

export const trackResourceClick = (resourceName: string, resourceType: string) => {
  trackEvent('resource_click', {
    resource_name: resourceName,
    resource_type: resourceType,
    engagement_type: 'resource_access'
  });
};

export const trackScrollMilestone = (percentage: number) => {
  trackEvent('scroll_milestone', {
    scroll_percentage: percentage,
    engagement_type: 'page_engagement'
  });
};

export default Analytics;
