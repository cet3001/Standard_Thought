
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="About Standardthought - Why We're Here"
        description="Learn about Standardthought's mission to help entrepreneurs build legacy from nothing. Founded by outsiders and underdogs who earned every win through hustle and grit."
        keywords="about standardthought, entrepreneur community, business legacy, startup founders, underdog entrepreneurs, business mentorship"
        url="https://standardthought.com/about"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
              Why <span className="text-[#247EFF]">Standard</span>thought?
            </h1>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed">
              Because we're not here for average. This is for the ones who had to figure it out with nothing but hustle, 
              grit, and their own two hands. If you've ever felt like you had to make your own playbook—this is your home.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white/90 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <img 
                src="/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png" 
                alt="Looking up at the crown - building your own legacy" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">Our Story</h2>
              <div className="space-y-4 text-[#0A0A0A]/70 dark:text-brand-cream/70">
                <p>
                  Standardthought was built by outsiders and underdogs—people who were tired of playing by someone else's rules. 
                  We came up with empty pockets, big dreams, and nobody handing us a roadmap. Every win was earned. Every lesson was paid for in sweat.
                </p>
                <p>
                  This isn't a guru brand. It's a real community for the ones who had to build their own table, teach themselves the game, 
                  and turn setbacks into strategy. If you've ever had to make a way out of no way, you're one of us.
                </p>
                <p>
                  We're here for the long haul—creating a <span className="text-[#247EFF] font-medium">legacy</span>, not just a payday. 
                  Everything we do is for those who came from nothing and refuse to let that define them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">What We Stand For</h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
              These aren't just words on a wall. They're the rules we live by, the code we built from scratch, 
              and the promises we make to those coming up behind us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Growth Only",
                description: "We don't fake wins or flex for clout. Everything here is built from scratch—no shortcuts, no overnight hype."
              },
              {
                title: "Put Each Other On",
                description: "No gatekeeping. If I learn, you learn. We celebrate wins, share game, and pull each other up. That's how we all get ahead."
              },
              {
                title: "Legacy Moves",
                description: "We're not here for the quick flip. Every decision is made with the next generation in mind. We're building for people who aren't even here yet."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 text-center transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-[#247EFF]">{value.title}</h3>
                <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
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

      <Footer />
    </div>
  );
};

export default About;
