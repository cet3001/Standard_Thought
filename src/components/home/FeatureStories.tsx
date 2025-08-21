import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogPosts, BlogPost } from "@/lib/api";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

interface FeaturedBlogSectionProps {
  isVisible: boolean;
}

const FeaturedBlogSection = ({ isVisible }: FeaturedBlogSectionProps) => {
  const navigate = useNavigate();
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Helper function to get pillar category and color
  const getPillarInfo = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('unlearn') || cat.includes('mindset') || cat.includes('belief')) {
      return { pillar: 'Unlearn', color: '#007cba' }; // Blue
    } else if (cat.includes('rebuild') || cat.includes('plan') || cat.includes('system')) {
      return { pillar: 'Rebuild', color: '#F7CE46' }; // Yellow
    } else if (cat.includes('stack') || cat.includes('money') || cat.includes('wealth') || cat.includes('invest')) {
      return { pillar: 'Stack', color: '#10B981' }; // Green
    } else if (cat.includes('transcend') || cat.includes('legacy') || cat.includes('freedom')) {
      return { pillar: 'Transcend', color: '#8B5CF6' }; // Purple
    }
    return { pillar: 'Build', color: '#F7CE46' }; // Default to yellow
  };

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const posts = await getBlogPosts();
        // Get the 3 most recent published posts
        setFeaturedPosts(posts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching featured blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
    
    // Timeout to prevent loading state from persisting beyond 1.5s
    const timeout = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-16">
              <div className="h-16 w-1/2 mx-auto bg-gradient-to-r from-yellow-300/30 via-yellow-400/30 to-yellow-300/30 rounded-lg animate-pulse"></div>
              <div className="h-6 w-1/3 mx-auto mt-4 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white/20 dark:bg-gray-900/25 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/30 dark:border-gray-700/40">
                  <div className="h-48 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 animate-pulse"></div>
                  <div className="p-6 space-y-4">
                    <div className="w-16 h-6 bg-gradient-to-r from-yellow-300/30 to-yellow-400/30 rounded-full animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-6 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
                      <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 rounded animate-pulse"></div>
                      <div className="h-3 w-5/6 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 rounded animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-24 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 rounded animate-pulse"></div>
                      <div className="h-8 w-16 bg-gradient-to-r from-yellow-300/30 to-yellow-400/30 rounded-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono leading-tight">
                The truth is louder than the flex—here's what really set folks free.
              </h2>
                
              {/* Graffiti-style underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-2"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C22 6 42 10 62 8C82 6 102 12 122 8C142 4 162 10 182 8C202 6 222 10 242 8C262 6 282 10 298 8"
                  stroke="url(#featuredGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="featuredGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#f4d03f' }} />
                    <stop offset="25%" style={{ stopColor: '#ffd700' }} />
                    <stop offset="50%" style={{ stopColor: '#ffeb3b' }} />
                    <stop offset="75%" style={{ stopColor: '#fff176' }} />
                    <stop offset="100%" style={{ stopColor: '#f4d03f' }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto leading-relaxed">
              The latest blueprints from builders who turned vision into reality
            </p>
          </div>

          {/* Featured Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                onClick={() => navigate(`/blog/${post.slug}`)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glass Card */}
                <div className="relative bg-white/20 dark:bg-gray-900/25 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/30 dark:border-gray-700/40 hover:bg-white/30 dark:hover:bg-gray-900/35 hover:shadow-3xl hover:border-white/40 dark:hover:border-gray-600/50 transition-all duration-500">
                  {/* Grain texture overlay */}
                  <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlRmlsdGVyIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjQiLz4KPC9zdmc+')] pointer-events-none"></div>
                  
                  {/* Featured image or placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-400/20 to-gray-600/20 dark:from-gray-600/20 dark:to-gray-800/20 overflow-hidden">
                    {post.image_url ? (
                      <OptimizedImage
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                        width={400}
                        height={192}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl font-permanent-marker transform -rotate-12 drop-shadow-lg" style={{
                          color: 'transparent',
                          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                          backgroundSize: '400% 400%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          animation: 'pearlescent 3s ease-in-out infinite',
                          opacity: 0.6
                        }}>
                          ST
                        </div>
                      </div>
                    )}
                    
                    {/* Glass overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Pillar Category badge */}
                    <div className="absolute top-3 left-3">
                      {(() => {
                        const pillarInfo = getPillarInfo(post.category);
                        return (
                          <div 
                            className="px-3 py-1.5 transform -rotate-2 shadow-lg backdrop-blur-sm border-2 border-white rounded-sm font-kalam font-bold"
                            style={{
                              backgroundColor: pillarInfo.color,
                              textShadow: '1px 1px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.2)'
                            }}
                          >
                            <span className="text-xs font-bold text-white uppercase tracking-wide transform rotate-1 inline-block" style={{ letterSpacing: '1px' }}>
                              {pillarInfo.pillar}
                            </span>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Read time badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/20">
                      <Clock size={12} style={{
                        color: 'transparent',
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'pearlescent 3s ease-in-out infinite'
                      }} />
                      <span className="text-xs font-medium" style={{
                        color: 'transparent',
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',  
                        backgroundClip: 'text',
                        animation: 'pearlescent 3s ease-in-out infinite'
                      }}>
                        {Math.ceil(post.content.length / 1000)} min
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Title */}
                    <h3 className="font-bold text-xl mb-3 font-ibm-plex-mono leading-tight transition-colors duration-300 drop-shadow-sm" style={{
                      color: 'transparent',
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/80 dark:text-brand-cream/80 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="flex items-center gap-1 backdrop-blur-sm px-2 py-1 rounded-full border border-yellow-400/30"
                            style={{
                              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                              backgroundSize: '400% 400%',
                              animation: 'pearlescent 3s ease-in-out infinite',
                              opacity: 0.9
                            }}
                          >
                            <Tag size={10} className="text-gray-900" />
                            <span className="text-xs font-medium text-gray-900 font-bold">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Footer with date and read more */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{
                        color: 'transparent',
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'pearlescent 3s ease-in-out infinite',
                        opacity: 0.8
                      }}>
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                      <div 
                        className="inline-flex items-center gap-2 text-gray-900 px-3 py-1.5 rounded-lg font-bold text-xs transform hover:scale-105 transition-all duration-200 shadow-lg border-2 border-gray-900 backdrop-blur-sm font-kalam transform -rotate-1 hover:rotate-1 hover:scale-110"
                        style={{
                          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                          backgroundSize: '400% 400%',
                          animation: 'pearlescent 3s ease-in-out infinite',
                          textShadow: '1px 1px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.2)',
                          letterSpacing: '0.5px'
                        }}
                      >
                        <span style={{ transform: 'rotate(-0.5deg)', display: 'inline-block' }}>Read</span>
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" style={{ transform: 'rotate(-0.5deg)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-3 right-3 w-6 h-6 transform rotate-45 rounded-sm opacity-60" style={{
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    animation: 'pearlescent 3s ease-in-out infinite',
                    opacity: 0.2
                  }}></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 bg-white/10 transform -rotate-12 rounded-full opacity-40"></div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button
              onClick={() => navigate('/blog')}
              size="lg"
              className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base border-0 relative overflow-hidden"
            >
              <span 
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                  textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
                  transform: 'rotate(-1deg)',
                  display: 'inline-block'
                }}
              >
                View All Stories
              </span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogSection;