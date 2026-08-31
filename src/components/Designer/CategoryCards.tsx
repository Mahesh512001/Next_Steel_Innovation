import { useState } from "react";

interface CategoryCardProps {
  label: string;
  image?: string;
}

export default function CategoryCard({
  label,
  image,
}: CategoryCardProps) {
  const [imageError, setImageError] = useState(false);

  const showImage = image && !imageError;

  return (
    <a
      href="#"
      className="position-relative d-block overflow-hidden rounded-4 text-decoration-none category-card"
    >
      <div className="position-relative overflow-hidden rounded-4 category-card-image">

        {/* IMAGE */}
        {showImage ? (
          <img
            src={image}
            alt={label}
            loading="lazy"
            decoding="async"
            className="w-100 h-100 d-block category-card-img"
            onError={() => setImageError(true)}
          />
        ) : (
          /* FALLBACK ICON CARD */
          <div className="category-card-placeholder d-flex flex-column align-items-center justify-content-center h-100">
            <i className="bi bi-grid-3x3-gap-fill category-card-icon"></i>

            <span className="mt-3 text-muted">
              {label}
            </span>
          </div>
        )}

        {/* LABEL */}
        <div className="position-absolute bottom-0 start-0 p-3">
          <span className="bg-white px-3 py-2 rounded-2 text-dark fs-5 d-inline-block shadow-sm">
            {label}
          </span>
        </div>

      </div>
    </a>
  );
}