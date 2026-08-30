
const qualityItems = [
  {
    text: "Professional Quality",
    color: "brand",
  },
  {
    text: "Trusted Products",
    color: "cyan",
  },
  {
    text: "Steel Storage Solutions",
    color: "orange",
  },
  {
    text: "Kitchen Organization",
    color: "brand",
  },
];

export default function BrandQualityStrip() {
  return (
    <section className="w-100 border-top py-4 brand-quality-strip">
      <div className="container-fluid mx-auto quality-container">
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 text-center">
          {qualityItems.map((item) => {
            const classes =
              item.color === "cyan"
                ? "border-cyan text-cyan"
                : item.color === "orange"
                ? "border-orange text-orange"
                : "border-brand text-brand";

            const dot =
              item.color === "cyan"
                ? "bg-cyan"
                : item.color === "orange"
                ? "bg-orange"
                : "bg-brand";

            return (
              <span
                key={item.text}
                className={`d-inline-flex align-items-center gap-2 rounded-pill border bg-white px-3 py-2 fw-semibold quality-badge ${classes}`}
              >
                <span
                  className={`rounded-circle quality-dot ${dot}`}
                />

                {item.text}
              </span>
            );
          })}
        </div>
      </div>

      <style>{`
        .brand-quality-strip {
          background-color: #fff5f5;
          border-top-color: #ffe8e8 !important;
        }

        .quality-container {
          max-width: 1900px;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

        .quality-badge {
          font-size: 12px;
          white-space: nowrap;
        }

        .quality-dot {
          width: 10px;
          height: 10px;
          flex-shrink: 0;
        }

        /* Brand */
        .border-brand {
          border-color: #ffcaca !important;
        }

        .text-brand {
          color: #a50f1a !important;
        }

        .bg-brand {
          background-color: #c1121f !important;
        }

        /* Cyan */
        .border-cyan {
          border-color: #b8e8eb !important;
        }

        .text-cyan {
          color: #087f89 !important;
        }

        .bg-cyan {
          background-color: #0795a3 !important;
        }

        /* Orange */
        .border-orange {
          border-color: #fed7aa !important;
        }

        .text-orange {
          color: #c2410c !important;
        }

        .bg-orange {
          background-color: #f97316 !important;
        }

        @media (min-width: 576px) {
          .quality-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 992px) {
          .quality-container {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }
      `}</style>
    </section>
  );
}

