
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

  console.log('BlogPage: Component rendering...');

  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
    error: postsError,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      console.log('BlogPage: Executing getPosts query...');
      const result = await getPosts();
      console.log('BlogPage: getPosts query result:', result);
      return result;
    },
    retry: 3,
    retryDelay: 1000,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      console.log('BlogPage: Executing getCategories query...');
      const result = await getCategories();
      console.log('BlogPage: getCategories query result:', result);
      return result;
    },
    retry: 3,
    retryDelay: 1000,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  console.log('BlogPage: Query states:', {
    postsLoading: isPostsLoading,
    postsData: posts?.length,
    postsError: isPostsError,
    categoriesLoading: isCategoriesLoading,
    categoriesData: categories?.length,
    categoriesError: isCategoriesError
  });

  // Extract theme tags from posts
  const themeTags = posts 
    ? [...new Set(posts.flatMap(post => post.theme_tags || []))]
    : [];

  useEffect(() => {
    console.log('BlogPage: Filtering posts...', { 
      postsLength: posts?.length, 
      searchTerm, 
      selectedCategory, 
      selectedThemeTag 
    });
    
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
      
      console.log('BlogPage: Filtered posts:', filtered.length);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(null);
    }
  }, [posts, searchTerm, selectedCategory, selectedThemeTag]);

  const handleThemeTagClick = (tag: string) => {
    console.log('BlogPage: Theme tag clicked:', tag);
    setSelectedThemeTag(tag);
  };

  const isLoading = isPostsLoading || isCategoriesLoading;
  const hasError = isPostsError || isCategoriesError;
  const error = postsError || categoriesError;

  console.log('BlogPage: Final render state:', {
    isLoading,
    hasError,
    postsLength: posts?.length,
    filteredLength: filteredPosts?.length
  });

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
