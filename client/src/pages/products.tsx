import {
  FormEvent,
  useEffect,
  useMemo,
  useState
} from "react";

import {
  useLocation,
  useSearch
} from "wouter";

import {
  ChevronLeft,
  ChevronRight,
  Filter,
  PackageSearch,
  Search,
  SlidersHorizontal,
  X
} from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const PAGE_SIZE = 24;

const CATEGORIES = [
  "All",
  ...Array.from(
    new Set(
      products.map(
        (product) =>
          product.category
      )
    )
  ).sort((a, b) =>
    a.localeCompare(b)
  )
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
  ).sort((a, b) =>
    a.localeCompare(b)
  )
];

type PaginationItem =
  | number
  | "ellipsis-left"
  | "ellipsis-right";

function getPaginationItems(
  currentPage: number,
  totalPages: number
): PaginationItem[] {
  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
  }

  if (currentPage <= 4) {
    return [
      1,
      2,
      3,
      4,
      5,
      "ellipsis-right",
      totalPages
    ];
  }

  if (
    currentPage >=
    totalPages - 3
  ) {
    return [
      1,
      "ellipsis-left",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages
    ];
  }

  return [
    1,
    "ellipsis-left",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis-right",
    totalPages
  ];
}

function getSearchText(
  product: (typeof products)[number]
) {
  return [
    product.name,
    product.description,
    product.shortDescription,
    product.brand,
    product.category,
    product.subcategory,
    product.productFamily,
    product.model,
    product.sku,
    product.oldSku,
    ...(product.keywords ?? [])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export default function Products() {
  const searchString =
    useSearch();

  const [, navigate] =
    useLocation();

  const [
    searchInput,
    setSearchInput
  ] = useState("");

  const [
    activeSearch,
    setActiveSearch
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
    requestedPage,
    setRequestedPage
  ] = useState(1);

  const [
    mobileFiltersOpen,
    setMobileFiltersOpen
  ] = useState(false);

  const [
    categorySearch,
    setCategorySearch
  ] = useState("");

  const [
    brandSearch,
    setBrandSearch
  ] = useState("");

  /*
    URL is the source of truth for
    catalogue state.

    Examples:

    /products?search=grinder
    /products?brand=DONGCHENG&page=3
    /products?category=Power%20Tools&brand=DONGCHENG&page=2
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

    const rawPage =
      Number(
        params.get("page") ||
          "1"
      );

    const page =
      Number.isFinite(rawPage) &&
      rawPage > 0
        ? Math.floor(rawPage)
        : 1;

    setSearchInput(search);
    setActiveSearch(search);

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

    setRequestedPage(page);
  }, [searchString]);

  const updateUrl = ({
    search = activeSearch,
    category = selectedCategory,
    brand = selectedBrand,
    page = requestedPage
  }: {
    search?: string;
    category?: string;
    brand?: string;
    page?: number;
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

    if (page > 1) {
      params.set(
        "page",
        String(page)
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

    const nextSearch =
      searchInput.trim();

    setActiveSearch(
      nextSearch
    );

    updateUrl({
      search: nextSearch,
      page: 1
    });
  };

  const handleCategory = (
    category: string
  ) => {
    setSelectedCategory(
      category
    );

    updateUrl({
      category,
      page: 1
    });
  };

  const handleBrand = (
    brand: string
  ) => {
    setSelectedBrand(brand);

    updateUrl({
      brand,
      page: 1
    });
  };

  const clearSearch = () => {
    setSearchInput("");
    setActiveSearch("");

    updateUrl({
      search: "",
      page: 1
    });
  };

  const clearFilters = () => {
    setSearchInput("");
    setActiveSearch("");
    setSelectedCategory("All");
    setSelectedBrand("All");
    setRequestedPage(1);
    setMobileFiltersOpen(false);

    navigate("/products");
  };

  const searchMatchedProducts =
    useMemo(() => {
      const search =
        activeSearch
          .trim()
          .toLowerCase();

      if (!search) {
        return products;
      }

      return products.filter(
        (product) =>
          getSearchText(
            product
          ).includes(search)
      );
    }, [activeSearch]);

  const filteredProducts =
    useMemo(
      () =>
        searchMatchedProducts.filter(
          (product) => {
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
              matchesCategory &&
              matchesBrand
            );
          }
        ),
      [
        searchMatchedProducts,
        selectedCategory,
        selectedBrand
      ]
    );

  /*
    Faceted counts:

    Category counts respect the
    current search + brand.

    Brand counts respect the
    current search + category.
  */
  const categoryCounts =
    useMemo(() => {
      const scope =
        searchMatchedProducts.filter(
          (product) =>
            selectedBrand ===
              "All" ||
            product.brand ===
              selectedBrand
        );

      const counts =
        new Map<
          string,
          number
        >();

      counts.set(
        "All",
        scope.length
      );

      for (const product of scope) {
        counts.set(
          product.category,
          (counts.get(
            product.category
          ) ?? 0) + 1
        );
      }

      return counts;
    }, [
      searchMatchedProducts,
      selectedBrand
    ]);

  const brandCounts =
    useMemo(() => {
      const scope =
        searchMatchedProducts.filter(
          (product) =>
            selectedCategory ===
              "All" ||
            product.category ===
              selectedCategory
        );

      const counts =
        new Map<
          string,
          number
        >();

      counts.set(
        "All",
        scope.length
      );

      for (const product of scope) {
        counts.set(
          product.brand,
          (counts.get(
            product.brand
          ) ?? 0) + 1
        );
      }

      return counts;
    }, [
      searchMatchedProducts,
      selectedCategory
    ]);

  const visibleCategories =
    useMemo(() => {
      const query =
        categorySearch
          .trim()
          .toLowerCase();

      if (!query) {
        return CATEGORIES;
      }

      return CATEGORIES.filter(
        (category) =>
          category
            .toLowerCase()
            .includes(query)
      );
    }, [categorySearch]);

  const visibleBrands =
    useMemo(() => {
      const query =
        brandSearch
          .trim()
          .toLowerCase();

      if (!query) {
        return BRANDS;
      }

      return BRANDS.filter(
        (brand) =>
          brand
            .toLowerCase()
            .includes(query)
      );
    }, [brandSearch]);

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filteredProducts.length /
          PAGE_SIZE
      )
    );

  const currentPage =
    Math.min(
      requestedPage,
      totalPages
    );

  useEffect(() => {
    if (
      requestedPage >
        totalPages &&
      filteredProducts.length > 0
    ) {
      updateUrl({
        page: totalPages
      });
    }
  }, [
    requestedPage,
    totalPages,
    filteredProducts.length
  ]);

  const pageStart =
    filteredProducts.length === 0
      ? 0
      : (currentPage - 1) *
          PAGE_SIZE +
        1;

  const pageEnd =
    Math.min(
      currentPage * PAGE_SIZE,
      filteredProducts.length
    );

  const paginatedProducts =
    useMemo(() => {
      const start =
        (currentPage - 1) *
        PAGE_SIZE;

      return filteredProducts.slice(
        start,
        start + PAGE_SIZE
      );
    }, [
      filteredProducts,
      currentPage
    ]);

  const paginationItems =
    getPaginationItems(
      currentPage,
      totalPages
    );

  const hasActiveFilters =
    activeSearch.trim() !== "" ||
    selectedCategory !== "All" ||
    selectedBrand !== "All";

  const activeFilterCount =
    Number(
      activeSearch.trim() !== ""
    ) +
    Number(
      selectedCategory !== "All"
    ) +
    Number(
      selectedBrand !== "All"
    );

  const goToPage = (
    page: number
  ) => {
    const safePage =
      Math.min(
        Math.max(page, 1),
        totalPages
      );

    setRequestedPage(
      safePage
    );

    updateUrl({
      page: safePage
    });

    window.setTimeout(() => {
      const results =
        document.getElementById(
          "catalogue-results"
        );

      if (!results) {
        return;
      }

      const top =
        results.getBoundingClientRect()
          .top +
        window.scrollY -
        96;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }, 0);
  };

  const renderFilterList = (
    type: "category" | "brand"
  ) => {
    const items =
      type === "category"
        ? visibleCategories
        : visibleBrands;

    const selected =
      type === "category"
        ? selectedCategory
        : selectedBrand;

    const counts =
      type === "category"
        ? categoryCounts
        : brandCounts;

    const handler =
      type === "category"
        ? handleCategory
        : handleBrand;

    if (items.length === 0) {
      return (
        <p className="px-3 py-4 text-sm text-neutral-600">
          No matching {type === "category" ? "categories" : "brands"}.
        </p>
      );
    }

    return items.map(
      (item, index) => {
        const count =
          counts.get(item) ?? 0;

        const isSelected =
          selected === item;

        const disabled =
          count === 0 &&
          !isSelected;

        return (
          <button
            key={item}
            type="button"
            onClick={() =>
              handler(item)
            }
            disabled={disabled}
            className={`
              flex
              w-full
              items-center
              justify-between
              gap-3
              px-3
              py-2.5
              text-left
              text-sm
              transition-colors
              ${
                index > 0
                  ? "border-t border-neutral-800/80"
                  : ""
              }
              ${
                isSelected
                  ? "bg-yellow-500 font-semibold text-black"
                  : disabled
                    ? "cursor-not-allowed text-neutral-700"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
              }
            `}
          >
            <span className="min-w-0 truncate">
              {item}
            </span>

            <span
              className={`
                flex-shrink-0
                text-xs
                ${
                  isSelected
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
    );
  };

  return (
    <main className="min-h-screen bg-black">
      {/* =================================================
          COMPACT PAGE HEADER
      ================================================== */}
      <section className="relative overflow-hidden border-b border-neutral-800 bg-neutral-950">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-yellow-500/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-500">
            SMT Product Catalogue
          </p>

          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Find the Right Product for the Job
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
                Browse professional tools, safety equipment,
                construction supplies and trade products available
                through SMT.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-500">
              <span>
                <strong className="text-white">
                  {products.length}
                </strong>{" "}
                online listings
              </span>

              <span>
                <strong className="text-white">
                  {CATEGORIES.length - 1}
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
          SEARCH + ACTIVE FILTERS
      ================================================== */}
      <section className="border-b border-neutral-800 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <form
              onSubmit={handleSearch}
              className="min-w-0 flex-1"
            >
              <div className="flex h-12 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 transition-colors focus-within:border-yellow-500">
                <div className="flex items-center pl-4 text-neutral-500">
                  <Search className="h-5 w-5" />
                </div>

                <input
                  type="search"
                  value={searchInput}
                  onChange={(event) =>
                    setSearchInput(
                      event.target.value
                    )
                  }
                  placeholder="Search products, brands, models or SKUs..."
                  aria-label="Search products"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-neutral-500 sm:text-base"
                />

                {searchInput && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    aria-label="Clear search"
                    className="hidden items-center justify-center px-3 text-neutral-500 transition-colors hover:text-white sm:flex"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

                <button
                  type="submit"
                  className="flex-shrink-0 bg-yellow-500 px-5 text-sm font-bold text-black transition-colors hover:bg-yellow-400 sm:px-7"
                >
                  Search
                </button>
              </div>
            </form>

            <button
              type="button"
              onClick={() =>
                setMobileFiltersOpen(true)
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
                  activeFilterCount > 0
                    ? "border-yellow-500 bg-yellow-500 text-black"
                    : "border-neutral-700 bg-neutral-900 text-neutral-300"
                }
              `}
            >
              <Filter className="h-4 w-4" />

              <span className="hidden sm:inline">
                Filters
              </span>

              {activeFilterCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-black text-yellow-500">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-medium text-neutral-500">
                Active:
              </span>

              {activeSearch.trim() && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white"
                >
                  Search: {activeSearch}
                  <X className="h-3 w-3" />
                </button>
              )}

              {selectedCategory !== "All" && (
                <button
                  type="button"
                  onClick={() =>
                    handleCategory("All")
                  }
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white"
                >
                  {selectedCategory}
                  <X className="h-3 w-3" />
                </button>
              )}

              {selectedBrand !== "All" && (
                <button
                  type="button"
                  onClick={() =>
                    handleBrand("All")
                  }
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white"
                >
                  {selectedBrand}
                  <X className="h-3 w-3" />
                </button>
              )}

              <button
                type="button"
                onClick={clearFilters}
                className="ml-1 text-xs font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          MOBILE FILTER DRAWER
      ================================================== */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() =>
              setMobileFiltersOpen(false)
            }
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          <section className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-hidden rounded-t-2xl border-t border-neutral-700 bg-neutral-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-4 sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-yellow-500">
                  Catalogue Filters
                </p>
                <h2 className="mt-1 text-lg font-bold text-white">
                  Filter Products
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setMobileFiltersOpen(false)
                }
                className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-700 text-neutral-400 transition-colors hover:border-yellow-500 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[calc(88vh-138px)] overflow-y-auto px-4 py-5 sm:px-6">
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-white">
                    Categories
                  </h3>
                  <span className="text-xs text-neutral-600">
                    {CATEGORIES.length - 1}
                  </span>
                </div>

                <div className="relative mb-3">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                  <input
                    type="search"
                    value={categorySearch}
                    onChange={(event) =>
                      setCategorySearch(
                        event.target.value
                      )
                    }
                    placeholder="Find a category..."
                    className="h-10 w-full rounded-md border border-neutral-800 bg-black pl-9 pr-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                  />
                </div>

                <div className="overflow-hidden rounded-lg border border-neutral-800 bg-black">
                  {renderFilterList(
                    "category"
                  )}
                </div>
              </div>

              <div className="mt-7 border-t border-neutral-800 pt-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-white">
                    Brands
                  </h3>
                  <span className="text-xs text-neutral-600">
                    {BRANDS.length - 1}
                  </span>
                </div>

                <div className="relative mb-3">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                  <input
                    type="search"
                    value={brandSearch}
                    onChange={(event) =>
                      setBrandSearch(
                        event.target.value
                      )
                    }
                    placeholder="Find a brand..."
                    className="h-10 w-full rounded-md border border-neutral-800 bg-black pl-9 pr-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                  />
                </div>

                <div className="overflow-hidden rounded-lg border border-neutral-800 bg-black">
                  {renderFilterList(
                    "brand"
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-t border-neutral-800 bg-black px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={clearFilters}
                className="h-11 flex-1 rounded-md border border-neutral-700 text-sm font-semibold text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white"
              >
                Clear All
              </button>

              <button
                type="button"
                onClick={() =>
                  setMobileFiltersOpen(false)
                }
                className="h-11 flex-[1.25] rounded-md bg-yellow-500 px-4 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
              >
                Show {filteredProducts.length} Products
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =================================================
          CATALOGUE CONTENT
      ================================================== */}
      <section className="bg-black py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)] xl:gap-10">
            {/* =============================================
                DESKTOP FILTER SIDEBAR
            ============================================== */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filter Catalogue
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h2 className="text-sm font-bold text-white">
                      Categories
                    </h2>
                    <span className="text-xs text-neutral-600">
                      {CATEGORIES.length - 1}
                    </span>
                  </div>

                  <div className="relative mb-3">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                    <input
                      type="search"
                      value={categorySearch}
                      onChange={(event) =>
                        setCategorySearch(
                          event.target.value
                        )
                      }
                      placeholder="Find category..."
                      className="h-9 w-full rounded-md border border-neutral-800 bg-neutral-950 pl-9 pr-3 text-xs text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                    />
                  </div>

                  <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
                    {renderFilterList(
                      "category"
                    )}
                  </div>
                </div>

                <div className="mt-7 border-t border-neutral-800 pt-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h2 className="text-sm font-bold text-white">
                      Brands
                    </h2>
                    <span className="text-xs text-neutral-600">
                      {BRANDS.length - 1}
                    </span>
                  </div>

                  <div className="relative mb-3">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />
                    <input
                      type="search"
                      value={brandSearch}
                      onChange={(event) =>
                        setBrandSearch(
                          event.target.value
                        )
                      }
                      placeholder="Find brand..."
                      className="h-9 w-full rounded-md border border-neutral-800 bg-neutral-950 pl-9 pr-3 text-xs text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                    />
                  </div>

                  <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
                    {renderFilterList(
                      "brand"
                    )}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-neutral-700 px-4 py-2.5 text-sm font-semibold text-neutral-300 transition-colors hover:border-yellow-500 hover:text-yellow-500"
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
            <div
              id="catalogue-results"
              className="min-w-0 scroll-mt-24"
            >
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm text-neutral-500">
                    {filteredProducts.length > 0
                      ? `Showing ${pageStart}–${pageEnd} of`
                      : "Showing"}
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                    {filteredProducts.length}{" "}
                    {filteredProducts.length === 1
                      ? "Product"
                      : "Products"}
                  </h2>
                </div>

                {filteredProducts.length > PAGE_SIZE && (
                  <p className="text-xs font-medium text-neutral-600">
                    Page {currentPage} of {totalPages}
                  </p>
                )}
              </div>

              {filteredProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
                    {paginatedProducts.map(
                      (product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                        />
                      )
                    )}
                  </div>

                  {totalPages > 1 && (
                    <nav
                      aria-label="Product catalogue pagination"
                      className="mt-10 border-t border-neutral-800 pt-7"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-neutral-500">
                          Showing{" "}
                          <span className="font-semibold text-neutral-300">
                            {pageStart}–{pageEnd}
                          </span>{" "}
                          of{" "}
                          <span className="font-semibold text-neutral-300">
                            {filteredProducts.length}
                          </span>{" "}
                          products
                        </p>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              goToPage(
                                currentPage - 1
                              )
                            }
                            disabled={currentPage === 1}
                            aria-label="Previous page"
                            className="flex h-10 items-center justify-center gap-1 rounded-md border border-neutral-800 px-3 text-sm font-medium text-neutral-400 transition-colors hover:border-yellow-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-800"
                          >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="hidden md:inline">
                              Previous
                            </span>
                          </button>

                          {paginationItems.map(
                            (item) => {
                              if (
                                typeof item !==
                                "number"
                              ) {
                                return (
                                  <span
                                    key={item}
                                    className="flex h-10 w-8 items-center justify-center text-sm text-neutral-600"
                                  >
                                    …
                                  </span>
                                );
                              }

                              const isCurrent =
                                item ===
                                currentPage;

                              return (
                                <button
                                  key={item}
                                  type="button"
                                  onClick={() =>
                                    goToPage(item)
                                  }
                                  aria-current={
                                    isCurrent
                                      ? "page"
                                      : undefined
                                  }
                                  className={`
                                    flex
                                    h-10
                                    min-w-10
                                    items-center
                                    justify-center
                                    rounded-md
                                    border
                                    px-2
                                    text-sm
                                    font-semibold
                                    transition-colors
                                    ${
                                      isCurrent
                                        ? "border-yellow-500 bg-yellow-500 text-black"
                                        : "border-neutral-800 text-neutral-400 hover:border-yellow-500 hover:text-white"
                                    }
                                  `}
                                >
                                  {item}
                                </button>
                              );
                            }
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              goToPage(
                                currentPage + 1
                              )
                            }
                            disabled={
                              currentPage ===
                              totalPages
                            }
                            aria-label="Next page"
                            className="flex h-10 items-center justify-center gap-1 rounded-md border border-neutral-800 px-3 text-sm font-medium text-neutral-400 transition-colors hover:border-yellow-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-800"
                          >
                            <span className="hidden md:inline">
                              Next
                            </span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </nav>
                  )}
                </>
              ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-neutral-800 bg-neutral-950 px-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-neutral-500">
                    <PackageSearch className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    No products found
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                    Try changing your search, category or brand filter.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-5 rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
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