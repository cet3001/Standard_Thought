import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionOverlayBox } from "@/components/layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface BlogTestimonialsProps {
  isVisible: boolean;
}

// Enhanced testimonial data with badges
const testimonials = [
  {
    id: 1,
    name: "Andrea",
    location: "New Orleans",
    quote: "These frameworks taught me that every setback is a setup for a comeback. Changed my whole perspective on legacy in the hood. Now I see opportunity where I used to see obstacles.",
    badge: "Mind Games",
    category: "mindset"
  },
  {
    id: 2,
    name: "Marcus",
    location: "Detroit",
    quote: "First person in my family to break six figures. Started with $200 and a lot of doubt. The culture shift happened before the cash did, but both came.",
    badge: "First in the Family",
    category: "family"
  },
  {
    id: 3,
    name: "Zara",
    location: "South London",
    quote: "AI changed everything for my design business. Went from struggling freelancer to agency owner in 18 months. The tools were there, I just needed the framework.",
    badge: "Digital Hustles",
    category: "digital"
  },
  {
    id: 4,
    name: "Carlos",
    location: "East LA",
    quote: "Used to think money was evil because that's what we were taught. Learning the real game changed how I provide for my kids. They'll never have the money fears I had.",
    badge: "Culture & Cash",
    category: "culture"
  },
  {
    id: 5,
    name: "Nia",
    location: "Oakland",
    quote: "Built my first investment portfolio at 23. Started with my tax refund and kept building. Now my money works harder than I do, and I sleep better because of it.",
    badge: "The Builder's Path",
    category: "building"
  }
];

const getBadgeColors = (category: string) => {
  const colors = {
    mindset: "bg-[#FFD966] text-black", // Mind Games - gold/yellow
    culture: "bg-[#FCD5CE] text-black", // Culture & Cash - soft coral/peach
    building: "bg-[#C1D3C9] text-black", // The Builder's Path - mint green
    family: "bg-[#CDB4DB] text-black", // First in the Family - soft lavender
    digital: "bg-[#A2D2FF] text-black", // Digital Hustles - cool blue
  };
  return colors[category] || "bg-gray-200 text-black";
};

const BlogTestimonials = ({ isVisible }: BlogTestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoplay = Autoplay({
    delay: 6000,
    stopOnInteraction: true,
  });

  return (
    <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Background Visual Element */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-20">
        <h3 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono mb-4 uppercase">
          Proof That It's Possible
        </h3>
        <p className="text-lg md:text-xl text-brand-gold dark:text-brand-cream font-medium">
          Real People. Real Struggles. Real Progress.
        </p>
      </div>
      
      {/* Testimonial Carousel */}
      <div className="relative z-20 mb-12">
        <Carousel
          plugins={[autoplay]}
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-xl p-6 border border-white/20 dark:border-gray-700/30 h-64 flex flex-col">
                  {/* Badge Ribbon */}
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className={`${getBadgeColors(testimonial.category)} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg`}>
                      {testimonial.badge}
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="flex-1 text-sm md:text-base text-brand-black dark:text-brand-cream leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="mt-auto">
                    <p className="font-bold text-brand-black dark:text-brand-cream text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-brand-black/70 dark:text-brand-cream/70">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation */}
          <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-brand-black dark:text-brand-cream hover:bg-white/30" />
          <CarouselNext className="right-4 bg-white/20 border-white/30 text-brand-black dark:text-brand-cream hover:bg-white/30" />
        </Carousel>
      </div>

      {/* Soft CTA */}
      <div className="text-center relative z-20">
        <a 
          href="/blog?filter=builder" 
          className="text-brand-cream hover:text-brand-gold transition-colors duration-300 text-lg font-medium underline decoration-brand-gold/50 hover:decoration-brand-gold underline-offset-4"
        >
          Read Their Stories
        </a>
      </div>
    </SectionOverlayBox>
  );
};

export default BlogTestimonials;