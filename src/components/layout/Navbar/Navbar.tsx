
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import type { NavigationItem } from "../../../types/navigation.types";
import { siteConfig } from "../../../data/site.data";

import MobileMenu from "./MobileMenu";

interface NavbarProps {
  navigation: NavigationItem[];
}

export default function Navbar({ navigation }: NavbarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuToggle = (id: string) => {
    setActiveMenu((current) =>
      current === id ? null : id
    );
  };

  const handleCloseMenu = () => {
    setActiveMenu(null);
  };



  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchText.trim();

    if (!query) {
      navigate("/search");
      return;
    }

    useEffect(() => {
      searchInputRef.current?.focus();
    }, []);

    navigate(`/search?query=${encodeURIComponent(query)}`);
  };


  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header className="sticky-top z-50 border-bottom bg-white navbar-header">
        <div className="mx-auto navbar-container">

          <div className="d-flex align-items-center justify-content-between navbar-inner">

            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              to="/"
              aria-label={`${siteConfig.name} Home`}
              className="d-flex align-items-center flex-shrink-0"
              onClick={handleCloseMenu}
            >
              <img
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="navbar-logo"
              />
            </Link>


            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              aria-label="Main navigation"
              className="d-none d-lg-block"
            >
              <ul className="d-flex align-items-center list-unstyled mb-0 navbar-nav-list">

                {navigation.map((item) => (
                  <li
                    key={item.id}
                    className="position-relative d-flex align-items-center navbar-nav-item"
                    onMouseEnter={() => {
                      if (item.hasDropdown) {
                        setActiveMenu(item.id);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) {
                        setActiveMenu(null);
                      }
                    }}
                  >

                    {/* DIRECT LINK */}

                    {!item.hasDropdown && (
                      <Link
                        to={item.href ?? "#"}
                        onClick={handleCloseMenu}
                        className="d-flex align-items-center navbar-link"
                      >
                        {item.label}
                      </Link>
                    )}


                    {/* DROPDOWN BUTTON */}

                    {item.hasDropdown && (
                      <button
                        type="button"
                        onClick={() =>
                          handleMenuToggle(item.id)
                        }
                        className="d-flex align-items-center gap-2 navbar-link navbar-dropdown-button"
                        aria-expanded={
                          activeMenu === item.id
                        }
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>

                        <i
                          className={`bi bi-chevron-down navbar-chevron ${activeMenu === item.id
                            ? "rotate-180"
                            : ""
                            }`}
                        />
                      </button>
                    )}


                    {/* =================================================
                        DROPDOWN
                    ================================================== */}

                    {item.hasDropdown &&
                      item.columns &&
                      activeMenu === item.id && (
                        <div
                          className="position-absolute start-50 translate-middle-x navbar-dropdown"
                          onMouseEnter={() =>
                            setActiveMenu(item.id)
                          }
                          onMouseLeave={() =>
                            setActiveMenu(null)
                          }
                        >
                          <div className="overflow-hidden bg-white navbar-dropdown-box">

                            <div className="navbar-dropdown-content">

                              {item.columns.map(
                                (column, columnIndex) => (
                                  <div
                                    key={`${item.id}-column-${columnIndex}`}
                                  >

                                    {column.title && (
                                      <h3 className="mb-3 navbar-column-title">
                                        {column.title}
                                      </h3>
                                    )}

                                    <ul className="list-unstyled mb-0 navbar-column-links">

                                      {column.links.map(
                                        (link) => (
                                          <li
                                            key={`${item.id}-${link.label}`}
                                          >
                                            <Link
                                              to={link.href}
                                              onClick={
                                                handleCloseMenu
                                              }
                                              className="d-flex align-items-center justify-content-between navbar-dropdown-link"
                                            >
                                              <span>
                                                {link.label}
                                              </span>

                                              <i className="bi bi-arrow-right navbar-arrow" />
                                            </Link>
                                          </li>
                                        )
                                      )}

                                    </ul>
                                  </div>
                                )
                              )}

                            </div>
                          </div>
                        </div>
                      )}

                  </li>
                ))}

              </ul>
            </nav>


            {/* =================================================
                RIGHT SIDE ACTIONS
            ================================================== */}



            {/* SEARCH INPUT */}
            <form
              className="d-flex align-items-center navbar-actions"
              onSubmit={handleSearch}
            >
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products..."
                aria-label="Search products"
                className="navbar-search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button
                type="submit"
                aria-label="Search"
                className="d-flex align-items-center justify-content-center rounded-circle navbar-action-button border-0 bg-transparent"
              >
                <i className="bi bi-search fs-5" />
              </button>

              <button
                type="button"
                aria-label="Open menu"
                className="d-flex d-lg-none align-items-center justify-content-center rounded-circle border-0 bg-transparent navbar-action-button"
                onClick={() => setActiveMenu("mobile")}
              >
                <i className="bi bi-list fs-2" />
              </button>
            </form>


          </div>
        </div>
      </header>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <MobileMenu
        navigation={navigation}
        isOpen={activeMenu === "mobile"}
        onClose={handleCloseMenu}
      />


      {/* =====================================================
          CUSTOM CSS
      ====================================================== */}

      <style>{`
        /* ================================
           NAVBAR
        ================================= */

        .navbar-header {
          z-index: 1030;
          border-color: #e2e8f0 !important;
        }

        .navbar-container {
          width: 100%;
          max-width: 1900px;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

        .navbar-inner {
          height: 80px;
        }


        /* ================================
           LOGO
        ================================= */

        .navbar-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
        }


        /* ================================
           DESKTOP NAV
        ================================= */

        .navbar-nav-list {
          height: 80px;
          gap: 1.25rem;
        }

        .navbar-nav-item {
          height: 80px;
        }

        .navbar-link {
          border: 0;
          background: transparent;
          padding: 0;

          color: #1e293b;
          text-decoration: none;

          font-size: 15px;
          font-weight: 500;

          transition: color 0.2s ease;
        }

        .navbar-link:hover {
          color: #c1121f;
        }

        .navbar-dropdown-button {
          cursor: pointer;
        }

        .navbar-chevron {
          font-size: 12px;
          transition: transform 0.2s ease;
        }

        .rotate-180 {
          transform: rotate(180deg);
        }


        /* ================================
           DROPDOWN
        ================================= */

        .navbar-dropdown {
          top: 100%;
          width: max-content;
          max-width: calc(100vw - 40px);
        }

        .navbar-dropdown-box {
          margin-top: 8px;

          border: 1px solid #e2e8f0;
          border-radius: 12px;

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .navbar-dropdown-content {
          display: grid;
          gap: 2rem;
          padding: 1.75rem;
        }

        .navbar-column-title {
          color: #0f172a;

          font-size: 14px;
          font-weight: 700;

          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .navbar-column-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .navbar-dropdown-link {
          gap: 1.5rem;

          color: #334155;
          text-decoration: none;

          white-space: nowrap;

          font-size: 15px;

          transition: color 0.2s ease;
        }

        .navbar-dropdown-link:hover {
          color: #c1121f;
        }

        .navbar-arrow {
          opacity: 0;
          transform: translateX(-4px);

          font-size: 14px;

          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }

        .navbar-dropdown-link:hover .navbar-arrow {
          opacity: 1;
          transform: translateX(0);
        }


        /* ================================
           RIGHT ACTIONS
        ================================= */

        .navbar-actions {
          gap: 0.75rem;
        }

        .navbar-search-input {
          width: 120px;
          height: 40px;

          border: 0;
          outline: none;

          color: #334155;
          font-size: 15px;
          background: transparent;
        }

        .navbar-search-input::placeholder {
          color: #64748b;
        }

        .navbar-action-button {
          width: 40px;
          height: 40px;

          color: #1e293b;
          text-decoration: none;

          transition:
            background-color 0.2s ease,
            color 0.2s ease;
        }

        .navbar-action-button:hover {
          color: #c1121f;
          background-color: #f8fafc;
        }


        /* ================================
           RESPONSIVE
        ================================= */

        @media (min-width: 576px) {
          .navbar-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 1200px) {
          .navbar-nav-list {
            gap: 1.75rem;
          }
        }

        @media (min-width: 992px) {
          .navbar-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (max-width: 991.98px) {
          .navbar-search-input {
            display: block;

          }
        }
      `}</style>
    </>
  );
}

