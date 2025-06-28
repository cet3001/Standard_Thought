
export const ManifestoBackground = () => {
  return (
    <>
      {/* Enhanced brick wall background texture */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden="true">
        {/* Brick pattern */}
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 8px,
                rgba(139, 69, 19, 0.4) 8px,
                rgba(139, 69, 19, 0.4) 16px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 24px,
                rgba(160, 82, 45, 0.3) 24px,
                rgba(160, 82, 45, 0.3) 48px
              ),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 32px,
                rgba(101, 67, 33, 0.2) 32px,
                rgba(101, 67, 33, 0.2) 64px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%, 200% 200%',
            backgroundPosition: '0 0, 0 0, 0 0'
          }}
        />
        
        {/* Mortar lines and weathering */}
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full bg-[radial-gradient(circle_at_3px_3px,_rgba(0,0,0,0.6)_1px,_transparent_0)] bg-[length:16px_16px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_48%,_rgba(0,0,0,0.3)_49%,_rgba(0,0,0,0.3)_51%,_transparent_52%)] bg-[length:12px_12px] opacity-40"></div>
        </div>
      </div>

      {/* Faded cityscape silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.08] pointer-events-none" aria-hidden="true">
        <svg 
          viewBox="0 0 1200 150" 
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* City skyline silhouette */}
          <path 
            d="M0,150 L0,120 L50,120 L50,80 L120,80 L120,40 L180,40 L180,90 L240,90 L240,60 L300,60 L300,100 L350,100 L350,30 L420,30 L420,110 L480,110 L480,70 L540,70 L540,120 L600,120 L600,50 L670,50 L670,90 L730,90 L730,20 L800,20 L800,100 L860,100 L860,80 L920,80 L920,130 L980,130 L980,60 L1040,60 L1040,110 L1100,110 L1100,40 L1200,40 L1200,150 Z" 
            fill="currentColor" 
            className="text-brand-black/80 dark:text-brand-cream/20"
          />
          
          {/* Building details and windows */}
          <g className="text-brand-black/40 dark:text-brand-cream/10" opacity="0.6">
            {/* Windows on buildings */}
            <rect x="60" y="90" width="3" height="4" fill="currentColor"/>
            <rect x="70" y="90" width="3" height="4" fill="currentColor"/>
            <rect x="80" y="90" width="3" height="4" fill="currentColor"/>
            <rect x="130" y="50" width="4" height="5" fill="currentColor"/>
            <rect x="140" y="50" width="4" height="5" fill="currentColor"/>
            <rect x="150" y="50" width="4" height="5" fill="currentColor"/>
            <rect x="250" y="70" width="3" height="4" fill="currentColor"/>
            <rect x="260" y="70" width="3" height="4" fill="currentColor"/>
            <rect x="270" y="70" width="3" height="4" fill="currentColor"/>
            <rect x="360" y="40" width="4" height="6" fill="currentColor"/>
            <rect x="375" y="40" width="4" height="6" fill="currentColor"/>
            <rect x="390" y="40" width="4" height="6" fill="currentColor"/>
          </g>
        </svg>
      </div>
    </>
  );
};
