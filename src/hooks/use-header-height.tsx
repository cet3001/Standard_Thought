import { useState, useEffect } from 'react';

export const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(80); // Better initial fallback

  useEffect(() => {
    const updateHeaderHeight = () => {
      // Grab ALL fixed/sticky elements at the very top
      // This includes: DynamicTicker (announcement bar) + Navigation
      let totalHeight = 0;
      
      // Get the ticker/announcement bar
      const ticker = document.querySelector('[class*="ticker"]') || 
                    document.querySelector('[class*="dynamic"]') ||
                    document.querySelector('.fixed.top-0:first-child');
      
      // Get the navigation
      const nav = document.querySelector('nav') || document.querySelector('header');
      
      if (ticker) {
        totalHeight += ticker.getBoundingClientRect().height;
      }
      if (nav) {
        totalHeight += nav.getBoundingClientRect().height;
      }
      
      console.log('Header height calculation:', { 
        ticker: ticker?.getBoundingClientRect().height || 0,
        nav: nav?.getBoundingClientRect().height || 0,
        total: totalHeight 
      });
      
      setHeaderHeight(totalHeight);
    };

    // Initial measurement
    updateHeaderHeight();

    // Update on resize
    window.addEventListener('resize', updateHeaderHeight);
    
    // Update after DOM changes for both ticker and nav
    const observers: MutationObserver[] = [];
    const elementsToWatch = [
      document.querySelector('[class*="ticker"]'),
      document.querySelector('[class*="dynamic"]'), 
      document.querySelector('nav'),
      document.querySelector('header')
    ].filter(Boolean);

    elementsToWatch.forEach(element => {
      if (element) {
        const observer = new MutationObserver(updateHeaderHeight);
        observer.observe(element, { 
          childList: true, 
          subtree: true, 
          attributes: true 
        });
        observers.push(observer);
      }
    });

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  return headerHeight;
};