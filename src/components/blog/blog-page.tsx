
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
    queryFn: async () => {
      console.log('Fetching posts...');
      const result = await getPosts();
      console.log('Posts fetched:', result);
      return result;
    },
    retry: 1,
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      console.log('Fetching categories...');
      const result = await getCategories();
      console.log('Categories fetched:', result);
      return result;
    },
    retry: 1,
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  // Memoize derived data to prevent unnecessary recalculations
  const themeTags = useMemo(() => {
    if (!posts || posts.length === 0) return [];
    const tags = [...new Set(posts.flatMap(post => post.theme_tags || []))];
    console.log('Theme tags generated:', tags);
    return tags;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!posts || posts.length === 0) {
      console.log('No posts to filter');
      return [];
    }

    const filtered = posts.filter((post) => {
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

    console.log('Filtered posts:', filtered);
    return filtered;
  }, [posts, searchTerm, selectedCategory, selectedThemeTag]);

  const handleThemeTagClick = (tag: string) => {
    console.log('Theme tag clicked:', tag);
    setSelectedThemeTag(tag);
  };

  // Debug logging
  console.log('Blog page state:', {
    isPostsLoading,
    isCategoriesLoading,
    isPostsError,
    isCategoriesError,
    postsCount: posts?.length || 0,
    categoriesCount: categories?.length || 0,
    timedOut
  });

  // Loading takes too long? show folks an error instead of a spinner
  if (isPostsLoading || isCategoriesLoading) {
    if (timedOut) {
      return (
        <div className="min-h-screen bg-transparent">
          <Navigation />
          <main className="pt-32 pb-16">
            <div className="container mx-auto px-6 max-w-7xl text-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">Loading Timeout</h1>
              <p className="text-gray-600 mb-4">The blog posts are taking too long to load.</p>
              <button 
                onClick={() => {
                  setTimedOut(false);
                  refetchPosts();
                }} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Try Again
              </button>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-transparent">
        <Navigation />
        <main className="pt-32 pb-16">
          <Loading />
        </main>
        <Footer />
      </div>
    );
  }

  // Show error state with retry option
  if (isPostsError || isCategoriesError) {
    const error = postsError || categoriesError;
    return (
      <div className="min-h-screen bg-transparent">
        <Navigation />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Blog</h1>
            <p className="text-gray-600 mb-4">
              {error?.message || 'Failed to load blog posts'}
            </p>
            <button 
              onClick={() => refetchPosts()} 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        </main>
        <Footer />
      </div>
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
