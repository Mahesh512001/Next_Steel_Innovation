import type { Category } from "../../types/category.types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  return (
    <a
      href={category.href || "#"}
      className="group flex flex-col items-center text-center"
    >
      <div className="relative flex aspect-square w-full max-w-[185px] items-center justify-center overflow-hidden rounded-full border-2 border-brand-200 bg-brand-50 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-500 group-hover:bg-white group-hover:shadow-[0_10px_30px_rgba(18,97,201,0.15)]">

        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full rounded-full object-contain p-5"
        />

      </div>

      <h3 className="mt-5 text-[14px] font-semibold leading-5 text-ink-900 group-hover:text-brand-500">
        {category.name}
      </h3>
    </a>
  );
}