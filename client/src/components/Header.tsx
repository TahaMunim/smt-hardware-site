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
  const [forceMobile, setForceMobile] = useState(false);

  const lastScrollRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  const recomputeLayout = useCallback(() => {
    if (!containerRef.current || !desktopNavRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const logoWidth = containerRef.current.querySelector("img")?.offsetWidth || 110;
    const titleWidth = containerRef.current.querySelector("span")?.offsetWidth || 180;
    const navWidth = desktopNavRef.current.scrollWidth + logoWidth + titleWidth + 60;

    setForceMobile(navWidth > containerWidth);
  }, []);

  useEffect(() => {
    recomputeLayout();
    window.addEventListener("resize", recomputeLayout);
    window.addEventListener("orientationchange", recomputeLayout);
    return () => {
      window.removeEventListener("resize", recomputeLayout);
      window.removeEventListener("orientationchange", recomputeLayout);
    };
  }, [recomputeLayout]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const last = lastScrollRef.current;

      if (isMenuOpen) {
        setIsMenuOpen(false);
        return;
      }

      setShrink(forceMobile || current > 40);
      setHidden(current > last && current > 100);
      lastScrollRef.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, forceMobile]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full border-b border-neutral-800
        bg-black/80 backdrop-blur-xl shadow-lg shadow-black/10
        transition-all duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Yellow glow */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />

      <div ref={containerRef} className="w-full px-4 sm:px-6 lg:px-8">
        <div
          className={`
            flex items-center justify-between w-full
            transition-all duration-300
            ${shrink ? "h-14" : "h-20"}
          `}
        >
          {/* LOGO + TITLE */}
          <Link
            href="/"
            className="flex items-center space-x-3 group flex-shrink-0"
          >
            <img
              src="/SMTLogo.png"
              alt="SMT Hardware Logo"
              className={`
                transition-all duration-300 object-contain
                ${shrink ? "h-7" : "h-11"}
              `}
            />
            <span
              className={`
                whitespace-nowrap
                font-bold text-white transition-all duration-300 hover:text-yellow-500
                ${shrink ? "text-lg" : "text-xl"}
              `}
            >
              Saleh Mohsin Trading LLC
            </span>
          </Link>

          {/* DESKTOP NAV */}
          {!forceMobile && (
            <div ref={desktopNavRef} className="hidden md:flex items-center space-x-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative font-medium text-neutral-300 hover:text-yellow-500 transition-all
                    ${shrink ? "text-sm" : "text-base"}
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                    after:bg-yellow-500 after:transition-all hover:after:w-full
                  `}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-2 rounded-md px-4 py-2 font-semibold
                  text-black bg-yellow-500 hover:bg-yellow-400 transition-all
                  shadow-md hover:shadow-yellow-500/20
                  ${shrink ? "text-xs h-9" : "text-sm h-11"}
                `}
              >
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          )}

          {/* MOBILE HAMBURGER BUTTON */}
          {forceMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-500 p-2 transition"
              aria-label="Toggle menu"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && forceMobile && (
          <div className="pb-4 pt-4 space-y-3 border-t border-neutral-800 animate-in slide-in-from-top-2 duration-200">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block px-2 py-2 text-base font-medium text-neutral-300 hover:text-yellow-500 hover:bg-neutral-800/50 rounded-md transition"
                data-testid={`mobile-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-yellow-500 px-4 py-3 text-sm font-semibold text-black hover:bg-yellow-400 transition shadow-md mt-2"
              data-testid="mobile-whatsapp-button"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}