import {
  useEffect
} from "react";

import {
  useLocation
} from "wouter";

import {
  products
} from "@/data/products";

const SITE_URL =
  "https://www.salehmohsin.com";

const DEFAULT_IMAGE =
  `${SITE_URL}/SMTLogo.png`;

const DEFAULT_TITLE =
  "Saleh Mohsin Trading LLC | Industrial Tools & Supplies UAE";

const DEFAULT_DESCRIPTION =
  "Saleh Mohsin Trading LLC supplies professional tools, construction supplies, safety equipment, industrial products and trade consumables to businesses across the UAE.";

const ORGANIZATION_SCHEMA_ID =
  "smt-organization-schema";

const PRODUCT_SCHEMA_ID =
  "smt-product-schema";

interface SEOData {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: "website" | "product";
  noIndex?: boolean;
}

/* =========================================================
   META HELPERS
========================================================= */

function setMetaByName(
  name: string,
  content: string
) {
  let element =
    document.head.querySelector<HTMLMetaElement>(
      `meta[name="${name}"]`
    );

  if (!element) {
    element =
      document.createElement(
        "meta"
      );

    element.setAttribute(
      "name",
      name
    );

    document.head.appendChild(
      element
    );
  }

  element.setAttribute(
    "content",
    content
  );
}

function setMetaByProperty(
  property: string,
  content: string
) {
  let element =
    document.head.querySelector<HTMLMetaElement>(
      `meta[property="${property}"]`
    );

  if (!element) {
    element =
      document.createElement(
        "meta"
      );

    element.setAttribute(
      "property",
      property
    );

    document.head.appendChild(
      element
    );
  }

  element.setAttribute(
    "content",
    content
  );
}

function setCanonical(
  href: string
) {
  let element =
    document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

  if (!element) {
    element =
      document.createElement(
        "link"
      );

    element.setAttribute(
      "rel",
      "canonical"
    );

    document.head.appendChild(
      element
    );
  }

  element.setAttribute(
    "href",
    href
  );
}

/* =========================================================
   URL / TEXT HELPERS
========================================================= */

function makeAbsoluteUrl(
  path?: string
) {
  if (!path) {
    return DEFAULT_IMAGE;
  }

  if (
    path.startsWith(
      "http://"
    ) ||
    path.startsWith(
      "https://"
    )
  ) {
    return path;
  }

  if (
    path.startsWith("/")
  ) {
    return `${SITE_URL}${path}`;
  }

  return `${SITE_URL}/${path}`;
}

function cleanDescription(
  text: string,
  maxLength = 155
) {
  const cleaned =
    text
      .replace(
        /\s+/g,
        " "
      )
      .trim();

  if (
    cleaned.length <=
    maxLength
  ) {
    return cleaned;
  }

  const shortened =
    cleaned
      .slice(
        0,
        maxLength - 3
      )
      .trim();

  const lastSpace =
    shortened.lastIndexOf(
      " "
    );

  const safeText =
    lastSpace > 100
      ? shortened.slice(
          0,
          lastSpace
        )
      : shortened;

  return `${safeText}...`;
}

/* =========================================================
   JSON-LD HELPERS
========================================================= */

function setJsonLd(
  id: string,
  schema: Record<
    string,
    unknown
  >
) {
  let script =
    document.getElementById(
      id
    ) as HTMLScriptElement | null;

  if (!script) {
    script =
      document.createElement(
        "script"
      );

    script.id = id;
    script.type =
      "application/ld+json";

    document.head.appendChild(
      script
    );
  }

  script.textContent =
    JSON.stringify(
      schema
    );
}

function removeJsonLd(
  id: string
) {
  const existing =
    document.getElementById(
      id
    );

  if (existing) {
    existing.remove();
  }
}

/* =========================================================
   ORGANIZATION STRUCTURED DATA

   Kept deliberately factual:
   no opening hours, ratings, pricing or other information
   that is not explicitly maintained by SMT.
========================================================= */

function addOrganizationSchema() {
  setJsonLd(
    ORGANIZATION_SCHEMA_ID,
    {
      "@context":
        "https://schema.org",

      "@type":
        "Organization",

      name:
        "Saleh Mohsin Trading LLC",

      url:
        SITE_URL,

      logo:
        DEFAULT_IMAGE,

      telephone:
        "+971503821352",

      email:
        "sales@salehmohsin.com",

      address: {
        "@type":
          "PostalAddress",

        streetAddress:
          "Old Tasheel Street",

        addressLocality:
          "Al Sajaa",

        addressRegion:
          "Sharjah",

        addressCountry:
          "AE"
      },

      sameAs: [
        "https://www.instagram.com/smtr.ae"
      ]
    }
  );
}

/* =========================================================
   PRODUCT STRUCTURED DATA

   We intentionally do NOT invent:
   - price
   - availability
   - ratings
   - reviews

   Those should only be added if SMT later maintains
   reliable product-level commercial data.
========================================================= */

