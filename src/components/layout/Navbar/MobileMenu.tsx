import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (id: string) => {
    setOpenDropdown((current) => (current === id ? null : id));
  };

  const handleClose = () => {
    setOpenDropdown(null);
    onClose();
  };

  return (
    <>
      {/* =====================================================
          OVERLAY
      ====================================================== */}

      <div
        className={`mobile-menu-overlay ${isOpen ? "show" : ""}`}
        onClick={handleClose}
      />

      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}

      <aside
        className={`mobile-menu-sidebar ${isOpen ? "show" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu-content">

          {/* =================================================
              CLOSE BUTTON
          ================================================== */}

          <div className="d-flex justify-content-end mb-4">
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close menu"
              className="btn mobile-close-btn"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>

          {/* =================================================
              SEARCH
          ================================================== */}

          <div className="position-relative mb-5">
            <input
              aria-label="Search products"
              className="form-control mobile-search"
              placeholder="Search products..."
              type="text"
            />

            <i className="bi bi-search mobile-search-icon" />
          </div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================== */}

          <nav aria-label="Mobile navigation">
            {navigation.map((item) => {
              const hasDropdown =
                item.hasDropdown &&
                item.columns &&
                item.columns.length > 0;

              return (
                <div key={item.id} className="mobile-nav-item">

                  {/* =========================================
                      DROPDOWN ITEM
                  ========================================== */}

                  {hasDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          handleDropdownToggle(item.id)
                        }
                        className="mobile-nav-link mobile-nav-button w-100 d-flex align-items-center justify-content-between"
                        aria-expanded={openDropdown === item.id}
                      >
                        <span>{item.label}</span>

                        <i
                          className={`bi bi-chevron-down mobile-nav-icon ${
                            openDropdown === item.id
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {/* =====================================
                          DROPDOWN CONTENT
                      ====================================== */}

                      {openDropdown === item.id && (
                        <div className="mobile-dropdown">

                          {item.columns?.map(
                            (column, columnIndex) => (
                              <div
                                key={`${item.id}-column-${columnIndex}`}
                                className="mobile-dropdown-column"
                              >

                                {/* COLUMN TITLE */}

                                {column.title && (
                                  <div className="mobile-dropdown-title">
                                    {column.title}
                                  </div>
                                )}

                                {/* COLUMN LINKS */}

                                <div className="mobile-dropdown-links">
                                  {column.links.map((link) => (
                                    <Link
                                      key={`${item.id}-${link.label}`}
                                      to={link.href}
                                      onClick={handleClose}
                                      className="mobile-dropdown-link"
                                    >
                                      <span>{link.label}</span>

                                      <i className="bi bi-arrow-right" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          )}

                        </div>
                      )}
                    </>
                  ) : (

                    /* =========================================
                       NORMAL LINK
                    ========================================== */

                    <Link
                      to={item.href ?? "#"}
                      onClick={handleClose}
                      className="mobile-nav-link d-flex align-items-center justify-content-between"
                    >
                      <span>{item.label}</span>

                      <i className="bi bi-chevron-right mobile-nav-icon" />
                    </Link>
                  )}
                </div>
              );
            })}

            {/* =============================================
                CONTACT US
            ============================================== */}

            <Link
              to="/contact"
              onClick={handleClose}
              className="mobile-nav-contact d-block"
            >
              Contact Us
            </Link>
          </nav>

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <div className="mobile-contact-section mt-5">

            {/* PHONE */}

            <div className="mobile-contact-text">
              <span className="fw-bold mobile-contact-title">
                Call Us:
              </span>{" "}
              {siteConfig.phone}
            </div>

            {/* EMAIL */}

            <div className="mobile-contact-text">
              <span className="fw-bold mobile-contact-title">
                Email:
              </span>{" "}
              {siteConfig.email}
            </div>

            {/* =================================================
                SOCIAL MEDIA
            ================================================== */}

            <div className="d-flex align-items-center gap-3 pt-2">

              {/* FACEBOOK */}

              <a
                aria-label="Facebook"
                href="#"
                onClick={handleClose}
                className="social-btn social-facebook d-flex align-items-center justify-content-center rounded-circle shadow-sm"
              >
                <i className="bi bi-facebook" />
              </a>

              {/* INSTAGRAM */}

              <a
                aria-label="Instagram"
                href="#"
                onClick={handleClose}
                className="social-btn social-instagram d-flex align-items-center justify-content-center rounded-circle shadow-sm"
              >
                <i className="bi bi-instagram" />
              </a>

              {/* YOUTUBE */}

              <a
                aria-label="YouTube"
                href="#"
                onClick={handleClose}
                className="social-btn social-youtube d-flex align-items-center justify-content-center rounded-circle shadow-sm"
              >
                <i className="bi bi-youtube" />
              </a>

            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`

        /* ================================================
           OVERLAY
        ================================================= */

        .mobile-menu-overlay {
          position: fixed;
          inset: 0;

          z-index: 1040;

          background-color: rgba(92, 0, 0, 0.20);

          backdrop-filter: blur(4px);

          opacity: 0;
          visibility: hidden;

          transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
        }

        .mobile-menu-overlay.show {
          opacity: 1;
          visibility: visible;
        }


        /* ================================================
           SIDEBAR
        ================================================= */

        .mobile-menu-sidebar {
          position: fixed;

          top: 0;
          left: 0;

          z-index: 1050;

          width: 92%;
          max-width: 500px;

          height: 100vh;

          overflow-y: auto;
          overscroll-behavior: contain;

          background-color: #ffffff;

          box-shadow:
            0 10px 40px rgba(18, 97, 201, 0.15);

          transform: translateX(-100%);

          transition:
            transform 0.3s ease;
        }

        .mobile-menu-sidebar.show {
          transform: translateX(0);
        }


        /* ================================================
           CONTENT
        ================================================= */

        .mobile-menu-content {
          padding: 2rem 1.5rem;
          padding-bottom: 2rem;
        }


        /* ================================================
           CLOSE BUTTON
        ================================================= */

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


        /* ================================================
           SEARCH
        ================================================= */

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


        /* ================================================
           NAVIGATION ITEM
        ================================================= */

        .mobile-nav-item {
          width: 100%;
        }


        /* ================================================
           NORMAL NAVIGATION LINK
        ================================================= */

        .mobile-nav-link {
          padding: 1rem 0;

          border-bottom: 1px solid #e2e8f0;

          color: #0f172a;

          text-decoration: none;

          font-size: 18px;

          font-weight: 600;

          transition:
            color 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: #c1121f;
        }


        /* ================================================
           DROPDOWN BUTTON
        ================================================= */

        .mobile-nav-button {
          border-top: 0;
          border-left: 0;
          border-right: 0;

          background: transparent;

          text-align: left;

          cursor: pointer;
        }

        .mobile-nav-button:focus {
          outline: none;
        }


        /* ================================================
           CHEVRON
        ================================================= */

        .mobile-nav-icon {
          font-size: 13px;

          transition:
            transform 0.2s ease;
        }

        .mobile-nav-icon.rotate-180 {
          transform: rotate(180deg);
        }


        /* ================================================
           MOBILE DROPDOWN
        ================================================= */

        .mobile-dropdown {
          margin: 0.25rem 0 0.75rem;

          padding: 0.5rem 0 0.5rem 1rem;

          border-left: 2px solid #e2e8f0;
        }


        /* ================================================
           DROPDOWN COLUMN
        ================================================= */

        .mobile-dropdown-column {
          margin-bottom: 0.75rem;
        }

        .mobile-dropdown-column:last-child {
          margin-bottom: 0;
        }


        /* ================================================
           DROPDOWN TITLE
        ================================================= */

        .mobile-dropdown-title {
          padding: 0.5rem 0;

          color: #0f172a;

          font-size: 13px;

          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 0.06em;
        }


        /* ================================================
           DROPDOWN LINKS
        ================================================= */

        .mobile-dropdown-links {
          display: flex;

          flex-direction: column;
        }

        .mobile-dropdown-link {
          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 0.7rem 0;

          color: #475569;

          text-decoration: none;

          font-size: 16px;

          font-weight: 500;

          transition:
            color 0.2s ease;
        }

        .mobile-dropdown-link:hover {
          color: #c1121f;
        }

        .mobile-dropdown-link i {
          font-size: 12px;

          transition:
            transform 0.2s ease;
        }

        .mobile-dropdown-link:hover i {
          transform: translateX(3px);
        }


        /* ================================================
           CONTACT LINK
        ================================================= */

        .mobile-nav-contact {
          padding: 1rem 0;

          color: #0f172a;

          text-decoration: none;

          font-size: 18px;

          font-weight: 600;

          transition:
            color 0.2s ease;
        }

        .mobile-nav-contact:hover {
          color: #c1121f;
        }


        /* ================================================
           CONTACT SECTION
        ================================================= */

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


        /* ================================================
           SOCIAL BUTTONS
        ================================================= */

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


        /* ================================================
           RESPONSIVE
        ================================================= */

        @media (min-width: 576px) {

          .mobile-menu-content {
            padding-left: 2rem;
            padding-right: 2rem;
          }

        }


        /* ================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 400px) {

          .mobile-menu-sidebar {
            width: 94%;
          }

          .mobile-menu-content {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .mobile-nav-link {
            font-size: 17px;
          }

          .mobile-dropdown-link {
            font-size: 15px;
          }

        }

      `}</style>
    </>
  );
}