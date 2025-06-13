
import { Badge } from "@/components/ui/badge";

interface BlogPostContentProps {
  content: string;
  imageUrl?: string | null;
  title: string;
  tags: string[];
}

const BlogPostContent = ({ content, imageUrl, title, tags }: BlogPostContentProps) => {
  return (
    <>
      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-12">
          <img
            src={imageUrl}
            alt={title}
            className="w-full max-h-[600px] object-contain rounded-3xl bg-gray-50 dark:bg-gray-900"
            loading="lazy"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg max-w-none text-[#0A0A0A] dark:text-brand-cream">
        <div className="whitespace-pre-wrap leading-relaxed text-lg">
          {content}
        </div>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-[#247EFF]/20">
          <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4">Tags</h3>
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