function addProductSchema(
  productId: string
) {
  removeJsonLd(
    PRODUCT_SCHEMA_ID
  );

  const product =
    products.find(
      (
        item
      ) =>
        String(
          item.id
        ) ===
        productId
    );

  if (!product) {
    return;
  }

  const validImages =
    product.image?.filter(
      Boolean
    ) ?? [];

  const productUrl =
    `${SITE_URL}/product/${encodeURIComponent(
      productId
    )}`;

  const schema: Record<
    string,
    unknown
  > = {
    "@context":
      "https://schema.org",

    "@type":
      "Product",

    name:
      product.name,

    description:
      product.description,

    url:
      productUrl,

    category:
      product.category
  };

  if (product.brand) {
    schema.brand = {
      "@type":
        "Brand",

      name:
        product.brand
    };
  }

  if (product.model) {
    schema.model =
      product.model;
  }

  if (product.sku) {
    schema.sku =
      product.sku;
  }

  if (
    validImages.length >
    0
  ) {
    schema.image =
      validImages.map(
        (
          image
        ) =>
          makeAbsoluteUrl(
            image
          )
      );
  }

  if (
    product.specifications &&
    product.specifications
      .length > 0
  ) {
    schema.additionalProperty =
      product.specifications.map(
        (
          specification
        ) => ({
          "@type":
            "PropertyValue",

          name:
            specification.label,

          value:
            specification.unit
              ? `${specification.value} ${specification.unit}`
              : specification.value
        })
      );
  }

  setJsonLd(
    PRODUCT_SCHEMA_ID,
    schema
  );
}

/* =========================================================
   PAGE SEO DATA
========================================================= */

function getSEOData(
  pathname: string,
  search: string
): SEOData {
  /*
    HOME
  */
  if (
    pathname === "/"
  ) {
    return {
      title:
        DEFAULT_TITLE,

      description:
        DEFAULT_DESCRIPTION,

      canonical:
        `${SITE_URL}/`,

      image:
        DEFAULT_IMAGE,

      type:
        "website"
    };
  }

  /*
    PRODUCTS / CATALOGUE

    Query-driven catalogue states such as:

    /products?brand=STANLEY
    /products?category=Power%20Tools
    /products?search=drill
    /products?page=3
    /products?sort=name-asc

    are useful for visitors but are not independent
    SEO landing pages.

    They canonicalize to /products AND use noindex
    so search engines do not build an index full of
    near-duplicate filter combinations.
  */
  if (
    pathname ===
    "/products"
  ) {
    const hasCatalogueState =
      search.length > 0;

    return {
      title:
        "Industrial Tools & Supplies Catalogue | Saleh Mohsin Trading LLC",

      description:
        "Browse SMT's online catalogue of professional tools, safety equipment, construction supplies and industrial products available in the UAE.",

      canonical:
        `${SITE_URL}/products`,

      image:
        DEFAULT_IMAGE,

      type:
        "website",

      noIndex:
        hasCatalogueState
    };
  }

  /*
    SERVICES
  */
  if (
    pathname ===
    "/services"
  ) {
    return {
      title:
        "Trade Supply & Product Sourcing Services | SMT UAE",

      description:
        "SMT supports UAE businesses with product sourcing, BOQ quotations, bulk requirements, project supply and delivery coordination.",

      canonical:
        `${SITE_URL}/services`,

      image:
        DEFAULT_IMAGE,

      type:
        "website"
    };
  }

  /*
    ABOUT
  */
  if (
    pathname ===
    "/about"
  ) {
    return {
      title:
        "About Saleh Mohsin Trading LLC | Sharjah UAE",

      description:
        "Learn about Saleh Mohsin Trading LLC, a Sharjah-based supplier of professional tools, construction products and industrial supplies for UAE businesses.",

      canonical:
        `${SITE_URL}/about`,

      image:
        DEFAULT_IMAGE,

      type:
        "website"
    };
  }

  /*
    CONTACT
  */
  if (
    pathname ===
    "/contact"
  ) {
    return {
      title:
        "Contact Saleh Mohsin Trading LLC | Sharjah UAE",

      description:
        "Contact SMT in Al Sajaa, Sharjah for product enquiries, sourcing, BOQs, quotations and industrial supply requirements across the UAE.",

      canonical:
        `${SITE_URL}/contact`,

      image:
        DEFAULT_IMAGE,

      type:
        "website"
    };
  }

  /*
    QUOTE LIST

    Visitor-specific local quote data should
    never become an indexed search result.
  */
  if (
    pathname ===
    "/quote"
  ) {
    return {
      title:
        "Quote List | Saleh Mohsin Trading LLC",

      description:
        "Build a product quote list and send your complete RFQ to Saleh Mohsin Trading LLC through WhatsApp.",

      canonical:
        `${SITE_URL}/quote`,

      image:
        DEFAULT_IMAGE,

      type:
        "website",

      noIndex:
        true
    };
  }

  /*
    PRODUCT DETAIL
  */
  if (
    pathname.startsWith(
      "/product/"
    )
  ) {
    const encodedId =
      pathname.replace(
        "/product/",
        ""
      );

    let productId =
      encodedId;

    try {
      productId =
        decodeURIComponent(
          encodedId
        );
    } catch {
      productId =
        encodedId;
    }

    const product =
      products.find(
        (
          item
        ) =>
          String(
            item.id
          ) ===
          productId
      );

    if (product) {
      const description =
        cleanDescription(
          product.shortDescription ||
            product.description
        );

      const productImage =
        product.image?.find(
          Boolean
        );

      return {
        title:
          `${product.name} | Saleh Mohsin Trading LLC`,

        description,

        canonical:
          `${SITE_URL}/product/${encodeURIComponent(
            productId
          )}`,

        image:
          makeAbsoluteUrl(
            productImage
          ),

        type:
          "product"
      };
    }

    /*
      Invalid / removed product ID.
    */
    return {
      title:
        "Product Not Found | Saleh Mohsin Trading LLC",

      description:
        "The requested product could not be found in the current SMT online catalogue.",

      canonical:
        `${SITE_URL}${pathname}`,

      image:
        DEFAULT_IMAGE,

      type:
        "website",

      noIndex:
        true
    };
  }

  /*
    UNKNOWN ROUTE / CLIENT-SIDE 404
  */
  return {
    title:
      "Page Not Found | Saleh Mohsin Trading LLC",

    description:
      "The requested page could not be found on the Saleh Mohsin Trading LLC website.",

    canonical:
      `${SITE_URL}${pathname}`,

    image:
      DEFAULT_IMAGE,

    type:
      "website",

    noIndex:
      true
  };
}

