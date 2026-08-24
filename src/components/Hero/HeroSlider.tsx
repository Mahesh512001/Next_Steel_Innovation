import { useEffect, useState } from "react";
import type { HeroSlide } from "../../types/hero.types";

interface HeroSliderProps {
  slides: HeroSlide[];
  interval?: number;
}

export default function HeroSlider({
  slides,
  interval = 5000,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [interval, slides.length]);

  if (!slides.length) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden bg-surface-100">

      {/* Slides */}
      <div>
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            className={`h-[260px] w-full object-cover object-center transition-opacity duration-500 sm:h-[350px] md:h-[450px] lg:h-[520px] xl:h-[580px] ${
              index === currentSlide
                ? "block opacity-100"
                : "hidden opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Previous */}
      <button
        aria-label="Previous product"
        onClick={previousSlide}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-brand-500 shadow-md hover:scale-105 hover:bg-brand-50 md:left-6 md:h-12 md:w-12 md:text-2xl"
      >
        <i className="bi bi-chevron-left" />
      </button>

      {/* Next */}
      <button
        aria-label="Next product"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-brand-500 shadow-md hover:scale-105 hover:bg-brand-50 md:right-6 md:h-12 md:w-12 md:text-2xl"
      >
        <i className="bi bi-chevron-right" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentSlide
                ? "bg-brand-500"
                : "border border-brand-200 bg-white/90"
            }`}
          />
        ))}
      </div>

    </section>
  );
}