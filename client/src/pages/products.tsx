import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

import type {
  ChangeEvent,
  FormEvent
} from "react";

import {
  useLocation,
  useSearch
} from "wouter";

import {
  ChevronLeft,
  ChevronRight,
  Menu,
  PackageSearch,
  Search,
  SlidersHorizontal,
  X
} from "lucide-react";

import BrandFilterPanel from "@/components/BrandFilterPanel";
import CatalogueBrowser from "@/components/CatalogueBrowser";
import ProductCard from "@/components/ProductCard";

import {
  catalogueDepartments,
  getDepartmentById,
  getDepartmentIdForCategory
} from "@/data/catalogueTaxonomy";

import { products } from "@/data/products";

const PAGE_SIZE = 24;

const ALL_CATEGORIES = Array.from(
  new Set(
    products.map(
      (product) => product.category
    )
  )
).sort((a, b) =>
  a.localeCompare(b)
);

const ALL_BRANDS = Array.from(
  new Set(
    products
      .map(
        (product) => product.brand
      )
      .filter(Boolean)
  )
).sort((a, b) =>
  a.localeCompare(b)
);

const SORT_OPTIONS = [
  {
    value: "recommended",
    label: "Recommended"
  },
  {
    value: "name-asc",
    label: "Name: A–Z"
  },
  {
    value: "name-desc",
    label: "Name: Z–A"
  },
  {
    value: "brand-asc",
    label: "Brand: A–Z"
  },
  {
    value: "category-asc",
    label: "Category"
  }
] as const;

type SortKey =
  (typeof SORT_OPTIONS)[number]["value"];

type PaginationItem =
  | number
  | "ellipsis-left"
  | "ellipsis-right";

function compareText(
  a: string,
  b: string
) {
  return a.localeCompare(
    b,
    undefined,
    {
      numeric: true,
      sensitivity: "base"
    }
  );
}

