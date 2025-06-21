
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      quote: "I was stuck in the same cycle for years—good job, empty bank account, no real direction. Calvin's approach isn't about quick fixes or overnight miracles. It's about building something real from the ground up. Six months later, I launched my consulting practice and hit $15K in my first quarter. This isn't just motivation—it's a blueprint.",
      name: "Marcus Johnson",
      title: "Former Corporate Manager → Business Owner",
      category: "Business",
      initials: "MJ",
      categoryColor: "bg-blue-500"
    },
    {
      quote: "As a Black woman in tech, I was tired of playing it safe and still getting overlooked. Standard Thought showed me how to build my own table instead of waiting for a seat at theirs. I went from side hustle to full-time entrepreneur in 8 months. Calvin gets the cultural pieces that other 'gurus' completely miss.",
      name: "Jasmine Williams", 
      title: "Software Developer → Tech Consultant",
      category: "Career",
      initials: "JW",
      categoryColor: "bg-green-500"
    },
    {
      quote: "Real talk—I was skeptical about another 'mindset' program. But this hit different. It's not about toxic positivity or fake motivation. It's about strategic thinking, cultural awareness, and building generational wealth. My investment portfolio grew 40% this year, and I finally have a plan that makes sense for my family's future.",
      name: "Derek Thompson",
      title: "Teacher → Real Estate Investor", 
      category: "Wealth",
      initials: "DT",
      categoryColor: "bg-[#f4d03f]"
    },
    {
      quote: "I used to think success meant grinding 24/7 and burning myself out. Standard Thought taught me how to work with intention, not just intensity. I doubled my income while working fewer hours and finally have time for my family. This isn't about hustle culture—it's about smart culture.",
      name: "Keisha Martinez",
      title: "Marketing Manager → Digital Agency Owner",
      category: "Mindset",
      initials: "KM",
      categoryColor: "bg-purple-500"
    },
    {
      quote: "Calvin doesn't just talk about lifting as you climb—he shows you how. After implementing his community-building strategies, I launched a mentorship program that's helped 50+ young professionals in my city. Success isn't just personal anymore—it's generational.",
      name: "Anthony Davis",
      title: "Non-Profit Director → Community Leader",
      category: "Legacy",
      initials: "AD",
      categoryColor: "bg-orange-500"
    },
    {
      quote: "As an artist, I thought business and creativity were opposites. Standard Thought showed me how to monetize my art without selling my soul. I went from broke creative to six-figure art business owner in 18 months. Now I create on my terms AND pay my bills.",
      name: "Maya Patel",
      title: "Freelance Artist → Art Business Owner",
      category: "Creative",
      initials: "MP",
      categoryColor: "bg-teal-500"
    }
  ];

  const StarRating = () => (
    <div className="flex justify-center space-x-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#f4d03f] text-[#f4d03f]" />
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#247EFF]/20 via-transparent to-[#f4d03f]/10"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(36, 126, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(244, 208, 63, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(36, 126, 255, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Real People. Real Results. <span className="text-[#f4d03f]">Real Talk.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See what happens when you stop settling for average
          </p>
        </div>

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
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mx-4 text-center min-h-[400px] flex flex-col justify-between">
                    {/* Category Tag */}
                    <div className="flex justify-center mb-6">
                      <span className={`${testimonial.categoryColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {testimonial.category}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-white/90 text-xl md:text-2xl leading-relaxed italic mb-8 flex-grow flex items-center">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <StarRating />
                      
                      {/* Profile */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-20 h-20 bg-[#247EFF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.initials}
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-white text-lg">{testimonial.name}</div>
                          <div className="text-[#f4d03f] text-sm font-medium">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-[#f4d03f] hover:bg-[#f4d03f] hover:text-black -left-12" />
            <CarouselNext className="bg-white/10 border-white/20 text-[#f4d03f] hover:bg-[#f4d03f] hover:text-black -right-12" />
          </Carousel>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to write your own success story?
          </h3>
          <Button 
            className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
            asChild
          >
            <a href="#newsletter">Get Your Free Playbook</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
