
const BlueprintPillarsBackground = () => {
  return (
    <>
      {/* Enhanced urban texture overlay with grit */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_3px_3px,_rgba(0,0,0,1)_2px,_transparent_0)] bg-[length:35px_35px]" aria-hidden="true"></div>
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,_transparent_47%,_rgba(0,0,0,0.8)_48%,_rgba(0,0,0,0.8)_52%,_transparent_53%)] bg-[length:15px_15px]" aria-hidden="true"></div>

      {/* Subtle graffiti tags */}
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
