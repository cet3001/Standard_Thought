
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

  // Debug logging to help identify the issue
  console.log('BlogPage render state:', {
    isPostsLoading,
    isCategoriesLoading,
    isPostsError,
    isCategoriesError,
    postsCount: posts?.length,
    categoriesCount: categories?.length,
    hasFilteredPosts: filteredPosts?.length
  });

  // Show loading state
  if (isPostsLoading || isCategoriesLoading) {
    console.log('Showing loading state');
    return <BlogPageLoadingState />;
  }

  // Show error state with retry option
  if (isPostsError || isCategoriesError) {
    const error = postsError || categoriesError;
    console.log('Showing error state:', error);
    return <BlogPageErrorState error={error} onRetry={refetchPosts} />;
  }

  console.log('Rendering main blog page content');

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
