import {
  useEffect,
  useMemo,
  useState
} from "react";

import {
  ChevronRight
} from "lucide-react";

import {
  catalogueDepartments,
  getCategoriesForDepartment,
  getDepartmentIdForCategory
} from "@/data/catalogueTaxonomy";

interface CatalogueBrowserProps {
  selectedDepartment: string;
  selectedCategory: string;
  selectedSubcategory: string;
  allCategories: string[];
  departmentTotals: Map<string, number>;
  categoryTotals: Map<string, number>;
  subcategoryTotals: Map<string, number>;
  getSubcategories: (
    category: string
  ) => string[];
  onSelectAll: () => void;
  onSelectDepartment: (
    departmentId: string
  ) => void;
  onSelectCategory: (
    category: string
  ) => void;
  onSelectSubcategory: (
    category: string,
    subcategory: string
  ) => void;
  onNavigateComplete?: () => void;
}

export default function CatalogueBrowser({
  selectedDepartment,
  selectedCategory,
  selectedSubcategory,
  allCategories,
  departmentTotals,
  categoryTotals,
  subcategoryTotals,
  getSubcategories,
  onSelectAll,
  onSelectDepartment,
  onSelectCategory,
  onSelectSubcategory,
  onNavigateComplete
}: CatalogueBrowserProps) {
  const [expandedDepartment, setExpandedDepartment] =
    useState<string | null>(
      selectedDepartment !== "all"
        ? selectedDepartment
        : null
    );

  const [expandedCategory, setExpandedCategory] =
    useState<string | null>(
      selectedCategory !== "All"
        ? selectedCategory
        : null
    );

  /*
    Keep the visible tree aligned with the URL state.
    This matters when the user uses browser Back/Forward,
    opens a saved catalogue URL, or removes breadcrumbs.
  */
  useEffect(() => {
    if (
      selectedDepartment === "all"
    ) {
      setExpandedDepartment(null);
      setExpandedCategory(null);
      return;
    }

    setExpandedDepartment(
      selectedDepartment
    );

    if (
      selectedCategory !== "All"
    ) {
      setExpandedCategory(
        selectedCategory
      );
    } else {
      setExpandedCategory(null);
    }
  }, [
    selectedDepartment,
    selectedCategory
  ]);

  const departmentCategories =
    useMemo(() => {
      const result =
        new Map<
          string,
          string[]
        >();

      for (
        const department
        of catalogueDepartments
      ) {
        const categories =
          getCategoriesForDepartment(
            department.id,
            allCategories
          ).filter(
            (category) =>
              (
                categoryTotals.get(
                  category
                ) ?? 0
              ) > 0 ||
              selectedCategory ===
                category
          );

        result.set(
          department.id,
          categories
        );
      }

      return result;
    }, [
      allCategories,
      categoryTotals,
      selectedCategory
    ]);

  const chooseAll = () => {
    setExpandedDepartment(null);
    setExpandedCategory(null);
    onSelectAll();
  };

  const chooseDepartment = (
    departmentId: string
  ) => {
    setExpandedDepartment(
      departmentId
    );
    setExpandedCategory(null);
    onSelectDepartment(
      departmentId
    );
  };

  const chooseCategory = (
    category: string
  ) => {
    const children =
      getSubcategories(
        category
      );

    setExpandedDepartment(
      getDepartmentIdForCategory(
        category
      )
    );

    setExpandedCategory(
      children.length > 0
        ? category
        : null
    );

    onSelectCategory(
      category
    );

    if (
      children.length === 0 &&
      onNavigateComplete
    ) {
      onNavigateComplete();
    }
  };

  const chooseSubcategory = (
    category: string,
    subcategory: string
  ) => {
    setExpandedDepartment(
      getDepartmentIdForCategory(
        category
      )
    );
    setExpandedCategory(
      category
    );

    onSelectSubcategory(
      category,
      subcategory
    );

    if (
      onNavigateComplete
    ) {
      onNavigateComplete();
    }
  };

  const allProductsSelected =
    selectedDepartment === "all" &&
    selectedCategory === "All" &&
    selectedSubcategory === "All";

  return (
    <section>
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-500">
          Browse Catalogue
        </p>

        <p className="mt-1.5 text-xs leading-5 text-neutral-500">
          Department → category → subcategory
        </p>
      </div>

      <nav
        aria-label="Product categories"
        className="space-y-1.5"
      >
        {/* =================================================
            ALL PRODUCTS
        ================================================== */}
        <button
          type="button"
          onClick={chooseAll}
          className={`relative flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-all ${
            allProductsSelected
              ? "border-yellow-500/30 bg-yellow-500/[0.08] font-semibold text-yellow-500"
              : "border-neutral-800 bg-black/20 text-neutral-400 hover:border-neutral-700 hover:bg-neutral-900 hover:text-white"
          }`}
        >
          {allProductsSelected && (
            <span className="absolute inset-y-2.5 left-0 w-0.5 rounded-full bg-yellow-500" />
          )}

          <span>
            All Products
          </span>

          <span className="flex-shrink-0 text-[11px] tabular-nums text-neutral-600">
            {departmentTotals.get(
              "all"
            ) ?? 0}
          </span>
        </button>

        {/* =================================================
            DEPARTMENTS
        ================================================== */}
        <div className="space-y-0.5 pt-2">
          {catalogueDepartments
            .filter(
              (department) =>
                (
                  departmentTotals.get(
                    department.id
                  ) ?? 0
                ) > 0 ||
                selectedDepartment ===
                  department.id
            )
            .map(
              (department) => {
                const departmentCount =
                  departmentTotals.get(
                    department.id
                  ) ?? 0;

                const isExpanded =
                  expandedDepartment ===
                  department.id;

                const isDepartmentSelected =
                  selectedDepartment ===
                    department.id &&
                  selectedCategory ===
                    "All";

                const hasSelectedDescendant =
                  selectedDepartment ===
                    department.id &&
                  selectedCategory !==
                    "All";

                const categories =
                  departmentCategories.get(
                    department.id
                  ) ?? [];

                return (
                  <div
                    key={department.id}
                    className="mb-1"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        chooseDepartment(
                          department.id
                        )
                      }
                      aria-expanded={
                        categories.length > 0
                          ? isExpanded
                          : undefined
                      }
                      className={`relative flex min-h-11 w-full items-center gap-2 rounded-lg px-2.5 py-2.5 text-left text-sm transition-all ${
                        isDepartmentSelected
                          ? "bg-neutral-900 font-semibold text-yellow-500"
                          : hasSelectedDescendant || isExpanded
                            ? "bg-neutral-900/55 font-semibold text-white"
                            : "font-medium text-neutral-300 hover:bg-neutral-900/70 hover:text-white"
                      }`}
                    >
                      {isDepartmentSelected && (
                        <span className="absolute inset-y-2.5 left-0 w-0.5 rounded-full bg-yellow-500" />
                      )}

                      <ChevronRight
                        className={`h-4 w-4 flex-shrink-0 text-neutral-600 transition-transform duration-200 ${
                          isExpanded
                            ? "rotate-90 text-yellow-500"
                            : ""
                        }`}
                      />

                      <span className="min-w-0 flex-1 truncate">
                        {department.label}
                      </span>

                      <span className="flex-shrink-0 text-[11px] font-normal tabular-nums text-neutral-600">
                        {departmentCount}
                      </span>
                    </button>

                    {/* =====================================
                        CATEGORY LEVEL
                    ====================================== */}
                    {isExpanded &&
                      categories.length > 0 && (
                        <div className="relative ml-[18px] border-l border-neutral-800/90 pl-2.5">
                          {categories.map(
                            (category) => {
                              const children =
                                getSubcategories(
                                  category
                                );

                              const hasChildren =
                                children.length > 0;

                              const categoryExpanded =
                                expandedCategory ===
                                category;

                              const categorySelected =
                                selectedCategory ===
                                  category &&
                                selectedSubcategory ===
                                  "All";

                              const hasSelectedChild =
                                selectedCategory ===
                                  category &&
                                selectedSubcategory !==
                                  "All";

                              const count =
                                categoryTotals.get(
                                  category
                                ) ?? 0;

                              return (
                                <div
                                  key={category}
                                  className="relative"
                                >
                                  <button
                                    type="button"
                                    onClick={() =>
                                      chooseCategory(
                                        category
                                      )
                                    }
                                    aria-expanded={
                                      hasChildren
                                        ? categoryExpanded
                                        : undefined
                                    }
                                    className={`relative flex w-full items-center gap-2 rounded-r-md py-2 pl-3 pr-2.5 text-left text-sm transition-all ${
                                      categorySelected
                                        ? "bg-neutral-900/90 font-semibold text-yellow-500"
                                        : hasSelectedChild || categoryExpanded
                                          ? "bg-neutral-900/35 font-medium text-white"
                                          : "text-neutral-400 hover:bg-neutral-900/60 hover:text-white"
                                    }`}
                                  >
                                    <span className="absolute -left-[9px] top-1/2 h-px w-3 bg-neutral-800" />

                                    {hasChildren ? (
                                      <ChevronRight
                                        className={`h-3.5 w-3.5 flex-shrink-0 text-neutral-600 transition-transform duration-200 ${
                                          categoryExpanded
                                            ? "rotate-90 text-yellow-500"
                                            : ""
                                        }`}
                                      />
                                    ) : (
                                      <span className="ml-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700" />
                                    )}

                                    <span className="min-w-0 flex-1">
                                      {category}
                                    </span>

                                    <span className="flex-shrink-0 text-[11px] font-normal tabular-nums text-neutral-600">
                                      {count}
                                    </span>
                                  </button>

                                  {/* =========================
                                      SUBCATEGORY LEVEL
                                  ========================== */}
                                  {hasChildren &&
                                    categoryExpanded && (
                                      <div className="relative ml-[18px] border-l border-neutral-800/70 pl-2.5">
                                        {children.map(
                                          (subcategory) => {
                                            const selected =
                                              selectedCategory ===
                                                category &&
                                              selectedSubcategory ===
                                                subcategory;

                                            const key =
                                              `${category}|||${subcategory}`;

                                            const subcategoryCount =
                                              subcategoryTotals.get(
                                                key
                                              ) ?? 0;

                                            return (
                                              <button
                                                key={subcategory}
                                                type="button"
                                                onClick={() =>
                                                  chooseSubcategory(
                                                    category,
                                                    subcategory
                                                  )
                                                }
                                                aria-current={
                                                  selected
                                                    ? "page"
                                                    : undefined
                                                }
                                                className={`relative flex w-full items-center gap-2 rounded-r-md py-1.5 pl-3 pr-2.5 text-left text-[13px] transition-all ${
                                                  selected
                                                    ? "bg-neutral-900/90 font-semibold text-yellow-500"
                                                    : "text-neutral-500 hover:bg-neutral-900/60 hover:text-white"
                                                }`}
                                              >
                                                <span className="absolute -left-[9px] top-1/2 h-px w-3 bg-neutral-800" />

                                                <span
                                                  className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                                                    selected
                                                      ? "bg-yellow-500"
                                                      : "bg-neutral-700"
                                                  }`}
                                                />

                                                <span className="min-w-0 flex-1">
                                                  {subcategory}
                                                </span>

                                                <span className="flex-shrink-0 text-[11px] font-normal tabular-nums text-neutral-700">
                                                  {subcategoryCount}
                                                </span>
                                              </button>
                                            );
                                          }
                                        )}
                                      </div>
                                    )}
                                </div>
                              );
                            }
                          )}
                        </div>
                      )}
                  </div>
                );
              }
            )}
        </div>
      </nav>
    </section>
  );
}
