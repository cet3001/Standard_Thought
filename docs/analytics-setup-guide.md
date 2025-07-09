# Google Analytics & Search Console Setup Guide

## Overview
This document provides step-by-step instructions for setting up Google Analytics 4 and Google Search Console for StandardThought.com.

## 🔧 Implementation Status

### Google Analytics 4 (GA4)
- **Status**: ✅ Code implemented in `index.html`
- **Location**: Global header (lines 10-18)
- **Configuration**: SPA-optimized (page views disabled for manual tracking)

### Google Search Console
- **Status**: ✅ Meta tag implemented in `index.html`
- **Location**: Global header (line 21)
- **Verification**: Meta tag method (recommended)

## 📋 Setup Instructions

### Step 1: Google Analytics 4 Setup
1. **Create GA4 Property**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create new property for "standardthought.com"
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Update Tracking Code**:
   - Replace `GA_MEASUREMENT_ID` in `index.html` with your actual Measurement ID
   - Replace both instances (line 11 and line 16)

3. **Configure Enhanced Measurement**:
   - Enable: Page views, Scrolls, Outbound clicks, Site search, Video engagement
   - Disable: File downloads (unless needed)

### Step 2: Google Search Console Setup
1. **Add Property**:
   - Go to [Google Search Console](https://search.google.com/search-console/)
   - Add property for "https://www.standardthought.com"
   - Choose "URL prefix" method

2. **Verify Ownership**:
   - Select "HTML tag" verification method
   - Copy the verification code
   - Replace `GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` in `index.html`

3. **Submit Sitemap**:
   - Go to Sitemaps section
   - Submit: `https://www.standardthought.com/sitemap_index.xml`

## 🎯 Custom Event Tracking

### Page Views (SPA)
```javascript
// Track page views manually for single-page app
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: 'Page Title',
  page_location: window.location.href,
  page_path: window.location.pathname
});
```

### Newsletter Signups
```javascript
gtag('event', 'newsletter_signup', {
  event_category: 'engagement',
  event_label: 'header_form',
  value: 1
});
```

### Guide Downloads
```javascript
gtag('event', 'guide_download', {
  event_category: 'conversion',
  event_label: guide_name,
  value: 1
});
```

### Blog Post Engagement
```javascript
gtag('event', 'blog_read', {
  event_category: 'content',
  event_label: post_title,
  value: 1
});
```

## 📊 Key Metrics to Monitor

### Traffic Metrics
- **Page Views**: Total pages viewed
- **Sessions**: User sessions
- **Users**: Unique visitors
- **Bounce Rate**: Single-page sessions
- **Session Duration**: Average time on site

### Engagement Metrics
- **Newsletter Signups**: Conversion rate
- **Guide Downloads**: Lead generation
- **Blog Engagement**: Content performance
- **Mobile vs Desktop**: User behavior

### Search Performance (GSC)
- **Impressions**: How often site appears in search
- **Clicks**: Traffic from search results
- **CTR**: Click-through rate from search
- **Average Position**: Search ranking position

## 🔍 Verification Checklist

### Google Analytics
- [ ] Measurement ID added to `index.html`
- [ ] Real-time data showing in GA4 dashboard
- [ ] Enhanced measurement configured
- [ ] Custom events firing correctly
- [ ] Audiences and conversions set up

### Google Search Console
- [ ] Verification meta tag added to `index.html`
- [ ] Property verified in GSC dashboard
- [ ] Sitemap submitted successfully
- [ ] No crawl errors reported
- [ ] Core Web Vitals data available

## 📱 Testing & Validation

### Analytics Testing
1. **Real-time Reports**: Check GA4 real-time tab
2. **Google Tag Assistant**: Chrome extension for debugging
3. **GA4 DebugView**: Enable debug mode for testing
4. **Network Tab**: Verify gtag requests in browser dev tools

### Search Console Testing
1. **URL Inspection**: Test any page URL
2. **Sitemap Status**: Verify sitemap is processed
3. **Coverage Report**: Check for indexing issues
4. **Performance**: Monitor search impressions

## 🚨 Common Issues & Solutions

### Analytics Not Tracking
- **Check Measurement ID**: Ensure correct format (G-XXXXXXXXXX)
- **Ad Blockers**: Test in incognito mode
- **SPA Issues**: Verify manual page view tracking
- **GDPR/Cookie Consent**: May block tracking

### Search Console Issues
- **Verification Failed**: Check meta tag syntax
- **Sitemap Errors**: Validate XML sitemap format
- **Crawl Errors**: Review robots.txt file
- **Index Coverage**: Monitor for crawl issues

## 📈 Expected Timeline

### Analytics Data
- **Real-time**: Immediate (within minutes)
- **Standard Reports**: 24-48 hours
- **Audience Insights**: 1-7 days (depends on traffic)
- **Search Console**: 1-3 days

### Search Console Data
- **Verification**: Immediate
- **Crawl Data**: 1-3 days
- **Search Performance**: 1-3 days
- **Core Web Vitals**: 28 days (for sufficient data)

## 🔗 Quick Links

- [Google Analytics Dashboard](https://analytics.google.com/)
- [Google Search Console Dashboard](https://search.google.com/search-console/)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Search Console Help](https://support.google.com/webmasters/)

## 📞 Support

For issues with this setup:
1. Check Google's official documentation
2. Use Google Tag Assistant for debugging
3. Verify all placeholder values are replaced with actual IDs
4. Test in multiple browsers and devices

---

**Last Updated**: January 2025
**Next Review**: Monthly analytics review recommended