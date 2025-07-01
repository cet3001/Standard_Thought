
import { useState, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts, getCategories } from "@/lib/api";
import { Post } from "@/lib/api";

export const useBlogData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedThemeTag, setSelectedThemeTag] = useState("");

  const queryClient = useQueryClient();

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
    retry: 2,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    // Remove refetchOnMount: false to allow initial data loading
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
    retry: 2,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    // Remove refetchOnMount: false to allow initial data loading
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
  });

  return {
    // Data
    posts,
    categories,
    themeTags,
    filteredPosts,
    
    // Loading states
    isPostsLoading,
    isCategoriesLoading,
    
    // Error states
    isPostsError,
    isCategoriesError,
    postsError,
    categoriesError,
    
    // Filter states
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedThemeTag,
    setSelectedThemeTag,
    
    // Actions
    refetchPosts,
    handleThemeTagClick,
  };
};
