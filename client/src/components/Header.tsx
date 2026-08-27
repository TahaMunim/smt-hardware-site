import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import type {
  FormEvent
} from "react";

import {
  Link,
  useLocation
} from "wouter";

import {
  ArrowRight,
  ChevronDown,
  ClipboardList,
  Menu,
  Search,
  X
} from "lucide-react";

import {
  FaWhatsapp
} from "react-icons/fa";

import {
  useQuote
} from "@/context/QuoteContext";

const HEADER_HEIGHT = 72;

const WHATSAPP_NUMBER =
  "971503821352";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello, I would like to inquire about your products."
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

/*
  Keep the desktop mega-menu curated.

  The full catalogue hierarchy now lives
  on the Products page itself, so the header
  should provide shortcuts rather than trying
  to duplicate the complete catalogue tree.
*/
const FEATURED_CATEGORIES = [
  "Power Tools",
  "Hand Tools",
  "Safety Equipment",
  "Electrical Accessories",
  "Fasteners & Fixings",
  "Abrasives",
  "Measuring Tools",
  "Cable Management",
  "Cables & Wires"
] as const;

const FEATURED_BRANDS = [
  "STANLEY",
  "DONGCHENG",
  "TUF-FIX",
  "RELITE",
  "DEWALT",
  "SIKA",
  "SPIT",
  "RIDGID",
  "Others"
] as const;

const MOBILE_FEATURED_BRANDS = [
  "STANLEY",
  "DONGCHENG",
  "TUF-FIX",
  "RELITE",
  "DEWALT",
  "SIKA"
] as const;

type DesktopMenu =
  | "products"
  | "brands"
  | null;

