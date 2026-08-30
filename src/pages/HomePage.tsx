import HeroSlider from "../components/Hero/HeroSlider";
import ServiceBenefits from "../components/Benefits/ServiceBenefits";
import CategorySection from "../components/Categories/CategorySection";

import { heroSlides } from "../data/hero.data";

export default function HomePage() {
  return (
    <main>

      {/* =================================================
          HERO
      ================================================== */}
      <HeroSlider slides={heroSlides} />


      {/* =================================================
          SERVICE BENEFITS
      ================================================== */}
      <ServiceBenefits />


      {/* =================================================
          CATEGORIES
      ================================================== */}
      <CategorySection />


      {/* =================================================
          TEMPORARY SECTION
      ================================================== */}
      <section
        className="d-flex align-items-center justify-content-center bg-light"
        style={{
          minHeight: "350px",
        }}
      >
        <div className="px-4 text-center">

          <h2
            className="fw-bold"
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              color: "#172033",
            }}
          >
            More Sections Coming Here
          </h2>

          <p
            className="mt-3 mb-0"
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#475569",
            }}
          >
            More products and collections will be added soon.
          </p>

        </div>
      </section>

    </main>
  );
}