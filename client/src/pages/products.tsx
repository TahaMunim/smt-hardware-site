import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Search } from "lucide-react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-28 bg-[#0b0b0b] overflow-hidden">
        {/* Yellow glow behind content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f5c51822,transparent_70%)]" />

        {/* Subtle top yellow edge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5C518]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F5C518]" />

        <div className="container relative mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_6px_20px_rgba(245,197,24,0.45)]">
            Our Product Catalogue
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Browse our comprehensive selection of construction materials and professional tools
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-black" data-testid="products-grid-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 space-y-6">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                data-testid="input-search-products"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-[#F5C518] text-black border border-[#F5C518] hover:bg-[#d9ad15] hover:text-black"
                      : "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 border border-neutral-700 text-neutral-300 hover:bg-[#F5C518] hover:text-black hover:border-[#F5C518]"
                  }
                  data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16" data-testid="no-products-message">
              <p className="text-xl text-neutral-400">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
