import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products.data";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { slug } = useParams();

  const [color, setColor] = useState("All");
  const [material, setMaterial] = useState("All");
  const [sort, setSort] = useState("featured");

  const categoryProducts = useMemo(() => {
    let result = products;

    if (slug === "kitchen-spice-rack") {
      result = products.filter(
        (product) => product.productType === "Kitchen Spice Rack"
      );
    }

    if (color !== "All") {
      result = result.filter((product) => product.color === color);
    }

    if (material !== "All") {
      result = result.filter((product) => product.material === material);
    }

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [slug, color, material, sort]);

  const clearFilters = () => {
    setColor("All");
    setMaterial("All");
    setSort("featured");
  };

  return (
    <main className="min-h-screen bg-white">

      {/* BREADCRUMB */}
      <div className="border-b border-surface-200">
        <div className="mx-auto max-w-[1900px] px-5 py-5 lg:px-8">

          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-ink-700 hover:text-brand-500"
            >
              Home
            </Link>

            <i className="bi bi-chevron-right text-xs text-ink-400" />

            <span className="text-ink-500">
              Kitchen Spice Rack
            </span>
          </div>

        </div>
      </div>

      {/* PAGE */}
      <section className="mx-auto max-w-[1900px] px-5 py-8 lg:px-8">

        {/* TITLE */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ink-900 md:text-4xl">
            Kitchen Spice Rack
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-500">
            Explore our collection of kitchen spice racks in different
            designs, colors, materials and shelf configurations.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap gap-3">

            {/* COLOR */}
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-12 rounded-md border border-surface-300 bg-surface-100 px-4 text-sm outline-none focus:border-brand-500"
            >
              <option value="All">All Colors</option>
              <option value="Black">Black</option>
              <option value="Silver">Silver</option>
              <option value="White">White</option>
              <option value="Golden">Golden</option>
            </select>

            {/* MATERIAL */}
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="h-12 rounded-md border border-surface-300 bg-surface-100 px-4 text-sm outline-none focus:border-brand-500"
            >
              <option value="All">All Materials</option>
              <option value="Iron">Iron</option>
              <option value="Stainless Steel">
                Stainless Steel
              </option>
            </select>

            {/* CLEAR */}
            <button
              onClick={clearFilters}
              className="flex h-12 items-center gap-2 rounded-md bg-brand-500 px-5 text-sm font-semibold text-white hover:bg-brand-600"
            >
              <i className="bi bi-trash3" />
              CLEAR ALL
            </button>

          </div>

          {/* SORT */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-12 rounded-md border border-surface-300 bg-surface-100 px-4 text-sm outline-none focus:border-brand-500"
          >
            <option value="featured">Sort by Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>

        </div>

        {/* RESULT COUNT */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-ink-500">
            Showing{" "}
            <span className="font-semibold text-ink-900">
              {categoryProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        {/* PRODUCTS */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-surface-200 py-20 text-center">
            <i className="bi bi-box-seam text-4xl text-ink-300" />

            <h2 className="mt-4 text-xl font-semibold text-ink-900">
              No products found
            </h2>

            <p className="mt-2 text-sm text-ink-500">
              Try changing your filters.
            </p>
          </div>
        )}

      </section>
    </main>
  );
}