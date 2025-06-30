
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";

const FAQSectionHeader = () => {
  return (
    <div className="text-center mb-8 md:mb-12 relative">
      {/* Enhanced Graffiti Tag Visual */}
      <div className="absolute -top-8 -right-4 md:-right-8 w-32 h-20 transform rotate-12" aria-hidden="true">
        <svg viewBox="0 0 128 80" className="w-full h-full">
          {/* Multiple spray paint layers */}
          <ellipse cx="64" cy="40" rx="50" ry="30" fill="#ffd700" opacity="0.3"/>
          <ellipse cx="58" cy="35" rx="42" ry="25" fill="#f4d03f" opacity="0.5"/>
          <ellipse cx="70" cy="45" rx="38" ry="20" fill="#f8e71c" opacity="0.4"/>
          <ellipse cx="64" cy="40" rx="30" ry="15" fill="#ffeb3b" opacity="0.6"/>
          
          {/* Graffiti-style "Q&A" text */}
          <text 
            x="64" 
            y="48" 
            textAnchor="middle" 
            style={{ 
              fontSize: '20px', 
              fontFamily: "'Permanent Marker', 'Kalam', cursive",
              fontWeight: 'bold',
              textShadow: '2px 2px 0px rgba(0,0,0,0.4)',
              fill: '#f8e71c',
              stroke: '#000000',
              strokeWidth: '0.8px'
            }}
          >
            Q&A
          </text>
          
          {/* Enhanced drip and spray effects */}
          <circle cx="25" cy="60" r="2" fill="#ffd700" opacity="0.7"/>
          <circle cx="95" cy="65" r="1.5" fill="#f4d03f" opacity="0.5"/>
          <circle cx="64" cy="70" r="1.2" fill="#ffeb3b" opacity="0.6"/>
          <circle cx="20" cy="68" r="1" fill="#f8e71c" opacity="0.4"/>
          <circle cx="105" cy="55" r="1.8" fill="#ffd700" opacity="0.5"/>
          <circle cx="45" cy="75" r="0.8" fill="#f4d03f" opacity="0.6"/>
          <circle cx="85" cy="72" r="1" fill="#ffeb3b" opacity="0.4"/>
        </svg>
      </div>

      <HeaderHierarchy level={2} className="text-2xl md:text-3xl font-bold mb-6 relative" id="resources-faq-heading">
        Real Questions, Real Answers
      </HeaderHierarchy>
      
      {/* Enhanced subhead with graffiti styling */}
      <div className="relative max-w-2xl mx-auto mb-2">
        <p 
          className="text-lg md:text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80 font-bold relative z-10"
          style={{
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
            letterSpacing: '0.5px'
          }}
        >
          No corporate BS, just straight talk about building wealth from the ground up.
        </p>
        
        {/* Handwritten underline with graffiti effect */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4">
          <svg viewBox="0 0 300 20" className="w-full h-5" style={{ animation: 'tagGlow 3s ease-in-out infinite' }}>
            <defs>
              <filter id="roughen">
                <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
              </filter>
            </defs>
            <path 
              d="M10 12 Q75 8 150 10 Q225 12 290 8" 
              stroke="#f8e71c" 
              strokeWidth="3" 
              fill="none" 
              filter="url(#roughen)"
              opacity="0.9"
              strokeLinecap="round"
            />
            <path 
              d="M15 14 Q80 10 155 12 Q230 14 285 10" 
              stroke="#ffd700" 
              strokeWidth="2" 
              fill="none" 
              filter="url(#roughen)"
              opacity="0.7"
              strokeLinecap="round"
            />
            {/* Spray dots */}
            <circle cx="50" cy="15" r="1" fill="#f8e71c" opacity="0.6"/>
            <circle cx="120" cy="6" r="0.8" fill="#ffd700" opacity="0.7"/>
            <circle cx="200" cy="16" r="1.2" fill="#f8e71c" opacity="0.5"/>
            <circle cx="250" cy="4" r="0.6" fill="#ffd700" opacity="0.8"/>
          </svg>
        </div>
        
        {/* Side graffiti tag */}
        <div className="absolute -right-8 md:-right-12 top-1/2 transform -translate-y-1/2 rotate-12">
          <svg viewBox="0 0 60 30" className="w-12 h-6 md:w-16 md:h-8">
            <ellipse cx="30" cy="15" rx="25" ry="12" fill="#f8e71c" opacity="0.4"/>
            <ellipse cx="28" cy="13" rx="20" ry="9" fill="#ffd700" opacity="0.6"/>
            <text 
              x="30" 
              y="18" 
              textAnchor="middle" 
              style={{ 
                fontSize: '10px', 
                fontFamily: "'Permanent Marker', cursive",
                fontWeight: 'bold',
                fill: '#f8e71c',
                stroke: '#000',
                strokeWidth: '0.3px'
              }}
            >
              REAL
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FAQSectionHeader;
