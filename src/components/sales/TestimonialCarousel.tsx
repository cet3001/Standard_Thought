import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "No cap, this actually changed my whole mindset.",
    author: "Marco",
    location: "South Bronx"
  },
  {
    id: 2,
    quote: "Finally someone who gets where I'm coming from—no fake promises, just real moves.",
    author: "Keisha",
    location: "Detroit"
  },
  {
    id: 3,
    quote: "They broke down barriers I didn't even know existed. Now I see the game clearly.",
    author: "Carlos",
    location: "East LA"
  },
  {
    id: 4,
    quote: "This isn't theory—it's street knowledge packaged right. Changed everything for my family.",
    author: "Amara",
    location: "Atlanta"
  },
  {
    id: 5,
    quote: "Real talk: they showed me how to flip my hustle into something my kids can build on.",
    author: "Jamal",
    location: "Oakland"
  }
];

const TestimonialCarousel = () => {
  const [api, setApi] = useState<any>();

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem 
              key={testimonial.id} 
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <div 
                  className="group bg-gradient-to-br from-[#f4d03f]/15 via-[#f7dc6f]/10 to-[#fdeaa7]/20 dark:from-[#f4d03f]/8 dark:via-[#f7dc6f]/5 dark:to-[#fdeaa7]/10 border-2 border-[#FFD700]/40 hover:border-[#FFD700]/80 rounded-2xl p-8 shadow-lg hover:shadow-xl backdrop-blur-sm relative overflow-hidden transition-all duration-500 cursor-pointer h-full min-h-[280px] flex flex-col justify-between"
                  aria-label={`Testimonial from ${testimonial.author}, ${testimonial.location}`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,208,63,0.3)_1px,_transparent_1px)] bg-[length:15px_15px]"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-[#FFD700]/30 to-[#FFA500]/30 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Quote */}
                    <blockquote className="text-xl sm:text-2xl font-bold text-brand-black dark:text-brand-cream mb-6 leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Attribution */}
                    <div className="mt-auto">
                      <p className="text-lg font-bold text-brand-black dark:text-brand-cream/90 mb-2">
                        — {testimonial.author}, {testimonial.location}
                      </p>
                      <p className="text-sm text-brand-black/70 dark:text-brand-cream/60 font-medium">
                        Real people, real results—no fake testimonials, no BS promises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows - hidden on mobile */}
        <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
        <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
      </Carousel>
      
      {/* Mobile swipe hint */}
      <div className="md:hidden text-center mt-4">
        <p className="text-sm text-brand-black/60 dark:text-brand-cream/50">
          Swipe to see more testimonials
        </p>
      </div>
    </div>
  );
};

export default TestimonialCarousel;