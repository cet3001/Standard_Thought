
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import SemanticContentEnhancer from "../seo/semantic-content-enhancer";
import FeaturedSnippets from "../seo/featured-snippets";
import HeaderHierarchy from "../content-structure/header-hierarchy";

interface BlogPostContentProps {
  content: string;
  imageUrl?: string | null;
  title: string;
  tags: string[];
}

const BlogPostContent = ({ content, imageUrl, title, tags }: BlogPostContentProps) => {
  // Generate SEO-rich ALT text for the featured image
  const imageAlt = imageUrl 
    ? `${title} - Featured image for this Standardthought article on building legacy from nothing`
    : '';

  // Determine semantic context based on content and tags
  const getSemanticContext = () => {
    const contentLower = content.toLowerCase();
    const tagsLower = tags.join(' ').toLowerCase();
    
    if (contentLower.includes('invest') || tagsLower.includes('invest')) {
      return { context: 'investing' as const, voiceSearch: 'investing' as const, snippets: 'investing' as const };
    }
    if (contentLower.includes('credit') || tagsLower.includes('credit')) {
      return { context: 'credit-building' as const, voiceSearch: 'credit' as const, snippets: 'credit' as const };
    }
    if (contentLower.includes('ai') || tagsLower.includes('ai')) {
      return { context: 'ai-hustles' as const, voiceSearch: 'ai-hustles' as const, snippets: 'ai-hustles' as const };
    }
    if (contentLower.includes('financial') || tagsLower.includes('financial')) {
      return { context: 'financial-literacy' as const, voiceSearch: 'wealth-building' as const, snippets: 'wealth-building' as const };
    }
    return { context: 'entrepreneurship' as const, voiceSearch: 'entrepreneurship' as const, snippets: 'entrepreneurship' as const };
  };

  const semanticData = getSemanticContext();

  // Process content to add proper header hierarchy
  const formatContentWithHeaders = (content: string) => {
    // This is a simple implementation - in a real app you might want more sophisticated parsing
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.trim().startsWith('#')) {
        const level = (line.match(/^#+/) || [''])[0].length;
        const text = line.replace(/^#+\s*/, '');
        
        if (level >= 1 && level <= 6) {
          return (
            <HeaderHierarchy 
              key={index} 
              level={Math.min(level, 6) as 1 | 2 | 3 | 4 | 5 | 6}
              className="mt-8 mb-4"
            >
              {text}
            </HeaderHierarchy>
          );
        }
      }
      return line ? <p key={index} className="mb-4">{line}</p> : <br key={index} />;
    });
  };

  return (
    <>
      {/* Enhanced SEO with targeted keywords */}
      <SemanticContentEnhancer
        primaryKeyword={`${title} - urban entrepreneurship strategies`}
        context={semanticData.context}
        voiceSearchTopic={semanticData.voiceSearch}
      />

      {/* Featured Snippets for better search visibility */}
      <FeaturedSnippets topic={semanticData.snippets} />

      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-12">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full max-h-[600px] object-contain rounded-3xl bg-gray-50 dark:bg-gray-900"
            loading="lazy"
          />
        </div>
      )}

      {/* Article Content with Proper Header Hierarchy */}
      <div className="prose prose-lg max-w-none text-[#0A0A0A] dark:text-brand-cream">
        <div className="whitespace-pre-wrap leading-relaxed text-lg">
          {formatContentWithHeaders(content)}
        </div>
        
        {/* Internal Links Section - Building Site Authority */}
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border-l-4 border-[#247EFF]">
          <HeaderHierarchy level={3} className="mb-4">
            Continue Your Journey
          </HeaderHierarchy>
          <div className="space-y-2">
            <p className="text-sm text-[#0A0A0A]/80 dark:text-brand-cream/80">
              Ready to master <strong>hood financial literacy</strong> and <strong>urban investing strategies</strong>? Check out our <Link to="/blog" className="text-[#247EFF] hover:underline font-medium">complete story collection</Link> and <Link to="/resources" className="text-[#247EFF] hover:underline font-medium">comprehensive resource hub</Link> for more proven frameworks.
            </p>
            <p className="text-sm text-[#0A0A0A]/80 dark:text-brand-cream/80">
              Get started with our <Link to="/#newsletter" className="text-[#247EFF] hover:underline font-medium">free playbook PDF</Link> and join 1000+ urban entrepreneurs building <strong>generational wealth from scratch</strong>.
            </p>
          </div>
        </div>

        {/* Outbound Links Section - Trust & Authority */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <HeaderHierarchy level={4} className="mb-3">
            Recommended Resources for <strong>Generational Wealth Building for Beginners</strong>
          </HeaderHierarchy>
          <div className="text-sm space-y-1">
            <p>
              📚 <a href="https://www.entrepreneur.com/starting-a-business" target="_blank" rel="noopener noreferrer" className="text-[#247EFF] hover:underline">Entrepreneur.com Starting a Business Guide</a>
            </p>
            <p>
              💡 <a href="https://hbr.org/topic/entrepreneurship" target="_blank" rel="noopener noreferrer" className="text-[#247EFF] hover:underline">Harvard Business Review: Entrepreneurship</a>
            </p>
            <p>
              🎯 <a href="https://www.sba.gov/business-guide" target="_blank" rel="noopener noreferrer" className="text-[#247EFF] hover:underline">SBA Business Guide</a>
            </p>
          </div>
        </div>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-[#247EFF]/20">
          <HeaderHierarchy level={3} className="mb-4">Tags</HeaderHierarchy>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-[#247EFF]/20 text-[#247EFF] hover:bg-[#247EFF] hover:text-white px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPostContent;
