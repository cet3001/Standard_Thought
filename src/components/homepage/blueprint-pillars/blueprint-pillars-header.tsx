
const BlueprintPillarsHeader = () => {
  return (
    <div className="text-center mb-12 relative z-10">
      <h2 
        className="text-3xl md:text-4xl font-black mb-4 text-black dark:text-brand-cream transform -rotate-1 relative"
        style={{ 
          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
          textShadow: '3px 3px 0px rgba(0,0,0,0.15)' 
        }}
      >
        <span style={{ color: 'var(--color-lovable-black)' }}>Ready to</span>{' '}
        <span 
          className="text-[#FFD700]"
          style={{
            background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 3s ease-in-out infinite'
          }}
        >
          Flip the Script
        </span>?
        {/* Enhanced texture behind title */}
        <div className="absolute inset-0 opacity-[0.08] bg-[conic-gradient(from_30deg,_transparent_65%,_rgba(0,0,0,0.5)_85%,_transparent_100%)] bg-[length:25px_25px] -z-10"></div>
      </h2>
      <p className="text-lg text-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto relative">
        Start here. Transform your reality in four foundational steps.
        {/* Subtle grain behind description */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.6)_1px,_transparent_0)] bg-[length:12px_12px] -z-10"></div>
      </p>

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default BlueprintPillarsHeader;
