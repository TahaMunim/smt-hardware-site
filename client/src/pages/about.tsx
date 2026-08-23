import { Link } from "wouter";

import {
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  Factory,
  Handshake,
  HardHat,
  MapPin,
  MessageSquareText,
  PackageSearch,
  Store,
  Target,
  Wrench
} from "lucide-react";

const WHATSAPP_NUMBER = "971503821352";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello SMT, I would like to know more about your products and supply services."
  );

const strengths = [
  {
    icon: PackageSearch,
    title: "Broad Product Sourcing",
    description:
      "Tools, construction consumables, safety products and industrial supplies across multiple categories."
  },
  {
    icon: MessageSquareText,
    title: "Practical Sales Support",
    description:
      "Direct communication for product enquiries, quotations, model references and material requirements."
  },
  {
    icon: Boxes,
    title: "Trade & Project Supply",
    description:
      "Support for individual items, bulk quantities, BOQs and multi-product purchasing requirements."
  },
  {
    icon: Handshake,
    title: "Relationship Focused",
    description:
      "A trading approach built around responsive service and long-term customer relationships."
  }
];

const buyerTypes = [
  {
    icon: Building2,
    title: "Contractors",
    description:
      "Construction tools, consumables, safety products and project material requirements."
  },
  {
    icon: Wrench,
    title: "Workshops & Fabricators",
    description:
      "Professional tools, welding products, abrasives and workshop supplies."
  },
  {
    icon: Factory,
    title: "Factories & Industrial Buyers",
    description:
      "Maintenance tools, PPE, consumables and general industrial purchasing requirements."
  },
  {
    icon: Store,
    title: "Hardware & Trade Buyers",
    description:
      "Product sourcing, quantity enquiries and multi-category supply support."
  }
];

const categories = [
  "Power Tools",
  "Hand Tools",
  "Safety Equipment & PPE",
  "Construction Consumables",
  "Adhesives & Chemicals",
  "Abrasives",
  "Fasteners & Fixings",
  "Painting Accessories",
  "Measuring Equipment",
  "Packaging Materials"
];

