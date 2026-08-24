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
    <section className="w-full border-t border-brand-100 bg-brand-50 py-6">
      <div className="mx-auto max-w-[1900px] px-5 sm:px-8 lg:px-12">

        <div className="flex flex-wrap items-center justify-center gap-3 text-center">

          {qualityItems.map((item) => {

            const classes =
              item.color === "cyan"
                ? "border-cyanbrand-200 text-cyanbrand-600"
                : item.color === "orange"
                ? "border-logoOrange-200 text-logoOrange-600"
                : "border-brand-200 text-brand-600";

            const dot =
              item.color === "cyan"
                ? "bg-cyanbrand-500"
                : item.color === "orange"
                ? "bg-logoOrange-500"
                : "bg-brand-500";

            return (
              <span
                key={item.text}
                className={`inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-semibold ${classes}`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />

                {item.text}
              </span>
            );
          })}

        </div>
      </div>
    </section>
  );
}