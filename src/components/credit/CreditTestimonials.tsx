import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CreditTestimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "I went from a 520 to a 680 in 9 months—no cosigner, no cap.",
      name: "Tasha",
      location: "South Side",
      rotation: "rotate-2"
    },
    {
      quote: "Standard Thought showed me the play. Now I got my first apartment in my name.",
      name: "Jamal",
      location: "Oakland",
      rotation: "-rotate-1"
    },
    {
      quote: "Secured card strategy was pure game. Built my credit and kept my money safe.",
      name: "Maya",
      location: "Detroit",
      rotation: "rotate-3"
    },
    {
      quote: "From 480 to 720 in less than a year. These strategies actually work.",
      name: "Carlos",
      location: "East LA",   
      rotation: "-rotate-2"
    },
    {
      quote: "First time somebody explained credit without talking down to me. Real recognize real.",
      name: "Keisha",
      location: "Baltimore",
      rotation: "rotate-1"
    },
    {
      quote: "Went from getting denied everywhere to pre-approved for everything. Credit game changed.",
      name: "Marcus",
      location: "Atlanta",
      rotation: "-rotate-3"
    }
  ];

  // Testimonials rotation state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-black dark:text-brand-cream text-center">
          Real Builder{" "}
          <span className="text-[#FFD700]">Wins</span>
        </h2>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-[#FFD700]/80 hover:bg-[#FFD700] text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            style={{
              transform: 'rotate(-2deg)',
              filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.3))'
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-[#FFD700]/80 hover:bg-[#FFD700] text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            style={{
              transform: 'rotate(2deg)',
              filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.3))'
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Testimonial Cards - Polaroid Style */}
          <div className="relative h-80 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-95 z-0'
                }`}
              >
                <div
                  className={`bg-white dark:bg-gray-800 p-6 pb-8 rounded-lg shadow-2xl max-w-md mx-auto transform transition-all duration-300 hover:scale-105 ${testimonial.rotation}`}
                  style={{
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))',
                    border: '8px solid #f8f8f8',
                    borderBottom: '24px solid #f8f8f8'
                  }}
                >
                  {/* Polaroid Photo Effect */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 h-32 rounded mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                      <span className="text-black font-black text-2xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg font-medium text-black dark:text-white mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="flex justify-between items-center">
                    <cite className="text-[#FFD700] font-bold not-italic">
                      —{testimonial.name}
                    </cite>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-[#FFD700] scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditTestimonials;