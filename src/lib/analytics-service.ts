import ReactGA from 'react-ga4';

// Google Analytics Measurement ID (public key, safe to include)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

class AnalyticsService {
  private isInitialized = false;

  init() {
    if (this.isInitialized) return;
    
    try {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        testMode: false,
        gtagOptions: {
          send_page_view: false // We'll send page views manually
        }
      });
      this.isInitialized = true;
      console.log('Google Analytics initialized');
    } catch (error) {
      console.error('Failed to initialize Google Analytics:', error);
    }
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    if (!this.isInitialized) return;
    
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title || document.title
    });
    
    console.log('Page view tracked:', path);
  }

  // Track blog post engagement
  trackBlogEngagement(action: string, postSlug: string, category?: string) {
    if (!this.isInitialized) return;
    
    ReactGA.event({
      category: 'Blog Engagement',
      action: action,
      label: postSlug,
      value: category === 'mindset' ? 1 : 0, // Special tracking for mindset content
    });
    
    console.log('Blog engagement tracked:', { action, postSlug, category });
  }

  // Track wealth building content interactions
  trackWealthContent(action: string, contentType: string, pillar: string) {
    if (!this.isInitialized) return;
    
    ReactGA.event({
      category: 'Wealth Building',
      action: action,
      label: `${pillar} - ${contentType}`,
      value: 1
    });
    
    console.log('Wealth content tracked:', { action, contentType, pillar });
  }

  // Track form submissions (newsletter, guides, etc.)
  trackFormSubmission(formType: string, success: boolean) {
    if (!this.isInitialized) return;
    
    ReactGA.event({
      category: 'Form Submission',
      action: success ? 'Submit Success' : 'Submit Failed',
      label: formType,
      value: success ? 1 : 0
    });
  }

  // Track scroll depth for blog posts
  trackScrollDepth(depth: number, postSlug: string) {
    if (!this.isInitialized) return;
    
    ReactGA.event({
      category: 'Blog Scroll',
      action: `Scroll ${depth}%`,
      label: postSlug,
      value: depth
    });
  }

  // Track time spent on page
  trackTimeOnPage(timeInSeconds: number, pageType: string) {
    if (!this.isInitialized) return;
    
    ReactGA.event({
      category: 'Engagement',
      action: 'Time on Page',
      label: pageType,
      value: Math.round(timeInSeconds)
    });
  }

  // Custom dimension for user journey stage
  private getUserJourneyStage(): string {
    // Logic to determine user journey stage based on behavior
    const hasVisitedCredit = localStorage.getItem('visited_credit') === 'true';
    const hasVisitedInvesting = localStorage.getItem('visited_investing') === 'true';
    const hasDownloadedGuide = localStorage.getItem('downloaded_guide') === 'true';
    const isSubscriber = localStorage.getItem('is_subscriber') === 'true';

    if (hasDownloadedGuide) return 'engaged';
    if (isSubscriber) return 'subscriber';
    if (hasVisitedCredit || hasVisitedInvesting) return 'exploring';
    return 'new_visitor';
  }

  // Track custom events for admin alerts
  trackAlert(alertType: string, metric: string, value: number) {
    if (!this.isInitialized) return;
    
    ReactGA.event({
      category: 'Admin Alert',
      action: alertType,
      label: metric,
      value: value
    });
  }
}

export const analytics = new AnalyticsService();