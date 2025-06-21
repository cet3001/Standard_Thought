
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

const TestimonialsCarousel = () => {
  return (
    <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#247EFF]/20 via-transparent to-[#f4d03f]/10"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(36, 126, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(244, 208, 63, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(36, 126, 255, 0.1) 0%, transparent 50%)`
        }}></div>
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
