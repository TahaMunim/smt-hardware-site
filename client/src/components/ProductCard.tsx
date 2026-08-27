import {
  useEffect,
  useRef,
  useState
} from "react";

import { Link } from "wouter";

import {
  Check,
  ClipboardList,
  Package,
  Plus
} from "lucide-react";

import {
  Badge
} from "@/components/ui/badge";

import {
  useQuote
} from "@/context/QuoteContext";

import type {
  Product
} from "@/data/products";

interface ProductCardProps {
  product: Product;
  returnTo?: string;
}

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  compact?: boolean;
}

/* =========================================================
   IMAGE PLACEHOLDER
========================================================= */

function ProductPlaceholder({
  compact = false
}: {
  compact?: boolean;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-100 px-3 text-center">
      <Package
        className={
          compact
            ? "h-7 w-7 text-neutral-400"
            : "h-9 w-9 text-neutral-400"
        }
      />

      {!compact && (
        <span className="mt-2 text-xs font-medium text-neutral-500">
          Image coming soon
        </span>
      )}
    </div>
  );
}

/* =========================================================
   SAFE PRODUCT IMAGE
========================================================= */

function ProductImage({
  src,
  alt,
  className = "",
  compact = false
}: ProductImageProps) {
  const [
    failed,
    setFailed
  ] = useState(false);

  if (
    !src ||
    failed
  ) {
    return (
      <ProductPlaceholder
        compact={compact}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() =>
        setFailed(true)
      }
    />
  );
}

/* =========================================================
   MULTI-IMAGE HOVER CAROUSEL
========================================================= */

