import { useState, useEffect } from "react";

interface BuiltForPeopleLikeUsSectionProps {
  isVisible: boolean;
}

const profilesData = [
  {
    id: 1,
    image: "/lovable-uploads/c7656fcd-9e6b-48b4-b19b-a0b168834bbf.png",
    alt: "Profile image of a person representing resilience and determination",
    description: "For the individual ready to dismantle inherited limitations and architect a life of purpose."
  },
  {
    id: 2,
    image: "/lovable-uploads/d9eb8502-d37f-474b-ba58-24fa5e1681a6.png",
    alt: "Profile image representing self-mastery and wealth building",
    description: "Designed for those who understand that true wealth is built on a foundation of self-mastery."
  },
  {
    id: 3,
    image: "/lovable-uploads/e2bbb32b-2cc3-4b76-8dd2-adf86ae1da89.png",
    alt: "Profile image representing trailblazers shaping their future",
    description: "A sanctuary for trailblazers who refuse to be defined by their past, choosing instead to shape their future."
  }
];

const BuiltForPeopleLikeUsSection = ({ isVisible }: BuiltForPeopleLikeUsSectionProps) => {
  return (
    <div className={`mb-16 relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Background */}
      <div className="relative bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-black/10">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span style={{ color: 'var(--color-lovable-black)' }}>Built For</span> <span className="pearlescent-text">People Like Us</span>
          </h2>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10" role="group" aria-label="Profile cards showcasing our community">
          {profilesData.map((profile) => (
            <div key={profile.id} className="profile-card group">
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 dark:border-black/10 hover:bg-white/15 dark:hover:bg-black/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative overflow-hidden rounded-full w-24 h-24 md:w-32 md:h-32 border-2 border-white/20 dark:border-black/20">
                    <img 
                      src={profile.image}
                      alt={profile.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Description */}
                <p 
                  className="text-center text-base md:text-lg leading-relaxed font-inter"
                  style={{ color: 'var(--color-lovable-black)' }}
                >
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuiltForPeopleLikeUsSection;