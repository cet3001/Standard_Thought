
import QuestionAnswerContent from "../content-structure/question-answer-content";
import SnippetOptimizedContent from "../seo/snippet-optimized-content";
import HeaderHierarchy from "../content-structure/header-hierarchy";
import QuestionCard from "./featured-questions/question-card";
import RotationControls from "./featured-questions/rotation-controls";
import { questionPool } from "./featured-questions/question-data";
import { getFeaturedQuestions } from "./featured-questions/utils";
import { RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

const BlogFeaturedQuestions = () => {
  const [currentRotation, setCurrentRotation] = useState(0);

  // Auto-rotate questions every 30 seconds for demo, or implement based on time/analytics
  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setCurrentRotation((prev) => (prev + 1) % Math.min(3, questionPool.length));
    }, 30000); // 30 seconds for demo, adjust as needed

    return () => clearInterval(rotationTimer);
  }, []);

  // Get current set of featured questions (show 3 at a time)
  const featuredQuestions = getFeaturedQuestions(currentRotation);

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <HeaderHierarchy level={2} className="text-center">
          Real Questions. Real Answers. Real Action.
        </HeaderHierarchy>
        
        {/* Rotation Indicator */}
        <div className="flex items-center gap-2 text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
          <RotateCcw className="h-4 w-4" />
          <span>Fresh content rotates automatically</span>
        </div>
      </div>
      
      <p className="text-center text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-12 max-w-2xl mx-auto">
        These aren't generic financial advice questions—they're the exact challenges our community faces, 
        with step-by-step blueprints you can start using today.
      </p>
      
      {/* Strategic Decision Framework - Unique to blog */}
      <SnippetOptimizedContent
        title="Strategic Side Hustle Scaling Framework"
        definition="A systematic approach to evaluating when and how to scale a side business from supplemental income to primary revenue source."
        summary="Scale your side hustle only when you have predictable revenue, working systems, and market demand that exceeds your current capacity."
        steps={[
          "Track revenue patterns for 3+ months to establish predictability",
          "Document your processes so others can replicate your work",
          "Test systems by stepping away for 1 week without income dropping",
          "Survey customers to confirm demand exceeds your availability",
          "Calculate true profit margins including your time at market rate",
          "Create hiring/training systems before you're overwhelmed",
          "Set scaling milestones with specific revenue and time targets",
          "Plan your transition timeline from side hustle to main income"
        ]}
        bulletPoints={[
          "Predictable revenue: Can forecast monthly income within 20% accuracy",
          "Systems independence: Business runs 1+ weeks without direct involvement",
          "Excess demand: Regular waiting list or turning down profitable work",
          "Scalable processes: Clear documentation for training others",
          "Healthy margins: Profit increases (not decreases) with volume",
          "Market validation: Customers actively refer others without incentives"
        ]}
        className="mb-12"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        {featuredQuestions.map((qa, index) => (
          <QuestionCard
            key={`${currentRotation}-${index}`}
            question={qa}
            index={index}
          />
        ))}
      </div>
      
      {/* Rotation Controls */}
      <RotationControls
        currentRotation={currentRotation}
        setCurrentRotation={setCurrentRotation}
        featuredQuestions={featuredQuestions}
      />
    </div>
  );
};

export default BlogFeaturedQuestions;