function HoverCarousel({
  images,
  productName
}: {
  images: string[];
  productName: string;
}) {
  const [
    index,
    setIndex
  ] = useState(0);

  const intervalRef =
    useRef<
      ReturnType<
        typeof setInterval
      > | null
    >(null);

  const stopCarousel =
    () => {
      if (
        intervalRef.current
      ) {
        clearInterval(
          intervalRef.current
        );

        intervalRef.current =
          null;
      }
    };

  const startCarousel =
    () => {
      if (
        images.length < 2
      ) {
        return;
      }

      stopCarousel();

      intervalRef.current =
        setInterval(
          () => {
            setIndex(
              (
                current
              ) =>
                (
                  current + 1
                ) %
                images.length
            );
          },
          2000
        );
    };

  useEffect(() => {
    return () => {
      stopCarousel();
    };
  }, []);

  const handleMouseLeave =
    () => {
      stopCarousel();
      setIndex(0);
    };

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={
        startCarousel
      }
      onMouseLeave={
        handleMouseLeave
      }
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          transform:
            `translateX(-${index * 100}%)`
        }}
      >
        {images.map(
          (
            image,
            imageIndex
          ) => (
            <div
              key={`${image}-${imageIndex}`}
              className="h-full w-full flex-shrink-0 p-3"
            >
              <ProductImage
                src={image}
                alt={`${productName} - ${imageIndex + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          )
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
          {images
            .slice(
              0,
              5
            )
            .map(
              (
                _,
                dotIndex
              ) => (
                <span
                  key={
                    dotIndex
                  }
                  className={`h-1 rounded-full transition-all ${
                    dotIndex ===
                    index
                      ? "w-3 bg-yellow-500"
                      : "w-1 bg-neutral-300"
                  }`}
                />
              )
            )}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

export default function ProductCard({
  product,
  returnTo
}: ProductCardProps) {
  const {
    addProduct,
    getQuantity
  } = useQuote();

  const quoteQuantity =
    getQuantity(
      product.id
    );

  const isInQuote =
    quoteQuantity > 0;

  const productHref =
    returnTo
      ? `/product/${product.id}?from=${encodeURIComponent(
          returnTo
        )}`
      : `/product/${product.id}`;

  const images =
    Array.isArray(
      product.image
    )
      ? product.image.filter(
          Boolean
        )
      : [];

  const referenceText =
    product.model
      ? product.model
      : product.sku
        ? product.sku
        : null;

  const description =
    product.shortDescription ||
    product.description;

  const renderImage =
    (
      compact = false
    ) => {
      if (
        images.length === 0
      ) {
        return (
          <ProductPlaceholder
            compact={compact}
          />
        );
      }

      /*
        Hover carousel is desktop-only.
      */
      if (
        images.length > 1 &&
        !compact
      ) {
        return (
          <HoverCarousel
            images={images}
            productName={
              product.name
            }
          />
        );
      }

      return (
        <div
          className={
            compact
              ? "h-full w-full p-2"
              : "h-full w-full p-3"
          }
        >
          <ProductImage
            src={images[0]}
            alt={
              product.name
            }
            compact={compact}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      );
    };

  const addToQuote =
    () => {
      addProduct(
        product.id,
        1
      );
    };

  return (
    <article
      className="group h-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 transition-colors duration-200 hover:border-neutral-600"
      data-testid={`product-card-${product.id}`}
    >
      {/* =================================================
          MOBILE — COMPACT HORIZONTAL CARD
      ================================================== */}

      <div className="flex min-h-[118px] sm:hidden">
        {/* Image column now stretches to FULL card height */}
        <Link
          href={productHref}
          className="w-[108px] flex-shrink-0 self-stretch"
          aria-label={`View ${product.name}`}
        >
          <div className="h-full min-h-[118px] w-full overflow-hidden border-r border-neutral-800 bg-white">
            {renderImage(
              true
            )}
          </div>
        </Link>

        {/* Product Info */}
        <div className="flex min-w-0 flex-1 flex-col p-2.5">
          <div className="flex min-w-0 items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              {product.brand && (
                <p className="mb-1 truncate text-[10px] font-bold uppercase tracking-wide text-yellow-500">
                  {
                    product.brand
                  }
                </p>
              )}

              <Link
                href={
                  productHref
                }
              >
                <h3
                  className="line-clamp-2 text-[13px] font-semibold leading-[17px] text-white transition-colors group-hover:text-yellow-500"
                  data-testid={`product-name-${product.id}`}
                >
                  {
                    product.name
                  }
                </h3>
              </Link>
            </div>

            {isInQuote && (
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-500" />
            )}
          </div>

          {referenceText && (
            <p className="mt-1 truncate text-[10px] text-neutral-500">
              {
                referenceText
              }
            </p>
          )}

          <p className="mt-1 line-clamp-1 text-[11px] leading-4 text-neutral-500">
            {
              description
            }
          </p>

          <div className="mt-auto pt-2">
            {isInQuote ? (
              <Link
                href="/quote"
                className="flex h-7 w-full items-center justify-center gap-1.5 rounded-md border border-yellow-500/50 bg-yellow-500/10 px-2 text-[11px] font-semibold text-yellow-500"
                data-testid={`button-view-quote-${product.id}`}
              >
                <ClipboardList className="h-3 w-3" />

                Quote · Qty{" "}
                {
                  quoteQuantity
                }
              </Link>
            ) : (
              <button
                type="button"
                onClick={
                  addToQuote
                }
                className="flex h-7 w-full items-center justify-center gap-1.5 rounded-md bg-yellow-500 px-2 text-[11px] font-bold text-black transition-colors hover:bg-yellow-400"
                data-testid={`button-add-to-quote-${product.id}`}
              >
                <Plus className="h-3 w-3" />
                Add to Quote
              </button>
            )}
          </div>
        </div>
      </div>

      {/* =================================================
          TABLET / DESKTOP
      ================================================== */}

      <div className="hidden h-full flex-col sm:flex">
        {/* Image */}
        <Link
          href={productHref}
          className="relative block flex-shrink-0"
          aria-label={`View ${product.name}`}
        >
          <div className="aspect-[4/3] overflow-hidden border-b border-neutral-800 bg-white">
            {renderImage()}
          </div>

          {images.length > 1 && (
            <span className="absolute right-2 top-2 rounded-full border border-neutral-200 bg-white/90 px-2 py-0.5 text-[9px] font-semibold text-neutral-500 shadow-sm">
              {
                images.length
              }{" "}
              images
            </span>
          )}
        </Link>

        {/* Information */}
        <div className="flex flex-1 flex-col p-4">
          <div>
            {product.brand && (
              <Badge
                className="mb-2 border-0 bg-yellow-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-black hover:bg-yellow-500"
                data-testid={`badge-brand-${product.id}`}
              >
                {
                  product.brand
                }
              </Badge>
            )}

            <Link
              href={
                productHref
              }
            >
              <h3
                className="line-clamp-2 text-[15px] font-semibold leading-5 text-white transition-colors group-hover:text-yellow-500"
                data-testid={`product-name-${product.id}`}
              >
                {
                  product.name
                }
              </h3>
            </Link>

            {referenceText && (
              <p className="mt-1.5 truncate text-[11px] font-medium text-neutral-500">
                {
                  referenceText
                }
              </p>
            )}

            <p
              className="mt-2 line-clamp-2 text-xs leading-[18px] text-neutral-400"
              data-testid={`product-description-${product.id}`}
            >
              {
                description
              }
            </p>
          </div>

          {/*
            IMPORTANT:
            CTA is pinned to the bottom.

            Because cards within the grid row
            share equal height, every button
            lines up professionally.
          */}
          <div className="mt-auto pt-4">
            <div className="border-t border-neutral-800 pt-3">
              {isInQuote ? (
                <Link
                  href="/quote"
                  className="flex h-9 w-full items-center justify-center gap-2 rounded-md border border-yellow-500/50 bg-yellow-500/10 px-3 text-xs font-semibold text-yellow-500 transition-colors hover:bg-yellow-500 hover:text-black"
                  data-testid={`button-view-quote-${product.id}`}
                >
                  <Check className="h-3.5 w-3.5" />

                  In Quote · Qty{" "}
                  {
                    quoteQuantity
                  }
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={
                    addToQuote
                  }
                  className="flex h-9 w-full items-center justify-center gap-2 rounded-md bg-yellow-500 px-3 text-xs font-bold text-black transition-colors hover:bg-yellow-400"
                  data-testid={`button-add-to-quote-${product.id}`}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add to Quote
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}