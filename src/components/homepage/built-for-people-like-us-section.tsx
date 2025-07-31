import { useState, useEffect } from "react";

interface BuiltForPeopleLikeUsSectionProps {
  isVisible: boolean;
}

const profilesData = [
  {
    id: 1,
    image: "/lovable-uploads/f45f03b3-1cca-4d5e-aeb5-1a9984d53543.png",
    alt: "Focused young person reflecting in dim lighting, unplugging from noise.",
    description: "For the ones done shrinking to survive—ready to rewrite their whole identity."
  },
  {
    id: 2,
    image: "/lovable-uploads/36888da3-3303-44d7-8cf4-ead565b2a4b7.png",
    alt: "Hands tearing away an old poster to reveal a glowing city blueprint beneath.",
    description: "For those who stopped worshipping hustle and started designing strategy."
  },
  {
    id: 3,
    image: "/lovable-uploads/82a1ab41-d7d1-4bdf-9f6f-6c1c6f63c517.png",
    alt: "A person walks past a golden crown on the ground, focused on their own path.",
    description: "For trailblazers who don't chase thrones—they build new worlds from scratch."
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
                  <div className="relative overflow-hidden w-24 h-24 md:w-32 md:h-32 border-2 border-white/20 dark:border-black/20" style={{ borderRadius: '12px', aspectRatio: '1/1' }}>
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