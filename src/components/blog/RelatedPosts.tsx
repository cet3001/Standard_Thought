import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost as BlogPostType } from "@/lib/api";
import { Clock, Calendar } from "lucide-react";

interface RelatedPostsProps {
  currentPostId: string;
  category: string;
  tags?: string[];
}

const RelatedPosts = ({ currentPostId, category, tags }: RelatedPostsProps) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        // First try to find posts with matching tags
        let query = supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .neq('id', currentPostId)
          .limit(3);

        if (tags && tags.length > 0) {
          query = query.overlaps('tags', tags);
        } else {
          // Fallback to same category
          query = query.eq('category', category);
        }

        const { data, error } = await query;

        if (error) {
          console.error('Error fetching related posts:', error);
          return;
        }

        if (data && data.length > 0) {
          setRelatedPosts(data.slice(0, 3));
        } else {
          // If no tag matches, try category matches
          const { data: categoryData, error: categoryError } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('published', true)
            .eq('category', category)
            .neq('id', currentPostId)
            .limit(3);

          if (!categoryError && categoryData) {
            setRelatedPosts(categoryData);
          }
        }
      } catch (err) {
        console.error('Error fetching related posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedPosts();
    
    // Timeout to prevent loading state from persisting beyond 1.5s
    const timeout = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, [currentPostId, category, tags]);

  if (loading) {
    return (
      <section className="mt-16 pt-8 border-t border-brand-black/20 dark:border-brand-cream/20">
        <h3 className="text-2xl font-bold text-brand-black dark:text-brand-cream mb-8 font-ibm-plex-mono">
          Related Stories
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-brand-cream/10 dark:bg-brand-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-black/10 dark:border-brand-cream/10">
              <div className="aspect-video bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 animate-pulse"></div>
              <div className="p-6 space-y-4">
                <div className="w-16 h-6 bg-gradient-to-r from-yellow-300/30 to-yellow-400/30 rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-5 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 rounded animate-pulse"></div>
                  <div className="h-3 w-5/6 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-brand-black/20 dark:border-brand-cream/20">
      <h3 className="text-2xl font-bold text-brand-black dark:text-brand-cream mb-8 font-ibm-plex-mono">
        Related Stories
      </h3>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="bg-brand-cream/10 dark:bg-brand-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-black/10 dark:border-brand-cream/10 hover:border-[#FFD700]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              {post.image_url && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black rounded-full transform -rotate-1">
                    {post.category}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-brand-black dark:text-brand-cream mb-2 line-clamp-2 group-hover:text-[#FFD700] transition-colors duration-200">
                  {post.title}
                </h4>
                
                <p className="text-sm text-brand-black/70 dark:text-brand-cream/70 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-brand-black/60 dark:text-brand-cream/60">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{new Date(post.created_at).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{Math.ceil(post.content.length / 1000)} min</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;