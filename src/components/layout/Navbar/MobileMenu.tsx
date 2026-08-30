
import type { NavigationItem } from "../../../types/navigation.types";
import { siteConfig } from "../../../data/site.data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navigation,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-menu-overlay ${
          isOpen ? "show" : ""
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`mobile-menu-sidebar ${
          isOpen ? "show" : ""
        }`}
      >
        <div className="mobile-menu-content">

          {/* Close */}
          <div className="d-flex justify-content-end mb-4">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="btn mobile-close-btn"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>

          {/* Search */}
          <div className="position-relative mb-5">
            <input
              aria-label="Search products"
              className="form-control mobile-search"
              placeholder="Search products..."
              type="text"
            />

            <i className="bi bi-search mobile-search-icon" />
          </div>

          {/* Navigation */}
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href || "#"}
                onClick={onClose}
                className="mobile-nav-link d-flex align-items-center justify-content-between"
              >
                <span>{item.label}</span>

                <i className="bi bi-chevron-right mobile-nav-icon" />
              </a>
            ))}

            <a
              href="#"
              onClick={onClose}
              className="mobile-nav-contact d-block"
            >
              Contact Us
            </a>
          </nav>

          {/* Account / Contact */}
          <div className="mobile-contact-section mt-5">

            <div className="mobile-contact-text">
              <span className="fw-bold mobile-contact-title">
                Call Us:
              </span>{" "}
              {siteConfig.phone}
            </div>

            <div className="mobile-contact-text">
              <span className="fw-bold mobile-contact-title">
                Email:
              </span>{" "}
              {siteConfig.email}
            </div>

            {/* Social */}
            <div className="d-flex align-items-center gap-3 pt-2">

              <a
                aria-label="Facebook"
                href="#"
                className="social-btn social-facebook d-flex align-items-center justify-content-center rounded-circle shadow-sm"
              >
                <i className="bi bi-facebook" />
              </a>

              <a
                aria-label="Instagram"
                href="#"
                className="social-btn social-instagram d-flex align-items-center justify-content-center rounded-circle shadow-sm"
              >
                <i className="bi bi-instagram" />
              </a>

              <a
                aria-label="YouTube"
                href="#"
                className="social-btn social-youtube d-flex align-items-center justify-content-center rounded-circle shadow-sm"
              >
                <i className="bi bi-youtube" />
              </a>

            </div>
          </div>
        </div>
      </aside>

      <style>{`
        /* ================================
           OVERLAY
        ================================= */

        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 1040;
          background-color: rgba(92, 0, 0, 0.20);
          backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease,
                      visibility 0.3s ease;
        }

        .mobile-menu-overlay.show {
          opacity: 1;
          visibility: visible;
        }


        /* ================================
           SIDEBAR
        ================================= */

        .mobile-menu-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1050;

          width: 92%;
          max-width: 500px;
          height: 100vh;

          overflow-y: auto;

          background-color: #ffffff;

          box-shadow:
            0 10px 40px rgba(18, 97, 201, 0.15);

          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        .mobile-menu-sidebar.show {
          transform: translateX(0);
        }


        /* ================================
           CONTENT
        ================================= */

        .mobile-menu-content {
          padding: 2rem 1.5rem;
          padding-bottom: 2rem;
        }


        /* ================================
           CLOSE BUTTON
        ================================= */

        .mobile-close-btn {
          padding: 0;
          border: 0;
          background: transparent;
          color: #1e293b;
          font-size: 24px;
        }

        .mobile-close-btn:hover {
          color: #c1121f;
        }


        /* ================================
           SEARCH
        ================================= */

        .mobile-search {
          height: 52px;
          padding: 0 3rem 0 1.25rem;

          border: 1px solid #e2e8f0;
          border-radius: 12px;

          background-color: #f8fafc;

          font-size: 17px;
          font-weight: 500;
          color: #0f172a;

          box-shadow: none;
        }

        .mobile-search::placeholder {
          color: #64748b;
        }

        .mobile-search:focus {
          border-color: #e85b65;
          background-color: #ffffff;

          box-shadow:
            0 0 0 4px #fff5f5;
        }

        .mobile-search-icon {
          position: absolute;
          top: 50%;
          right: 1.25rem;

          transform: translateY(-50%);

          color: #c1121f;
          font-size: 20px;

          pointer-events: none;
        }


        /* ================================
           NAVIGATION
        ================================= */

        .mobile-nav-link {
          padding: 1rem 0;

          border-bottom: 1px solid #e2e8f0;

          color: #0f172a;
          text-decoration: none;

          font-size: 18px;
          font-weight: 600;

          transition: color 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: #c1121f;
        }

        .mobile-nav-icon {
          font-size: 13px;
        }

        .mobile-nav-contact {
          padding: 1rem 0;

          color: #0f172a;
          text-decoration: none;

          font-size: 18px;
          font-weight: 600;

          transition: color 0.2s ease;
        }

        .mobile-nav-contact:hover {
          color: #c1121f;
        }


        /* ================================
           CONTACT
        ================================= */

        .mobile-contact-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-contact-text {
          color: #334155;
          font-size: 17px;
        }

        .mobile-contact-title {
          color: #0f172a;
        }


        /* ================================
           SOCIAL BUTTONS
        ================================= */

        .social-btn {
          width: 36px;
          height: 36px;

          color: #ffffff;
          text-decoration: none;

          transition:
            transform 0.2s ease,
            background-color 0.2s ease;
        }

        .social-btn:hover {
          transform: scale(1.05);
        }

        .social-btn i {
          font-size: 18px;
        }

        .social-facebook {
          background-color: #c1121f;
        }

        .social-facebook:hover {
          background-color: #a50f1a;
          color: #ffffff;
        }

        .social-instagram {
          background-color: #0795a3;
        }

        .social-instagram:hover {
          background-color: #087f89;
          color: #ffffff;
        }

        .social-youtube {
          background-color: #c1121f;
        }

        .social-youtube:hover {
          background-color: #a50f1a;
          color: #ffffff;
        }


        /* ================================
           RESPONSIVE
        ================================= */

        @media (min-width: 576px) {
          .mobile-menu-content {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </>
  );
}
