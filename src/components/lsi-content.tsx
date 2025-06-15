
interface LSIContentProps {
  primaryKeyword: string;
  context: "entrepreneurship" | "wealth-building" | "mindset" | "business-strategy";
  className?: string;
}

const lsiKeywordGroups = {
  entrepreneurship: [
    "startup ecosystem", "business innovation", "venture creation", "entrepreneurial mindset",
    "market opportunity", "business model canvas", "startup methodology", "venture capital",
    "business incubation", "entrepreneurial journey", "startup success factors", "business scaling"
  ],
  "wealth-building": [
    "financial independence", "asset accumulation", "investment portfolio", "passive income streams",
    "wealth creation strategies", "financial literacy", "investment mindset", "capital appreciation",
    "diversification strategies", "long-term wealth", "financial planning", "economic empowerment"
  ],
  mindset: [
    "growth mindset", "success psychology", "mental resilience", "cognitive frameworks",
    "behavioral patterns", "success habits", "mental models", "psychological strategies",
    "performance mindset", "achievement orientation", "success principles", "mental conditioning"
  ],
  "business-strategy": [
    "strategic planning", "competitive advantage", "market positioning", "business development",
    "strategic execution", "operational excellence", "business optimization", "market analysis",
    "strategic thinking", "business intelligence", "strategic implementation", "growth strategies"
  ]
};

const LSIContent = ({ primaryKeyword, context, className = "" }: LSIContentProps) => {
  const lsiKeywords = lsiKeywordGroups[context] || [];
  
  return (
    <div className={`lsi-content ${className}`}>
      <span className="sr-only">
        Related concepts: {lsiKeywords.slice(0, 8).join(", ")} and {primaryKeyword}
      </span>
    </div>
  );
};

export default LSIContent;
