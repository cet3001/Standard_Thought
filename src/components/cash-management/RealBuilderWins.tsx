const RealBuilderWins = () => {
  const testimonials = [
    {
      quote: "I finally stopped living check to check—now I got $500 saved and my bills on autopilot.",
      name: "Keisha",
      location: "Brooklyn",
      rotation: "-rotate-2"
    },
    {
      quote: "Standard Thought's system helped me stack up for my first car, no co-signer.",
      name: "Dre", 
      location: "Houston",
      rotation: "rotate-1"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
            Real{" "}
            <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              Builder Wins
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-black dark:text-brand-cream max-w-2xl mx-auto">
            Real people, real results—no cap
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${testimonial.rotation} hover:rotate-0`}
              style={{
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,215,0,0.2)'
              }}
            >
              {/* Polaroid-style top border */}
              <div className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 h-2 w-full -mx-6 -mt-6 mb-4 rounded-t-lg"></div>
              
              {/* Quote */}
              <blockquote className="text-lg font-medium text-black dark:text-brand-cream mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Attribution */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#FFD700] text-lg">
                    —{testimonial.name}
                  </div>
                  <div className="text-sm text-black/70 dark:text-brand-cream/70">
                    {testimonial.location}
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="w-8 h-8 bg-gradient-to-br from-[#FFD700]/30 to-[#FFA500]/30 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#FFD700] rounded-full"></div>
                </div>
              </div>
              
              {/* Tape effect */}
              <div className="absolute -top-2 left-4 w-12 h-6 bg-gray-200/80 dark:bg-gray-600/80 transform -rotate-12 rounded-sm opacity-70"></div>
              <div className="absolute -top-2 right-4 w-12 h-6 bg-gray-200/80 dark:bg-gray-600/80 transform rotate-12 rounded-sm opacity-70"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg sm:text-xl text-black dark:text-brand-cream font-bold">
            Join the builders who are{" "}
            <span className="text-[#FFD700]">winning with their money</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealBuilderWins;