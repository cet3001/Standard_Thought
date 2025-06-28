
import { Testimonial } from "./testimonial-data";
import StarRating from "./star-rating";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="mx-4 flex justify-center">
      {/* Polaroid/Sticky Note Container */}
      <div 
        className="bg-white p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 relative max-w-md"
        style={{
          borderRadius: '8px 12px 8px 15px',
          transform: `rotate(${Math.random() * 4 - 2}deg)`,
          boxShadow: '8px 12px 24px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(0,0,0,0.1)'
        }}
      >
        {/* Tape effects */}
        <div 
          className="absolute -top-4 left-8 w-16 h-8 bg-yellow-200/80 rounded-sm transform rotate-12"
          style={{
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            backdropFilter: 'blur(1px)'
          }}
        />
        <div 
          className="absolute -top-3 right-12 w-12 h-6 bg-white/70 rounded-sm transform -rotate-6"
          style={{
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        />

        {/* Street Cred Badge - Now with pearlescent effect */}
        <div 
          className="absolute -top-2 -right-2 text-black text-xs font-black px-3 py-1 rounded-full transform rotate-12 shadow-lg border-2 border-black"
          style={{
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}
        >
          REAL TALK
        </div>

        {/* Category Tag - Graffiti Style */}
        <div className="mb-4 flex justify-start">
          <span 
            className={`${testimonial.categoryColor} text-white px-3 py-1 text-xs font-bold transform -rotate-2 shadow-md`}
            style={{ 
              borderRadius: '4px 8px 4px 8px',
              fontFamily: "'Permanent Marker', 'Kalam', cursive",
              textShadow: '1px 1px 0px rgba(0,0,0,0.3)'
            }}
          >
            {testimonial.category.toUpperCase()}
          </span>
        </div>

        {/* Quote - Handwritten Style */}
        <blockquote 
          className="text-gray-800 text-lg leading-relaxed mb-6 min-h-[120px] flex items-center"
          style={{
            fontFamily: "'Kalam', 'Comic Neue', cursive",
            fontWeight: '500',
            color: '#2c2c2c'
          }}
        >
          "{testimonial.quote}"
        </blockquote>
        
        {/* Star Rating */}
        <div className="mb-4 flex justify-center">
          <StarRating />
        </div>
        
        {/* Profile - Street Style */}
        <div className="flex items-center space-x-4">
          {/* Avatar with graffiti style */}
          <div 
            className="w-16 h-16 bg-gradient-to-br from-[#247EFF] to-[#0057FF] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-3 border-white"
            style={{
              textShadow: '1px 1px 0px rgba(0,0,0,0.3)'
            }}
            aria-hidden="true"
          >
            {testimonial.initials}
          </div>
          
          <div className="text-left flex-1">
            <div 
              className="font-bold text-gray-800 text-base mb-1"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              {testimonial.name}
            </div>
            <div 
              className="text-[#247EFF] text-sm font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {testimonial.title}
            </div>
          </div>
        </div>

        {/* Small graffiti dots for decoration */}
        <div className="absolute bottom-2 right-4 w-2 h-2 bg-[#247EFF] rounded-full opacity-60"></div>
        <div className="absolute top-16 right-2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-80"></div>
      </div>

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialCard;
