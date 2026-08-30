
import CategoryGrid from "./CategoryGrid";

export default function CategorySection() {
  return (
    <section className="category-section mx-auto">
      <h2 className="category-heading text-center fw-medium">
        Shop By{" "}
        <span className="category-heading-highlight position-relative d-inline-block fw-bold">
          Categories
          <span className="category-underline position-absolute rounded-pill"></span>
        </span>
      </h2>

      <CategoryGrid />

      <style>{`
        .category-section {
          max-width: 1900px;
          padding: 4rem 1.25rem;
        }

        .category-heading {
          margin-bottom: 3rem;
          font-size: 1.875rem;
          line-height: 1.25;
          color: #1e293b;
        }

        .category-underline {
          bottom: -4px;
          right: 0;
          width: 100%;
          height: 3px;
          background-color: #c1121f;
        }

        @media (min-width: 768px) {
          .category-heading {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 992px) {
          .category-section {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
