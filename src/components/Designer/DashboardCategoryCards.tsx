import { useState } from "react";

interface CategoryCardProps {
  label: string;
  image?: string;
}

export default function DashboardCategoryCard({
  label,
  image,
}: CategoryCardProps) {
  const [imageError, setImageError] = useState(false);

  const showImage = Boolean(image) && !imageError;

  return (
    <a
      href="#"
      className="position-relative d-block overflow-hidden rounded-4 text-decoration-none shadow-sm"
    >
      <div
        className="position-relative overflow-hidden rounded-4"
        style={{ aspectRatio: "4 / 3" }}
      >
        {showImage ? (
          <img
            src={image}
            alt={label}
            loading="lazy"
            decoding="async"
            className="w-100 h-100 d-block object-fit-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-light">
            <i className="bi bi-grid-3x3-gap-fill fs-1 text-secondary"></i>

            <span className="mt-3 text-secondary fw-medium text-center px-3">
              {label}
            </span>
          </div>
        )}

        <div className="position-absolute bottom-0 start-0 p-3">
          <span className="bg-white text-dark px-3 py-2 rounded-2 shadow-sm d-inline-block fw-medium">
            {label}
          </span>
        </div>
      </div>
      <style>
        {`
        .category-section-heading {
  height: 84px;
  border-color: #10abc1 !important;
}

.category-section-title {
  font-size: 40px;
  color: #10abc1;
}

@media (max-width: 767.98px) {
  .category-section-heading {
    height: 70px;
  }

  .category-section-title {
    font-size: 32px;
  }
}`}
      </style>
    </a>
  );
}