import { products } from "./products.data";
import type { ProductCategory } from "../types/ProductCategory.type";

export function createCategorySlug(category: string): string {
  return category
    .toLowerCase()
    .trim()
    .replace(/\s+and\s+/g, "-and-")
    .replace(/\s+/g, "-");
}

const iconModules = import.meta.glob<string>(
  "../assets/categories/*.{png,jpg,jpeg,svg,webp}",
  { eager: true, import: "default" }
);

function findIcon(slug: string): string {
  const entry = Object.entries(iconModules).find(([path]) => path.includes(`/${slug}.`));
  return entry?.[1] ?? "";
}

export const categories: ProductCategory[] = Array.from(
  new Map(
    products.map((product) => {
      const slug = createCategorySlug(product.category);
      return [
        product.category,
        {
          name: product.category,
          slug,
          image: findIcon(slug),
          href: `/category/${slug}`,
        },
      ];
    })
  ).values()
);