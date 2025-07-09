// Google Analytics 4 tracking utilities for StandardThought
// Handles SPA navigation and custom event tracking

// Check if GA4 is loaded
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page views for SPA
export const trackPageView = (path: string, title?: string) => {
  if (!isGALoaded()) return;
  
  window.gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: title || document.title,
    page_location: `${window.location.origin}${path}`,
    page_path: path,
    send_page_view: true
  });
};

// Track newsletter signups
export const trackNewsletterSignup = (source: string = 'unknown') => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'newsletter_signup', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
};

// Track guide downloads
export const trackGuideDownload = (guideName: string) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'guide_download', {
    event_category: 'conversion',
    event_label: guideName,
    value: 1
  });
};

// Track blog post engagement
export const trackBlogRead = (postTitle: string, category: string) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'blog_read', {
    event_category: 'content',
    event_label: postTitle,
    custom_parameters: {
      content_category: category
    }
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'click', {
    event_category: 'engagement',
    event_label: `${buttonName}_${location}`,
    value: 1
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'form_submit', {
    event_category: success ? 'conversion' : 'engagement',
    event_label: formName,
    value: success ? 1 : 0
  });
};

// Track external link clicks
export const trackExternalClick = (url: string, linkText: string) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'click', {
    event_category: 'outbound',
    event_label: url,
    transport_type: 'beacon',
    custom_parameters: {
      link_text: linkText
    }
  });
};

// Track search usage
export const trackSiteSearch = (searchTerm: string, resultsCount: number) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'search', {
    search_term: searchTerm,
    event_category: 'engagement',
    custom_parameters: {
      results_count: resultsCount
    }
  });
};

// Track video engagement
export const trackVideoPlay = (videoTitle: string, duration: number) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'video_play', {
    event_category: 'engagement',
    event_label: videoTitle,
    value: duration
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'scroll', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    value: percentage
  });
};

// Track time on page
export const trackTimeOnPage = (seconds: number, pagePath: string) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'page_view_time', {
    event_category: 'engagement',
    event_label: pagePath,
    value: seconds
  });
};

// Enhanced ecommerce tracking (for future guide sales)
export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'USD',
    items: items
  });
};

// Track custom conversion events
export const trackConversion = (conversionName: string, value?: number) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', 'conversion', {
    event_category: 'conversion',
    event_label: conversionName,
    value: value || 1
  });
};

// Debug function for testing
export const debugTracking = () => {
  if (!isGALoaded()) {
    console.warn('Google Analytics not loaded');
    return;
  }
  
  console.log('GA4 Debug: Tracking test event');
  window.gtag('event', 'debug_test', {
    event_category: 'debug',
    event_label: 'tracking_test',
    value: 1
  });
};