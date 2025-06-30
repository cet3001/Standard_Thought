
import { useState, useEffect } from "react";
import { Users } from "lucide-react";

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Social proof testimonials
  const testimonials = [
    { text: "Finally, money advice that speaks my language.", author: "Jamal", city: "Atlanta" },
    { text: "This ain't your typical finance BS—it's real talk.", author: "Maria", city: "Chicago" },
    { text: "Started with $50, now I'm building something real.", author: "Tony", city: "Brooklyn" },
    { text: "These folks get the struggle and show you the way out.", author: "Keisha", city: "Detroit" },
    { text: "No cap, this changed my whole money mindset.", author: "Carlos", city: "LA" },
    { text: "First time financial advice made sense to me.", author: "Aisha", city: "Houston" }
  ];

  // Rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-12 relative overflow-hidden">
      {/* Graffiti-style background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 800 200" className="absolute inset-0 w-full h-full opacity-10">
          {/* Torn paper effect */}
          <path
            d="M0,80 Q100,70 200,85 T400,75 Q500,80 600,70 T800,85 L800,120 Q700,110 600,125 T400,115 Q300,120 200,110 T0,125 Z"
            fill="currentColor"
            className="text-[#0A0A0A]/30 dark:text-brand-cream/30"
          />
          {/* Graffiti tag underline */}
          <path
            d="M150,140 Q200,135 250,142 T350,138 Q400,143 450,136 T550,142"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="opacity-40"
            style={{ 
              stroke: 'url(#pearlescent-gradient)'
            }}
            strokeLinecap="round"
          />

          {/* Define the pearlescent gradient */}
          <defs>
            <linearGradient id="pearlescent-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4d03f" />
              <stop offset="16.67%" stopColor="#f7dc6f" />
              <stop offset="33.33%" stopColor="#fdeaa7" />
              <stop offset="50%" stopColor="#f8e71c" />
              <stop offset="66.67%" stopColor="#ffd700" />
              <stop offset="83.33%" stopColor="#ffeb3b" />
              <stop offset="100%" stopColor="#fff176" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Street-smart heading with graffiti effect */}
          <div className="relative inline-block mb-8">
            <p 
              className="text-2xl md:text-3xl font-black text-[#0A0A0A] dark:text-brand-cream tracking-wide uppercase relative z-10"
              style={{ 
                fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                textShadow: '3px 3px 0px rgba(244, 208, 63, 0.3)',
                transform: 'rotate(-1deg)'
              }}
            >
              💯 From Zero to Hero
            </p>
            {/* Hand-drawn underline effect */}
            <div 
              className="absolute -bottom-2 left-0 right-0 h-1 opacity-80"
              style={{
                background: 'linear-gradient(90deg, transparent 5%, #f4d03f 20%, #ffd700 50%, #ffeb3b 80%, transparent 95%)',
                borderRadius: '50px',
                transform: 'rotate(1deg)'
              }}
            />
          </div>
          
          {/* Main trust badge - no background card */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users 
                className="w-8 h-8"
                style={{ 
                  color: '#f4d03f',
                  filter: 'drop-shadow(1px 1px 2px rgba(244, 208, 63, 0.3))'
                }}
              />
              <span className="text-[#0A0A0A] dark:text-brand-cream font-bold text-xl md:text-2xl">
                2,500+ builders leveling up their game
              </span>
            </div>
            
            {/* Hand-drawn style stars */}
            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className="w-6 h-6 transform hover:scale-110 transition-transform" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ 
                    transform: `rotate(${(star * 7) % 15 - 7}deg)`,
                    filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.3))',
                    color: '#ffd700'
                  }}
                >
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Rotating testimonials - no card background */}
          <div className="max-w-2xl mx-auto">
            <div className="transition-all duration-500 ease-in-out">
              <blockquote className="text-xl md:text-2xl text-[#0A0A0A] dark:text-brand-cream font-medium italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-base md:text-lg text-[#0A0A0A]/80 dark:text-brand-cream/80 font-semibold">
                  — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].city}
                </div>
                <div 
                  className="text-black px-3 py-1 rounded-full text-sm font-bold"
                  style={{ 
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}
                >
                  VERIFIED ✓
                </div>
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'scale-125' 
                      : 'hover:scale-110'
                  }`}
                  style={{
                    background: index === currentTestimonial 
                      ? 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)'
                      : 'rgba(10, 10, 10, 0.3)'
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
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
