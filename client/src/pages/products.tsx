import { useEffect, useState } from "react";
import { useSearch } from "wouter";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

import { Search } from "lucide-react";

export default function Products() {
  /*
    useSearch() specifically watches the URL query string.

    Example:
    /products?search=stanley

    This is important because /products itself has not changed,
    only the ?search= portion has changed.
  */
  const searchString = useSearch();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(
        products.map(
          (product) => product.category
        )
      )
    )
  ];

  /*
    Whenever the URL query string changes,
    update the catalogue filters.
  */
  useEffect(() => {
    const params =
      new URLSearchParams(searchString);

    const search =
      params.get("search") || "";

    const category =
      params.get("category") || "All";

    setSearchTerm(search);

    if (categories.includes(category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }
  }, [searchString]);

  const filteredProducts = products.filter(
    (product) => {
      const search =
        searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        product.name
          .toLowerCase()
          .includes(search) ||
        product.description
          .toLowerCase()
          .includes(search) ||
        product.brand
          .toLowerCase()
          .includes(search) ||
        product.category
          .toLowerCase()
          .includes(search) ||
        product.subcategory
          ?.toLowerCase()
          .includes(search) ||
        product.model
          ?.toLowerCase()
          .includes(search) ||
        product.sku
          ?.toLowerCase()
          .includes(search) ||
        product.keywords?.some(
          (keyword) =>
            keyword
              .toLowerCase()
              .includes(search)
        );

      const matchesCategory =
        selectedCategory === "All" ||
        product.category ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  return (
    <div className="min-h-screen">
      {/* ================================================
          PAGE HERO
      ================================================= */}
      <section className="relative overflow-hidden bg-[#0b0b0b] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f5c51822,transparent_70%)]" />

        <div className="absolute left-0 right-0 top-0 h-1 bg-[#F5C518]" />

        <div className="container relative mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Our Product Catalogue
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-300 md:text-lg">
            Browse professional tools,
            industrial supplies and
            construction products available
            through SMT.
          </p>
        </div>
      </section>

      {/* ================================================
          CATALOGUE
      ================================================= */}
      <section
        className="bg-black py-12 md:py-20"
        data-testid="products-grid-section"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Search + Filters */}
          <div className="mb-8 space-y-6">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />

              <Input
                type="text"
                placeholder="Search products, brands, models..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                className="border-neutral-800 bg-neutral-900 pl-10 text-white placeholder:text-neutral-500"
                data-testid="input-search-products"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map(
                (category) => (
                  <Button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(
                        category
                      )
                    }
                    variant={
                      selectedCategory ===
                      category
                        ? "default"
                        : "outline"
                    }
                    className={
                      selectedCategory ===
                      category
                        ? "h-10 rounded-md border border-[#F5C518] bg-[#F5C518] px-4 text-sm font-medium text-black hover:bg-[#d9ad15] hover:text-black"
                        : "h-10 rounded-md border border-neutral-700 px-4 text-sm font-medium text-neutral-300 hover:border-[#F5C518] hover:bg-[#F5C518] hover:text-black"
                    }
                    data-testid={`button-category-${category
                      .toLowerCase()
                      .replace(
                        /\s+/g,
                        "-"
                      )}`}
                  >
                    {category}
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}
          </div>

          {/* No Results */}
          {filteredProducts.length ===
            0 && (
            <div
              className="py-16 text-center"
              data-testid="no-products-message"
            >
              <p className="text-xl text-neutral-400">
                No products found
                matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}