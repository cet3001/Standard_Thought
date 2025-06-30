
const ExploreMoreHeader = () => {
  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="relative inline-block mb-4">
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A0A0A] dark:text-brand-cream tracking-wide uppercase relative z-10"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
            textShadow: '3px 3px 0px rgba(255, 215, 0, 0.4), 6px 6px 0px rgba(0, 0, 0, 0.2)',
            transform: 'rotate(-1.5deg)',
            filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))'
          }}
        >
          Explore More 🔥
        </h2>
        {/* Hand-drawn underline with pearlescent effect */}
        <div 
          className="absolute -bottom-3 left-0 right-0 h-3 opacity-90"
          style={{
            background: 'linear-gradient(90deg, transparent 5%, #FFD700 15%, #F4D03F 30%, #DDBF47 50%, #D4AF37 70%, #FFD700 85%, transparent 95%)',
            borderRadius: '50px 30px 40px 20px',
            transform: 'rotate(1.5deg) skew(-2deg)',
            filter: 'blur(0.5px)'
          }}
        />
      </div>
      <p className="text-[#0A0A0A] dark:text-brand-cream max-w-2xl mx-auto text-base md:text-lg font-medium">
        Deep dive into the strategies that actually work
      </p>
    </div>
  );
};

export default ExploreMoreHeader;
