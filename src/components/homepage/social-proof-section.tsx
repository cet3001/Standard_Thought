
import { Users, TrendingUp, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { SectionOverlayBox } from "@/components/layout";

interface SocialProofSectionProps {
  isVisible: boolean;
}

const SocialProofSection = ({ isVisible }: SocialProofSectionProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "Finally, money advice that speaks my language.", author: "Tasha", location: "South Side" },
    { text: "This ain't your typical finance BS—it's real talk.", author: "Marcus", location: "East Oakland" },
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
    <SectionOverlayBox className={`backdrop-blur-sm duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="group" aria-label="Success metrics and social proof">
        
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite',
              opacity: 0.2
            }}>
              <Users className="h-8 w-8" style={{
                color: 'transparent',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }} aria-hidden="true" />
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
            <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite',
              opacity: 0.2
            }}>
              <TrendingUp className="h-8 w-8" style={{
                color: 'transparent',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }} aria-hidden="true" />
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
            <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite',
              opacity: 0.2
            }}>
              <CheckCircle className="h-8 w-8" style={{
                color: 'transparent',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }} aria-hidden="true" />
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
      <div className="mt-10 pt-10 border-t border-yellow-400/20 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
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
    </SectionOverlayBox>
  );
};

export default SocialProofSection;
