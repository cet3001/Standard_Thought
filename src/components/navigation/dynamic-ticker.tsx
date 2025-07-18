import { useState, useEffect } from 'react';
import { TICKER_MESSAGES } from './TickerMessages';
import { useUrbanTexture } from '@/hooks/use-urban-texture';

const DynamicTicker = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => 
        (prevIndex + 1) % TICKER_MESSAGES.length
      );
    }, 3000); // 3s per message transition for better readability

    return () => clearInterval(interval);
  }, [isPaused]);

  const renderMessageWithAccents = (message: string) => {
    // Add pearlescent yellow accents to key wealth-building terms
    const accentWords = ['legacy', 'wealth', 'credit', 'AI', 'boss', 'profit', 'stack', 'blueprints', 'grit', 'hustle', 'build', 'generational'];
    let processedMessage = message;
    
    accentWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      processedMessage = processedMessage.replace(regex, `<span class="pearlescent-text font-bold">${word}</span>`);
    });
    
    return { __html: processedMessage };
  };

  return (
    <div 
      className="relative py-4 shadow-lg overflow-hidden border-b-2 border-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        background: textureImageUrl 
          ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${textureImageUrl})`
          : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Urban texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/85 to-gray-900/90"></div>
      
      <div className="relative z-10">
        <div 
          className="animate-marquee whitespace-nowrap text-center font-kalam font-bold text-lg md:text-xl text-brand-cream transform -rotate-1"
          style={{
            animationDuration: isPaused ? 'paused' : '25s',
            animationPlayState: isPaused ? 'paused' : 'running',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 0px rgba(255,255,255,0.1)'
          }}
          dangerouslySetInnerHTML={renderMessageWithAccents(TICKER_MESSAGES[currentMessageIndex])}
        />
      </div>
      
      {/* Urban fade edges with texture blend */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default DynamicTicker;