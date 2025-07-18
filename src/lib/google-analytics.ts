import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// GA4 Configuration with environment variable
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // This will be replaced with actual tracking ID

interface GAConfig {
  trackingId: string;
  testMode?: boolean;
}

class GoogleAnalytics {
  private static instance: GoogleAnalytics;
  private initialized = false;
  private config: GAConfig;

  private constructor() {
    this.config = {
      trackingId: GA_TRACKING_ID,
      testMode: false // Set to true for development
    };
  }

  static getInstance(): GoogleAnalytics {
    if (!GoogleAnalytics.instance) {
      GoogleAnalytics.instance = new GoogleAnalytics();
    }
    return GoogleAnalytics.instance;
  }

  initialize() {
    if (this.initialized || this.config.testMode) return;

    try {
      ReactGA.initialize(this.config.trackingId, {
        testMode: this.config.testMode,
        gaOptions: {
          userId: undefined
        }
      });
      
      this.initialized = true;
      console.log('Google Analytics initialized');
    } catch (error) {
      console.error('Failed to initialize Google Analytics:', error);
    }
  }

  // Track page views with urban wealth context
  trackPageView(path: string, title?: string) {
    if (!this.initialized && !this.config.testMode) return;

    const pageData = {
      page_title: title || document.title,
      page_location: window.location.href,
      content_group1: this.getContentCategory(path),
      content_group2: this.getWealthPillar(path),
      content_group3: this.getEngagementType(path)
    };

    if (this.config.testMode) {
      console.log('GA Test Mode - Page View:', pageData);
      return;
    }

    ReactGA.send({ hitType: 'pageview', ...pageData });
  }

  // Track engagement events for urban wealth content
  trackEngagement(action: string, category: string, label?: string, value?: number) {
    if (!this.initialized && !this.config.testMode) return;

    const eventData = {
      action,
      category,
      label,
      value,
      // Custom parameters for urban wealth tracking
      custom_parameters: {
        wealth_building_stage: this.getWealthBuildingStage(category),
        community_focus: this.getCommunityFocus(label),
        grit_factor: this.getGritFactor(action)
      }
    };

    if (this.config.testMode) {
      console.log('GA Test Mode - Event:', eventData);
      return;
    }

    ReactGA.event(eventData);
  }

  // Track blog post performance with mindset analysis
  trackBlogEngagement(postSlug: string, action: string, timeOnPage?: number) {
    const category = 'Blog Engagement';
    const label = postSlug;

    // Enhanced tracking for mindset content
    const engagementData = {
      action,
      category,
      label,
      value: timeOnPage,
      custom_parameters: {
        post_slug: postSlug,
        engagement_type: action,
        time_on_page: timeOnPage,
        mindset_content: this.isMindsetContent(postSlug),
        wealth_pillar: this.getWealthPillarFromSlug(postSlug),
        grit_score: this.calculateGritScore(postSlug, action, timeOnPage)
      }
    };

    this.trackEngagement(action, category, label, timeOnPage);
    
    // Store for admin analytics
    this.storeBlogAnalytics(engagementData);
  }

  // Track bounces with context
  trackBounce(path: string, timeOnPage: number) {
    const category = 'Bounce Tracking';
    const isMindsetContent = this.isMindsetContent(path);
    
    this.trackEngagement('bounce', category, path, timeOnPage);
    
    // Alert if high bounce on mindset content
    if (isMindsetContent && timeOnPage < 30) {
      this.triggerMindsetAlert(path, timeOnPage);
    }
  }

  // Private helper methods
  private getContentCategory(path: string): string {
    if (path.includes('/blog')) return 'Financial Education';
    if (path.includes('/credit')) return 'Credit Building';
    if (path.includes('/cash-management')) return 'Cash Management';
    if (path.includes('/investing')) return 'Investing';
    if (path.includes('/ai-side-hustles')) return 'Income Generation';
    return 'General';
  }

  private getWealthPillar(path: string): string {
    if (path.includes('/credit')) return 'Credit Mastery';
    if (path.includes('/cash-management')) return 'Cash Flow';
    if (path.includes('/investing')) return 'Investment Strategy';
    if (path.includes('/ai-side-hustles')) return 'Modern Hustles';
    return 'Foundation';
  }

  private getEngagementType(path: string): string {
    if (path.includes('/blog/')) return 'Deep Learning';
    if (path === '/') return 'Discovery';
    if (path.includes('/sales')) return 'Action Taking';
    return 'Exploration';
  }

