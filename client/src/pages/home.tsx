import { useState } from "react";
import type { FormEvent } from "react";

import {
  Link,
  useLocation
} from "wouter";

import {
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  Drill,
  Factory,
  Hammer,
  HardHat,
  MapPin,
  MessageSquareText,
  PackageSearch,
  Paintbrush,
  Search,
  Store,
  Truck,
  Wrench
} from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const WHATSAPP_NUMBER = "971503821352";

const REQUEST_QUOTE_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello SMT, I would like to request a quotation. I can send my BOQ or material list here."
  );

const GENERAL_WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello SMT, I would like to inquire about your products."
  );

const BRAND_LOGOS: Record<string, string> = {
  DEWALT: "/brands/dewalt-logo.png",
  RIDGID: "/brands/ridgid-logo.png",
  SIKA: "/brands/sika-logo.png",
  SPIT: "/brands/spit-logo.png",
  STANLEY: "/brands/stanley-logo.png",
  "TUF-FIX": "/brands/tuffix-logo.png"
};

const CATEGORY_DESCRIPTIONS: Record<
  string,
  string
> = {
  "Power Tools":
    "Professional tools for drilling, grinding, fastening and workshop applications.",

  "Safety Equipment":
    "PPE and workplace protection for construction and industrial environments.",

  "Construction Equipment":
    "Site equipment, fixings, adhesives and products for construction work.",

  "Material Handling":
    "Equipment and supplies for moving, storing and handling materials.",

  "Hand Tools":
    "Professional hand tools for job sites, workshops and maintenance work.",

  "Painting Equipment":
    "Rollers, brushes, refills and accessories for painting applications."
};

const FEATURED_CATEGORY_NAMES = [
  "Power Tools",
  "Safety Equipment",
  "Construction Equipment",
  "Material Handling",
  "Hand Tools",
  "Painting Equipment"
] as const;

function CategoryIcon({
  category
}: {
  category: string;
}) {
  const className = "h-7 w-7";

  switch (category) {
    case "Power Tools":
      return (
        <Drill className={className} />
      );

    case "Safety Equipment":
      return (
        <HardHat className={className} />
      );

    case "Construction Equipment":
      return (
        <Hammer className={className} />
      );

    case "Material Handling":
      return (
        <Boxes className={className} />
      );

    case "Hand Tools":
      return (
        <Wrench className={className} />
      );

    case "Painting Equipment":
      return (
        <Paintbrush className={className} />
      );

    default:
      return (
        <PackageSearch
          className={className}
        />
      );
  }
}

