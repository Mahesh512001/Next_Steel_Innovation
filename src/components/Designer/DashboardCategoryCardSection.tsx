import CategoryCard from "./DashboardCategoryCards";

interface CategoryItem {
  label: string;
  image: string;
}

interface CategorySectionProps {
  categoryName: string;
  cards: CategoryItem[];
}

export default function DashboardCategoryCardSection({
  categoryName,
  cards,
}: CategorySectionProps) {
  return (
    <section className="container-fluid px-3 px-lg-4 py-4">
      {/* Heading */}
      <div className="d-flex align-items-center justify-content-center border border-2 rounded-3 mb-4 category-section-heading">
        <h2 className="mb-0 fw-semibold category-section-title">
          {categoryName}
        </h2>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {cards.map((card, index) => (
          <div
            key={`${card.label}-${index}`}
            className="col-12 col-md-6 col-lg-4"
          >
            <CategoryCard
              label={card.label}
              image={card.image}
            />
          </div>
        ))}
      </div>
        <style>
        {`
        .category-section-heading {
  height: 84px;
  border: 2px solid #10abc1;
  border-radius: 12px;
}

.category-section-heading h2 {
  font-size: 40px;
  color: #10abc1;
}

.category-card {
  height: 320px;
  transition: transform 0.3s ease;
}

.category-card-image {
  height: 320px;
}

.category-card-img {
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover {
  transform: translateY(-3px);
}

.category-card:hover .category-card-img {
  transform: scale(1.05);
}

/* Label */
.category-card-label {
  font-size: 16px;
}

/* Fallback */
.category-card-placeholder {
  background: #f5f6f8;
  border: 1px solid #e1e4e8;
}

.category-card-icon {
  font-size: 70px;
  color: #10abc1;
}

.category-card-placeholder span {
  font-size: 18px;
  color: #6c757d;
}

/* Tablet */
@media (max-width: 991.98px) {
  .category-card,
  .category-card-image {
    height: 300px;
  }
}

/* Mobile */
@media (max-width: 767.98px) {
  .category-section {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .category-section-heading {
    height: 70px;
  }

  .category-section-heading h2 {
    font-size: 32px;
  }

  .category-card,
  .category-card-image {
    height: 280px;
  }

  .category-card-icon {
    font-size: 60px;
  }

  .category-card-placeholder span {
    font-size: 16px;
  }
}`}
      </style>
    </section>
  );
}