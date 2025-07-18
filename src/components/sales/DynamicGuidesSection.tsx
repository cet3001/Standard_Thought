import React from 'react';
import { useGuides } from '@/hooks/use-guides';
import { DynamicGuideCard } from './DynamicGuideCard';

export const DynamicGuidesSection: React.FC = () => {
  const { guides, loading } = useGuides();

  if (loading) {
    return (
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                <span className="pearlescent-text">Blueprint Collection:</span>{" "}
                <span className="text-brand-black dark:text-brand-cream">Fresh Drops</span>
              </h2>
              <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-3xl mx-auto">
                Latest guides and playbooks—from free starter moves to premium wealth flips.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gradient-to-br from-[#f4d03f]/10 via-[#f7dc6f]/5 to-[#fdeaa7]/15 border-2 border-[#FFD700]/20 rounded-2xl p-8 animate-pulse">
                  <div className="w-14 h-14 bg-[#FFD700]/30 rounded-2xl mb-6"></div>
                  <div className="h-6 bg-[#FFD700]/30 rounded mb-4"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-4 bg-[#FFD700]/20 rounded"></div>
                    <div className="h-4 bg-[#FFD700]/20 rounded w-3/4"></div>
                  </div>
                  <div className="h-12 bg-[#FFD700]/30 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!guides || guides.length === 0) {
    return null;
  }

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
              <span className="pearlescent-text">Blueprint Collection:</span>{" "}
              <span className="text-brand-black dark:text-brand-cream">Fresh Drops</span>
            </h2>
            <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-3xl mx-auto">
              Latest guides and playbooks—from free starter moves to premium wealth flips. Real frameworks for breaking cycles and building legacy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <DynamicGuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};