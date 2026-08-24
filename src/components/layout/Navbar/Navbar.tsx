import { useState } from "react";
import type { NavigationItem } from "../../../types/navigation.types";
import { siteConfig } from "../../../data/site.data";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  navigation: NavigationItem[];
}

export default function Navbar({ navigation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-surface-300 bg-white">
        <div className="flex h-[80px] items-center justify-between px-5 lg:px-8">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            {/* Mobile Menu */}
            <button
              aria-label="Open product menu"
              onClick={() => setMobileMenuOpen(true)}
              className="text-2xl text-ink-800 hover:text-brand-500 md:hidden"
            >
              <i className="bi bi-list" />
            </button>

            {/* Logo */}
            <a
              href="#"
              aria-label={`${siteConfig.name} Home`}
              className="flex items-center"
            >
              <img
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="h-auto max-h-[62px] object-contain"
                width="120"
              />
            </a>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="mx-5 hidden h-[80px] items-center text-[15px] font-medium md:flex"
          >
            <ul className="flex h-[80px] items-center gap-5 lg:gap-6">

              {navigation.map((item) => (
                <li
                  key={item.id}
                  className="group relative flex h-[80px] items-center"
                >

                  <button
                    type="button"
                    className="flex items-center gap-2 text-ink-800 hover:text-brand-500"
                  >
                    <span>{item.label}</span>

                    {item.label === "More" && (
                      <i className="bi bi-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </button>

                  {/* MEGA MENU */}
                  {item.hasDropdown && item.columns && (
                    <div
                      className={`invisible absolute top-full z-50 border-t border-surface-200 bg-white opacity-0 shadow-[0_15px_35px_rgba(23,32,51,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100 ${
                        item.id === "more"
                          ? "left-0 w-max rounded-b-lg"
                          : "fixed left-0 w-screen"
                      }`}
                    >
                      <div className="mx-auto max-w-[1900px] px-8 py-10 lg:px-12">

                        <div
                          className={`grid gap-10 lg:gap-14 ${
                            item.id === "more"
                              ? "grid-cols-1"
                              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
                          }`}
                        >
                          {item.columns.map((column) => (
                            <div key={column.title}>

                              {column.title && (
                                <h3 className="mb-7 text-[18px] font-bold text-ink-900">
                                  {column.title}
                                </h3>
                              )}

                              <ul className="space-y-4">
                                {column.links.map((link) => (
                                  <li key={link.label}>
                                    <a
                                      href={link.href}
                                      className="block text-[15px] text-ink-700 transition hover:translate-x-1 hover:text-brand-500"
                                    >
                                      {link.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>

                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  )}
                </li>
              ))}

            </ul>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4 lg:gap-5">

            {/* Desktop Search */}
            <div className="relative hidden lg:block">
              <input
                aria-label="Search products"
                className="h-[41px] w-[190px] rounded-lg border border-surface-200 bg-surface-100 px-4 pr-10 text-sm text-ink-900 outline-none placeholder:text-ink-500 focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100 xl:w-[250px]"
                placeholder="Search products..."
                type="text"
              />

              <i className="bi bi-search absolute right-3 top-1/2 -translate-y-1/2 text-base text-brand-500" />
            </div>

            {/* Mobile Search */}
            <button
              aria-label="Search products"
              className="text-lg text-ink-800 hover:text-brand-500 lg:hidden"
            >
              <i className="bi bi-search" />
            </button>

            {/* Support */}
            <button
              aria-label="Customer support"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white hover:bg-brand-600 hover:shadow-md sm:flex"
            >
              <i className="bi bi-headphones text-lg" />
            </button>

            {/* Account */}
            {/* <button
              aria-label="My account"
              className="relative text-xl text-ink-800 hover:text-brand-500"
            >
              <i className="bi bi-person-circle" />
            </button> */}

            {/* Wishlist */}
            {/* <button
              aria-label="Wishlist"
              className="relative hidden text-lg text-ink-800 hover:text-brand-500 sm:block"
            >
              <i className="bi bi-heart" />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-cyanbrand-500 text-[9px] font-semibold text-white">
                0
              </span>
            </button> */}

            {/* Cart */}
            {/* <button
              aria-label="Shopping cart"
              className="relative text-lg text-ink-800 hover:text-brand-500"
            >
              <i className="bi bi-bag-dash" />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-cyanbrand-500 text-[9px] font-semibold text-white">
                0
              </span>
            </button> */}

          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}