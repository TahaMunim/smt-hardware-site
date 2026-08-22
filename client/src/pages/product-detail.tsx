// product-detail.tsx

import { useEffect, useRef, useState } from "react";
import { Link, useRoute } from "wouter";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Package
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");

  const product = products.find(
    (item) => String(item.id) === params?.id
  );

  const images =
    product?.image?.filter((image) => Boolean(image)) ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef =
    useRef<ReturnType<typeof setInterval> | null>(null);

  const clearSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startSlideshow = () => {
    clearSlideshow();

    if (images.length < 2) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((current) =>
        (current + 1) % images.length
      );
    }, 3000);
  };

  useEffect(() => {
    setCurrentIndex(0);

    if (images.length > 1) {
      startSlideshow();
    } else {
      clearSlideshow();
    }

    return () => {
      clearSlideshow();
    };
  }, [product?.id, images.length]);

  const resetSlideshow = () => {
    if (images.length > 1) {
      startSlideshow();
    }
  };

  const previousImage = () => {
    if (images.length < 2) {
      return;
    }

    setCurrentIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );

    resetSlideshow();
  };

  const nextImage = () => {
    if (images.length < 2) {
      return;
    }

    setCurrentIndex((current) =>
      (current + 1) % images.length
    );

    resetSlideshow();
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    resetSlideshow();
  };

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black pt-16">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-white">
            Product Not Found
          </h1>

          <Link href="/products">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappNumber = "971503821352";

  const whatsappMessage = product.model
    ? `Hello, I would like to know more about ${product.name} (${product.model}).`
    : `Hello, I would like to know more about ${product.name}.`;

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Back Button */}
        <Link href="/products">
          <Button
            variant="ghost"
            className="mb-8 text-neutral-300 hover:text-yellow-500 hover:text-black"
            data-testid="button-back-to-products"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Product Image Area */}
          <div
            className="relative aspect-square overflow-hidden rounded-lg bg-white"
            data-testid="product-detail-image"
          >
            {images.length > 0 ? (
              <>
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                >
                  {images.map((image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className="h-full w-full flex-shrink-0"
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="h-full w-full object-contain p-4"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => goToImage(index)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            index === currentIndex
                              ? "bg-yellow-500"
                              : "bg-neutral-400"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-neutral-100 px-8 text-center">
                <Package className="h-16 w-16 text-neutral-400" />

                <div>
                  <p className="font-semibold text-neutral-600">
                    Product image coming soon
                  </p>

                  <p className="mt-1 text-sm text-neutral-400">
                    Contact SMT for product details and availability.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-7">

            {/* Classification */}
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span
                  className="inline-block rounded-md bg-yellow-500 px-4 py-2 font-semibold text-black"
                  data-testid="product-detail-category"
                >
                  {product.category}
                </span>

                {product.subcategory && (
                  <span className="inline-block rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300">
                    {product.subcategory}
                  </span>
                )}
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-yellow-500">
                {product.brand}
              </p>

              <h1
                className="mb-4 text-4xl font-bold text-white sm:text-5xl"
                data-testid="product-detail-name"
              >
                {product.name}
              </h1>

              {(product.model || product.sku) && (
                <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {product.model && (
                    <p className="text-neutral-400">
                      <span className="font-semibold text-neutral-200">
                        Model:
                      </span>{" "}
                      {product.model}
                    </p>
                  )}

                  {product.sku && (
                    <p className="text-neutral-400">
                      <span className="font-semibold text-neutral-200">
                        SKU:
                      </span>{" "}
                      {product.sku}
                    </p>
                  )}
                </div>
              )}

              <p
                className="text-lg leading-relaxed text-neutral-400"
                data-testid="product-detail-description"
              >
                {product.description}
              </p>
            </div>

            {/* Features */}
            {product.features &&
              product.features.length > 0 && (
                <div className="border-t border-neutral-800 pt-6">
                  <h2 className="mb-4 text-xl font-semibold text-white">
                    Features
                  </h2>

                  <ul className="space-y-2">
                    {product.features.map(
                      (feature, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-neutral-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-500" />

                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

            {/* Specifications */}
            {product.specifications &&
              product.specifications.length > 0 && (
                <div className="border-t border-neutral-800 pt-6">
                  <h2 className="mb-4 text-xl font-semibold text-white">
                    Specifications
                  </h2>

                  <div className="overflow-hidden rounded-lg border border-neutral-800">
                    {product.specifications.map(
                      (specification, index) => (
                        <div
                          key={`${specification.label}-${index}`}
                          className={`grid grid-cols-2 gap-4 px-4 py-3 ${
                            index % 2 === 0
                              ? "bg-neutral-900"
                              : "bg-neutral-950"
                          }`}
                        >
                          <span className="text-sm text-neutral-400">
                            {specification.label}
                          </span>

                          <span className="text-sm font-medium text-white">
                            {specification.value}
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

            {/* Standards */}
            {product.standards &&
              product.standards.length > 0 && (
                <div className="border-t border-neutral-800 pt-6">
                  <h2 className="mb-4 text-xl font-semibold text-white">
                    Standards & Compliance
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {product.standards.map(
                      (standard) => (
                        <span
                          key={standard}
                          className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-300"
                        >
                          {standard}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

            {/* Generic Contact Block */}
            <div className="border-t border-neutral-800 pt-6">
              <h2 className="mb-3 text-xl font-semibold text-white">
                Pricing & Availability
              </h2>

              <p className="leading-relaxed text-neutral-400">
                Contact SMT for current availability, bulk pricing,
                project quotations, and additional product information.
              </p>
            </div>

            {/* Inquiry Buttons */}
            <div className="space-y-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-yellow-500 px-6 py-4 text-lg font-semibold text-black transition-colors hover:bg-yellow-400"
                data-testid="button-whatsapp-inquiry-detail"
              >
                <FaWhatsapp className="h-6 w-6" />
                WhatsApp Inquiry
              </a>

              <Button
                variant="outline"
                className="w-full border-2 border-neutral-700 py-6 text-lg text-neutral-300 hover:border-yellow-500 hover:text-black"
                asChild
              >
                <a
                  href="tel:+971503821352"
                  data-testid="button-call-inquiry"
                >
                  Call for Inquiry
                </a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}