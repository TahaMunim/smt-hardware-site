import { Link } from "wouter";

import {
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardList,
  MessageSquareText,
  PackageSearch,
  Phone,
  Search,
  Truck
} from "lucide-react";

const WHATSAPP_NUMBER = "971503821352";

const QUOTE_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello SMT, I would like to request a quotation. I can share my product requirements or BOQ here."
  );

const SOURCING_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello SMT, I am looking for a product that I could not find in the catalogue. Can you help source it?"
  );

const services = [
  {
    icon: Boxes,
    title: "Bulk & Project Supply",
    description:
      "Send your quantity requirements, project lists or recurring material needs to SMT for consolidated supply support.",
    points: [
      "Bulk quantity enquiries",
      "Project material requirements",
      "Multi-item quotation support"
    ]
  },
  {
    icon: PackageSearch,
    title: "Product Sourcing",
    description:
      "If an item is not currently listed in our online catalogue, share the brand, model, specification or reference with our team.",
    points: [
      "Brand and model sourcing",
      "Alternative product enquiries",
      "Special requirement support"
    ]
  },
  {
    icon: ClipboardList,
    title: "BOQ & Quotation Support",
    description:
      "Submit a BOQ, material list or item schedule and let SMT review the requirement for pricing and availability.",
    points: [
      "BOQ review",
      "Itemised quotations",
      "Trade and project enquiries"
    ]
  },
  {
    icon: Truck,
    title: "Delivery Coordination",
    description:
      "Delivery requirements can be discussed with our sales team based on the order, location and product availability.",
    points: [
      "UAE delivery enquiries",
      "Site and business locations",
      "Order-specific coordination"
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Send Your Requirement",
    description:
      "Share the product name, model, quantity, BOQ or material list through WhatsApp, phone or our contact page."
  },
  {
    number: "02",
    title: "SMT Reviews It",
    description:
      "Our team checks the requested products, available options and relevant supply details."
  },
  {
    number: "03",
    title: "Receive a Quotation",
    description:
      "We provide the available product and commercial details for your review before the order is confirmed."
  },
  {
    number: "04",
    title: "Order Coordination",
    description:
      "Once confirmed, the team coordinates the order and applicable collection or delivery arrangements."
  }
];

const buyerTypes = [
  {
    icon: Building2,
    title: "Contractors",
    description:
      "Project tools, consumables, safety products and construction supply requirements."
  },
  {
    icon: Search,
    title: "Workshops & Fabricators",
    description:
      "Tools, abrasives, welding products, accessories and workshop consumables."
  },
  {
    icon: Boxes,
    title: "Factories & Industrial Buyers",
    description:
      "Maintenance, PPE, tools and general industrial purchasing requirements."
  },
  {
    icon: PackageSearch,
    title: "Hardware & Trade Buyers",
    description:
      "Product sourcing and quantity enquiries across multiple supply categories."
  }
];

export default function Services() {
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
            max-w-7xl
            px-4
            py-14
            sm:px-6
            sm:py-16
            lg:py-20
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-yellow-500
              "
            >
              SMT Services
            </p>

            <h1
              className="
                mt-3
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              More Than Just
              <span className="text-yellow-500">
                {" "}
                Product Supply
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-neutral-400
                sm:text-lg
              "
            >
              From individual product enquiries to BOQs
              and bulk requirements, SMT helps businesses
              source and coordinate the supplies they need.
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
              <a
                href={QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
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
                <MessageSquareText className="h-4 w-4" />
                Request a Quote
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
                Browse Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          CORE SERVICES
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800
          bg-black
          py-16
          md:py-20
        "
        data-testid="services-list-section"
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
          "
        >
          <div className="mb-10 max-w-2xl">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-yellow-500
              "
            >
              What We Support
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
              data-testid="services-list-title"
            >
              Built for Trade & Project Requirements
            </h2>

            <p
              className="
                mt-3
                leading-7
                text-neutral-400
              "
            >
              Use SMT as a single point of contact for
              product enquiries, quotations and supply
              requirements across multiple categories.
            </p>
          </div>

          <div
            className="
              grid
              gap-4
              md:grid-cols-2
            "
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="
                    group
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-950
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-yellow-500/50
                    hover:bg-neutral-900
                    md:p-7
                  "
                  data-testid={`service-card-${index}`}
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
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
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-semibold
                      text-white
                    "
                    data-testid={`service-title-${index}`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      leading-7
                      text-neutral-400
                    "
                    data-testid={`service-description-${index}`}
                  >
                    {service.description}
                  </p>

                  <div
                    className="
                      mt-5
                      space-y-2
                      border-t
                      border-neutral-800
                      pt-5
                    "
                  >
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          text-neutral-500
                        "
                      >
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-yellow-500" />
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          PRODUCT SOURCING CTA
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800
          bg-neutral-950
          py-12
          md:py-14
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
              flex
              flex-col
              gap-6
              rounded-xl
              border
              border-neutral-800
              bg-black
              p-6
              sm:p-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div
              className="
                flex
                max-w-3xl
                items-start
                gap-4
              "
            >
              <div
                className="
                  hidden
                  h-12
                  w-12
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-md
                  bg-yellow-500
                  text-black
                  sm:flex
                "
              >
                <PackageSearch className="h-6 w-6" />
              </div>

              <div>
                <h2
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Can't Find the Product Online?
                </h2>

                <p
                  className="
                    mt-2
                    max-w-2xl
                    leading-7
                    text-neutral-400
                  "
                >
                  Our website catalogue is still growing.
                  Send us the brand, model, photo or product
                  specification and ask the team to check it.
                </p>
              </div>
            </div>

            <a
              href={SOURCING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-11
                flex-shrink-0
                items-center
                justify-center
                gap-2
                rounded-md
                border
                border-yellow-500
                px-5
                text-sm
                font-bold
                text-yellow-500
                transition-colors
                hover:bg-yellow-500
                hover:text-black
              "
            >
              Ask SMT to Source It
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =================================================
          HOW IT WORKS
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800
          bg-black
          py-16
          md:py-20
        "
        data-testid="process-section"
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
          "
        >
          <div className="mb-12 text-center">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-yellow-500
              "
            >
              How It Works
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                text-white
                sm:text-4xl
              "
              data-testid="process-title"
            >
              From Requirement to Order
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-neutral-400
              "
            >
              A straightforward enquiry process for both
              individual items and larger material lists.
            </p>
          </div>

          <div
            className="
              grid
              gap-3
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="
                  relative
                  overflow-hidden
                  rounded-lg
                  border
                  border-neutral-800
                  bg-neutral-950
                  p-6
                "
                data-testid={`process-step-${index}`}
              >

                
                <div
                  className="
                    relative
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-md
                    bg-yellow-500
                    text-sm
                    font-black
                    text-black
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    relative
                    mt-5
                    text-lg
                    font-semibold
                    text-white
                  "
                  data-testid={`process-title-${index}`}
                >
                  {step.title}
                </h3>

                <p
                  className="
                    relative
                    mt-3
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                  data-testid={`process-description-${index}`}
                >
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          BUYER TYPES
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
              grid
              gap-10
              lg:grid-cols-[0.75fr_1.25fr]
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
                Who We Serve
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
                Supply Support for Professional Buyers
              </h2>

              <p
                className="
                  mt-4
                  max-w-lg
                  leading-7
                  text-neutral-400
                "
              >
                SMT works with customers purchasing tools,
                equipment and consumables for professional
                and commercial use.
              </p>
            </div>

            <div
              className="
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {buyerTypes.map((buyer) => {
                const Icon = buyer.icon;

                return (
                  <div
                    key={buyer.title}
                    className="
                      rounded-lg
                      border
                      border-neutral-800
                      bg-black
                      p-5
                    "
                  >
                    <Icon className="h-6 w-6 text-yellow-500" />

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
                  </div>
                );
              })}
            </div>
          </div>
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
        data-testid="services-cta"
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-80
            w-80
            rounded-full
            border-[60px]
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
              Start an Enquiry
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
              Have a Product List or Project Requirement?
            </h2>

            <p
              className="
                mt-3
                leading-7
                text-black/70
              "
            >
              Send it to SMT and let our team review the
              products you need.
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
              href={QUOTE_URL}
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
              Request Quote
            </a>

            <a
              href="tel:+971503821352"
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
              <Phone className="h-4 w-4" />
              Call SMT
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}