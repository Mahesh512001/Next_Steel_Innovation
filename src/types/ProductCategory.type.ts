export interface ProductCategory {
  [x: string]: any;
  name: string;
  slug: string;
  image?: string;   // optional, for display
  href?: string;     // optional, computed if omitted
}