
import SEO from "@/components/seo";
import KeywordOptimization from "@/components/seo/keyword-optimization";
import VoiceSearchOptimization from "@/components/seo/voice-search-optimization";
import FeaturedSnippets from "@/components/seo/featured-snippets";

const BlogMetadata = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Builder Stories", url: "https://www.standardthought.com/blog", position: 2 }
  ];

  return (
    <>
      <SEO
        title="Urban Financial Education Blog - AI Side Hustles & Wealth Building Stories | Standardthought"
        description="Get real strategies on urban wealth building, AI side hustles, and financial education for first-gen entrepreneurs. Proven frameworks and success stories from builders who started with nothing."
        keywords="urban financial education blog, AI side hustles guide, wealth building stories, first-gen entrepreneur resources, hood financial literacy, street smart money moves, generational wealth building tips, urban investing strategies, financial education for beginners"
        url="/blog"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      <KeywordOptimization primaryKeyword="urban financial education" context="financial-literacy" />
      <VoiceSearchOptimization topic="wealth-building" />
      <FeaturedSnippets topic="wealth-building" />
    </>
  );
};

export default BlogMetadata;
