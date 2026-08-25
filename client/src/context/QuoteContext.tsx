import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from "react";


const STORAGE_KEY = "smt-quote-list-v1";
const MAX_QUANTITY = 9999;

export interface QuoteItem {
  productId: string;
  quantity: number;
}

interface QuoteContextValue {
  items: QuoteItem[];
  uniqueCount: number;
  totalQuantity: number;
  addProduct: (
    productId: string,
    quantity?: number
  ) => void;
  setQuantity: (
    productId: string,
    quantity: number
  ) => void;
  removeProduct: (
    productId: string
  ) => void;
  clearQuote: () => void;
  getQuantity: (
    productId: string
  ) => number;
  hasProduct: (
    productId: string
  ) => boolean;
}

const QuoteContext =
  createContext<QuoteContextValue | null>(
    null
  );

function normalizeQuantity(
  quantity: number
) {
  if (!Number.isFinite(quantity)) {
    return 1;
  }

  return Math.min(
    MAX_QUANTITY,
    Math.max(
      1,
      Math.floor(quantity)
    )
  );
}

function readStoredQuote(): QuoteItem[] {
  if (
    typeof window === "undefined"
  ) {
    return [];
  }

  try {
    const raw =
      window.localStorage.getItem(
        STORAGE_KEY
      );

    if (!raw) {
      return [];
    }

    const parsed: unknown =
      JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    const merged = new Map<
      string,
      number
    >();

    for (const item of parsed) {
      if (
        typeof item !== "object" ||
        item === null
      ) {
        continue;
      }

      const candidate = item as {
        productId?: unknown;
        quantity?: unknown;
      };

      if (
        typeof candidate.productId !==
          "string" ||
        !candidate.productId.trim()
      ) {
        continue;
      }

      const quantity =
        typeof candidate.quantity ===
        "number"
          ? normalizeQuantity(
              candidate.quantity
            )
          : 1;

      const existing =
        merged.get(
          candidate.productId
        ) ?? 0;

      merged.set(
        candidate.productId,
        normalizeQuantity(
          existing + quantity
        )
      );
    }

    return Array.from(
      merged.entries()
    ).map(
      ([productId, quantity]) => ({
        productId,
        quantity
      })
    );
  } catch {
    return [];
  }
}

export function QuoteProvider({
  children
}: {
  children: ReactNode;
}) {
  const [items, setItems] =
    useState<QuoteItem[]>(
      readStoredQuote
    );

  const persist = useCallback(
    (nextItems: QuoteItem[]) => {
      setItems(nextItems);

      if (
        typeof window === "undefined"
      ) {
        return;
      }

      try {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(nextItems)
        );
      } catch {
        // The quote still works for the current
        // session even if storage is unavailable.
      }
    },
    []
  );

  const addProduct = useCallback(
    (
      productId: string,
      quantity = 1
    ) => {
      if (!productId.trim()) {
        return;
      }

      const amount =
        normalizeQuantity(quantity);

      setItems((current) => {
        const existing =
          current.find(
            (item) =>
              item.productId ===
              productId
          );

        const next = existing
          ? current.map((item) =>
              item.productId ===
              productId
                ? {
                    ...item,
                    quantity:
                      normalizeQuantity(
                        item.quantity +
                          amount
                      )
                  }
                : item
            )
          : [
              ...current,
              {
                productId,
                quantity: amount
              }
            ];

        try {
          window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(next)
          );
        } catch {
          // Keep the in-memory state.
        }

        return next;
      });
    },
    []
  );

  const setQuantity = useCallback(
    (
      productId: string,
      quantity: number
    ) => {
      if (!productId.trim()) {
        return;
      }

      if (
        !Number.isFinite(quantity) ||
        quantity <= 0
      ) {
        setItems((current) => {
          const next = current.filter(
            (item) =>
              item.productId !==
              productId
          );

          try {
            window.localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify(next)
            );
          } catch {
            // Keep the in-memory state.
          }

          return next;
        });

        return;
      }

      const normalized =
        normalizeQuantity(quantity);

      setItems((current) => {
        const exists = current.some(
          (item) =>
            item.productId ===
            productId
        );

        const next = exists
          ? current.map((item) =>
              item.productId ===
              productId
                ? {
                    ...item,
                    quantity: normalized
                  }
                : item
            )
          : [
              ...current,
              {
                productId,
                quantity: normalized
              }
            ];

        try {
          window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(next)
          );
        } catch {
          // Keep the in-memory state.
        }

        return next;
      });
    },
    []
  );

  const removeProduct = useCallback(
    (productId: string) => {
      setItems((current) => {
        const next = current.filter(
          (item) =>
            item.productId !==
            productId
        );

        try {
          window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(next)
          );
        } catch {
          // Keep the in-memory state.
        }

        return next;
      });
    },
    []
  );

  const clearQuote = useCallback(() => {
    persist([]);
  }, [persist]);

  const getQuantity = useCallback(
    (productId: string) =>
      items.find(
        (item) =>
          item.productId ===
          productId
      )?.quantity ?? 0,
    [items]
  );

  const hasProduct = useCallback(
    (productId: string) =>
      items.some(
        (item) =>
          item.productId ===
          productId
      ),
    [items]
  );

  const totalQuantity = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + item.quantity,
        0
      ),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      uniqueCount: items.length,
      totalQuantity,
      addProduct,
      setQuantity,
      removeProduct,
      clearQuote,
      getQuantity,
      hasProduct
    }),
    [
      items,
      totalQuantity,
      addProduct,
      setQuantity,
      removeProduct,
      clearQuote,
      getQuantity,
      hasProduct
    ]
  );

  return (
    <QuoteContext.Provider
      value={value}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context =
    useContext(QuoteContext);

  if (!context) {
    throw new Error(
      "useQuote must be used inside QuoteProvider"
    );
  }

  return context;
}