
const BlueprintPillarsBackground = () => {
  return (
    <>
      {/* REMOVED ALL DARK OVERLAYS FOR CONSISTENT BRIGHTNESS */}

      {/* Golden graffiti tags only - keeping these as they're very light */}
      <div className="absolute top-8 left-12 transform -rotate-12 pointer-events-none opacity-[0.08]" aria-hidden="true">
        <div 
          className="text-[#FFD700] text-2xl font-black"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            filter: 'blur(0.4px)'
          }}
        >
          BLUEPRINT
        </div>
      </div>
    </>
  );
};

export default BlueprintPillarsBackground;
