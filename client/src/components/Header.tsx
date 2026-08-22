import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import {
  Link,
  useLocation
} from "wouter";

import {
  ChevronDown,
  Menu,
  Search,
  X
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { products } from "@/data/products";

const WHATSAPP_NUMBER =
  "971503821352";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello, I would like to inquire about your products."
  );

const REQUEST_QUOTE_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello SMT, I would like to request a quotation."
  );

const NAV_ITEMS = [
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/about",
    label: "About"
  },
  {
    href: "/contact",
    label: "Contact"
  }
] as const;

const CATEGORIES = Array.from(
  new Set(
    products.map(
      (product) =>
        product.category
    )
  )
).sort();

const BRANDS = Array.from(
  new Set(
    products.map(
      (product) =>
        product.brand
    )
  )
).sort();

type DesktopMenu =
  | "products"
  | "brands"
  | null;

export default function Header() {
  const [, navigate] =
    useLocation();

  const headerRef =
    useRef<HTMLElement | null>(
      null
    );

  const lastScrollRef =
    useRef(0);

  const [
    isMobileMenuOpen,
    setIsMobileMenuOpen
  ] = useState(false);

  const [
    openDesktopMenu,
    setOpenDesktopMenu
  ] =
    useState<DesktopMenu>(
      null
    );

  const [
    searchTerm,
    setSearchTerm
  ] = useState("");

  const [hidden, setHidden] =
    useState(false);

  const closeMenus =
    useCallback(() => {
      setIsMobileMenuOpen(
        false
      );

      setOpenDesktopMenu(
        null
      );
    }, []);

  // =====================================================
  // SEARCH
  // =====================================================
  const handleSearch = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const query =
      searchTerm.trim();

    if (!query) {
      navigate("/products");
      closeMenus();
      return;
    }

    navigate(
      `/products?search=${encodeURIComponent(
        query
      )}`
    );

    closeMenus();
  };

  // =====================================================
  // LINKS
  // =====================================================
  const categoryUrl = (
    category: string
  ) =>
    `/products?category=${encodeURIComponent(
      category
    )}`;

  const brandUrl = (
    brand: string
  ) =>
    `/products?search=${encodeURIComponent(
      brand
    )}`;

  // =====================================================
  // DESKTOP DROPDOWN
  // =====================================================
  const toggleDesktopMenu = (
    menu: Exclude<
      DesktopMenu,
      null
    >
  ) => {
    setHidden(false);

    setOpenDesktopMenu(
      (current) =>
        current === menu
          ? null
          : menu
    );
  };

  // =====================================================
  // MOBILE MENU
  // =====================================================
  const toggleMobileMenu =
    () => {
      setHidden(false);

      setOpenDesktopMenu(
        null
      );

      setIsMobileMenuOpen(
        (current) =>
          !current
      );
    };

  // =====================================================
  // STABLE SCROLL BEHAVIOUR
  //
  // IMPORTANT:
  // The header NEVER changes height.
  // We only translate the whole fixed-height header.
  // =====================================================
  useEffect(() => {
    const handleScroll =
      () => {
        const currentScroll =
          Math.max(
            window.scrollY,
            0
          );

        const lastScroll =
          lastScrollRef.current;

        if (
          isMobileMenuOpen ||
          openDesktopMenu
        ) {
          setHidden(false);

          lastScrollRef.current =
            currentScroll;

          return;
        }

        const difference =
          currentScroll -
          lastScroll;

        /*
          Ignore tiny movements.

          Trackpads frequently create
          tiny ±1px / ±2px movements,
          which can otherwise make
          navigation feel nervous.
        */
        if (
          Math.abs(
            difference
          ) < 6
        ) {
          return;
        }

        if (
          difference > 0 &&
          currentScroll > 180
        ) {
          setHidden(true);
        }

        if (difference < 0) {
          setHidden(false);
        }

        if (
          currentScroll < 80
        ) {
          setHidden(false);
        }

        lastScrollRef.current =
          currentScroll;
      };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [
    isMobileMenuOpen,
    openDesktopMenu
  ]);

  // =====================================================
  // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
  // =====================================================
  useEffect(() => {
    const handlePointerDown = (
      event: PointerEvent
    ) => {
      const target =
        event.target as Node;

      if (
        headerRef.current &&
        !headerRef.current.contains(
          target
        )
      ) {
        closeMenus();
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, [closeMenus]);

  // =====================================================
  // ESCAPE KEY
  // =====================================================
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        closeMenus();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [closeMenus]);

  // =====================================================
  // DESKTOP RESIZE
  // =====================================================
  useEffect(() => {
    const handleResize =
      () => {
        if (
          window.innerWidth >=
          1280
        ) {
          setIsMobileMenuOpen(
            false
          );
        } else {
          setOpenDesktopMenu(
            null
          );
        }
      };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`
        sticky
        top-0
        z-50

        w-full

        border-b
        border-neutral-800

        bg-black/95
        backdrop-blur-xl

        shadow-lg
        shadow-black/20

        transition-transform
        duration-300
        ease-out

        ${
          hidden
            ? "-translate-y-full"
            : "translate-y-0"
        }
      `}
    >
      {/* =================================================
          SINGLE DESKTOP HEADER ROW
      ================================================== */}
      <div
        className="
          flex
          h-[72px]
          w-full
          items-center

          gap-3

          px-4
          sm:px-6
          xl:px-7
          2xl:px-10
        "
      >
        {/* ===============================================
            LOGO
        ================================================ */}
        <Link
          href="/"
          onClick={closeMenus}
          aria-label="Saleh Mohsin Trading LLC"
          className="
            flex
            flex-shrink-0
            items-center
            gap-3
          "
        >
          <img
            src="/SMTLogo.png"
            alt="Saleh Mohsin Trading LLC"
            className="
              h-10
              w-auto
              object-contain
            "
          />

          <div
            className="
              hidden
              2xl:block
            "
          >
            <p
              className="
                whitespace-nowrap
                text-base
                font-bold
                leading-none
                text-white
              "
            >
              Saleh Mohsin
            </p>

            <p
              className="
                mt-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-neutral-500
              "
            >
              Trading LLC
            </p>
          </div>
        </Link>

        {/* ===============================================
            DESKTOP NAV
        ================================================ */}
        <nav
          className="
            hidden
            flex-shrink-0
            items-center
            gap-1

            xl:flex
          "
          aria-label="Main navigation"
        >
          {/* Browse Products */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                toggleDesktopMenu(
                  "products"
                )
              }
              className={`
                flex
                h-10
                items-center
                gap-1.5

                rounded-md

                px-3

                text-sm
                font-semibold

                transition-colors

                ${
                  openDesktopMenu ===
                  "products"
                    ? "bg-yellow-500 text-black"
                    : "text-neutral-200 hover:bg-neutral-900 hover:text-yellow-500"
                }
              `}
            >
              Products

              <ChevronDown
                className={`
                  h-4
                  w-4
                  transition-transform

                  ${
                    openDesktopMenu ===
                    "products"
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {openDesktopMenu ===
              "products" && (
              <div
                className="
                  absolute
                  left-0
                  top-[calc(100%+12px)]

                  w-[560px]

                  rounded-lg
                  border
                  border-neutral-800

                  bg-neutral-950

                  p-5

                  shadow-2xl
                  shadow-black/60
                "
              >
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between

                    border-b
                    border-neutral-800

                    pb-4
                  "
                >
                  <div>
                    <p className="font-semibold text-white">
                      Browse Products
                    </p>

                    <p className="mt-1 text-xs text-neutral-500">
                      Select a product
                      category
                    </p>
                  </div>

                  <Link
                    href="/products"
                    onClick={
                      closeMenus
                    }
                    className="
                      text-sm
                      font-semibold
                      text-yellow-500

                      hover:text-yellow-400
                    "
                  >
                    View All →
                  </Link>
                </div>

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-2
                  "
                >
                  {CATEGORIES.map(
                    (category) => (
                      <Link
                        key={
                          category
                        }
                        href={categoryUrl(
                          category
                        )}
                        onClick={
                          closeMenus
                        }
                        className="
                          rounded-md

                          border
                          border-transparent

                          px-4
                          py-3

                          text-sm
                          font-medium
                          text-neutral-300

                          transition-colors

                          hover:border-neutral-700
                          hover:bg-neutral-900
                          hover:text-yellow-500
                        "
                      >
                        {category}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Brands */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                toggleDesktopMenu(
                  "brands"
                )
              }
              className={`
                flex
                h-10
                items-center
                gap-1

                rounded-md

                px-3

                text-sm
                font-medium

                transition-colors

                ${
                  openDesktopMenu ===
                  "brands"
                    ? "bg-neutral-900 text-yellow-500"
                    : "text-neutral-300 hover:bg-neutral-900 hover:text-yellow-500"
                }
              `}
            >
              Brands

              <ChevronDown
                className={`
                  h-4
                  w-4
                  transition-transform

                  ${
                    openDesktopMenu ===
                    "brands"
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {openDesktopMenu ===
              "brands" && (
              <div
                className="
                  absolute
                  left-0
                  top-[calc(100%+12px)]

                  w-[400px]

                  rounded-lg
                  border
                  border-neutral-800

                  bg-neutral-950

                  p-5

                  shadow-2xl
                  shadow-black/60
                "
              >
                <p
                  className="
                    mb-4
                    border-b
                    border-neutral-800

                    pb-4

                    font-semibold
                    text-white
                  "
                >
                  Brands We Supply
                </p>

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-1
                  "
                >
                  {BRANDS.map(
                    (brand) => (
                      <Link
                        key={brand}
                        href={brandUrl(
                          brand
                        )}
                        onClick={
                          closeMenus
                        }
                        className="
                          rounded-md

                          px-3
                          py-2.5

                          text-sm
                          font-medium
                          text-neutral-300

                          transition-colors

                          hover:bg-neutral-900
                          hover:text-yellow-500
                        "
                      >
                        {brand}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {NAV_ITEMS.map(
            (item) => (
              <Link
                key={
                  item.href
                }
                href={
                  item.href
                }
                onClick={
                  closeMenus
                }
                className="
                  flex
                  h-10
                  items-center

                  rounded-md

                  px-3

                  text-sm
                  font-medium
                  text-neutral-300

                  transition-colors

                  hover:bg-neutral-900
                  hover:text-yellow-500
                "
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* ===============================================
            DESKTOP SEARCH
        ================================================ */}
        <form
          onSubmit={handleSearch}
          className="
            ml-auto
            hidden

            min-w-[220px]
            max-w-[440px]
            flex-1

            xl:block
          "
        >
          <div
            className="
              flex
              h-10
              overflow-hidden

              rounded-md
              border
              border-neutral-700

              bg-neutral-900

              transition-colors

              focus-within:border-yellow-500
            "
          >
            <div
              className="
                flex
                items-center

                pl-3

                text-neutral-500
              "
            >
              <Search className="h-4 w-4" />
            </div>

            <input
              type="search"
              value={
                searchTerm
              }
              onChange={(
                event
              ) =>
                setSearchTerm(
                  event.target
                    .value
                )
              }
              placeholder="Search catalogue..."
              aria-label="Search catalogue"
              className="
                min-w-0
                flex-1

                bg-transparent

                px-3

                text-sm
                text-white

                outline-none

                placeholder:text-neutral-500
              "
            />

            <button
              type="submit"
              className="
                px-4

                text-sm
                font-semibold
                text-yellow-500

                transition-colors

                hover:bg-yellow-500
                hover:text-black
              "
            >
              Search
            </button>
          </div>
        </form>

        {/* ===============================================
            DESKTOP ACTIONS
        ================================================ */}
        <div
          className="
            hidden
            flex-shrink-0
            items-center
            gap-2

            xl:flex
          "
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp SMT"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-md

              border
              border-neutral-700

              text-neutral-200

              transition-colors

              hover:border-yellow-500
              hover:text-yellow-500
            "
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>

          <a
            href={REQUEST_QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-10
              items-center
              justify-center

              whitespace-nowrap

              rounded-md

              bg-yellow-500

              px-4

              text-sm
              font-bold
              text-black

              transition-colors

              hover:bg-yellow-400
            "
          >
            Request Quote
          </a>
        </div>

        {/* ===============================================
            MOBILE / TABLET MENU BUTTON
        ================================================ */}
        <button
          type="button"
          onClick={
            toggleMobileMenu
          }
          aria-label={
            isMobileMenuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={
            isMobileMenuOpen
          }
          className="
            ml-auto

            flex
            h-10
            w-10
            flex-shrink-0
            items-center
            justify-center

            rounded-md

            border
            border-neutral-800

            text-white

            transition-colors

            hover:border-yellow-500
            hover:text-yellow-500

            xl:hidden
          "
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* =================================================
          MOBILE / TABLET MENU
      ================================================== */}
      {isMobileMenuOpen && (
        <nav
          className="
            max-h-[calc(100vh-72px)]
            overflow-y-auto

            border-t
            border-neutral-800

            bg-neutral-950

            px-4
            pb-6
            pt-4

            xl:hidden
          "
        >
          {/* Search */}
          <form
            onSubmit={
              handleSearch
            }
            className="mb-6"
          >
            <div
              className="
                flex
                h-11
                overflow-hidden

                rounded-md
                border
                border-neutral-700

                bg-neutral-900

                focus-within:border-yellow-500
              "
            >
              <Search
                className="
                  ml-3
                  h-4
                  w-4
                  self-center
                  text-neutral-500
                "
              />

              <input
                type="search"
                value={
                  searchTerm
                }
                onChange={(
                  event
                ) =>
                  setSearchTerm(
                    event.target
                      .value
                  )
                }
                placeholder="Search products, brands or models..."
                className="
                  min-w-0
                  flex-1

                  bg-transparent

                  px-3

                  text-sm
                  text-white

                  outline-none

                  placeholder:text-neutral-500
                "
              />

              <button
                type="submit"
                className="
                  bg-yellow-500

                  px-4

                  text-sm
                  font-bold
                  text-black
                "
              >
                Search
              </button>
            </div>
          </form>

          {/* Main links */}
          <div className="space-y-1">
            <Link
              href="/"
              onClick={
                closeMenus
              }
              className="
                block
                rounded-md
                px-3
                py-3

                font-medium
                text-neutral-300

                hover:bg-neutral-900
                hover:text-yellow-500
              "
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={
                closeMenus
              }
              className="
                block
                rounded-md
                px-3
                py-3

                font-medium
                text-neutral-300

                hover:bg-neutral-900
                hover:text-yellow-500
              "
            >
              All Products
            </Link>

            {NAV_ITEMS.map(
              (item) => (
                <Link
                  key={
                    item.href
                  }
                  href={
                    item.href
                  }
                  onClick={
                    closeMenus
                  }
                  className="
                    block
                    rounded-md
                    px-3
                    py-3

                    font-medium
                    text-neutral-300

                    hover:bg-neutral-900
                    hover:text-yellow-500
                  "
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Categories */}
          <div
            className="
              mt-5
              border-t
              border-neutral-800
              pt-5
            "
          >
            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-neutral-500
              "
            >
              Product Categories
            </p>

            <div
              className="
                grid
                grid-cols-2
                gap-2
              "
            >
              {CATEGORIES.map(
                (category) => (
                  <Link
                    key={
                      category
                    }
                    href={categoryUrl(
                      category
                    )}
                    onClick={
                      closeMenus
                    }
                    className="
                      rounded-md

                      border
                      border-neutral-800

                      px-3
                      py-3

                      text-sm
                      text-neutral-300

                      hover:border-yellow-500
                      hover:text-yellow-500
                    "
                  >
                    {category}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Brands */}
          <div
            className="
              mt-5
              border-t
              border-neutral-800
              pt-5
            "
          >
            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-neutral-500
              "
            >
              Brands
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {BRANDS.map(
                (brand) => (
                  <Link
                    key={brand}
                    href={brandUrl(
                      brand
                    )}
                    onClick={
                      closeMenus
                    }
                    className="
                      rounded-md

                      border
                      border-neutral-800

                      px-3
                      py-2

                      text-xs
                      font-semibold
                      text-neutral-300

                      hover:border-yellow-500
                      hover:text-yellow-500
                    "
                  >
                    {brand}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Actions */}
          <div
            className="
              mt-6
              grid
              gap-2
              sm:grid-cols-2
            "
          >
            <a
              href={
                WHATSAPP_URL
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2

                rounded-md

                border
                border-neutral-700

                px-4
                py-3

                text-sm
                font-semibold
                text-white

                hover:border-yellow-500
                hover:text-yellow-500
              "
            >
              <FaWhatsapp className="h-5 w-5" />

              WhatsApp
            </a>

            <a
              href={
                REQUEST_QUOTE_URL
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center

                rounded-md

                bg-yellow-500

                px-4
                py-3

                text-sm
                font-bold
                text-black

                hover:bg-yellow-400
              "
            >
              Request Quote
            </a>
          </div>
        </nav>
      )}

      {/* Accent */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-[2px]

          bg-gradient-to-r
          from-transparent
          via-yellow-500/70
          to-transparent
        "
      />
    </header>
  );
}