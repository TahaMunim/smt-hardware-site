// ProductCard.tsx
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";
import { useState, useRef } from "react";

interface ProductCardProps {
  product: Product;
}

function HoverCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCarousel = () => {
    if (images.length < 2) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 1800);
  };

  const stopCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIndex(0);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={startCarousel}
      onMouseLeave={stopCarousel}
    >
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Product Image"
            className="w-full h-full flex-shrink-0 object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "971503821352";
  const whatsappMessage = `Hello, I would like to know more about ${product.name}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const renderImage = () => {
    if (Array.isArray(product.image) && product.image.length > 1) {
      return <HoverCarousel images={product.image} />;
    }
    return (
      <img
        src={Array.isArray(product.image) ? product.image[0] : product.image}
        alt={product.name}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    );
  };

  return (
    <div className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-yellow-500 transition-all duration-300" data-testid={`product-card-${product.id}`}>

      {/* Mobile Layout */}
      <div className="flex sm:hidden">
        <Link href={`/product/${product.id}`} className="flex-shrink-0">
          <div className="w-32 h-36 overflow-hidden bg-white">{renderImage()}</div>
        </Link>
        <div className="flex-1 p-3 flex flex-col justify-between">
          <div className="space-y-1">
            <Badge className="bg-[#F5C518] text-black hover:bg-[#d9ad15] text-xs px-2 py-0 w-fit" data-testid={`badge-brand-${product.id}`}>
              {product.brand}
            </Badge>
            <Link href={`/product/${product.id}`}>
              <h3 className="text-sm font-semibold text-white group-hover:text-yellow-500 transition-colors line-clamp-1" data-testid={`product-name-${product.id}`}>
                {product.name}
              </h3>
            </Link>
            <p className="text-xs text-neutral-400 line-clamp-2" data-testid={`product-description-${product.id}`}>
              {product.description}
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 w-full rounded-md bg-yellow-500 px-2 py-1.5 text-xs font-semibold text-black hover:bg-yellow-400 transition-colors mt-2"
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
          <div className="aspect-square overflow-hidden bg-white">{renderImage()}</div>
        </Link>
        <div className="p-4 md:p-6 space-y-3">
          <Badge className="bg-[#F5C518] text-black hover:bg-[#d9ad15] text-xs" data-testid={`badge-brand-${product.id}`}>
            {product.brand}
          </Badge>
          <Link href={`/product/${product.id}`}>
            <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors line-clamp-1" data-testid={`product-name-${product.id}`}>
              {product.name}
            </h3>
          </Link>
          <p className="text-xs md:text-sm text-neutral-400 line-clamp-2" data-testid={`product-description-${product.id}`}>
            {product.description}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-md bg-yellow-500 px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-black hover:bg-yellow-400 transition-colors"
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
