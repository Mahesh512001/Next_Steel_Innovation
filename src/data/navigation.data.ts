import type { NavigationItem } from "../types/navigation.types";
import { categories } from "./categories.data";

const MAX_VISIBLE_CATEGORIES = 5;

export const navigation: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    hasDropdown: false,
  },
 

  // First 6 categories are shown directly
  ...categories
    .slice(0, MAX_VISIBLE_CATEGORIES)
    .map((category) => ({
      id: category.id,
      label: category.name,
      href: `/category/${category.slug}`,
      hasDropdown: false,
    })),

  // Remaining categories go inside More
  ...(categories.length > MAX_VISIBLE_CATEGORIES
    ? [
        {
          id: "more",
          label: "More",
          hasDropdown: true,
          columns: [
            {
              links: categories
                .slice(MAX_VISIBLE_CATEGORIES)
                .map((category) => ({
                  label: category.name,
                  href: `/category/${category.slug}`,
                })),
            },
          ],
          
        },
      ]
    : []),

      {
    id: "about",
    label: "About",
    href: "/about",
    hasDropdown: false,
  },
];