import {
  FormEvent,
  useEffect,
  useState
} from "react";

import {
  useLocation,
  useSearch
} from "wouter";

import {
  ChevronDown,
  Filter,
  PackageSearch,
  Search,
  X
} from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const CATEGORIES = [
  "All",
  ...Array.from(
    new Set(
      products.map(
        (product) =>
          product.category
      )
    )
  ).sort()
];

const BRANDS = [
  "All",
  ...Array.from(
    new Set(
      products.map(
        (product) =>
          product.brand
      )
    )
  ).sort()
];

export default function Products() {
  const searchString =
    useSearch();

  const [, navigate] =
    useLocation();

  const [
    searchTerm,
    setSearchTerm
  ] = useState("");

  const [
    selectedCategory,
    setSelectedCategory
  ] = useState("All");

  const [
    selectedBrand,
    setSelectedBrand
  ] = useState("All");

  const [
    mobileFiltersOpen,
    setMobileFiltersOpen
  ] = useState(false);

  /*
    Keep the catalogue synced with URL filters.

    Supported examples:

    /products?search=HM007

    /products?category=Safety%20Equipment

    /products?brand=TUF-FIX

    /products?search=helmet&brand=TUF-FIX
  */
  useEffect(() => {
    const params =
      new URLSearchParams(
        searchString
      );

    const search =
      params.get("search") || "";

    const category =
      params.get("category") ||
      "All";

    const brand =
      params.get("brand") ||
      "All";

    setSearchTerm(search);

    setSelectedCategory(
      CATEGORIES.includes(
        category
      )
        ? category
        : "All"
    );

    setSelectedBrand(
      BRANDS.includes(brand)
        ? brand
        : "All"
    );
  }, [searchString]);

  /*
    Build a clean URL from the
    current catalogue filters.
  */
  const updateUrl = ({
    search = searchTerm,
    category =
      selectedCategory,
    brand = selectedBrand
  }: {
    search?: string;
    category?: string;
    brand?: string;
  }) => {
    const params =
      new URLSearchParams();

    const cleanSearch =
      search.trim();

    if (cleanSearch) {
      params.set(
        "search",
        cleanSearch
      );
    }

    if (
      category &&
      category !== "All"
    ) {
      params.set(
        "category",
        category
      );
    }

    if (
      brand &&
      brand !== "All"
    ) {
      params.set(
        "brand",
        brand
      );
    }

    const query =
      params.toString();

    navigate(
      query
        ? `/products?${query}`
        : "/products"
    );
  };

  const handleSearch = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    updateUrl({
      search: searchTerm
    });
  };

  const handleCategory = (
    category: string
  ) => {
    setSelectedCategory(
      category
    );

    updateUrl({
      category
    });
  };

  const handleBrand = (
    brand: string
  ) => {
    setSelectedBrand(brand);

    updateUrl({
      brand
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedBrand("All");
    setMobileFiltersOpen(false);

    navigate("/products");
  };

  /*
    Search matches:

    - product name
    - description
    - brand
    - category
    - subcategory
    - model
    - SKU
    - keywords
  */
  const filteredProducts =
    products.filter(
      (product) => {
        const search =
          searchTerm
            .trim()
            .toLowerCase();

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
          selectedCategory ===
            "All" ||
          product.category ===
            selectedCategory;

        const matchesBrand =
          selectedBrand ===
            "All" ||
          product.brand ===
            selectedBrand;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesBrand
        );
      }
    );

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    selectedCategory !==
      "All" ||
    selectedBrand !== "All";

  return (
    <main className="min-h-screen bg-black">

      {/* =================================================
          COMPACT PAGE HEADER
      ================================================== */}
      <section
        className="
          relative
          overflow-hidden

          border-b
          border-neutral-800

          bg-neutral-950
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -left-32
            -top-32

            h-80
            w-80

            rounded-full

            bg-yellow-500/10

            blur-[110px]
          "
        />

        <div
          className="
            relative

            mx-auto
            max-w-7xl

            px-4
            py-10

            sm:px-6
            sm:py-12
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-yellow-500
            "
          >
            SMT Product Catalogue
          </p>

          <div
            className="
              mt-3

              flex
              flex-col
              gap-4

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <h1
                className="
                  text-3xl
                  font-black
                  tracking-tight
                  text-white

                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Find the Right Product
                for the Job
              </h1>

              <p
                className="
                  mt-3
                  max-w-2xl

                  text-sm
                  leading-6
                  text-neutral-400

                  sm:text-base
                "
              >
                Browse professional
                tools, safety equipment,
                construction supplies
                and trade products
                available through SMT.
              </p>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-x-5
                gap-y-2

                text-sm
                text-neutral-500
              "
            >
              <span>
                <strong className="text-white">
                  {products.length}
                </strong>{" "}
                online listings
              </span>

              <span>
                <strong className="text-white">
                  {CATEGORIES.length -
                    1}
                </strong>{" "}
                categories
              </span>

              <span>
                <strong className="text-white">
                  {BRANDS.length - 1}
                </strong>{" "}
                brands
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          SEARCH BAR
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-black
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            py-5

            sm:px-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <form
              onSubmit={
                handleSearch
              }
              className="
                min-w-0
                flex-1
              "
            >
              <div
                className="
                  flex
                  h-12

                  overflow-hidden

                  rounded-lg

                  border
                  border-neutral-700

                  bg-neutral-900

                  transition-colors

                  focus-within:border-yellow-500
                "
              >
                <div
                  className="
                    flex
                    items-center

                    pl-4

                    text-neutral-500
                  "
                >
                  <Search className="h-5 w-5" />
                </div>

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(
                      event.target.value
                    )
                  }
                  placeholder="Search products, brands, models or categories..."
                  aria-label="Search products"
                  className="
                    min-w-0
                    flex-1

                    bg-transparent

                    px-3

                    text-sm
                    text-white

                    outline-none

                    placeholder:text-neutral-500

                    sm:text-base
                  "
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");

                      updateUrl({
                        search: ""
                      });
                    }}
                    aria-label="Clear search"
                    className="
                      hidden
                      items-center
                      justify-center

                      px-3

                      text-neutral-500

                      transition-colors

                      hover:text-white

                      sm:flex
                    "
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

                <button
                  type="submit"
                  className="
                    flex-shrink-0

                    bg-yellow-500

                    px-5

                    text-sm
                    font-bold
                    text-black

                    transition-colors

                    hover:bg-yellow-400

                    sm:px-7
                  "
                >
                  Search
                </button>
              </div>
            </form>

            {/* Mobile filters */}
            <button
              type="button"
              onClick={() =>
                setMobileFiltersOpen(
                  (current) =>
                    !current
                )
              }
              className={`
                flex
                h-12
                flex-shrink-0
                items-center
                justify-center
                gap-2

                rounded-lg

                border

                px-4

                text-sm
                font-semibold

                transition-colors

                lg:hidden

                ${
                  mobileFiltersOpen ||
                  selectedCategory !==
                    "All" ||
                  selectedBrand !==
                    "All"
                    ? "border-yellow-500 bg-yellow-500 text-black"
                    : "border-neutral-700 bg-neutral-900 text-neutral-300"
                }
              `}
            >
              <Filter className="h-4 w-4" />

              <span className="hidden sm:inline">
                Filters
              </span>

              <ChevronDown
                className={`
                  h-4
                  w-4

                  transition-transform

                  ${
                    mobileFiltersOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>
          </div>

          {/* Active filters */}
          {hasActiveFilters && (
            <div
              className="
                mt-4

                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              <span
                className="
                  mr-1

                  text-xs
                  font-medium
                  text-neutral-500
                "
              >
                Active:
              </span>

              {searchTerm.trim() && (
                <span
                  className="
                    rounded-full

                    border
                    border-neutral-700

                    bg-neutral-900

                    px-3
                    py-1.5

                    text-xs
                    text-neutral-300
                  "
                >
                  Search:{" "}
                  {searchTerm}
                </span>
              )}

              {selectedCategory !==
                "All" && (
                <span
                  className="
                    rounded-full

                    border
                    border-neutral-700

                    bg-neutral-900

                    px-3
                    py-1.5

                    text-xs
                    text-neutral-300
                  "
                >
                  {
                    selectedCategory
                  }
                </span>
              )}

              {selectedBrand !==
                "All" && (
                <span
                  className="
                    rounded-full

                    border
                    border-neutral-700

                    bg-neutral-900

                    px-3
                    py-1.5

                    text-xs
                    text-neutral-300
                  "
                >
                  {selectedBrand}
                </span>
              )}

              <button
                type="button"
                onClick={
                  clearFilters
                }
                className="
                  ml-1

                  text-xs
                  font-semibold
                  text-yellow-500

                  transition-colors

                  hover:text-yellow-400
                "
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          MOBILE FILTER PANEL
      ================================================== */}
      {mobileFiltersOpen && (
        <section
          className="
            border-b
            border-neutral-800

            bg-neutral-950

            lg:hidden
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl

              px-4
              py-5

              sm:px-6
            "
          >
            {/* Categories */}
            <div>
              <p
                className="
                  mb-3

                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-neutral-500
                "
              >
                Category
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {CATEGORIES.map(
                  (category) => (
                    <button
                      key={
                        category
                      }
                      type="button"
                      onClick={() =>
                        handleCategory(
                          category
                        )
                      }
                      className={`
                        rounded-md

                        border

                        px-3
                        py-2

                        text-sm
                        font-medium

                        transition-colors

                        ${
                          selectedCategory ===
                          category
                            ? "border-yellow-500 bg-yellow-500 text-black"
                            : "border-neutral-700 bg-black text-neutral-300 hover:border-yellow-500 hover:text-yellow-500"
                        }
                      `}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Brands */}
            <div
              className="
                mt-6

                border-t
                border-neutral-800

                pt-5
              "
            >
              <p
                className="
                  mb-3

                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-neutral-500
                "
              >
                Brand
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {BRANDS.map(
                  (brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() =>
                        handleBrand(
                          brand
                        )
                      }
                      className={`
                        rounded-md

                        border

                        px-3
                        py-2

                        text-sm
                        font-medium

                        transition-colors

                        ${
                          selectedBrand ===
                          brand
                            ? "border-yellow-500 bg-yellow-500 text-black"
                            : "border-neutral-700 bg-black text-neutral-300 hover:border-yellow-500 hover:text-yellow-500"
                        }
                      `}
                    >
                      {brand}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =================================================
          CATALOGUE CONTENT
      ================================================== */}
      <section
        className="
          bg-black

          py-8
          md:py-10
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            sm:px-6
          "
        >
          <div
            className="
              grid
              gap-8

              lg:grid-cols-[220px_minmax(0,1fr)]

              xl:grid-cols-[240px_minmax(0,1fr)]
              xl:gap-10
            "
          >

            {/* =============================================
                DESKTOP FILTER SIDEBAR
            ============================================== */}
            <aside
              className="
                hidden

                lg:block
              "
            >
              <div
                className="
                  sticky
                  top-24

                  space-y-7
                "
              >
                {/* Categories */}
                <div>
                  <div
                    className="
                      mb-3

                      flex
                      items-center
                      justify-between
                    "
                  >
                    <h2
                      className="
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      Categories
                    </h2>
                  </div>

                  <div
                    className="
                      overflow-hidden

                      rounded-lg

                      border
                      border-neutral-800

                      bg-neutral-950
                    "
                  >
                    {CATEGORIES.map(
                      (
                        category,
                        index
                      ) => {
                        const count =
                          category ===
                          "All"
                            ? products.length
                            : products.filter(
                                (
                                  product
                                ) =>
                                  product.category ===
                                  category
                              ).length;

                        return (
                          <button
                            key={
                              category
                            }
                            type="button"
                            onClick={() =>
                              handleCategory(
                                category
                              )
                            }
                            className={`
                              flex
                              w-full
                              items-center
                              justify-between
                              gap-3

                              px-4
                              py-3

                              text-left
                              text-sm

                              transition-colors

                              ${
                                index >
                                0
                                  ? "border-t border-neutral-800"
                                  : ""
                              }

                              ${
                                selectedCategory ===
                                category
                                  ? "bg-yellow-500 font-semibold text-black"
                                  : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                              }
                            `}
                          >
                            <span>
                              {
                                category
                              }
                            </span>

                            <span
                              className={`
                                text-xs

                                ${
                                  selectedCategory ===
                                  category
                                    ? "text-black/60"
                                    : "text-neutral-600"
                                }
                              `}
                            >
                              {count}
                            </span>
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h2
                    className="
                      mb-3

                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    Brands
                  </h2>

                  <div
                    className="
                      overflow-hidden

                      rounded-lg

                      border
                      border-neutral-800

                      bg-neutral-950
                    "
                  >
                    {BRANDS.map(
                      (
                        brand,
                        index
                      ) => {
                        const count =
                          brand ===
                          "All"
                            ? products.length
                            : products.filter(
                                (
                                  product
                                ) =>
                                  product.brand ===
                                  brand
                              ).length;

                        return (
                          <button
                            key={brand}
                            type="button"
                            onClick={() =>
                              handleBrand(
                                brand
                              )
                            }
                            className={`
                              flex
                              w-full
                              items-center
                              justify-between
                              gap-3

                              px-4
                              py-3

                              text-left
                              text-sm

                              transition-colors

                              ${
                                index >
                                0
                                  ? "border-t border-neutral-800"
                                  : ""
                              }

                              ${
                                selectedBrand ===
                                brand
                                  ? "bg-yellow-500 font-semibold text-black"
                                  : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                              }
                            `}
                          >
                            <span>
                              {brand}
                            </span>

                            <span
                              className={`
                                text-xs

                                ${
                                  selectedBrand ===
                                  brand
                                    ? "text-black/60"
                                    : "text-neutral-600"
                                }
                              `}
                            >
                              {count}
                            </span>
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={
                      clearFilters
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2

                      rounded-md

                      border
                      border-neutral-700

                      px-4
                      py-2.5

                      text-sm
                      font-semibold
                      text-neutral-300

                      transition-colors

                      hover:border-yellow-500
                      hover:text-yellow-500
                    "
                  >
                    <X className="h-4 w-4" />

                    Clear Filters
                  </button>
                )}
              </div>
            </aside>

            {/* =============================================
                RESULTS
            ============================================== */}
            <div className="min-w-0">

              {/* Result heading */}
              <div
                className="
                  mb-6

                  flex
                  items-end
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      text-neutral-500
                    "
                  >
                    Showing
                  </p>

                  <h2
                    className="
                      mt-1

                      text-xl
                      font-bold
                      text-white

                      sm:text-2xl
                    "
                  >
                    {
                      filteredProducts.length
                    }{" "}
                    {filteredProducts.length ===
                    1
                      ? "Product"
                      : "Products"}
                  </h2>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={
                      clearFilters
                    }
                    className="
                      hidden

                      text-sm
                      font-semibold
                      text-yellow-500

                      hover:text-yellow-400

                      sm:block
                      lg:hidden
                    "
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {/* Product Grid */}
              {filteredProducts.length >
              0 ? (
                <div
                  className="
                    grid
                    grid-cols-1

                    gap-4

                    sm:grid-cols-2
                    md:gap-5

                    xl:grid-cols-3
                    xl:gap-6
                  "
                >
                  {filteredProducts.map(
                    (product) => (
                      <ProductCard
                        key={
                          product.id
                        }
                        product={
                          product
                        }
                      />
                    )
                  )}
                </div>
              ) : (
                <div
                  className="
                    flex
                    min-h-[400px]
                    flex-col
                    items-center
                    justify-center

                    rounded-lg

                    border
                    border-dashed
                    border-neutral-800

                    bg-neutral-950

                    px-6

                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-full

                      bg-neutral-900

                      text-neutral-500
                    "
                  >
                    <PackageSearch className="h-7 w-7" />
                  </div>

                  <h3
                    className="
                      mt-5

                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    No products found
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-md

                      text-sm
                      leading-6
                      text-neutral-500
                    "
                  >
                    Try changing your
                    search, category
                    or brand filter.
                  </p>

                  <button
                    type="button"
                    onClick={
                      clearFilters
                    }
                    className="
                      mt-5

                      rounded-md

                      bg-yellow-500

                      px-5
                      py-2.5

                      text-sm
                      font-bold
                      text-black

                      transition-colors

                      hover:bg-yellow-400
                    "
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}