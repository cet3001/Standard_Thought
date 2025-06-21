
import { Link } from "react-router-dom";

interface ContextualLink {
  text: string;
  href: string;
  context: string;
  lsiKeywords?: string[];
}

interface ContextualLinksProps {
  context: "hero" | "blog" | "manifesto" | "newsletter" | "footer";
  className?: string;
}

const contextualLinks: Record<string, ContextualLink[]> = {
  hero: [
    {
      text: "proven wealth building frameworks",
      href: "/blog",
      context: "entrepreneurship strategies",
      lsiKeywords: ["startup methodologies", "business building", "entrepreneurial systems"]
    },
    {
      text: "financial literacy tools",
      href: "/about",
      context: "financial education",
      lsiKeywords: ["street smart money moves", "urban finance", "generational wealth building"]
    },
    {
      text: "AI side hustle strategies",
      href: "/blog/ai-side-hustles-guide",
      context: "income generation",
      lsiKeywords: ["artificial intelligence income", "automated revenue", "tech hustles"]
    }
  ],
  blog: [
    {
      text: "foundational mindset tools",
      href: "/about",
      context: "wealth building psychology",
      lsiKeywords: ["success mindset", "financial mindset", "entrepreneur psychology"]
    },
    {
      text: "credit building strategies",
      href: "/blog",
      context: "financial rehabilitation",
      lsiKeywords: ["credit repair", "credit score improvement", "financial recovery"]
    },
    {
      text: "urban investing guide",
      href: "/blog/free-investing-guide",
      context: "investment education",
      lsiKeywords: ["street smart investing", "urban portfolio building", "beginner investing"]
    }
  ],
  manifesto: [
    {
      text: "real wealth building stories",
      href: "/blog",
      context: "success examples",
      lsiKeywords: ["entrepreneur journeys", "wealth creation stories", "business success cases"]
    },
    {
      text: "actionable financial strategies",
      href: "/resources",
      context: "implementation guides",
      lsiKeywords: ["money management tactics", "wealth building steps", "financial action plans"]
    }
  ],
  newsletter: [
    {
      text: "comprehensive financial education",
      href: "/about",
      context: "learning foundation",
      lsiKeywords: ["financial literacy", "money management education", "wealth building knowledge"]
    },
    {
      text: "exclusive wealth insights",
      href: "/blog",
      context: "premium financial content",
      lsiKeywords: ["insider financial knowledge", "advanced money strategies", "wealth building secrets"]
    }
  ],
  footer: [
    {
      text: "generational wealth fundamentals",
      href: "/about",
      context: "long-term financial planning",
      lsiKeywords: ["legacy building", "multi-generational finance", "family wealth creation"]
    },
    {
      text: "urban entrepreneur documentation",
      href: "/blog",
      context: "business chronicles",
      lsiKeywords: ["startup experiences", "business evolution", "entrepreneur stories"]
    },
    {
      text: "income optimization techniques",
      href: "/resources",
      context: "revenue enhancement",
      lsiKeywords: ["income maximization", "revenue strategies", "profit building"]
    }
  ]
};

const ContextualLinks = ({ context, className = "" }: ContextualLinksProps) => {
  const links = contextualLinks[context] || [];

  if (links.length === 0) return null;

  return (
    <span className={`contextual-links ${className}`}>
      {links.map((link, index) => (
        <span key={index}>
          <Link
            to={link.href}
            className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all duration-300 touch-manipulation font-medium"
            title={`Learn more about ${link.context} - ${link.lsiKeywords?.slice(0, 2).join(', ')}`}
          >
            {link.text}
          </Link>
          {index < links.length - 1 && <span>, </span>}
        </span>
      ))}
    </span>
  );
};

export default ContextualLinks;
