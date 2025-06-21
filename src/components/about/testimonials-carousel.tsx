
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
      quote: "I stopped letting fear hold me back. StandardThought helped me see that my story wasn't a setback—it was my superpower. Growing up broke taught me resilience, and now I use that same energy to build wealth. My mindset shift happened before my bank account did.",
      name: "Jamal Thompson",
      title: "Philadelphia → Mindset Coach", 
      category: "Mindset",
      initials: "JT",
      categoryColor: "bg-purple-500"
    },
    {
      quote: "For years, I carried the weight of financial trauma from my family. I thought money was evil or that I didn't deserve it. Standard Thought helped me rewrite those stories. Now I see money as a tool for freedom, not something to fear. That mental shift changed everything.",
      name: "Maria Rodriguez",
      title: "Teacher → Financial Coach",
      category: "Money Mindset",
      initials: "MR",
      categoryColor: "bg-pink-500"
    },
    {
      quote: "I used to think success meant grinding 24/7 and burning myself out. Standard Thought taught me how to work with intention, not just intensity. I doubled my income while working fewer hours and finally have time for my family. This isn't about hustle culture—it's about smart culture.",
      name: "Keisha Martinez",
      title: "Marketing Manager → Digital Agency Owner",
      category: "Balance",
      initials: "KM",
      categoryColor: "bg-teal-500"
    },
    {
      quote: "I used to apologize for wanting more. Growing up, I was taught that being ambitious was 'too much.' Standard Thought showed me how to own my vision without shrinking myself. Now I run a seven-figure business and I'm unapologetically hungry for more.",
      name: "Asha Williams",
      title: "Non-Profit Worker → CEO",
      category: "Confidence",
      initials: "AW",
      categoryColor: "bg-orange-500"
    },
    {
      quote: "The biggest shift wasn't in my strategy—it was in my self-talk. I went from 'I can't afford it' to 'How can I afford it?' That simple reframe opened up possibilities I never saw before. Now I invest in real estate and my kids will never know the poverty I grew up with.",
      name: "Devon Harris",
      title: "Security Guard → Real Estate Investor",
      category: "Reframe",
      initials: "DH",
      categoryColor: "bg-indigo-500"
    },
    {
      quote: "I had imposter syndrome so bad I almost talked myself out of every opportunity. Standard Thought helped me realize that feeling like an outsider was actually my advantage. Now I use that perspective to spot opportunities others miss. My 'weakness' became my superpower.",
      name: "Zara Okafor",
      title: "Immigrant → Tech Founder",
      category: "Identity",
      initials: "ZO",
      categoryColor: "bg-red-500"
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
