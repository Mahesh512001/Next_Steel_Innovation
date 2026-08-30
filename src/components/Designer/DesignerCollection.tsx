
import { useCallback,useEffect, useState } from "react";
import type { DesignerSlide } from "../../types/designer.types";

interface DesignerCollectionProps {
  slides: DesignerSlide[];
}

export default function DesignerCollection({
  slides,
}: DesignerCollectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

const nextSlide = useCallback( () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  }, [slides.length]);

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="w-100 designer-section">
      <div className="mx-auto designer-container">

        <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4">

          {/* LEFT */}
          <div className="position-relative d-flex flex-column justify-content-center overflow-hidden rounded-3 bg-black designer-left">

            <div className="position-absolute designer-shape-one" />

            <div className="position-absolute designer-shape-two" />

          </div>

          {/* RIGHT SLIDER */}
          <div className="position-relative overflow-hidden rounded-3 bg-dark designer-slider">

            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`position-absolute top-0 start-0 w-100 h-100 ${
                  index === currentSlide ? "d-block" : "d-none"
                }`}
              >

                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading="lazy"
                  className="w-100 h-100 designer-image"
                />

                <div className="position-absolute bottom-0 end-0 mb-4 me-4 rounded bg-white designer-label">
                  {slide.label}
                </div>

              </div>
            ))}

            {/* Previous */}
            <button
              aria-label="Previous designer collection"
              onClick={previousSlide}
              className="position-absolute top-50 start-0 translate-middle-y d-flex align-items-center justify-content-center rounded-circle bg-white border-0 designer-button designer-button-prev"
            >
              <i className="bi bi-chevron-left" />
            </button>

            {/* Next */}
            <button
              aria-label="Next designer collection"
              onClick={nextSlide}
              className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-center rounded-circle bg-white border-0 designer-button designer-button-next"
            >
              <i className="bi bi-chevron-right" />
            </button>

          </div>
        </div>
      </div>

      <style>{`
        .designer-section {
          padding: 1.5rem 1rem;
        }

        .designer-container {
          max-width: 1900px;
        }

        .designer-left {
          min-height: 300px;
          width: 100%;
          padding: 2.5rem 1.5rem;
        }

        .designer-slider {
          height: 300px;
          width: 100%;
        }

        .designer-image {
          object-fit: cover;
          object-position: center;
        }

        .designer-label {
          margin-bottom: 1.75rem;
          margin-right: 1.75rem;
          padding: 0.75rem 1.5rem;
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .designer-shape-one {
          width: 128px;
          height: 128px;
          right: -32px;
          top: -48px;
          transform: rotate(45deg);
          border-radius: 25px;
          background-color: #075d67;
          opacity: 0.9;
        }

        .designer-shape-two {
          width: 112px;
          height: 112px;
          right: -8px;
          top: -28px;
          transform: rotate(45deg);
          border-radius: 22px;
          background-color: #0a6973;
          opacity: 0.9;
        }

        .designer-button {
          width: 40px;
          height: 40px;
          margin-top: 0;
          color: #c1121f;
          font-size: 20px;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 10;
        }

        .designer-button:hover {
          transform: translateY(-50%) scale(1.05);
          background-color: #fff5f5 !important;
        }

        .designer-button-prev {
          left: 1rem !important;
        }

        .designer-button-next {
          right: 1rem !important;
        }

        @media (min-width: 576px) {
          .designer-section {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .designer-left {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .designer-slider {
            height: 370px;
          }

          .designer-shape-one {
            width: 160px;
            height: 160px;
          }

          .designer-shape-two {
            width: 144px;
            height: 144px;
          }
        }

        @media (min-width: 992px) {
          .designer-section {
            padding-left: 1.75rem;
            padding-right: 1.75rem;
          }

          .designer-left {
            width: 27%;
            min-height: 425px;
            padding-left: 1.75rem;
            padding-right: 1.75rem;
          }

          .designer-slider {
            width: 73%;
            height: 425px;
          }

          .designer-button-prev {
            left: 1.5rem !important;
          }

          .designer-button-next {
            right: 1.5rem !important;
          }
        }

        @media (min-width: 1200px) {
          .designer-left {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (max-width: 767.98px) {
          .designer-button {
            width: 40px;
            height: 40px;
          }
        }

        @media (min-width: 768px) {
          .designer-button {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section>
  );
}