function isSortKey(
  value: string | null
): value is SortKey {
  return SORT_OPTIONS.some(
    (option) =>
      option.value === value
  );
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

function sortProductList(
  list: typeof products,
  sort: SortKey
) {
  const copy = [...list];

  copy.sort((a, b) => {
    if (sort === "name-asc") {
      return compareText(
        a.name,
        b.name
      );
    }

    if (sort === "name-desc") {
      return compareText(
        b.name,
        a.name
      );
    }

    if (sort === "brand-asc") {
      const brandCompare =
        compareText(
          a.brand || "Others",
          b.brand || "Others"
        );

      return brandCompare !== 0
        ? brandCompare
        : compareText(
            a.name,
            b.name
          );
    }

    if (
      sort === "category-asc"
    ) {
      const categoryCompare =
        compareText(
          a.category,
          b.category
        );

      if (
        categoryCompare !== 0
      ) {
        return categoryCompare;
      }

      return compareText(
        a.name,
        b.name
      );
    }

    /*
      Recommended is deliberately predictable
      until SMT adds explicit merchandising
      priority data.

      Department -> Category -> Subcategory
      -> Brand -> Product
    */
    const aDepartmentIndex =
      catalogueDepartments.findIndex(
        (department) =>
          department.id ===
          getDepartmentIdForCategory(
            a.category
          )
      );

    const bDepartmentIndex =
      catalogueDepartments.findIndex(
        (department) =>
          department.id ===
          getDepartmentIdForCategory(
            b.category
          )
      );

    if (
      aDepartmentIndex !==
      bDepartmentIndex
    ) {
      return (
        aDepartmentIndex -
        bDepartmentIndex
      );
    }

    const categoryCompare =
      compareText(
        a.category,
        b.category
      );

    if (
      categoryCompare !== 0
    ) {
      return categoryCompare;
    }

    const subcategoryCompare =
      compareText(
        a.subcategory || "",
        b.subcategory || ""
      );

    if (
      subcategoryCompare !== 0
    ) {
      return subcategoryCompare;
    }

    const brandCompare =
      compareText(
        a.brand || "Others",
        b.brand || "Others"
      );

    return brandCompare !== 0
      ? brandCompare
      : compareText(
          a.name,
          b.name
        );
  });

  return copy;
}

export default function Products() {
  const searchString =
    useSearch();

  const [, navigate] =
    useLocation();

  const cleanSearchString =
    searchString.replace(
      /^\?/,
      ""
    );

  const catalogueReturnUrl =
    cleanSearchString
      ? `/products?${cleanSearchString}`
      : undefined;

  /* =====================================================
     STATE
  ===================================================== */
  const [
    searchInput,
    setSearchInput
  ] = useState("");

  const [
    activeSearch,
    setActiveSearch
  ] = useState("");

  const [
    selectedDepartment,
    setSelectedDepartment
  ] = useState("all");

  const [
    selectedCategory,
    setSelectedCategory
  ] = useState("All");

  const [
    selectedSubcategory,
    setSelectedSubcategory
  ] = useState("All");

  const [
    selectedBrand,
    setSelectedBrand
  ] = useState("All");

  const [
    selectedSort,
    setSelectedSort
  ] = useState<SortKey>(
    "recommended"
  );

  const [
    requestedPage,
    setRequestedPage
  ] = useState(1);

  const [
    mobilePanelOpen,
    setMobilePanelOpen
  ] = useState(false);

  const [
    desktopPanelOpen,
    setDesktopPanelOpen
  ] = useState(() => {
    if (
      typeof window ===
      "undefined"
    ) {
      return true;
    }

    /*
      Categories should be immediately discoverable
      on desktop. The user can still collapse the
      panel whenever maximum grid width is preferred.
    */
    return window.innerWidth >= 1280;
  });

  /* =====================================================
     URL -> STATE
  ===================================================== */
  useEffect(() => {
    const params =
      new URLSearchParams(
        cleanSearchString
      );

    const search =
      params.get("search") ||
      "";

    const rawCategory =
      params.get("category") ||
      "All";

    const category =
      ALL_CATEGORIES.includes(
        rawCategory
      )
        ? rawCategory
        : "All";

    const inferredDepartment =
      category !== "All"
        ? getDepartmentIdForCategory(
            category
          )
        : null;

    const rawDepartment =
      params.get(
        "department"
      );

    const validDepartment =
      rawDepartment === "all" ||
      catalogueDepartments.some(
        (department) =>
          department.id ===
          rawDepartment
      );

    const department =
      inferredDepartment ||
      (
        validDepartment &&
        rawDepartment
          ? rawDepartment
          : "all"
      );

    const validSubcategories =
      category === "All"
        ? []
        : Array.from(
            new Set(
              products
                .filter(
                  (product) =>
                    product.category ===
                    category
                )
                .map(
                  (product) =>
                    product.subcategory
                )
                .filter(Boolean)
            )
          );

    const rawSubcategory =
      params.get(
        "subcategory"
      ) || "All";

    const subcategory =
      validSubcategories.includes(
        rawSubcategory
      )
        ? rawSubcategory
        : "All";

    const rawBrand =
      params.get("brand") ||
      "All";

    const brand =
      rawBrand === "Others" ||
      ALL_BRANDS.includes(
        rawBrand
      )
        ? rawBrand
        : "All";

    const rawSort =
      params.get("sort");

    const sort =
      isSortKey(rawSort)
        ? rawSort
        : "recommended";

    const rawPage = Number(
      params.get("page") ||
        "1"
    );

    const page =
      Number.isFinite(
        rawPage
      ) &&
      rawPage > 0
        ? Math.floor(
            rawPage
          )
        : 1;

    setSearchInput(search);
    setActiveSearch(search);
    setSelectedDepartment(
      department
    );
    setSelectedCategory(
      category
    );
    setSelectedSubcategory(
      subcategory
    );
    setSelectedBrand(brand);
    setSelectedSort(sort);
    setRequestedPage(page);
  }, [cleanSearchString]);

  /* =====================================================
     URL UPDATER
  ===================================================== */
  const updateUrl = ({
    search = activeSearch,
    department =
      selectedDepartment,
    category =
      selectedCategory,
    subcategory =
      selectedSubcategory,
    brand = selectedBrand,
    sort = selectedSort,
    page = requestedPage
  }: {
    search?: string;
    department?: string;
    category?: string;
    subcategory?: string;
    brand?: string;
    sort?: SortKey;
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
      category !== "All"
    ) {
      params.set(
        "category",
        category
      );

      if (
        subcategory !==
        "All"
      ) {
        params.set(
          "subcategory",
          subcategory
        );
      }
    } else if (
      department !== "all"
    ) {
      params.set(
        "department",
        department
      );
    }

    if (
      brand !== "All"
    ) {
      params.set(
        "brand",
        brand
      );
    }

    if (
      sort !== "recommended"
    ) {
      params.set(
        "sort",
        sort
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

  /* =====================================================
     SEARCH / NAVIGATION ACTIONS
  ===================================================== */
  const handleSearch = (
    event:
      FormEvent<HTMLFormElement>
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

  const clearSearch = () => {
    setSearchInput("");
    setActiveSearch("");

    updateUrl({
      search: "",
      page: 1
    });
  };

  const selectAllProducts = () => {
    setSelectedDepartment(
      "all"
    );
    setSelectedCategory(
      "All"
    );
    setSelectedSubcategory(
      "All"
    );

    updateUrl({
      department: "all",
      category: "All",
      subcategory: "All",
      page: 1
    });
  };

  const selectDepartment = (
    departmentId: string
  ) => {
    setSelectedDepartment(
      departmentId
    );
    setSelectedCategory(
      "All"
    );
    setSelectedSubcategory(
      "All"
    );

    updateUrl({
      department:
        departmentId,
      category: "All",
      subcategory: "All",
      page: 1
    });
  };

  const selectCategory = (
    category: string
  ) => {
    const department =
      getDepartmentIdForCategory(
        category
      );

    setSelectedDepartment(
      department
    );
    setSelectedCategory(
      category
    );
    setSelectedSubcategory(
      "All"
    );

    updateUrl({
      department,
      category,
      subcategory: "All",
      page: 1
    });
  };

  const selectSubcategory = (
    category: string,
    subcategory: string
  ) => {
    const department =
      getDepartmentIdForCategory(
        category
      );

    setSelectedDepartment(
      department
    );
    setSelectedCategory(
      category
    );
    setSelectedSubcategory(
      subcategory
    );

    updateUrl({
      department,
      category,
      subcategory,
      page: 1
    });
  };

  const selectBrand = (
    brand: string
  ) => {
    setSelectedBrand(brand);

    updateUrl({
      brand,
      page: 1
    });
  };

  const selectSort = (
    sort: SortKey
  ) => {
    setSelectedSort(sort);

    updateUrl({
      sort,
      page: 1
    });
  };

  const clearRefinements = () => {
    setSearchInput("");
    setActiveSearch("");
    setSelectedBrand("All");

    updateUrl({
      search: "",
      brand: "All",
      page: 1
    });
  };

  const clearEverything = () => {
    setSearchInput("");
    setActiveSearch("");
    setSelectedDepartment(
      "all"
    );
    setSelectedCategory(
      "All"
    );
    setSelectedSubcategory(
      "All"
    );
    setSelectedBrand("All");
    setRequestedPage(1);

    navigate(
      selectedSort ===
        "recommended"
        ? "/products"
        : `/products?sort=${selectedSort}`
    );
  };

  /* =====================================================
     SUBCATEGORY INDEX
  ===================================================== */
  const subcategoriesByCategory =
    useMemo(() => {
      const map =
        new Map<
          string,
          string[]
        >();

      for (
        const category
        of ALL_CATEGORIES
      ) {
        const values =
          Array.from(
            new Set(
              products
                .filter(
                  (product) =>
                    product.category ===
                      category &&
                    product.subcategory
                )
                .map(
                  (product) =>
                    product.subcategory as string
                )
            )
          ).sort(compareText);

        map.set(
          category,
          values
        );
      }

      return map;
    }, []);

  const getSubcategories =
    useCallback(
      (category: string) =>
        subcategoriesByCategory.get(
          category
        ) ?? [],
      [subcategoriesByCategory]
    );

  /* =====================================================
     SEARCH SCOPE
  ===================================================== */
  const searchMatchedProducts =
    useMemo(() => {
      const query =
        activeSearch
          .trim()
          .toLowerCase();

      if (!query) {
        return products;
      }

      return products.filter(
        (product) =>
          getSearchText(
            product
          ).includes(query)
      );
    }, [activeSearch]);

  /* =====================================================
     CATEGORY TREE COUNTS

     These counts respect the current search + brand,
     but ignore the current category path so the user can
     see where else they can navigate.
  ===================================================== */
  const navigationCountScope =
    useMemo(
      () =>
        searchMatchedProducts.filter(
          (product) =>
            selectedBrand ===
              "All" ||
            (
              selectedBrand ===
                "Others" &&
              !product.brand
            ) ||
            product.brand ===
              selectedBrand
        ),
      [
        searchMatchedProducts,
        selectedBrand
      ]
    );

  const departmentTotals =
    useMemo(() => {
      const counts =
        new Map<
          string,
          number
        >();

      counts.set(
        "all",
        navigationCountScope.length
      );

      for (
        const product
        of navigationCountScope
      ) {
        const departmentId =
          getDepartmentIdForCategory(
            product.category
          );

        counts.set(
          departmentId,
          (
            counts.get(
              departmentId
            ) ?? 0
          ) + 1
        );
      }

      return counts;
    }, [navigationCountScope]);

  const categoryTotals =
    useMemo(() => {
      const counts =
        new Map<
          string,
          number
        >();

      for (
        const product
        of navigationCountScope
      ) {
        counts.set(
          product.category,
          (
            counts.get(
              product.category
            ) ?? 0
          ) + 1
        );
      }

      return counts;
    }, [navigationCountScope]);

  const subcategoryTotals =
    useMemo(() => {
      const counts =
        new Map<
          string,
          number
        >();

      for (
        const product
        of navigationCountScope
      ) {
        if (
          !product.subcategory
        ) {
          continue;
        }

        const key =
          `${product.category}|||${product.subcategory}`;

        counts.set(
          key,
          (
            counts.get(key) ??
            0
          ) + 1
        );
      }

      return counts;
    }, [navigationCountScope]);

  /* =====================================================
     HIERARCHY SCOPE
  ===================================================== */
  const hierarchyMatchedProducts =
    useMemo(
      () =>
        searchMatchedProducts.filter(
          (product) => {
            const departmentMatches =
              selectedDepartment ===
                "all" ||
              getDepartmentIdForCategory(
                product.category
              ) ===
                selectedDepartment;

            const categoryMatches =
              selectedCategory ===
                "All" ||
              product.category ===
                selectedCategory;

            const subcategoryMatches =
              selectedSubcategory ===
                "All" ||
              product.subcategory ===
                selectedSubcategory;

            return (
              departmentMatches &&
              categoryMatches &&
              subcategoryMatches
            );
          }
        ),
      [
        searchMatchedProducts,
        selectedDepartment,
        selectedCategory,
        selectedSubcategory
      ]
    );

  /* =====================================================
     BRAND COUNTS

     Brands respect the selected hierarchy + search.
  ===================================================== */
  const brandCounts =
    useMemo(() => {
      const counts =
        new Map<
          string,
          number
        >();

      counts.set(
        "All",
        hierarchyMatchedProducts.length
      );

      for (
        const product
        of hierarchyMatchedProducts
      ) {
        const brand =
          product.brand ||
          "Others";

        counts.set(
          brand,
          (
            counts.get(
              brand
            ) ?? 0
          ) + 1
        );
      }

      return counts;
    }, [hierarchyMatchedProducts]);

  const filteredProducts =
    useMemo(
      () =>
        hierarchyMatchedProducts.filter(
          (product) =>
            selectedBrand ===
              "All" ||
            (
              selectedBrand ===
                "Others" &&
              !product.brand
            ) ||
            product.brand ===
              selectedBrand
        ),
      [
        hierarchyMatchedProducts,
        selectedBrand
      ]
    );

  const sortedProducts =
    useMemo(
      () =>
        sortProductList(
          filteredProducts,
          selectedSort
        ),
      [
        filteredProducts,
        selectedSort
      ]
    );

  /* =====================================================
     CURRENT CATALOGUE LOCATION
  ===================================================== */
  const selectedDepartmentData =
    selectedDepartment ===
    "all"
      ? null
      : getDepartmentById(
          selectedDepartment
        );

  const currentTitle =
    selectedSubcategory !==
    "All"
      ? selectedSubcategory
      : selectedCategory !==
          "All"
        ? selectedCategory
        : selectedDepartmentData
          ? selectedDepartmentData.label
          : "All Products";

  const currentDescription =
    selectedSubcategory !==
      "All" ||
    selectedCategory !==
      "All"
      ? null
      : selectedDepartmentData
        ? selectedDepartmentData.description
        : "Browse SMT's complete professional product catalogue.";

  const hasActiveRefinements =
    activeSearch.trim() !==
      "" ||
    selectedBrand !== "All";

  /* =====================================================
     PAGINATION
  ===================================================== */
  const totalPages =
    Math.max(
      1,
      Math.ceil(
        sortedProducts.length /
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
      sortedProducts.length >
        0
    ) {
      updateUrl({
        page: totalPages
      });
    }
  }, [
    requestedPage,
    totalPages,
    sortedProducts.length
  ]);

  const pageStart =
    sortedProducts.length ===
    0
      ? 0
      : (
          currentPage - 1
        ) *
          PAGE_SIZE +
        1;

  const pageEnd =
    Math.min(
      currentPage *
        PAGE_SIZE,
      sortedProducts.length
    );

  const paginatedProducts =
    useMemo(() => {
      const start =
        (
          currentPage - 1
        ) * PAGE_SIZE;

      return sortedProducts.slice(
        start,
        start + PAGE_SIZE
      );
    }, [
      sortedProducts,
      currentPage
    ]);

  const paginationItems =
    getPaginationItems(
      currentPage,
      totalPages
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

    window.setTimeout(
      () => {
        const results =
          document.getElementById(
            "catalogue-results"
          );

        if (!results) {
          return;
        }

        const top =
          results
            .getBoundingClientRect()
            .top +
          window.scrollY -
          150;

        window.scrollTo({
          top,
          behavior: "smooth"
        });
      },
      0
    );
  };

  /* =====================================================
     SHARED CATEGORY TREE
  ===================================================== */
  const renderCatalogueTree = (
    closeAfterLeaf = false
  ) => (
    <CatalogueBrowser
      selectedDepartment={
        selectedDepartment
      }
      selectedCategory={
        selectedCategory
      }
      selectedSubcategory={
        selectedSubcategory
      }
      allCategories={
        ALL_CATEGORIES
      }
      departmentTotals={
        departmentTotals
      }
      categoryTotals={
        categoryTotals
      }
      subcategoryTotals={
        subcategoryTotals
      }
      getSubcategories={
        getSubcategories
      }
      onSelectAll={
        selectAllProducts
      }
      onSelectDepartment={
        selectDepartment
      }
      onSelectCategory={
        selectCategory
      }
      onSelectSubcategory={
        selectSubcategory
      }
      onNavigateComplete={
        closeAfterLeaf
          ? () =>
              setMobilePanelOpen(
                false
              )
          : undefined
      }
    />
  );

  return (
    <main className="min-h-screen bg-black">
      {/* =================================================
          COMPACT PAGE HEADER
      ================================================== */}
      <section className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-500">
            SMT Catalogue
          </p>

          <div className="mt-1.5 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Products
              </h1>

              <p className="mt-1.5 max-w-2xl text-sm text-neutral-500">
                Professional tools, hardware, electrical supplies and industrial products.
              </p>
            </div>

            <p className="text-xs text-neutral-600 sm:text-sm">
              <strong className="text-neutral-300">
                {products.length}
              </strong>{" "}
              products ·{" "}
              <strong className="text-neutral-300">
                {ALL_CATEGORIES.length}
              </strong>{" "}
              categories
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          STICKY CATALOGUE TOOLBAR

          --smt-header-offset should be controlled by
          Header.tsx so this moves to the top when the main
          navigation hides.
      ================================================== */}
      <section
        className="sticky z-40 border-b border-neutral-800 bg-black/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-[top] duration-300 ease-out"
        style={{
          top:
            "var(--smt-header-offset, 0px)"
        }}
      >
        <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
            {/* Mobile browse / filter panel */}
            <button
              type="button"
              onClick={() =>
                setMobilePanelOpen(
                  true
                )
              }
              className="col-start-1 row-start-2 flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-3 text-sm font-semibold text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white sm:w-auto lg:hidden"
            >
              <Menu className="h-4 w-4" />
              <span>
                Browse
              </span>
            </button>

            {/* Desktop collapse / expand */}
            <button
              type="button"
              onClick={() =>
                setDesktopPanelOpen(
                  (current) =>
                    !current
                )
              }
              className={`hidden h-11 flex-shrink-0 items-center gap-2 rounded-lg border px-4 text-sm font-semibold transition-colors lg:flex ${
                desktopPanelOpen
                  ? "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-yellow-500 hover:text-white"
                  : "border-yellow-500 bg-yellow-500 text-black"
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              {desktopPanelOpen
                ? "Hide Panel"
                : "Browse & Filter"}
            </button>

            {/* Search */}
            <form
              onSubmit={
                handleSearch
              }
              className="col-span-2 row-start-1 min-w-0 w-full sm:col-auto sm:row-auto sm:flex-1"
            >
              <div className="flex h-11 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 transition-colors focus-within:border-yellow-500">
                <div className="flex items-center pl-3 text-neutral-500">
                  <Search className="h-4 w-4" />
                </div>

                <input
                  type="search"
                  value={searchInput}
                  onChange={(
                    event:
                      ChangeEvent<HTMLInputElement>
                  ) =>
                    setSearchInput(
                      event.target.value
                    )
                  }
                  placeholder="Search products, brands, models..."
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-neutral-500"
                />

                {searchInput && (
                  <button
                    type="button"
                    onClick={
                      clearSearch
                    }
                    aria-label="Clear search"
                    className="hidden px-2 text-neutral-500 transition-colors hover:text-white sm:block"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

                <button
                  type="submit"
                  className="hidden bg-yellow-500 px-4 text-sm font-bold text-black transition-colors hover:bg-yellow-400 sm:block"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Sort */}
            <div className="col-start-2 row-start-2 flex h-11 w-full items-center overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 sm:w-auto">
              <span className="hidden pl-3 text-xs font-semibold text-neutral-500 xl:block">
                Sort:
              </span>

              <select
                value={selectedSort}
                onChange={(
                  event:
                    ChangeEvent<HTMLSelectElement>
                ) =>
                  selectSort(
                    event.target.value as SortKey
                  )
                }
                aria-label="Sort products"
                className="h-full min-w-0 flex-1 bg-transparent px-2 text-xs font-semibold text-neutral-300 outline-none sm:max-w-none sm:flex-none sm:px-3 sm:text-sm"
              >
                {SORT_OPTIONS.map(
                  (option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-neutral-900 text-white"
                    >
                      {option.label}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          MOBILE BROWSE + FILTER DRAWER
      ================================================== */}
      {mobilePanelOpen && (
        <div className="fixed inset-0 z-[95] lg:hidden">
          <button
            type="button"
            aria-label="Close browse and filter panel"
            onClick={() =>
              setMobilePanelOpen(
                false
              )
            }
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <aside className="absolute inset-y-0 left-0 flex w-[92%] max-w-[390px] flex-col border-r border-neutral-700 bg-neutral-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-yellow-500">
                  SMT Catalogue
                </p>
                <h2 className="mt-1 text-lg font-black text-white">
                  Browse & Filter
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setMobilePanelOpen(
                    false
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-700 text-neutral-400 transition-colors hover:border-yellow-500 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5">
              {renderCatalogueTree(
                true
              )}

              <div className="my-7 border-t border-neutral-800" />

              <BrandFilterPanel
                allBrands={ALL_BRANDS}
                brandCounts={brandCounts}
                selectedBrand={selectedBrand}
                onSelectBrand={selectBrand}
              />
            </div>

            <div className="flex gap-3 border-t border-neutral-800 bg-black px-4 py-4">
              <button
                type="button"
                onClick={
                  clearEverything
                }
                className="h-11 flex-1 rounded-md border border-neutral-700 text-sm font-semibold text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={() =>
                  setMobilePanelOpen(
                    false
                  )
                }
                className="h-11 flex-[1.5] rounded-md bg-yellow-500 px-4 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
              >
                Show {sortedProducts.length} Products
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* =================================================
          CATALOGUE CONTENT
      ================================================== */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div
            className={
              desktopPanelOpen
                ? "grid gap-7 lg:grid-cols-[290px_minmax(0,1fr)] xl:grid-cols-[310px_minmax(0,1fr)] xl:gap-8"
                : "grid"
            }
          >
            {/* ===========================================
                DESKTOP BROWSE + FILTER PANEL
            ============================================ */}
            {desktopPanelOpen && (
              <aside className="hidden lg:block">
                <div
                  className="sticky overflow-y-auto overscroll-contain rounded-xl border border-neutral-800/80 bg-neutral-950/90 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-[top] duration-300 ease-out"
                  style={{
                    top:
                      "calc(var(--smt-header-offset, 0px) + 76px)",
                    maxHeight:
                      "calc(100vh - var(--smt-header-offset, 0px) - 92px)"
                  }}
                >
                  {renderCatalogueTree()}

                  <div className="my-6 border-t border-neutral-800" />

                  <BrandFilterPanel
                    allBrands={ALL_BRANDS}
                    brandCounts={brandCounts}
                    selectedBrand={selectedBrand}
                    desktop
                    onSelectBrand={selectBrand}
                    onCollapse={() =>
                      setDesktopPanelOpen(
                        false
                      )
                    }
                  />
                </div>
              </aside>
            )}

            {/* ===========================================
                PRODUCT RESULTS
            ============================================ */}
            <div
              id="catalogue-results"
              className="min-w-0 scroll-mt-40"
            >
              {/* =========================================
                  BREADCRUMB / LOCATION
              ========================================== */}
              <div className="mb-6 border-b border-neutral-800/80 pb-5">
                <nav
                  aria-label="Catalogue breadcrumb"
                  className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-neutral-500"
                >
                  <button
                    type="button"
                    onClick={
                      selectAllProducts
                    }
                    className={`transition-colors hover:text-yellow-500 ${
                      selectedDepartment ===
                      "all"
                        ? "text-neutral-300"
                        : ""
                    }`}
                  >
                    Products
                  </button>

                  {selectedDepartmentData && (
                    <>
                      <ChevronRight className="h-3 w-3 text-neutral-800" />
                      <button
                        type="button"
                        onClick={() =>
                          selectDepartment(
                            selectedDepartment
                          )
                        }
                        className={`transition-colors hover:text-yellow-500 ${
                          selectedCategory ===
                          "All"
                            ? "text-neutral-300"
                            : ""
                        }`}
                      >
                        {selectedDepartmentData.label}
                      </button>
                    </>
                  )}

                  {selectedCategory !==
                    "All" && (
                    <>
                      <ChevronRight className="h-3 w-3 text-neutral-800" />
                      <button
                        type="button"
                        onClick={() =>
                          selectCategory(
                            selectedCategory
                          )
                        }
                        className={`transition-colors hover:text-yellow-500 ${
                          selectedSubcategory ===
                          "All"
                            ? "text-neutral-300"
                            : ""
                        }`}
                      >
                        {selectedCategory}
                      </button>
                    </>
                  )}

                  {selectedSubcategory !==
                    "All" && (
                    <>
                      <ChevronRight className="h-3 w-3 text-neutral-800" />
                      <span className="text-neutral-300">
                        {selectedSubcategory}
                      </span>
                    </>
                  )}
                </nav>

                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-black tracking-[-0.02em] text-white sm:text-3xl">
                      {currentTitle}
                    </h2>

                    {currentDescription && (
                      <p className="mt-1.5 max-w-2xl text-sm leading-6 text-neutral-500">
                        {currentDescription}
                      </p>
                    )}
                  </div>

                  <p className="flex-shrink-0 text-sm text-neutral-500">
                    <strong className="text-white">
                      {sortedProducts.length}
                    </strong>{" "}
                    {sortedProducts.length ===
                    1
                      ? "product"
                      : "products"}
                  </p>
                </div>

                {/* Search / brand are refinements, not category chips. */}
                {hasActiveRefinements && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="mr-1 text-xs font-semibold uppercase tracking-[0.1em] text-neutral-600">
                      Filters
                    </span>

                    {activeSearch.trim() && (
                      <button
                        type="button"
                        onClick={
                          clearSearch
                        }
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white"
                      >
                        “{activeSearch}”
                        <X className="h-3 w-3" />
                      </button>
                    )}

                    {selectedBrand !==
                      "All" && (
                      <button
                        type="button"
                        onClick={() =>
                          selectBrand(
                            "All"
                          )
                        }
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white"
                      >
                        {selectedBrand}
                        <X className="h-3 w-3" />
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={
                        clearRefinements
                      }
                      className="ml-1 text-xs font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>

              {/* =========================================
                  RESULT RANGE
              ========================================== */}
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-xs text-neutral-600 sm:text-sm">
                  {sortedProducts.length >
                  0
                    ? `Showing ${pageStart}–${pageEnd} of ${sortedProducts.length}`
                    : "No matching products"}
                </p>

                {totalPages > 1 && (
                  <p className="text-xs text-neutral-600">
                    Page {currentPage} of {totalPages}
                  </p>
                )}
              </div>

              {/* =========================================
                  PRODUCT GRID
              ========================================== */}
              {sortedProducts.length >
              0 ? (
                <>
                  <div
                    className="grid gap-4 md:gap-5"
                    style={{
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(240px, 1fr))"
                    }}
                  >
                    {paginatedProducts.map(
                      (product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          returnTo={
                            catalogueReturnUrl
                          }
                        />
                      )
                    )}
                  </div>

                  {/* =====================================
                      PAGINATION
                  ====================================== */}
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
                            {sortedProducts.length}
                          </span>
                        </p>

                        <div>
                          {/* =====================================
                              MOBILE PAGINATION

                              Keep this deliberately compact.
                              Numbered pagination does not scale
                              well on narrow screens.
                          ====================================== */}
                          <div className="grid grid-cols-[42px_minmax(0,1fr)_42px] items-center gap-2 sm:hidden">
                            <button
                              type="button"
                              onClick={() =>
                                goToPage(
                                  currentPage -
                                    1
                                )
                              }
                              disabled={
                                currentPage ===
                                1
                              }
                              aria-label="Previous page"
                              className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 text-neutral-400 transition-colors hover:border-yellow-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>

                            <div className="min-w-0 text-center">
                              <p className="text-sm font-semibold text-neutral-300">
                                Page {currentPage} of {totalPages}
                              </p>

                              <p className="mt-0.5 truncate text-[11px] text-neutral-600">
                                {pageStart}–{pageEnd} of{" "}
                                {sortedProducts.length}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                goToPage(
                                  currentPage +
                                    1
                                )
                              }
                              disabled={
                                currentPage ===
                                totalPages
                              }
                              aria-label="Next page"
                              className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 text-neutral-400 transition-colors hover:border-yellow-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>

                          {/* =====================================
                              TABLET / DESKTOP PAGINATION
                          ====================================== */}
                          <div className="hidden items-center gap-1.5 sm:flex">
                            <button
                              type="button"
                              onClick={() =>
                                goToPage(
                                  currentPage -
                                    1
                                )
                              }
                              disabled={
                                currentPage ===
                                1
                              }
                              aria-label="Previous page"
                              className="flex h-10 items-center gap-1 rounded-md border border-neutral-800 px-3 text-sm font-medium text-neutral-400 transition-colors hover:border-yellow-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
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
                                      goToPage(
                                        item
                                      )
                                    }
                                    aria-current={
                                      isCurrent
                                        ? "page"
                                        : undefined
                                    }
                                    className={`flex h-10 min-w-10 items-center justify-center rounded-md border px-2 text-sm font-semibold transition-colors ${
                                      isCurrent
                                        ? "border-yellow-500 bg-yellow-500 text-black"
                                        : "border-neutral-800 text-neutral-400 hover:border-yellow-500 hover:text-white"
                                    }`}
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
                                  currentPage +
                                    1
                                )
                              }
                              disabled={
                                currentPage ===
                                totalPages
                              }
                              aria-label="Next page"
                              className="flex h-10 items-center gap-1 rounded-md border border-neutral-800 px-3 text-sm font-medium text-neutral-400 transition-colors hover:border-yellow-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              <span className="hidden md:inline">
                                Next
                              </span>
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </nav>
                  )}
                </>
              ) : (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-neutral-800 bg-neutral-950 px-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-neutral-500">
                    <PackageSearch className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    No products found
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                    Try another category, remove a brand filter, or change your search.
                  </p>

                  <button
                    type="button"
                    onClick={
                      clearEverything
                    }
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
