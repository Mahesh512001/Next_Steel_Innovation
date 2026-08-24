import type { ServiceBenefit } from "../../types/benefit.types";

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
}

export default function ServiceBenefits({
  benefits,
}: ServiceBenefitsProps) {
  return (
    <section className="w-full border-y border-cyanbrand-100 bg-cyanbrand-50">
      <div className="mx-auto max-w-[1900px] px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 divide-y divide-surface-300 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex min-h-[115px] items-center justify-center gap-4 px-5 py-6 lg:justify-start lg:px-8"
            >

              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center ${benefit.iconColor}`}
              >
                <i className={`${benefit.icon} text-4xl`} />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold leading-6 text-ink-900">
                  {benefit.title}
                </h3>

                <p className="text-[13px] leading-5 text-ink-600">
                  {benefit.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}