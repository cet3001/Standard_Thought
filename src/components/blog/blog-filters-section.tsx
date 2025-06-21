
import BlogSearchFilter from "./blog-search-filter";

interface BlogFiltersSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedThemeTag: string;
  setSelectedThemeTag: (tag: string) => void;
  categories: string[];
  themeTags: string[];
}

const BlogFiltersSection = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedThemeTag,
  setSelectedThemeTag,
  categories,
  themeTags
}: BlogFiltersSectionProps) => {
  return (
    <BlogSearchFilter
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      selectedThemeTag={selectedThemeTag}
      setSelectedThemeTag={setSelectedThemeTag}
      categories={categories}
      themeTags={themeTags}
    />
  );
};

export default BlogFiltersSection;
