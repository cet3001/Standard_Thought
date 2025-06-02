
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Clock, Star } from "lucide-react";

const Sales = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#247EFF]/10 animate-float"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#D4AF37]/20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center bg-[#247EFF]/10 rounded-full px-6 py-3 mb-6">
                <Clock className="mr-2 h-5 w-5 text-[#247EFF]" />
                <span className="text-lg font-semibold text-[#247EFF]">Coming Soon</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
              Something <span className="text-[#247EFF]">Extraordinary</span> Is Coming
            </h1>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed mb-8">
              We're crafting something special for the Standard Thought community. 
              Be the first to know when we launch our exclusive programs and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="py-24 bg-white/90 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm border-[#247EFF]/20 rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <Mail className="mx-auto h-16 w-16 text-[#247EFF] mb-4" />
                  <h2 className="text-3xl font-bold mb-4 text-[#0A0A0A] dark:text-brand-cream">
                    Get Early Access
                  </h2>
                  <p className="text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70">
                    Join our exclusive waitlist and be among the first to access our premium content, 
                    courses, and mentorship programs when they launch.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-4 rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] text-lg bg-white/80 dark:bg-brand-black/80 text-[#0A0A0A] dark:text-brand-cream"
                    required
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#D4AF37]/30 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    Notify Me When It's Ready
                  </Button>
                </form>

                <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 mt-4">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Coming Section */}
      <section className="py-24 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">What to Expect</h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
              We're building something that will transform how you approach entrepreneurship and wealth building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Premium Courses",
                description: "In-depth training programs covering everything from mindset to million-dollar strategies."
              },
              {
                icon: "🎯",
                title: "1-on-1 Mentorship",
                description: "Direct access to successful entrepreneurs who've built what you want to build."
              },
              {
                icon: "🤝",
                title: "Exclusive Community",
                description: "Connect with like-minded builders and access our private network of game-changers."
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-[#247EFF]/20 rounded-3xl p-8 text-center transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A0A0A] dark:text-brand-cream">{feature.title}</h3>
                  <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white/90 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">Trusted by Builders</h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70">
              Join thousands who are already part of the Standard Thought movement.
            </p>
          </div>

          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#247EFF] mb-2">5,000+</div>
              <div className="text-[#0A0A0A]/70 dark:text-brand-cream/70">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">$50M+</div>
              <div className="text-[#0A0A0A]/70 dark:text-brand-cream/70">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#247EFF] mb-2">98%</div>
              <div className="text-[#0A0A0A]/70 dark:text-brand-cream/70">Success Rate</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-[#D4AF37] fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold text-[#0A0A0A] dark:text-brand-cream">4.9/5 from our community</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sales;
