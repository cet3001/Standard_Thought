
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ThemeTag from "@/components/ui/theme-tag";

interface BlogSearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedThemeTag: string;
  setSelectedThemeTag: (tag: string) => void;
  categories: string[];
  themeTags: string[];
}

const BlogSearchFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedThemeTag,
  setSelectedThemeTag,
  categories,
  themeTags
}: BlogSearchFilterProps) => {
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedThemeTag("");
  };

  return (
    <div className="mb-12 space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/40 dark:text-brand-cream/40 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search stories by title, topic, or challenge..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/80 dark:bg-brand-black/80 border-[#247EFF]/20 rounded-2xl focus:border-[#247EFF] transition-colors"
          />
        </div>
        
        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-48 bg-white/80 dark:bg-brand-black/80 border-[#247EFF]/20 rounded-2xl">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-brand-black border-[#247EFF]/20">
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {/* Clear Filters */}
        {(searchTerm || selectedCategory || selectedThemeTag) && (
          <Button
            onClick={clearFilters}
            variant="outline"
            className="border-[#247EFF]/20 hover:bg-[#247EFF]/10 rounded-2xl"
          >
            <Filter className="mr-2 h-4 w-4" />
            Clear Filters
          </Button>
        )}
      </div>
      
      {/* Theme Filter Dropdown */}
      <div className="flex flex-col md:flex-row gap-4">
        <Select value={selectedThemeTag || "all"} onValueChange={(value) => setSelectedThemeTag(value === "all" ? "" : value)}>
          <SelectTrigger className="w-full md:w-64 bg-white/80 dark:bg-brand-black/80 border-[#247EFF]/20 rounded-2xl">
            <SelectValue placeholder="All Themes" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-brand-black border-[#247EFF]/20 max-h-72">
            <SelectItem value="all">All Themes</SelectItem>
            {themeTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BlogSearchFilter;
