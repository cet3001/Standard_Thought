
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import LSIContent from "@/components/lsi-content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, CreditCard, Bot, Building } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#247EFF]" />,
      title: "Urban Investing Strategies",
      description: "Master hood financial literacy and street smart money moves for building generational wealth",
      topics: [
        "Index Fund Investing for Beginners",
        "Real Estate Investment Trusts (REITs)",
        "Micro-Investing Strategies",
        "Portfolio Diversification Techniques",
        "Risk Management for New Investors"
      ],
      ctaText: "Start Investing Today",
      ctaLink: "/blog"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#247EFF]" />,
      title: "Credit Building Mastery",
      description: "Comprehensive guide to building and repairing credit from scratch",
      topics: [
        "Credit Building from Zero",
        "Secured Credit Card Strategies",
        "Credit Utilization Optimization",
        "Credit Report Dispute Process",
        "Credit Monitoring Best Practices"
      ],
      ctaText: "Fix Your Credit",
      ctaLink: "/blog"
    },
    {
      icon: <Bot className="h-8 w-8 text-[#247EFF]" />,
      title: "AI Side Hustles",
      description: "Profitable artificial intelligence income streams and automation opportunities",
      topics: [
        "AI Content Creation Services",
        "Chatbot Development for SMBs",
        "AI-Powered Social Media Management",
        "Automated Marketing Workflows",
        "AI Image Generation Business"
      ],
      ctaText: "Launch AI Business",
      ctaLink: "/blog"
    },
    {
      icon: <Building className="h-8 w-8 text-[#247EFF]" />,
      title: "Urban Entrepreneurship",
      description: "Street smart business building and startup methodologies for urban markets",
      topics: [
        "Low-Capital Business Ideas",
        "Community-Based Marketing",
        "Urban Market Analysis",
        "Funding Sources for Minority Businesses",
        "Scaling Urban Enterprises"
      ],
      ctaText: "Build Your Business",
      ctaLink: "/blog"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#247EFF]" />,
      title: "Financial Literacy Foundation",
      description: "Essential money management skills and wealth mindset development",
      topics: [
        "Budgeting and Cash Flow Management",
        "Emergency Fund Building",
        "Debt Elimination Strategies",
        "Tax Optimization for Entrepreneurs",
        "Retirement Planning for Self-Employed"
      ],
      ctaText: "Master Money Basics",
      ctaLink: "/blog"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Resources - Complete Guide to Urban Entrepreneurship & Wealth Building"
        description="Comprehensive resources for hood financial literacy, urban investing strategies, AI side hustles, and generational wealth building for beginners. Master street smart money moves."
        keywords="hood financial literacy, urban investing strategies, street smart money moves, generational wealth building for beginners, AI side hustles, urban entrepreneurship, credit building strategies"
        url="/resources"
        type="website"
      />
      
      <LSIContent primaryKeyword="comprehensive business resources" context="business-strategy" />
      <FeaturedSnippets topic="wealth-building" />
      
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <HeaderHierarchy level={1} className="max-w-4xl mx-auto">
              Complete Resource Hub for <span className="text-[#247EFF]">Urban Entrepreneurs</span>
            </HeaderHierarchy>
            
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-3xl mx-auto mb-8">
              Master <strong>hood financial literacy</strong>, <strong>urban investing strategies</strong>, and <strong>street smart money moves</strong> with our comprehensive guide to <strong>generational wealth building for beginners</strong>.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {category.icon}
                    <div>
                      <CardTitle className="text-[#0A0A0A] dark:text-brand-cream">
                        <HeaderHierarchy level={2} className="mb-0">
                          {category.title}
                        </HeaderHierarchy>
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <HeaderHierarchy level={3} className="mb-4">
                    Key Topics Covered:
                  </HeaderHierarchy>
                  
                  <ul className="space-y-2 mb-6">
                    {category.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-[#0A0A0A]/80 dark:text-brand-cream/80">
                        <div className="w-2 h-2 bg-[#247EFF] rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={category.ctaLink}
                    className="inline-flex items-center px-4 py-2 bg-[#247EFF] text-white rounded-lg hover:bg-[#0057FF] transition-colors"
                  >
                    {category.ctaText}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Guides Section */}
          <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 mb-16">
            <HeaderHierarchy level={2} className="text-center mb-8">
              Featured Wealth Building Guides
            </HeaderHierarchy>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "From $0 to $10K: Urban Investing Blueprint",
                  description: "Step-by-step guide to building your first $10,000 through street smart money moves",
                  tags: ["Investing", "Wealth Building"]
                },
                {
                  title: "Credit Score Transformation: 90-Day Plan",
                  description: "Proven strategies to increase your credit score by 100+ points in 3 months",
                  tags: ["Credit Building", "Financial Recovery"]
                },
                {
                  title: "AI Business Launch Kit",
                  description: "Complete framework for starting profitable AI side hustles from scratch",
                  tags: ["AI Hustles", "Entrepreneurship"]
                }
              ].map((guide, index) => (
                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <HeaderHierarchy level={3} className="mb-3">
                    {guide.title}
                  </HeaderHierarchy>
                  
                  <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-4">
                    {guide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-[#247EFF]/20 text-[#247EFF]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-[#247EFF]/10 rounded-3xl p-12">
            <HeaderHierarchy level={2} className="mb-4">
              Ready to Build Your Legacy?
            </HeaderHierarchy>
            
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8 max-w-2xl mx-auto">
              Join 1000+ urban entrepreneurs mastering <strong>generational wealth building for beginners</strong> with proven frameworks and community support.
            </p>
            
            <Link 
              to="/#newsletter"
              className="inline-flex items-center px-8 py-4 bg-[#247EFF] text-white rounded-3xl hover:bg-[#0057FF] transition-colors font-semibold"
            >
              Get Your Free Playbook
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
