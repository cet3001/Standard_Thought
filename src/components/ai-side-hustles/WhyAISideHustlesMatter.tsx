const WhyAISideHustlesMatter = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
            Why AI Side Hustles Matter{" "}
            <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              (Real Talk)
            </span>
          </h2>
        </div>

        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10 mb-12">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-black dark:text-brand-cream leading-relaxed italic">
            "AI is the new cheat code for the block. If you've ever felt locked out of tech or business, 
            this is your way in—no gatekeepers, no cap."
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* The Struggle */}
          <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
              The Real Struggle
            </h3>
            <ul className="space-y-3 text-black dark:text-brand-cream">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Lack of Access:</strong> Most AI courses cost hundreds or assume you already have resources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Tech Intimidation:</strong> They make it sound like you need a computer science degree</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Culture Gap:</strong> Most advice comes from people who don't understand our hustle</span>
              </li>
            </ul>
          </div>

          {/* Why Most AI Advice Doesn't Work */}
          <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-xl p-6 border border-[#FFD700]/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#FFD700]">
              Why Most "AI Money" Advice Falls Short
            </h3>
            <ul className="space-y-3 text-black dark:text-brand-cream">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>One-Size-Fits-All:</strong> Doesn't account for different starting points or resources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Hype Over Help:</strong> Promises overnight success instead of real, sustainable growth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Missing the Culture:</strong> Ignores how we actually network, build, and support each other</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed max-w-3xl mx-auto">
            We're here to change that. No fluff, no false promises—just real strategies that work for people 
            who understand the grind and are ready to level up with AI as their tool, not their master.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAISideHustlesMatter;