export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
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
    image: "/products/sikaflex-428-precast.png",
    category: "Construction Equipment"
  },
  {
    id: "2",
    name: "Ridgid Pipe Threading Machine",
    brand: "RIDGID",
    description: "Heavy-duty electric threading machine for precise threading of pipes on job sites.",
    image: "/products/ridgid-pipe-threading-machine.png",
    category: "Construction Equipment"
  },
  {
    id: "3",
    name: "SPIT Epobar Chemical Mortar",
    brand: "SPIT",
    description: "High-strength chemical anchoring mortar for rebar, threaded rods, and heavy fixings.",
    image: "/products/spit-epobar-chemical-mortar.png",
    category: "Construction Equipment"
  },
  {
    id: "4",
    name: "Sikadur-31 CF Slow",
    brand: "SIKA",
    description: "Two-part structural adhesive for bonding, repairing, and resurfacing concrete surfaces.",
    image: "/products/sikadur-31-cf-slow.png",
    category: "Construction Equipment"
  },
  {
    id: "5",
    name: "DEWALT Angle Grinder",
    brand: "DEWALT",
    description: "Industrial-grade angle grinder designed for cutting, grinding, and surface preparation.",
    image: "/products/dewalt-angle-grinder.png",
    category: "Power Tools"
  },
  {
    id: "6",
    name: "SPIT HC6-20 Pins",
    brand: "SPIT",
    description: "High-performance gas-nailer pins engineered for reliable fastening in concrete and steel.",
    image: "/products/spit-hc6-20-pins.png",
    category: "Construction Equipment"
  },
  {
    id: "7",
    name: "Stanley Level",
    brand: "STANLEY",
    description: "Heavy-duty precision leveling tool for accurate horizontal and vertical alignment.",
    image: "/products/stanley-level.png",
    category: "Hand Tools"
  },
  {
    id: "8",
    name: "SPIT Pulsa 40P+ Nailer",
    brand: "SPIT",
    description: "Gas-powered nail gun built for fast, reliable fastening on steel and concrete surfaces.",
    image: "/products/spit-pulsa-40p-plus.png",
    category: "Power Tools"
  },
  {
    id: "9",
    name: "Ridgid RP-350 Press Tool",
    brand: "RIDGID",
    description: "Advanced pressing tool for fast, flameless pipe connections in mechanical installations.",
    image: "/products/ridgid-rp-350.png",
    category: "Power Tools"
  },
  {
    id: "10",
    name: "Stanley Aviation Snip",
    brand: "STANLEY",
    description: "High-strength aviation snips for clean, controlled cutting of sheet metal.",
    image: "/products/stanley-aviation-snip.png",
    category: "Hand Tools"
  },
  {
    id: "11",
    name: "Stanley Cutting Disk",
    brand: "STANLEY",
    description: "Durable abrasive cutting disc suitable for metal, steel, and general fabrication work.",
    image: "/products/stanley-cutting-disk.png",
    category: "Hand Tools"
  },
  {
    id: "12",
    name: "Stanley Cordless Drill",
    brand: "STANLEY",
    description: "Compact cordless drill driver for drilling and fastening applications.",
    image: "/products/stanley-cordless-drill.png",
    category: "Power Tools"
  }
];
