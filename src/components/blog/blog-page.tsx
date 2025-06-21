
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BlogMetadata from "./blog-metadata";
import BlogPageContent from "./blog-page-content";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts, getCategories } from "@/lib/api";
import { Post } from "@/lib/types";
import Loading from "@/components/ui/loading";
import ErrorMessage from "@/components/ui/error-message";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedThemeTag, setSelectedThemeTag] = useState("");
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

  const themeTags = posts 
    ? [...new Set(posts.flatMap(post => post.theme_tags || []))]
    : [];

  useEffect(() => {
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
      setFilteredPosts(filtered);
    }
  }, [posts, searchTerm, selectedCategory, selectedThemeTag]);

  const handleThemeTagClick = (tag: string) => {
    setSelectedThemeTag(tag);
  };

  if (isPostsLoading || isCategoriesLoading) return <Loading />;
  if (isPostsError || isCategoriesError)
    return <ErrorMessage error={postsError || categoriesError} onRetry={() => refetchPosts()} />;

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <BlogMetadata />
      <Navigation />
      <main className="pt-32 pb-16">
        <BlogPageContent
          posts={posts}
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
