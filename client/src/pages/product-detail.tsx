import {
  useEffect,
  useState
} from "react";

import {
  Link,
  useRoute,
  useSearch
} from "wouter";

import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Minus,
  Package,
  Phone,
  Plus
} from "lucide-react";

import {
  FaWhatsapp
} from "react-icons/fa";

import {
  useQuote
} from "@/context/QuoteContext";

import {
  products
} from "@/data/products";

/* =========================================================
   SAFE DETAIL IMAGE
========================================================= */

function ProductDetailImage({
  src,
  alt
}: {
  src: string;
  alt: string;
}) {
  const [
    failed,
    setFailed
  ] = useState(false);

  if (
    !src ||
    failed
  ) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-neutral-100 px-6 text-center">
        <Package className="h-12 w-12 text-neutral-400" />

        <div>
          <p className="text-sm font-semibold text-neutral-600">
            Product image coming soon
          </p>

          <p className="mt-1 text-xs text-neutral-400">
            Contact SMT for product details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain p-4 sm:p-6"
      onError={() =>
        setFailed(true)
      }
    />
  );
}

/* =========================================================
   PRODUCT DETAIL
========================================================= */

export default function ProductDetail() {
  const [, params] =
    useRoute(
      "/product/:id"
    );

  const searchString =
    useSearch();

  /* =======================================================
     RETURN TO FILTERED CATALOGUE
  ======================================================= */

  const searchParams =
    new URLSearchParams(
      searchString
    );

  const requestedReturnTo =
    searchParams.get(
      "from"
    );

  const backToProducts =
    requestedReturnTo &&
    (
      requestedReturnTo ===
        "/products" ||
      requestedReturnTo.startsWith(
        "/products?"
      )
    )
      ? requestedReturnTo
      : "/products";

  /* =======================================================
     PRODUCT
  ======================================================= */

  const product =
    products.find(
      (item) =>
        String(
          item.id
        ) ===
        params?.id
    );

  const images =
    product?.image?.filter(
      Boolean
    ) ?? [];

  const [
    currentImage,
    setCurrentImage
  ] = useState(0);

  /*
    Reset gallery whenever the
    customer opens another product.
  */
  useEffect(() => {
    setCurrentImage(0);
  }, [
    product?.id
  ]);

  /* =======================================================
     QUOTE LIST
  ======================================================= */

  const {
    getQuantity,
    setQuantity
  } = useQuote();

  const existingQuoteQuantity =
    product
      ? getQuantity(
          product.id
        )
      : 0;

  const [
    quoteQuantity,
    setQuoteQuantity
  ] = useState(1);

  useEffect(() => {
    setQuoteQuantity(
      existingQuoteQuantity >
        0
        ? existingQuoteQuantity
        : 1
    );
  }, [
    product?.id,
    existingQuoteQuantity
  ]);

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-4 pt-16">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900">
            <Package className="h-7 w-7 text-neutral-500" />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-white">
            Product Not Found
          </h1>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            The product may have been moved or is no longer available.
          </p>

          <Link
            href={backToProducts}
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-yellow-500 px-5 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
          >
            <ArrowLeft className="h-4 w-4" />

            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  /* =======================================================
     WHATSAPP
  ======================================================= */

  const whatsappNumber =
    "971503821352";

  const whatsappMessage =
    product.model
      ? `Hello, I would like to inquire about ${product.name} (${product.model}).`
      : `Hello, I would like to inquire about ${product.name}.`;

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  /* =======================================================
     IMAGE NAVIGATION
  ======================================================= */

  const previousImage =
    () => {
      if (
        images.length < 2
      ) {
        return;
      }

      setCurrentImage(
        (
          current
        ) =>
          current === 0
            ? images.length - 1
            : current - 1
      );
    };

  const nextImage =
    () => {
      if (
        images.length < 2
      ) {
        return;
      }

      setCurrentImage(
        (
          current
        ) =>
          (
            current + 1
          ) %
          images.length
      );
    };

  /* =======================================================
     QUANTITY
  ======================================================= */

  const decreaseQuantity =
    () => {
      setQuoteQuantity(
        (
          current
        ) =>
          Math.max(
            1,
            current - 1
          )
      );
    };

  const increaseQuantity =
    () => {
      setQuoteQuantity(
        (
          current
        ) =>
          Math.min(
            9999,
            current + 1
          )
      );
    };

  const saveToQuote =
    () => {
      setQuantity(
        product.id,
        quoteQuantity
      );
    };

  return (
    <main className="min-h-screen bg-black pt-16">
      <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 md:py-8 lg:px-8">
        {/* =================================================
            BACK
        ================================================== */}

        <Link
          href={backToProducts}
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 transition-colors hover:text-yellow-500"
          data-testid="button-back-to-products"
        >
          <ArrowLeft className="h-4 w-4" />

          Back to Products
        </Link>

        {/* =================================================
            MAIN PRODUCT AREA
        ================================================== */}

        <section className="grid gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-10 xl:gap-14">
          {/* =================================================
              IMAGE GALLERY
          ================================================== */}

          <div className="min-w-0">
            <div className="relative aspect-square overflow-hidden rounded-xl border border-neutral-800 bg-white">
              {images.length > 0 ? (
                <ProductDetailImage
                  src={
                    images[
                      currentImage
                    ]
                  }
                  alt={
                    product.name
                  }
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-neutral-100 px-6 text-center">
                  <Package className="h-14 w-14 text-neutral-400" />

                  <div>
                    <p className="font-semibold text-neutral-600">
                      Product image coming soon
                    </p>

                    <p className="mt-1 text-sm text-neutral-400">
                      Contact SMT for more information.
                    </p>
                  </div>
                </div>
              )}

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={
                      previousImage
                    }
                    aria-label="Previous product image"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-md transition hover:bg-yellow-500 hover:text-black"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={
                      nextImage
                    }
                    aria-label="Next product image"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-md transition hover:bg-yellow-500 hover:text-black"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {currentImage + 1}
                    {" / "}
                    {images.length}
                  </div>
                </>
              )}
            </div>

            {/* =============================================
                THUMBNAILS
            ============================================== */}

            {images.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {images.map(
                  (
                    image,
                    index
                  ) => {
                    const selected =
                      index ===
                      currentImage;

                    return (
                      <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() =>
                          setCurrentImage(
                            index
                          )
                        }
                        aria-label={`View product image ${index + 1}`}
                        className={`h-[68px] w-[68px] flex-shrink-0 overflow-hidden rounded-lg border bg-white transition ${
                          selected
                            ? "border-yellow-500 ring-1 ring-yellow-500"
                            : "border-neutral-800 hover:border-neutral-600"
                        }`}
                      >
                        <ProductDetailImage
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                        />
                      </button>
                    );
                  }
                )}
              </div>
            )}
          </div>

          {/* =================================================
              PRODUCT INFORMATION
          ================================================== */}

          <div className="min-w-0">
            {/* Classification */}

            <div className="flex flex-wrap items-center gap-2">
              {product.brand && (
                <span className="rounded-md bg-yellow-500 px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.08em] text-black">
                  {product.brand}
                </span>
              )}

              <span className="text-xs font-semibold text-neutral-500">
                {product.category}
              </span>

              {product.subcategory && (
                <>
                  <span className="text-neutral-700">
                    /
                  </span>

                  <span className="text-xs font-semibold text-neutral-500">
                    {product.subcategory}
                  </span>
                </>
              )}
            </div>

            {/* Title */}

            <h1
              className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl xl:text-[2.7rem]"
              data-testid="product-detail-name"
            >
              {product.name}
            </h1>

            {/* Model / SKU */}

            {(product.model ||
              product.sku) && (
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {product.model && (
                  <div>
                    <span className="text-xs uppercase tracking-wide text-neutral-600">
                      Model
                    </span>

                    <p className="mt-0.5 text-sm font-semibold text-neutral-300">
                      {product.model}
                    </p>
                  </div>
                )}

                {product.sku && (
                  <div>
                    <span className="text-xs uppercase tracking-wide text-neutral-600">
                      SKU
                    </span>

                    <p className="mt-0.5 text-sm font-semibold text-neutral-300">
                      {product.sku}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Description */}

            <p
              className="mt-5 text-[15px] leading-7 text-neutral-400"
              data-testid="product-detail-description"
            >
              {product.description}
            </p>

            {/* =================================================
                QUOTE CARD
            ================================================== */}

            <div className="mt-7 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
              <div className="border-b border-neutral-800 px-4 py-4 sm:px-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-yellow-500">
                      Request Pricing
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-white">
                      Add to Quote List
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-neutral-500">
                      Set your required quantity and include this product in your RFQ.
                    </p>
                  </div>

                  {existingQuoteQuantity > 0 && (
                    <span className="flex flex-shrink-0 items-center gap-1 rounded-full bg-yellow-500/10 px-2.5 py-1 text-[11px] font-semibold text-yellow-500">
                      <Check className="h-3.5 w-3.5" />

                      In Quote
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="grid gap-3 sm:grid-cols-[140px_minmax(0,1fr)]">
                  {/* Quantity */}

                  <div className="flex h-11 overflow-hidden rounded-md border border-neutral-700 bg-black">
                    <button
                      type="button"
                      onClick={
                        decreaseQuantity
                      }
                      aria-label="Decrease quantity"
                      className="flex w-11 flex-shrink-0 items-center justify-center text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-yellow-500"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <input
                      type="number"
                      min={1}
                      max={9999}
                      value={
                        quoteQuantity
                      }
                      onChange={(
                        event
                      ) => {
                        const value =
                          Number(
                            event.target.value
                          );

                        if (
                          Number.isFinite(
                            value
                          ) &&
                          value >= 1
                        ) {
                          setQuoteQuantity(
                            Math.min(
                              9999,
                              Math.floor(
                                value
                              )
                            )
                          );
                        }
                      }}
                      aria-label="Quote quantity"
                      className="min-w-0 flex-1 border-x border-neutral-800 bg-black text-center text-sm font-bold text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />

                    <button
                      type="button"
                      onClick={
                        increaseQuantity
                      }
                      aria-label="Increase quantity"
                      className="flex w-11 flex-shrink-0 items-center justify-center text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-yellow-500"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Add */}

                  <button
                    type="button"
                    onClick={
                      saveToQuote
                    }
                    className="flex h-11 items-center justify-center gap-2 rounded-md bg-yellow-500 px-5 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
                    data-testid="button-add-to-quote-detail"
                  >
                    <ClipboardList className="h-4 w-4" />

                    {existingQuoteQuantity >
                    0
                      ? "Update Quote List"
                      : "Add to Quote List"}
                  </button>
                </div>

                {existingQuoteQuantity >
                  0 && (
                  <Link
                    href="/quote"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
                  >
                    View Quote List

                    <span className="text-neutral-600">
                      ·
                    </span>

                    Qty{" "}
                    {
                      existingQuoteQuantity
                    }
                  </Link>
                )}
              </div>
            </div>

            {/* =================================================
                CONTACT ACTIONS
            ================================================== */}

            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-md border border-neutral-700 bg-neutral-950 px-3 text-sm font-semibold text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
                data-testid="button-whatsapp-inquiry-detail"
              >
                <FaWhatsapp className="h-4 w-4" />

                WhatsApp
              </a>

              <a
                href="tel:+971503821352"
                className="flex h-11 items-center justify-center gap-2 rounded-md border border-neutral-700 bg-neutral-950 px-3 text-sm font-semibold text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
                data-testid="button-call-inquiry"
              >
                <Phone className="h-4 w-4" />

                Call SMT
              </a>
            </div>

            <p className="mt-3 text-center text-[11px] leading-4 text-neutral-600">
              Contact SMT for current availability, bulk pricing and project quotations.
            </p>
          </div>
        </section>

        {/* =================================================
            PRODUCT DETAILS
        ================================================== */}

        {(product.features?.length ||
          product.specifications?.length ||
          product.standards?.length) && (
          <section className="mt-10 border-t border-neutral-800 pt-8 lg:mt-14 lg:pt-10">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-yellow-500">
                Technical Information
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white">
                Product Details
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {/* =============================================
                  FEATURES
              ============================================== */}

              {product.features &&
                product.features.length >
                  0 && (
                  <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-white">
                      Key Features
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {product.features.map(
                        (
                          feature,
                          index
                        ) => (
                          <li
                            key={
                              index
                            }
                            className="flex gap-3 text-sm leading-6 text-neutral-400"
                          >
                            <Check className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-500" />

                            <span>
                              {
                                feature
                              }
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {/* =============================================
                  SPECIFICATIONS
              ============================================== */}

              {product.specifications &&
                product.specifications
                  .length >
                  0 && (
                  <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
                    <div className="border-b border-neutral-800 px-5 py-4 sm:px-6">
                      <h3 className="text-lg font-bold text-white">
                        Specifications
                      </h3>
                    </div>

                    <div>
                      {product.specifications.map(
                        (
                          specification,
                          index
                        ) => (
                          <div
                            key={`${specification.label}-${index}`}
                            className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 px-5 py-3.5 text-sm sm:px-6 ${
                              index > 0
                                ? "border-t border-neutral-800/70"
                                : ""
                            }`}
                          >
                            <span className="text-neutral-500">
                              {
                                specification.label
                              }
                            </span>

                            <span className="text-right font-semibold text-neutral-200">
                              {
                                specification.value
                              }

                              {specification.unit
                                ? ` ${specification.unit}`
                                : ""}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>

            {/* =============================================
                STANDARDS
            ============================================== */}

            {product.standards &&
              product.standards.length >
                0 && (
                <div className="mt-6">
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-neutral-500">
                    Standards & Compliance
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {product.standards.map(
                      (
                        standard
                      ) => (
                        <span
                          key={
                            standard
                          }
                          className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs font-semibold text-neutral-300"
                        >
                          {
                            standard
                          }
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}
          </section>
        )}
      </div>
    </main>
  );
}