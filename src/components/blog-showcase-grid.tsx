
import BlogCard from "./blog-card";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image_url: string | null;
  category: string;
  featured: boolean;
  created_at: string;
  slug: string;
}

interface BlogShowcaseGridProps {
  posts: BlogPost[];
  loading: boolean;
  isVisible: boolean;
}

const BlogShowcaseGrid = ({ posts, loading, isVisible }: BlogShowcaseGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[...Array(3)].map((_, index) => (
          <div 
            key={index} 
            className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-none rounded-none overflow-hidden animate-pulse shadow-lg relative"
            style={{
              // Add paper texture to loading cards too
              backgroundImage: `
                linear-gradient(90deg, rgba(255,107,107,0.3) 1px, transparent 1px),
                linear-gradient(180deg, transparent 32px, rgba(229,231,235,0.4) 32px, rgba(229,231,235,0.4) 33px, transparent 33px)
              `,
              backgroundSize: '24px 100%, 100% 33px',
              backgroundPosition: '24px 0, 0 0'
            }}
          >
            {/* Torn paper effect for loading cards */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-white/90 dark:bg-brand-black/80 shadow-[0_3px_0_0_rgba(0,0,0,0.1)] z-10"></div>
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#247EFF]/20 to-transparent"></div>
            
            <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
            <div className="p-6 relative z-10">
              <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {posts.map((post, index) => (
        <BlogCard 
          key={post.id}
          post={post}
          index={index}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
};

export default BlogShowcaseGrid;
