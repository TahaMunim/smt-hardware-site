import { Link } from "wouter";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 py-16" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold">
                <span className="text-white">SMT</span>
                <span className="text-yellow-500"> Hardware</span>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Your trusted partner for hardware and construction materials in the UAE.
            </p>
            <div className="space-y-2">
              <p className="text-neutral-400 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-yellow-500" />
                Business Hours: Sat-Fri, 7:00 AM - 8:00 PM
              </p>
              <p className="text-neutral-400 flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-yellow-500" />
                Old Tasheel St, Al Sajaa, Sharjah, UAE
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-500">Quick Links</h3>
            <ul className="space-y-3">

              <li>
                <Link
                  href="/"
                  className="text-neutral-400 hover:text-yellow-500 transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-neutral-400 hover:text-yellow-500 transition-colors"
                  data-testid="footer-link-products"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-yellow-500 transition-colors"
                  data-testid="footer-link-services"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-yellow-500 transition-colors"
                  data-testid="footer-link-about"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-yellow-500 transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-500">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="tel:+971503821352"
                className="flex items-center text-neutral-400 hover:text-yellow-500 transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="mr-3 h-4 w-4" />
                +971 50 382 1352
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@salehmohsin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-neutral-400 hover:text-yellow-500 transition-colors"
                data-testid="footer-email"
              >
                <Mail className="mr-3 h-4 w-4" />
                sales@salehmohsin.com
              </a>
              <a 
                href="https://wa.me/971503821352"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-neutral-400 hover:text-yellow-500 transition-colors"
                data-testid="footer-whatsapp"
              >
                <FaWhatsapp className="mr-3 h-4 w-4" />
                WhatsApp
              </a>
              <a 
                href="https://instagram.com/smtr.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-neutral-400 hover:text-yellow-500 transition-colors"
                data-testid="footer-instagram"
              >
                <FaInstagram className="mr-3 h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400">
            © 2025 Saleh Mohsin Trading LLC. All rights reserved.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10 mb-6">
        <div className="flex items-center gap-3
          drop-shadow-[0_0_18px_rgba(140,90,255,0.55)]
        ">

          {/* Circular Mini Logo Badge (Proper Cropping) */}
          <div
            className="
              w-8 h-8
              rounded-full
              overflow-hidden
              bg-white/10
              shadow-[0_0_15px_rgba(140,90,255,0.4)]
              border border-white/20
              backdrop-blur-sm
              flex items-center justify-center
            "
          >
            <img
              src="/netrise.png"
              alt="NetRise Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text + Colored Links + Glow */}
          <p
            className="
              text-sm tracking-wide
              text-white/90
              flex items-center gap-2
              [text-shadow:0_0_12px_rgba(140,90,255,0.7)]
            "
          >
            <span>
              Powered by <span className="font-semibold">NetRise</span>
            </span>

            <span className="text-white/40">•</span>

            <a
              href="https://www.instagram.com/netrise.ae"
              target="_blank"
              className="
                text-[#E1306C] 
                hover:text-[#ff4f96] 
                transition
                [text-shadow:0_0_12px_rgba(225,48,108,0.65)]
              "
            >
              Instagram
            </a>

            <span className="text-white/40">·</span>

            <a
              href="https://wa.me/971568927860"
              target="_blank"
              className="
                text-[#25D366]
                hover:text-[#4dff91]
                transition
                [text-shadow:0_0_12px_rgba(37,211,102,0.65)]
              "
            >
              WhatsApp
            </a>
          </p>

        </div>
      </div>

      </footer>
  );
}
