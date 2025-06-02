
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, Calendar, Clock } from "lucide-react";

const BlogShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "From Zero to CEO: The Mindset That Changes Everything",
      excerpt: "How three entrepreneurs built empires using nothing but street smarts and relentless vision. The psychology behind breakthrough success.",
      image: "/placeholder.svg",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Mindset"
    },
    {
      id: 2,
      title: "The Million-Dollar Network: Building Relationships That Pay",
      excerpt: "Your network determines your net worth. Learn the underground strategies successful people use to build powerful connections.",
      image: "/placeholder.svg",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "Networking"
    },
    {
      id: 3,
      title: "The Art of the Hustle: When Passion Meets Strategy",
      excerpt: "Raw talent isn't enough. Discover how to channel your drive into systematic wealth-building that lasts generations.",
      image: "/placeholder.svg",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Strategy"
    }
  ];

  return (
    <section className="py-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black dark:text-brand-cream">
            Stories of <span className="text-accent">Legacy</span>
          </h2>
          <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 max-w-3xl mx-auto">
            Real insights from real builders. No theory, no fluff—just raw wisdom from entrepreneurs 
            who turned dreams into generational wealth.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className={`card-hover bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-accent/20 rounded-3xl overflow-hidden group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
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

        {/* View All Button */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 rounded-3xl"
          >
            Explore All Stories
            <ArrowUp className="ml-2 h-5 w-5 rotate-45" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
