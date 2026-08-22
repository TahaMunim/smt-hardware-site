// ProductCard.tsx

import { useRef, useState } from "react";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { Package } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

function ProductPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-100 px-4 text-center">
      <Package className="h-9 w-9 text-neutral-400" />

      <span className="text-xs font-medium text-neutral-500">
        Product image coming soon
      </span>
    </div>
  );
}

function ProductImage({
  src,
  alt,
  className = ""
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <ProductPlaceholder />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function HoverCarousel({
  images,
  productName
}: {
  images: string[];
  productName: string;
}) {
  const [index, setIndex] = useState(0);

  const intervalRef = useRef<
    ReturnType<typeof setInterval> | null
  >(null);

  const startCarousel = () => {
    if (images.length < 2) {
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setIndex((currentIndex) =>
        (currentIndex + 1) % images.length
      );
    }, 1800);
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIndex(0);
  };

  if (images.length === 0) {
    return <ProductPlaceholder />;
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={startCarousel}
      onMouseLeave={stopCarousel}
    >
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`
        }}
      >
        {images.map((image, imageIndex) => (
          <div
            key={`${image}-${imageIndex}`}
            className="h-full w-full flex-shrink-0"
          >
            <ProductImage
              src={image}
              alt={`${productName} - ${imageIndex + 1}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductCard({
  product
}: ProductCardProps) {
  const whatsappNumber = "971503821352";

  const whatsappMessage =
    `Hello, I would like to know more about ${product.name}.`;

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  const images = Array.isArray(product.image)
    ? product.image.filter(Boolean)
    : [];

  const renderImage = () => {
    if (images.length === 0) {
      return <ProductPlaceholder />;
    }

    if (images.length > 1) {
      return (
        <HoverCarousel
          images={images}
          productName={product.name}
        />
      );
    }

    return (
      <ProductImage
        src={images[0]}
        alt={product.name}
        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    );
  };

  return (
    <div
      className="group overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 transition-all duration-300 hover:border-yellow-500"
      data-testid={`product-card-${product.id}`}
    >
      {/* Mobile Layout */}
      <div className="flex sm:hidden">
        <Link
          href={`/product/${product.id}`}
          className="flex-shrink-0"
        >
          <div className="h-36 w-32 overflow-hidden bg-white">
            {renderImage()}
          </div>
        </Link>

        <div className="flex flex-1 flex-col justify-between p-3">
          <div className="space-y-1">
            <Badge
              className="w-fit bg-[#F5C518] px-2 py-0 text-xs text-black hover:bg-[#d9ad15]"
              data-testid={`badge-brand-${product.id}`}
            >
              {product.brand}
            </Badge>

            <Link href={`/product/${product.id}`}>
              <h3
                className="line-clamp-1 text-sm font-semibold text-white transition-colors group-hover:text-yellow-500"
                data-testid={`product-name-${product.id}`}
              >
                {product.name}
              </h3>
            </Link>

            {product.model && (
              <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                Model: {product.model}
              </p>
            )}

            <p
              className="line-clamp-2 text-xs text-neutral-400"
              data-testid={`product-description-${product.id}`}
            >
              {product.shortDescription ||
                product.description}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center justify-center gap-1 rounded-md bg-yellow-500 px-2 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-yellow-400"
            data-testid={`button-whatsapp-inquiry-${product.id}`}
          >
            <FaWhatsapp className="h-3 w-3" />
            Inquire
          </a>
        </div>
      </div>

      {/* Tablet/Desktop Layout */}
      <div className="hidden sm:block">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-square overflow-hidden bg-white">
            {renderImage()}
          </div>
        </Link>

        <div className="space-y-3 p-4 md:p-6">
          <Badge
            className="bg-[#F5C518] text-xs text-black hover:bg-[#d9ad15]"
            data-testid={`badge-brand-${product.id}`}
          >
            {product.brand}
          </Badge>

          <div>
            <Link href={`/product/${product.id}`}>
              <h3
                className="line-clamp-1 text-base font-semibold text-white transition-colors group-hover:text-yellow-500 md:text-lg"
                data-testid={`product-name-${product.id}`}
              >
                {product.name}
              </h3>
            </Link>

            {product.model && (
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
                Model: {product.model}
              </p>
            )}
          </div>

          <p
            className="line-clamp-2 text-xs text-neutral-400 md:text-sm"
            data-testid={`product-description-${product.id}`}
          >
            {product.shortDescription ||
              product.description}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-yellow-500 px-3 py-2 text-xs font-semibold text-black transition-colors hover:bg-yellow-400 md:px-4 md:py-2.5 md:text-sm"
            data-testid={`button-whatsapp-inquiry-${product.id}`}
          >
            <FaWhatsapp className="h-4 w-4 md:h-5 md:w-5" />
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}