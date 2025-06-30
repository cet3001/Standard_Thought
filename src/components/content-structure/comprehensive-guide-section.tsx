
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
      <Card className="mb-8 bg-gradient-to-r from-yellow-100/20 to-yellow-50/10 dark:from-yellow-900/20 dark:to-yellow-800/20 border border-yellow-200/30">
        <CardContent className="p-8">
          <HeaderHierarchy level={2} className="mb-4" style={{
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}>
            What Makes This Guide Unique
          </HeaderHierarchy>
          <p className="text-lg leading-relaxed text-[#0A0A0A] dark:text-brand-cream mb-4">
            {summary}
          </p>
          
          {/* Who This Is For */}
          <div className="mt-6 p-4 bg-white/50 dark:bg-brand-black/30 rounded-lg">
            <p className="text-sm font-semibold mb-2" style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              animation: 'pearlescent 3s ease-in-out infinite'
            }}>Who This Is For:</p>
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

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default ComprehensiveGuideSection;
