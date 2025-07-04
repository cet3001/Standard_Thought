import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { SectionOverlayBox } from "@/components/layout";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useBuilderStories } from "@/hooks/use-builder-stories";
import { getBlogPosts, BlogPost } from "@/lib/api";
import { ExternalLink, Clock, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const { stories, loading } = useBuilderStories(5);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // Fetch blog posts
    const fetchBlogPosts = async () => {
      try {
        setBlogLoading(true);
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setBlogLoading(false);
      }
    };
    
    fetchBlogPosts();
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Blog", url: "https://www.standardthought.com/blog", position: 2 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
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
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <SEO
        title="Out the Mud: Real Builder Stories | Standardthought - First-Gen Entrepreneur Success Stories"
        description="Real stories from first-gen hustlers and underestimated creators who built wealth brick by brick. No trust funds, no shortcuts—just proven blueprints from people who figured it out."
        keywords="first-gen entrepreneur stories, urban wealth building success stories, hood to wealth stories, self-made entrepreneur stories, building from nothing success stories"
        url="/blog"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Hero Section */}
          <SectionOverlayBox className={`mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#FFD700]/20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-[#FFD700]/15 animate-float" style={{ animationDelay: '1.5s' }}></div>
              </div>

            <div className="text-center relative z-10">
              {/* Main Headline */}
              <div className="relative inline-block mb-6">
                <h1 className="text-5xl md:text-7xl font-black text-brand-black dark:text-brand-cream mb-4 relative">
                  Out the{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-permanent-marker text-[#FFD700] transform -rotate-1 inline-block">
                      Mud
                    </span>
                    {/* Graffiti underline */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 text-[#FFD700]/60"
                      viewBox="0 0 120 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 15C8 12 15 8 25 10C35 12 45 8 55 12C65 16 75 8 85 12C95 16 105 12 115 15"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-brand-cream">
                  Real{" "}
                  <span className="relative inline-block">
                    <span className="font-permanent-marker text-[#FFD700] transform rotate-1">
                      Builder Stories
                    </span>
                    {/* Graffiti underline */}
                    <svg
                      className="absolute -bottom-1 left-0 w-full h-3 text-[#FFD700]/50"
                      viewBox="0 0 140 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12C12 8 22 10 32 8C42 6 52 12 62 8C72 4 82 12 92 8C102 4 112 10 132 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </h2>
              </div>

              {/* Subhead */}
              <p className="text-xl md:text-2xl text-brand-black/80 dark:text-brand-cream/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                No trust funds. No shortcuts. Just real blueprints from folks who built it brick by brick.
              </p>

              {/* Pull Quote */}
              <div className="relative bg-gradient-to-r from-[#FFD700]/10 to-[#FFD700]/10 rounded-xl p-6 border-l-4 border-[#FFD700] max-w-3xl mx-auto">
                <blockquote className="text-lg md:text-xl font-medium text-brand-black dark:text-brand-cream italic">
                  "If you had to figure it out with nothing but vision and grind, these stories are for you."
                </blockquote>
              </div>
            </div>
          </SectionOverlayBox>

          {/* Featured Stories Carousel/Grid - RAW PICKS */}
          <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="relative inline-block mb-6">
                <h3 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream relative">
                  <span className="font-permanent-marker text-[#FFD700] transform -rotate-1 mr-4">
                    RAW
                  </span>
                  PICKS
                  {/* Handwritten underline */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD700]/60"
                    viewBox="0 0 200 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12C15 8 25 10 35 8C45 6 55 12 65 8C75 4 85 12 95 8C105 4 115 10 125 8C135 6 145 12 155 8C165 4 175 10 185 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </h3>
              </div>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                These are the stories that hit different. Real builders who turned struggle into success.
              </p>
            </div>

            {/* Stories Grid */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-brand-black/60 dark:text-brand-cream/60">Loading stories...</p>
              </div>
            ) : stories.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                  <div
                    key={story.id}
                    className={`group relative transform transition-all duration-500 hover:scale-105 ${
                      index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                    } hover:rotate-0`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Polaroid-style frame */}
                    <div className="relative bg-white dark:bg-gray-100 p-4 pb-8 shadow-xl rotate-0 hover:shadow-2xl transition-all duration-300">
                      {/* Torn paper edge effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent opacity-30"></div>
                      
                      {/* Photo area */}
                      <div className="relative aspect-square mb-4 bg-gray-200 overflow-hidden">
                        {story.avatar_url ? (
                          <img
                            src={story.avatar_url}
                            alt={`${story.name} from ${story.city_area}`}
                            className="w-full h-full object-cover filter sepia-[0.3] contrast-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                            <span className="text-gray-600 font-bold text-4xl">
                              {story.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        
                        {/* Vintage photo overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-yellow-200/10"></div>
                      </div>

                      {/* Story info */}
                      <div className="text-center space-y-3">
                        {/* Name and location */}
                        <div className="space-y-1">
                          <h4 className="font-bold text-xl text-gray-900 font-permanent-marker transform -rotate-1">
                            {story.name}
                          </h4>
                          <p className="text-sm text-gray-600 font-medium">
                            {story.city_area}
                          </p>
                        </div>

                        {/* Handwritten pull-quote */}
                        <blockquote className="text-sm italic text-gray-700 font-comic-neue leading-relaxed min-h-[3rem] flex items-center justify-center">
                          "{story.quote}"
                        </blockquote>
                      </div>

                      {/* Sticky note effect with CTA */}
                      <div className="absolute -bottom-2 -right-2 bg-[#FFD700] p-2 transform rotate-12 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                        <button className="flex items-center gap-1 text-xs font-bold text-gray-900 hover:text-gray-700 transition-colors">
                          <span>Read Story</span>
                          <ExternalLink size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Handwritten caption */}
                    <div className="absolute -bottom-8 left-4 transform rotate-2">
                      <p className="font-kalam text-sm text-brand-black/60 dark:text-brand-cream/60">
                        Real builder ↗
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-brand-black/60 dark:text-brand-cream/60">No stories available yet.</p>
              </div>
            )}

            {/* Urban texture overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5" aria-hidden="true">
              <div className="absolute top-10 right-10 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEg0MFY0MEgwVjBaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTIwIDJMMzggMjBMMjAgMzhMMiAyMEwyMCAyWiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4K')] opacity-30"></div>
            </div>
          </SectionOverlayBox>

          {/* Latest Stories Blog Grid */}
          <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="relative inline-block mb-6">
                <h3 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono">
                  LATEST{" "}
                  <span className="font-permanent-marker text-[#FFD700] transform rotate-1">
                    STORIES
                  </span>
                  {/* Typewriter underline */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-[#FFD700]/40"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0" y="8" width="300" height="2" fill="currentColor" opacity="0.6" />
                    <rect x="0" y="10" width="280" height="1" fill="currentColor" opacity="0.3" />
                  </svg>
                </h3>
              </div>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                Fresh blueprints and real talk from builders making moves in the streets and boardrooms.
              </p>
            </div>

            {/* Blog Posts Grid */}
            {blogLoading ? (
              <div className="text-center py-12">
                <p className="text-brand-black/60 dark:text-brand-cream/60">Loading latest stories...</p>
              </div>
            ) : blogPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Card */}
                    <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      {/* Urban texture overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFD700]/5 to-transparent opacity-50"></div>
                      
                      {/* Featured image or placeholder */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                        {post.image_url ? (
                          <img
                            src={post.image_url}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-6xl font-permanent-marker text-[#FFD700]/60 transform -rotate-12">
                              ST
                            </div>
                          </div>
                        )}
                        
                        {/* Category badge - hand-drawn style */}
                        <div className="absolute top-3 left-3">
                          <div className="relative bg-[#FFD700] px-3 py-1 transform -rotate-2 shadow-lg">
                            {/* Hand-drawn border effect */}
                            <svg
                              className="absolute inset-0 w-full h-full text-gray-900"
                              viewBox="0 0 100 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 2L98 3L97 28L3 27Z"
                                stroke="currentColor"
                                strokeWidth="1"
                                fill="none"
                                opacity="0.3"
                              />
                            </svg>
                            <span className="relative text-xs font-bold text-gray-900 uppercase tracking-wide">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Read time estimate */}
                        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                          <Clock size={12} className="text-white" />
                          <span className="text-xs text-white">
                            {Math.ceil(post.content.length / 1000)} min
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 relative">
                        {/* Typewriter-style title */}
                        <h4 className="font-bold text-xl text-brand-black dark:text-brand-cream mb-3 font-ibm-plex-mono leading-tight group-hover:text-[#FFD700] dark:group-hover:text-[#FFD700] transition-colors duration-200">
                          {post.title}
                        </h4>

                        {/* Excerpt */}
                        <p className="text-brand-black/70 dark:text-brand-cream/70 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                              <div
                                key={tagIndex}
                                className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"
                              >
                                <Tag size={10} className="text-[#FFD700]" />
                                <span className="text-xs text-brand-black dark:text-brand-cream font-medium">
                                  {tag}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Read More link */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-brand-black/50 dark:text-brand-cream/50">
                            {new Date(post.created_at).toLocaleDateString()}
                          </span>
                          <div className="flex items-center gap-1 text-[#FFD700] group-hover:translate-x-1 transition-transform duration-200">
                            <span className="text-sm font-bold">Read More</span>
                            <ExternalLink size={14} />
                          </div>
                        </div>
                      </div>

                      {/* Torn paper effect at bottom */}
                      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-[#FFD700]/10 rounded-lg p-8 border border-[#FFD700]/30">
                  <p className="text-brand-black dark:text-brand-cream font-bold text-lg mb-2">
                    Stories Coming Soon
                  </p>
                  <p className="text-brand-black/70 dark:text-brand-cream/70">
                    We're working on some fire content. Check back soon for real builder stories and blueprints.
                  </p>
                </div>
              </div>
            )}
          </SectionOverlayBox>

          {/* Coming Soon Content */}
          <SectionOverlayBox className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-black dark:text-brand-cream mb-4">
                Real Stories Coming Soon
              </h3>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 mb-6">
                We're collecting authentic stories from builders who made it out the struggle. 
                First-gen entrepreneurs, street-smart hustlers, and folks who turned vision into reality.
              </p>
              <div className="bg-[#FFD700]/20 rounded-lg p-4 border border-[#FFD700]/30">
                <p className="text-brand-black dark:text-brand-cream font-medium">
                  Got a story to share? Your journey could inspire the next builder.
                </p>
              </div>
            </div>
          </SectionOverlayBox>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;