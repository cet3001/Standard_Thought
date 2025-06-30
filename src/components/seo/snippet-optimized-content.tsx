
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
        <Card className="mb-6 border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-900/20">
          <CardContent className="p-6">
            <HeaderHierarchy 
              level={3} 
              className="mb-3"
              style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}
            >
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
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full flex items-center justify-center font-bold text-sm">
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
                <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-2"></span>
                <p className="text-[#0A0A0A] dark:text-brand-cream">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

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

export default SnippetOptimizedContent;
