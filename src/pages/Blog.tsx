
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import BlogHero from "@/components/blog/blog-hero";
import BlogSearchFilter from "@/components/blog/blog-search-filter";
import BlogGrid from "@/components/blog/blog-grid";
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
        title="Urban Financial Literacy Blog - Real Builder Stories | Standardthought"
        description="Get real game on urban investing, AI side hustles, and credit building. Generational wealth building stories and strategies from people who built from nothing. Hood financial literacy that actually works."
        keywords="hood financial literacy, urban investing strategies, street smart money moves, generational wealth building for beginners, AI side hustles, urban entrepreneurship, credit building strategies, wealth creation resources, financial education, business development tools, real money stories, urban finance blog"
        url="/blog"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* SEO Enhancement Components */}
      <KeywordOptimization primaryKeyword="hood financial literacy" context="financial-literacy" />
      <VoiceSearchOptimization topic="wealth-building" />
      <FeaturedSnippets topic="wealth-building" />

      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <BlogHero isVisible={true} />
          
          {/* Internal Linking Section */}
          <div className="mb-12 bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-6">
            <h2 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
              Essential Wealth Building Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="font-semibold text-[#247EFF] mb-2">Get Started</h3>
                <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-2">
                  New to wealth building? Start with our <ContextualLinks context="blog" /> 
                  to build your foundation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#247EFF] mb-2">Level Up</h3>
                <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-2">
                  Ready to scale? Check out our <a href="/resources" className="text-[#247EFF] hover:underline">Success Strategies</a> 
                  and advanced frameworks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#247EFF] mb-2">Take Action</h3>
                <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-2">
                  Ready to build? Get the <a href="/sales" className="text-[#247EFF] hover:underline">complete playbook</a> 
                  and start your journey.
                </p>
              </div>
            </div>
          </div>
          
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
