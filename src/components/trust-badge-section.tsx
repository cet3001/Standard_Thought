
import { Users } from "lucide-react";
import { useState, useEffect } from "react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const TrustBadgeSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { textureImageUrl } = useUrbanTexture();

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
    <section className="py-12 relative overflow-hidden border-t border-[#0A0A0A]/10 dark:border-brand-cream/10">
      
      {/* Urban Background - Matches other sections */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-30 bg-repeat bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
              filter: 'contrast(1.3) brightness(0.7) sepia(0.05)'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-30"></div>
      </div>

      {/* Graffiti-style background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 800 200" className="absolute inset-0 w-full h-full opacity-10">
          {/* Torn paper effect */}
          <path
            d="M0,80 Q100,70 200,85 T400,75 Q500,80 600,70 T800,85 L800,120 Q700,110 600,125 T400,115 Q300,120 200,110 T0,125 Z"
            fill="currentColor"
            className="text-[#247EFF]/30"
          />
          {/* Graffiti tag underline */}
          <path
            d="M150,140 Q200,135 250,142 T350,138 Q400,143 450,136 T550,142"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-[#FFD700]/40"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Street-smart heading with graffiti effect */}
          <div className="relative inline-block mb-6">
            <p 
              className="text-lg font-black text-[#0A0A0A] dark:text-brand-cream tracking-wide uppercase relative z-10"
              style={{ 
                fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                textShadow: '2px 2px 0px rgba(36, 126, 255, 0.3)',
                transform: 'rotate(-1deg)'
              }}
            >
              Real Recognize Real
            </p>
            {/* Hand-drawn underline effect */}
            <div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFD700] opacity-70 transform -rotate-1"
              style={{
                background: 'linear-gradient(90deg, transparent 10%, #FFD700 50%, transparent 90%)',
                borderRadius: '50px'
              }}
            />
          </div>
          
          {/* Main trust badge with urban styling */}
          <div className="inline-flex items-center bg-white/90 dark:bg-brand-black/90 border-2 border-[#247EFF]/30 rounded-2xl px-8 py-4 shadow-lg backdrop-blur-sm relative overflow-hidden">
            
            {/* Subtle graffiti texture overlay */}
            <div className="absolute inset-0 opacity-[0.05] bg-[conic-gradient(from_0deg_at_2px_2px,_rgba(0,0,0,1)_90deg,_transparent_90deg)] bg-[length:8px_8px]"></div>
            
            <div className="flex items-center mr-6 relative z-10">
              <Users className="w-6 h-6 text-[#247EFF] mr-3" />
              <span className="text-[#0A0A0A] dark:text-brand-cream font-bold text-lg">
                1000+ first-gen hustlers leveling up with us
              </span>
            </div>
            
            {/* Hand-drawn style stars */}
            <div className="flex items-center space-x-1 relative z-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className="w-5 h-5 text-[#FFD700] transform hover:scale-110 transition-transform" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ 
                    transform: `rotate(${(star * 7) % 15 - 7}deg)`,
                    filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.2))'
                  }}
                >
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Rotating testimonials carousel */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="bg-white/70 dark:bg-brand-black/70 backdrop-blur-sm rounded-xl p-6 border border-[#247EFF]/20 relative overflow-hidden">
              
              {/* Street cred badge */}
              <div className="absolute top-2 right-2 bg-[#FFD700] text-black text-xs font-black px-2 py-1 rounded-full transform rotate-12 shadow-sm">
                VERIFIED
              </div>

              {/* Testimonial content */}
              <div className="transition-all duration-500 ease-in-out">
                <p className="text-[#0A0A0A]/90 dark:text-brand-cream/90 font-medium text-base italic mb-3 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 font-semibold">
                  — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].city}
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-[#247EFF] scale-125' 
                        : 'bg-[#0A0A0A]/30 dark:bg-brand-cream/30 hover:bg-[#247EFF]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgeSection;
