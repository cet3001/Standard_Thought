
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ResourceCategoryProps {
  icon: ReactNode;
  title: string;
  description: string;
  topics: string[];
  ctaText: string;
  ctaLink: string;
}

const ResourceCategory = ({ icon, title, description, topics, ctaText, ctaLink }: ResourceCategoryProps) => {
  return (
    <Card className="border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-colors">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          {icon}
          <div>
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
        
        <Link 
          to={ctaLink}
          className="inline-flex items-center px-4 py-2 bg-[#247EFF] text-white rounded-lg hover:bg-[#0057FF] transition-colors font-semibold"
        >
          {ctaText}
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCategory;
