import { useEffect } from 'react';

const HeadingStructureValidator = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const validateHeadingStructure = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const structure: { level: number; text: string; element: Element }[] = [];
      const issues: string[] = [];

      headings.forEach(heading => {
        const level = parseInt(heading.tagName.substring(1));
        const text = heading.textContent?.trim() || '';
        structure.push({ level, text, element: heading });
      });

      // Check for multiple H1s
      const h1Count = structure.filter(h => h.level === 1).length;
      if (h1Count === 0) {
        issues.push('❌ No H1 found on page');
      } else if (h1Count > 1) {
        issues.push(`⚠️ Multiple H1 tags found (${h1Count})`);
      }

      // Check for proper hierarchy
      for (let i = 1; i < structure.length; i++) {
        const current = structure[i];
        const previous = structure[i - 1];
        
        if (current.level > previous.level + 1) {
          issues.push(`⚠️ Heading hierarchy skip: ${previous.level} → ${current.level} (${current.text})`);
        }
      }

      // Check for empty headings
      const emptyHeadings = structure.filter(h => h.text.length === 0);
      if (emptyHeadings.length > 0) {
        issues.push(`❌ ${emptyHeadings.length} empty headings found`);
      }

      // Log results
      console.group('📝 HEADING STRUCTURE AUDIT');
      if (issues.length > 0) {
        issues.forEach(issue => console.warn(issue));
      } else {
        console.log('✅ Heading structure is valid');
      }
      
      console.log('📋 Heading Outline:', structure.map(h => 
        `${'  '.repeat(h.level - 1)}H${h.level}: ${h.text}`
      ).join('\n'));
      console.groupEnd();
    };

    // Run validation after page load
    if (document.readyState === 'complete') {
      validateHeadingStructure();
    } else {
      window.addEventListener('load', validateHeadingStructure);
    }

    return () => {
      window.removeEventListener('load', validateHeadingStructure);
    };
  }, []);

  return null;
};

export default HeadingStructureValidator;