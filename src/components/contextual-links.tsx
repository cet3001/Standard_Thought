
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
      text: "proven business frameworks",
      href: "/blog",
      context: "entrepreneurship strategies",
      lsiKeywords: ["startup methodologies", "business building", "entrepreneurial systems"]
    },
    {
      text: "mindset transformation tools",
      href: "/about",
      context: "personal development",
      lsiKeywords: ["growth mindset", "mental resilience", "success psychology"]
    },
    {
      text: "strategic success playbooks",
      href: "/sales",
      context: "business growth",
      lsiKeywords: ["revenue optimization", "scaling strategies", "market expansion"]
    }
  ],
  blog: [
    {
      text: "foundational mindset principles",
      href: "/about",
      context: "personal development foundation",
      lsiKeywords: ["core beliefs", "mental frameworks", "success principles"]
    },
    {
      text: "revenue generation strategies",
      href: "/sales",
      context: "monetization tactics",
      lsiKeywords: ["income streams", "profit maximization", "business models"]
    },
    {
      text: "community-driven growth",
      href: "/",
      context: "network building",
      lsiKeywords: ["peer support", "collaborative success", "mentorship"]
    }
  ],
  manifesto: [
    {
      text: "real-world success stories",
      href: "/blog",
      context: "practical examples",
      lsiKeywords: ["case studies", "implementation examples", "proven results"]
    },
    {
      text: "actionable business strategies",
      href: "/sales",
      context: "implementation guides",
      lsiKeywords: ["tactical approaches", "execution plans", "results-driven methods"]
    }
  ],
  newsletter: [
    {
      text: "comprehensive business education",
      href: "/about",
      context: "learning foundation",
      lsiKeywords: ["entrepreneurial knowledge", "skill development", "expertise building"]
    },
    {
      text: "exclusive success insights",
      href: "/blog",
      context: "premium content",
      lsiKeywords: ["insider knowledge", "advanced strategies", "expert perspectives"]
    }
  ],
  footer: [
    {
      text: "wealth building fundamentals",
      href: "/about",
      context: "financial education",
      lsiKeywords: ["asset creation", "investment strategies", "financial literacy"]
    },
    {
      text: "entrepreneurial journey documentation",
      href: "/blog",
      context: "business chronicles",
      lsiKeywords: ["startup experiences", "business evolution", "growth documentation"]
    },
    {
      text: "revenue optimization techniques",
      href: "/sales",
      context: "profit enhancement",
      lsiKeywords: ["income maximization", "monetization strategies", "financial growth"]
    }
  ]
};

const ContextualLinks = ({ context, className = "" }: ContextualLinksProps) => {
  const links = contextualLinks[context] || [];

  if (links.length === 0) return null;

  return (
    <div className={`contextual-links ${className}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all duration-300"
          title={`Learn more about ${link.context}`}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default ContextualLinks;
