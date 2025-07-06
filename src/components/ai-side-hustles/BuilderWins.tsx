const BuilderWins = () => {
  const testimonials = [
    {
      quote: "I made my first $500 writing blog posts with ChatGPT—no tech background, just hustle.",
      author: "Dre, Atlanta",
      icon: "💰",
      bgGradient: "from-gray-200 to-gray-300",
      iconColor: "text-gray-600"
    },
    {
      quote: "Standard Thought showed me how to use AI art to launch my own T-shirt line.",
      author: "Maya, Chicago", 
      icon: "🎨",
      bgGradient: "from-purple-200 to-pink-200",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
            Real Builder{" "}
            <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              Wins
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-white dark:bg-gray-100 p-4 rounded-lg shadow-xl transform ${index === 0 ? 'rotate-2' : '-rotate-1'} hover:rotate-0 transition-all duration-300 hover:scale-105 relative`} style={{
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))'
            }}>
              <div className={`bg-gradient-to-br ${testimonial.bgGradient} h-32 mb-4 rounded flex items-center justify-center`}>
                <div className={`${testimonial.iconColor} text-6xl font-bold`}>{testimonial.icon}</div>
              </div>
              <blockquote className="text-black text-lg font-medium mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-right">
                <cite className="text-black font-bold not-italic">—{testimonial.author}</cite>
              </div>
              {/* Tape effect */}
              <div className={`absolute ${index === 0 ? '-top-2 -right-2 rotate-45' : '-top-2 -left-2 -rotate-45'} w-12 h-6 bg-yellow-200/80 rounded`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed max-w-2xl mx-auto">
            These builders started from zero and turned AI tools into real income streams. 
            Your story could be next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuilderWins;