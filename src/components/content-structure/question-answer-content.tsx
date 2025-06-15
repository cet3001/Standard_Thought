
import HeaderHierarchy from "./header-hierarchy";
import { Badge } from "@/components/ui/badge";

interface QuestionAnswerProps {
  question: string;
  answer: string;
  tags?: string[];
  actionText?: string;
  actionLink?: string;
  className?: string;
}

const QuestionAnswerContent = ({ 
  question, 
  answer, 
  tags = [], 
  actionText, 
  actionLink,
  className = "" 
}: QuestionAnswerProps) => {
  return (
    <div className={`question-answer-content bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-2xl p-8 ${className}`}>
      <HeaderHierarchy level={2} className="mb-4 text-[#247EFF]">
        {question}
      </HeaderHierarchy>
      
      <div className="prose prose-lg max-w-none text-[#0A0A0A] dark:text-brand-cream mb-6">
        <div className="whitespace-pre-line leading-relaxed">{answer}</div>
      </div>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-[#247EFF]/20 text-[#247EFF]">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      
      {actionText && actionLink && (
        <a 
          href={actionLink}
          className="inline-flex items-center px-4 py-2 bg-[#247EFF] text-white rounded-lg hover:bg-[#0057FF] transition-colors"
        >
          {actionText}
        </a>
      )}
    </div>
  );
};

export default QuestionAnswerContent;
