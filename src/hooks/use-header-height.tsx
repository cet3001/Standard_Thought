import { useState, useEffect } from 'react';

export const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      // Find the header/nav element
      const header = document.querySelector('nav') || document.querySelector('header');
      if (header) {
        const height = header.getBoundingClientRect().height;
        setHeaderHeight(height);
      }
    };

    // Initial measurement
    updateHeaderHeight();

    // Update on resize
    window.addEventListener('resize', updateHeaderHeight);
    
    // Update after DOM changes (in case header content changes)
    const observer = new MutationObserver(updateHeaderHeight);
    const header = document.querySelector('nav') || document.querySelector('header');
    if (header) {
      observer.observe(header, { 
        childList: true, 
        subtree: true, 
        attributes: true 
      });
    }

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      observer.disconnect();
    };
  }, []);

  return headerHeight;
};