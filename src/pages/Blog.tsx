
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import BlogHero from "@/components/blog/blog-hero";
import BlogSearchFilter from "@/components/blog/blog-search-filter";
import BlogGrid from "@/components/blog/blog-grid";
import KeyGuidesCarousel from "@/components/blog/key-guides-carousel";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts, getCategories } from "@/lib/api";
import { Post } from "@/lib/types";
import Loading from "@/components/ui/loading";
import ErrorMessage from "@/components/ui/error-message";
import Empty from "@/components/ui/empty";
import BlogFeaturedQuestions from "@/components/blog/blog-featured-questions";
import KeywordOptimization from "@/components/seo/keyword-optimization";
import VoiceSearchOptimization from "@/components/seo/voice-search-optimization";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import ContextualLinks from "@/components/contextual-links";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[] | null>(null);

  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
    error: postsError,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  useEffect(() => {
    if (posts) {
      const filtered = posts.filter((post) => {
        const searchRegex = new RegExp(searchTerm, "i");
        const categoryMatch = selectedCategory === "All" || selectedCategory === ""
          ? true
          : post.category === selectedCategory;
        return (
          searchRegex.test(post.title) &&
          categoryMatch
        );
      });
      setFilteredPosts(filtered);
    }
  }, [posts, searchTerm, selectedCategory]);

  if (isPostsLoading || isCategoriesLoading) return <Loading />;
  if (isPostsError || isCategoriesError)
    return <ErrorMessage error={postsError || categoriesError} onRetry={() => refetchPosts()} />;

  const hasPosts = filteredPosts && filteredPosts.length > 0;

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Builder Stories", url: "https://www.standardthought.com/blog", position: 2 }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO
        title="Urban Financial Education Blog - AI Side Hustles & Wealth Building Stories | Standardthought"
        description="Get real strategies on urban wealth building, AI side hustles, and financial education for first-gen entrepreneurs. Proven frameworks and success stories from builders who started with nothing."
        keywords="urban financial education blog, AI side hustles guide, wealth building stories, first-gen entrepreneur resources, hood financial literacy, street smart money moves, generational wealth building tips, urban investing strategies, financial education for beginners"
        url="/blog"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* SEO Enhancement Components */}
      <KeywordOptimization primaryKeyword="urban financial education" context="financial-literacy" />
      <VoiceSearchOptimization topic="wealth-building" />
      <FeaturedSnippets topic="wealth-building" />

      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <BlogHero isVisible={true} />
          
          {/* Strategic Learning Pathways Section - Updated for uniqueness */}
          <div className="mb-12 bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-6">
            <h2 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
              Strategic Learning Pathways
            </h2>
            <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-6">
              Navigate your financial education journey with curated learning paths designed for different stages and goals.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#247EFF]/10 to-blue-50 dark:from-[#247EFF]/20 dark:to-blue-900/20 p-4 rounded-2xl">
                <h3 className="font-semibold text-[#247EFF] mb-2">📚 Foundation Builder</h3>
                <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
                  Master the basics before scaling up. Essential knowledge for beginners.
                </p>
                <div className="space-y-2">
                  <a href="/blog?category=Financial Literacy" className="block text-sm text-[#247EFF] hover:underline">
                    → Financial Literacy Deep Dives
                  </a>
                  <a href="/blog?category=Credit Building" className="block text-sm text-[#247EFF] hover:underline">
                    → Credit Building Case Studies
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-100/50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 p-4 rounded-2xl">
                <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">🚀 Growth Accelerator</h3>
                <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
                  Scale your income and investments with proven strategies.
                </p>
                <div className="space-y-2">
                  <a href="/ai-side-hustles-guide" className="block text-sm text-green-700 dark:text-green-400 hover:underline">
                    → AI Side Hustle Mastery
                  </a>
                  <a href="/free-investing-guide" className="block text-sm text-green-700 dark:text-green-400 hover:underline">
                    → Advanced Investing Tactics
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100/50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/20 p-4 rounded-2xl">
                <h3 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">👑 Legacy Creator</h3>
                <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
                  Build generational wealth and teach others your strategies.
                </p>
                <div className="space-y-2">
                  <a href="/wealth-building-strategies" className="block text-sm text-yellow-700 dark:text-yellow-400 hover:underline">
                    → Wealth Building Blueprints
                  </a>
                  <a href="/blog?category=Entrepreneurship" className="block text-sm text-yellow-700 dark:text-yellow-400 hover:underline">
                    → Business Scaling Stories
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Access Tools - Unique to blog page */}
            <div className="mt-6 pt-6 border-t border-[#247EFF]/20">
              <h3 className="font-semibold text-[#0A0A0A] dark:text-brand-cream mb-3">
                📊 Story Analysis Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                <a href="/blog?search=case+study" className="px-4 py-2 bg-[#247EFF]/10 text-[#247EFF] rounded-full text-sm hover:bg-[#247EFF]/20 transition-colors">
                  View Case Studies
                </a>
                <a href="/blog?search=before+after" className="px-4 py-2 bg-[#247EFF]/10 text-[#247EFF] rounded-full text-sm hover:bg-[#247EFF]/20 transition-colors">
                  Before & After Stories
                </a>
                <a href="/blog?search=lessons+learned" className="px-4 py-2 bg-[#247EFF]/10 text-[#247EFF] rounded-full text-sm hover:bg-[#247EFF]/20 transition-colors">
                  Key Lessons Extracted
                </a>
                <a href="/blog?category=Mindset" className="px-4 py-2 bg-[#247EFF]/10 text-[#247EFF] rounded-full text-sm hover:bg-[#247EFF]/20 transition-colors">
                  Mindset Shifts
                </a>
              </div>
            </div>
          </div>
          
          {/* Key Guides Carousel - NEW ADDITION */}
          <KeyGuidesCarousel />
          
          {/* Featured Questions Section */}
          <BlogFeaturedQuestions />
          
          <BlogSearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories || []}
          />

          {!hasPosts ? (
            <Empty message="No posts found." />
          ) : (
            <BlogGrid posts={filteredPosts} onPostDeleted={() => refetchPosts()} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
