
import type { Product } from "../../types/product.types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  return (
    <div className="row g-4">

      {products.map((product) => (
        <div
          key={`${product.category}-${product.itemCode}-${product.color}`}
          className="col-12 col-sm-6 col-lg-4 col-xl-3"
        >
          <ProductCard product={product} />
        </div>
      ))}

    </div>
  );
}

