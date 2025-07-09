# Analytics Verification Checklist

## 🚀 Quick Setup Actions Required

### 1. Replace Placeholder Values
- [ ] Replace `GA_MEASUREMENT_ID` in `index.html` with actual GA4 Measurement ID
- [ ] Replace `GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` with actual verification code
- [ ] Update `GA_MEASUREMENT_ID` in `src/lib/analytics-tracking.ts` with same GA4 ID

### 2. Google Analytics 4 Setup
- [ ] Create GA4 property at [analytics.google.com](https://analytics.google.com)
- [ ] Copy Measurement ID (format: G-XXXXXXXXXX)
- [ ] Configure Enhanced Measurement in GA4 property
- [ ] Test real-time tracking (visit site and check real-time reports)

### 3. Google Search Console Setup
- [ ] Add property at [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Choose "URL prefix" method for https://www.standardthought.com
- [ ] Select "HTML tag" verification method
- [ ] Copy verification code and replace in `index.html`
- [ ] Submit sitemap: `https://www.standardthought.com/sitemap_index.xml`

## 🔍 Verification Steps

### Google Analytics Verification
1. **Real-time Test**:
   - Visit your site in a new browser tab
   - Go to GA4 → Reports → Real-time
   - Verify you see your session appear

2. **Page View Tracking**:
   - Navigate between pages on your site
   - Check that page views are tracked correctly
   - Verify SPA navigation is working

3. **Event Tracking**:
   - Test newsletter signup
   - Test guide download
   - Test blog post reading
   - Check Events section in GA4

### Google Search Console Verification
1. **Ownership Verification**:
   - Click "Verify" in Google Search Console
   - Should show green checkmark if successful

2. **Sitemap Submission**:
   - Go to Sitemaps section
   - Submit sitemap URL
   - Check for processing status

3. **URL Inspection**:
   - Test any page URL using URL inspection tool
   - Verify page can be indexed

## 📊 Expected Data Timeline

### Google Analytics
- **Real-time data**: Immediate (within 1-2 minutes)
- **Standard reports**: 24-48 hours for full data
- **Audience insights**: 1-7 days depending on traffic

### Google Search Console
- **Verification**: Immediate
- **Crawl data**: 1-3 days
- **Search performance**: 1-3 days
- **Core Web Vitals**: 28 days for sufficient data

## 🔧 Testing Commands

### Browser Console Tests
```javascript
// Test if GA4 is loaded
console.log(typeof window.gtag); // Should return 'function'

// Test tracking event
window.gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'verification'
});
```

### Network Tab Verification
1. Open browser DevTools → Network tab
2. Navigate to your site
3. Filter by "google-analytics.com" or "gtag"
4. Should see requests being sent to GA4

## 📋 Post-Setup Checklist

### Day 1: Immediate Verification
- [ ] Real-time GA4 data showing
- [ ] Google Search Console verified
- [ ] No JavaScript errors in console
- [ ] Network requests to GA4 visible

### Day 2-3: Initial Data Review
- [ ] Page views data in GA4
- [ ] Basic user behavior metrics
- [ ] Search Console showing crawl activity
- [ ] No major tracking issues

### Week 1: Full Setup Review
- [ ] All custom events working
- [ ] Search Console sitemap processed
- [ ] Core Web Vitals data starting to appear
- [ ] No performance issues from tracking

## 🚨 Common Issues & Solutions

### GA4 Not Tracking
```
Issue: No data in real-time reports
Solutions:
1. Check Measurement ID is correct
2. Verify no ad blockers are interfering
3. Test in incognito mode
4. Check browser console for errors
```

### Search Console Verification Failed
```
Issue: Verification meta tag not found
Solutions:
1. Verify meta tag is in <head> section
2. Check for typos in verification code
3. Clear browser cache and try again
4. Use alternative verification method
```

## 📞 Support Resources

- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Search Console Help](https://support.google.com/webmasters/)
- [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by/kejbdjndbnbjgmefkgdddjlbokphdefk)

## 🎯 Success Metrics

Your setup is successful when:
- ✅ Real-time GA4 data appears within 5 minutes
- ✅ Page navigation tracked correctly
- ✅ Custom events firing properly
- ✅ Google Search Console verified
- ✅ Sitemap submitted and processing
- ✅ No performance impact on site speed

---

**Created**: January 2025  
**Status**: Setup Required  
**Next Review**: 48 hours after implementation