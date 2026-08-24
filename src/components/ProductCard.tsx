import { Link } from "react-router-dom";
import type { Product } from "../types/product.types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-surface-300 bg-white transition hover:-translate-y-1 hover:shadow-lg">

      {/* IMAGE */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-surface-100">

          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/images/product-placeholder.jpg";
            }}
          />

          <span className="absolute left-0 top-0 bg-red-600 px-3 py-1 text-sm font-semibold text-white">
            New
          </span>

        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-4">

        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-brand-500">
          {product.productType}
        </p>

        <Link to={`/product/${product.id}`}>
          <h2 className="line-clamp-2 min-h-[48px] text-[16px] font-semibold text-ink-900 hover:text-brand-500">
            {product.name}
          </h2>
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-ink-900">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="mt-2 flex gap-2 text-xs text-ink-500">
          <span>{product.color}</span>
          <span>•</span>
          <span>{product.material}</span>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="mt-4 flex h-11 w-full items-center justify-center rounded-md bg-brand-500 font-semibold text-white transition hover:bg-brand-600"
        >
          VIEW PRODUCT
        </Link>

      </div>
    </article>
  );
}