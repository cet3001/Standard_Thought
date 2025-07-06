import { useEffect } from 'react';

const AltTextOptimizer = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    // Scan for images without alt text
    const scanImages = () => {
      const images = document.querySelectorAll('img');
      const missingAlt: HTMLImageElement[] = [];
      const emptyAlt: HTMLImageElement[] = [];
      const goodAlt: HTMLImageElement[] = [];

      images.forEach(img => {
        if (!img.hasAttribute('alt')) {
          missingAlt.push(img);
        } else if (img.alt.trim() === '') {
          emptyAlt.push(img);
        } else if (img.alt.length > 10) {
          goodAlt.push(img);
        }
      });

      // Log audit results
      if (missingAlt.length > 0 || emptyAlt.length > 0) {
        console.group('🖼️ ALT TEXT AUDIT');
        if (missingAlt.length > 0) {
          console.warn(`❌ ${missingAlt.length} images missing alt attributes:`, missingAlt);
        }
        if (emptyAlt.length > 0) {
          console.warn(`⚠️ ${emptyAlt.length} images with empty alt text:`, emptyAlt);
        }
        console.log(`✅ ${goodAlt.length} images with proper alt text`);
        console.groupEnd();
      }
    };

    // Run scan after page load
    if (document.readyState === 'complete') {
      scanImages();
    } else {
      window.addEventListener('load', scanImages);
    }

    return () => {
      window.removeEventListener('load', scanImages);
    };
  }, []);

  return null;
};

export default AltTextOptimizer;