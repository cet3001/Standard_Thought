import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { SectionOverlayBox } from "@/components/layout";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useBuilderStories } from "@/hooks/use-builder-stories";
import { getBlogPosts, BlogPost } from "@/lib/api";
import { ExternalLink, Clock, Tag, Quote, HelpCircle, TrendingUp, Heart, DollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Blog = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const { stories, loading } = useBuilderStories(5);
  const { stories: testimonials } = useBuilderStories(15); // Get more for testimonials
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const navigate = useNavigate();

  // Get unique categories from blog posts
  const getUniqueCategories = () => {
    const categories = blogPosts.map(post => post.category);
    return ["All", ...Array.from(new Set(categories))];
  };

  // Filter posts by selected category
  const getFilteredPosts = () => {
    if (selectedCategory === "All") {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  };

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

  // Rotate testimonials every 4 seconds
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

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
                     {/* Glass Card */}
                     <div className="relative bg-white/20 dark:bg-gray-900/25 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/30 dark:border-gray-700/40 hover:bg-white/30 dark:hover:bg-gray-900/35 hover:shadow-3xl hover:border-white/40 dark:hover:border-gray-600/50 transition-all duration-500">
                       {/* Grain texture overlay */}
                       <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlRmlsdGVyIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjQiLz4KPC9zdmc+')] pointer-events-none"></div>
                       
                       {/* Featured image or placeholder */}
                       <div className="relative h-48 bg-gradient-to-br from-gray-400/20 to-gray-600/20 dark:from-gray-600/20 dark:to-gray-800/20 overflow-hidden">
                         {post.image_url ? (
                           <img
                             src={post.image_url}
                             alt={post.title}
                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                           />
                         ) : (
                           <div className="w-full h-full flex items-center justify-center">
                             <div className="text-6xl font-permanent-marker text-brand-pearlescent-light/60 transform -rotate-12 drop-shadow-lg">
                               ST
                             </div>
                           </div>
                         )}
                         
                         {/* Glass overlay on image */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                         
                         {/* Category badge - Graffiti style */}
                         <div className="absolute top-3 left-3">
                           <div className="bg-brand-pearlescent-light/90 px-3 py-1.5 transform -rotate-2 shadow-lg backdrop-blur-sm border border-yellow-400/30 rounded-sm">
                             <span className="text-xs font-bold text-gray-900 uppercase tracking-wide font-permanent-marker drop-shadow-sm">
                               {post.category}
                             </span>
                           </div>
                         </div>

                          {/* Read time estimate */}
                          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/20">
                            <Clock size={12} className="text-brand-pearlescent-light" />
                            <span className="text-xs text-brand-pearlescent-light font-medium">
                              {Math.ceil(post.content.length / 1000)} min
                            </span>
                          </div>
                       </div>

                       {/* Content */}
                       <div className="p-6 relative">
                         {/* Typewriter-style title */}
                         <h4 className="font-bold text-xl text-white dark:text-brand-cream mb-3 font-ibm-plex-mono leading-tight group-hover:text-brand-pearlescent-light transition-colors duration-300 drop-shadow-sm">
                           {post.title}
                         </h4>

                         {/* Excerpt */}
                         <p className="text-white/80 dark:text-brand-cream/80 text-sm leading-relaxed mb-4 line-clamp-3">
                           {post.excerpt}
                         </p>

                         {/* Tags */}
                         {post.tags && post.tags.length > 0 && (
                           <div className="flex flex-wrap gap-2 mb-4">
                             {post.tags.slice(0, 3).map((tag, tagIndex) => (
                               <div
                                 key={tagIndex}
                                 className="flex items-center gap-1 bg-brand-pearlescent-light/20 backdrop-blur-sm px-2 py-1 rounded-full border border-brand-pearlescent-light/30"
                               >
                                 <Tag size={10} className="text-brand-pearlescent-light" />
                                 <span className="text-xs text-brand-pearlescent-light font-medium">
                                   {tag}
                                 </span>
                               </div>
                             ))}
                           </div>
                         )}

                         {/* Read More link */}
                         <div className="flex items-center justify-between">
                           <span className="text-sm text-brand-pearlescent-light/80">
                             {new Date(post.created_at).toLocaleDateString()}
                           </span>
                           <div className="inline-flex items-center gap-2 bg-brand-pearlescent-light text-gray-900 px-3 py-1.5 rounded-lg font-bold text-sm transform hover:scale-105 transition-all duration-200 shadow-lg border border-yellow-400/30 backdrop-blur-sm hover:bg-brand-pearlescent-light/90">
                             <span className="font-permanent-marker">Read More</span>
                             <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                           </div>
                         </div>
                       </div>

                       {/* Irregular edge effects */}
                       <div className="absolute top-3 right-3 w-6 h-6 bg-brand-pearlescent-light/20 transform rotate-45 rounded-sm opacity-60"></div>
                       <div className="absolute bottom-3 left-3 w-4 h-4 bg-white/10 transform -rotate-12 rounded-full opacity-40"></div>
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

          {/* Blog Library Section */}
          <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Grain overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
            
            {/* Section Header */}
            <div className="text-center mb-8 relative z-10">
              <div className="relative inline-block mb-6">
                <h3 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono">
                  STACKED{" "}
                  <span className="font-permanent-marker text-[#FFD700] transform -rotate-1">
                    STORIES
                  </span>
                  <br />
                  <span className="text-2xl md:text-3xl font-permanent-marker text-brand-black dark:text-brand-cream transform rotate-1">
                    The Hustler's Collection
                  </span>
                  {/* Torn paper underline */}
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-4 text-[#FFD700]/40"
                    viewBox="0 0 300 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12C12 8 22 14 32 10C42 6 52 16 62 12C72 8 82 18 92 14C102 10 112 20 122 16C132 12 142 22 152 18C162 14 172 24 182 20C192 16 202 26 212 22C222 18 232 8 242 12C252 16 262 6 272 10C282 14 292 4 298 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </h3>
              </div>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto font-kalam mb-8">
                From setbacks to stacks—browse by category and get the real game from those who built it brick by brick.
              </p>
              
              {/* Category Filter Dropdown */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Sticky note effect */}
                  <div className="absolute -inset-2 bg-yellow-200 transform rotate-1 rounded-lg shadow-lg"></div>
                  <div className="relative bg-white dark:bg-gray-900 border-2 border-[#FFD700] rounded-lg p-1 transform -rotate-1">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-[200px] border-none bg-transparent font-permanent-marker text-gray-900 dark:text-brand-cream">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-900 border-2 border-[#FFD700]">
                        {getUniqueCategories().map((category) => (
                          <SelectItem key={category} value={category} className="font-permanent-marker">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Hand-drawn arrow */}
                  <div className="absolute -right-8 -top-2 transform rotate-12">
                    <svg
                      className="w-6 h-6 text-[#FFD700]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Carousel */}
            {blogLoading ? (
              <div className="text-center py-12">
                <p className="text-brand-black/60 dark:text-brand-cream/60">Loading library...</p>
              </div>
            ) : getFilteredPosts().length > 0 ? (
              <div className="relative">
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {getFilteredPosts().map((post, index) => (
                      <CarouselItem key={post.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                         <div
                           className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                           onClick={() => navigate(`/blog/${post.slug}`)}
                         >
                           {/* Glass Card */}
                           <div className="relative h-full">
                             {/* Glass background with backdrop blur */}
                             <div className="relative bg-white/20 dark:bg-gray-900/25 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/30 dark:border-gray-700/40 transform transition-all duration-500 group-hover:bg-white/30 dark:group-hover:bg-gray-900/35 group-hover:shadow-3xl group-hover:border-white/40 dark:group-hover:border-gray-600/50">
                               
                               {/* Grain texture overlay */}
                               <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlRmlsdGVyIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjQiLz4KPC9zdmc+')] pointer-events-none"></div>
                               
                               {/* Featured image or placeholder */}
                               <div className="relative h-36 bg-gradient-to-br from-gray-400/20 to-gray-600/20 dark:from-gray-600/20 dark:to-gray-800/20 overflow-hidden">
                                 {post.image_url ? (
                                   <img
                                     src={post.image_url}
                                     alt={post.title}
                                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                                   />
                                 ) : (
                                   <div className="w-full h-full flex items-center justify-center">
                                     <div className="text-4xl font-permanent-marker text-brand-pearlescent-light/60 transform -rotate-12 drop-shadow-lg">
                                       ST
                                     </div>
                                   </div>
                                 )}
                                 
                                 {/* Glass overlay on image */}
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                 
                                 {/* Category badge - Graffiti style */}
                                 <div className="absolute top-3 left-3">
                                   <div className="bg-brand-pearlescent-light/90 px-3 py-1.5 transform -rotate-2 shadow-lg backdrop-blur-sm border border-yellow-400/30 rounded-sm">
                                     <span className="text-xs font-bold text-gray-900 uppercase tracking-wide font-permanent-marker drop-shadow-sm">
                                       {post.category}
                                     </span>
                                   </div>
                                 </div>

                                  {/* Read time */}
                                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/20">
                                    <Clock size={11} className="text-brand-pearlescent-light" />
                                    <span className="text-xs text-brand-pearlescent-light font-medium">
                                      {Math.ceil(post.content.length / 1000)}m
                                    </span>
                                  </div>
                               </div>

                               {/* Content */}
                               <div className="p-5 relative">
                                 {/* Typewriter title */}
                                 <h4 className="font-bold text-lg text-white dark:text-brand-cream mb-3 font-ibm-plex-mono leading-tight group-hover:text-brand-pearlescent-light transition-colors duration-300 line-clamp-2 drop-shadow-sm">
                                   {post.title}
                                 </h4>

                                 {/* Excerpt */}
                                 <p className="text-white/80 dark:text-brand-cream/80 text-sm leading-relaxed mb-4 line-clamp-2">
                                   {post.excerpt}
                                 </p>

                                 {/* Read More Button - Spray painted style */}
                                 <div className="inline-flex items-center gap-2 bg-brand-pearlescent-light/90 hover:bg-brand-pearlescent-light text-gray-900 px-4 py-2 rounded-lg font-bold text-sm transform hover:scale-105 transition-all duration-200 shadow-lg border border-yellow-400/30 backdrop-blur-sm">
                                   <span className="font-permanent-marker">Read Story</span>
                                   <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                                 </div>
                               </div>

                               {/* Irregular edge effect */}
                               <div className="absolute top-2 right-2 w-6 h-6 bg-brand-pearlescent-light/20 transform rotate-45 rounded-sm opacity-60"></div>
                               <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/10 transform -rotate-12 rounded-full opacity-40"></div>
                             </div>
                           </div>
                         </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Custom Navigation Arrows */}
                  {getFilteredPosts().length > 4 && (
                    <>
                      <CarouselPrevious className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-[#FFD700] hover:bg-[#FFD700]/80 border-2 border-gray-900 text-gray-900 shadow-lg rotate-3 hover:rotate-0 transition-all duration-300" />
                      <CarouselNext className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-[#FFD700] hover:bg-[#FFD700]/80 border-2 border-gray-900 text-gray-900 shadow-lg rotate-3 hover:rotate-0 transition-all duration-300" />
                    </>
                  )}
                </Carousel>

                {/* Hand-drawn instruction note */}
                <div className="absolute -bottom-8 -left-8 transform -rotate-12 hidden lg:block">
                  <div className="bg-pink-200 p-2 shadow-lg border border-pink-300 rounded">
                    <p className="font-kalam text-xs text-gray-800 leading-tight">
                      Swipe or click<br />
                      to explore ➡️
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-[#FFD700]/10 rounded-lg p-8 border border-[#FFD700]/30 transform rotate-1">
                  <p className="text-brand-black dark:text-brand-cream font-bold text-lg mb-2 font-permanent-marker">
                    No Stories in "{selectedCategory}"
                  </p>
                  <p className="text-brand-black/70 dark:text-brand-cream/70 font-kalam">
                    Try a different category or check back soon for fresh content.
                  </p>
                </div>
              </div>
            )}

            {/* Urban street elements */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEg0MFY0MEgwVjBaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPgo=')] opacity-20 transform rotate-45"></div>
          </SectionOverlayBox>

          {/* Real Builder Wins (Testimonial Strip) */}
          <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Street Cred Badge */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                {/* Graffiti-style badge */}
                <div className="bg-[#FFD700] px-6 py-3 transform -rotate-2 shadow-lg relative">
                  {/* Hand-drawn border */}
                  <svg
                    className="absolute inset-0 w-full h-full text-gray-900"
                    viewBox="0 0 150 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3L147 4L146 47L4 46Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.4"
                      strokeDasharray="2,1"
                    />
                  </svg>
                  <span className="relative font-permanent-marker text-lg text-gray-900 font-bold">
                    STREET CRED ✓
                  </span>
                </div>
              </div>
            </div>

            {/* Rotating Testimonial */}
            {testimonials.length > 0 && (
              <div className="text-center relative">
                {/* Background decorative quotes */}
                <div className="absolute -top-4 -left-4 text-[#FFD700]/20 text-6xl font-bold">
                  <Quote size={60} />
                </div>
                <div className="absolute -bottom-4 -right-4 text-[#FFD700]/20 text-6xl font-bold transform rotate-180">
                  <Quote size={60} />
                </div>

                {/* Main testimonial */}
                <div className="relative z-10 max-w-4xl mx-auto">
                  <blockquote className="text-2xl md:text-3xl font-kalam text-brand-black dark:text-brand-cream leading-relaxed mb-6 italic transform transition-all duration-500">
                    "{testimonials[currentTestimonial]?.quote}"
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="flex items-center justify-center">
                    <div className="font-comic-neue text-lg text-brand-black/80 dark:text-brand-cream/80">
                      <span className="font-bold">—{testimonials[currentTestimonial]?.name}</span>
                      <span className="text-[#FFD700] mx-2">•</span>
                      <span>{testimonials[currentTestimonial]?.city_area}</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-[#FFD700] scale-125'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-[#FFD700]/50'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Handwritten note effect */}
            <div className="absolute -bottom-6 -right-6 transform rotate-12">
              <div className="bg-yellow-200 p-3 shadow-lg">
                <p className="font-kalam text-sm text-gray-800 leading-tight">
                  Real builders<br />
                  Real wins ✨
                </p>
              </div>
            </div>

            {/* Urban texture overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5" aria-hidden="true">
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEg0MFY0MEgwVjBaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTIwIDJMMzggMjBMMjAgMzhMMiAyMEwyMCAyWiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4K')] opacity-30"></div>
            </div>
          </SectionOverlayBox>

          {/* FAQ: Real Talk About the Journey */}
          <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:15px_15px]"></div>
            
            {/* Section Header */}
            <div className="text-center mb-12 relative z-10">
              <div className="relative inline-block mb-6">
                <h3 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream relative">
                  <span className="font-permanent-marker text-[#FFD700] transform -rotate-1 mr-4">
                    REAL TALK
                  </span>
                  About the Journey
                  {/* Handwritten underline */}
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-4 text-[#FFD700]/50"
                    viewBox="0 0 400 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 15C25 12 45 8 65 10C85 12 105 8 125 12C145 16 165 8 185 12C205 16 225 12 245 15C265 18 285 10 305 14C325 18 345 12 365 16C385 20 395 18 395 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </h3>
              </div>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto font-kalam">
                The questions we all got but nobody talks about. Here's the real.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-8 relative z-10">
              
              {/* FAQ 1 */}
              <div className="group">
                <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-900/50 rounded-lg border-l-4 border-[#FFD700] hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all duration-300">
                  {/* Graffiti icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                        <TrendingUp size={24} className="text-gray-900" />
                      </div>
                      {/* Hand-drawn circle */}
                      <svg
                        className="absolute inset-0 w-full h-full text-[#FFD700]/60"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="25"
                          cy="25"
                          r="23"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="3,2"
                          opacity="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-3 font-permanent-marker transform -rotate-1">
                      "What if I keep falling off?"
                    </h4>
                    <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
                      Listen, falling off is part of the process—it's not failure, it's data. Every time you "fall off," you're learning what doesn't work for YOUR situation. 
                      <br /><br />
                      The key is building systems that work WITH your life, not against it. Start smaller than you think you need to. Can't do an hour? Do 15 minutes. Can't save $100? Save $10. 
                      <br /><br />
                      Progress isn't about perfection—it's about getting back up one more time than you fall down. Your comeback is always stronger than your setback.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="group">
                <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-900/50 rounded-lg border-l-4 border-[#FFD700] hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                        <Heart size={24} className="text-gray-900" />
                      </div>
                      <svg
                        className="absolute inset-0 w-full h-full text-[#FFD700]/60"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 25L15 15L25 25L35 15L45 25L35 35L25 25L15 35Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-3 font-permanent-marker transform rotate-1">
                      "How do I stay motivated when nothing's working?"
                    </h4>
                    <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
                      Real talk: motivation is trash. It comes and goes like the weather. What you need is momentum and community.
                      <br /><br />
                      Start documenting SMALL wins—even saving $5 counts. Connect with others on the same journey who get where you're coming from. When you can't see your own progress, they'll remind you how far you've come.
                      <br /><br />
                      And remember: "nothing's working" usually means the timeline is different than you expected, not that you're failing. The strongest trees grow slowly underground before you see them break through.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="group">
                <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-900/50 rounded-lg border-l-4 border-[#FFD700] hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        <DollarSign size={24} className="text-gray-900" />
                      </div>
                      <svg
                        className="absolute inset-0 w-full h-full text-[#FFD700]/60"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="40"
                          height="40"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.3"
                          transform="rotate(15 25 25)"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-3 font-permanent-marker transform -rotate-1">
                      "Can I really break money trauma if I've never seen wealth?"
                    </h4>
                    <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
                      Absolutely. You don't need to have seen wealth to create it—you just need to understand that money trauma is real and it's been passed down for generations.
                      <br /><br />
                      Start by recognizing the stories you tell yourself about money. "Money doesn't grow on trees," "Rich people are greedy," "We can't afford that"—these aren't facts, they're beliefs that can be changed.
                      <br /><br />
                      Every wealthy person you admire was once broke too. The difference? They changed their relationship with money first, then their bank account followed. You're not behind—you're exactly where you need to be to start building something different.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="group">
                <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-900/50 rounded-lg border-l-4 border-[#FFD700] hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        <HelpCircle size={24} className="text-gray-900" />
                      </div>
                      <svg
                        className="absolute inset-0 w-full h-full text-[#FFD700]/60"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="25,5 45,20 35,45 15,45 5,20"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-3 font-permanent-marker transform rotate-1">
                      "How do I know if this stuff actually works?"
                    </h4>
                    <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
                      Look at the receipts. These aren't theoretical concepts—they're proven strategies that work for people who started exactly where you are.
                      <br /><br />
                      Start with one thing: track your money for 30 days. Just track it. See where it goes. That simple step shows most people they have more control than they thought. From there, every other strategy becomes easier to implement.
                      <br /><br />
                      You don't have to trust us—trust the process, track your progress, and let the results speak for themselves.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Handwritten note */}
            <div className="absolute -bottom-4 -left-4 transform -rotate-6">
              <div className="bg-yellow-200 p-3 shadow-lg border border-yellow-300">
                <p className="font-kalam text-sm text-gray-800 leading-tight">
                  Keep it 💯<br />
                  Always ✨
                </p>
              </div>
            </div>
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