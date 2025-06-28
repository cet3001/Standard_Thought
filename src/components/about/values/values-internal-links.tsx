
import { Link } from "react-router-dom";

const ValuesInternalLinks = () => {
  return (
    <div className="text-center mt-16 relative max-w-4xl mx-auto">
      {/* Sticky Note/Graffiti Tag Visual */}
      <div className="relative">
        {/* Main sticky note background */}
        <div 
          className="bg-[#FFD700] p-8 rounded-lg shadow-lg transform -rotate-1 relative"
          style={{
            borderRadius: '15px 25px 20px 10px',
            boxShadow: '4px 6px 12px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(0,0,0,0.1)'
          }}
        >
          {/* Tape effect on top */}
          <div 
            className="absolute -top-3 left-1/4 w-16 h-6 bg-white/60 rounded-sm transform rotate-12"
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(1px)'
            }}
          ></div>
          <div 
            className="absolute -top-3 right-1/4 w-16 h-6 bg-white/60 rounded-sm transform -rotate-12"
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(1px)'
            }}
          ></div>

          {/* Content */}
          <p 
            className="text-lg text-[#0A0A0A] font-bold leading-relaxed mb-4"
            style={{
              fontFamily: "'Kalam', 'Comic Neue', cursive",
              textShadow: '1px 1px 0px rgba(255,255,255,0.3)'
            }}
          >
            See how real hustlers flipped their story in{" "}
            <Link 
              to="/blog" 
              className="text-[#0057FF] hover:text-[#003CCC] underline decoration-wavy underline-offset-4 hover:decoration-solid transition-all duration-300 font-black"
            >
              Builder Stories
            </Link>
            , or get the play-by-play with{" "}
            <Link 
              to="/resources" 
              className="text-[#0057FF] hover:text-[#003CCC] underline decoration-wavy underline-offset-4 hover:decoration-solid transition-all duration-300 font-black"
            >
              Success Strategies
            </Link>
            .
          </p>

          {/* Member testimonial quote */}
          <div className="relative">
            <p 
              className="text-sm text-[#0A0A0A]/80 italic font-medium border-l-2 border-[#0057FF] pl-3"
              style={{
                fontFamily: "'Kalam', 'Comic Neue', cursive"
              }}
            >
              "These stories showed me I wasn't alone—other people from my block made it work too." 
              <span className="text-xs font-bold text-[#0057FF] ml-1">- Marcus, Detroit</span>
            </p>
          </div>

          {/* Graffiti-style corner tag */}
          <div 
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#247EFF] transform rotate-45"
            style={{
              borderRadius: '2px 8px 2px 8px',
              boxShadow: '2px 2px 6px rgba(0,0,0,0.4)'
            }}
          ></div>

          {/* Small graffiti dots */}
          <div className="absolute top-2 right-4 w-2 h-2 bg-[#247EFF] rounded-full opacity-80"></div>
          <div className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-[#0057FF] rounded-full opacity-60"></div>
        </div>

        {/* Shadow/depth effect */}
        <div 
          className="absolute inset-0 bg-[#FFD700]/30 rounded-lg transform rotate-1 -z-10"
          style={{
            borderRadius: '20px 15px 25px 15px',
            top: '6px',
            left: '4px'
          }}
        ></div>
      </div>
    </div>
  );
};

export default ValuesInternalLinks;
