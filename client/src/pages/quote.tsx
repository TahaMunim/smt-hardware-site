import {
  useMemo,
  useState
} from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Minus,
  Package,
  Plus,
  Trash2
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { products } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";

const WHATSAPP_NUMBER = "971503821352";

const PRODUCT_MAP = new Map(
  products.map((product) => [
    String(product.id),
    product
  ])
);

function QuoteProductImage({
  images,
  name
}: {
  images: string[];
  name: string;
}) {
  const [failed, setFailed] =
    useState(false);

  const image = images.find(Boolean);

  if (!image || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-neutral-100">
        <Package className="h-8 w-8 text-neutral-400" />
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={name}
      className="h-full w-full object-contain p-2"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Quote() {
  const {
    items,
    uniqueCount,
    totalQuantity,
    setQuantity,
    removeProduct,
    clearQuote
  } = useQuote();

  const [name, setName] =
    useState("");
  const [company, setCompany] =
    useState("");
  const [projectReference, setProjectReference] =
    useState("");
  const [notes, setNotes] =
    useState("");

  const quoteItems = useMemo(
    () =>
      items
        .map((item) => {
          const product =
            PRODUCT_MAP.get(
              item.productId
            );

          if (!product) {
            return null;
          }

          return {
            ...item,
            product
          };
        })
        .filter(
          (
            item
          ): item is NonNullable<
            typeof item
          > => Boolean(item)
        ),
    [items]
  );

  const buildMessage = () => {
    const lines: string[] = [
      "Hello SMT, I would like to request a quotation for the following products:",
      ""
    ];

    quoteItems.forEach(
      ({ product, quantity }, index) => {
        lines.push(
          `${index + 1}. ${product.brand} - ${product.name}`
        );

        if (product.model) {
          lines.push(
            `   Model: ${product.model}`
          );
        }

        if (product.sku) {
          lines.push(
            `   SKU: ${product.sku}`
          );
        }

        lines.push(
          `   Qty: ${quantity}`,
          ""
        );
      }
    );

    if (
      name.trim() ||
      company.trim() ||
      projectReference.trim()
    ) {
      lines.push("Customer details:");

      if (name.trim()) {
        lines.push(
          `Name: ${name.trim()}`
        );
      }

      if (company.trim()) {
        lines.push(
          `Company: ${company.trim()}`
        );
      }

      if (projectReference.trim()) {
        lines.push(
          `Project / Reference: ${projectReference.trim()}`
        );
      }

      lines.push("");
    }

    if (notes.trim()) {
      lines.push(
        "Additional notes:",
        notes.trim(),
        ""
      );
    }

    lines.push(
      "Please provide your best pricing and current availability. Thank you."
    );

    return lines.join("\n");
  };

  const sendViaWhatsApp = () => {
    if (quoteItems.length === 0) {
      return;
    }

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        buildMessage()
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleClearQuote = () => {
    if (items.length === 0) {
      return;
    }

    const confirmed =
      window.confirm(
        "Remove all products from your quote list?"
      );

    if (confirmed) {
      clearQuote();
    }
  };

  if (quoteItems.length === 0) {
    return (
      <main className="min-h-screen bg-black pt-20">
        <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
            <ClipboardList className="h-8 w-8" />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-yellow-500">
            Quote List
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Your Quote List Is Empty
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-neutral-400">
            Add products from the catalogue, then return here to set quantities and send the complete list to SMT through WhatsApp.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-yellow-500 px-6 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
          >
            Browse Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-20">
      <section className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 transition-colors hover:text-yellow-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Browsing
          </Link>

          <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-500">
                Request for Quotation
              </p>

              <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Quote List
              </h1>

              <p className="mt-3 text-neutral-400">
                {uniqueCount} {uniqueCount === 1 ? "product" : "products"} · {totalQuantity} total {totalQuantity === 1 ? "unit" : "units"}
              </p>
            </div>

            <button
              type="button"
              onClick={handleClearQuote}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-neutral-700 px-4 text-sm font-semibold text-neutral-400 transition-colors hover:border-red-500/60 hover:text-red-400"
            >
              <Trash2 className="h-4 w-4" />
              Clear List
            </button>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.45fr_0.75fr] lg:items-start">
          <div className="space-y-3">
            {quoteItems.map(
              ({ product, quantity }) => (
                <article
                  key={product.id}
                  className="grid grid-cols-[88px_1fr] gap-4 rounded-lg border border-neutral-800 bg-neutral-950 p-4 sm:grid-cols-[110px_1fr_auto] sm:items-center"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="h-[88px] overflow-hidden rounded-md bg-white sm:h-[100px]"
                  >
                    <QuoteProductImage
                      images={product.image ?? []}
                      name={product.name}
                    />
                  </Link>

                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-yellow-500">
                      {product.brand}
                    </p>

                    <Link href={`/product/${product.id}`}>
                      <h2 className="mt-1 line-clamp-2 font-semibold text-white transition-colors hover:text-yellow-500 sm:text-lg">
                        {product.name}
                      </h2>
                    </Link>

                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500">
                      {product.model && (
                        <span>
                          Model: {product.model}
                        </span>
                      )}

                      {product.sku && (
                        <span>
                          SKU: {product.sku}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeProduct(
                          product.id
                        )
                      }
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-red-400 sm:hidden"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Remove
                    </button>
                  </div>

                  <div className="col-span-2 flex items-center justify-between gap-4 border-t border-neutral-800 pt-4 sm:col-span-1 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:text-right">
                        Quantity
                      </p>

                      <div className="flex h-10 items-center overflow-hidden rounded-md border border-neutral-700 bg-black">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(
                              product.id,
                              quantity - 1
                            )
                          }
                          aria-label={`Decrease ${product.name} quantity`}
                          className="flex h-full w-10 items-center justify-center text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-yellow-500"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <input
                          type="number"
                          min={1}
                          max={9999}
                          value={quantity}
                          onChange={(event) => {
                            const next =
                              Number(
                                event.target.value
                              );

                            if (
                              Number.isFinite(next) &&
                              next >= 1
                            ) {
                              setQuantity(
                                product.id,
                                next
                              );
                            }
                          }}
                          aria-label={`${product.name} quantity`}
                          className="h-full w-14 border-x border-neutral-800 bg-black text-center text-sm font-bold text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(
                              product.id,
                              quantity + 1
                            )
                          }
                          aria-label={`Increase ${product.name} quantity`}
                          className="flex h-full w-10 items-center justify-center text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-yellow-500"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeProduct(
                          product.id
                        )
                      }
                      className="hidden items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-red-400 sm:inline-flex"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Remove
                    </button>
                  </div>
                </article>
              )
            )}
          </div>

          <aside className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 lg:sticky lg:top-24 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-yellow-500 text-black">
                <ClipboardList className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-white">
                  Send RFQ to SMT
                </h2>
                <p className="text-xs text-neutral-500">
                  Optional customer details
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold text-neutral-400">
                  Name
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(
                      event.target.value
                    )
                  }
                  placeholder="Your name"
                  className="h-11 w-full rounded-md border border-neutral-700 bg-black px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold text-neutral-400">
                  Company
                </span>
                <input
                  type="text"
                  value={company}
                  onChange={(event) =>
                    setCompany(
                      event.target.value
                    )
                  }
                  placeholder="Company name"
                  className="h-11 w-full rounded-md border border-neutral-700 bg-black px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold text-neutral-400">
                  Project / Reference
                </span>
                <input
                  type="text"
                  value={projectReference}
                  onChange={(event) =>
                    setProjectReference(
                      event.target.value
                    )
                  }
                  placeholder="Optional project or PO reference"
                  className="h-11 w-full rounded-md border border-neutral-700 bg-black px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold text-neutral-400">
                  Additional Notes
                </span>
                <textarea
                  value={notes}
                  onChange={(event) =>
                    setNotes(
                      event.target.value
                    )
                  }
                  rows={4}
                  placeholder="Delivery requirement, preferred brand, alternatives, etc."
                  className="w-full resize-none rounded-md border border-neutral-700 bg-black px-3 py-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                />
              </label>
            </div>

            <div className="mt-6 rounded-lg border border-neutral-800 bg-black p-4 text-sm">
              <div className="flex items-center justify-between text-neutral-400">
                <span>Products</span>
                <span className="font-semibold text-white">
                  {uniqueCount}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between text-neutral-400">
                <span>Total quantity</span>
                <span className="font-semibold text-white">
                  {totalQuantity}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={sendViaWhatsApp}
              className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-yellow-500 px-5 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
            >
              <FaWhatsapp className="h-5 w-5" />
              Send Complete List via WhatsApp
            </button>

            <p className="mt-3 text-center text-[11px] leading-5 text-neutral-600">
              WhatsApp opens with the complete product list and quantities pre-filled. Nothing is sent until you press Send in WhatsApp.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}