  private getWealthBuildingStage(category: string): string {
    switch (category) {
      case 'Credit Building': return 'Foundation';
      case 'Cash Management': return 'Stability';
      case 'Investing': return 'Growth';
      case 'Income Generation': return 'Acceleration';
      default: return 'Awareness';
    }
  }

  private getCommunityFocus(label?: string): string {
    if (!label) return 'General';
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('black') || lowerLabel.includes('community')) return 'Community Focused';
    if (lowerLabel.includes('generational') || lowerLabel.includes('legacy')) return 'Generational Wealth';
    if (lowerLabel.includes('first-gen') || lowerLabel.includes('urban')) return 'First Generation';
    return 'General';
  }

  private getGritFactor(action: string): number {
    // Score actions based on "grit" level (1-10)
    switch (action) {
      case 'guide_download': return 8;
      case 'newsletter_signup': return 6;
      case 'blog_complete_read': return 7;
      case 'video_watch_complete': return 9;
      case 'bounce': return 1;
      default: return 5;
    }
  }

  private isMindsetContent(pathOrSlug: string): boolean {
    const mindsetKeywords = ['mindset', 'grit', 'legacy', 'generational', 'wealth-building', 'community'];
    return mindsetKeywords.some(keyword => pathOrSlug.toLowerCase().includes(keyword));
  }

  private getWealthPillarFromSlug(slug: string): string {
    if (slug.includes('credit')) return 'Credit Mastery';
    if (slug.includes('cash') || slug.includes('money')) return 'Cash Flow';
    if (slug.includes('invest')) return 'Investment Strategy';
    if (slug.includes('ai') || slug.includes('hustle')) return 'Modern Hustles';
    return 'Mindset & Foundation';
  }

  private calculateGritScore(slug: string, action: string, timeOnPage?: number): number {
    let score = this.getGritFactor(action);
    
    // Boost for mindset content engagement
    if (this.isMindsetContent(slug)) score += 2;
    
    // Boost for time spent
    if (timeOnPage && timeOnPage > 120) score += 1;
    if (timeOnPage && timeOnPage > 300) score += 2;
    
    return Math.min(score, 10);
  }

  private storeBlogAnalytics(data: any) {
    // Store in localStorage for admin dashboard access
    const analytics = JSON.parse(localStorage.getItem('urbanWealthAnalytics') || '[]');
    analytics.push({
      ...data,
      timestamp: new Date().toISOString()
    });
    
    // Keep only last 100 entries
    if (analytics.length > 100) {
      analytics.splice(0, analytics.length - 100);
    }
    
    localStorage.setItem('urbanWealthAnalytics', JSON.stringify(analytics));
  }

  private triggerMindsetAlert(path: string, timeOnPage: number) {
    // Store alert for admin dashboard
    const alerts = JSON.parse(localStorage.getItem('urbanWealthAlerts') || '[]');
    alerts.push({
      type: 'mindset_bounce',
      message: 'Challenge: Is this watering down the grit?',
      path,
      timeOnPage,
      timestamp: new Date().toISOString(),
      severity: timeOnPage < 15 ? 'high' : 'medium'
    });
    
    localStorage.setItem('urbanWealthAlerts', JSON.stringify(alerts));
    console.warn(`Mindset content bounce alert: ${path} (${timeOnPage}s)`);
  }
}

// React Hook for GA integration
export const useGoogleAnalytics = () => {
  const location = useLocation();
  const ga = GoogleAnalytics.getInstance();

  useEffect(() => {
    ga.initialize();
  }, []);

  useEffect(() => {
    ga.trackPageView(location.pathname + location.search);
  }, [location]);

  // Track time on page for bounce detection
  useEffect(() => {
    const startTime = Date.now();
    let pageVisible = true;

    const handleVisibilityChange = () => {
      pageVisible = !document.hidden;
    };

    const handleBeforeUnload = () => {
      if (pageVisible) {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (timeOnPage < 60) {
          ga.trackBounce(location.pathname, timeOnPage);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      
      // Track time on page when component unmounts
      if (pageVisible) {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (timeOnPage > 60) {
          ga.trackEngagement('page_engagement', 'Time on Page', location.pathname, timeOnPage);
        }
      }
    };
  }, [location.pathname]);

  return {
    trackEvent: ga.trackEngagement.bind(ga),
    trackBlogEngagement: ga.trackBlogEngagement.bind(ga),
    trackPageView: ga.trackPageView.bind(ga)
  };
};

export default GoogleAnalytics;
