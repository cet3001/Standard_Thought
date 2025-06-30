
const ValuePropsBackground = () => {
  return (
    <>
      {/* Enhanced brick texture background */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
        {/* Complex brick pattern with weathering */}
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(139, 69, 19, 0.3),
                rgba(139, 69, 19, 0.3) 2px,
                transparent 2px,
                transparent 16px,
                rgba(101, 67, 33, 0.4) 16px,
                rgba(101, 67, 33, 0.4) 18px,
                transparent 18px,
                transparent 32px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(160, 82, 45, 0.2),
                rgba(160, 82, 45, 0.2) 1px,
                transparent 1px,
                transparent 48px,
                rgba(139, 69, 19, 0.3) 48px,
                rgba(139, 69, 19, 0.3) 50px,
                transparent 50px,
                transparent 96px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%'
          }}
        />
        
        {/* Grunge and wear patterns */}
        <div className="absolute inset-0 opacity-70">
          <div className="w-full h-full bg-[radial-gradient(circle_at_4px_4px,_rgba(0,0,0,0.5)_2px,_transparent_0)] bg-[length:20px_20px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(25deg,_transparent_47%,_rgba(0,0,0,0.2)_48%,_rgba(0,0,0,0.2)_52%,_transparent_53%)] bg-[length:8px_8px] opacity-50"></div>
        </div>
      </div>

      {/* Subtle graffiti elements */}
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
