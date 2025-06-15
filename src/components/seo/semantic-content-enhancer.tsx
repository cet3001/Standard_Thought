
import KeywordOptimization from "./keyword-optimization";
import VoiceSearchOptimization from "./voice-search-optimization";

interface SemanticContentEnhancerProps {
  primaryKeyword: string;
  context: "financial-literacy" | "investing" | "entrepreneurship" | "ai-hustles" | "credit-building";
  voiceSearchTopic: "wealth-building" | "investing" | "credit" | "ai-hustles" | "entrepreneurship";
  className?: string;
}

const semanticKeywordMap = {
  "financial-literacy": {
    related: ["hood financial literacy", "urban money management", "street smart financial planning"],
    entities: ["financial empowerment", "economic mobility", "wealth mindset", "financial education"],
    contextual: ["generational wealth building for beginners", "first-generation wealth creation", "urban financial strategies"]
  },
  "investing": {
    related: ["urban investing strategies", "hood investment guidance", "street smart portfolio building"],
    entities: ["asset accumulation", "investment portfolio", "wealth diversification", "financial growth"],
    contextual: ["beginner investing strategies", "urban wealth building", "community investment approaches"]
  },
  "entrepreneurship": {
    related: ["urban entrepreneurship", "hood business development", "street smart business strategies"],
    entities: ["startup creation", "business innovation", "entrepreneurial ecosystem", "venture building"],
    contextual: ["urban business opportunities", "community entrepreneurship", "grassroots business development"]
  },
  "ai-hustles": {
    related: ["AI side hustles", "artificial intelligence income", "tech-enabled business opportunities"],
    entities: ["automation income", "digital entrepreneurship", "AI-powered ventures", "technology monetization"],
    contextual: ["AI business opportunities for urban entrepreneurs", "tech side hustles", "digital income strategies"]
  },
  "credit-building": {
    related: ["credit building strategies", "urban credit improvement", "hood credit repair methods"],
    entities: ["credit optimization", "financial rehabilitation", "creditworthiness development", "debt management"],
    contextual: ["credit building for young adults", "urban credit strategies", "beginner credit improvement"]
  }
};

const SemanticContentEnhancer = ({ 
  primaryKeyword, 
  context, 
  voiceSearchTopic, 
  className = "" 
}: SemanticContentEnhancerProps) => {
  const semanticData = semanticKeywordMap[context];

  return (
    <div className={`semantic-content-enhancer ${className}`}>
      <KeywordOptimization 
        primaryKeyword={primaryKeyword}
        context={context}
      />
      
      <VoiceSearchOptimization 
        topic={voiceSearchTopic}
      />

      {/* Semantic keyword clustering for enhanced relevance */}
      <div className="sr-only" itemScope itemType="https://schema.org/Article">
        <meta itemProp="about" content={semanticData.related.join(", ")} />
        <meta itemProp="keywords" content={[
          ...semanticData.related,
          ...semanticData.entities,
          ...semanticData.contextual,
          "generational wealth building for beginners"
        ].join(", ")} />
        
        {/* Entity recognition for better semantic understanding */}
        <div itemProp="mainEntity" itemScope itemType="https://schema.org/Thing">
          <meta itemProp="name" content={primaryKeyword} />
          <meta itemProp="description" content={`Comprehensive guide to ${primaryKeyword} and ${context.replace('-', ' ')}`} />
        </div>
      </div>
    </div>
  );
};

export default SemanticContentEnhancer;
