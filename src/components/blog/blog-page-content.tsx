
import BlogHero from "./blog-hero";
import FeaturedStoriesSection from "./featured-stories-section";
import StrategyPathwaysSection from "./strategy-pathways-section";
import KeyGuidesCarousel from "./key-guides-carousel";
import BlogFeaturedQuestions from "./blog-featured-questions";
import BlogFiltersSection from "./blog-filters-section";
import BlogGrid from "./blog-grid";
import Empty from "@/components/ui/empty";
import { Post } from "@/lib/types";

interface BlogPageContentProps {
  posts: Post[] | null;
  filteredPosts: Post[] | null;
  categories: string[];
  themeTags: string[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedThemeTag: string;
  setSelectedThemeTag: (tag: string) => void;
  onPostDeleted: () => void;
  onThemeTagClick: (tag: string) => void;
}

const BlogPageContent = ({
  posts,
  filteredPosts,
  categories,
  themeTags,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedThemeTag,
  setSelectedThemeTag,
  onPostDeleted,
  onThemeTagClick
}: BlogPageContentProps) => {
  const hasPosts = filteredPosts && filteredPosts.length > 0;

  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <BlogHero isVisible={true} />
      
      {posts && <FeaturedStoriesSection posts={posts} />}
      
      <StrategyPathwaysSection />
      
      <KeyGuidesCarousel />
      
      <BlogFeaturedQuestions />
      
      <BlogFiltersSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedThemeTag={selectedThemeTag}
        setSelectedThemeTag={setSelectedThemeTag}
        categories={categories}
        themeTags={themeTags}
      />

      {!hasPosts ? (
        <Empty message="No posts found." />
      ) : (
        <BlogGrid 
          posts={filteredPosts} 
          onPostDeleted={onPostDeleted} 
          onThemeTagClick={onThemeTagClick}
        />
      )}
    </div>
  );
};

export default BlogPageContent;
