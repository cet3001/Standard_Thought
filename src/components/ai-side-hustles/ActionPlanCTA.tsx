const ActionPlanCTA = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <div className="bg-gradient-to-br from-[#FFD700]/10 via-[#FFA500]/5 to-[#FFD700]/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-[#FFD700]/30 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-black dark:text-brand-cream leading-tight">
              AI Side Hustle{" "}
              <span className="text-[#FFD700]" style={{
                background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s ease-in-out infinite'
              }}>
                Action Plan
              </span>
              {" "}(Downloadable)
            </h2>
            
            <p className="text-xl sm:text-2xl mb-8 text-black dark:text-brand-cream leading-relaxed max-w-3xl mx-auto">
              Download the AI Side Hustle Launch Plan: Your step-by-step guide to flipping AI tools into real money.
            </p>
            
            {/* Hand-drawn style button */}
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-black text-xl rounded-2xl transition-all duration-300 hover:scale-105 transform rotate-1 hover:rotate-0 shadow-lg hover:shadow-xl" style={{
              fontFamily: 'Permanent Marker, cursive',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))',
              border: '3px solid #000',
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)'
            }}>
              <span className="relative z-10">Get the Plan</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-sm text-black/70 dark:text-brand-cream/70 mt-4 font-medium">
              Free download • No spam • Real strategies that work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionPlanCTA;