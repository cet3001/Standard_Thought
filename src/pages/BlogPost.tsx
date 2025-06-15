import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import CommentsSection from "@/components/comments-section";
import BlogPostActions from "@/components/blog-post-actions";
import BlogPostHeader from "@/components/blog-post/blog-post-header";
import BlogPostContent from "@/components/blog-post/blog-post-content";
import BlogPostShare from "@/components/blog-post/blog-post-share";
import BlogPostLoading from "@/components/blog-post/blog-post-loading";
import BlogPostError from "@/components/blog-post/blog-post-error";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { trackBlogRead } from "@/components/analytics";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";
import BreadcrumbSchema from "@/components/breadcrumb-schema";

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
  comments_enabled: boolean;
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
      
      // Track blog read
      trackBlogRead(data.title, data.slug);
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

  const getWordCount = (content: string) => {
    return content.split(' ').length;
  };

  const handlePostDeleted = () => {
    navigate("/blog");
  };

  if (loading) {
    return <BlogPostLoading />;
  }

  if (error || !post) {
    return <BlogPostError error={error || 'Unknown error'} slug={slug} />;
  }

  // Generate unique meta description and keywords for the blog post
  const metaDescription = post.meta_description || 
    `${post.excerpt.slice(0, 140)}... | Read this ${post.category.toLowerCase()} story on Standardthought - Building legacy from nothing.`;
  
  const metaKeywords = post.meta_keywords || 
    `${post.tags.join(', ')}, ${post.category.toLowerCase()}, standardthought blog, urban entrepreneurship`;

  const pageTitle = `${post.title} | Standardthought Blog`;
  const wordCount = getWordCount(post.content);

  return (
    <>
      <SEO 
        title={pageTitle}
        description={metaDescription}
        keywords={metaKeywords}
        image={post.image_url || undefined}
        url={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.created_at}
        modifiedTime={post.created_at}
        category={post.category}
        tags={post.tags}
        author="Standardthought"
        wordCount={wordCount}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema />

      <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
        <Navigation />
        
        {/* Breadcrumb Navigation */}
        <div className="pt-24">
          <BreadcrumbNavigation />
        </div>
        
        <article className="pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Back Navigation */}
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/blog")}
                className="text-[#247EFF] hover:text-[#0057FF] p-0"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Button>
              
              {/* Admin Actions */}
              <BlogPostActions
                postId={post.id}
                postTitle={post.title}
                postSlug={post.slug}
                onDelete={handlePostDeleted}
              />
            </div>

            {/* Article Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-[#247EFF]/20">
              <BlogPostHeader
                category={post.category}
                featured={post.featured}
                title={post.title}
                excerpt={post.excerpt}
                createdAt={post.created_at}
                readTime={getReadTime(post.content)}
              />
              <BlogPostShare title={post.title} />
            </div>

            {/* Article Content */}
            <BlogPostContent
              content={post.content}
              imageUrl={post.image_url}
              title={post.title}
              tags={post.tags}
            />

            {/* Share Section */}
            <BlogPostShare title={post.title} showFullSection />

            {/* Comments Section */}
            <CommentsSection 
              blogPostId={post.id} 
              commentsEnabled={post.comments_enabled || false} 
            />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
