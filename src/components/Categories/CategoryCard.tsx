
import type { ProductCategory } from "../../types/category.types";

interface CategoryCardProps {
  category: ProductCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <a
      href={`/category/${category.slug}`}
      className="category-card d-flex flex-column align-items-center text-decoration-none"
    >
      <div className="category-image d-flex align-items-center justify-content-center overflow-hidden rounded-circle border border-2 bg-light p-2">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-100 w-100 rounded-circle object-fit-cover"
        />
      </div>

      <h3 className="category-title mt-3 mb-0 text-center fw-medium">
        {category.name}
      </h3>

      <style>{`
        .category-image {
          width: 112px;
          height: 112px;
          border-color: #bfdbfe !important;
          transition: all 0.3s ease;
        }

        .category-title {
          font-size: 12px;
          color: #0f172a;
          transition: color 0.3s ease;
        }

        .category-card:hover .category-image {
          transform: scale(1.05);
          border-color: #3b82f6 !important;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .category-card:hover .category-title {
          color: #2563eb;
        }

        @media (min-width: 576px) {
          .category-image {
            width: 128px;
            height: 128px;
          }

          .category-title {
            font-size: 14px;
          }
        }

        @media (min-width: 768px) {
          .category-image {
            width: 144px;
            height: 144px;
          }
        }

        .object-fit-cover {
          object-fit: cover;
        }
      `}</style>
    </a>
  );
}
