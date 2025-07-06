const JoinMovementCTA = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <div className="bg-gradient-to-br from-black/10 via-gray-800/5 to-black/10 dark:from-white/10 dark:via-gray-200/5 dark:to-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-black/20 dark:border-white/20 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent opacity-30"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-black dark:text-brand-cream leading-tight">
              Join the{" "}
              <span className="text-[#FFD700]" style={{
                background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s ease-in-out infinite'
              }}>
                Movement
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl mb-8 text-black dark:text-brand-cream leading-relaxed max-w-2xl mx-auto">
              No spam, just real blueprints and updates.
            </p>
            
            {/* Hand-drawn style button */}
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black font-black text-xl rounded-2xl transition-all duration-300 hover:scale-105 transform -rotate-1 hover:rotate-0 shadow-lg hover:shadow-xl" style={{
              fontFamily: 'Permanent Marker, cursive',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              border: '3px solid #FFD700',
              borderRadius: '15px'
            }}>
              <span className="relative z-10">Get More AI Hustle Plays—Join the Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-sm text-black/70 dark:text-brand-cream/70 mt-4 font-medium">
              Real builders • Real strategies • Real results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovementCTA;