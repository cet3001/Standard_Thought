
import { useState, useEffect } from "react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const RealBuilderWinsStrip = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { textureImageUrl } = useUrbanTexture();

  const testimonials = [
    {
      quote: "Standard Thought put me on game—finally built my first emergency fund.",
      name: "Marcus",
      city: "Detroit",
      result: "$1K Emergency Fund"
    },
    {
      quote: "That AI hustle guide got me my first client paying $500. Now I'm scaling up.",
      name: "Aaliyah",
      city: "Houston", 
      result: "First $500 Client"
    },
    {
      quote: "Credit went from 520 to 680 following their blueprint. Game changer.",
      name: "Jamal",
      city: "Atlanta",
      result: "160-Point Jump"
    },
    {
      quote: "Started investing with $25 weekly. Six months later got $800 portfolio.",
      name: "Keisha",
      city: "Chicago",
      result: "$800 Portfolio"
    },
    {
      quote: "The financial education here is different—it's made for people like us.",
      name: "Carlos",
      city: "Phoenix",
      result: "Real Knowledge"
    },
    {
      quote: "No cap, this changed how I think about money completely.",
      name: "Tiana",
      city: "Miami",
      result: "Mindset Shift"
    },
    {
      quote: "Finally got approved for my first apartment after fixing my credit.",
      name: "Jordan",
      city: "Brooklyn",
      result: "Apartment Approved"
    },
    {
      quote: "Made $1,200 last month using their AI side hustle strategies.",
      name: "Deshawn",
      city: "Dallas",
      result: "$1.2K Month"
    }
  ];

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-8 mb-12 relative overflow-hidden">
      {/* Urban Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-20 bg-repeat bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '300px 300px',
              filter: 'contrast(1.2) brightness(0.8) saturate(0.9)'
            }}
          />
        )}
        
        {/* Graffiti-style background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 1200 100" className="absolute inset-0 w-full h-full opacity-10">
            {/* Spray paint effect */}
            <circle cx="100" cy="50" r="30" fill="currentColor" className="text-[#247EFF]/20" />
            <circle cx="300" cy="30" r="20" fill="currentColor" className="text-[#FFD700]/20" />
            <circle cx="500" cy="70" r="25" fill="currentColor" className="text-[#247EFF]/15" />
            <circle cx="800" cy="40" r="35" fill="currentColor" className="text-[#FFD700]/15" />
            <circle cx="1000" cy="60" r="20" fill="currentColor" className="text-[#247EFF]/20" />
          </svg>
        </div>
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#247EFF]/5 via-transparent to-[#FFD700]/5"></div>
      </div>

      <div className="relative z-10">
        {/* Street-style header */}
        <div className="text-center mb-6">
          <h2 
            className="text-2xl md:text-3xl font-black text-[#0A0A0A] dark:text-brand-cream inline-block transform -rotate-1 relative"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
              textShadow: '3px 3px 0px rgba(36, 126, 255, 0.3)',
              letterSpacing: '1px'
            }}
          >
            💯 Real Builder Wins
            {/* Hand-drawn underline */}
            <div 
              className="absolute -bottom-2 left-0 right-0 h-1 opacity-80"
              style={{
                background: 'linear-gradient(90deg, transparent 5%, #FFD700 20%, #FFA500 80%, transparent 95%)',
                borderRadius: '50px',
                transform: 'rotate(1deg)'
              }}
            />
          </h2>
        </div>

        {/* Testimonial Strip */}
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#247EFF]/20 relative overflow-hidden shadow-lg">
            
            {/* Street cred badge */}
            <div className="absolute top-3 right-3 bg-[#FFD700] text-black text-xs font-black px-3 py-1 rounded-full transform rotate-12 shadow-md">
              VERIFIED ✓
            </div>

            {/* Testimonial content */}
            <div className="transition-all duration-700 ease-in-out">
              <div className="text-center">
                <blockquote className="text-lg md:text-xl text-[#0A0A0A] dark:text-brand-cream font-medium italic mb-4 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-sm md:text-base text-[#0A0A0A]/80 dark:text-brand-cream/80 font-semibold">
                    — {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].city}
                  </div>
                  <div className="bg-[#247EFF]/10 text-[#247EFF] px-3 py-1 rounded-full text-xs font-bold">
                    {testimonials[currentTestimonial].result}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-[#247EFF] scale-125 shadow-md' 
                      : 'bg-[#0A0A0A]/20 dark:bg-brand-cream/20 hover:bg-[#247EFF]/50 hover:scale-110'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Graffiti accent */}
            <div className="absolute bottom-2 left-4 opacity-30 text-[#FFD700] transform -rotate-12"
                 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '10px' }}>
              REAL TALK
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-6">
          <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 font-medium">
            <strong>2,500+ builders</strong> are leveling up their financial game with us
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealBuilderWinsStrip;