export default function About() {
  return (
    <main className="min-h-screen bg-black">

      {/* =================================================
          HERO
      ================================================== */}
      <section
        className="
          relative
          overflow-hidden

          border-b
          border-neutral-800

          bg-neutral-950
        "
        data-testid="about-hero"
      >
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40

            h-[450px]
            w-[450px]

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

            gap-12

            px-4
            py-14

            sm:px-6
            sm:py-16

            lg:grid-cols-[1fr_0.9fr]
            lg:items-center
            lg:gap-16
            lg:py-20
          "
        >
          {/* Hero Copy */}
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
              About SMT
            </p>

            <h1
              className="
                mt-3

                max-w-3xl

                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-white

                sm:text-5xl
                lg:text-6xl
              "
            >
              A Practical Supply Partner for
              <span className="text-yellow-500">
                {" "}
                UAE Businesses
              </span>
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
            >
              Saleh Mohsin Trading LLC supplies professional
              tools, construction products, industrial
              consumables and workplace essentials to
              businesses across a wide range of trades.
            </p>

            <p
              className="
                mt-4
                max-w-2xl

                leading-7
                text-neutral-500
              "
            >
              Based in Al Sajaa, Sharjah, SMT supports
              contractors, workshops, factories, hardware
              buyers and other professional customers with
              product enquiries, sourcing and quotation
              requirements.
            </p>

            <div
              className="
                mt-7
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
              >
                Browse Products

                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={WHATSAPP_URL}
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

                Talk to SMT
              </a>
            </div>
          </div>

          {/* Company Card */}
          <div
            className="
              rounded-xl

              border
              border-neutral-800

              bg-black

              p-6

              shadow-2xl
              shadow-black/30

              sm:p-7
            "
          >
            <div
              className="
                flex
                items-center
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

                  bg-yellow-500

                  text-black
                "
              >
                <Building2 className="h-6 w-6" />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Saleh Mohsin Trading LLC
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-neutral-500
                  "
                >
                  Industrial & Building Materials Trading
                </p>
              </div>
            </div>

            <div
              className="
                mt-6
                space-y-4

                border-t
                border-neutral-800

                pt-6
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <MapPin
                  className="
                    mt-0.5
                    h-5
                    w-5
                    flex-shrink-0
                    text-yellow-500
                  "
                />

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-neutral-200
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-neutral-500
                    "
                  >
                    Al Sajaa, Sharjah, United Arab Emirates
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <Target
                  className="
                    mt-0.5
                    h-5
                    w-5
                    flex-shrink-0
                    text-yellow-500
                  "
                />

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-neutral-200
                    "
                  >
                    Focus
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-6
                      text-neutral-500
                    "
                  >
                    Professional tools, industrial supplies,
                    construction products and trade
                    consumables.
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <Handshake
                  className="
                    mt-0.5
                    h-5
                    w-5
                    flex-shrink-0
                    text-yellow-500
                  "
                />

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-neutral-200
                    "
                  >
                    Customer Approach
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-6
                      text-neutral-500
                    "
                  >
                    Responsive enquiries, competitive supply
                    support and long-term business
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          WHO WE ARE
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-black

          py-16
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl

            gap-12

            px-4
            sm:px-6

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-16
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
              Who We Are
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
              Trading Built Around Real Purchasing Needs
            </h2>
          </div>

          <div
            className="
              space-y-5

              leading-7
              text-neutral-400
            "
          >
            <p>
              SMT operates as a multi-category supplier for
              customers who need reliable access to tools,
              equipment, construction consumables and
              industrial products.
            </p>

            <p>
              Rather than limiting enquiries to what is
              displayed online, customers can also send
              product references, model numbers, images,
              BOQs or complete material lists for review.
            </p>

            <p>
              The online catalogue is being developed as a
              practical product-discovery tool while SMT's
              sales team continues to handle broader sourcing
              and quotation requirements directly.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          STRENGTHS
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-neutral-950

          py-16
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
              max-w-2xl
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
              How We Work
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
              Practical Support from Enquiry to Supply
            </h2>
          </div>

          <div
            className="
              grid
              gap-3

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {strengths.map((strength) => {
              const Icon =
                strength.icon;

              return (
                <article
                  key={strength.title}
                  className="
                    group

                    rounded-lg

                    border
                    border-neutral-800

                    bg-black

                    p-6

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:border-yellow-500/50
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
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
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3
                    className="
                      mt-5

                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    {strength.title}
                  </h3>

                  <p
                    className="
                      mt-3

                      text-sm
                      leading-6
                      text-neutral-500
                    "
                  >
                    {strength.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          PRODUCT RANGE
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-black

          py-16
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl

            gap-10

            px-4
            sm:px-6

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-16
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
              Product Range
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
              Multiple Categories, One Supply Contact
            </h2>

            <p
              className="
                mt-4
                max-w-lg

                leading-7
                text-neutral-400
              "
            >
              SMT supplies across several product groups,
              helping professional buyers consolidate more
              of their requirements through a single trading
              partner.
            </p>

            <Link
              href="/products"
              className="
                mt-6
                inline-flex
                items-center
                gap-2

                text-sm
                font-semibold
                text-yellow-500

                transition-colors

                hover:text-yellow-400
              "
            >
              Explore online catalogue

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div
            className="
              grid
              gap-2

              sm:grid-cols-2
            "
          >
            {categories.map(
              (category) => (
                <div
                  key={category}
                  className="
                    flex
                    items-center
                    gap-3

                    rounded-md

                    border
                    border-neutral-800

                    bg-neutral-950

                    px-4
                    py-3.5
                  "
                >
                  <CheckCircle2
                    className="
                      h-4
                      w-4
                      flex-shrink-0
                      text-yellow-500
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-neutral-300
                    "
                  >
                    {category}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =================================================
          CUSTOMERS
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-neutral-950

          py-16
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
              Our Customers
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
              Supporting Professional Buyers Across Trades
            </h2>
          </div>

          <div
            className="
              grid
              gap-3

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {buyerTypes.map(
              (buyer) => {
                const Icon =
                  buyer.icon;

                return (
                  <article
                    key={buyer.title}
                    className="
                      rounded-lg

                      border
                      border-neutral-800

                      bg-black

                      p-6
                    "
                  >
                    <Icon className="h-7 w-7 text-yellow-500" />

                    <h3
                      className="
                        mt-4

                        font-semibold
                        text-white
                      "
                    >
                      {buyer.title}
                    </h3>

                    <p
                      className="
                        mt-2

                        text-sm
                        leading-6
                        text-neutral-500
                      "
                    >
                      {buyer.description}
                    </p>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* =================================================
          PRINCIPLE
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-black

          py-16
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-5xl

            px-4
            text-center

            sm:px-6
          "
        >
          <div
            className="
              mx-auto

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-md

              bg-yellow-500

              text-black
            "
          >
            <Handshake className="h-6 w-6" />
          </div>

          <h2
            className="
              mt-6

              text-3xl
              font-bold
              tracking-tight
              text-white

              sm:text-4xl
            "
          >
            Business Is Built on Reliable Relationships
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl

              text-base
              leading-8
              text-neutral-400

              sm:text-lg
            "
          >
            SMT's approach is straightforward: understand
            what the customer needs, help identify suitable
            products, communicate clearly and support the
            requirement through quotation and supply.
          </p>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
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
            -top-28

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
            gap-7

            px-4
            py-12

            sm:px-6

            lg:flex-row
            lg:items-center
            lg:justify-between
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
              Work With SMT
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
              Looking for Tools or Industrial Supplies?
            </h2>

            <p
              className="
                mt-3

                leading-7
                text-black/70
              "
            >
              Browse the catalogue or send your product
              requirement directly to our team.
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
              href={WHATSAPP_URL}
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

              Contact SMT
            </a>

            <Link
              href="/products"
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
              Browse Products

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}