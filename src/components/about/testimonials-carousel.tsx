
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "./testimonials/testimonial-data";
import TestimonialCard from "./testimonials/testimonial-card";
import TestimonialsHeader from "./testimonials/testimonials-header";
import TestimonialsCTA from "./testimonials/testimonials-cta";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const TestimonialsCarousel = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Urban Background - Matches other sections styling */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-35 bg-cover bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/25 via-slate-700/35 to-slate-900/25"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/65 via-brand-cream/70 to-brand-cream/75 dark:from-brand-black/65 dark:via-brand-black/70 dark:to-brand-black/75"></div>
      </div>

      {/* Graffiti accent elements */}
      <div className="absolute top-20 right-16 opacity-20 pointer-events-none" aria-hidden="true">
        <div 
          className="text-3xl font-black transform rotate-12 animate-shimmer"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            filter: 'blur(0.5px)',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}
        >
          REAL TALK
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <TestimonialsHeader />

        <div className="max-w-4xl mx-auto mb-16">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 8000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
            aria-label="Customer testimonials carousel"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="bg-white/10 border-white/20 hover:bg-white/20 -left-12" 
              aria-label="Previous testimonial"
              style={{
                color: '#FFD700',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                animation: 'pearlescent 3s ease-in-out infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            />
            <CarouselNext 
              className="bg-white/10 border-white/20 hover:bg-white/20 -right-12" 
              aria-label="Next testimonial"
              style={{
                color: '#FFD700',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                animation: 'pearlescent 3s ease-in-out infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            />
          </Carousel>
        </div>

        <TestimonialsCTA />
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
    </section>
  );
};

export default TestimonialsCarousel;
