import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll states
  const [hidden, setHidden] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (isMenuOpen) return;


      if (!shrink && current > 40) {
        setShrink(true);
      } else if (shrink && current < 10) {
        setShrink(false);
      }

      if (current > lastScroll && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, isMenuOpen, shrink]);


  const closeMenu = () => setIsMenuOpen(false);

  const whatsappUrl =
    "https://wa.me/971503821352?text=" +
    encodeURIComponent("Hello, I would like to inquire about your products.");

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

      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header Inner */}
        <div
          className={`
            flex items-center justify-between w-full
            transition-all duration-300
            ${shrink ? "h-14" : "h-20"}
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/SMTLogo.png"
              alt="SMT Hardware Logo"
              className={`
                object-contain transition-all duration-300
                ${shrink ? "h-7" : "h-11"}
              `}
            />
            <span
              className={`
                font-bold text-white transition-all duration-300 hover:text-yellow-500
                ${shrink ? "text-lg" : "text-xl"}
              `}
            >
              Saleh Mohsin Trading LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item, idx) => (
              <Link
                key={idx}
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

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2 rounded-md px-4 py-2 font-semibold text-black bg-yellow-500 
                hover:bg-yellow-400 transition-all shadow-md hover:shadow-yellow-500/20
                ${shrink ? "text-xs h-9" : "text-sm h-11"}
              `}
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-500 p-2 transition"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-4 space-y-3 border-t border-neutral-800 animate-in slide-in-from-top-2 duration-200">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={closeMenu}
                className="block px-2 py-2 text-base font-medium text-neutral-300 hover:text-yellow-500 hover:bg-neutral-800/50 rounded-md transition"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-yellow-500 px-4 py-3 text-sm font-semibold text-black 
                         hover:bg-yellow-400 transition shadow-md mt-2"
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
