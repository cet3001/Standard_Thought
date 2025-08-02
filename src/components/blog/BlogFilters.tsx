import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, X, SortAsc, SortDesc } from "lucide-react";

// Filter categories with emotionally grounded groupings (no emojis)
export const FILTER_CATEGORIES = {
  "Mind Games": {
    color: "#D9442C",
    textColor: "#FFF8E7",
    tags: ["money-beliefs", "fear-of-failing", "survival-programming"] as const
  },
  "First In The Family": {
    color: "#4F5D75", 
    textColor: "#F2F2F2",
    tags: ["breaking-inheritance-loops", "learning-without-mentors", "rebuilding-self-worth"] as const
  },
  "Culture & Cash": {
    color: "#D4AF37",
    textColor: "#0A0A0A", 
    tags: ["black-wealth-gaps", "system-myths", "family-guilt"] as const
  },
  "Side Streams": {
    color: "#4BAF73",
    textColor: "#F9F9F9",
    tags: ["freelance-hustles", "digital-plays", "entrepreneur-lessons"] as const
  },
  "Receipts & Moves": {
    color: "#2D2D2D",
    textColor: "#FFEF7C",
    tags: ["credit-fixes", "budgeting-that-works", "passive-income-tests", "ai-tools"] as const
  },
  "Spirit & Rewired": {
    color: "#776C9E", 
    textColor: "#FEFEF7",
    tags: ["mental-wealth", "inner-work", "conscious-pivoting"] as const
  }
} as const;

export const BLOG_CATEGORIES = [
  "All Categories",
  "Entrepreneurship", 
  "Wealth Building",
  "Credit & Finance",
  "Personal Development",
  "AI & Technology"
] as const;

export const BLOG_TAGS = [
  // Mind Games
  "money-beliefs", "fear-of-failing", "survival-programming",
  // First in the Family
  "breaking-inheritance-loops", "rebuilding-self-worth", "learning-without-mentors",
  // Culture & Cash
  "black-wealth-gaps", "system-myths", "family-guilt", 
  // Side Streams
  "freelance-hustles", "digital-plays", "entrepreneur-lessons",
  // Receipts & Moves
  "credit-fixes", "budgeting-that-works", "passive-income-tests", "ai-tools",
  // Spirit & Rewired Beliefs
  "mental-wealth", "inner-work", "conscious-pivoting"
] as const;

export type BlogCategory = typeof BLOG_CATEGORIES[number];
export type BlogTag = typeof BLOG_TAGS[number];
export type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";

interface BlogFiltersProps {
  selectedCategory: BlogCategory;
  selectedTags: BlogTag[];
  sortBy: SortOption;
  onCategoryChange: (category: BlogCategory) => void;
  onTagToggle: (tag: BlogTag) => void;
  onSortChange: (sort: SortOption) => void;
  onClearFilters: () => void;
  articleCount: number;
}

export const BlogFilters = ({ 
  selectedCategory, 
  selectedTags, 
  sortBy,
  onCategoryChange, 
  onTagToggle, 
  onSortChange,
  onClearFilters,
  articleCount 
}: BlogFiltersProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const hasActiveFilters = selectedCategory !== "All Categories" || selectedTags.length > 0;

  const formatTagName = (tag: string) => {
    return tag.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Get category for a tag (no longer using icons)
  const getCategoryForTag = (tag: BlogTag) => {
    for (const [categoryName, categoryData] of Object.entries(FILTER_CATEGORIES)) {
      if ((categoryData.tags as readonly string[]).includes(tag)) {
        return { name: categoryName, color: categoryData.color };
      }
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Conversational Prompt */}
      <div className="text-center mb-6">
        <p className="text-lg text-white/90 dark:text-brand-cream/90 font-kalam italic">
          "Show me stories about <span className="underline decoration-wavy decoration-yellow-400">___</span>"
        </p>
      </div>

      {/* Filter Categories */}
      <div className="space-y-4">
        {Object.entries(FILTER_CATEGORIES).map(([categoryName, categoryData]) => (
          <div key={categoryName} className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/30 overflow-hidden">
            <button
              onClick={() => setExpandedCategory(expandedCategory === categoryName ? null : categoryName)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 dark:hover:bg-gray-900/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-sm" 
                  style={{ backgroundColor: categoryData.color }}
                ></div>
                <h4 className="font-bold text-white dark:text-brand-cream font-ibm-plex-mono text-sm tracking-wide">
                  {categoryName}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                {/* Active tags count */}
                {selectedTags.filter(tag => (categoryData.tags as readonly string[]).includes(tag)).length > 0 && (
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full font-bold">
                    {selectedTags.filter(tag => (categoryData.tags as readonly string[]).includes(tag)).length}
                  </span>
                )}
                <span className={`text-white/60 transition-transform ${expandedCategory === categoryName ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
            </button>
            
            {expandedCategory === categoryName && (
              <div className="p-4 pt-0 border-t border-white/10 dark:border-gray-700/20">
                <div className="flex flex-wrap gap-2">
                  {categoryData.tags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <Badge
                        key={tag}
                        variant={isSelected ? "default" : "outline"}
                        className={`cursor-pointer transition-all hover:scale-105 text-xs ${
                          isSelected 
                            ? "bg-yellow-400/90 text-black font-bold border-yellow-500 shadow-lg" 
                            : "bg-white/10 text-white/90 border-white/20 hover:bg-white/20"
                        }`}
                        onClick={() => onTagToggle(tag)}
                      >
                        {formatTagName(tag)}
                        {isSelected && <X className="h-3 w-3 ml-1" />}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Sort */}
      <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/30 p-4">
        <label className="text-sm font-bold text-white dark:text-brand-cream font-ibm-plex-mono mb-3 block">
          SORT BY
        </label>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
            <div className="flex items-center gap-2">
              {sortBy.includes('desc') || sortBy === 'newest' ? 
                <SortDesc className="h-4 w-4" /> : 
                <SortAsc className="h-4 w-4" />
              }
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-700">
            <SelectItem value="newest" className="text-white">Newest First</SelectItem>
            <SelectItem value="oldest" className="text-white">Oldest First</SelectItem>
            <SelectItem value="title-asc" className="text-white">Title A-Z</SelectItem>
            <SelectItem value="title-desc" className="text-white">Title Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters & Clear */}
      {hasActiveFilters && (
        <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/30 p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-white dark:text-brand-cream font-ibm-plex-mono">
              ACTIVE FILTERS ({selectedTags.length})
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 text-xs font-bold"
            >
              CLEAR ALL
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => {
              const category = getCategoryForTag(tag);
              return (
                <Badge key={tag} className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 text-xs">
                  <div 
                    className="w-2 h-2 rounded-sm mr-1" 
                    style={{ backgroundColor: category?.color || "#6B7280" }}
                  ></div>
                  {formatTagName(tag)}
                </Badge>
              );
            })}
          </div>
          
          <div className="mt-3 text-xs text-white/60">
            {articleCount} article{articleCount !== 1 ? 's' : ''} found
          </div>
        </div>
      )}
    </div>
  );
};