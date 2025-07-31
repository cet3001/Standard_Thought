
import { Users, TrendingUp, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface SocialProofSectionProps {
  isVisible: boolean;
}

const SocialProofSection = ({ isVisible }: SocialProofSectionProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "Finally, money advice that speaks my language.", author: "Tasha", location: "South Side" },
    { text: "This isn't your typical finance BS—it's real talk.", author: "Marcus", location: "East Oakland" },
    { text: "Started with $25, now I'm building something real.", author: "Keisha", location: "North Philly" },
    { text: "These folks get the struggle and show you the way out.", author: "Carlos", location: "East LA" },
    { text: "No cap, this changed my whole money mindset.", author: "Aisha", location: "West Side" },
    { text: "First time financial advice made sense to me.", author: "Jamal", location: "The Bronx" }
  ];

  // Rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className={`relative backdrop-blur-sm border border-gray-300/20 rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} overflow-hidden`} style={{
      background: 'rgba(255, 255, 255, 0.05)'
    }}>
      
      {/* Torn Paper Effect Background */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <svg 
          viewBox="0 0 400 200" 
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M0,0 L400,0 L395,15 L385,25 L390,35 L380,45 L385,55 L375,65 L380,75 L370,85 L375,95 L365,105 L370,115 L360,125 L365,135 L355,145 L360,155 L350,165 L355,175 L345,185 L350,195 L400,200 L0,200 Z" 
            fill="currentColor" 
            className="text-yellow-400/10"
          />
          <path 
            d="M0,20 L15,25 L25,15 L35,30 L45,20 L55,35 L65,25 L75,40 L85,30 L95,45 L105,35 L115,50 L125,40 L135,55 L145,45 L155,60 L165,50 L175,65 L185,55 L195,70 L205,60 L215,75 L225,65 L235,80 L245,70 L255,85 L265,75 L275,90 L285,80 L295,95 L305,85 L315,100 L325,90 L335,105 L345,95 L355,110 L365,100 L375,115 L385,105 L395,120 L400,115 L400,200 L0,200 Z" 
            fill="currentColor" 
            className="text-yellow-300/15"
          />
        </svg>
      </div>

      {/* REMOVED GRITTY DARK TEXTURE OVERLAY FOR CONSISTENT BRIGHTNESS */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10" role="group" aria-label="Success metrics and social proof">
        
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden group-hover:scale-110 transition-transform shadow-lg">
              <img 
                src="/lovable-uploads/c8d4ffa7-6b7e-4e3d-923f-172e8c37dfd7.png"
                alt="Urban entrepreneurs building community together"
                className="w-full h-full object-cover"
                loading="lazy"
                width="96"
                height="96"
              />
            </div>
          </div>
          <div 
            className="text-4xl md:text-5xl font-black mb-3 transform -rotate-1 relative" 
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
              color: 'transparent',
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'pearlescent 3s ease-in-out infinite'
            }}
            aria-label="Over 1000 hustlers leveling up"
          >
            1,000+
            <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full opacity-80" style={{
              background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)'
            }}></div>
          </div>
          <div className="text-[#0A0A0A]/90 dark:text-brand-cream/90 font-bold text-lg mb-1">
            hustlers leveling up
          </div>
          <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
            Real people, real progress
          </div>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden group-hover:scale-110 transition-transform shadow-lg">
              <img 
                src="/lovable-uploads/fb281427-96cc-4adb-82b5-4ac1961d2ef1.png"
                alt="Couple reviewing investment portfolio and financial gains"
                className="w-full h-full object-cover"
                loading="lazy"
                width="96"
                height="96"
              />
            </div>
          </div>
          <div 
            className="text-3xl md:text-4xl font-black mb-3 transform rotate-1 relative" 
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
              color: 'transparent',
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'pearlescent 3s ease-in-out infinite'
            }}
            aria-label="500 to 50,000 dollars real wins"
          >
            $500–$50K
            <div className="absolute -bottom-1 -left-2 w-4 h-1 rounded-full opacity-70 transform -rotate-12" style={{
              background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)'
            }}></div>
          </div>
          <div className="text-[#0A0A0A]/90 dark:text-brand-cream/90 font-bold text-lg mb-1">
            Real wins
          </div>
          <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
            From side hustles to serious money
          </div>
        </div>

        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden group-hover:scale-110 transition-transform shadow-lg">
              <img 
                src="/lovable-uploads/6bd09687-7aec-41b6-870a-fb6a92525ad5.png"
                alt="Happy family representing generational wealth and breaking cycles"
                className="w-full h-full object-cover"
                loading="lazy"
                width="96"
                height="96"
              />
            </div>
          </div>
          <div 
            className="text-4xl md:text-5xl font-black mb-3 transform -rotate-2 relative" 
            style={{
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
              color: 'transparent',
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'pearlescent 3s ease-in-out infinite'
            }}
          >
            83%
            <div className="absolute top-0 right-0 text-lg transform rotate-12" style={{
              color: 'transparent',
              background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>✓</div>
          </div>
          <div className="text-[#0A0A0A]/90 dark:text-brand-cream/90 font-bold text-lg mb-1">
            broke the cycle
          </div>
          <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
            Changed their whole money game
          </div>
        </div>
      </div>

      {/* Rotating Community Testimonials */}
      <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-yellow-400/20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          
          {/* Motivational Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="w-48 max-w-full group">
              <img 
                src="/lovable-uploads/6b43e453-8724-4de7-8ee5-ebf10ac69022.png"
                alt="Motivational sticky notes saying 'It's OK to make money!' with success reminders"
                className="w-full h-auto rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="192"
                height="auto"
              />
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="lg:col-span-3 text-center">
          <div className="transition-all duration-500 ease-in-out min-h-[80px] flex items-center justify-center">
            <blockquote className="text-[#0A0A0A]/80 dark:text-brand-cream/80 text-lg leading-8 italic">
              "{testimonials[currentTestimonial].text}"
              <footer className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 mt-2 not-italic">
                — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].location}
              </footer>
            </blockquote>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'scale-125' 
                    : 'hover:scale-110'
                }`}
                style={{
                  background: index === currentTestimonial 
                    ? 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)'
                    : 'rgba(10, 10, 10, 0.3)'
                }}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
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

export default SocialProofSection;
