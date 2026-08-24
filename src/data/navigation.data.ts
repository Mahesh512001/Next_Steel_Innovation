import type { NavigationItem } from "../types/navigation.types";

const commonColumns = [
  {
    title: "Kitchen Storage",
    links: [
      {
        label: "Spice Racks",
        href: "#",
      },
      {
        label: "Kitchen Trolleys",
        href: "#",
      },
      {
        label: "Kitchen Organizers",
        href: "#",
      },
      {
        label: "Pan Stands",
        href: "#",
      },
      {
        label: "Plate Stands",
        href: "#",
      },
    ],
  },

  {
    title: "Storage",
    links: [
      {
        label: "Shoe Racks",
        href: "#",
      },
      {
        label: "Fruit Baskets",
        href: "#",
      },
      {
        label: "Corner Shelves",
        href: "#",
      },
      {
        label: "Door Hangers",
        href: "#",
      },
      {
        label: "Brush Holders",
        href: "#",
      },
    ],
  },

  {
    title: "Utility Products",
    links: [
      {
        label: "Photo Display Stands",
        href: "#",
      },
      {
        label: "Shop Utility",
        href: "#",
      },
      {
        label: "Fruit Baskets",
        href: "#",
      },
      {
        label: "Corner Shelves",
        href: "#",
      },
    ],
  },

  {
    title: "Collections",
    links: [
      {
        label: "New Arrivals",
        href: "#",
      },
      {
        label: "Best Sellers",
        href: "#",
      },
      {
        label: "Steel Storage",
        href: "#",
      },
      {
        label: "Kitchen Solutions",
        href: "#",
      },
    ],
  },

  {
    title: "Support",
    links: [
      {
        label: "Contact Us",
        href: "#",
      },
      {
        label: "Warranty Registration",
        href: "#",
      },
      {
        label: "My Account",
        href: "#",
      },
      {
        label: "Customer Support",
        href: "#",
      },
    ],
  },
];

export const navigationData: NavigationItem[] = [
  {
    id: "spice-racks",
    label: "Spice Racks",
    hasDropdown: true,
    columns: commonColumns,
  },

  {
    id: "kitchen-trolleys",
    label: "Kitchen Trolleys",
    hasDropdown: true,
    columns: commonColumns,
  },

  {
    id: "shoe-racks",
    label: "Shoe Racks",
    hasDropdown: true,
    columns: commonColumns,
  },

  {
    id: "fruit-baskets",
    label: "Fruit Baskets",
    hasDropdown: true,
    columns: commonColumns,
  },

  {
    id: "kitchen-organizers",
    label: "Kitchen Organizers",
    hasDropdown: true,
    columns: commonColumns,
  },

  {
    id: "more",
    label: "More",
    hasDropdown: true,
    columns: [
      {
        title: "",
        links: [
          {
            label: "Corner Shelves",
            href: "#",
          },
          {
            label: "Pan Stands",
            href: "#",
          },
          {
            label: "Plate Stands",
            href: "#",
          },
          {
            label: "Door Hangers",
            href: "#",
          },
          {
            label: "Contact Us",
            href: "#",
          },
        ],
      },
    ],
  },
];