
import { useState, useEffect } from "react";

interface BlueprintPillarsSectionProps {
  isVisible: boolean;
}

const flipScriptData = [
  {
    id: 1,
    image: "/lovable-uploads/2b2db2a4-8d6c-4b7d-b861-85500957635f.png",
    alt: "Young Black woman reflecting, ready to unlearn survival patterns",
    headline: "Unlearn Survival Scripts",
    subtext: "The survival you normalized is not the life you were meant to live."
  },
  {
    id: 2,
    image: "/lovable-uploads/bf502079-daa6-4305-83ad-cfa75b3c661a.png",
    alt: "Hands sketching architectural plans, designing from truth",
    headline: "Rebuild from Truth",
    subtext: "Healing isn't soft. It's architecture. Start building from what's real—not recycled pain."
  },
  {
    id: 3,
    image: "/lovable-uploads/193969db-ea92-49f1-b5a3-035c5101d932.png",
    alt: "Young Black man meditating on rooftop at sunset, finding balance",
    headline: "Stack Without Selling Your Soul",
    subtext: "You don't have to lose yourself to win. Real wealth honors who you are."
  },
  {
    id: 4,
    image: "/lovable-uploads/40a4faa3-c7c1-4071-aa86-d94b2a3ff496.png",
    alt: "Person walking through neon-lit alley, transcending old patterns",
    headline: "Transcend the Cycle",
    subtext: "Be the proof that breaking generational loops is possible—and permanent."
  }
];

const BlueprintPillarsSection = ({ isVisible }: BlueprintPillarsSectionProps) => {
  return (
    <div className={`mb-16 relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Background */}
      <div className="relative bg-gray-200/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/5 dark:border-gray-700/5">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span style={{ color: 'var(--color-lovable-black)' }}>Ready to</span> <span className="pearlescent-text">Flip the Script</span>?
          </h2>
          <p 
            className="text-lg md:text-xl font-inter"
            style={{ color: 'var(--color-lovable-black)' }}
          >
            Start here. Transform your reality in four foundational steps.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" role="group" aria-label="Flip the script methodology steps">
          {flipScriptData.map((card, index) => (
            <div 
              key={card.id} 
              className="flip-script-card group transition-all duration-300 hover:transform hover:translate-y-[-8px] hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-200/20 dark:border-yellow-300/15 hover:bg-white/15 dark:hover:bg-black/30 transition-all duration-300 hover:shadow-xl relative overflow-hidden hover:border-yellow-300/40">
                
                {/* Pearlescent yellow accent overlay - always visible */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/15 via-yellow-100/8 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Additional subtle yellow glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-300/5 to-yellow-200/10 rounded-xl"></div>
                
                {/* Yellow diamond accent */}
                <div className="flex justify-end mb-4 relative z-10">
                  <div 
                    className="w-6 h-6 rotate-45 transition-all duration-300 group-hover:rotate-90 shadow-lg shadow-yellow-300/30"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  ></div>
                </div>

                {/* Card Image */}
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="relative overflow-hidden w-20 h-20 md:w-24 md:h-24 border-2 border-white/20 dark:border-black/20 rounded-full group-hover:border-yellow-300/40 transition-all duration-300">
                    <img 
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Subtle overlay with yellow tint on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-yellow-200/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Headline */}
                <h3 
                  className="text-center text-lg md:text-xl font-black mb-4 leading-tight relative z-10"
                  style={{ color: 'var(--color-lovable-black)' }}
                >
                  {card.headline}
                </h3>

                {/* Subtext */}
                <p 
                  className="text-center text-sm md:text-base leading-relaxed font-inter mb-4 relative z-10"
                  style={{ color: 'var(--color-lovable-black)' }}
                >
                  {card.subtext}
                </p>

                {/* Yellow underline element */}
                <div className="flex justify-center relative z-10">
                  <div 
                    className="w-12 h-1 rounded-full transition-all duration-300 group-hover:w-16 group-hover:shadow-md"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .flip-script-card {
          animation: fadeInUp 0.8s ease-out both;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Add hover shadow effect */
        .flip-script-card:hover .bg-white\/10 {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </div>
  );
};

export default BlueprintPillarsSection;
