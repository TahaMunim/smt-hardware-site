import {
  useEffect,
  useMemo,
  useState
} from "react";

import { Link } from "wouter";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ClipboardList,
  Copy,
  Mail,
  Minus,
  Package,
  Plus,
  Trash2
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { products } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";

const WHATSAPP_NUMBER = "971503821352";
const SALES_EMAIL = "sales@salehmohsin.com";

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

  const image =
    images.find(Boolean);

  if (
    !image ||
    failed
  ) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-neutral-100">
        <Package className="h-7 w-7 text-neutral-400" />
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={name}
      className="h-full w-full object-contain p-2"
      loading="lazy"
      onError={() =>
        setFailed(true)
      }
    />
  );
}

export default function Quote() {
  const {
    items,
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

  const [copied, setCopied] =
    useState(false);

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

  /*
    Clean up any quote entries that no longer
    point to a real product.

    This prevents old/stale localStorage data
    from producing incorrect quote counts.
  */
  useEffect(() => {
    const orphanedIds =
      items
        .filter(
          (item) =>
            !PRODUCT_MAP.has(
              item.productId
            )
        )
        .map(
          (item) =>
            item.productId
        );

    orphanedIds.forEach(
      (productId) => {
        removeProduct(
          productId
        );
      }
    );
  }, [
    items,
    removeProduct
  ]);

  const uniqueCount =
    quoteItems.length;

  const totalQuantity =
    useMemo(
      () =>
        quoteItems.reduce(
          (
            total,
            item
          ) =>
            total +
            item.quantity,
          0
        ),
      [quoteItems]
    );

  const buildMessage = () => {
    const lines: string[] = [
      "Hello SMT, I would like to request a quotation for the following products:",
      ""
    ];

    quoteItems.forEach(
      (
        {
          product,
          quantity
        },
        index
      ) => {
        const productTitle =
          product.brand
            ? `${product.brand} - ${product.name}`
            : product.name;

        lines.push(
          `${index + 1}. ${productTitle}`
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

    const hasCustomerDetails =
      name.trim() ||
      company.trim() ||
      projectReference.trim();

    if (hasCustomerDetails) {
      lines.push(
        "Customer details:"
      );

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

      if (
        projectReference.trim()
      ) {
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
      "Please provide your best pricing, current availability and delivery details. Thank you."
    );

    return lines.join("\n");
  };

  const sendViaWhatsApp = () => {
    if (
      quoteItems.length === 0
    ) {
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

  const emailSubject =
    company.trim()
      ? `RFQ Request - ${company.trim()}`
      : "RFQ Request - SMT Website";

  const emailUrl =
    `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(
      buildMessage()
    )}`;

  const copyRfq = async () => {
    try {
      await navigator.clipboard.writeText(
        buildMessage()
      );

      setCopied(true);

      window.setTimeout(
        () => {
          setCopied(false);
        },
        1800
      );
    } catch {
      setCopied(false);
    }
  };

  const handleClearQuote = () => {
    if (
      quoteItems.length === 0
    ) {
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

  if (
    quoteItems.length === 0
  ) {
    return (
      <main className="min-h-screen bg-black pt-16">
        <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
            <ClipboardList className="h-7 w-7" />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-yellow-500">
            Quote List
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Your Quote List Is Empty
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            Add products from the catalogue, set the required quantities, then send the complete RFQ to SMT.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-yellow-500 px-5 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
          >
            Browse Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-16">
      {/* =================================================
          COMPACT PAGE HEADER
      ================================================== */}
      <section className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 md:py-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 transition-colors hover:text-yellow-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Browsing
          </Link>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-500">
                Request for Quotation
              </p>

              <h1 className="mt-1.5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Quote List
              </h1>

              <p className="mt-2 text-sm text-neutral-400">
                {uniqueCount}{" "}
                {uniqueCount === 1
                  ? "product"
                  : "products"}
                {" · "}
                {totalQuantity}{" "}
                {totalQuantity === 1
                  ? "unit"
                  : "units"}
              </p>
            </div>

            <button
              type="button"
              onClick={handleClearQuote}
              className="inline-flex h-9 items-center justify-center gap-2 self-start rounded-md border border-neutral-700 px-3 text-xs font-semibold text-neutral-400 transition-colors hover:border-red-500/60 hover:text-red-400 sm:self-auto"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Clear List
            </button>
          </div>
        </div>
      </section>

      {/* =================================================
          QUOTE CONTENT
      ================================================== */}
      <section className="py-7 md:py-10">
        <div className="mx-auto grid max-w-[1500px] gap-7 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(330px,0.65fr)] lg:items-start lg:px-8 xl:gap-10">
          {/* =============================================
              PRODUCT LIST
          ============================================== */}
          <div className="min-w-0 space-y-3">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                  Products
                </p>

                <h2 className="mt-1 text-lg font-bold text-white">
                  Review Your Items
                </h2>
              </div>

              <span className="text-xs text-neutral-600">
                {uniqueCount} selected
              </span>
            </div>

            {quoteItems.map(
              ({
                product,
                quantity
              }) => (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950"
                >
                  {/* =====================================
                      MOBILE
                  ====================================== */}
                  <div className="sm:hidden">
                    <div className="grid grid-cols-[88px_minmax(0,1fr)]">
                      <Link
                        href={`/product/${product.id}`}
                        className="min-h-[104px] border-r border-neutral-800 bg-white"
                      >
                        <QuoteProductImage
                          images={product.image ?? []}
                          name={product.name}
                        />
                      </Link>

                      <div className="min-w-0 p-3">
                        {product.brand && (
                          <p className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-yellow-500">
                            {product.brand}
                          </p>
                        )}

                        <Link
                          href={`/product/${product.id}`}
                        >
                          <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-white transition-colors hover:text-yellow-500">
                            {product.name}
                          </h3>
                        </Link>

                        {(product.model ||
                          product.sku) && (
                          <p className="mt-1 truncate text-[10px] text-neutral-500">
                            {product.model
                              ? product.model
                              : product.sku}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 border-t border-neutral-800 px-3 py-2.5">
                      <div className="flex h-8 items-center overflow-hidden rounded-md border border-neutral-700 bg-black">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(
                              product.id,
                              quantity - 1
                            )
                          }
                          disabled={
                            quantity <= 1
                          }
                          aria-label={`Decrease ${product.name} quantity`}
                          className="flex h-full w-8 items-center justify-center text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-yellow-500 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Minus className="h-3.5 w-3.5" />
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
                                Math.min(
                                  9999,
                                  Math.floor(next)
                                )
                              );
                            }
                          }}
                          aria-label={`${product.name} quantity`}
                          className="h-full w-11 border-x border-neutral-800 bg-black text-center text-xs font-bold text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
                          className="flex h-full w-8 items-center justify-center text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-yellow-500"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeProduct(
                            product.id
                          )
                        }
                        className="inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-xs font-semibold text-neutral-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* =====================================
                      TABLET / DESKTOP
                  ====================================== */}
                  <div className="hidden grid-cols-[96px_minmax(0,1fr)_auto] items-center gap-4 p-4 sm:grid">
                    <Link
                      href={`/product/${product.id}`}
                      className="h-24 overflow-hidden rounded-md bg-white"
                    >
                      <QuoteProductImage
                        images={product.image ?? []}
                        name={product.name}
                      />
                    </Link>

                    <div className="min-w-0">
                      {product.brand && (
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-yellow-500">
                          {product.brand}
                        </p>
                      )}

                      <Link
                        href={`/product/${product.id}`}
                      >
                        <h3 className="mt-1 line-clamp-2 font-semibold text-white transition-colors hover:text-yellow-500 md:text-base">
                          {product.name}
                        </h3>
                      </Link>

                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-neutral-500">
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
                    </div>

                    <div className="flex min-w-[150px] flex-col items-end gap-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
                        Quantity
                      </p>

                      <div className="flex h-9 items-center overflow-hidden rounded-md border border-neutral-700 bg-black">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(
                              product.id,
                              quantity - 1
                            )
                          }
                          disabled={
                            quantity <= 1
                          }
                          aria-label={`Decrease ${product.name} quantity`}
                          className="flex h-full w-9 items-center justify-center text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-yellow-500 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Minus className="h-3.5 w-3.5" />
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
                                Math.min(
                                  9999,
                                  Math.floor(next)
                                )
                              );
                            }
                          }}
                          aria-label={`${product.name} quantity`}
                          className="h-full w-12 border-x border-neutral-800 bg-black text-center text-xs font-bold text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
                          className="flex h-full w-9 items-center justify-center text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-yellow-500"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeProduct(
                            product.id
                          )
                        }
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-500 transition-colors hover:text-red-400"
                      >
                        <Trash2 className="h-3 w-3" />
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>

          {/* =============================================
              RFQ PANEL
          ============================================== */}
          <aside
            className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 sm:p-5 lg:sticky"
            style={{
              top:
                "calc(var(--smt-header-offset, 72px) + 16px)"
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-yellow-500 text-black">
                <ClipboardList className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-white">
                  Send RFQ to SMT
                </h2>

                <p className="text-xs text-neutral-500">
                  Customer details are optional
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-neutral-400">
                  Contact Name
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
                  autoComplete="name"
                  className="h-10 w-full rounded-md border border-neutral-700 bg-black px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-neutral-400">
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
                  autoComplete="organization"
                  className="h-10 w-full rounded-md border border-neutral-700 bg-black px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                />
              </label>

              <label className="block sm:col-span-2 lg:col-span-1">
                <span className="mb-1.5 block text-xs font-semibold text-neutral-400">
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
                  placeholder="Project, enquiry or PO reference"
                  className="h-10 w-full rounded-md border border-neutral-700 bg-black px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                />
              </label>

              <label className="block sm:col-span-2 lg:col-span-1">
                <span className="mb-1.5 block text-xs font-semibold text-neutral-400">
                  Additional Notes
                </span>

                <textarea
                  value={notes}
                  onChange={(event) =>
                    setNotes(
                      event.target.value
                    )
                  }
                  rows={3}
                  placeholder="Delivery location, preferred brand, alternatives, urgency, etc."
                  className="w-full resize-y rounded-md border border-neutral-700 bg-black px-3 py-2.5 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-yellow-500"
                />
              </label>
            </div>

            {/* ===========================================
                SUMMARY
            ============================================ */}
            <div className="mt-5 rounded-lg border border-neutral-800 bg-black p-3.5 text-sm">
              <div className="flex items-center justify-between text-neutral-400">
                <span>
                  Products
                </span>

                <span className="font-semibold text-white">
                  {uniqueCount}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between text-neutral-400">
                <span>
                  Total quantity
                </span>

                <span className="font-semibold text-white">
                  {totalQuantity}
                </span>
              </div>
            </div>

            {/* ===========================================
                PRIMARY CTA
            ============================================ */}
            <button
              type="button"
              onClick={sendViaWhatsApp}
              className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-yellow-500 px-4 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
            >
              <FaWhatsapp className="h-5 w-5" />
              Send RFQ via WhatsApp
            </button>

            {/* ===========================================
                SECONDARY METHODS
            ============================================ */}
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              <a
                href={emailUrl}
                className="flex h-10 items-center justify-center gap-2 rounded-md border border-neutral-700 bg-black px-3 text-xs font-semibold text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Email RFQ
              </a>

              <button
                type="button"
                onClick={copyRfq}
                className="flex h-10 items-center justify-center gap-2 rounded-md border border-neutral-700 bg-black px-3 text-xs font-semibold text-neutral-300 transition-colors hover:border-yellow-500 hover:text-white"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}

                {copied
                  ? "Copied"
                  : "Copy RFQ"}
              </button>
            </div>

            <p className="mt-3 text-center text-[11px] leading-5 text-neutral-600">
              SMT will confirm current pricing, availability and delivery. Nothing is sent automatically.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
