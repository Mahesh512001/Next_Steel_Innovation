import { useId } from "react";
import type { HeroSlide } from "../../types/hero.types";

interface HeroSliderProps {
  slides: HeroSlide[];
  interval?: number;
  className?: string;
}

export default function HeroSlider({
  slides,
  interval = 5000,
  className = "",
}: HeroSliderProps) {
  const reactId = useId();

  // Convert React's generated ID into a safe HTML ID
  const carouselId = `heroCarousel-${reactId.replace(/:/g, "")}`;

  if (!slides.length) {
    return null;
  }

  return (
    <section
      aria-label="Featured products"
      className={`w-100 overflow-hidden hero-slider ${className}`}
    >
      <div
        id={carouselId}
        className="carousel slide h-100"
        data-bs-ride="carousel"
        data-bs-interval={interval}
      >
        {/* INDICATORS */}
        {slides.length > 1 && (
          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* SLIDES */}
        <div className="carousel-inner h-100">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item h-100 ${
                index === 0 ? "active" : ""
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="d-block w-100 h-100 hero-slide"
              />

              {/* Optional label */}
              {slide.label && (
                <div className="position-absolute bottom-0 end-0 m-4 px-4 py-2 bg-white rounded shadow fw-semibold text-dark">
                  {slide.label}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* PREVIOUS */}
        {slides.length > 1 && (
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
            aria-label="Previous slide"
          >
            <span
              className="carousel-control-prev-icon hero-control-icon"
              aria-hidden="true"
            />

            <span className="visually-hidden">
              Previous
            </span>
          </button>
        )}

        {/* NEXT */}
        {slides.length > 1 && (
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
            aria-label="Next slide"
          >
            <span
              className="carousel-control-next-icon hero-control-icon"
              aria-hidden="true"
            />

            <span className="visually-hidden">
              Next
            </span>
          </button>
        )}
      </div>

      <style>{`
        .hero-slider {
          background-color: #f8fafc;
        }

        .hero-slide {
          object-fit: cover;
          object-position: center;
        }

        .hero-control-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.95);
          background-size: 18px 18px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .carousel-control-prev-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23c1121f' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E");
        }

        .carousel-control-next-icon {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23c1121f' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
        }

        .carousel-indicators [data-bs-target] {
          width: 10px;
          height: 10px;
          margin-left: 4px;
          margin-right: 4px;
          border: 1px solid #ffcaca;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          opacity: 1;
        }

        .carousel-indicators .active {
          background-color: #c1121f;
          border-color: #c1121f;
        }

        @media (max-width: 575.98px) {
          .hero-control-icon {
            width: 30px;
            height: 30px;
          }
        }

        @media (min-width: 576px) {
          .hero-control-icon {
            width: 36px;
            height: 36px;
          }
        }

        @media (min-width: 768px) {
          .hero-control-icon {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </section>
  );
}