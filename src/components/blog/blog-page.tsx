
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BlogMetadata from "./blog-metadata";
import BlogPageContent from "./blog-page-content";
import { useBlogData } from "@/hooks/use-blog-data";
import { BlogPageLoadingState, BlogPageErrorState } from "./blog-page-states";

const BlogPage = () => {
  const {
    posts,
    categories,
    themeTags,
    filteredPosts,
    isPostsLoading,
    isCategoriesLoading,
    isPostsError,
    isCategoriesError,
    postsError,
    categoriesError,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedThemeTag,
    setSelectedThemeTag,
    refetchPosts,
    handleThemeTagClick,
  } = useBlogData();

  // Show loading state
  if (isPostsLoading || isCategoriesLoading) {
    return <BlogPageLoadingState />;
  }

  // Show error state with retry option
  if (isPostsError || isCategoriesError) {
    const error = postsError || categoriesError;
    return <BlogPageErrorState error={error} onRetry={refetchPosts} />;
  }

  return (
    <div className="min-h-screen bg-transparent">
      <BlogMetadata />
      <Navigation />
      <main className="pt-32 pb-16">
        <BlogPageContent
          posts={posts}
          filteredPosts={filteredPosts}
          categories={categories}
          themeTags={themeTags}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedThemeTag={selectedThemeTag}
          setSelectedThemeTag={setSelectedThemeTag}
          onPostDeleted={() => refetchPosts()}
          onThemeTagClick={handleThemeTagClick}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