export default function Header() {
  const [
    location,
    navigate
  ] = useLocation();

  const {
    uniqueCount,
    totalQuantity
  } = useQuote();

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
  ] = useState<DesktopMenu>(
    null
  );

  const [
    searchTerm,
    setSearchTerm
  ] = useState("");

  const [
    hidden,
    setHidden
  ] = useState(false);

  /* =======================================================
     HEADER OFFSET FOR STICKY PAGE CONTROLS
  ======================================================= */

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--smt-header-offset",
      hidden
        ? "0px"
        : `${HEADER_HEIGHT}px`
    );

    return () => {
      document.documentElement.style.setProperty(
        "--smt-header-offset",
        `${HEADER_HEIGHT}px`
      );
    };
  }, [hidden]);

  const closeMenus =
    useCallback(() => {
      setIsMobileMenuOpen(
        false
      );

      setOpenDesktopMenu(
        null
      );
    }, []);

  const categoryUrl = (
    category: string
  ) =>
    `/products?category=${encodeURIComponent(
      category
    )}`;

  const brandUrl = (
    brand: string
  ) =>
    `/products?brand=${encodeURIComponent(
      brand
    )}`;

  const isRouteActive = (
    href: string
  ) =>
    location === href ||
    (
      href !== "/" &&
      location.startsWith(
        `${href}/`
      )
    );

  const isProductsActive =
    location === "/products" ||
    location.startsWith(
      "/products?"
    ) ||
    location.startsWith(
      "/product/"
    );

  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = (
    event:
      FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const query =
      searchTerm.trim();

    if (!query) {
      navigate(
        "/products"
      );

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

  /* =======================================================
     DESKTOP MENUS
  ======================================================= */

  const toggleDesktopMenu = (
    menu:
      Exclude<
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

  /* =======================================================
     MOBILE MENU
  ======================================================= */

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

  useEffect(() => {
    if (
      !isMobileMenuOpen
    ) {
      return;
    }

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [
    isMobileMenuOpen
  ]);

  /* =======================================================
     ROUTE CHANGE RESET
  ======================================================= */

  useEffect(() => {
    closeMenus();
    setHidden(false);
  }, [
    location,
    closeMenus
  ]);

  /* =======================================================
     STABLE SHOW / HIDE ON PAGE SCROLL
  ======================================================= */

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

        if (
          Math.abs(
            difference
          ) < 6
        ) {
          return;
        }

        if (
          difference > 0 &&
          currentScroll >
            180
        ) {
          setHidden(true);
        }

        if (
          difference < 0
        ) {
          setHidden(false);
        }

        if (
          currentScroll <
          80
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

  /* =======================================================
     CLICK OUTSIDE
  ======================================================= */

  useEffect(() => {
    const handlePointerDown = (
      event:
        PointerEvent
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
  }, [
    closeMenus
  ]);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (
      event:
        KeyboardEvent
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
  }, [
    closeMenus
  ]);

  /* =======================================================
     RESPONSIVE MENU RESET
  ======================================================= */

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
        {/* Logo */}

        <Link
          href="/"
          onClick={
            closeMenus
          }
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

          <div className="hidden 2xl:block">
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

        {/* Desktop Navigation */}

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
          {/* Products Mega Menu */}

          <div className="relative">
            <button
              type="button"
              onClick={() =>
                toggleDesktopMenu(
                  "products"
                )
              }
              aria-expanded={
                openDesktopMenu ===
                "products"
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
                    "products" ||
                  (
                    isProductsActive &&
                    !openDesktopMenu
                  )
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
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
                  w-[720px]
                  max-w-[calc(100vw-2rem)]
                  overflow-hidden
                  rounded-xl
                  border
                  border-neutral-800
                  bg-neutral-950
                  shadow-2xl
                  shadow-black/50
                "
              >
                <div
                  className="
                    grid
                    grid-cols-[1fr_230px]
                  "
                >
                  <div className="p-5">
                    <div
                      className="
                        mb-4
                        flex
                        items-end
                        justify-between
                        gap-4
                      "
                    >
                      <div>
                        <p
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-yellow-500
                          "
                        >
                          Browse Products
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            text-neutral-500
                          "
                        >
                          Quick access to popular ranges
                        </p>
                      </div>

                      <Link
                        href="/products"
                        onClick={
                          closeMenus
                        }
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          whitespace-nowrap
                          text-xs
                          font-semibold
                          text-neutral-400
                          transition-colors
                          hover:text-yellow-500
                        "
                      >
                        Full catalogue
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    <div
                      className="
                        grid
                        grid-cols-3
                        gap-2
                      "
                    >
                      {FEATURED_CATEGORIES.map(
                        (
                          category
                        ) => (
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
                              bg-black
                              px-3
                              py-3
                              text-sm
                              font-medium
                              leading-5
                              text-neutral-300
                              transition-colors
                              hover:border-yellow-500/60
                              hover:text-yellow-500
                            "
                          >
                            {
                              category
                            }
                          </Link>
                        )
                      )}
                    </div>
                  </div>

                  <div
                    className="
                      border-l
                      border-neutral-800
                      bg-black
                      p-5
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-neutral-500
                      "
                    >
                      Find Something Fast
                    </p>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-neutral-400
                      "
                    >
                      Search by product name,
                      model, SKU, brand or
                      category.
                    </p>

                    <form
                      onSubmit={
                        handleSearch
                      }
                      className="mt-5"
                    >
                      <div
                        className="
                          flex
                          h-10
                          items-center
                          overflow-hidden
                          rounded-md
                          border
                          border-neutral-700
                          bg-neutral-950
                          focus-within:border-yellow-500
                        "
                      >
                        <Search
                          className="
                            ml-3
                            h-4
                            w-4
                            flex-shrink-0
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
                          placeholder="Model or SKU..."
                          className="
                            min-w-0
                            flex-1
                            bg-transparent
                            px-2.5
                            text-sm
                            text-white
                            outline-none
                            placeholder:text-neutral-600
                          "
                        />
                      </div>
                    </form>

                    <Link
                      href="/products"
                      onClick={
                        closeMenus
                      }
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between
                        rounded-md
                        bg-yellow-500
                        px-4
                        py-3
                        text-sm
                        font-bold
                        text-black
                        transition-colors
                        hover:bg-yellow-400
                      "
                    >
                      Browse All Products

                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Brands Menu */}

          <div className="relative">
            <button
              type="button"
              onClick={() =>
                toggleDesktopMenu(
                  "brands"
                )
              }
              aria-expanded={
                openDesktopMenu ===
                "brands"
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
                  "brands"
                    ? "bg-yellow-500 text-black"
                    : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
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
                  w-[520px]
                  max-w-[calc(100vw-2rem)]
                  rounded-xl
                  border
                  border-neutral-800
                  bg-neutral-950
                  p-5
                  shadow-2xl
                  shadow-black/50
                "
              >
                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-yellow-500
                      "
                    >
                      Popular Brands
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-neutral-500
                      "
                    >
                      Quick access to key ranges
                    </p>
                  </div>

                  <Link
                    href="/products"
                    onClick={
                      closeMenus
                    }
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      whitespace-nowrap
                      text-xs
                      font-semibold
                      text-neutral-400
                      transition-colors
                      hover:text-yellow-500
                    "
                  >
                    View all
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div
                  className="
                    mt-4
                    grid
                    grid-cols-3
                    gap-2
                  "
                >
                  {FEATURED_BRANDS.map(
                    (
                      brand
                    ) => (
                      <Link
                        key={
                          brand
                        }
                        href={brandUrl(
                          brand
                        )}
                        onClick={
                          closeMenus
                        }
                        className="
                          flex
                          min-h-11
                          items-center
                          justify-center
                          rounded-md
                          border
                          border-neutral-800
                          bg-black
                          px-3
                          py-2.5
                          text-center
                          text-xs
                          font-bold
                          text-neutral-300
                          transition-colors
                          hover:border-yellow-500/60
                          hover:text-yellow-500
                        "
                      >
                        {
                          brand
                        }
                      </Link>
                    )
                  )}
                </div>

                <p
                  className="
                    mt-4
                    border-t
                    border-neutral-800
                    pt-4
                    text-xs
                    leading-5
                    text-neutral-600
                  "
                >
                  Search the complete brand list
                  from the Products catalogue.
                </p>
              </div>
            )}
          </div>

          {NAV_ITEMS.map(
            (
              item
            ) => {
              const active =
                isRouteActive(
                  item.href
                );

              return (
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
                  aria-current={
                    active
                      ? "page"
                      : undefined
                  }
                  className={`
                    flex
                    h-10
                    items-center
                    rounded-md
                    px-3
                    text-sm
                    font-semibold
                    transition-colors
                    ${
                      active
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                    }
                  `}
                >
                  {
                    item.label
                  }
                </Link>
              );
            }
          )}
        </nav>

        {/* Desktop Search */}

        <form
          onSubmit={
            handleSearch
          }
          className="
            ml-auto
            hidden
            min-w-0
            max-w-md
            flex-1
            xl:block
          "
        >
          <div
            className="
              flex
              h-10
              items-center
              overflow-hidden
              rounded-md
              border
              border-neutral-800
              bg-neutral-950
              transition-colors
              focus-within:border-yellow-500
            "
          >
            <Search
              className="
                ml-3
                h-4
                w-4
                flex-shrink-0
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
                  event.target.value
                )
              }
              placeholder="Search products, models or SKUs..."
              className="
                min-w-0
                flex-1
                bg-transparent
                px-3
                text-sm
                text-white
                outline-none
                placeholder:text-neutral-600
              "
            />

            <button
              type="submit"
              className="
                h-full
                border-l
                border-neutral-800
                px-3
                text-xs
                font-bold
                text-neutral-400
                transition-colors
                hover:bg-yellow-500
                hover:text-black
              "
            >
              Search
            </button>
          </div>
        </form>

        {/* Desktop Actions */}

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
            href={
              WHATSAPP_URL
            }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact SMT on WhatsApp"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              border
              border-neutral-800
              text-neutral-300
              transition-colors
              hover:border-yellow-500
              hover:text-yellow-500
            "
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>

          <Link
            href="/quote"
            onClick={
              closeMenus
            }
            aria-label={`Quote list with ${uniqueCount} products and ${totalQuantity} total units`}
            className="
              relative
              flex
              h-10
              items-center
              justify-center
              gap-2
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
            <ClipboardList className="h-4 w-4" />

            Quote List

            {uniqueCount > 0 && (
              <span className="flex min-w-5 items-center justify-center rounded-full bg-black px-1.5 py-0.5 text-[10px] font-black leading-none text-yellow-500">
                {uniqueCount > 99
                  ? "99+"
                  : uniqueCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile / Tablet Quick Quote */}

        <Link
          href="/quote"
          onClick={
            closeMenus
          }
          aria-label={`Quote list with ${uniqueCount} products and ${totalQuantity} total units`}
          className="
            relative
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
          <ClipboardList className="h-5 w-5" />

          {uniqueCount > 0 && (
            <span
              className="
                absolute
                -right-1.5
                -top-1.5
                flex
                h-5
                min-w-5
                items-center
                justify-center
                rounded-full
                bg-yellow-500
                px-1
                text-[9px]
                font-black
                leading-none
                text-black
                shadow
              "
            >
              {uniqueCount > 99
                ? "99+"
                : uniqueCount}
            </span>
          )}
        </Link>

        {/* Mobile / Tablet Menu Button */}

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

      {/* Mobile / Tablet Menu */}

      {isMobileMenuOpen && (
        <nav
          className="
            absolute
            inset-x-0
            top-full
            z-[60]
            h-[calc(100dvh-72px)]
            overflow-y-auto
            overscroll-contain
            border-t
            border-neutral-800
            bg-neutral-950
            px-4
            pb-6
            pt-4
            shadow-2xl
            shadow-black/50
            sm:px-6
            xl:hidden
          "
          aria-label="Mobile navigation"
        >
          {/* Search */}

          <form
            onSubmit={
              handleSearch
            }
            className="mb-4"
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
                  flex-shrink-0
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
                    event.target.value
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
                  flex-shrink-0
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

          {/* Main Navigation */}

          <div className="space-y-1">
            <Link
              href="/"
              onClick={
                closeMenus
              }
              aria-current={
                location === "/"
                  ? "page"
                  : undefined
              }
              className={`
                block
                rounded-md
                px-3
                py-3
                font-medium
                transition-colors
                ${
                  location === "/"
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-300 hover:bg-neutral-900 hover:text-yellow-500"
                }
              `}
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={
                closeMenus
              }
              aria-current={
                isProductsActive
                  ? "page"
                  : undefined
              }
              className={`
                flex
                items-center
                justify-between
                rounded-md
                px-3
                py-3
                font-medium
                transition-colors
                ${
                  isProductsActive
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-300 hover:bg-neutral-900 hover:text-yellow-500"
                }
              `}
            >
              Products

              <ArrowRight className="h-4 w-4" />
            </Link>

            {NAV_ITEMS.map(
              (
                item
              ) => {
                const active =
                  isRouteActive(
                    item.href
                  );

                return (
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
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className={`
                      block
                      rounded-md
                      px-3
                      py-3
                      font-medium
                      transition-colors
                      ${
                        active
                          ? "bg-neutral-900 text-white"
                          : "text-neutral-300 hover:bg-neutral-900 hover:text-yellow-500"
                      }
                    `}
                  >
                    {
                      item.label
                    }
                  </Link>
                );
              }
            )}
          </div>

          {/* Popular Brands */}

          <div
            className="
              mt-5
              border-t
              border-neutral-800
              pt-5
            "
          >
            <div
              className="
                mb-3
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-neutral-500
                "
              >
                Popular Brands
              </p>

              <Link
                href="/products"
                onClick={
                  closeMenus
                }
                className="
                  text-xs
                  font-semibold
                  text-yellow-500
                "
              >
                View all
              </Link>
            </div>

            <div
              className="
                grid
                grid-cols-3
                gap-2
              "
            >
              {MOBILE_FEATURED_BRANDS.map(
                (
                  brand
                ) => (
                  <Link
                    key={
                      brand
                    }
                    href={brandUrl(
                      brand
                    )}
                    onClick={
                      closeMenus
                    }
                    className="
                      flex
                      min-h-10
                      items-center
                      justify-center
                      rounded-md
                      border
                      border-neutral-800
                      bg-black
                      px-2
                      py-2.5
                      text-center
                      text-[11px]
                      font-bold
                      text-neutral-300
                      transition-colors
                      hover:border-yellow-500
                      hover:text-yellow-500
                    "
                  >
                    {
                      brand
                    }
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Actions */}

          <div
            className="
              mt-5
              grid
              gap-2
              border-t
              border-neutral-800
              pt-5
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
                transition-colors
                hover:border-yellow-500
                hover:text-yellow-500
              "
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp
            </a>

            <Link
              href="/quote"
              onClick={
                closeMenus
              }
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-md
                bg-yellow-500
                px-4
                py-3
                text-sm
                font-bold
                text-black
                transition-colors
                hover:bg-yellow-400
              "
            >
              <ClipboardList className="h-5 w-5" />

              Quote List

              {uniqueCount > 0 && (
                <span className="flex min-w-5 items-center justify-center rounded-full bg-black px-1.5 py-0.5 text-[10px] font-black leading-none text-yellow-500">
                  {uniqueCount > 99
                    ? "99+"
                    : uniqueCount}
                </span>
              )}
            </Link>
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
