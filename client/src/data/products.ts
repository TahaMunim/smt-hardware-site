// products.ts

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string[];
  description: string;
}

export const productCategories = [
  "Power Tools",
  "Safety Equipment",
  "Construction Equipment",
  "Material Handling",
  "Hand Tools",
  "Painting Equipment"
];

export const products: Product[] = [
  {
    id: "1",
    name: "Sikaflex-428 Precast",
    brand: "SIKA",
    description: "High-performance elastic sealant designed for precast concrete joints and structural sealing.",
    image: ["/products/sikaflex-428-precast.png"],
    category: "Construction Equipment"
  },
  {
    id: "2",
    name: "Ridgid Pipe Threading Machine",
    brand: "RIDGID",
    description: "Heavy-duty electric threading machine for precise threading of pipes on job sites.",
    image: ["/products/ridgid-pipe-threading-machine.png"],
    category: "Construction Equipment"
  },
  {
    id: "3",
    name: "SPIT Epobar Chemical Mortar",
    brand: "SPIT",
    description: "High-strength chemical anchoring mortar for rebar, threaded rods, and heavy fixings.",
    image: ["/products/spit-epobar-chemical-mortar.png"],
    category: "Construction Equipment"
  },
  {
    id: "4",
    name: "Sikadur-31 CF Slow",
    brand: "SIKA",
    description: "Two-part structural adhesive for bonding, repairing, and resurfacing concrete surfaces.",
    image: ["/products/sikadur-31-cf-slow.png"],
    category: "Construction Equipment"
  },
  {
    id: "5",
    name: "DEWALT Angle Grinder",
    brand: "DEWALT",
    description: "Industrial-grade angle grinder designed for cutting, grinding, and surface preparation.",
    image: ["/products/dewalt-angle-grinder.png"],
    category: "Power Tools"
  },
  {
    id: "6",
    name: "SPIT HC6-20 Pins",
    brand: "SPIT",
    description: "High-performance gas-nailer pins engineered for reliable fastening in concrete and steel.",
    image: ["/products/spit-hc6-20-pins.png"],
    category: "Construction Equipment"
  },
  {
    id: "7",
    name: "Stanley Level",
    brand: "STANLEY",
    description: "Heavy-duty precision leveling tool for accurate horizontal and vertical alignment.",
    image: ["/products/stanley-level.png"],
    category: "Hand Tools"
  },
  {
    id: "8",
    name: "SPIT Pulsa 40P+ Nailer",
    brand: "SPIT",
    description: "Gas-powered nail gun built for fast, reliable fastening on steel and concrete surfaces.",
    image: ["/products/spit-pulsa-40p-plus.png"], // FIXED
    category: "Power Tools"
  },
  {
    id: "9",
    name: "Ridgid RP-350 Press Tool",
    brand: "RIDGID",
    description: "Advanced pressing tool for fast, flameless pipe connections in mechanical installations.",
    image: ["/products/ridgid-rp-350.png"],
    category: "Power Tools"
  },
  {
    id: "10",
    name: "Stanley Aviation Snip",
    brand: "STANLEY",
    description: "High-strength aviation snips for clean, controlled cutting of sheet metal.",
    image: ["/products/stanley-aviation-snip.png"],
    category: "Hand Tools"
  },
  {
    id: "11",
    name: "Stanley Cutting Disk",
    brand: "STANLEY",
    description: "Durable abrasive cutting disc suitable for metal, steel, and general fabrication work.",
    image: ["/products/stanley-cutting-disk.png"],
    category: "Hand Tools"
  },
  {
    id: "12",
    name: "Stanley Cordless Drill",
    brand: "STANLEY",
    description: "Compact cordless drill driver for drilling and fastening applications.",
    image: ["/products/stanley-cordless-drill.png"],
    category: "Power Tools"
  },
  {
    id: "13",
    name: "Tuffix Welding Machine MMA400S",
    brand: "TUFFIX",
    description: "Portable welding machine for manual metal arc welding (MMA) applications.",
    image: ["/products/tuffix-mma400s.png"],
    category: "Power Tools"
  },
  {
    id: "14",
    name: "Tuffix Welding Machine MMA300S",
    brand: "TUFFIX",
    description: "Compact welding machine for manual metal arc welding (MMA) in tight spaces.",
    image: ["/products/tuffix-mma300s.png"],
    category: "Power Tools"
  },
  {
    id: "15",
    name: "Tuffix Safety Goggles",
    brand: "TUFFIX",
    description: "Protective safety goggles with anti-fog lenses for welding and cutting operations.",
    image: ["/products/tuffix-safety-goggles.png"],
    category: "Safety Equipment"
  },
  {
    id: "16",
    name: "Tuffix Safety Helmet",
    brand: "TUFFIX",
    description: "Durable safety helmet with impact-resistant shell for welding and construction work.",
    image: [
      "/products/tuffix-safety-helmet-yellow.png",
      "/products/tuffix-safety-helmet-white.png",
      "/products/tuffix-safety-helmet-red.png",
      "/products/tuffix-safety-helmet-green.png",
      "/products/tuffix-safety-helmet-blue.png"
    ],
    category: "Safety Equipment"
  },
  {
    id: "17",
    name: "Tuffix Safety Jacket",
    brand: "TUFFIX",
    description: "High-visibility safety jacket with reflective strips for enhanced visibility in work zones.",
    image: [
      "/products/tuffix-safety-jacket-4-tape.png",
      "/products/tuffix-safety-jacket-2-tape.png"
    ],
    category: "Safety Equipment"
  },
  {
    id: "18",
    name: "Tuffix 9-inch Paint Roller",
    brand: "TUFFIX",
    description: "Heavy-duty 9-inch paint roller with smooth finish for professional painting applications.",
    image: ["/products/tuffix-9-inch-paint-roller.png"],
    category: "Painting Equipment"
  },
  {
    id: "19",
    name: "Tuffix 4.5-inch Paint Roller",
    brand: "TUFFIX",
    description: "Compact 4.5-inch paint roller with smooth finish for detailed painting work.",
    image: ["/products/tuffix-4.5-inch-paint-roller.png"],
    category: "Painting Equipment"
  },
  {
    id: "20",
    name: "Tuffix 4.5-inch Paint Roller Refill",
    brand: "TUFFIX",
    description: "Replacement roller cover for the 4.5-inch paint roller for consistent finish.",
    image: [
      "/products/tuffix-4.5-inch-yellow-acrylic-refill.png",
      "/products/tuffix-4.5-inch-velour-mini-refill.png",
      "/products/tuffix-4.5-inch-texture-sponge-refill.png",
    ],
    category: "Painting Equipment"
  },
  {
    id: "21",
    name: "Tuffix 2-inch Paint Brush",
    brand: "TUFFIX",
    description: "High-quality 2-inch synthetic paint brush for detailed and smooth painting applications.",
    image: ["/products/tuffix-2-inch-paint-brush.png"],
    category: "Painting Equipment"
  }
];
