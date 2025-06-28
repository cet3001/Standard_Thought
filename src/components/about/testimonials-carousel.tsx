
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
      {/* Urban Background - Street Style */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-25 bg-repeat bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: textureImageUrl.startsWith('data:') ? 'cover' : '350px 350px',
              filter: 'contrast(1.4) brightness(0.6) saturate(0.8)'
            }}
          />
        )}
        
        {/* Dark urban overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-85"></div>
        
        {/* Additional texture for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(36,126,255,0.1)_0%,_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(244,208,63,0.08)_0%,_transparent_50%)]"></div>
      </div>

      {/* Graffiti accent elements */}
      <div className="absolute top-20 right-16 opacity-20 pointer-events-none" aria-hidden="true">
        <div 
          className="text-[#f4d03f] text-3xl font-black transform rotate-12"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
            filter: 'blur(0.5px)'
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
            <CarouselPrevious className="bg-white/10 border-white/20 text-[#f4d03f] hover:bg-[#f4d03f] hover:text-black -left-12" aria-label="Previous testimonial" />
            <CarouselNext className="bg-white/10 border-white/20 text-[#f4d03f] hover:bg-[#f4d03f] hover:text-black -right-12" aria-label="Next testimonial" />
          </Carousel>
        </div>

        <TestimonialsCTA />
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
