import { useState, useEffect } from 'react';
import { useGuides } from './use-guides';

export interface DetectedCTA {
  id: string;
  text: string;
  location: string;
  pageSlug: string;
  componentName: string;
  linkedGuideId?: string;
  type: 'download' | 'join' | 'get' | 'subscribe' | 'access';
}

export const useCTADetection = () => {
  const [detectedCTAs, setDetectedCTAs] = useState<DetectedCTA[]>([]);
  const [loading, setLoading] = useState(true);
  const { guides } = useGuides();

  // Define known CTAs across the site
  const knownCTAs: DetectedCTA[] = [
    {
      id: 'hero-get-blueprint',
      text: 'Get The Blueprint',
      location: 'Homepage Hero',
      pageSlug: '/',
      componentName: 'HeroContent',
      type: 'get',
      linkedGuideId: undefined
    },
    {
      id: 'floating-cta-get-started',
      text: 'Get Started Now',
      location: 'Floating CTA (Global)',
      pageSlug: 'global',
      componentName: 'FloatingCTA',
      type: 'get',
      linkedGuideId: undefined
    },
    {
      id: 'mobile-floating-cta',
      text: 'Get Started Now',
      location: 'Mobile Floating CTA (Global)',
      pageSlug: 'global',
      componentName: 'MobileFloatingCTA',
      type: 'get',
      linkedGuideId: undefined
    },
    {
      id: 'sales-page-guides',
      text: 'Download Guide',
      location: 'Sales Page',
      pageSlug: '/sales',
      componentName: 'Sales',
      type: 'download',
      linkedGuideId: undefined
    },
    {
      id: 'about-mindset-tool',
      text: 'Get Your Free Mindset Tool',
      location: 'About Page',
      pageSlug: '/about',
      componentName: 'About',
      type: 'get',
      linkedGuideId: undefined
    }
  ];

  const detectLinkedGuides = () => {
    if (!guides || guides.length === 0) return knownCTAs;

    return knownCTAs.map(cta => {
      let linkedGuide = null;

      // Enhanced auto-linking with fallback to first active guide
      switch (cta.id) {
        case 'hero-get-blueprint':
        case 'floating-cta-get-started':
        case 'mobile-floating-cta':
          // First try specific matches
          linkedGuide = guides.find(guide => 
            guide.title.toLowerCase().includes('wealth blueprint') ||
            guide.title.toLowerCase().includes('getting started') ||
            guide.title.toLowerCase().includes('signup playbook') ||
            guide.title.toLowerCase().includes('welcome') ||
            guide.title.toLowerCase().includes('start here')
          );
          // Fallback to any free guide
          if (!linkedGuide) {
            linkedGuide = guides.find(guide => guide.price === 0 && guide.is_active);
          }
          break;
        
        case 'about-mindset-tool':
          // First try specific matches
          linkedGuide = guides.find(guide => 
            guide.title.toLowerCase().includes('mindset') ||
            guide.title.toLowerCase().includes('mental game') ||
            guide.title.toLowerCase().includes('psychology') ||
            guide.title.toLowerCase().includes('confidence')
          );
          // Fallback to any free guide
          if (!linkedGuide) {
            linkedGuide = guides.find(guide => guide.price === 0 && guide.is_active);
          }
          break;
        
        case 'sales-page-guides':
          // Link to first active guide (could be paid or free)
          linkedGuide = guides.find(guide => guide.is_active);
          break;
      }

      return {
        ...cta,
        linkedGuideId: linkedGuide?.id
      };
    });
  };

  useEffect(() => {
    setLoading(true);
    const ctasWithLinks = detectLinkedGuides();
    setDetectedCTAs(ctasWithLinks);
    setLoading(false);
  }, [guides]);

  const getUnlinkedCTAs = () => {
    return detectedCTAs.filter(cta => !cta.linkedGuideId);
  };

  const getLinkedCTAs = () => {
    return detectedCTAs.filter(cta => cta.linkedGuideId);
  };

  const linkCTAToGuide = (ctaId: string, guideId: string) => {
    setDetectedCTAs(prev => 
      prev.map(cta => 
        cta.id === ctaId ? { ...cta, linkedGuideId: guideId } : cta
      )
    );
  };

  const unlinkCTA = (ctaId: string) => {
    setDetectedCTAs(prev => 
      prev.map(cta => 
        cta.id === ctaId ? { ...cta, linkedGuideId: undefined } : cta
      )
    );
  };

  return {
    detectedCTAs,
    unlinkedCTAs: getUnlinkedCTAs(),
    linkedCTAs: getLinkedCTAs(),
    loading,
    linkCTAToGuide,
    unlinkCTA
  };
};