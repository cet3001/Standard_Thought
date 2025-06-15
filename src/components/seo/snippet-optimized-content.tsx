
import HeaderHierarchy from "../content-structure/header-hierarchy";
import { Card, CardContent } from "@/components/ui/card";

interface SnippetOptimizedContentProps {
  title: string;
  definition?: string;
  steps?: string[];
  bulletPoints?: string[];
  summary?: string;
  className?: string;
}

const SnippetOptimizedContent = ({ 
  title, 
  definition, 
  steps, 
  bulletPoints, 
  summary,
  className = "" 
}: SnippetOptimizedContentProps) => {
  return (
    <div className={`snippet-optimized-content ${className}`}>
      <HeaderHierarchy level={2} className="mb-6">
        {title}
      </HeaderHierarchy>

      {definition && (
        <Card className="mb-6 border-l-4 border-[#247EFF] bg-blue-50/50 dark:bg-blue-900/20">
          <CardContent className="p-6">
            <HeaderHierarchy level={3} className="mb-3 text-[#247EFF]">
              Definition
            </HeaderHierarchy>
            <p className="text-lg font-medium text-[#0A0A0A] dark:text-brand-cream">
              {definition}
            </p>
          </CardContent>
        </Card>
      )}

      {summary && (
        <Card className="mb-6 bg-green-50/50 dark:bg-green-900/20 border-l-4 border-green-500">
          <CardContent className="p-6">
            <HeaderHierarchy level={3} className="mb-3 text-green-700 dark:text-green-400">
              Quick Summary
            </HeaderHierarchy>
            <p className="text-base text-[#0A0A0A] dark:text-brand-cream">
              {summary}
            </p>
          </CardContent>
        </Card>
      )}

      {steps && steps.length > 0 && (
        <div className="mb-6">
          <HeaderHierarchy level={3} className="mb-4">
            Step-by-Step Guide
          </HeaderHierarchy>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#247EFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-[#0A0A0A] dark:text-brand-cream pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {bulletPoints && bulletPoints.length > 0 && (
        <div className="mb-6">
          <HeaderHierarchy level={3} className="mb-4">
            Key Points
          </HeaderHierarchy>
          <ul className="space-y-3">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-[#247EFF] rounded-full mt-2"></span>
                <p className="text-[#0A0A0A] dark:text-brand-cream">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SnippetOptimizedContent;
