import type { Category } from "../../types/category.types";
import CategoryCard from "./CategoryCard";

interface CategorySectionProps {
  categories: Category[];
}

export default function CategorySection({
  categories,
}: CategorySectionProps) {
  return (
    <section
      id="categories"
      className="w-full bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1900px] px-5 sm:px-8 lg:px-10">

       

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-7 sm:gap-y-12 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 xl:gap-x-5 xl:gap-y-12">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>
      </div>
    </section>
  );
}