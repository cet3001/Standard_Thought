import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, X, SortAsc, SortDesc } from "lucide-react";

// Standardthought Blog Schema - 6 Main Categories & 15 Core Tags
export const BLOG_CATEGORIES = [
  "All Categories",
  "Entrepreneurship", 
  "Wealth Building",
  "Credit & Finance",
  "Mindset & Psychology", 
  "Personal Development",
  "AI & Technology"
] as const;

export const BLOG_TAGS = [
  "ai-side-hustles",
  "artificial-intelligence", 
  "business-strategy",
  "credit-building",
  "digital-products",
  "financial-psychology",
  "generational-wealth",
  "mindset-shift",
  "money-trauma",
  "passive-income",
  "personal-development",
  "side-hustle",
  "wealth-building",
  "work-life-balance",
  "entrepreneurship-psychology"
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
  const [showAllTags, setShowAllTags] = useState(false);
  const displayTags = showAllTags ? BLOG_TAGS : BLOG_TAGS.slice(0, 8);
  
  const hasActiveFilters = selectedCategory !== "All Categories" || selectedTags.length > 0;

  const formatTagName = (tag: string) => {
    return tag.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="space-y-6 p-6 bg-card border border-border rounded-xl">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Filter className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground">Filter Articles</h3>
            <p className="text-sm text-muted-foreground">
              {articleCount} article{articleCount !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-card-foreground">Category</label>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full bg-background border-border text-foreground">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-background border-border">
            {BLOG_CATEGORIES.map((category) => (
              <SelectItem key={category} value={category} className="text-foreground">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sort Options */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-card-foreground">Sort By</label>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full bg-background border-border text-foreground">
            <div className="flex items-center gap-2">
              {sortBy.includes('desc') || sortBy === 'newest' ? 
                <SortDesc className="h-4 w-4" /> : 
                <SortAsc className="h-4 w-4" />
              }
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-background border-border">
            <SelectItem value="newest" className="text-foreground">Newest First</SelectItem>
            <SelectItem value="oldest" className="text-foreground">Oldest First</SelectItem>
            <SelectItem value="title-asc" className="text-foreground">Title A-Z</SelectItem>
            <SelectItem value="title-desc" className="text-foreground">Title Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Collapsible Tag Filter */}
      {(selectedTags.length > 0 || showAllTags) && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-card-foreground">Tags</label>
            {selectedTags.length > 0 && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {selectedTags.length} selected
              </span>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {displayTags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <Badge
                  key={tag}
                  variant={isSelected ? "default" : "outline"}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    isSelected 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => onTagToggle(tag)}
                >
                  {formatTagName(tag)}
                  {isSelected && <X className="h-3 w-3 ml-1" />}
                </Badge>
              );
            })}
          </div>
          
          {BLOG_TAGS.length > 8 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAllTags(!showAllTags)}
              className="text-muted-foreground hover:text-foreground"
            >
              {showAllTags ? "Show Less" : `Show All ${BLOG_TAGS.length} Tags`}
            </Button>
          )}
        </div>
      )}

      {/* Show Tags Button when collapsed */}
      {selectedTags.length === 0 && !showAllTags && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAllTags(true)}
          className="w-full text-muted-foreground hover:text-foreground"
        >
          Show Tag Filters
        </Button>
      )}

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-border/60">
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Active Filters
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "All Categories" && (
                <Badge variant="secondary" className="text-xs">
                  Category: {selectedCategory}
                </Badge>
              )}
              {selectedTags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {formatTagName(tag)}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};