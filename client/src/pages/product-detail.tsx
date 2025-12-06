// ProductDetail.tsx
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useState, useEffect, useRef } from "react";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const product = products.find((p) => String(p.id) === params?.id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen pt-16 bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = Array.isArray(product.image) ? product.image : [product.image];

  // Automatic slideshow
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetInterval();
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetInterval();
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  const whatsappNumber = "971503821352";
  const whatsappMessage = `Hello, I would like to know more about ${product.name}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen pt-16 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carousel */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-white" data-testid="product-detail-image">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className="w-full h-full flex-shrink-0 object-cover"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Left/Right Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Progress Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToImage(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentIndex ? "bg-yellow-500" : "bg-black bg-opacity-20"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md mb-4" data-testid="product-detail-category">
                {product.category}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="product-detail-name">
                {product.name}
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed" data-testid="product-detail-description">
                {product.description}
              </p>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Product Details</h2>
              <p className="text-neutral-400 leading-relaxed">
                This professional-grade {product.category.toLowerCase()} is designed for demanding construction and industrial applications. 
                Contact us for detailed specifications, pricing, and availability.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-md bg-yellow-500 px-6 py-4 text-lg font-semibold text-black hover:bg-yellow-400 transition-colors"
                data-testid="button-whatsapp-inquiry-detail"
              >
                <FaWhatsapp className="h-6 w-6" />
                WhatsApp Inquiry
              </a>
              <Button
                variant="outline"
                className="w-full border-2 border-neutral-700 text-neutral-300 hover:border-yellow-500 hover:text-black py-6 text-lg"
                asChild
              >
                <a href="tel:+971503821352" data-testid="button-call-inquiry">
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
