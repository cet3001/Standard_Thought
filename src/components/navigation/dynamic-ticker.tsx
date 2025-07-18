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

  const renderMessageWithAccents = (message: string) => {
    // Add yellow accents to key wealth-building terms
    const accentWords = ['legacy', 'wealth', 'credit', 'AI', 'boss', 'profit', 'stack', 'blueprints'];
    let processedMessage = message;
    
    accentWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      processedMessage = processedMessage.replace(regex, `<span class="text-yellow-400">${word}</span>`);
    });
    
    return { __html: processedMessage };
  };

  return (
    <div 
      className="bg-slate-700 text-brand-cream py-3 shadow-md overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative">
        <div 
          className="animate-marquee whitespace-nowrap font-bold text-md md:text-lg text-center"
          style={{
            animationDuration: isPaused ? 'paused' : '20s',
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
          dangerouslySetInnerHTML={renderMessageWithAccents(TICKER_MESSAGES[currentMessageIndex])}
        />
      </div>
      
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-700 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-700 to-transparent pointer-events-none" />
    </div>
  );
};

export default DynamicTicker;