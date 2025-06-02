import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Search, Calendar, ArrowUp } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", "Mindset", "Strategy", "Networking", "Finance", "Leadership"];

  const blogPosts = [
    {
      id: 1,
      title: "From Zero to CEO: The Mindset Shift That Changes Everything",
      excerpt: "Discover the psychological frameworks that separate those who dream from those who build. It's not about what you have—it's about how you think.",
      image: "/placeholder.svg",
      date: "2024-01-15",
      category: "Mindset",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The $1M Revenue Blueprint: Building Without Venture Capital",
      excerpt: "How three entrepreneurs built million-dollar businesses using nothing but creativity, hustle, and strategic partnerships. No investors required.",
      image: "/placeholder.svg",
      date: "2024-01-12",
      category: "Strategy",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Network Like Your Life Depends On It (Because It Does)",
      excerpt: "The relationships you build today become the opportunities you'll have tomorrow. Master the art of authentic connection in the digital age.",
      image: "/placeholder.svg",
      date: "2024-01-10",
      category: "Networking",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Psychology of Wealth: Why Most People Stay Broke",
      excerpt: "It's not about income—it's about mindset. Understand the mental models that create and maintain wealth across generations.",
      image: "/placeholder.svg",
      date: "2024-01-08",
      category: "Finance",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Leading Through Uncertainty: Lessons from Crisis",
      excerpt: "When everything is unclear, true leaders emerge. How to make decisions, inspire teams, and drive growth when the future is uncertain.",
      image: "/placeholder.svg",
      date: "2024-01-05",
      category: "Leadership",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Building Systems That Scale: The Operations Advantage",
      excerpt: "Great ideas don't scale—great systems do. Learn how to build operational frameworks that grow with your vision.",
      image: "/placeholder.svg",
      date: "2024-01-03",
      category: "Strategy",
      readTime: "9 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-black dark:text-brand-cream">
              Stories of <span className="text-accent">Legacy</span>
            </h1>
            <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 leading-relaxed">
              Real insights from real builders. No theory, no fluff—just actionable wisdom 
              from entrepreneurs who've turned dreams into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 border-b border-accent/20 bg-white/80 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-black/60 dark:text-brand-cream/60 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 rounded-3xl border-accent/20 focus:border-accent text-lg bg-white/80 dark:bg-brand-black/80 text-brand-black dark:text-brand-cream"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-2xl px-6 py-2 ${
                    selectedCategory === category
                      ? "bg-accent hover:bg-accent/90 text-black"
                      : "border-accent/20 text-accent hover:bg-accent hover:text-black"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="card-hover bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border-accent/20 rounded-3xl overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-black px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors text-brand-black dark:text-brand-cream">
                    {post.title}
                  </h3>
                  <p className="text-brand-black/70 dark:text-brand-cream/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-brand-black/60 dark:text-brand-cream/60">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-accent group-hover:text-black transition-all rounded-2xl text-brand-black dark:text-brand-cream"
                  >
                    Read Story
                    <ArrowUp className="ml-2 h-4 w-4 rotate-45 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 mb-4">No articles found matching your criteria.</p>
              <Button 
                onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-black"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
