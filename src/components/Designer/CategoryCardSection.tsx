
import CategoryCard from "./CategoryCards";

interface CategoryItem {
  label: string;
  image: string;
}

interface CategorySectionProps {
  categoryName: string;
  cards: CategoryItem[];
}

export default function CategoryCardSection({
  categoryName,
  cards,
}: CategorySectionProps) {
  return (
    <section className="w-full px-5 lg:px-8 py-6">
      {/* Heading */}
      <div className="h-[84px] flex items-center justify-center border-2 border-[#10abc1] rounded-xl mb-6">
        <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#10abc1]">
          {categoryName}
        </h2>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <CategoryCard
            key={`${card.label}-${index}`}
            label={card.label}
            image={card.image}
          />
        ))}
      </div>
    <style>
      {`.category-section-heading {
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
}

.category-card-image {
  height: 320px;
}

.category-card-img {
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-card-img {
  transform: scale(1.05);
}

/* Fallback card */
.category-card-placeholder {
  width: 100%;
  background: #f5f6f8;
  border: 1px solid #e1e4e8;
}

.category-card-icon {
  font-size: 70px;
  color: #10abc1;
}

.category-card-placeholder span {
  font-size: 18px;
}

/* Mobile */
@media (max-width: 767.98px) {
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
}`}
    </style>
    </section>
    
  );
}

