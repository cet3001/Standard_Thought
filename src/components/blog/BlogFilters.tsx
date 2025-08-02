import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, X, SortAsc, SortDesc, ChevronDown } from "lucide-react";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  
  const hasActiveFilters = selectedCategory !== "All Categories" || selectedTags.length > 0;

  const formatTagName = (tag: string) => {
    return tag.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Get category for a tag
  const getCategoryForTag = (tag: BlogTag) => {
    for (const [categoryName, categoryData] of Object.entries(FILTER_CATEGORIES)) {
      if ((categoryData.tags as readonly string[]).includes(tag)) {
        return { name: categoryName, color: categoryData.color };
      }
    }
    return null;
  };

  const handleCategorySelect = (categoryName: string) => {
    if (selectedCategoryFilter === categoryName) {
      setSelectedCategoryFilter(null);
    } else {
      setSelectedCategoryFilter(categoryName);
    }
  };

  const getActiveTagsCount = () => {
    return selectedTags.length;
  };

  return (
    <div className="space-y-4">
      {/* Conversational Prompt */}
      <div className="text-center mb-4">
        <p className="text-sm text-white/90 dark:text-brand-cream/90 font-kalam italic">
          "Show me stories about <span className="underline decoration-wavy decoration-yellow-400">___</span>"
        </p>
      </div>

      {/* Compact Category Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/30 p-3 flex items-center justify-between hover:bg-white/15 dark:hover:bg-gray-900/25 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-white/60" />
            <span className="text-sm font-bold text-white dark:text-brand-cream font-ibm-plex-mono">
              CATEGORIES & TAGS
            </span>
            {getActiveTagsCount() > 0 && (
              <span className="px-2 py-0.5 bg-yellow-400/20 text-yellow-400 text-xs rounded-full font-bold">
                {getActiveTagsCount()}
              </span>
            )}
          </div>
          <ChevronDown className={`h-4 w-4 text-white/60 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
            <div className="p-2">
              {Object.entries(FILTER_CATEGORIES).map(([categoryName, categoryData]) => (
                <div key={categoryName} className="mb-2">
                  {/* Category Header */}
                  <button
                    onClick={() => handleCategorySelect(categoryName)}
                    className="w-full text-left p-2 rounded hover:bg-gray-800 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-sm" 
                        style={{ backgroundColor: categoryData.color }}
                      ></div>
                      <span className="text-sm font-semibold text-white">
                        {categoryName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedTags.filter(tag => (categoryData.tags as readonly string[]).includes(tag)).length > 0 && (
                        <span className="px-1.5 py-0.5 bg-yellow-400/20 text-yellow-400 text-xs rounded-full font-bold">
                          {selectedTags.filter(tag => (categoryData.tags as readonly string[]).includes(tag)).length}
                        </span>
                      )}
                      <ChevronDown className={`h-3 w-3 text-white/60 transition-transform ${selectedCategoryFilter === categoryName ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  
                  {/* Subcategory Tags */}
                  {selectedCategoryFilter === categoryName && (
                    <div className="ml-5 mt-2 space-y-1">
                      {categoryData.tags.map((tag) => {
                        const isSelected = selectedTags.includes(tag);
                        return (
                          <button
                            key={tag}
                            onClick={() => onTagToggle(tag)}
                            className={`block w-full text-left text-xs p-2 rounded transition-colors ${
                              isSelected 
                                ? "bg-yellow-400/20 text-yellow-400 font-bold" 
                                : "text-gray-300 hover:bg-gray-800 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{formatTagName(tag)}</span>
                              {isSelected && <X className="h-3 w-3" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sort Options */}
      <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/30 p-3">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full bg-transparent border-none text-white text-sm">
            <div className="flex items-center gap-2">
              {sortBy.includes('desc') || sortBy === 'newest' ? 
                <SortDesc className="h-4 w-4" /> : 
                <SortAsc className="h-4 w-4" />
              }
              <span className="font-bold font-ibm-plex-mono">SORT:</span>
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-700 z-50">
            <SelectItem value="newest" className="text-white hover:bg-gray-800">Newest First</SelectItem>
            <SelectItem value="oldest" className="text-white hover:bg-gray-800">Oldest First</SelectItem>
            <SelectItem value="title-asc" className="text-white hover:bg-gray-800">Title A-Z</SelectItem>
            <SelectItem value="title-desc" className="text-white hover:bg-gray-800">Title Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/30 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white dark:text-brand-cream font-ibm-plex-mono">
              ACTIVE ({selectedTags.length})
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 text-xs font-bold h-6 px-2"
            >
              CLEAR
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {selectedTags.map((tag) => {
              const category = getCategoryForTag(tag);
              return (
                <Badge 
                  key={tag} 
                  className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 text-xs px-2 py-0.5"
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-sm mr-1" 
                    style={{ backgroundColor: category?.color || "#6B7280" }}
                  ></div>
                  {formatTagName(tag)}
                </Badge>
              );
            })}
          </div>
          
          <div className="mt-2 text-xs text-white/60">
            {articleCount} article{articleCount !== 1 ? 's' : ''} found
          </div>
        </div>
      )}
    </div>
  );
};