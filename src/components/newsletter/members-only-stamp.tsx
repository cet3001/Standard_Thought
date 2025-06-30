
import { Lock } from "lucide-react";

export const MembersOnlyStamp = () => {
  return (
    <div className="absolute top-6 right-6 z-10">
      <div 
        className="text-black px-4 py-2 transform -rotate-12 shadow-xl border-3 border-black"
        style={{ 
          background: 'linear-gradient(45deg, #ffd700, #ffed4e, #fff176, #ffeb3b, #f4d03f, #f7dc6f, #fdeaa7, #ffd700)',
          backgroundSize: '300% 300%',
          animation: 'enhanced-pearlescent 2.5s ease-in-out infinite',
          fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
          fontSize: '14px',
          fontWeight: 'bold',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          filter: 'drop-shadow(0 4px 8px rgba(255, 215, 0, 0.4))'
        }}
      >
        <Lock className="w-4 h-4 inline mr-2" />
        Members Only
      </div>
    </div>
  );
};
