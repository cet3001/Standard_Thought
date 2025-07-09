# Mobile Testing Checklist - StandardThought.com

## 🎯 Pre-Testing Setup
- [ ] Clear browser cache and cookies
- [ ] Test in both portrait and landscape orientations
- [ ] Test with slow network connections (3G simulation)
- [ ] Test with various zoom levels (100%, 150%, 200%)

## 📱 Device Testing Matrix

### iPhone SE (375x667) - Ultra Compact
**Test Scenarios:**
- [ ] Navigation menu opens and closes smoothly
- [ ] All text is readable without horizontal scrolling
- [ ] CTA buttons are easily tappable (minimum 48px)
- [ ] Form inputs don't trigger unwanted zoom
- [ ] Images load and scale properly
- [ ] Hero text scales appropriately
- [ ] Footer elements stack correctly

**Expected Results:**
- Navigation: Sidebar menu with large touch targets
- Typography: Scaled down but readable (h1: 1.5rem)
- CTAs: Prominent buttons with 56px minimum height
- Forms: 16px font-size to prevent iOS zoom

### iPhone 12 (390x844) - Standard Modern
**Test Scenarios:**
- [ ] Full hero section displays without cutting off
- [ ] Newsletter signup form is prominently placed
- [ ] Blog post cards display in single column
- [ ] Social proof section is readable
- [ ] Value proposition cards stack properly
- [ ] Blueprint pillars display clearly

**Expected Results:**
- Hero: Full impact with readable large text
- Cards: Single column layout with adequate spacing
- CTAs: Prominent and accessible
- Navigation: Smooth hamburger menu interaction

### iPhone 14 Pro (393x852) - Latest iOS
**Test Scenarios:**
- [ ] Dynamic Island doesn't interfere with fixed nav
- [ ] Safe area respected in all orientations
- [ ] Animations perform smoothly
- [ ] Dark mode transitions work properly
- [ ] Landscape mode optimization active

**Expected Results:**
- Navigation: Respects safe areas
- Performance: Smooth 60fps animations
- Dark mode: Proper contrast ratios
- Landscape: Reduced vertical padding

### Galaxy S21 (360x800) - Popular Android
**Test Scenarios:**
- [ ] Chrome browser zoom behavior
- [ ] Touch targets meet Material Design specs (48dp)
- [ ] Form submission works correctly
- [ ] Back button navigation functions
- [ ] PWA install prompt appears

**Expected Results:**
- Touch targets: 48px minimum (Material Design)
- Forms: No zoom issues on focus
- Navigation: Android back button support
- PWA: Install banner appears

### Pixel 7 (412x915) - Google Reference
**Test Scenarios:**
- [ ] Google Fonts load correctly
- [ ] Search Console verification works
- [ ] Analytics tracking functions
- [ ] Progressive Web App features
- [ ] Accessibility features work

**Expected Results:**
- Fonts: Crisp rendering
- Analytics: Events fire correctly
- PWA: Full functionality
- A11y: Screen reader compatibility

## 🔍 Critical UI Elements to Test

### Navigation & Menu
- [ ] Hamburger menu icon is visible and tappable
- [ ] Menu slides in smoothly from left
- [ ] Menu items have adequate spacing
- [ ] Menu closes when item is selected
- [ ] Backdrop dimming works properly

### Hero Section
- [ ] Large headings scale appropriately
- [ ] Gradient text effects render correctly
- [ ] CTA buttons are prominent and tappable
- [ ] Background images load efficiently
- [ ] Text remains readable over backgrounds

### Forms & Inputs
- [ ] Input fields are large enough to tap
- [ ] Labels and placeholders are visible
- [ ] Form validation messages appear clearly
- [ ] Submit buttons are prominent
- [ ] No unwanted zoom on input focus

### Blog & Content
- [ ] Blog post cards stack properly
- [ ] Featured images load and scale correctly
- [ ] Read more buttons are accessible
- [ ] Related posts display properly
- [ ] Text content is readable

### Footer & Legal
- [ ] Footer links are tappable
- [ ] Legal pages format correctly
- [ ] Cookie banner is properly sized
- [ ] Contact information is accessible

## ⚡ Performance Benchmarks

### Loading Times (3G Network)
- [ ] **First Contentful Paint**: < 3 seconds
- [ ] **Largest Contentful Paint**: < 4 seconds
- [ ] **Time to Interactive**: < 5 seconds
- [ ] **Cumulative Layout Shift**: < 0.1

### Core Web Vitals
- [ ] **LCP**: Good (< 2.5s)
- [ ] **FID**: Good (< 100ms)
- [ ] **CLS**: Good (< 0.1)

### Network Optimization
- [ ] Images are compressed and optimized
- [ ] CSS and JS are minified
- [ ] Critical resources are preloaded
- [ ] Non-critical resources are lazy loaded

## 🔧 Common Issues & Solutions

### Issue: Text Too Small on iPhone SE
**Solution**: Implemented responsive typography scaling
```css
@media (max-width: 375px) {
  .text-6xl { font-size: 2rem; }
  .text-5xl { font-size: 1.75rem; }
}
```

### Issue: CTA Buttons Too Small
**Solution**: Enhanced touch targets
```css
.cta-button {
  min-height: 56px;
  padding: 16px 24px;
  font-size: 18px;
}
```

### Issue: iOS Form Zoom
**Solution**: Prevent unwanted zoom
```css
input, textarea {
  font-size: 16px; /* Minimum to prevent zoom */
}
```

### Issue: Navigation Overlap
**Solution**: Proper z-index hierarchy
```css
.mobile-nav { z-index: 9999; }
.mobile-menu-overlay { z-index: 9998; }
```

## 📊 Testing Tools

### Browser DevTools
- Chrome DevTools Device Simulation
- Firefox Responsive Design Mode
- Safari Web Inspector

### Online Testing
- BrowserStack (paid)
- LambdaTest (paid)
- CrossBrowserTesting (paid)

### Performance Testing
- Google PageSpeed Insights
- WebPageTest.org
- GTmetrix

### Accessibility Testing
- WAVE Web Accessibility Evaluator
- axe DevTools
- Lighthouse Accessibility Audit

## ✅ Sign-Off Criteria

### Functionality
- [ ] All interactive elements work correctly
- [ ] Navigation is intuitive and accessible
- [ ] Forms submit successfully
- [ ] Content is readable and well-formatted

### Performance
- [ ] Page loads in under 3 seconds on 3G
- [ ] Animations are smooth (60fps)
- [ ] No layout shifts or janky scrolling
- [ ] Images load progressively

### Accessibility
- [ ] Touch targets meet minimum size requirements
- [ ] Text contrast ratios are adequate
- [ ] Screen reader compatibility verified
- [ ] Keyboard navigation works

### Cross-Device Consistency
- [ ] Brand colors display consistently
- [ ] Typography scales appropriately
- [ ] Layout adapts to different screen sizes
- [ ] Interactions feel native to each platform

---

**Testing Completed**: ___/___/___  
**Tested By**: ________________  
**Next Review**: Monthly or after major updates