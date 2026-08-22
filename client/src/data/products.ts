import type { Product } from "./productTypes";
import { tuffixProducts } from "./catalogues/tuffix";

export type { Product } from "./productTypes";

export const productCategories = [
  "Power Tools",
  "Safety Equipment",
  "Construction Equipment",
  "Material Handling",
  "Hand Tools",
  "Painting Equipment"
];

const legacyProducts: Product[] = [
  {
    id: "1",
    name: "Sikaflex-428 Precast",
    brand: "SIKA",

    category: "Construction Equipment",

    description:
      "High-performance elastic sealant designed for precast concrete joints and structural sealing.",

    image: ["/products/sikaflex-428-precast.png"]
  },

  {
    id: "2",
    name: "Ridgid Pipe Threading Machine",
    brand: "RIDGID",

    category: "Construction Equipment",

    description:
      "Heavy-duty electric threading machine for precise threading of pipes on job sites.",

    image: ["/products/ridgid-pipe-threading-machine.png"]
  },

  {
    id: "3",
    name: "SPIT Epobar Chemical Mortar",
    brand: "SPIT",

    category: "Construction Equipment",

    description:
      "High-strength chemical anchoring mortar for rebar, threaded rods, and heavy fixings.",

    image: ["/products/spit-epobar-chemical-mortar.png"]
  },

  {
    id: "4",
    name: "Sikadur-31 CF Slow",
    brand: "SIKA",

    category: "Construction Equipment",

    description:
      "Two-part structural adhesive for bonding, repairing, and resurfacing concrete surfaces.",

    image: ["/products/sikadur-31-cf-slow.png"]
  },

  {
    id: "5",
    name: "DEWALT Angle Grinder",
    brand: "DEWALT",

    category: "Power Tools",

    description:
      "Industrial-grade angle grinder designed for cutting, grinding, and surface preparation.",

    image: ["/products/dewalt-angle-grinder.png"]
  },

  {
    id: "6",
    name: "SPIT HC6-20 Pins",
    brand: "SPIT",

    category: "Construction Equipment",

    description:
      "High-performance gas-nailer pins engineered for reliable fastening in concrete and steel.",

    image: ["/products/spit-hc6-20-pins.png"]
  },

  {
    id: "7",
    name: "Stanley Level",
    brand: "STANLEY",

    category: "Hand Tools",
    subcategory: "Levels & Measuring",

    description:
      "Heavy-duty precision leveling tool for accurate horizontal and vertical alignment.",

    image: ["/products/stanley-level.png"],

    keywords: [
      "level",
      "spirit level",
      "stanley level",
      "measuring",
      "alignment",
      "hand tools"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  },

  {
    id: "8",
    name: "SPIT Pulsa 40P+ Nailer",
    brand: "SPIT",

    category: "Power Tools",

    description:
      "Gas-powered nail gun built for fast, reliable fastening on steel and concrete surfaces.",

    image: ["/products/spit-pulsa-40p-plus.png"]
  },

  {
    id: "9",
    name: "Ridgid RP-350 Press Tool",
    brand: "RIDGID",

    category: "Power Tools",

    description:
      "Advanced pressing tool for fast, flameless pipe connections in mechanical installations.",

    image: ["/products/ridgid-rp-350.png"]
  },

  {
    id: "10",
    name: "Stanley Aviation Snip",
    brand: "STANLEY",

    category: "Hand Tools",

    description:
      "High-strength aviation snips for clean, controlled cutting of sheet metal.",

    image: ["/products/stanley-aviation-snip.png"]
  },

  {
    id: "11",
    name: "Stanley Cutting Disk",
    brand: "STANLEY",

    category: "Hand Tools",

    description:
      "Durable abrasive cutting disc suitable for metal, steel, and general fabrication work.",

    image: ["/products/stanley-cutting-disk.png"]
  },

  {
    id: "12",
    name: "Stanley Cordless Drill",
    brand: "STANLEY",

    category: "Power Tools",
    subcategory: "Cordless Drills",

    description:
      "Compact cordless drill driver for drilling and fastening applications.",

    image: ["/products/stanley-cordless-drill.png"],

    keywords: [
      "cordless drill",
      "drill driver",
      "stanley drill",
      "power tools",
      "drilling",
      "fastening"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  },

  {
    id: "13",
    name: "TUF-FIX Welding Machine MMA400S",
    brand: "TUF-FIX",

    model: "MMA400S",

    category: "Power Tools",
    subcategory: "Welding Machines",

    description:
      "Portable welding machine for manual metal arc welding (MMA) applications.",

    image: ["/products/tuffix-mma400s.png"],

    keywords: [
      "welding machine",
      "mma welding",
      "mma400s",
      "welder",
      "tuf-fix"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  },

  {
    id: "14",
    name: "TUF-FIX Welding Machine MMA300S",
    brand: "TUF-FIX",

    model: "MMA300S",

    category: "Power Tools",
    subcategory: "Welding Machines",

    description:
      "Compact welding machine for manual metal arc welding (MMA) in tight spaces.",

    image: ["/products/tuffix-mma300s.png"],

    keywords: [
      "welding machine",
      "mma welding",
      "mma300s",
      "welder",
      "tuf-fix"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  },

  {
    id: "15",
    name: "TUF-FIX Safety Goggles",
    brand: "TUF-FIX",

    category: "Safety Equipment",
    subcategory: "Eye Protection",

    description:
      "Protective safety goggles for workplace eye protection.",

    image: ["/products/tuffix-safety-goggles.png"],

    keywords: [
      "safety goggles",
      "eye protection",
      "safety glasses",
      "ppe",
      "tuf-fix"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  },

  /*
    Legacy product ID 16 intentionally removed from the live catalogue.

    It was the generic:
    "TUF-FIX Safety Helmet"

    It is now replaced by the model-specific catalogue entries:
    HM007
    HM010
    HM011
    HM012

    We are NOT assigning the old helmet images to any of those models
    until the exact models/images are verified.
  */

  {
    id: "17",
    name: "TUF-FIX Safety Jacket",
    brand: "TUF-FIX",

    category: "Safety Equipment",
    subcategory: "High Visibility Clothing",

    description:
      "High-visibility safety jacket with reflective strips for enhanced visibility in work zones.",

    image: [
      "/products/tuffix-safety-jacket-4-tape.png",
      "/products/tuffix-safety-jacket-2-tape.png"
    ],

    keywords: [
      "safety jacket",
      "safety vest",
      "high visibility",
      "reflective vest",
      "ppe",
      "tuf-fix"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  },

  {
    id: "18",
    name: "TUF-FIX 9-inch Paint Roller",
    brand: "TUF-FIX",

    category: "Painting Equipment",
    subcategory: "Paint Rollers",

    description:
      "Heavy-duty 9-inch paint roller with smooth finish for professional painting applications.",

    image: ["/products/tuffix-9-inch-paint-roller.png"],

    keywords: [
      "paint roller",
      "9 inch roller",
      "painting tools",
      "tuf-fix"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  },

  {
    id: "19",
    name: "TUF-FIX 4.5-inch Paint Roller",
    brand: "TUF-FIX",

    category: "Painting Equipment",
    subcategory: "Paint Rollers",

    description:
      "Compact 4.5-inch paint roller with smooth finish for detailed painting work.",

    image: ["/products/tuffix-4.5-inch-paint-roller.png"],

    keywords: [
      "paint roller",
      "4.5 inch roller",
      "mini roller",
      "painting tools",
      "tuf-fix"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  },

  {
    id: "20",
    name: "TUF-FIX 4.5-inch Paint Roller Refill",
    brand: "TUF-FIX",

    category: "Painting Equipment",
    subcategory: "Roller Refills",

    description:
      "Replacement roller covers for 4.5-inch paint rollers.",

    image: [
      "/products/tuffix-4.5-inch-yellow-acrylic-refill.png",
      "/products/tuffix-4.5-inch-velour-mini-refill.png",
      "/products/tuffix-4.5-inch-texture-sponge-refill.png"
    ],

    keywords: [
      "roller refill",
      "paint roller refill",
      "mini roller refill",
      "painting tools",
      "tuf-fix"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  },

  {
    id: "21",
    name: "TUF-FIX 2-inch Paint Brush",
    brand: "TUF-FIX",

    category: "Painting Equipment",
    subcategory: "Paint Brushes",

    description:
      "2-inch synthetic paint brush for detailed and smooth painting applications.",

    image: ["/products/tuffix-2-inch-paint-brush.png"],

    keywords: [
      "paint brush",
      "2 inch brush",
      "painting tools",
      "tuf-fix"
    ],

    source: {
      type: "manual"
    },

    dataQuality: "basic"
  }
];

/*
  The live catalogue is built from multiple data sources.

  legacyProducts:
  Existing SMT website products.

  tuffixProducts:
  Model-specific products extracted from the
  TUF-FIX Product Catalogue 2025-26.

  Future manufacturer catalogues can be added here
  without placing thousands of objects in this file.
*/
export const products: Product[] = [
  ...legacyProducts,
  ...tuffixProducts
];