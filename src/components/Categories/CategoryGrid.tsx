
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories.data";

export default function CategoryGrid() {
  return (
    <div className="row category-grid">
      {categories.map((category) => (
        <div key={category.slug} className="col-6 col-sm-4 col-md-3 col-lg-2">
          <CategoryCard category={category} />
        </div>
      ))}

      <style>{`
        .category-grid {
          column-gap: 0;
          row-gap: 2rem;
        }

        .category-grid > div {
          padding-left: 10px;
          padding-right: 10px;
        }

        @media (min-width: 576px) {
          .category-grid > div {
            padding-left: 10px;
            padding-right: 10px;
          }
        }

        @media (min-width: 768px) {
          .category-grid {
            margin-left: -16px;
            margin-right: -16px;
          }

          .category-grid > div {
            padding-left: 16px;
            padding-right: 16px;
          }
        }

        @media (min-width: 992px) {
          .category-grid {
            margin-left: -12px;
            margin-right: -12px;
          }

          .category-grid > div {
            /*
             * Original Tailwind:
             * lg:grid-cols-8
             *
             * Bootstrap's standard grid has 12 columns,
             * so 8 equal columns need custom width.
             */
            flex: 0 0 12.5%;
            max-width: 12.5%;
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>
    </div>
  );
}

