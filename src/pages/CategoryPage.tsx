import { useParams } from "react-router-dom";
import { products } from "../data/products.data";
import { createCategorySlug } from "../data/categories.data";

import ProductGrid from "../components/products/ProductGrid";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();

  const categoryProducts = products.filter(
    (product) => createCategorySlug(product.category) === slug,
  );

  const categoryName = categoryProducts[0]?.category ?? "Category";

  return (
    <main className="min-h-screen bg-surface-100">

      {/* CATEGORY HEADER */}
      <section className="border-b border-surface-200 bg-white">
        <div className="mx-auto max-w-[1900px] px-5 py-12 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            Our Collection
          </p>

          <h1 className="mt-3 text-3xl font-bold text-ink-900 md:text-4xl">
            {categoryName}
          </h1>

          <p className="mt-3 text-ink-500">
            Explore our {categoryName.toLowerCase()} collection.
          </p>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-[1900px] px-5 py-10 lg:px-8">

        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} />
        ) : (
          <div className="rounded-xl bg-white p-10 text-center">
            <i className="bi bi-box-seam text-4xl text-ink-400" />

            <h2 className="mt-4 text-xl font-semibold text-ink-900">
              No products found
            </h2>

            <p className="mt-2 text-ink-500">
              This category does not have any products yet.
            </p>
          </div>
        )}

      </section>

    </main>
  );
}