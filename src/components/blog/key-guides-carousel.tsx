
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, TrendingUp, Zap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Guide {
  title: string;
  description: string;
  url: string;
  badge?: "Editor's Pick" | "Most Popular" | "Trending";
  badgeColor: string;
  icon: string;
  category: string;
}

const KeyGuidesCarousel = () => {
  const keyGuides: Guide[] = [
    {
      title: "AI Side Hustle Mastery",
      description: "Turn AI tools into consistent income streams with proven frameworks.",
      url: "/ai-side-hustles-guide",
      badge: "Editor's Pick",
      badgeColor: "bg-[#247EFF] text-white",
      icon: "🤖",
      category: "Strategic Hustle"
    },
    {
      title: "Credit Building Blueprint",
      description: "Build credit from scratch with actionable strategies that actually work.",
      url: "/blog?category=Credit Building",
      badge: "Most Popular",
      badgeColor: "bg-green-600 text-white",
      icon: "📈",
      category: "Legacy Building"
    },
    {
      title: "Bootstrapping Playbook",
      description: "Start and scale a business with zero external funding.",
      url: "/blog?category=Bootstrapping",
      badge: "Trending",
      badgeColor: "bg-yellow-600 text-white",
      icon: "🚀",
      category: "Strategic Hustle"
    },
    {
      title: "Free Investing Guide",
      description: "Investment strategies that don't require a trust fund to start.",
      url: "/free-investing-guide",
      badge: "Editor's Pick",
      badgeColor: "bg-[#247EFF] text-white",
      icon: "💰",
      category: "Legacy Building"
    },
    {
      title: "Mindset Mastery Framework",
      description: "Reprogram your money mindset for generational wealth building.",
      url: "/blog?category=Mindset",
      badge: "Most Popular",
      badgeColor: "bg-green-600 text-white",
      icon: "🧠",
      category: "Mindset Mastery"
    },
    {
      title: "Print-on-Demand Empire",
      description: "Scale a POD business from side hustle to full-time income.",
      url: "/blog?category=Print-on-Demand",
      badgeColor: "bg-purple-600 text-white",
      icon: "🎨",
      category: "Strategic Hustle"
    },
    {
      title: "Wealth Building Strategies",
      description: "Systematic approaches to building lasting wealth from nothing.",
      url: "/wealth-building-strategies",
      badge: "Trending",
      badgeColor: "bg-yellow-600 text-white",
      icon: "👑",
      category: "Legacy Building"
    },
    {
      title: "First-Gen Success Stories",
      description: "Real journeys from broke to building generational wealth.",
      url: "/blog?category=First-Gen Success",
      badgeColor: "bg-orange-600 text-white",
      icon: "⭐",
      category: "Mindset Mastery"
    }
  ];

  const getBadgeIcon = (badge?: string) => {
    switch (badge) {
      case "Editor's Pick":
        return <Star className="h-3 w-3" />;
      case "Most Popular":
        return <TrendingUp className="h-3 w-3" />;
      case "Trending":
        return <Zap className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#247EFF]/5 to-blue-100/10 dark:from-[#247EFF]/10 dark:to-blue-900/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
            Essential Action Guides
          </h2>
          <p className="text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
            Curated resources to accelerate your financial education journey. Each guide is packed with actionable strategies you can implement today.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-brand-cream">
                Browse Key Resources
              </h3>
              <div className="hidden sm:flex items-center gap-2 text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                <span>Swipe or use arrows →</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="relative static translate-y-0 border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white" />
              <CarouselNext className="relative static translate-y-0 border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white" />
            </div>
          </div>

          <CarouselContent className="-ml-2 md:-ml-4">
            {keyGuides.map((guide, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="h-full bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Badge and Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{guide.icon}</div>
                      {guide.badge && (
                        <div className={`${guide.badgeColor} px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                          {getBadgeIcon(guide.badge)}
                          {guide.badge}
                        </div>
                      )}
                    </div>

                    {/* Category */}
                    <div className="text-xs font-medium text-[#247EFF] mb-2 uppercase tracking-wide">
                      {guide.category}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold text-[#0A0A0A] dark:text-brand-cream mb-3 group-hover:text-[#247EFF] transition-colors">
                      {guide.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-4 flex-grow leading-relaxed">
                      {guide.description}
                    </p>

                    {/* CTA Button */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white rounded-2xl transition-all duration-300"
                    >
                      <a href={guide.url} className="font-medium">
                        Explore Guide →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Quick Stats */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-[#247EFF]" />
              <span>Editor's Picks: Hand-selected for maximum impact</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span>Most Popular: Community favorites</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-600" />
              <span>Trending: What's hot right now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyGuidesCarousel;
