
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
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

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-2xl px-6 py-2 transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#247EFF] hover:bg-[#0057FF] text-white"
                      : "border-[#247EFF]/20 text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
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
