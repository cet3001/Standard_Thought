
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BlogMetadata from "./blog-metadata";
import BlogPageContent from "./blog-page-content";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts, getCategories } from "@/lib/api";
import { Post } from "@/lib/api";
import Loading from "@/components/ui/loading";
import ErrorMessage from "@/components/ui/error-message";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedThemeTag, setSelectedThemeTag] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[] | null>(null);

  console.log('BlogPage: Component rendering');

  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
    error: postsError,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      console.log('BlogPage: Fetching posts...');
      const result = await getPosts();
      console.log('BlogPage: Posts fetched:', result);
      return result;
    },
    retry: 0, // No retries to prevent infinite loops
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      console.log('BlogPage: Fetching categories...');
      const result = await getCategories();
      console.log('BlogPage: Categories fetched:', result);
      return result;
    },
    retry: 0, // No retries to prevent infinite loops
    staleTime: 5 * 60 * 1000,
  });

  // Extract theme tags from posts
  const themeTags = posts 
    ? [...new Set(posts.flatMap(post => post.theme_tags || []))]
    : [];

  useEffect(() => {
    console.log('BlogPage: Posts changed:', posts);
    if (posts) {
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
      
      console.log('BlogPage: Filtered posts:', filtered);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(null);
    }
  }, [posts, searchTerm, selectedCategory, selectedThemeTag]);

  const handleThemeTagClick = (tag: string) => {
    setSelectedThemeTag(tag);
  };

  const isLoading = isPostsLoading || isCategoriesLoading;
  const hasError = isPostsError || isCategoriesError;
  const error = postsError || categoriesError;

  console.log('BlogPage: Render state - loading:', isLoading, 'error:', hasError, 'posts:', posts?.length);

  if (isLoading) {
    console.log('BlogPage: Showing loading state');
    return <Loading />;
  }
  
  if (hasError) {
    console.log('BlogPage: Showing error state:', error);
    return <ErrorMessage error={error} onRetry={() => refetchPosts()} />;
  }

  console.log('BlogPage: Rendering main content');

  return (
    <div className="min-h-screen bg-transparent">
      <BlogMetadata />
      <Navigation />
      <main className="pt-32 pb-16">
        <BlogPageContent
          posts={posts || []}
          filteredPosts={filteredPosts}
          categories={categories || []}
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
