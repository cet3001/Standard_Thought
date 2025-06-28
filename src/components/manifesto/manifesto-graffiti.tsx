
export const ManifestoGraffiti = () => {
  return (
    <>
      {/* Enhanced graffiti "Real Talk" overlay */}
      <div className="absolute top-8 right-8 transform rotate-12 pointer-events-none" aria-hidden="true">
        <div 
          className="text-[#247EFF] text-4xl md:text-6xl font-black opacity-[0.15] relative"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))'
          }}
        >
          Real Talk
          {/* Spray paint texture */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#247EFF]/20 to-transparent opacity-60 blur-sm"></div>
        </div>
        
        {/* Enhanced drip effects */}
        <div className="absolute -bottom-3 left-8 w-2 h-8 bg-[#247EFF] opacity-30 transform rotate-12 blur-sm"></div>
        <div className="absolute -bottom-2 left-12 w-1 h-6 bg-[#247EFF] opacity-20 transform rotate-15 blur-sm"></div>
        <div className="absolute -bottom-4 right-4 w-1 h-5 bg-[#247EFF] opacity-25 transform rotate-8 blur-sm"></div>
      </div>

      {/* Additional street tags */}
      <div className="absolute bottom-32 left-12 transform -rotate-3 pointer-events-none opacity-[0.08]" aria-hidden="true">
        <div 
          className="text-[#FFD700] text-2xl font-black"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            filter: 'blur(0.3px)'
          }}
        >
          HUSTLE
        </div>
      </div>
    </>
  );
};
