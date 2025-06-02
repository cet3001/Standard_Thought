import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle, Star, ArrowUp } from "lucide-react";

const Sales = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      title: "The Legacy Builder's Playbook",
      price: "$97",
      originalPrice: "$197",
      description: "The complete blueprint for building a million-dollar business from scratch. 200+ pages of frameworks, strategies, and real case studies.",
      features: [
        "Complete business building framework",
        "50+ proven strategies and templates",
        "Real case studies from successful entrepreneurs",
        "Access to exclusive community",
        "Monthly live Q&A sessions",
        "Lifetime updates"
      ],
      image: "/placeholder.svg",
      popular: true
    },
    {
      id: 2,
      title: "The Mindset Mastery Course",
      price: "$47",
      originalPrice: "$97",
      description: "Transform your thinking patterns and develop the psychological foundations of success. Video course with workbooks and exercises.",
      features: [
        "6 weeks of mindset training",
        "20+ video lessons",
        "Interactive workbooks",
        "Meditation and visualization guides",
        "Progress tracking tools",
        "Certificate of completion"
      ],
      image: "/placeholder.svg",
      popular: false
    },
    {
      id: 3,
      title: "VIP Mentorship Program",
      price: "$497",
      originalPrice: "$997",
      description: "Direct access to our founders and proven entrepreneurs. Monthly group calls, personal feedback, and accelerated growth.",
      features: [
        "Monthly 1-on-1 mentorship calls",
        "Weekly group mastermind sessions",
        "Direct access via private Slack",
        "Business plan review and feedback",
        "Network introductions",
        "Priority support for 6 months"
      ],
      image: "/placeholder.svg",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Marcus Johnson",
      title: "Built $2M Agency",
      content: "The strategies in the Legacy Builder's Playbook helped me scale from freelancer to agency owner in 18 months. This is the real deal.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      title: "Tech Startup Founder",
      content: "The mindset course completely changed how I approach challenges. I finally understand what separates successful entrepreneurs from everyone else.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      title: "Real Estate Investor",
      content: "The mentorship program gave me the confidence and connections I needed to close my first $500K deal. Best investment I've ever made.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-black dark:text-brand-cream">
              Build Your <span className="text-accent">Legacy</span> Today
            </h1>
            <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 leading-relaxed mb-8">
              Everything you need to go from idea to income. Proven frameworks, 
              real strategies, and direct access to entrepreneurs who've built what you want to build.
            </p>
            <div className="bg-accent/10 rounded-3xl p-6 inline-block">
              <p className="text-lg font-semibold text-accent">
                🔥 Limited Time: 50% Off All Programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white/80 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className={`relative bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm border rounded-3xl overflow-hidden transition-all duration-1000 hover:scale-105 ${
                  product.popular 
                    ? 'border-accent shadow-lg shadow-accent/20' 
                    : 'border-accent/20'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-black px-6 py-2 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <CardHeader className="p-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-brand-black dark:text-brand-cream">{product.title}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-accent">{product.price}</span>
                      <span className="text-lg text-brand-black/60 dark:text-brand-cream/60 line-through">{product.originalPrice}</span>
                    </div>
                    <p className="text-brand-black/70 dark:text-brand-cream/70">{product.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle size={20} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-brand-black dark:text-brand-cream">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-4 rounded-2xl font-semibold ${
                      product.popular
                        ? 'bg-accent hover:bg-accent/90 text-black'
                        : 'bg-brand-black hover:bg-brand-black/90 text-brand-cream dark:bg-brand-cream dark:hover:bg-brand-cream/90 dark:text-brand-black'
                    }`}
                  >
                    Get Access Now
                    <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-brand-black dark:text-brand-cream">Success Stories</h2>
            <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real entrepreneurs are saying about their results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border-accent/20 rounded-3xl p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-brand-black/70 dark:text-brand-cream/70 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-brand-black dark:text-brand-cream">{testimonial.name}</div>
                    <div className="text-sm text-accent">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white/80 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6 text-brand-black dark:text-brand-cream">Ready to Start Building?</h2>
            <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 mb-8">
              Join thousands of entrepreneurs who've chosen to stop dreaming and start building. 
              Your legacy begins with a single decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 rounded-3xl"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-black font-semibold px-8 py-4 rounded-3xl"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sales;
