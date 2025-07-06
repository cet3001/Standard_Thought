
declare global {
  interface Window {
    gtag: {
      (...args: unknown[]): void;
      q?: unknown[];
    };
  }
}

export interface AnalyticsEventParams {
  [key: string]: unknown;
  timestamp?: string;
  user_agent?: string;
  page_location?: string;
}

export interface NewsletterSignupParams extends AnalyticsEventParams {
  method: string;
  user_email: string;
  conversion_value: number;
  currency: string;
}

export interface ButtonClickParams extends AnalyticsEventParams {
  button_name: string;
  click_location: string;
  action: string;
  engagement_type: string;
}

export interface BlogReadParams extends AnalyticsEventParams {
  post_title: string;
  post_slug: string;
  content_type: string;
  engagement_type: string;
}

export interface PlaybookDownloadParams extends AnalyticsEventParams {
  method: string;
  user_email: string;
  conversion_value: number;
  currency: string;
  content_type: string;
}

export interface SocialShareParams extends AnalyticsEventParams {
  platform: string;
  post_title: string;
  engagement_type: string;
}

export interface ResourceClickParams extends AnalyticsEventParams {
  resource_name: string;
  resource_type: string;
  engagement_type: string;
}

export interface ScrollMilestoneParams extends AnalyticsEventParams {
  scroll_percentage: number;
  engagement_type: string;
}

// Enhanced analytics event tracking functions
export const trackEvent = (eventName: string, parameters?: AnalyticsEventParams) => {
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
  const params: NewsletterSignupParams = {
    method: source,
    user_email: email,
    conversion_value: 1,
    currency: 'USD'
  };
  trackEvent('newsletter_signup', params);
  
  // Also track as conversion
  trackNewsletterConversion(email, source);
};

// Track newsletter signup conversions
export const trackNewsletterConversion = (email: string, source: string = 'newsletter_form') => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Goal conversion for GA4
    window.gtag('event', 'conversion', {
      send_to: 'G-PT7T8CDJZS/newsletter_signup',
      value: 1.0,
      currency: 'USD',
      email_address: email,
      conversion_source: source
    });
    
    // Custom event for detailed tracking
    window.gtag('event', 'newsletter_signup', {
      method: source,
      user_email: email,
      conversion_value: 1,
      currency: 'USD',
      event_category: 'Lead Generation',
      event_label: 'Newsletter Subscription'
    });
  }
};

export const trackButtonClick = (buttonName: string, location: string, action: string = 'click') => {
  const params: ButtonClickParams = {
    button_name: buttonName,
    click_location: location,
    action: action,
    engagement_type: 'cta_interaction'
  };
  trackEvent('button_click', params);
};

export const trackBlogRead = (postTitle: string, postSlug: string) => {
  const params: BlogReadParams = {
    post_title: postTitle,
    post_slug: postSlug,
    content_type: 'blog_post',
    engagement_type: 'content_view'
  };
  trackEvent('blog_read', params);
};

export const trackPlaybookDownload = (email: string) => {
  const params: PlaybookDownloadParams = {
    method: 'newsletter_signup',
    user_email: email,
    conversion_value: 5,
    currency: 'USD',
    content_type: 'lead_magnet'
  };
  trackEvent('playbook_download', params);
};

export const trackSocialShare = (platform: string, postTitle: string) => {
  const params: SocialShareParams = {
    platform: platform,
    post_title: postTitle,
    engagement_type: 'social_interaction'
  };
  trackEvent('social_share', params);
};

export const trackResourceClick = (resourceName: string, resourceType: string) => {
  const params: ResourceClickParams = {
    resource_name: resourceName,
    resource_type: resourceType,
    engagement_type: 'resource_access'
  };
  trackEvent('resource_click', params);
};

export const trackScrollMilestone = (percentage: number) => {
  const params: ScrollMilestoneParams = {
    scroll_percentage: percentage,
    engagement_type: 'page_engagement'
  };
  trackEvent('scroll_milestone', params);
};
