
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, ChevronDown, ChevronRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import TopicClusterNavigation from "./topic-cluster-navigation";

interface BlogSearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const BlogSearchFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}: BlogSearchFilterProps) => {
  const navigate = useNavigate();
  const { isAdmin, user, loading: authLoading } = useAuth();
  const [showTopicClusters, setShowTopicClusters] = useState(false);
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  // Core content pillars with subcategories
  const contentPillars = [
    {
      name: "Mindset Mastery",
      subcategories: ["Mindset", "First-Gen Success", "Wealth Psychology", "Financial Confidence"]
    },
    {
      name: "Strategic Hustle", 
      subcategories: ["AI Side Hustles", "Bootstrapping", "Print-on-Demand", "Side Hustle Scaling", "Entrepreneurship"]
    },
    {
      name: "Legacy Building",
      subcategories: ["Investment Strategy", "Wealth Building", "Credit Building", "Financial Literacy", "Generational Wealth"]
    }
  ];

  // Get all available categories from the pillars and add "All"
  const allPillarCategories = ["All", ...contentPillars.flatMap(pillar => [pillar.name, ...pillar.subcategories])];

  const handlePillarClick = (pillarName: string) => {
    if (selectedCategory === pillarName) {
      setSelectedCategory("All");
      setExpandedPillar(null);
    } else {
      setSelectedCategory(pillarName);
      setExpandedPillar(expandedPillar === pillarName ? null : pillarName);
    }
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedCategory(subcategory);
  };

  return (
    <>
      <section className="py-12 border-b border-[#247EFF]/20 bg-white/90 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold text-[#0A0A0A] dark:text-brand-cream">Find Your Game</h2>
                <Button
                  variant="outline"
                  onClick={() => setShowTopicClusters(!showTopicClusters)}
                  className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white rounded-2xl"
                >
                  {showTopicClusters ? 'Hide' : 'Show'} Topic Guides
                </Button>
              </div>
              
              {/* Admin Create Button - Show when user is admin and not loading */}
              {!authLoading && user && isAdmin && (
                <Button
                  onClick={() => navigate("/create-post")}
                  className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-2xl px-6 py-2 transition-all duration-300 flex items-center"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Create Story
                </Button>
              )}
              
              {/* Sign In Button for non-authenticated users */}
              {!authLoading && !user && (
                <Button
                  onClick={() => navigate("/auth")}
                  variant="outline"
                  className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white rounded-2xl px-6 py-2 transition-all duration-300"
                >
                  Sign In to Create
                </Button>
              )}
            </div>

            {/* New sentence above filter bar */}
            <div className="text-center mb-6">
              <p className="text-lg text-[#0A0A0A]/80 dark:text-brand-cream/80 font-medium">
                Pick your lane—stories, mindset, or strategies. Whatever you need to level up, we got it.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/60 dark:text-brand-cream/60 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 rounded-3xl border-[#247EFF]/20 focus:border-[#247EFF] text-lg bg-white/80 dark:bg-brand-black/80 text-[#0A0A0A] dark:text-brand-cream"
              />
            </div>

            {/* Core Content Pillars Navigation */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4 text-center">
                Navigate by Your Journey Stage
              </h3>
              
              {/* Main Pillar Buttons */}
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <Button
                  variant={selectedCategory === "All" ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory("All");
                    setExpandedPillar(null);
                  }}
                  className={`rounded-2xl px-6 py-2 transition-all duration-300 ${
                    selectedCategory === "All"
                      ? "bg-[#247EFF] hover:bg-[#0057FF] text-white"
                      : "border-[#247EFF]/20 text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
                  }`}
                >
                  All Stories
                </Button>
                
                {contentPillars.map((pillar) => (
                  <Button
                    key={pillar.name}
                    variant={selectedCategory === pillar.name ? "default" : "outline"}
                    onClick={() => handlePillarClick(pillar.name)}
                    className={`rounded-2xl px-6 py-2 transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === pillar.name
                        ? "bg-[#247EFF] hover:bg-[#0057FF] text-white"
                        : "border-[#247EFF]/20 text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
                    }`}
                  >
                    {pillar.name}
                    {expandedPillar === pillar.name ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                ))}
              </div>

              {/* Subcategories for expanded pillar */}
              {expandedPillar && (
                <div className="bg-gradient-to-r from-[#247EFF]/5 to-blue-100/10 dark:from-[#247EFF]/10 dark:to-blue-900/10 rounded-2xl p-4">
                  <h4 className="text-sm font-medium text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3 text-center">
                    {expandedPillar} Topics:
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {contentPillars
                      .find(pillar => pillar.name === expandedPillar)
                      ?.subcategories.map((subcategory) => (
                        <Button
                          key={subcategory}
                          variant={selectedCategory === subcategory ? "default" : "outline"}
                          onClick={() => handleSubcategoryClick(subcategory)}
                          size="sm"
                          className={`rounded-full px-4 py-1 text-sm transition-all duration-300 ${
                            selectedCategory === subcategory
                              ? "bg-[#247EFF] hover:bg-[#0057FF] text-white"
                              : "border-[#247EFF]/30 text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
                          }`}
                        >
                          {subcategory}
                        </Button>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Legacy Category Filters (for backward compatibility) */}
            <div className="border-t border-[#247EFF]/20 pt-6">
              <h4 className="text-sm font-medium text-[#0A0A0A]/60 dark:text-brand-cream/60 mb-3 text-center">
                Browse All Categories:
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.filter(cat => !allPillarCategories.includes(cat)).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                    className={`rounded-full px-4 py-1 text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[#247EFF] hover:bg-[#0057FF] text-white"
                        : "border-[#247EFF]/30 text-[#0A0A0A]/60 hover:bg-[#247EFF] hover:text-white"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Cluster Navigation */}
      {showTopicClusters && (
        <section className="py-16 bg-gradient-to-r from-[#247EFF]/5 to-blue-100/10 dark:from-[#247EFF]/10 dark:to-blue-900/10">
          <div className="container mx-auto px-6">
            <TopicClusterNavigation />
          </div>
        </section>
      )}
    </>
  );
};

export default BlogSearchFilter;
