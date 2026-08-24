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
        className={`fixed inset-0 z-40 bg-brand-900/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[92%] max-w-[500px] overflow-y-auto bg-white shadow-[0_10px_40px_rgba(18,97,201,0.15)] transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="px-6 pb-8 pt-8">

          {/* Close */}
          <div className="mb-8 flex justify-end">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-2xl text-ink-800 hover:text-brand-500"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-10">
            <input
              aria-label="Search products"
              className="h-[52px] w-full rounded-xl border border-surface-200 bg-surface-100 px-5 pr-12 text-[17px] font-medium text-ink-900 outline-none placeholder:text-ink-500 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-50"
              placeholder="Search products..."
              type="text"
            />

            <i className="bi bi-search absolute right-5 top-1/2 -translate-y-1/2 text-[20px] text-brand-500" />
          </div>

          {/* Navigation */}
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href || "#"}
                onClick={onClose}
                className="flex items-center justify-between border-b border-surface-200 py-4 text-[18px] font-semibold text-ink-900 hover:text-brand-500"
              >
                <span>{item.label}</span>

                <i className="bi bi-chevron-right text-[13px]" />
              </a>
            ))}

            <a
              href="#"
              onClick={onClose}
              className="block py-4 text-[18px] font-semibold text-ink-900 hover:text-brand-500"
            >
              Contact Us
            </a>
          </nav>

          {/* Account */}
          <div className="mt-16 space-y-5">

            {/* <a
              href="#"
              className="flex items-center gap-4 text-[17px] font-medium text-ink-800 hover:text-brand-500"
            >
              <i className="bi bi-person text-[25px]" />
              <span>My Account</span>
            </a> */}

            {/* <a
              href="#"
              className="flex items-center gap-4 text-[17px] font-medium text-ink-800 hover:text-brand-500"
            >
              <i className="bi bi-file-earmark-text text-[23px]" />
              <span>Warranty Registration</span>
            </a> */}

            <div className="text-[17px] text-ink-700">
              <span className="font-bold text-ink-900">
                Call Us:
              </span>{" "}
              {siteConfig.phone}
            </div>

            <div className="text-[17px] text-ink-700">
              <span className="font-bold text-ink-900">
                Email:
              </span>{" "}
              {siteConfig.email}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">

              <a
                aria-label="Facebook"
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white shadow-sm hover:bg-brand-600"
              >
                <i className="bi bi-facebook text-lg" />
              </a>

              <a
                aria-label="Instagram"
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cyanbrand-500 text-white shadow-sm hover:bg-cyanbrand-600"
              >
                <i className="bi bi-instagram text-lg" />
              </a>

              <a
                aria-label="YouTube"
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-logoRed-500 text-white shadow-sm hover:bg-logoRed-600"
              >
                <i className="bi bi-youtube text-lg" />
              </a>

            </div>
          </div>
        </div>
      </aside>
    </>
  );
}