
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BlogMetadata from "./blog-metadata";
import BlogPageContent from "./blog-page-content";
import { useState, useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts, getCategories } from "@/lib/api";
import { Post } from "@/lib/api";
import Loading from "@/components/ui/loading";
import ErrorMessage from "@/components/ui/error-message";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedThemeTag, setSelectedThemeTag] = useState("");
  const [timedOut, setTimedOut] = useState(false);

  const queryClient = useQueryClient();

  // Bail out if loading drags on too long
  useEffect(() => {
    const timer = setTimeout(() => setTimedOut(true), 10000);
    return () => {
      clearTimeout(timer);
      queryClient.cancelQueries({ queryKey: ['posts'] });
      queryClient.cancelQueries({ queryKey: ['categories'] });
    };
  }, [queryClient]);

  // Fetch posts with error boundaries
  const {
    data: posts = [],
    isLoading: isPostsLoading,
    isError: isPostsError,
    error: postsError,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    retry: 2,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    retry: 2,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  // Memoize derived data to prevent unnecessary recalculations
  const themeTags = useMemo(() => {
    if (!posts || posts.length === 0) return [];
    return [...new Set(posts.flatMap(post => post.theme_tags || []))];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!posts || posts.length === 0) return [];

    return posts.filter((post) => {
      const searchRegex = new RegExp(searchTerm, "i");
      const categoryMatch = selectedCategory === "All" || selectedCategory === ""
        ? true
        : post.category === selectedCategory;
      const themeTagMatch = selectedThemeTag === ""
        ? true
        : post.theme_tags?.includes(selectedThemeTag);
      
      return (
        searchRegex.test(post.title) &&
        categoryMatch &&
        themeTagMatch
      );
    });
  }, [posts, searchTerm, selectedCategory, selectedThemeTag]);

  const handleThemeTagClick = (tag: string) => {
    setSelectedThemeTag(tag);
  };

  // Debug logging
  console.log('BlogPage state:', {
    postsCount: posts?.length || 0,
    categoriesCount: categories?.length || 0,
    isPostsLoading,
    isCategoriesLoading,
    isPostsError,
    isCategoriesError,
    timedOut
  });

  // Loading takes too long? show folks an error instead of a spinner
  if (isPostsLoading || isCategoriesLoading) {
    if (timedOut) {
      return (
        <ErrorMessage
          error={new Error('Request timed out - check your Supabase connection')}
          onRetry={() => {
            setTimedOut(false);
            refetchPosts();
          }}
        />
      );
    }
    return <Loading />;
  }

  // Show error state with retry option
  if (isPostsError || isCategoriesError) {
    const error = postsError || categoriesError;
    console.error('Blog page error:', error);
    return (
      <ErrorMessage 
        error={error} 
        onRetry={() => {
          refetchPosts();
          queryClient.refetchQueries({ queryKey: ['categories'] });
        }} 
      />
    );
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
