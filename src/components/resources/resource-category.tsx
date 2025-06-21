
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
    <Card className="border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-colors relative">
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <StoryBadge type={featured} />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          {icon}
          <div className="flex-1">
            <CardTitle className="text-[#0A0A0A] dark:text-brand-cream">
              <HeaderHierarchy level={2} className="mb-0">
                {title}
              </HeaderHierarchy>
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-base">
          {description}
        </CardDescription>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <ThemeTag 
                key={index} 
                tag={tag} 
                onClick={() => onTagClick?.(tag)}
              />
            ))}
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <HeaderHierarchy level={3} className="mb-4">
          What You'll Master:
        </HeaderHierarchy>
        
        <ul className="space-y-3 mb-6">
          {topics.map((topic, topicIndex) => (
            <li key={topicIndex} className="flex items-start gap-3 text-[#0A0A0A]/80 dark:text-brand-cream/80">
              <div className="w-2 h-2 bg-[#247EFF] rounded-full mt-2 flex-shrink-0"></div>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
        
        <Button asChild className="w-full bg-[#247EFF] hover:bg-[#0057FF] text-white">
          <Link to={ctaLink}>
            {ctaText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCategory;
