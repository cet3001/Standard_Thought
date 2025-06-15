
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet";
import { BlogGridSkeleton } from "@/components/blog-skeleton";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";
import BlogHero from "@/components/blog/blog-hero";
import BlogSearchFilter from "@/components/blog/blog-search-filter";
import BlogGrid from "@/components/blog/blog-grid";
import BlogEmptyState from "@/components/blog/blog-empty-state";
import BlogErrorState from "@/components/blog/blog-error-state";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  created_at: string;
  slug: string;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      console.log('Fetching blog posts...');
      setError(null);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load stories. Please try again.');
      } else {
        console.log('Blog posts fetched:', data);
        setBlogPosts(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePostDeleted = () => {
    fetchBlogPosts();
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  // Get unique categories from posts
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Builder Stories: Real Success From Nothing | Standardthought</title>
        <meta name="description" content="Raw blueprints from entrepreneurs who built generational wealth from scratch. No theory, just proven strategies from people who made it out the struggle." />
        <meta name="keywords" content="builder stories, entrepreneurship success stories, urban entrepreneur journeys, wealth building strategies, business building blueprints, startup success stories, hustle mentality, self-made millionaires, generational wealth creation, entrepreneur motivation" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Builder Stories: Real Success From Nothing | Standardthought" />
        <meta property="og:description" content="Raw blueprints from entrepreneurs who built generational wealth from scratch. No theory, just proven strategies from people who made it out the struggle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.standardthought.com/blog" />
        <meta property="og:image" content="https://www.standardthought.com/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Builder Stories - Real Success From Nothing" />
        <meta property="og:site_name" content="Standardthought" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@standardthought" />
        <meta name="twitter:title" content="Builder Stories: Real Success From Nothing" />
        <meta name="twitter:description" content="Raw blueprints from entrepreneurs who built generational wealth from scratch. Proven strategies from people who made it out the struggle." />
        <meta name="twitter:image" content="https://www.standardthought.com/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png" />
        <meta name="twitter:image:alt" content="Builder Stories - Real Success From Nothing" />
        
        {/* Additional Meta Tags */}
        <link rel="canonical" href="https://www.standardthought.com/blog" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      </Helmet>

      <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
        <Navigation />
        
        {/* Breadcrumb Navigation */}
        <div className="pt-24">
          <BreadcrumbNavigation />
        </div>
        
        {/* Hero Section */}
        <BlogHero isVisible={isVisible} />

        {/* Search and Filter Section */}
        <BlogSearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Blog Grid */}
        <section className="py-24 bg-brand-cream dark:bg-brand-black">
          <div className="container mx-auto px-6">
            {loading ? (
              <BlogGridSkeleton />
            ) : error ? (
              <BlogErrorState error={error} onRetry={fetchBlogPosts} />
            ) : blogPosts.length === 0 ? (
              <BlogEmptyState />
            ) : filteredPosts.length === 0 ? (
              <BlogEmptyState isFiltered onClearFilters={handleClearFilters} />
            ) : (
              <BlogGrid posts={filteredPosts} onPostDeleted={handlePostDeleted} />
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
