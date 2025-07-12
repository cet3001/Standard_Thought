
const ValuePropsBackground = () => {
  return (
    <>
      {/* REMOVED ALL DARK OVERLAYS FOR CONSISTENT BRIGHTNESS */}
      
      {/* Subtle graffiti elements only - keeping these as they're very light */}
      <div className="absolute top-4 right-8 transform rotate-6 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <div 
          className="text-3xl font-black"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            filter: 'blur(0.5px)',
            color: 'transparent',
            background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          STACK UP
        </div>
      </div>
    </>
  );
};

export default ValuePropsBackground;
