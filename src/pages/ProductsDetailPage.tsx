import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products.data";

export default function ProductDetailPage() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.itemCode.toLowerCase() === id?.toLowerCase()
  );

  const [selectedImage, setSelectedImage] = useState(0);

  // Reset selected image whenever the product changes
  useEffect(() => {
    setSelectedImage(0);
  }, [id]);

  if (!product) {
    return (
      <main
        className="d-flex align-items-center justify-content-center px-4"
        style={{ minHeight: "70vh" }}
      >
        <div className="text-center">
          <h1
            className="fw-bold"
            style={{
              fontSize: "32px",
              color: "#172033",
            }}
          >
            Product Not Found
          </h1>

          <p
            className="mt-3"
            style={{ color: "#64748b" }}
          >
            The product you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="btn mt-4 px-4 py-2 fw-semibold text-white"
            style={{ backgroundColor: "#c1121f" }}
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const images = product.images ?? [];

  // Prevent invalid image index
  const safeSelectedImage =
    selectedImage < images.length ? selectedImage : 0;

  // Create category URL
  const categorySlug = product.category
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <main className="min-vh-100 bg-white">

      {/* =================================================
          BREADCRUMB
      ================================================== */}
      <div className="border-bottom">
        <div className="container-fluid px-4 px-lg-5 py-3">

          <nav
            aria-label="Breadcrumb"
            className="d-flex flex-wrap align-items-center gap-2 small"
          >
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: "#475569" }}
            >
              Home
            </Link>

            <span style={{ color: "#94a3b8" }}>/</span>

            <Link
              to={`/category/${categorySlug}`}
              className="text-decoration-none"
              style={{ color: "#475569" }}
            >
              {product.category}
            </Link>

            <span style={{ color: "#94a3b8" }}>/</span>

            <span style={{ color: "#64748b" }}>
              {product.itemCode}
            </span>
          </nav>

        </div>
      </div>


      {/* =================================================
          PRODUCT
      ================================================== */}
      <section className="container-fluid px-4 px-lg-5 py-5">
        <div className="row g-5">

          {/* =================================================
              LEFT - IMAGES
          ================================================== */}
          <div className="col-12 col-lg-6">

            {/* MAIN IMAGE */}
            <div
              className="ratio ratio-1x1 overflow-hidden rounded-3"
              style={{ backgroundColor: "#f7fafc" }}
            >
              {images.length > 0 ? (
                <img
                  src={images[safeSelectedImage]}
                  alt={`${product.productName} - ${product.color}`}
                  className="w-100 h-100 object-fit-cover"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ color: "#94a3b8" }}
                >
                  No product image available
                </div>
              )}
            </div>


            {/* THUMBNAILS */}
            {images.length > 0 && (
              <div className="row g-3 mt-1">

                {images.map((image, index) => (
                  <div
                    key={image}
                    className="col-4 col-sm-3"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View product image ${index + 1}`}
                      aria-current={
                        safeSelectedImage === index
                          ? "true"
                          : undefined
                      }
                      className="p-0 w-100 overflow-hidden rounded-3 bg-white"
                      style={{
                        aspectRatio: "1 / 1",
                        border:
                          safeSelectedImage === index
                            ? "2px solid #c1121f"
                            : "2px solid #e2e8f0",
                      }}
                    >
                      <img
                        src={image}
                        alt={`${product.productName} thumbnail ${index + 1}`}
                        className="w-100 h-100 object-fit-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  </div>
                ))}

              </div>
            )}

          </div>


          {/* =================================================
              RIGHT - DETAILS
          ================================================== */}
          <div className="col-12 col-lg-6">

            {/* CATEGORY */}
            <p
              className="mb-0 fw-semibold text-uppercase"
              style={{
                fontSize: "14px",
                letterSpacing: "0.08em",
                color: "#c1121f",
              }}
            >
              {product.category}
            </p>


            {/* PRODUCT NAME */}
            <h1
              className="mt-3 fw-bold lh-sm"
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                color: "#172033",
              }}
            >
              {product.productName}
            </h1>


            {/* PRODUCT CODE */}
            <p
              className="mt-3 mb-0 small"
              style={{ color: "#64748b" }}
            >
              Product Code: {product.itemCode}
            </p>


            {/* PRICE */}
            <div className="mt-4">
              <span
                className="fw-bold"
                style={{
                  fontSize: "32px",
                  color: "#172033",
                }}
              >
                ₹{product.mrp.toLocaleString("en-IN")}/-
              </span>
            </div>


            {/* AVAILABILITY */}
            <div className="mt-4">
              {product.available === true ? (
                <span
                  className="badge rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "#f0fdf4",
                    color: "#15803d",
                    fontSize: "14px",
                  }}
                >
                  <i className="bi bi-check-circle-fill" />
                  In Stock
                </span>
              ) : (
                <span
                  className="badge rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "#fef2f2",
                    color: "#b91c1c",
                    fontSize: "14px",
                  }}
                >
                  <i className="bi bi-x-circle-fill" />
                  Out of Stock
                </span>
              )}
            </div>


            {/* DESCRIPTION */}
            <div className="mt-5 border-top pt-4">

              <h2
                className="h5 fw-bold"
                style={{ color: "#172033" }}
              >
                Product Description
              </h2>

              <p
                className="mt-3 mb-0 lh-lg"
                style={{ color: "#475569" }}
              >
                {product.description ||
                  `${product.productName} made from ${product.material} with ${product.finishType}.`}
              </p>

            </div>


            {/* PRODUCT INFORMATION */}
            <div className="mt-5 border-top pt-4">

              <h2
                className="h5 fw-bold"
                style={{ color: "#172033" }}
              >
                Product Information
              </h2>

              <div className="mt-4 overflow-hidden rounded-3 border">

                {/* PRODUCT TYPE */}
                <div className="row g-0 border-bottom">
                  <div
                    className="col-12 col-sm-5 p-3 fw-medium"
                    style={{ backgroundColor: "#f7fafc" }}
                  >
                    Product Type
                  </div>

                  <div
                    className="col-12 col-sm-7 p-3"
                    style={{ color: "#475569" }}
                  >
                    {product.type || product.productName}
                  </div>
                </div>


                {/* COLOR */}
                <div className="row g-0 border-bottom">
                  <div
                    className="col-12 col-sm-5 p-3 fw-medium"
                    style={{ backgroundColor: "#f7fafc" }}
                  >
                    Color
                  </div>

                  <div
                    className="col-12 col-sm-7 p-3"
                    style={{ color: "#475569" }}
                  >
                    {product.color}
                  </div>
                </div>


                {/* MATERIAL */}
                <div className="row g-0 border-bottom">
                  <div
                    className="col-12 col-sm-5 p-3 fw-medium"
                    style={{ backgroundColor: "#f7fafc" }}
                  >
                    Material
                  </div>

                  <div
                    className="col-12 col-sm-7 p-3"
                    style={{ color: "#475569" }}
                  >
                    {product.material}
                  </div>
                </div>


                {/* FINISH */}
                <div className="row g-0">
                  <div
                    className="col-12 col-sm-5 p-3 fw-medium"
                    style={{ backgroundColor: "#f7fafc" }}
                  >
                    Finish
                  </div>

                  <div
                    className="col-12 col-sm-7 p-3"
                    style={{ color: "#475569" }}
                  >
                    {product.finishType}
                  </div>
                </div>

              </div>
            </div>


            {/* =================================================
                MARKETPLACE LINKS
            ================================================== */}
            {(product.links.flipkart ||
              product.links.amazon ||
              product.links.myntra) && (
              <div className="mt-5">

                <h2
                  className="h5 mb-3 fw-bold"
                  style={{ color: "#172033" }}
                >
                  Available On
                </h2>

                <div className="row g-3">

                  {/* FLIPKART */}
                  {product.links.flipkart && (
                    <div className="col-12 col-sm-6">
                      <a
                        href={product.links.flipkart}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-100 py-3 fw-bold text-white"
                        style={{
                          backgroundColor: "#c1121f",
                        }}
                      >
                        Buy on Flipkart
                      </a>
                    </div>
                  )}


                  {/* AMAZON */}
                  {product.links.amazon && (
                    <div className="col-12 col-sm-6">
                      <a
                        href={product.links.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-100 py-3 fw-bold"
                        style={{
                          color: "#c1121f",
                          border: "1px solid #c1121f",
                        }}
                      >
                        Buy on Amazon
                      </a>
                    </div>
                  )}


                  {/* MYNTRA */}
                  {product.links.myntra && (
                    <div className="col-12 col-sm-6">
                      <a
                        href={product.links.myntra}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-100 py-3 fw-bold"
                        style={{
                          color: "#c1121f",
                          border: "1px solid #c1121f",
                        }}
                      >
                        Buy on Myntra
                      </a>
                    </div>
                  )}

                </div>

              </div>
            )}

          </div>

        </div>
      </section>

    </main>
  );
}