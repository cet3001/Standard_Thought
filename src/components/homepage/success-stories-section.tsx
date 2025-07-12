
import OptimizedImage from "../optimized-image";

interface SuccessStoriesSectionProps {
  isVisible: boolean;
}

const SuccessStoriesSection = ({ isVisible }: SuccessStoriesSectionProps) => {
  // Fixed stories - permanent showcase
  const stories = [
    {
      quote: "Started with $0 and a vision. Now I've got a side hustle bringing in $1,200/month. The blueprint made it simple.",
      name: "Tasha",
      location: "Detroit",
      image: "/lovable-uploads/679b64bf-88e0-4bc3-b3c5-b770c938de13.png",
      bgColor: "bg-green-500/10"
    },
    {
      quote: "Standard Thought helped me fix my credit and stack my first $10K. I never thought I'd get here.",
      name: "Malik",
      location: "Houston", 
      image: "/lovable-uploads/595f3560-92d6-49f9-a352-e0a121816e7a.png",
      bgColor: "bg-[#247EFF]/10"
    },
    {
      quote: "I finally understand how to make my money work for me, not just work for money.",
      name: "J. Rivera",
      location: "Bronx",
      image: "/lovable-uploads/ee43848a-4bd3-40e4-81ce-16ee2ec30ba3.png",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <div className={`mb-12 sm:mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-black dark:text-brand-cream">
          Real People. Real Progress.
        </h2>
        <p className="text-lg text-brand-black dark:text-brand-cream max-w-2xl mx-auto">
          Our community is flipping the script—one win at a time. Here's how folks just like you are turning hustle into legacy.
        </p>
      </div>

      {/* Polaroid-style Story Cards - Updated with new styling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-12 sm:mb-16" role="group" aria-label="Community success stories">
        {stories.map((story, index) => (
          <div 
            key={index}
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${800 + index * 200}ms` }}
          >
            {/* Polaroid Frame - Updated with subtle grey transparent background */}
            <div 
              className="backdrop-blur-sm shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105 p-4 pb-8 relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '8px 12px 8px 15px',
                boxShadow: '8px 12px 24px rgba(0,0,0,0.1), inset -1px -1px 2px rgba(0,0,0,0.02)'
              }}
            >
              {/* REMOVED DARK TEXTURE OVERLAYS FOR CONSISTENT BRIGHTNESS */}
              
              {/* Tape effects - Updated with yellow pearlescent effect */}
              <div 
                className="absolute -top-4 left-8 w-16 h-8 rounded-sm transform rotate-12 shadow-md"
                style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  animation: 'pearlescent 3s ease-in-out infinite',
                  opacity: 0.8,
                  backdropFilter: 'blur(1px)'
                }}
              />
              <div 
                className="absolute -top-3 right-12 w-12 h-6 rounded-sm transform -rotate-6 shadow-md"
                style={{
                  background: 'rgba(128, 128, 128, 0.3)',
                  backdropFilter: 'blur(2px)'
                }}
              />

              {/* Street Cred Badge - Updated with yellow pearlescent effect */}
              <div 
                className="absolute -top-2 -right-2 text-black text-xs font-black px-3 py-1 rounded-full transform rotate-12 shadow-lg border-2 border-black"
                style={{
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}
              >
                REAL TALK
              </div>

              {/* Photo area - Full square image */}
              <div className="h-48 mb-4 relative overflow-hidden rounded-lg border-2 border-white/20 shadow-lg" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(2px)'
              }}>
                <picture className="w-full h-full">
                  <img
                    src={story.image}
                    alt={`Success story from ${story.name} in ${story.location} - community member sharing wealth building journey`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="192"
                  />
                </picture>
                
                {/* Vintage photo texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-yellow-100/20 pointer-events-none"></div>
              </div>
              
              {/* Handwritten quote - Updated to black text */}
              <blockquote 
                className="text-brand-black dark:text-brand-cream text-sm mb-3 italic leading-relaxed"
                style={{ 
                  fontFamily: "'Kalam', 'Comic Neue', cursive",
                  fontWeight: '500',
                  transform: 'rotate(-0.5deg)'
                }}
              >
                "{story.quote}"
              </blockquote>
              
              {/* Handwritten signature - Updated to black text */}
              <div 
                className="text-right text-brand-black dark:text-brand-cream text-sm font-medium"
                style={{ 
                  fontFamily: "'Kalam', 'Comic Neue', cursive",
                  transform: 'rotate(0.5deg)'
                }}
              >
                — {story.name}, {story.location}
              </div>
              
              {/* Corner curl effect - Updated with subtle grey */}
              <div className="absolute bottom-1 right-1 w-4 h-4 transform rotate-45 translate-x-2 translate-y-2 shadow-inner" style={{
                background: 'rgba(255, 255, 255, 0.1)'
              }}></div>
            </div>
          </div>
        ))}
      </div>


      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessStoriesSection;
