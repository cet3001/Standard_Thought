
const ValuePropsArrow = () => {
  return (
    <div className="mt-12 flex justify-center relative z-10">
      <div 
        className="transform rotate-12 relative"
        style={{ 
          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive"
        }}
      >
        {/* Enhanced hand-drawn arrow SVG with yellow color */}
        <svg 
          width="140" 
          height="90" 
          viewBox="0 0 140 90" 
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.15))' }}
        >
          <path 
            d="M25,70 Q45,25 65,45 Q85,65 105,35 L100,40 M105,35 L100,30" 
            stroke="#f4d03f"
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          {/* Additional sketch lines for hand-drawn effect */}
          <path 
            d="M27,72 Q47,27 67,47 Q87,67 103,37" 
            stroke="#ffd700"
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
          <path 
            d="M23,68 Q43,23 63,43 Q83,63 103,33" 
            stroke="#ffeb3b"
            strokeWidth="1" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.3"
          />
        </svg>
        
        <div className="text-lg font-bold mt-6 transform -rotate-6 relative" style={{
          color: 'transparent',
          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'pearlescent 3s ease-in-out infinite'
        }}>
          Get the Blueprint ↓
          {/* Subtle spray effect */}
          <div className="absolute inset-0 opacity-60 blur-md -z-10" style={{
            background: 'linear-gradient(to right, transparent, rgba(244, 208, 63, 0.2), transparent)'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default ValuePropsArrow;
