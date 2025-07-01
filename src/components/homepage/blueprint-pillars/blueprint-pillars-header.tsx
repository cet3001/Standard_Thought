
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
        The Standard Thought Blueprint
        {/* Enhanced texture behind title */}
        <div className="absolute inset-0 opacity-[0.08] bg-[conic-gradient(from_30deg,_transparent_65%,_rgba(0,0,0,0.5)_85%,_transparent_100%)] bg-[length:25px_25px] -z-10"></div>
      </h2>
      <p className="text-lg text-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto relative">
        Street-smart methodology for turning struggle into strategy—proven by the culture, built for progress.
        {/* Subtle grain behind description */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.6)_1px,_transparent_0)] bg-[length:12px_12px] -z-10"></div>
      </p>
    </div>
  );
};

export default BlueprintPillarsHeader;
