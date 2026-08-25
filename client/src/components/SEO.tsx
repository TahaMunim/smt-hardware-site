import { useEffect } from "react";
import { useLocation } from "wouter";

import { products } from "@/data/products";

const SITE_URL = "https://www.salehmohsin.com";

const DEFAULT_IMAGE =
  `${SITE_URL}/SMTLogo.png`;

const DEFAULT_TITLE =
  "Saleh Mohsin Trading LLC | Industrial Tools & Supplies UAE";

const DEFAULT_DESCRIPTION =
  "Saleh Mohsin Trading LLC supplies professional tools, construction supplies, safety equipment, industrial products and trade consumables to businesses across the UAE.";

interface SEOData {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: "website" | "product";
  noIndex?: boolean;
}

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
      document.createElement("meta");

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
      document.createElement("meta");

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
      document.createElement("link");

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

  if (path.startsWith("/")) {
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
      .replace(/\s+/g, " ")
      .trim();

  if (
    cleaned.length <=
    maxLength
  ) {
    return cleaned;
  }

  return `${cleaned
    .slice(
      0,
      maxLength - 3
    )
    .trim()}...`;
}

function removeProductSchema() {
  const existing =
    document.getElementById(
      "smt-product-schema"
    );

  if (existing) {
    existing.remove();
  }
}

function addProductSchema(
  productId: string
) {
  removeProductSchema();

  const product =
    products.find(
      (item) =>
        String(item.id) ===
        productId
    );

  if (!product) {
    return;
  }

  const validImages =
    product.image?.filter(
      Boolean
    ) ?? [];

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

    brand: {
      "@type":
        "Brand",

      name:
        product.brand
    }
  };

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
        (image) =>
          makeAbsoluteUrl(
            image
          )
      );
  }

  if (
    product.category
  ) {
    schema.category =
      product.category;
  }

  const script =
    document.createElement(
      "script"
    );

  script.id =
    "smt-product-schema";

  script.type =
    "application/ld+json";

  script.textContent =
    JSON.stringify(
      schema
    );

  document.head.appendChild(
    script
  );
}

function getSEOData(
  pathname: string
): SEOData {
  /*
    HOME
  */
  if (pathname === "/") {
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
    PRODUCTS
  */
  if (
    pathname ===
    "/products"
  ) {
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
        "website"
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

    This page contains visitor-specific
    local quote data, so it should not
    be indexed by search engines.
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

    Example:
    /product/tuffix-hm007
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
        (item) =>
          String(
            item.id
          ) === productId
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
      Invalid / removed
      product ID.
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
    UNKNOWN ROUTE / 404
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

export default function SEO() {
  /*
    useLocation makes this
    component rerun whenever
    the SPA route changes.
  */
  const [location] =
    useLocation();

  useEffect(() => {
    const pathname =
      window.location.pathname;

    const data =
      getSEOData(
        pathname
      );

    /*
      Browser title
    */
    document.title =
      data.title;

    /*
      Standard SEO
    */
    setMetaByName(
      "description",
      data.description
    );

    setMetaByName(
      "robots",
      data.noIndex
        ? "noindex, nofollow"
        : "index, follow"
    );

    /*
      Canonical

      Notice query filters such as:

      /products?brand=STANLEY

      still canonicalize to:

      /products

      This helps prevent every
      catalogue-filter combination
      becoming a duplicate indexed page.
    */
    setCanonical(
      data.canonical
    );

    /*
      Open Graph
    */
    setMetaByProperty(
      "og:type",
      data.type ===
        "product"
        ? "product"
        : "website"
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

    setMetaByProperty(
      "og:image:alt",
      data.type ===
        "product"
        ? data.title.replace(
            " | Saleh Mohsin Trading LLC",
            ""
          )
        : "Saleh Mohsin Trading LLC"
    );

    /*
      X / Twitter
    */
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

    /*
      Dynamic Product
      structured data.
    */
    removeProductSchema();

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
  }, [location]);

  return null;
}