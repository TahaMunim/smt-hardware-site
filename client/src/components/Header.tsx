import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect, useRef, useCallback } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const WHATSAPP_URL =
  "https://wa.me/971503821352?text=" +
  encodeURIComponent("Hello, I would like to inquire about your products.");

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [shrink, setShrink] = useState(false);

  const lastScrollRef = useRef(0);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // =========================================================
  // SCROLL BEHAVIOUR
  // =========================================================
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = Math.max(window.scrollY, 0);
      const lastScroll = lastScrollRef.current;

      // Never hide the header while the mobile menu is open
      if (isMenuOpen) {
        setHidden(false);
        lastScrollRef.current = currentScroll;
        return;
      }

      // Shrink desktop header after scrolling slightly
      setShrink(currentScroll > 40);

      // Hide while scrolling DOWN past 100px
      if (currentScroll > lastScroll && currentScroll > 100) {
        setHidden(true);
      } else {
        // Show while scrolling UP
        setHidden(false);
      }

      lastScrollRef.current = currentScroll;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // =========================================================
  // CLOSE MOBILE MENU WHEN SWITCHING TO DESKTOP
  // Tailwind XL = 1280px
  // =========================================================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =========================================================
  // CLOSE MOBILE MENU WITH ESCAPE
  // =========================================================
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setHidden(false);
    setIsMenuOpen((previous) => !previous);
  };

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        border-b border-neutral-800
        bg-black/80 backdrop-blur-xl
        shadow-lg shadow-black/10
        transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Yellow accent line */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-yellow-500/70
          to-transparent
        "
      />

      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            MAIN HEADER ROW
        ==================================================== */}
        <div
          className={`
            flex w-full items-center justify-between
            transition-[height] duration-300 ease-out

            ${
              shrink
                ? "h-16 xl:h-14"
                : "h-16 xl:h-20"
            }
          `}
        >
          {/* =================================================
              LOGO + COMPANY NAME
          ================================================== */}
          <Link
            href="/"
            onClick={closeMenu}
            className="
              group
              flex min-w-0 items-center
              gap-2 sm:gap-3
            "
            aria-label="Saleh Mohsin Trading LLC - Home"
          >
            <img
              src="/SMTLogo.png"
              alt="Saleh Mohsin Trading LLC Logo"
              className={`
                flex-shrink-0
                object-contain
                transition-all duration-300

                ${
                  shrink
                    ? "h-8 xl:h-7"
                    : "h-8 sm:h-9 xl:h-11"
                }
              `}
            />

            {/* Small phones */}
            <span
              className="
                block
                whitespace-nowrap
                text-lg
                font-bold
                text-white
                transition-colors
                group-hover:text-yellow-500
                sm:hidden
              "
            >
              SMT
            </span>

            {/* Larger phones / tablets / desktop */}
            <span
              className={`
                hidden sm:block
                min-w-0
                whitespace-nowrap
                font-bold
                text-white
                transition-all duration-300
                group-hover:text-yellow-500

                ${
                  shrink
                    ? "text-lg"
                    : "text-lg xl:text-xl"
                }
              `}
            >
              Saleh Mohsin Trading LLC
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION

              Hidden below XL.
              Visible from 1280px upwards.
          ================================================== */}
          <nav
            className="
              hidden
              items-center
              gap-7
              xl:flex
              2xl:gap-10
            "
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative
                  whitespace-nowrap
                  font-medium
                  text-neutral-300
                  transition-colors duration-200
                  hover:text-yellow-500

                  ${
                    shrink
                      ? "text-sm"
                      : "text-base"
                  }

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-yellow-500
                  after:transition-all
                  after:duration-200
                  hover:after:w-full
                `}
              >
                {item.label}
              </Link>
            ))}

            {/* WhatsApp button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex
                items-center
                justify-center
                gap-2

                whitespace-nowrap
                rounded-md
                bg-yellow-500
                px-4

                font-semibold
                text-black

                shadow-md

                transition-all duration-200

                hover:bg-yellow-400
                hover:shadow-yellow-500/20

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-yellow-500
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black

                ${
                  shrink
                    ? "h-9 text-xs"
                    : "h-11 text-sm"
                }
              `}
            >
              <FaWhatsapp
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />

              WhatsApp
            </a>
          </nav>

          {/* =================================================
              HAMBURGER

              Visible below 1280px.
              Hidden on desktop.
          ================================================== */}
          <button
            type="button"
            onClick={toggleMenu}
            className="
              flex
              flex-shrink-0
              items-center
              justify-center

              rounded-md
              p-2

              text-white

              transition-colors duration-200

              hover:bg-neutral-800
              hover:text-yellow-500

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-yellow-500

              xl:hidden
            "
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X
                className="h-7 w-7"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="h-7 w-7"
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        {/* ===================================================
            MOBILE / TABLET MENU
        ==================================================== */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="
              border-t
              border-neutral-800

              pb-5
              pt-3

              xl:hidden
            "
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    block

                    rounded-md
                    px-3
                    py-3

                    text-base
                    font-medium
                    text-neutral-300

                    transition-colors duration-200

                    hover:bg-neutral-800/70
                    hover:text-yellow-500

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-yellow-500
                  "
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="
                  mt-3

                  flex
                  items-center
                  justify-center
                  gap-2

                  rounded-md

                  bg-yellow-500

                  px-4
                  py-3

                  text-sm
                  font-semibold
                  text-black

                  shadow-md

                  transition-all duration-200

                  hover:bg-yellow-400
                  hover:shadow-yellow-500/20

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-yellow-500
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-black
                "
              >
                <FaWhatsapp
                  className="h-5 w-5"
                  aria-hidden="true"
                />

                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}