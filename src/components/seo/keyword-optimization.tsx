
interface KeywordOptimizationProps {
  primaryKeyword: string;
  context: "financial-literacy" | "investing" | "entrepreneurship" | "ai-hustles" | "credit-building";
  className?: string;
}

const keywordClusters = {
  "financial-literacy": {
    primary: ["hood financial literacy", "urban financial education", "street smart money moves"],
    semantic: ["financial empowerment", "money management skills", "personal finance basics", "wealth mindset development"],
    longtail: ["how to build financial literacy in urban communities", "street smart guide to managing money", "hood money management strategies"]
  },
  "investing": {
    primary: ["urban investing strategies", "hood investment tips", "street smart investing"],
    semantic: ["portfolio building", "investment fundamentals", "wealth accumulation", "asset diversification"],
    longtail: ["best investing strategies for urban communities", "how to start investing with little money", "investment tips for first generation wealth builders"]
  },
  "entrepreneurship": {
    primary: ["urban entrepreneurship", "hood business strategies", "street smart business building"],
    semantic: ["startup methodologies", "business development", "entrepreneurial mindset", "revenue generation"],
    longtail: ["how to start a business in urban areas", "entrepreneurship for first generation builders", "urban business success strategies"]
  },
  "ai-hustles": {
    primary: ["AI side hustles", "artificial intelligence income streams", "AI-powered business ideas"],
    semantic: ["automation opportunities", "digital income generation", "tech-enabled hustles", "AI entrepreneurship"],
    longtail: ["how to make money with AI tools", "best AI side hustles for beginners", "AI business opportunities for urban entrepreneurs"]
  },
  "credit-building": {
    primary: ["credit building strategies", "hood credit repair", "urban credit improvement"],
    semantic: ["credit score optimization", "financial rehabilitation", "credit worthiness development", "debt management"],
    longtail: ["how to build credit from scratch", "credit building tips for young adults", "urban guide to improving credit score"]
  }
};

const KeywordOptimization = ({ primaryKeyword, context, className = "" }: KeywordOptimizationProps) => {
  const cluster = keywordClusters[context];
  
  return (
    <div className={`keyword-optimization ${className}`}>
      {/* Hidden semantic content for SEO */}
      <span className="sr-only">
        {cluster.primary.join(", ")}, {cluster.semantic.slice(0, 4).join(", ")}, 
        generational wealth building for beginners, {primaryKeyword}
      </span>
    </div>
  );
};

export default KeywordOptimization;
