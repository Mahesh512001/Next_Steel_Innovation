

import type { HeroSlide } from "../../types/hero.types";
import HeroSlider from "../Hero/HeroSlider";

const designerSlides: HeroSlide[] = [
  {
    id: 1,
    image: "./hero/hero4.png",
    alt: "3-Shelf Mild Steel Wire Spice Rack",
    label: <>Bathroom Accessories</>,
  },
  {
    id: 2,
    image: "./hero/hero5.png",
    alt: "4-Tier Mild Steel Pipe Shoe Rack",
    label: <>Mirror</>,
  },
  {
    id: 3,
    image: "./hero/hero6.png",
    alt: "Mild Steel 9-Hook Door Hanger",
    label: <>Wash Basin</>,
  },
];

export default function DesignerCollection() {
  return (
    <section className="designer-section py-4 px-3 px-sm-4">
      <div className="container-fluid designer-container">
        <div className="row g-3 g-lg-4 align-items-stretch">

          {/* =========================
              LEFT CONTENT - 27%
          ========================== */}
          <div className="col-12 col-lg-3 designer-left-wrapper">
            <div className="designer-left">

              {/* Decorative shapes */}
              <div className="designer-shape designer-shape-one" />
              <div className="designer-shape designer-shape-two" />

              <div className="position-relative z-1">
                <h2 className="designer-title">
                  Designed for
                  <br />
                  Better Living
                </h2>

                <p className="designer-description">
                  Discover smart steel solutions designed to keep
                  your home organized, stylish and functional.
                </p>

                <button
                  type="button"
                  className="btn designer-btn"
                >
                  Explore Collection
                  <i className="bi bi-arrow-right ms-2" />
                </button>
              </div>

            </div>
          </div>

          {/* =========================
              RIGHT SLIDER - 73%
          ========================== */}
          <div className="col-12 col-lg-9 designer-slider-wrapper">
            <HeroSlider
              slides={designerSlides}
              interval={4000}
              className="designer-slider"
            />
          </div>

        </div>
      </div>

      <style>{`
        .designer-section {
          width: 100%;
          background: #ffffff;
        }

        .designer-container {
          max-width: 1900px;
          margin: 0 auto;
        }

        /* =========================
           LEFT PANEL
        ========================== */

        .designer-left-wrapper {
          min-height: 300px;
        }

        .designer-left {
          position: relative;
          height: 100%;
          min-height: 300px;
          overflow: hidden;
          border-radius: 12px;
          background: #000000;
          padding: 40px 28px;
          display: flex;
          align-items: center;
        }

        .designer-title {
          margin: 0 0 15px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1.15;
          font-weight: 700;
        }

        .designer-description {
          max-width: 330px;
          margin-bottom: 24px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 14px;
          line-height: 1.7;
        }

        .designer-btn {
          border: 0;
          border-radius: 6px;
          padding: 10px 18px;
          background: #ffffff;
          color: #111111;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .designer-btn:hover {
          background: #075d67;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* =========================
           DECORATIVE SHAPES
        ========================== */

        .designer-shape {
          position: absolute;
          right: -35px;
          top: -50px;
          border-radius: 25px;
          transform: rotate(45deg);
        }

        .designer-shape-one {
          width: 130px;
          height: 130px;
          background: #075d67;
          opacity: 0.9;
        }

        .designer-shape-two {
          width: 115px;
          height: 115px;
          right: -8px;
          top: -28px;
          border-radius: 22px;
          background: #0a6973;
          opacity: 0.9;
        }

        /* =========================
           RIGHT SLIDER
        ========================== */

        .designer-slider-wrapper {
          min-height: 300px;
        }

        .designer-slider {
          height: 300px;
          border-radius: 12px;
        }

        .designer-slider .carousel,
        .designer-slider .carousel-inner,
        .designer-slider .carousel-item {
          height: 100%;
        }

        .designer-slider .hero-slide {
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .designer-slider .carousel-control-prev {
          justify-content: flex-start;
          padding-left: 18px;
        }

        .designer-slider .carousel-control-next {
          justify-content: flex-end;
          padding-right: 18px;
        }

        .designer-slider .carousel-control-prev-icon,
        .designer-slider .carousel-control-next-icon {
          background-color: #ffffff;
          border-radius: 50%;
          background-size: 16px 16px;
        }

        .designer-slider .carousel-indicators {
          bottom: 5px;
        }

        .designer-slider .carousel-indicators [data-bs-target] {
          width: 9px;
          height: 9px;
        }

        @media (min-width: 576px) {
          .designer-left {
            min-height: 370px;
          }

          .designer-slider {
            height: 370px;
          }

          .designer-title {
            font-size: 34px;
          }
        }

        @media (min-width: 992px) {
          .designer-left {
            min-height: 425px;
          }

          .designer-slider {
            height: 425px;
          }

          .designer-left {
            padding: 40px 28px;
          }

          .designer-title {
            font-size: 32px;
          }
        }

        @media (min-width: 1200px) {
          .designer-left {
            padding: 40px 32px;
          }

          .designer-title {
            font-size: 36px;
          }
        }

        @media (max-width: 991.98px) {
          .designer-left {
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  );
}

