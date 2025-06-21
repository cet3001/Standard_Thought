
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, TrendingUp, Bot, Users } from "lucide-react";
import HeaderHierarchy from "./content-structure/header-hierarchy";

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

  const featuredContent = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#247EFF]" aria-label="Investment growth icon" />,
      title: "Free Investing Guide",
      description: "Start building wealth with $1. Complete guide to micro-investing apps and urban investing strategies.",
      link: "/blog/free-investing-guide",
      cta: "Start Investing Today"
    },
    {
      icon: <Bot className="h-8 w-8 text-[#247EFF]" aria-label="AI technology icon" />,
      title: "AI Side Hustles Masterclass",
      description: "Master profitable AI side hustles earning $500-5000+ monthly with step-by-step frameworks.",
      link: "/blog/ai-side-hustles-guide",
      cta: "Launch AI Business"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#247EFF]" aria-label="Financial education book icon" />,
      title: "Hood Financial Literacy",
      description: "Street-smart financial education in real language that makes sense. No corporate jargon.",
      link: "/financial-education-guide",
      cta: "Master Money Basics"
    },
    {
      icon: <Users className="h-8 w-8 text-[#247EFF]" aria-label="Community builders icon" />,
      title: "Builder Success Stories",
      description: "Real stories from first-gen entrepreneurs building generational wealth from nothing.",
      link: "/blog",
      cta: "Read Success Stories"
    }
  ];

  return (
    <section 
      data-section="featured-content"
      className="py-16 bg-gradient-to-b from-white/50 to-brand-cream dark:from-brand-black/50 dark:to-brand-black"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <HeaderHierarchy level={2} className="mb-4">
              Ready to Build Wealth? Start Here
            </HeaderHierarchy>
            <p className="text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
              Dive deeper into proven strategies, real success stories, and actionable frameworks that turn hustle into generational wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredContent.map((content, index) => (
              <Card 
                key={index}
                className={`border-[#247EFF]/20 hover:border-[#247EFF]/40 bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    {content.icon}
                    <CardTitle className="text-[#0A0A0A] dark:text-brand-cream">
                      {content.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={content.link}>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white hover:from-[#0057FF] hover:to-[#247EFF] font-semibold py-3 rounded-2xl transition-all duration-300 hover:scale-105"
                    >
                      {content.cta}
                      <ArrowRight className="ml-2 h-4 w-4" aria-label="Arrow pointing to content" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/resources">
              <Button 
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-[#247EFF]/10 to-[#247EFF]/20 border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105"
              >
                Explore All Resources
                <ArrowRight className="ml-2 h-5 w-5" aria-label="Arrow pointing to all resources" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentSection;
