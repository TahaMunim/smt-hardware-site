import { Link } from "wouter";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const WHATSAPP_NUMBER =
  "971503821352";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello SMT, I would like to inquire about your products."
  );

const QUOTE_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello SMT, I would like to request a quotation."
  );

const MAP_URL =
  "https://maps.app.goo.gl/whXUNJi3RMFV9zjq6";

const QUICK_LINKS = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/products",
    label: "Products"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/about",
    label: "About SMT"
  },
  {
    href: "/contact",
    label: "Contact"
  }
] as const;

export default function Footer() {
  const year =
    new Date().getFullYear();

  return (
    <footer
      className="
        border-t
        border-neutral-800
        bg-neutral-950
      "
      data-testid="footer"
    >
      {/* ===============================================
          MAIN FOOTER
      ================================================ */}
      <div
        className="
          mx-auto
          max-w-7xl

          px-4
          py-12

          sm:px-6
          md:py-14
        "
      >
        <div
          className="
            grid
            gap-10

            md:grid-cols-2

            lg:grid-cols-[1.4fr_0.7fr_1fr]
            lg:gap-12
          "
        >
          {/* ===========================================
              COMPANY
          ============================================ */}
          <div>
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-3
              "
              aria-label="Saleh Mohsin Trading LLC"
            >
              <img
                src="/SMTLogo.png"
                alt="Saleh Mohsin Trading LLC"
                className="
                  h-11
                  w-auto
                  object-contain
                "
              />

              <div>
                <p
                  className="
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

            <p
              className="
                mt-5
                max-w-md

                text-sm
                leading-6
                text-neutral-500
              "
            >
              Professional tools,
              construction supplies,
              safety equipment and
              industrial products for
              contractors, workshops,
              factories and trade buyers
              across the UAE.
            </p>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  gap-2

                  rounded-md

                  border
                  border-neutral-700

                  px-4

                  text-sm
                  font-semibold
                  text-neutral-300

                  transition-colors

                  hover:border-yellow-500
                  hover:text-yellow-500
                "
                data-testid="footer-whatsapp"
              >
                <FaWhatsapp className="h-4 w-4" />

                WhatsApp
              </a>

              <a
                href={QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  gap-2

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

                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ===========================================
              QUICK LINKS
          ============================================ */}
          <div>
            <h2
              className="
                text-sm
                font-bold
                text-white
              "
            >
              Quick Links
            </h2>

            <nav
              className="
                mt-5
                space-y-3
              "
              aria-label="Footer navigation"
            >
              {QUICK_LINKS.map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                      block
                      w-fit

                      text-sm
                      text-neutral-500

                      transition-colors

                      hover:text-yellow-500
                    "
                    data-testid={`footer-link-${item.label
                      .toLowerCase()
                      .replace(
                        /\s+/g,
                        "-"
                      )}`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* ===========================================
              CONTACT
          ============================================ */}
          <div>
            <h2
              className="
                text-sm
                font-bold
                text-white
              "
            >
              Contact SMT
            </h2>

            <div
              className="
                mt-5
                space-y-4
              "
            >
              <a
                href="tel:+971503821352"
                className="
                  group

                  flex
                  items-start
                  gap-3

                  text-sm
                  text-neutral-500

                  transition-colors

                  hover:text-neutral-300
                "
                data-testid="footer-phone"
              >
                <Phone
                  className="
                    mt-0.5
                    h-4
                    w-4
                    flex-shrink-0
                    text-yellow-500
                  "
                />

                <span>
                  +971 50 382 1352
                </span>
              </a>

              <a
                href="mailto:sales@salehmohsin.com"
                className="
                  group

                  flex
                  items-start
                  gap-3

                  text-sm
                  text-neutral-500

                  transition-colors

                  hover:text-neutral-300
                "
                data-testid="footer-email"
              >
                <Mail
                  className="
                    mt-0.5
                    h-4
                    w-4
                    flex-shrink-0
                    text-yellow-500
                  "
                />

                <span>
                  sales@salehmohsin.com
                </span>
              </a>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group

                  flex
                  items-start
                  gap-3

                  text-sm
                  leading-6
                  text-neutral-500

                  transition-colors

                  hover:text-neutral-300
                "
              >
                <MapPin
                  className="
                    mt-0.5
                    h-4
                    w-4
                    flex-shrink-0
                    text-yellow-500
                  "
                />

                <span>
                  Old Tasheel Street,
                  Al Sajaa, Sharjah,
                  UAE
                </span>
              </a>
            </div>

            {/* Social */}
            <div
              className="
                mt-6
                flex
                gap-2
              "
            >
              <a
                href="https://www.instagram.com/smtr.ae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMT on Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-md

                  border
                  border-neutral-800

                  text-neutral-500

                  transition-colors

                  hover:border-yellow-500
                  hover:text-yellow-500
                "
                data-testid="footer-instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMT on WhatsApp"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-md

                  border
                  border-neutral-800

                  text-neutral-500

                  transition-colors

                  hover:border-yellow-500
                  hover:text-yellow-500
                "
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===============================================
          BOTTOM BAR
      ================================================ */}
      <div
        className="
          border-t
          border-neutral-800

          bg-black
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl

            flex-col
            gap-3

            px-4
            py-5

            text-xs
            text-neutral-600

            sm:px-6

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {year} Saleh Mohsin
            Trading LLC. All rights
            reserved.
          </p>

          {/* NetRise credit retained,
              but intentionally subtle */}
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span>
              Website by
            </span>

            <img
              src="/netrise.png"
              alt=""
              className="
                h-5
                w-5
                rounded-full
                object-cover
                opacity-60
              "
            />

            <span
              className="
                font-medium
                text-neutral-500
              "
            >
              NetRise
            </span>

            <span className="text-neutral-800">
              •
            </span>

            <a
              href="https://www.instagram.com/netrise.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                hover:text-neutral-400
              "
            >
              Instagram
            </a>

            <span className="text-neutral-800">
              •
            </span>

            <a
              href="https://wa.me/971568927860"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                hover:text-neutral-400
              "
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}