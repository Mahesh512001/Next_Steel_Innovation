export interface Product {
  id: string;
  category: string;
  productType: string;
  name: string;
  color: string;
  price: number;
  material: string;
  finish: string;
  description: string;
  imageFolder: string;
  image: string;
  flipkartUrl?: string;
}