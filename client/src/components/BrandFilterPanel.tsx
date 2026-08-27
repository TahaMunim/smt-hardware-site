import {
  useMemo,
  useState,
  type ChangeEvent
} from "react";

import {
  ChevronDown,
  ChevronUp,
  PanelLeftClose,
  Search
} from "lucide-react";

const FEATURED_BRANDS = [
  "STANLEY",
  "DONGCHENG",
  "TUF-FIX",
  "DEWALT",
  "RELITE",
  "SIKA",
  "SPIT",
  "RIDGID"
];

interface BrandFilterPanelProps {
  allBrands: string[];
  brandCounts: Map<string, number>;
  selectedBrand: string;
  desktop?: boolean;
  onSelectBrand: (
    brand: string
  ) => void;
  onCollapse?: () => void;
}

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

export default function BrandFilterPanel({
  allBrands,
  brandCounts,
  selectedBrand,
  desktop = false,
  onSelectBrand,
  onCollapse
}: BrandFilterPanelProps) {
  const [brandSearch, setBrandSearch] =
    useState("");

  const [showAllBrands, setShowAllBrands] =
    useState(false);

  const availableBrands = useMemo(
    () =>
      [
        ...allBrands,
        "Others"
      ].filter(
        (brand) =>
          (brandCounts.get(
            brand
          ) ?? 0) > 0 ||
          brand === selectedBrand
      ),
    [
      allBrands,
      brandCounts,
      selectedBrand
    ]
  );

  const collapsedBrands = useMemo(() => {
    const featured =
      FEATURED_BRANDS.filter(
        (brand) =>
          availableBrands.includes(
            brand
          )
      );

    const remainder =
      availableBrands
        .filter(
          (brand) =>
            !featured.includes(
              brand
            )
        )
        .sort((a, b) => {
          const countDifference =
            (brandCounts.get(b) ?? 0) -
            (brandCounts.get(a) ?? 0);

          return countDifference !== 0
            ? countDifference
            : compareText(a, b);
        });

    const result = [
      ...featured,
      ...remainder
    ].slice(0, 8);

    if (
      selectedBrand !== "All" &&
      !result.includes(
        selectedBrand
      ) &&
      result.length > 0
    ) {
      result[
        result.length - 1
      ] = selectedBrand;
    }

    return Array.from(
      new Set(result)
    );
  }, [
    availableBrands,
    brandCounts,
    selectedBrand
  ]);

  const displayedBrands = useMemo(() => {
    const query = brandSearch
      .trim()
      .toLowerCase();

    if (query) {
      return availableBrands.filter(
        (brand) =>
          brand
            .toLowerCase()
            .includes(query)
      );
    }

    return showAllBrands
      ? availableBrands
      : collapsedBrands;
  }, [
    availableBrands,
    brandSearch,
    showAllBrands,
    collapsedBrands
  ]);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
            Filter Results
          </p>

          <h2 className="mt-1 text-base font-bold text-white">
            Brand
          </h2>
        </div>

        {selectedBrand !== "All" && (
          <button
            type="button"
            onClick={() =>
              onSelectBrand("All")
            }
            className="text-xs font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
          >
            Clear
          </button>
        )}
      </div>

      <div className="relative mb-3">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600" />

        <input
          type="search"
          value={brandSearch}
          onChange={(
            event: ChangeEvent<HTMLInputElement>
          ) =>
            setBrandSearch(
              event.target.value
            )
          }
          placeholder="Search brands..."
          className="h-10 w-full rounded-md border border-neutral-800 bg-black pl-9 pr-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-800 bg-black">
        <button
          type="button"
          onClick={() =>
            onSelectBrand("All")
          }
          className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
            selectedBrand === "All"
              ? "bg-yellow-500 font-semibold text-black"
              : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
          }`}
        >
          <span>All Brands</span>
          <span className="text-xs opacity-60">
            {brandCounts.get("All") ?? 0}
          </span>
        </button>

        {displayedBrands.length > 0 ? (
          displayedBrands.map(
            (brand) => {
              const count =
                brandCounts.get(
                  brand
                ) ?? 0;

              const selected =
                selectedBrand ===
                brand;

              return (
                <button
                  key={brand}
                  type="button"
                  onClick={() =>
                    onSelectBrand(
                      brand
                    )
                  }
                  className={`flex w-full items-center justify-between gap-3 border-t border-neutral-800 px-3 py-2.5 text-left text-sm transition-colors ${
                    selected
                      ? "bg-yellow-500 font-semibold text-black"
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                  }`}
                >
                  <span className="min-w-0 truncate">
                    {brand}
                  </span>

                  <span className="flex-shrink-0 text-xs opacity-60">
                    {count}
                  </span>
                </button>
              );
            }
          )
        ) : (
          <p className="border-t border-neutral-800 px-3 py-4 text-sm text-neutral-600">
            No matching brands.
          </p>
        )}
      </div>

      {!brandSearch.trim() &&
        availableBrands.length > 8 && (
          <button
            type="button"
            onClick={() =>
              setShowAllBrands(
                (current) => !current
              )
            }
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-neutral-800 px-3 py-2.5 text-xs font-semibold text-neutral-400 transition-colors hover:border-yellow-500 hover:text-white"
          >
            {showAllBrands ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show fewer brands
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show all brands
              </>
            )}
          </button>
        )}

      {desktop && onCollapse && (
        <button
          type="button"
          onClick={onCollapse}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-neutral-800 px-3 py-2.5 text-xs font-semibold text-neutral-500 transition-colors hover:border-yellow-500 hover:text-white"
        >
          <PanelLeftClose className="h-4 w-4" />
          Collapse Filters
        </button>
      )}
    </div>
  );
}
