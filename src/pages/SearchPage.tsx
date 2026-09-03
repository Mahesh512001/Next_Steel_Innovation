import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products.data";
import ProductCard from "../components/products/ProductCard";


export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query")?.trim() || "";

  const filteredProducts = useMemo(() => {
    if (!query) {
      return [];
    }

    return products.filter((product: { productName: string; }) =>
      product.productName
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="container py-5">
      <h2 className="mb-4">
        Search Results
      </h2>

      {query && (
        <p className="text-muted mb-4">
          Search results for: <strong>"{query}"</strong>
        </p>
      )}

      {!query && (
        <div className="text-center py-5">
          <i className="bi bi-search fs-1 text-muted"></i>

          <h4 className="mt-3">
            Search for a product
          </h4>

          <p className="text-muted">
            Enter a product name in the search box.
          </p>
        </div>
      )}

      {query && filteredProducts.length === 0 && (
        <div className="text-center py-5">
          <i className="bi bi-search fs-1 text-muted"></i>

          <h4 className="mt-3">
            No products found
          </h4>

          <p className="text-muted">
            We couldn't find any product matching "{query}".
          </p>
        </div>
      )}

      {filteredProducts.length > 0 && (
        <>
          <p className="mb-4">
            <strong>{filteredProducts.length}</strong>{" "}
            product(s) found
          </p>

          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div
                className="col-6 col-md-4 col-lg-3"
                key={product.itemCode}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}