
import ResourceCategory from "./resource-category";
import { resourceCategories } from "./resource-categories-data";

const ResourceCategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {resourceCategories.map((category, index) => (
        <ResourceCategory
          key={index}
          icon={<category.icon className="h-8 w-8 text-[#247EFF]" />}
          title={category.title}
          description={category.description}
          topics={category.topics}
          ctaText={category.ctaText}
          ctaLink={category.ctaLink}
        />
      ))}
    </div>
  );
};

export default ResourceCategoriesGrid;
