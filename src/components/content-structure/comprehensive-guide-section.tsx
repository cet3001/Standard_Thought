
import HeaderHierarchy from "./header-hierarchy";
import SnippetOptimizedContent from "../seo/snippet-optimized-content";
import { Card, CardContent } from "@/components/ui/card";

interface ComprehensiveGuideSectionProps {
  title: string;
  summary: string;
  whoThisIsFor: string;
  sections: {
    title: string;
    definition?: string;
    steps?: string[];
    bulletPoints?: string[];
    content?: string;
  }[];
  quickStartChecklist?: string[];
  className?: string;
}

const ComprehensiveGuideSection = ({ 
  title, 
  summary, 
  whoThisIsFor,
  sections, 
  quickStartChecklist,
  className = "" 
}: ComprehensiveGuideSectionProps) => {
  return (
    <div className={`comprehensive-guide-section ${className}`}>
      <HeaderHierarchy level={1} className="mb-8">
        {title}
      </HeaderHierarchy>

      {/* Summary paragraph */}
      <Card className="mb-8 bg-gradient-to-r from-[#247EFF]/10 to-blue-100/20 dark:from-[#247EFF]/20 dark:to-blue-900/20">
        <CardContent className="p-8">
          <HeaderHierarchy level={2} className="mb-4 text-[#247EFF]">
            What Makes This Guide Unique
          </HeaderHierarchy>
          <p className="text-lg leading-relaxed text-[#0A0A0A] dark:text-brand-cream mb-4">
            {summary}
          </p>
          
          {/* Who This Is For */}
          <div className="mt-6 p-4 bg-white/50 dark:bg-brand-black/30 rounded-lg">
            <p className="text-sm font-semibold text-[#247EFF] mb-2">Who This Is For:</p>
            <p className="text-[#0A0A0A] dark:text-brand-cream">{whoThisIsFor}</p>
          </div>
        </CardContent>
      </Card>

      {/* Structured sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <SnippetOptimizedContent
            key={index}
            title={section.title}
            definition={section.definition}
            steps={section.steps}
            bulletPoints={section.bulletPoints}
          />
        ))}
      </div>
    </div>
  );
};

export default ComprehensiveGuideSection;
