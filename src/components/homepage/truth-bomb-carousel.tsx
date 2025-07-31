import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TruthBombCarouselProps {
  isVisible: boolean;
}

const truthBombsData = [
  {
    id: 1,
    quote: "You can't heal in the same identity that kept you safe.",
    pillar: "Unlearn"
  },
  {
    id: 2,
    quote: "Not every blueprint is yours to follow.",
    pillar: "Rebuild"
  },
  {
    id: 3,
    quote: "Stacking bread with no clarity is just another trap.",
    pillar: "Stack"
  },
  {
    id: 4,
    quote: "You are not your trauma—you're your choices after it.",
    pillar: "Transcend"
  }
];

const TruthBombCarousel = ({ isVisible }: TruthBombCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % truthBombsData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % truthBombsData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + truthBombsData.length) % truthBombsData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className={`mb-16 relative transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Background */}
      <div className="relative bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-black/10">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative z-10">
          <h2 
            className="text-3xl md:text-4xl font-black mb-4 transform -rotate-1 relative"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive", 
              textShadow: '3px 3px 0px rgba(0,0,0,0.15)'
            }}
          >
            <span style={{ color: 'var(--color-lovable-black)' }}>Truth Bomb</span> <span className="pearlescent-text">Carousel</span>
            {/* Enhanced texture behind title */}
            <div className="absolute inset-0 opacity-[0.08] bg-[conic-gradient(from_30deg,_transparent_65%,_rgba(0,0,0,0.5)_85%,_transparent_100%)] bg-[length:25px_25px] -z-10"></div>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Slides Container */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {truthBombsData.map((truthBomb, index) => (
                <div 
                  key={truthBomb.id}
                  className="carousel-slide w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10 dark:border-black/10 text-center min-h-[200px] flex flex-col justify-center">
                    
                    {/* Pillar Tag */}
                    <div className="mb-6">
                      <span 
                        className="pillar-tag inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border-2"
                        style={{ 
                          backgroundColor: 'var(--color-lovable-pearlescent-yellow)',
                          color: 'var(--color-lovable-black)',
                          borderColor: 'var(--color-lovable-pearlescent-yellow)'
                        }}
                      >
                        {truthBomb.pillar}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote 
                      className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight font-inter"
                      style={{ color: 'var(--color-lovable-black)' }}
                    >
                      "{truthBomb.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 border border-white/10 dark:border-black/10 rounded-full"
            onClick={prevSlide}
            aria-label="Previous truth bomb"
          >
            <ChevronLeft 
              className="h-6 w-6" 
              style={{ color: 'var(--color-lovable-black)' }}
            />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 border border-white/10 dark:border-black/10 rounded-full"
            onClick={nextSlide}
            aria-label="Next truth bomb"
          >
            <ChevronRight 
              className="h-6 w-6" 
              style={{ color: 'var(--color-lovable-black)' }}
            />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {truthBombsData.map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === currentSlide 
                    ? 'var(--color-lovable-pearlescent-yellow)' 
                    : 'rgba(26, 26, 26, 0.3)',
                  transform: index === currentSlide ? 'scale(1.25)' : 'scale(1)'
                }}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruthBombCarousel;