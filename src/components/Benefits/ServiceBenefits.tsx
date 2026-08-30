
import { benefitsData } from "../../data/benefits.data";

function TruckIcon() {
  return (
    <svg
      className="benefit-icon"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="8" y="15" width="32" height="32" rx="1" />
      <path d="M40 25h10l7 8v14H40V25Z" />
      <circle cx="20" cy="50" r="5" />
      <circle cx="50" cy="50" r="5" />
      <path d="M8 21h18M8 27h13" />
      <path d="M45 31h8" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg
      className="benefit-icon"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="8" y="14" width="40" height="28" rx="3" />
      <path d="M8 23h40" />
      <path d="M15 33h14" />

      {/* Shield */}
      <path d="M46 35l8 3v6c0 6-4 10-8 12-4-2-8-6-8-12v-6l8-3Z" />
      <path d="m42 44 3 3 6-6" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      className="benefit-icon"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      {/* Center person */}
      <circle cx="32" cy="17" r="6" />
      <path d="M22 42v-5c0-6 4-10 10-10s10 4 10 10v5" />

      {/* Left person */}
      <circle cx="16" cy="22" r="5" />
      <path d="M8 44v-4c0-5 3-8 8-8 3 0 6 1 7 4" />

      {/* Right person */}
      <circle cx="48" cy="22" r="5" />
      <path d="M56 44v-4c0-5-3-8-8-8-3 0-6 1-7 4" />

      {/* Body */}
      <path d="M25 44h14" />
      <path d="M28 44v8M36 44v8" />
    </svg>
  );
}

function GstIcon() {
  return (
    <svg
      className="benefit-icon"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="12" y="7" width="38" height="48" rx="2" />

      <text
        x="19"
        y="25"
        fontSize="10"
        fontWeight="600"
        fill="currentColor"
        stroke="none"
      >
        GST
      </text>

      <path d="M18 32h25M18 38h25M18 44h15" />

      {/* Rupee / bill circle */}
      <circle cx="47" cy="47" r="8" fill="white" />
      <path d="M44 44h6M44 47h6M46 47c0 3 3 4 4 5M46 42c0 2 2 3 4 3" />
    </svg>
  );
}

const icons = [TruckIcon, CardIcon, UsersIcon, GstIcon];

export default function ServiceBenefits() {
  return (
    <section className="w-100" style={{ backgroundColor: "#B0CDE6" }}>
      <div className="container-fluid px-0">
        <div className="row g-0 mx-auto service-benefits-container">
          {benefitsData.map((benefit, index) => {
            const Icon = icons[index];

            return (
              <div
                key={benefit.title}
                className="
                  col-12
                  col-md-6
                  col-lg-3
                  d-flex
                  align-items-center
                  gap-4
                  border-bottom
                  px-4
                  py-4
                  px-md-5
                  py-lg-4
                  border-lg-end
                  benefit-item
                "
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0"
                  style={{ color: "#0795a3" }}
                >
                  <Icon />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="mb-0 fw-medium"
                    style={{
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "#0f172a",
                    }}
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="mt-1 mb-0"
                    style={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#334155",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-benefits-container {
          max-width: 1500px;
        }

        .benefit-icon {
          width: 56px;
          height: 56px;
        }

        .benefit-item {
          min-height: 120px;
          border-color: #dce5e9 !important;
        }

        @media (min-width: 992px) {
          .benefit-item {
            min-height: 155px;
            border-bottom: 0 !important;
            border-right: 1px solid #dce5e9 !important;
            padding-left: 3rem !important;
            padding-right: 3rem !important;
          }

          .benefit-item:last-child {
            border-right: 0 !important;
          }
        }

        @media (max-width: 991.98px) {
          .benefit-item {
            padding-left: 2.5rem !important;
            padding-right: 2.5rem !important;
          }
        }

        @media (max-width: 767.98px) {
          .benefit-item {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

