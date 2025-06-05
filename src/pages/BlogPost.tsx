
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  tags: string[];
  featured: boolean;
  created_at: string;
  meta_description: string | null;
  meta_keywords: string | null;
  slug: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlogPost(slug);
    }
  }, [slug]);

  const fetchBlogPost = async (postSlug: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', postSlug)
        .eq('published', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching blog post:', error);
        setError('Failed to load blog post');
        return;
      }

      if (!data) {
        setError('Blog post not found');
        return;
      }

      setPost(data);
    } catch (error) {
      console.error('Unexpected error:', error);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const sharePost = async (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          toast.success('Link copied to clipboard!');
          return;
        } catch (err) {
          toast.error('Failed to copy link');
          return;
        }
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="animate-pulse">
              <div className="h-4 bg-[#247EFF]/20 rounded w-20 mb-6"></div>
              <div className="h-12 bg-[#247EFF]/20 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-[#247EFF]/20 rounded w-1/2 mb-8"></div>
              <div className="h-64 bg-[#247EFF]/20 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-[#247EFF]/20 rounded"></div>
                <div className="h-4 bg-[#247EFF]/20 rounded w-5/6"></div>
                <div className="h-4 bg-[#247EFF]/20 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center py-16">
              <h1 className="text-3xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
                {error === 'Blog post not found' ? 'Story Not Found' : 'Something Went Wrong'}
              </h1>
              <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8">
                {error === 'Blog post not found' 
                  ? "The story you're looking for doesn't exist or has been removed."
                  : "We encountered an error loading this story. Please try again."
                }
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => navigate("/blog")}
                  className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Stories
                </Button>
                {error !== 'Blog post not found' && (
                  <Button
                    onClick={() => window.location.reload()}
                    variant="outline"
                    className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
                  >
                    Try Again
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Standardthought</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        <meta name="keywords" content={post.meta_keywords || post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta_description || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        {post.image_url && <meta property="og:image" content={post.image_url} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.meta_description || post.excerpt} />
        {post.image_url && <meta name="twitter:image" content={post.image_url} />}
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.meta_description || post.excerpt,
            "image": post.image_url,
            "datePublished": post.created_at,
            "author": {
              "@type": "Organization",
              "name": "Standardthought"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Standardthought"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
        <Navigation />
        
        <article className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Back Navigation */}
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="text-[#247EFF] hover:text-[#0057FF] mb-8 p-0"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Button>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-[#247EFF] text-white px-4 py-2 text-sm font-medium hover:bg-[#247EFF]">
                  {post.category}
                </Badge>
                {post.featured && (
                  <Badge className="bg-brand-cream text-[#0A0A0A] px-4 py-2 text-sm font-medium hover:bg-brand-cream dark:bg-brand-black dark:text-brand-cream">
                    Featured
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-[#247EFF]/20">
                <div className="flex items-center gap-6 text-[#0A0A0A]/70 dark:text-brand-cream/70">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{new Date(post.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{getReadTime(post.content)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => sharePost('copy')}
                    className="text-[#0A0A0A]/70 dark:text-brand-cream/70 hover:text-[#247EFF]"
                  >
                    <Share2 size={18} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => sharePost('twitter')}
                    className="text-[#0A0A0A]/70 dark:text-brand-cream/70 hover:text-[#247EFF]"
                  >
                    <Twitter size={18} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => sharePost('facebook')}
                    className="text-[#0A0A0A]/70 dark:text-brand-cream/70 hover:text-[#247EFF]"
                  >
                    <Facebook size={18} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => sharePost('linkedin')}
                    className="text-[#0A0A0A]/70 dark:text-brand-cream/70 hover:text-[#247EFF]"
                  >
                    <Linkedin size={18} />
                  </Button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {post.image_url && (
              <div className="mb-12">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-3xl"
                  loading="lazy"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-[#0A0A0A] dark:text-brand-cream">
              <div className="whitespace-pre-wrap leading-relaxed text-lg">
                {post.content}
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[#247EFF]/20">
                <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-[#247EFF]/20 text-[#247EFF] hover:bg-[#247EFF] hover:text-white px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-[#247EFF]/20 text-center">
              <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4">
                Found this story helpful? Share it with others
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => sharePost('twitter')}
                  className="bg-[#1DA1F2] hover:bg-[#0d8bd9] text-white"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
                <Button
                  onClick={() => sharePost('facebook')}
                  className="bg-[#4267B2] hover:bg-[#365899] text-white"
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
                <Button
                  onClick={() => sharePost('linkedin')}
                  className="bg-[#0077B5] hover:bg-[#005582] text-white"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
