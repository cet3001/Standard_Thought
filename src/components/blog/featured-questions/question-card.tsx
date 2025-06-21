
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { CheckCircle, Download, ArrowRight, DollarSign, Clock, TrendingUp } from "lucide-react";
import { FeaturedQuestion } from "./question-data";

interface QuestionCardProps {
  question: FeaturedQuestion;
  index: number;
}

const QuestionCard = ({ question, index }: QuestionCardProps) => {
  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStartupCostIcon = (cost: string) => {
    if (cost.includes("$0")) return <CheckCircle className="h-4 w-4 text-green-600" />;
    if (cost.includes("$1K+")) return <TrendingUp className="h-4 w-4 text-blue-600" />;
    return <DollarSign className="h-4 w-4 text-yellow-600" />;
  };

  return (
    <Card className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-2xl overflow-hidden">
      <CardContent className="p-8">
        {/* Question Header with Tags */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <HeaderHierarchy level={3} className="text-[#247EFF] flex-1">
            {question.question}
          </HeaderHierarchy>
          <div className="flex flex-wrap gap-2">
            <Badge className={`${getSkillLevelColor(question.skillLevel)} flex items-center gap-1`}>
              <Clock className="h-3 w-3" />
              {question.skillLevel}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              {getStartupCostIcon(question.startupCost)}
              {question.startupCost}
            </Badge>
          </div>
        </div>
        
        {/* Answer Content */}
        <div className="prose prose-lg max-w-none text-[#0A0A0A] dark:text-brand-cream mb-8">
          <div className="whitespace-pre-line leading-relaxed">{question.answer}</div>
        </div>
        
        {/* Three-Column Layout for Action Items */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          
          {/* Quick Start Checklist */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <Download className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold text-green-800 dark:text-green-400">Quick Start Checklist</h4>
            </div>
            <ul className="space-y-2">
              {question.quickStartChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-[#0A0A0A]/80 dark:text-brand-cream/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Real Stories */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-[#247EFF]" />
              <h4 className="font-semibold text-[#247EFF]">Real Results</h4>
            </div>
            <div className="space-y-3">
              {question.realStories.map((story, storyIdx) => (
                <p key={storyIdx} className="text-sm text-[#0A0A0A]/80 dark:text-brand-cream/80 italic leading-relaxed border-l-2 border-[#247EFF]/20 pl-3">
                  "{story}"
                </p>
              ))}
            </div>
          </div>
          
          {/* Next Moves */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight className="h-5 w-5 text-yellow-600" />
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Next Moves</h4>
            </div>
            <p className="text-sm text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed">
              {question.nextMoves}
            </p>
          </div>
        </div>
        
        {/* Tags only - removed action buttons */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-[#247EFF]/20">
          {question.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="outline" className="border-[#247EFF]/20 text-[#247EFF]">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
