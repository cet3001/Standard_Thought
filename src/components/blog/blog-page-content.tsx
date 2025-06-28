import BlogHero from "./blog-hero";
import FeaturedRecentPosts from "./featured-recent-posts";
import FeaturedStoriesSection from "./featured-stories-section";
import StartHereCard from "./start-here-card";
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

  // Get the 3 most recent posts for featured section
  const recentPosts = posts ? [...posts].sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  ).slice(0, 3) : [];

  // Get remaining posts (excluding the 3 most recent)
  const remainingPosts = filteredPosts ? filteredPosts.filter(post => 
    !recentPosts.some(recent => recent.id === post.id)
  ) : [];

  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <BlogHero isVisible={true} />
      
      {/* Featured Recent Posts - 3 Large Cards */}
      {recentPosts.length > 0 && (
        <FeaturedRecentPosts 
          posts={recentPosts} 
          onThemeTagClick={onThemeTagClick}
        />
      )}
      
      {/* Filters Section */}
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

      {/* Remaining Posts Grid */}
      {!hasPosts ? (
        <Empty message="No posts found." />
      ) : remainingPosts.length > 0 ? (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-6">
            More Stories
          </h2>
          <BlogGrid 
            posts={remainingPosts} 
            onPostDeleted={onPostDeleted} 
            onThemeTagClick={onThemeTagClick}
          />
        </div>
      ) : null}

      {/* Start Here Card - Now below the main content */}
      <div className="mb-12">
        <StartHereCard />
      </div>

      {/* Pearlescent Yellow CTA Button */}
      <div className="mb-12 text-center">
        <a 
          href="/resources"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-3xl border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700] text-lg"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
            textShadow: '1px 1px 0px rgba(0,0,0,0.2)' 
          }}
        >
          📚 Explore Guides & Resources
        </a>
      </div>
      
      {/* Keep the other sections below */}
      {posts && <FeaturedStoriesSection posts={posts} />}
    </div>
  );
};

export default BlogPageContent;
