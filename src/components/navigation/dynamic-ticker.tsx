import { useState, useEffect } from 'react';

const TICKER_MESSAGES = [
  "Real strategies, real results—join builders creating wealth from scratch",
  "No trust funds, no shortcuts—just blueprints for stacking bread",
  "From the block to the boardroom—flip your story, build your legacy",
  "Street-smart moves for first-gen hustlers and underestimated creators",
  "Level up your money game—one real play at a time",
  "Break money trauma, build generational wealth—no cap",
  "Learn how to stack, invest, and build with nothing but vision and hustle",
  "Community-driven, culturally-rooted financial education for the people",
  "Hustle smart, not just hard—turn setbacks into blueprints",
  "Every win starts with a real plan—get yours today"
];

const DynamicTicker = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => 
          (prevIndex + 1) % TICKER_MESSAGES.length
        );
        setIsVisible(true);
      }, 300); // Brief fade out before changing message
      
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 text-brand-cream text-center py-3 shadow-md overflow-hidden relative">
      <div 
        className={`transition-opacity duration-300 font-semibold text-sm md:text-base px-4 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          fontFamily: "'IBM Plex Sans', 'Inter', sans-serif",
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          letterSpacing: '0.025em'
        }}
      >
        {TICKER_MESSAGES[currentMessageIndex]}
      </div>
      
      {/* Urban texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent opacity-30 pointer-events-none" />
    </div>
  );
};

export default DynamicTicker;