import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const product = products.find(p => String(p.id) === params?.id);

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
          <div className="aspect-square overflow-hidden rounded-lg bg-neutral-900" data-testid="product-detail-image">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

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
