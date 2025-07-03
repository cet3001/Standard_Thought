import { ReactNode } from "react";

interface SectionOverlayBoxProps {
  children: ReactNode;
  className?: string;
}

const SectionOverlayBox = ({ children, className = "" }: SectionOverlayBoxProps) => {
  return (
    <div 
      className={`relative border border-gray-300/20 rounded-3xl p-8 mb-16 overflow-hidden bg-white/95 dark:bg-brand-black/95 ${className}`}
      style={{
        background: 'rgba(128, 128, 128, 0.1)'
      }}
    >
      {/* Torn Paper Effect Background - SVG Overlay */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <svg 
          viewBox="0 0 400 200" 
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M0,0 L400,0 L395,15 L385,25 L390,35 L380,45 L385,55 L375,65 L380,75 L370,85 L375,95 L365,105 L370,115 L360,125 L365,135 L355,145 L360,155 L350,165 L355,175 L345,185 L350,195 L400,200 L0,200 Z" 
            fill="currentColor" 
            className="text-yellow-400/10"
          />
          <path 
            d="M0,20 L15,25 L25,15 L35,30 L45,20 L55,35 L65,25 L75,40 L85,30 L95,45 L105,35 L115,50 L125,40 L135,55 L145,45 L155,60 L165,50 L175,65 L185,55 L195,70 L205,60 L215,75 L225,65 L235,80 L245,70 L255,85 L265,75 L275,90 L285,80 L295,95 L305,85 L315,100 L325,90 L335,105 L345,95 L355,110 L365,100 L375,115 L385,105 L395,120 L400,115 L400,200 L0,200 Z" 
            fill="currentColor" 
            className="text-yellow-300/15"
          />
        </svg>
      </div>

      {/* Gritty texture overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SectionOverlayBox;