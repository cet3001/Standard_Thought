
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, ArrowUp } from "lucide-react";

const BlogShowcase = () => {
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
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stories That <span className="text-accent">Inspire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real insights from real builders. No fluff, no theory—just the raw truth about creating something from nothing.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="card-hover bg-card border-border/50 rounded-3xl overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
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
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
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
                  className="w-full group-hover:bg-accent group-hover:text-black transition-all rounded-2xl"
                >
                  Read Story
                  <ArrowUp className="ml-2 h-4 w-4 rotate-45 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-black font-medium px-8 py-4 rounded-3xl"
          >
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
