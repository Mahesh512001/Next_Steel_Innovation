
import { Link } from "react-router-dom";
import type { Product } from "../../types/product.types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const productId = encodeURIComponent(product.itemCode);
  const productImage = product.images?.[0] ?? "";

  return (
    <article className="product-card overflow-hidden bg-white">

      {/* PRODUCT IMAGE */}
      <Link
        to={`/product/${productId}`}
        className="d-block text-decoration-none"
      >
        <div className="product-image d-flex align-items-center justify-content-center">

          {/* Temporary image area */}
          {productImage ? (
            <img
              src={productImage}
              alt={product.productName}
              className="img- fluid h-100 w-100 object-fit-cover"
            />
          ) : (
            <div className="text-center">
              <i className="bi bi-box-seam product-placeholder-icon" />
            </div>
          )}

        </div>
      </Link>


      {/* PRODUCT CONTENT */}
      <div className="product-content">

        {/* CATEGORY */}
        <p className="product-category">
          {product.category}
        </p>


        {/* PRODUCT NAME */}
        <Link
          to={`/product/${productId}`}
          className="text-decoration-none"
        >
          <h2 className="product-name">
            {product.productName}
          </h2>
        </Link>


        {/* COLOR */}
        <div className="product-info d-flex align-items-center">
          <span className="product-info-label">
            Color:
          </span>

          <span className="product-info-value">
            {product.color}
          </span>
        </div>


        {/* MATERIAL */}
        <div className="product-info d-flex align-items-center">
          <span className="product-info-label">
            Material:
          </span>

          <span className="product-info-value">
            {product.material}
          </span>
        </div>


        {/* PRICE */}
        <div className="product-price-wrapper">
          <span className="product-price">
            ₹{product.mrp.toLocaleString("en-IN")}
          </span>
        </div>


        {/* VIEW PRODUCT */}
        <Link
          to={`/product/${productId}`}
          className="product-view-btn d-flex align-items-center justify-content-center gap-2 text-decoration-none"
        >
          View Product

          <i className="bi bi-arrow-right" />
        </Link>

      </div>


      {/* CUSTOM CSS */}
      <style>{`
        /* =================================
           PRODUCT CARD
        ================================= */

        .product-card {
          border: 1px solid #e2e8f0;
          border-radius: 12px;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.10);
        }


        /* =================================
           PRODUCT IMAGE
        ================================= */

        .product-image {
          height: 280px;
          background-color: #f8fafc;
        }

        .product-placeholder-icon {
          color: #cbd5e1;
          font-size: 60px;
        }

        .product-placeholder-text {
          margin-top: 0.75rem;
          margin-bottom: 0;

          color: #94a3b8;
          font-size: 14px;
        }


        /* =================================
           CONTENT
        ================================= */

        .product-content {
          padding: 1.25rem;
        }


        /* =================================
           CATEGORY
        ================================= */

        .product-category {
          margin: 0;

          color: #c1121f;

          font-size: 12px;
          font-weight: 600;

          text-transform: uppercase;
          letter-spacing: 0.08em;
        }


        /* =================================
           PRODUCT NAME
        ================================= */

        .product-name {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          overflow: hidden;

          margin-top: 0.5rem;
          margin-bottom: 0;

          color: #0f172a;

          font-size: 18px;
          font-weight: 600;
          line-height: 1.5;

          transition: color 0.2s ease;
        }

        .product-name:hover {
          color: #c1121f;
        }


        /* =================================
           PRODUCT INFO
        ================================= */

        .product-info {
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .product-info:first-of-type {
          margin-top: 1rem;
        }

        .product-info-label {
          color: #64748b;
          font-size: 14px;
        }

        .product-info-value {
          color: #1e293b;
          font-size: 14px;
          font-weight: 500;
        }


        /* =================================
           PRICE
        ================================= */

        .product-price-wrapper {
          margin-top: 1rem;
        }

        .product-price {
          color: #0f172a;
          font-size: 24px;
          font-weight: 700;
        }


        /* =================================
           VIEW PRODUCT BUTTON
        ================================= */

        .product-view-btn {
          width: 100%;

          margin-top: 1.25rem;
          padding: 0.75rem 1rem;

          border-radius: 8px;

          background-color: #c1121f;
          color: #ffffff;

          font-weight: 600;

          transition:
            background-color 0.2s ease,
            transform 0.2s ease;
        }

        .product-view-btn:hover {
          background-color: #a50f1a;
          color: #ffffff;
        }

        .product-view-btn i {
          transition: transform 0.2s ease;
        }

        .product-view-btn:hover i {
          transform: translateX(3px);
        }
      `}</style>

    </article>
  );
}
