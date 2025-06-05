import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
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
      });
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

// Analytics event tracking functions
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackNewsletterSignup = (email: string) => {
  trackEvent('newsletter_signup', {
    method: 'footer_form',
    user_email: email,
  });
};

export const trackBlogRead = (postTitle: string, postSlug: string) => {
  trackEvent('blog_read', {
    post_title: postTitle,
    post_slug: postSlug,
  });
};

export const trackPlaybookDownload = (email: string) => {
  trackEvent('playbook_download', {
    method: 'newsletter_signup',
    user_email: email,
  });
};

export const trackSocialShare = (platform: string, postTitle: string) => {
  trackEvent('social_share', {
    platform: platform,
    post_title: postTitle,
  });
};

export default Analytics;
