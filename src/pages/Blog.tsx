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

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[] | null>(null);

  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
    error: postsError,
  } = useQuery("posts", getPosts);

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useQuery("categories", getCategories);

  useEffect(() => {
    if (posts) {
      const filtered = posts.filter((post) => {
        const searchRegex = new RegExp(searchTerm, "i");
        const categoryMatch = selectedCategory
          ? post.category === selectedCategory
          : true;
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
    return <ErrorMessage error={postsError || categoriesError} />;

  const hasPosts = filteredPosts && filteredPosts.length > 0;

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO
        title="Urban Financial Literacy Blog | Standardthought"
        description="Insights on urban investing, AI side hustles, and credit building. Generational wealth building for beginners with street-smart money strategies."
        keywords="hood financial literacy, urban investing strategies, street smart money moves, generational wealth building for beginners, AI side hustles, urban entrepreneurship, credit building strategies, wealth creation resources, financial education, business development tools"
        url="/blog"
        type="website"
      />

      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <BlogHero />
          
          {/* Featured Questions Section */}
          <BlogFeaturedQuestions />
          
          <BlogSearchFilter
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            onSearchChange={setSearchTerm}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />

          {!hasPosts ? (
            <Empty message="No posts found." />
          ) : (
            <BlogGrid posts={filteredPosts} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
