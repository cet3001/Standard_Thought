
const GraffitiIcons = () => {
  return [
    // Spray-paint question mark for "What if I'm broke?"
    <svg key="broke" viewBox="0 0 40 40" className="w-full h-full">
      <defs>
        <filter id="spray1">
          <feTurbulence baseFrequency="0.9" numOctaves="4" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
        </filter>
      </defs>
      <path 
        d="M20 5c-4 0-7 3-7 7 0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1 .5-1.5 2-1.5s2 .5 2 1.5-1 3-3 5c-1.5 1.5-2 2.5-2 4v1h3v-1c0-.5.5-1 1.5-2s3.5-3 3.5-6c0-4-3-7-7-7zm-1.5 25c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5z" 
        fill="#FFD700" 
        filter="url(#spray1)"
        opacity="0.9"
      />
      <circle cx="35" cy="8" r="1.5" fill="#FFD700" opacity="0.6"/>
      <circle cx="8" cy="35" r="1" fill="#FFD700" opacity="0.4"/>
      <circle cx="32" cy="32" r="0.8" fill="#FFD700" opacity="0.5"/>
    </svg>,
    
    // Broken credit card for "Can I use this if my credit's shot?"
    <svg key="credit" viewBox="0 0 40 40" className="w-full h-full">
      <defs>
        <filter id="grunge1">
          <feTurbulence baseFrequency="0.8" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5"/>
        </filter>
      </defs>
      <rect x="6" y="12" width="20" height="12" rx="2" fill="#FF6B6B" filter="url(#grunge1)" opacity="0.8"/>
      <rect x="14" y="20" width="16" height="12" rx="2" fill="#FF4444" filter="url(#grunge1)" opacity="0.9"/>
      <path d="M15 16 L25 16 M15 18 L22 18" stroke="#000" strokeWidth="1" opacity="0.7"/>
      <path d="M18 22 L28 22 M18 24 L25 24" stroke="#000" strokeWidth="1" opacity="0.7"/>
      {/* Crack effect */}
      <path d="M12 10 L28 30 M20 8 L24 32" stroke="#000" strokeWidth="2" opacity="0.6"/>
      <circle cx="35" cy="10" r="1" fill="#FF6B6B" opacity="0.5"/>
      <circle cx="5" cy="35" r="1.2" fill="#FF4444" opacity="0.6"/>
    </svg>,
    
    // Graffiti stopwatch for "How long before I see real results?"
    <svg key="time" viewBox="0 0 40 40" className="w-full h-full">
      <defs>
        <filter id="drip1">
          <feTurbulence baseFrequency="0.7" numOctaves="2" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
        </filter>
      </defs>
      <circle cx="20" cy="22" r="12" fill="#00FF88" filter="url(#drip1)" opacity="0.85"/>
      <rect x="18" y="8" width="4" height="4" rx="1" fill="#00FF88" opacity="0.8"/>
      <path d="M20 14 L20 22 L26 26" stroke="#000" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <circle cx="20" cy="22" r="2" fill="#000" opacity="0.7"/>
      {/* Drip effects */}
      <ellipse cx="15" cy="35" rx="1" ry="2" fill="#00FF88" opacity="0.6"/>
      <ellipse cx="25" cy="36" rx="0.8" ry="1.5" fill="#00FF88" opacity="0.5"/>
      <circle cx="8" cy="12" r="1" fill="#00FF88" opacity="0.4"/>
      <circle cx="32" cy="8" r="1.2" fill="#00FF88" opacity="0.6"/>
    </svg>,
    
    // Graffiti "100" for "Is this just another finance course?"
    <svg key="hundred" viewBox="0 0 40 40" className="w-full h-full">
      <defs>
        <filter id="bubble1">
          <feTurbulence baseFrequency="0.6" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
        </filter>
      </defs>
      <text 
        x="20" 
        y="26" 
        textAnchor="middle" 
        className="font-black" 
        style={{ 
          fontSize: '18px', 
          fontFamily: "'Permanent Marker', cursive",
          fill: '#FF1493',
          filter: 'url(#bubble1)',
          opacity: 0.9,
          stroke: '#000',
          strokeWidth: '0.5px'
        }}
      >
        100
      </text>
      {/* Bubble/spray effects */}
      <circle cx="10" cy="10" r="1.5" fill="#FF1493" opacity="0.5"/>
      <circle cx="30" cy="8" r="1" fill="#FF1493" opacity="0.6"/>
      <circle cx="32" cy="30" r="1.2" fill="#FF1493" opacity="0.4"/>
      <circle cx="8" cy="32" r="0.8" fill="#FF1493" opacity="0.7"/>
      <circle cx="35" cy="15" r="0.6" fill="#FF1493" opacity="0.5"/>
    </svg>
  ];
};

export default GraffitiIcons;
