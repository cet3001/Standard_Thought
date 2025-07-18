import { useState, useEffect } from 'react';
import { TICKER_MESSAGES } from './TickerMessages';

const DynamicTicker = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => 
        (prevIndex + 1) % TICKER_MESSAGES.length
      );
    }, 2000); // 2s per message transition

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentMessage = TICKER_MESSAGES[currentMessageIndex];

  // Render message with yellow highlights for keywords
  const renderMessageWithHighlights = (text: string, keywords: string[]) => {
    let highlightedText = text;
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="text-yellow-400">$1</span>');
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <div 
      className="bg-slate-700 text-white text-center py-3 shadow-md overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="banner"
      aria-live="polite"
      aria-label="Dynamic announcements"
    >
      {/* Smooth transition container */}
      <div className="relative h-6 flex items-center justify-center">
        <div 
          className="font-bold text-lg md:text-lg lg:text-lg text-center px-4 transition-all duration-500 ease-in-out"
          style={{
            fontFamily: "'IBM Plex Sans', 'Inter', sans-serif",
            letterSpacing: '0.025em',
            fontWeight: 700
          }}
        >
          {renderMessageWithHighlights(currentMessage.text, currentMessage.keywords)}
        </div>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 via-transparent to-slate-700/20 pointer-events-none" />
    </div>
  );
};

export default DynamicTicker;