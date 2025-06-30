
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
            className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-white/20 dark:border-brand-cream/20 rounded-lg overflow-hidden animate-pulse shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10"></div>
            <div className="p-6">
              <div className="h-6 bg-accent/20 rounded mb-3 w-3/4"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-accent/20 rounded"></div>
                <div className="h-4 bg-accent/20 rounded w-5/6"></div>
                <div className="h-4 bg-accent/20 rounded w-4/6"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-accent/20 rounded"></div>
                <div className="h-4 w-20 bg-accent/20 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return null;
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
