
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import ThemeTag from "@/components/ui/theme-tag";
import StoryBadge from "@/components/ui/story-badge";
import { Button } from "@/components/ui/button";

interface ResourceCategoryProps {
  icon: ReactNode;
  title: string;
  description: string;
  topics: string[];
  ctaText: string;
  ctaLink: string;
  tags?: string[];
  featured?: "popular" | "editors-pick";
  onTagClick?: (tag: string) => void;
}

const ResourceCategory = ({ 
  icon, 
  title, 
  description, 
  topics, 
  ctaText, 
  ctaLink, 
  tags = [],
  featured,
  onTagClick 
}: ResourceCategoryProps) => {
  return (
    <Card className="border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-colors relative mx-4 md:mx-0" role="article" aria-labelledby={`resource-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      {featured && (
        <div className="absolute top-3 md:top-4 right-3 md:right-4 z-10">
          <StoryBadge type={featured} />
        </div>
      )}
      
      <CardHeader className="p-4 md:p-6">
        <div className="flex items-start md:items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="text-[#247EFF] flex-shrink-0 mt-1 md:mt-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-[#0A0A0A] dark:text-brand-cream">
              <HeaderHierarchy level={2} className="mb-0 text-lg md:text-xl leading-tight" id={`resource-${title.replace(/\s+/g, '-').toLowerCase()}`}>
                {title}
              </HeaderHierarchy>
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm md:text-base leading-relaxed mb-4">
          {description}
        </CardDescription>
        
        {/* Enhanced Tag Display */}
        {tags.length > 0 && (
          <div className="mb-4" role="region" aria-label="Resource tags">
            <p className="text-xs font-medium text-[#0A0A0A]/60 dark:text-brand-cream/60 mb-2 uppercase tracking-wide">
              Quick Filter Tags:
            </p>
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2" role="list" aria-label="Resource tags">
              <div className="flex gap-2 min-w-max">
                {tags.map((tag, index) => (
                  <div key={index} role="listitem">
                    <ThemeTag 
                      tag={tag} 
                      onClick={() => onTagClick?.(tag)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-4 md:p-6 pt-0">
        <HeaderHierarchy level={3} className="mb-3 md:mb-4 text-base md:text-lg">
          What You'll Master:
        </HeaderHierarchy>
        
        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8" role="list">
          {topics.map((topic, topicIndex) => (
            <li key={topicIndex} className="flex items-start gap-3 text-[#0A0A0A]/80 dark:text-brand-cream/80 text-sm md:text-base" role="listitem">
              <div className="w-2 h-2 bg-[#247EFF] rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
              <span className="leading-relaxed">{topic}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-accent to-[#FFD700] hover:scale-105 text-black min-h-[44px] touch-manipulation font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl border-0" 
          aria-label={`${ctaText} for ${title}`}
        >
          <Link to={ctaLink}>
            {ctaText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCategory;
