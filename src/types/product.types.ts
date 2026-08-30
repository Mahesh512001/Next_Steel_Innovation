export interface ProductLinks {
  flipkart: string;
  amazon: string;
  myntra: string;
}

export interface Product {
  category: string;
  itemCode: string;
  productName: string;

  color: string;
  mrp: number;

  material: string;
  finishType: string;

  links: ProductLinks;

  images?: string[];

  description?: string;
  type?: string;

  available?: boolean;
}