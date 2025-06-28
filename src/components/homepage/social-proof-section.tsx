
import { Users, TrendingUp, CheckCircle, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface SocialProofSectionProps {
  isVisible: boolean;
}

const SocialProofSection = ({ isVisible }: SocialProofSectionProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Finally, money advice that speaks my language.",
      author: "Jamal",
      location: "Atlanta"
    },
    {
      quote: "No cap, this changed my whole money mindset.",
      author: "Maria",
      location: "Chicago"
    },
    {
      quote: "Real strategies that actually work for people like us.",
      author: "DeShawn",
      location: "Detroit"
    },
    {
      quote: "From broke to building wealth—this community is everything.",
      author: "Keisha",
      location: "Houston"
    },
    {
      quote: "Street smart financial education that hits different.",
      author: "Carlos",
      location: "Los Angeles"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className={`relative bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} overflow-hidden`}>
      
      {/* Urban Brick Wall Background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div 
          className="absolute inset-0 bg-repeat opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, rgba(160, 82, 45, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(160, 82, 45, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 60px 60px, 20px 20px, 20px 20px',
            backgroundPosition: '0 0, 20px 20px, 0 0, 10px 10px'
          }}
        />
      </div>

      {/* Graffiti-style torn paper effect */}
      <div className="absolute inset-0 opacity-15" aria-hidden="true">
        <svg 
          viewBox="0 0 400 200" 
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M0,20 L15,18 L28,25 L42,20 L58,28 L72,22 L88,30 L102,25 L118,32 L132,28 L148,35 L162,30 L178,38 L192,33 L208,40 L222,35 L238,42 L252,38 L268,45 L282,40 L298,48 L312,43 L328,50 L342,45 L358,52 L372,48 L388,55 L400,50 L400,200 L0,200 Z" 
            fill="currentColor" 
            className="text-[#247EFF]/20"
          />
        </svg>
      </div>

      {/* Street Cred Badge in corner */}
      <div className="absolute top-4 right-4 opacity-80" aria-hidden="true">
        <div className="relative">
          <div 
            className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center transform rotate-12"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA500)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2), 2px 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <Star className="h-6 w-6 text-black fill-current" />
          </div>
          <div 
            className="absolute -bottom-1 -right-1 text-xs font-black text-[#247EFF] transform -rotate-12"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            REAL
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header with graffiti underline */}
        <div className="text-center mb-8">
          <h2 
            className="text-2xl sm:text-3xl font-black text-[#0A0A0A] dark:text-brand-cream mb-4 relative inline-block"
            style={{ fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive" }}
          >
            Real Recognize Real
            {/* Hand-drawn underline */}
            <svg 
              className="absolute -bottom-2 left-0 w-full h-4" 
              viewBox="0 0 200 20" 
              preserveAspectRatio="none"
            >
              <path 
                d="M5,15 Q50,8 100,12 T195,10 Q190,12 185,14 Q140,18 100,16 Q60,14 10,18 Q8,16 5,15"
                stroke="#FFD700" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </h2>
          
          <div className="flex justify-center items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-[#247EFF]" />
            <p className="text-lg font-bold text-[#0A0A0A]/90 dark:text-brand-cream/90">
              1000+ first-gen hustlers leveling up with us
            </p>
          </div>
        </div>

        {/* Rotating Testimonials Carousel */}
        <div className="bg-[#247EFF]/5 rounded-2xl p-6 mb-6 min-h-[120px] flex items-center justify-center">
          <div className="text-center max-w-lg mx-auto">
            <div 
              key={currentTestimonial}
              className="animate-fade-in"
            >
              <blockquote className="text-lg text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-3 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <cite className="text-sm font-semibold text-[#247EFF] not-italic">
                —{testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].location}
              </cite>
            </div>
          </div>
        </div>

        {/* Hand-drawn progress dots */}
        <div className="flex justify-center items-center gap-3 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`transition-all duration-300 ${
                index === currentTestimonial ? 'scale-125' : 'scale-100 opacity-60'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            >
              <div 
                className={`w-3 h-3 rounded-full transform rotate-12 ${
                  index === currentTestimonial 
                    ? 'bg-[#FFD700] shadow-lg' 
                    : 'bg-[#247EFF]/40'
                }`}
                style={{
                  borderRadius: '40% 60% 70% 30%',
                  boxShadow: index === currentTestimonial ? '0 2px 4px rgba(255, 215, 0, 0.4)' : 'none'
                }}
              />
            </button>
          ))}
        </div>

        {/* Stats Grid with street aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="relative">
                {/* Hand-drawn star */}
                <svg className="w-12 h-12 text-[#FFD700]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2.5 L14.5,9 L22,9 L16.5,13.5 L18.5,21 L12,16.5 L5.5,21 L7.5,13.5 L2,9 L9.5,9 Z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#247EFF] rounded-full"></div>
              </div>
            </div>
            <div 
              className="text-2xl font-black text-[#247EFF] mb-2 transform -rotate-1"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Real Talk
            </div>
            <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
              No corporate BS here
            </div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center transform rotate-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div 
              className="text-2xl font-black text-green-600 mb-2 transform rotate-1"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Real Results
            </div>
            <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
              Money moves that work
            </div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center transform -rotate-2">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div 
              className="text-2xl font-black text-orange-600 mb-2 transform -rotate-1"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Real Community
            </div>
            <div className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
              Your people, your journey
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