export default function Home() {
  const [, navigate] =
    useLocation();

  const [
    searchTerm,
    setSearchTerm
  ] = useState("");

  /*
    Keep the homepage intentionally curated.

    The complete category hierarchy lives on
    the Products page; showing every database
    category here would make the homepage grow
    indefinitely as the catalogue expands.
  */
  const categories =
    FEATURED_CATEGORY_NAMES.filter(
      (category) =>
        products.some(
          (product) =>
            product.category ===
            category
        )
    );

  /*
    Only products with actual images
    are featured on the homepage.
  */
  const featuredProducts =
    products
      .filter(
        (product) =>
          product.image &&
          product.image.length > 0
      )
      .slice(0, 8);

  /*
    Only display brands that exist
    in our catalogue and have a
    logo asset available.
  */
  const liveBrands =
    Array.from(
      new Set(
        products.map(
          (product) =>
            product.brand
        )
      )
    ).filter(
      (brand) =>
        BRAND_LOGOS[brand]
    );

  const handleSearch = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const query =
      searchTerm.trim();

    if (!query) {
      navigate("/products");
      return;
    }

    navigate(
      `/products?search=${encodeURIComponent(
        query
      )}`
    );
  };

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

  return (
    <main className="min-h-screen overflow-x-hidden bg-black">

      {/* =================================================
          HERO
      ================================================== */}
      <section
        className="
          relative
          overflow-hidden

          border-b
          border-neutral-800

          bg-gradient-to-br
          from-neutral-950
          via-black
          to-neutral-950
        "
        data-testid="hero-section"
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-0

            h-[500px]
            w-[500px]

            rounded-full

            bg-yellow-500/10

            blur-[130px]
          "
        />

        <div
          className="
            relative

            mx-auto
            grid
            max-w-7xl

            items-center
            gap-12

            px-4
            py-12

            sm:px-6
            sm:py-16

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
            lg:py-20

            xl:py-24
          "
        >
          {/* =============================================
              HERO COPY
          ============================================== */}
          <div>
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-yellow-500/30

                bg-yellow-500/10

                px-3
                py-1.5

                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-yellow-500
              "
            >
              <MapPin className="h-3.5 w-3.5" />

              Al Sajaa, Sharjah, UAE
            </div>

            <h1
              className="
                max-w-3xl

                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white

                sm:text-5xl
                lg:text-6xl
                xl:text-[64px]
              "
              data-testid="hero-title"
            >
              Industrial Tools
              <span className="text-yellow-500">
                {" "}
                & Supplies
              </span>{" "}
              for UAE Businesses
            </h1>

            <p
              className="
                mt-6
                max-w-2xl

                text-base
                leading-7
                text-neutral-400

                sm:text-lg
              "
              data-testid="hero-subtitle"
            >
              Professional tools,
              construction supplies,
              safety equipment and
              trade consumables for
              contractors, workshops,
              factories and businesses
              across the UAE.
            </p>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="
                mt-8
                max-w-2xl
              "
            >
              <div
                className="
                  flex
                  overflow-hidden

                  rounded-lg

                  border
                  border-neutral-700

                  bg-neutral-900

                  shadow-xl
                  shadow-black/20

                  transition-colors

                  focus-within:border-yellow-500
                "
              >
                <div
                  className="
                    flex
                    items-center
                    pl-4
                    text-neutral-500
                  "
                >
                  <Search className="h-5 w-5" />
                </div>

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(
                      event.target.value
                    )
                  }
                  placeholder="Search products, brands or models..."
                  aria-label="Search SMT catalogue"
                  className="
                    min-w-0
                    flex-1

                    bg-transparent

                    px-3
                    py-4

                    text-sm
                    text-white

                    outline-none

                    placeholder:text-neutral-500

                    sm:text-base
                  "
                />

                <button
                  type="submit"
                  className="
                    flex-shrink-0

                    bg-yellow-500

                    px-5

                    whitespace-nowrap

                    text-sm
                    font-bold
                    text-black

                    transition-colors

                    hover:bg-yellow-400

                    sm:px-7
                    sm:text-base
                  "
                >
                  Search
                </button>
              </div>
            </form>

            {/* Hero actions */}
            <div
              className="
                mt-6
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              <Link
                href="/products"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2

                  rounded-md

                  bg-yellow-500

                  px-6

                  text-sm
                  font-bold
                  text-black

                  transition-colors

                  hover:bg-yellow-400
                "
                data-testid="button-browse-products"
              >
                Browse Catalogue

                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={REQUEST_QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2

                  rounded-md

                  border
                  border-neutral-700

                  px-6

                  text-sm
                  font-semibold
                  text-white

                  transition-colors

                  hover:border-yellow-500
                  hover:text-yellow-500
                "
              >
                <MessageSquareText className="h-4 w-4" />

                Request a Quote
              </a>
            </div>

            {/* Trust points */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-x-6
                gap-y-3

                text-sm
                text-neutral-400
              "
            >
              <span
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <CheckCircle2 className="h-4 w-4 text-yellow-500" />

                Trade & project enquiries
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <CheckCircle2 className="h-4 w-4 text-yellow-500" />

                Bulk requirements
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <CheckCircle2 className="h-4 w-4 text-yellow-500" />

                UAE supply support
              </span>
            </div>
          </div>

          {/* =============================================
              HERO IMAGE
          ============================================== */}
          <div
            className="
              relative
              hidden
              lg:block
            "
          >
            {/* Outer frame */}
            <div
              className="
                absolute
                -inset-3

                rounded-2xl

                border
                border-yellow-500/10
              "
            />

            {/* Main Image Card */}
            <div
              className="
                relative
                overflow-hidden

                rounded-xl

                border
                border-neutral-800

                bg-neutral-900

                shadow-2xl
                shadow-black/50
              "
            >
              <img
                src="/SMTCarousel/5.png"
                alt="Professional tools displayed at Saleh Mohsin Trading LLC"
                className="
                  aspect-[4/3]
                  w-full
                  object-cover
                "
              />

              {/* Caption contrast gradient */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t

                  from-black
                  via-black/20
                  to-transparent
                "
              />

              {/* Image Caption */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0

                  p-6
                  xl:p-7
                "
              >
                <div
                  className="
                    inline-flex

                    rounded-md

                    bg-yellow-500

                    px-3
                    py-1.5

                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-black
                  "
                >
                  Saleh Mohsin Trading LLC
                </div>

                <p
                  className="
                    mt-3
                    max-w-md

                    text-lg
                    font-semibold
                    leading-7
                    text-white

                    drop-shadow-lg
                  "
                >
                  Professional tools and industrial
                  supplies under one roof.
                </p>
              </div>
            </div>

            {/* ===========================================
                BOQ CARD
            ============================================ */}
            <a
              href={REQUEST_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                z-10

                mx-5
                mt-3

                flex
                items-center
                justify-between
                gap-4

                rounded-lg

                border
                border-neutral-800

                bg-neutral-950

                px-5
                py-4

                shadow-xl
                shadow-black/30

                transition-all
                duration-200

                hover:border-yellow-500/60
                hover:bg-neutral-900
              "
            >
              <div
                className="
                  flex
                  min-w-0
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    flex-shrink-0
                    items-center
                    justify-center

                    rounded-md

                    bg-yellow-500

                    text-black
                  "
                >
                  <MessageSquareText className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Have a BOQ or material list?
                  </p>

                  <p
                    className="
                      mt-1

                      text-xs
                      leading-5
                      text-neutral-500
                    "
                  >
                    Send it directly to SMT for a quotation.
                  </p>
                </div>
              </div>

              <ArrowRight
                className="
                  h-5
                  w-5
                  flex-shrink-0

                  text-yellow-500

                  transition-transform
                  duration-200

                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>
      </section>

      {/* =================================================
          CATEGORIES
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-black

          py-12
          md:py-20
        "
        data-testid="categories-section"
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            sm:px-6
          "
        >
          <div
            className="
              mb-10
              flex
              flex-col
              gap-4

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-yellow-500
                "
              >
                Product Catalogue
              </p>

              <h2
                className="
                  mt-3

                  text-3xl
                  font-bold
                  tracking-tight
                  text-white

                  sm:text-4xl
                "
              >
                Browse by Category
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl

                  text-neutral-400
                "
              >
                Find products faster
                through our growing
                online catalogue.
              </p>
            </div>

            <Link
              href="/products"
              className="
                flex
                items-center
                gap-2

                text-sm
                font-semibold
                text-yellow-500

                hover:text-yellow-400
              "
            >
              View all products

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div
            className="
              grid
              grid-cols-1

              gap-3

              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {categories.map(
              (category) => {
                const count =
                  products.filter(
                    (product) =>
                      product.category ===
                      category
                  ).length;

                return (
                  <Link
                    key={category}
                    href={categoryUrl(
                      category
                    )}
                    className="
                      group

                      relative
                      overflow-hidden

                      rounded-lg

                      border
                      border-neutral-800

                      bg-neutral-950

                      p-5

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:border-yellow-500/60
                      hover:bg-neutral-900
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          flex-shrink-0
                          items-center
                          justify-center

                          rounded-md

                          bg-yellow-500/10

                          text-yellow-500

                          transition-colors

                          group-hover:bg-yellow-500
                          group-hover:text-black
                        "
                      >
                        <CategoryIcon
                          category={
                            category
                          }
                        />
                      </div>

                      <ArrowRight
                        className="
                          h-5
                          w-5

                          text-neutral-700

                          transition-all

                          group-hover:translate-x-1
                          group-hover:text-yellow-500
                        "
                      />
                    </div>

                    <h3
                      className="
                        mt-5

                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {category}
                    </h3>

                    <p
                      className="
                        mt-2

                        min-h-[44px]

                        text-sm
                        leading-6
                        text-neutral-500
                      "
                    >
                      {CATEGORY_DESCRIPTIONS[
                        category
                      ] ||
                        "Explore products available in this category."}
                    </p>

                    <p
                      className="
                        mt-4

                        text-xs
                        font-medium
                        text-neutral-600
                      "
                    >
                      {count}{" "}
                      {count === 1
                        ? "online listing"
                        : "online listings"}
                    </p>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* =================================================
          FEATURED PRODUCTS
      ================================================== */}
      <section
        className="
          bg-neutral-950

          py-12
          md:py-20
        "
        data-testid="products-preview-section"
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            sm:px-6
          "
        >
          <div
            className="
              mb-10
              flex
              flex-col
              gap-4

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-yellow-500
                "
              >
                From Our Catalogue
              </p>

              <h2
                className="
                  mt-3

                  text-3xl
                  font-bold
                  tracking-tight
                  text-white

                  sm:text-4xl
                "
                data-testid="products-preview-title"
              >
                Featured Products
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl

                  text-neutral-400
                "
              >
                A selection from
                SMT's current online
                product range.
              </p>
            </div>

            <Link
              href="/products"
              className="
                flex
                items-center
                gap-2

                text-sm
                font-semibold
                text-yellow-500

                hover:text-yellow-400
              "
            >
              Explore catalogue

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div
            className="
              grid
              grid-cols-1

              gap-4

              sm:grid-cols-2
              md:gap-6

              lg:grid-cols-4
            "
          >
            {featuredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* =================================================
          BRANDS
      ================================================== */}
      <section
        className="
          border-y
          border-neutral-800

          bg-black

          py-14
          md:py-16
        "
        data-testid="brands-section"
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            sm:px-6
          "
        >
          <div
            className="
              mb-8
              text-center
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-yellow-500
              "
            >
              Product Brands
            </p>

            <h2
              className="
                mt-3

                text-3xl
                font-bold
                text-white

                sm:text-4xl
              "
            >
              Brands We Supply
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl

                text-neutral-400
              "
            >
              Browse brands currently
              represented in our
              online catalogue.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-2

              overflow-hidden

              rounded-lg

              border
              border-neutral-800

              sm:grid-cols-3
              lg:grid-cols-6
            "
          >
            {liveBrands.map(
              (brand) => (
                <Link
                  key={brand}
                  href={brandUrl(
                    brand
                  )}
                  aria-label={`Browse ${brand} products`}
                  className="
                    group

                    flex
                    h-28
                    items-center
                    justify-center

                    border
                    border-neutral-800

                    bg-neutral-950

                    p-5

                    transition-colors

                    hover:bg-neutral-900
                  "
                >
                  <img
                    src={
                      BRAND_LOGOS[
                        brand
                      ]
                    }
                    alt={brand}
                    loading="lazy"
                    className="
                      max-h-12
                      max-w-[130px]

                      object-contain

                      opacity-75
                      grayscale

                      transition-all
                      duration-300

                      group-hover:opacity-100
                      group-hover:grayscale-0
                    "
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* =================================================
          WHO WE SUPPLY
      ================================================== */}
      <section
        className="
          bg-neutral-950

          py-12
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            sm:px-6
          "
        >
          <div
            className="
              grid
              gap-12

              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-start
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-yellow-500
                "
              >
                Trade Supply
              </p>

              <h2
                className="
                  mt-3

                  text-3xl
                  font-bold
                  tracking-tight
                  text-white

                  sm:text-4xl
                "
              >
                Built Around
                Professional Buyers
              </h2>

              <p
                className="
                  mt-5
                  max-w-lg

                  leading-7
                  text-neutral-400
                "
              >
                Whether you need a
                single specialist
                item or a project
                material list, SMT
                supports professional
                purchasing
                requirements across
                multiple trades.
              </p>

              <a
                href={
                  GENERAL_WHATSAPP_URL
                }
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2

                  text-sm
                  font-semibold
                  text-yellow-500

                  hover:text-yellow-400
                "
              >
                Speak with our sales team

                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div
              className="
                grid
                gap-3

                sm:grid-cols-2
              "
            >
              <div
                className="
                  rounded-lg

                  border
                  border-neutral-800

                  bg-black

                  p-5
                "
              >
                <Building2 className="h-7 w-7 text-yellow-500" />

                <h3
                  className="
                    mt-4
                    font-semibold
                    text-white
                  "
                >
                  Contractors &
                  Construction
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Tools, site
                  consumables and
                  materials for
                  project requirements.
                </p>
              </div>

              <div
                className="
                  rounded-lg

                  border
                  border-neutral-800

                  bg-black

                  p-5
                "
              >
                <Wrench className="h-7 w-7 text-yellow-500" />

                <h3
                  className="
                    mt-4
                    font-semibold
                    text-white
                  "
                >
                  Workshops &
                  Fabricators
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Professional tools,
                  abrasives, welding
                  and workshop supplies.
                </p>
              </div>

              <div
                className="
                  rounded-lg

                  border
                  border-neutral-800

                  bg-black

                  p-5
                "
              >
                <Factory className="h-7 w-7 text-yellow-500" />

                <h3
                  className="
                    mt-4
                    font-semibold
                    text-white
                  "
                >
                  Factories &
                  Industrial Buyers
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Maintenance,
                  safety and
                  industrial supply
                  requirements.
                </p>
              </div>

              <div
                className="
                  rounded-lg

                  border
                  border-neutral-800

                  bg-black

                  p-5
                "
              >
                <Store className="h-7 w-7 text-yellow-500" />

                <h3
                  className="
                    mt-4
                    font-semibold
                    text-white
                  "
                >
                  Hardware & Trade
                  Buyers
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Product sourcing
                  and quantity
                  enquiries for
                  trade customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          WHY SMT
      ================================================== */}
      <section
        className="
          border-y
          border-neutral-800

          bg-black

          py-12
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            sm:px-6
          "
        >
          <div
            className="
              mb-10
              text-center
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-yellow-500
              "
            >
              Why SMT
            </p>

            <h2
              className="
                mt-3

                text-3xl
                font-bold
                text-white

                sm:text-4xl
              "
            >
              Supply Support That
              Fits the Job
            </h2>
          </div>

          <div
            className="
              grid
              gap-px

              overflow-hidden

              rounded-lg

              border
              border-neutral-800

              bg-neutral-800

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            <div
              className="
                bg-neutral-950
                p-6
              "
            >
              <MessageSquareText className="h-7 w-7 text-yellow-500" />

              <h3
                className="
                  mt-4
                  font-semibold
                  text-white
                "
              >
                Responsive Enquiries
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-neutral-500
                "
              >
                Contact SMT directly
                for product,
                availability and
                quotation enquiries.
              </p>
            </div>

            <div
              className="
                bg-neutral-950
                p-6
              "
            >
              <PackageSearch className="h-7 w-7 text-yellow-500" />

              <h3
                className="
                  mt-4
                  font-semibold
                  text-white
                "
              >
                Product Sourcing
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-neutral-500
                "
              >
                Send product
                requirements,
                models or material
                lists for sourcing
                support.
              </p>
            </div>

            <div
              className="
                bg-neutral-950
                p-6
              "
            >
              <Boxes className="h-7 w-7 text-yellow-500" />

              <h3
                className="
                  mt-4
                  font-semibold
                  text-white
                "
              >
                Bulk & Project Supply
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-neutral-500
                "
              >
                Quantity and project
                enquiries can be
                handled through a
                single quotation
                request.
              </p>
            </div>

            <div
              className="
                bg-neutral-950
                p-6
              "
            >
              <Truck className="h-7 w-7 text-yellow-500" />

              <h3
                className="
                  mt-4
                  font-semibold
                  text-white
                "
              >
                UAE Supply
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-neutral-500
                "
              >
                Based in Sharjah and
                serving professional
                purchasing
                requirements across
                the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          RFQ CTA
      ================================================== */}
      <section
        className="
          relative
          overflow-hidden

          bg-yellow-500
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-32

            h-96
            w-96

            rounded-full

            border-[70px]
            border-black/5
          "
        />

        <div
          className="
            relative

            mx-auto
            flex
            max-w-7xl

            flex-col
            gap-8

            px-4
            py-12

            sm:px-6

            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:py-14
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.18em]
                text-black/60
              "
            >
              Request for Quotation
            </p>

            <h2
              className="
                mt-2

                text-3xl
                font-black
                tracking-tight
                text-black

                sm:text-4xl
              "
            >
              Have a BOQ, material
              list or bulk
              requirement?
            </h2>

            <p
              className="
                mt-3

                leading-7
                text-black/70
              "
            >
              Send the details to
              SMT and our team can
              review your product
              requirements for a
              quotation.
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
            "
          >
            <a
              href={REQUEST_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                gap-2

                rounded-md

                bg-black

                px-6

                text-sm
                font-bold
                text-white

                transition-colors

                hover:bg-neutral-800
              "
            >
              <MessageSquareText className="h-4 w-4" />

              Send Requirement
            </a>

            <Link
              href="/contact"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                gap-2

                rounded-md

                border
                border-black/30

                px-6

                text-sm
                font-bold
                text-black

                transition-colors

                hover:bg-black/10
              "
            >
              Contact SMT

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}