/* =========================================================
   COMPONENT
========================================================= */

export default function SEO() {
  /*
    Wouter's location value changes with SPA navigation,
    including catalogue query-state navigation, so the
    effect is rerun as visitors move around the site.
  */
  const [
    location
  ] = useLocation();

  useEffect(() => {
    const pathname =
      window.location.pathname;

    const search =
      window.location.search;

    const data =
      getSEOData(
        pathname,
        search
      );

    /* Browser title */

    document.title =
      data.title;

    /* Standard SEO */

    setMetaByName(
      "description",
      data.description
    );

    /*
      noindex, follow is preferable here to noindex, nofollow:
      the page itself stays out of search results while links
      on the page may still be discovered.
    */
    setMetaByName(
      "robots",
      data.noIndex
        ? "noindex, follow"
        : "index, follow"
    );

    /* Canonical */

    setCanonical(
      data.canonical
    );

    /* Open Graph */

    setMetaByProperty(
      "og:type",
      data.type ===
        "product"
        ? "product"
        : "website"
    );

    setMetaByProperty(
      "og:site_name",
      "Saleh Mohsin Trading LLC"
    );

    setMetaByProperty(
      "og:locale",
      "en_AE"
    );

    setMetaByProperty(
      "og:title",
      data.title
    );

    setMetaByProperty(
      "og:description",
      data.description
    );

    setMetaByProperty(
      "og:url",
      data.canonical
    );

    setMetaByProperty(
      "og:image",
      data.image ||
        DEFAULT_IMAGE
    );

    const imageAlt =
      data.type ===
        "product"
        ? data.title.replace(
            " | Saleh Mohsin Trading LLC",
            ""
          )
        : "Saleh Mohsin Trading LLC";

    setMetaByProperty(
      "og:image:alt",
      imageAlt
    );

    /* X / Twitter */

    setMetaByName(
      "twitter:card",
      data.type ===
          "product" &&
        data.image !==
          DEFAULT_IMAGE
        ? "summary_large_image"
        : "summary"
    );

    setMetaByName(
      "twitter:title",
      data.title
    );

    setMetaByName(
      "twitter:description",
      data.description
    );

    setMetaByName(
      "twitter:image",
      data.image ||
        DEFAULT_IMAGE
    );

    setMetaByName(
      "twitter:image:alt",
      imageAlt
    );

    /* Structured data */

    addOrganizationSchema();

    removeJsonLd(
      PRODUCT_SCHEMA_ID
    );

    if (
      pathname.startsWith(
        "/product/"
      )
    ) {
      const encodedId =
        pathname.replace(
          "/product/",
          ""
        );

      let productId =
        encodedId;

      try {
        productId =
          decodeURIComponent(
            encodedId
          );
      } catch {
        productId =
          encodedId;
      }

      addProductSchema(
        productId
      );
    }
  }, [
    location
  ]);

  return null;
}
