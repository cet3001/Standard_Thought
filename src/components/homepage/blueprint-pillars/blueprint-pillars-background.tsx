
const BlueprintPillarsBackground = () => {
  return (
    <>
      {/* Enhanced faded city map background with more detail */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" aria-hidden="true">
        <svg 
          viewBox="0 0 800 400" 
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Complex city grid pattern with depth */}
          <defs>
            <pattern id="cityGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
              <rect x="10" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.6"/>
            </pattern>
            <pattern id="smallGrid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.3"/>
            </pattern>
          </defs>
          
          {/* Layered street grids */}
          <rect width="800" height="400" fill="url(#cityGrid)" className="text-[#247EFF]"/>
          <rect width="800" height="400" fill="url(#smallGrid)" className="text-[#247EFF]" opacity="0.6"/>
          
          {/* Enhanced building blocks with more detail */}
          <g className="text-[#247EFF]" opacity="0.5">
            {/* Main downtown area */}
            <rect x="100" y="50" width="80" height="120" fill="none" stroke="currentColor" strokeWidth="3"/>
            <rect x="105" y="55" width="70" height="110" fill="currentColor" opacity="0.1"/>
            <rect x="220" y="80" width="60" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="225" y="85" width="50" height="90" fill="currentColor" opacity="0.08"/>
            <rect x="320" y="60" width="100" height="140" fill="none" stroke="currentColor" strokeWidth="3"/>
            <rect x="325" y="65" width="90" height="130" fill="currentColor" opacity="0.12"/>
            <rect x="460" y="40" width="70" height="160" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="465" y="45" width="60" height="150" fill="currentColor" opacity="0.1"/>
            <rect x="570" y="70" width="90" height="110" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="575" y="75" width="80" height="100" fill="currentColor" opacity="0.09"/>
            
            {/* Lower section neighborhoods */}
            <rect x="80" y="220" width="110" height="80" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="85" y="225" width="100" height="70" fill="currentColor" opacity="0.07"/>
            <rect x="230" y="240" width="80" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="235" y="245" width="70" height="90" fill="currentColor" opacity="0.08"/>
            <rect x="350" y="210" width="120" height="130" fill="none" stroke="currentColor" strokeWidth="3"/>
            <rect x="355" y="215" width="110" height="120" fill="currentColor" opacity="0.11"/>
            <rect x="510" y="230" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="515" y="235" width="80" height="80" fill="currentColor" opacity="0.09"/>
            
            {/* Major arteries with traffic patterns */}
            <line x1="0" y1="200" x2="800" y2="200" stroke="currentColor" strokeWidth="4" opacity="0.7"/>
            <line x1="0" y1="202" x2="800" y2="202" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            <line x1="400" y1="0" x2="400" y2="400" stroke="currentColor" strokeWidth="4" opacity="0.7"/>
            <line x1="402" y1="0" x2="402" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            
            {/* Secondary streets */}
            <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <line x1="600" y1="0" x2="600" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <line x1="0" y1="100" x2="800" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <line x1="0" y1="300" x2="800" y2="300" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
          </g>
        </svg>
      </div>

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
