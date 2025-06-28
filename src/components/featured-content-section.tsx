
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, TrendingUp, Bot, Users } from "lucide-react";
import HeaderHierarchy from "./content-structure/header-hierarchy";
import { trackButtonClick, trackResourceClick } from "@/lib/analytics-utils";

const FeaturedContentSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-section="featured-content"]');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleResourceClick = (title: string, link: string) => {
    trackResourceClick(title, 'featured_content_section');
  };

  const handleExploreAllClick = () => {
    trackButtonClick('Explore All Resources', 'featured_content_section', 'navigate_to_resources');
  };

  const featuredContent = [
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="Investment growth icon" />,
      title: "Free Investing Guide",
      description: "Start building wealth with $1. Complete guide to micro-investing apps and urban investing strategies.",
      link: "/start-investing-guide",
      cta: "Start Investing Today"
    },
    {
      icon: <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="AI technology icon" />,
      title: "AI Side Hustles Masterclass",
      description: "Master profitable AI side hustles earning $500-5000+ monthly with step-by-step frameworks.",
      link: "/blog/ai-side-hustles-guide",
      cta: "Launch AI Business"
    },
    {
      icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="Financial education book icon" />,
      title: "Hood Financial Literacy",
      description: "Street-smart financial education in real language that makes sense. No corporate jargon.",
      link: "/financial-education-guide",
      cta: "Master Money Basics"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="Community builders icon" />,
      title: "Builder Success Stories",
      description: (
        <>
          <span 
            className="relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s ease-in-out infinite'
            }}
          >
            Real wins
            {/* Pearlescent overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
              style={{
                background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                backgroundSize: '200% 100%',
                mixBlendMode: 'overlay'
              }}
            />
          </span> from first-gen entrepreneurs building generational wealth from nothing.
        </>
      ),
      link: "/blog",
      cta: "Read Success Stories"
    }
  ];

  return (
    <section 
      data-section="featured-content"
      className="py-12 sm:py-16 bg-gradient-to-b from-white/50 to-brand-cream dark:from-brand-black/50 dark:to-brand-black"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <HeaderHierarchy level={2} className="mb-4 text-2xl sm:text-3xl lg:text-4xl">
              Ready to Build Wealth? Start Here
            </HeaderHierarchy>
            <p className="text-base sm:text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto px-4">
              Dive deeper into proven strategies, real success stories, and actionable frameworks that turn hustle into generational wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {featuredContent.map((content, index) => (
              <Card 
                key={index}
                className={`border-[#247EFF]/20 hover:border-[#247EFF]/40 bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-2">
                    {content.icon}
                    <CardTitle className="text-[#0A0A0A] dark:text-brand-cream text-lg sm:text-xl">
                      {content.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm sm:text-base">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <Link 
                    to={content.link}
                    onClick={() => handleResourceClick(content.title, content.link)}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white hover:from-[#0057FF] hover:to-[#247EFF] font-semibold py-2 sm:py-3 rounded-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                      {content.cta}
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" aria-label="Arrow pointing to content" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/resources" onClick={handleExploreAllClick}>
              <Button 
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-[#247EFF]/10 to-[#247EFF]/20 border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-3xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Explore All Resources
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-label="Arrow pointing to all resources" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentSection;
