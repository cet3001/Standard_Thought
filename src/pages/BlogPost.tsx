import { useEffect, useState } from "react";
import { useHeaderHeight } from "@/hooks/use-header-height";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { DynamicSEOMeta } from "@/components/seo/dynamic-seo-meta";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { Clock, Tag, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost as BlogPostType } from "@/lib/api";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { sanitizeHtml } from "@/lib/security-utils";

const BlogPost = () => {
  useMobilePerformance();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { textureImageUrl } = useUrbanTexture();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError("No post slug provided");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (error) {
          console.error('Error fetching blog post:', error);
          setError("Post not found");
          setLoading(false);
          return;
        }

        if (!data) {
          setError("Post not found");
          setLoading(false);
          return;
        }

        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Urban Background */}
        <div className="fixed inset-0 -z-50" aria-hidden="true">
          {textureImageUrl && (
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${textureImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
        </div>

        <Navigation />
        <main className="relative z-10 pb-16" style={{ marginTop: `${useHeaderHeight()}px`, paddingTop: '3rem' }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center py-20">
              <div className="text-6xl font-permanent-marker transform -rotate-12 drop-shadow-lg mb-4" style={{
                color: 'transparent',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>
                Loading...
              </div>
              <p className="text-brand-black/60 dark:text-brand-cream/60">Getting your story ready</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Urban Background */}
        <div className="fixed inset-0 -z-50" aria-hidden="true">
          {textureImageUrl && (
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${textureImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
        </div>

        <Navigation />
        <main className="relative z-10 pb-16" style={{ marginTop: `${useHeaderHeight()}px`, paddingTop: '3rem' }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center py-20">
              <div className="text-6xl font-permanent-marker transform -rotate-12 drop-shadow-lg mb-4" style={{
                color: 'transparent',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>
                404
              </div>
              <h1 className="text-2xl font-bold text-brand-black dark:text-brand-cream mb-4">Story Not Found</h1>
              <p className="text-brand-black/60 dark:text-brand-cream/60 mb-8">
                This story might have been moved or doesn&apos;t exist yet.
              </p>
              <Button
                onClick={() => navigate('/blog')}
                className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-6 py-3 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Blog", url: "https://www.standardthought.com/blog", position: 2 },
    { name: post.title, url: `https://www.standardthought.com/blog/${post.slug}`, position: 3 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <DynamicSEOMeta 
        pageType="blog-post" 
        blogPost={{
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          image_url: post.image_url || undefined,
          slug: post.slug || undefined
        }}
      />
      <SEO
        title={`${post.title} | Standardthought`}
        description={post.meta_description || post.excerpt}
        keywords={post.meta_keywords || post.tags?.join(', ') || ''}
        url={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.created_at}
        modifiedTime={post.updated_at}
        author="Standardthought"
        category={post.category}
        tags={post.tags || []}
        wordCount={post.content.length}
        breadcrumbs={breadcrumbs}
      />

      <Navigation />

      <main className="relative z-10 pb-16" style={{ marginTop: `${useHeaderHeight()}px`, paddingTop: '3rem' }}>
        <article className="container mx-auto px-6 max-w-4xl">
          
          {/* Back Button */}
          <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-black/70 dark:text-brand-cream/70 hover:text-brand-black dark:hover:text-brand-cream transition-colors duration-200 font-ibm-plex-mono"
            >
              <ArrowLeft size={16} />
              Back to Stories
            </Link>
          </div>

          {/* Breadcrumbs */}
          <div className={`mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <BlogBreadcrumbs category={post.category} title={post.title} />
          </div>

          {/* Article Header */}
          <header className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Category Badge */}
            <div className="mb-6">
              <div className="inline-block px-4 py-2 transform -rotate-1 shadow-lg backdrop-blur-sm border-2 border-gray-900 rounded-md font-kalam font-bold" style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                animation: 'pearlescent 3s ease-in-out infinite',
                textShadow: '1px 1px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.2)'
              }}>
                <span className="text-sm font-bold text-gray-900 uppercase tracking-wide transform rotate-1 inline-block">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-brand-black dark:text-brand-cream font-ibm-plex-mono" style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'pearlescent 3s ease-in-out infinite'
            }}>
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-brand-black/80 dark:text-brand-cream/80 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-brand-black/60 dark:text-brand-cream/60">
              <div className="flex items-center gap-2">
                <Calendar size={16} style={{
                  color: 'transparent',
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }} />
                <span>{new Date(post.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock size={16} style={{
                  color: 'transparent',
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }} />
                <span>{Math.ceil(post.content.length / 1000)} min read</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-6">
                {post.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-400/30"
                    style={{
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      animation: 'pearlescent 3s ease-in-out infinite',
                      opacity: 0.9
                    }}
                  >
                    <Tag size={12} className="text-gray-900" />
                    <span className="text-xs font-medium text-gray-900 font-bold">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {post.image_url && (
            <div className={`mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className={`relative transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Subtle ST Logo Watermark */}
            <Link 
              to="/" 
              className="absolute top-4 right-4 z-10 opacity-5 hover:opacity-20 transition-opacity duration-300"
              aria-label="Return to Standardthought home"
            >
              <img 
                src="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" 
                alt="ST Logo" 
                className="w-12 h-12 object-contain"
              />
            </Link>
            
            <div 
              className="prose prose-lg max-w-none text-brand-black dark:text-brand-cream prose-headings:text-brand-black dark:prose-headings:text-brand-cream prose-a:text-[#247EFF] prose-strong:text-brand-black dark:prose-strong:text-brand-cream prose-code:text-[#247EFF] prose-blockquote:border-[#FFD700] prose-blockquote:text-brand-black/80 dark:prose-blockquote:text-brand-cream/80"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n\n')
                  .map(paragraph => paragraph.trim())
                  .filter(paragraph => paragraph.length > 0)
                  .map(paragraph => `<p class="mb-4">${paragraph.replace(/\n/g, '<br>')}</p>`)
                  .join('')
              }}
            />
          </div>

          {/* Related Posts */}
          <div className={`transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <RelatedPosts 
              currentPostId={post.id} 
              category={post.category} 
              tags={post.tags || []} 
            />
          </div>

          {/* Article Footer */}
          <footer className={`mt-16 pt-8 border-t border-brand-black/20 dark:border-brand-cream/20 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <Button
                onClick={() => navigate('/blog')}
                className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base border-0"
              >
                <span 
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
                    transform: 'rotate(-1deg)',
                    display: 'inline-block'
                  }}
                >
                  Read More Stories
                </span>
              </Button>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;