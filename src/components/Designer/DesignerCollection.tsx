import { useEffect, useState } from "react";
import type { DesignerSlide } from "../../types/designer.types";

interface DesignerCollectionProps {
  slides: DesignerSlide[];
}

export default function DesignerCollection({
  slides,
}: DesignerCollectionProps) {
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
    const timer = setInterval(nextSlide, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full px-4 py-6 sm:px-6 lg:px-7">
      <div className="mx-auto max-w-[1900px]">

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">

          {/* LEFT */}
          <div className="relative flex min-h-[300px] w-full flex-col justify-center overflow-hidden rounded-xl bg-black px-6 py-10 sm:px-8 lg:min-h-[425px] lg:w-[27%] lg:px-7 xl:px-8">

            <div className="absolute -right-8 -top-12 h-32 w-32 rotate-45 rounded-[25px] bg-[#075d67] opacity-90 sm:h-40 sm:w-40" />

            <div className="absolute -right-2 -top-7 h-28 w-28 rotate-45 rounded-[22px] bg-[#0a6973] opacity-90 sm:h-36 sm:w-36" />

          </div>

          {/* RIGHT SLIDER */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-slate-800 sm:h-[370px] lg:h-[425px] lg:w-[73%]">

            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 ${
                  index === currentSlide
                    ? "block"
                    : "hidden"
                }`}
              >

                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute bottom-7 right-7 rounded-md bg-white/95 px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg">
                  {slide.label}
                </div>

              </div>
            ))}

            {/* Previous */}
            <button
              aria-label="Previous designer collection"
              onClick={previousSlide}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-brand-500 shadow-md hover:scale-105 hover:bg-brand-50 md:left-6 md:h-12 md:w-12"
            >
              <i className="bi bi-chevron-left" />
            </button>

            {/* Next */}
            <button
              aria-label="Next designer collection"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-brand-500 shadow-md hover:scale-105 hover:bg-brand-50 md:right-6 md:h-12 md:w-12"
            >
              <i className="bi bi-chevron-right" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}