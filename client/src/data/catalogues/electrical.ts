import type { Product } from "../productTypes";

const ELECTRICAL_CATALOGUE =
  "Electrical Materials Catalogue 2025";

const source = (page: number) => ({
  type: "catalogue" as const,
  document: ELECTRICAL_CATALOGUE,
  page,
  year: 2025
});

export const electricalProducts: Product[] = [
  {
    id: "kabal-low-voltage-cable",
    name: "Low Voltage Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "Low Voltage Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Low Voltage Cable.",
    image: [],
    keywords: [
      "KABAL",
      "Low Voltage Cable",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-medium-voltage-cable",
    name: "Medium Voltage Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "Medium Voltage Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Medium Voltage Cable.",
    image: [],
    keywords: [
      "KABAL",
      "Medium Voltage Cable",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-pvc-wires",
    name: "PVC Wires",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "PVC Wires. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Wires.",
    image: [],
    keywords: [
      "KABAL",
      "PVC Wires",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-lszh-cable",
    name: "LSZH Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "LSZH Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LSZH Cable.",
    image: [],
    keywords: [
      "KABAL",
      "LSZH Cable",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-single-core-lszh-wire",
    name: "Single Core LSZH Wire",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "Single Core LSZH Wire. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Single Core LSZH Wire.",
    image: [],
    keywords: [
      "KABAL",
      "Single Core LSZH Wire",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-fp-400-mica-cable",
    name: "FP-400 / MICA Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "FP-400 / MICA Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "FP-400 / MICA Cable.",
    image: [],
    keywords: [
      "KABAL",
      "FP-400 / MICA Cable",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-pvc-flex-105-cable",
    name: "PVC Flex / 105° Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "PVC Flex / 105° Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Flex / 105° Cable.",
    image: [],
    keywords: [
      "KABAL",
      "PVC Flex / 105° Cable",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-fire-performance-cable",
    name: "Fire Performance Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "Fire Performance Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fire Performance Cable.",
    standards: [
      "BS 6387:2010 (Category CWZ)",
      "IEC 60331-21:1999",
      "EN 50200:2015 (Class PH30)",
      "EN 60754-1:2014",
      "EN 60754-2:2014",
      "EN 61034-2:2005+A1:2013"
    ],
    image: [],
    keywords: [
      "KABAL",
      "Fire Performance Cable",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-mv-hv-cable-up-to-36kv",
    name: "MV/HV Cable up to 36kV",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "MV/HV Cable up to 36kV. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MV/HV Cable up to 36kV.",
    image: [],
    keywords: [
      "KABAL",
      "MV/HV Cable up to 36kV",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-vfd-cable",
    name: "VFD Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "VFD Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "VFD Cable.",
    image: [],
    keywords: [
      "KABAL",
      "VFD Cable",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-panel-wire-105",
    name: "Panel Wire 105°",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "Panel Wire 105°. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Panel Wire 105°.",
    image: [],
    keywords: [
      "KABAL",
      "Panel Wire 105°",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-panel-wire-lszh",
    name: "Panel Wire LSZH",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "Panel Wire LSZH. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Panel Wire LSZH.",
    image: [],
    keywords: [
      "KABAL",
      "Panel Wire LSZH",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-control-cable",
    name: "Control Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "Control Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Control Cable.",
    image: [],
    keywords: [
      "KABAL",
      "Control Cable",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-liyc-screened-cable",
    name: "LIYC Screened Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "LIYC Screened Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LIYC Screened Cable.",
    image: [],
    keywords: [
      "KABAL",
      "LIYC Screened Cable",
      "Cables & Wires"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-pvc-weatherproof-junction-box",
    name: "PVC Weatherproof Junction Box",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "PVC Weatherproof Junction Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Weatherproof Junction Box.",
    image: [],
    keywords: [
      "KABAL",
      "PVC Weatherproof Junction Box",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-metal-weatherproof-junction-box",
    name: "Metal Weatherproof Junction Box",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "Metal Weatherproof Junction Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Weatherproof Junction Box.",
    image: [],
    keywords: [
      "KABAL",
      "Metal Weatherproof Junction Box",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-pg-cable-gland",
    name: "PG Cable Gland",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "PG Cable Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PG Cable Gland.",
    image: [],
    keywords: [
      "KABAL",
      "PG Cable Gland",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-metric-cable-gland",
    name: "Metric Cable Gland",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "Metric Cable Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metric Cable Gland.",
    image: [],
    keywords: [
      "KABAL",
      "Metric Cable Gland",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-pvc-weatherproof-isolator",
    name: "PVC Weatherproof Isolator",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "PVC Weatherproof Isolator. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Weatherproof Isolator.",
    image: [],
    keywords: [
      "KABAL",
      "PVC Weatherproof Isolator",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-metal-weatherproof-isolator",
    name: "Metal Weatherproof Isolator",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "Metal Weatherproof Isolator. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Weatherproof Isolator.",
    image: [],
    keywords: [
      "KABAL",
      "Metal Weatherproof Isolator",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-weatherproof-switch",
    name: "Weatherproof Switch",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "Weatherproof Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Switch.",
    image: [],
    keywords: [
      "KABAL",
      "Weatherproof Switch",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-industrial-plug",
    name: "Industrial Plug",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "Industrial Plug. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Plug.",
    image: [],
    keywords: [
      "KABAL",
      "Industrial Plug",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-industrial-socket",
    name: "Industrial Socket",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "Industrial Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Socket.",
    image: [],
    keywords: [
      "KABAL",
      "Industrial Socket",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "kabal-interlocking-switched-socket",
    name: "Interlocking Switched Socket",
    brand: "KABAL",
    category: "Electrical Accessories",
    subcategory: "Weatherproof & Industrial",
    description: "Interlocking Switched Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Interlocking Switched Socket.",
    image: [],
    keywords: [
      "KABAL",
      "Interlocking Switched Socket",
      "Electrical Accessories",
      "Weatherproof & Industrial"
    ],
    source: source(4),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-rubber-flexible-cable-h07rn-f",
    name: "Rubber Flexible Cable H07RN-F",
    brand: "",
    category: "Cables & Wires",
    description: "Rubber Flexible Cable H07RN-F. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Rubber Flexible Cable H07RN-F.",
    image: [],
    keywords: [
      "Rubber Flexible Cable H07RN-F",
      "Cables & Wires"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-welding-cable",
    name: "Welding Cable",
    brand: "",
    category: "Cables & Wires",
    description: "Welding Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Welding Cable.",
    image: [],
    keywords: [
      "Welding Cable",
      "Cables & Wires"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-strip-connector",
    name: "PVC Strip Connector",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Wiring Accessories",
    description: "PVC Strip Connector. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Strip Connector.",
    image: [],
    keywords: [
      "PVC Strip Connector",
      "Electrical Accessories",
      "Wiring Accessories"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-electrical-pvc-insulation-tape",
    name: "Electrical PVC Insulation Tape",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Wiring Accessories",
    description: "Electrical PVC Insulation Tape. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical PVC Insulation Tape.",
    image: [],
    keywords: [
      "Electrical PVC Insulation Tape",
      "Electrical Accessories",
      "Wiring Accessories"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-crimping-tool",
    name: "Crimping Tool",
    brand: "",
    category: "Electrical Tools",
    subcategory: "Cable Tools",
    description: "Crimping Tool. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Crimping Tool.",
    image: [],
    keywords: [
      "Crimping Tool",
      "Electrical Tools",
      "Cable Tools"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-hydraulic-crimping-tool",
    name: "Hydraulic Crimping Tool",
    brand: "",
    category: "Electrical Tools",
    subcategory: "Cable Tools",
    description: "Hydraulic Crimping Tool. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hydraulic Crimping Tool.",
    image: [],
    keywords: [
      "Hydraulic Crimping Tool",
      "Electrical Tools",
      "Cable Tools"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-hydraulic-cable-cutter",
    name: "Hydraulic Cable Cutter",
    brand: "",
    category: "Electrical Tools",
    subcategory: "Cable Tools",
    description: "Hydraulic Cable Cutter. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hydraulic Cable Cutter.",
    image: [],
    keywords: [
      "Hydraulic Cable Cutter",
      "Electrical Tools",
      "Cable Tools"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-manual-cable-cutter",
    name: "Manual Cable Cutter",
    brand: "",
    category: "Electrical Tools",
    subcategory: "Cable Tools",
    description: "Manual Cable Cutter. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Manual Cable Cutter.",
    image: [],
    keywords: [
      "Manual Cable Cutter",
      "Electrical Tools",
      "Cable Tools"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-lamp",
    name: "LED Lamp",
    brand: "",
    category: "Lighting",
    description: "LED Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Lamp.",
    image: [],
    keywords: [
      "LED Lamp",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-luminaire",
    name: "LED Luminaire",
    brand: "",
    category: "Lighting",
    description: "LED Luminaire. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Luminaire.",
    image: [],
    keywords: [
      "LED Luminaire",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-conventional-lighting",
    name: "Conventional Lighting",
    brand: "",
    category: "Lighting",
    description: "Conventional Lighting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Conventional Lighting.",
    image: [],
    keywords: [
      "Conventional Lighting",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-magnetic-control-gear",
    name: "Magnetic Control Gear",
    brand: "",
    category: "Lighting",
    description: "Magnetic Control Gear. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Magnetic Control Gear.",
    image: [],
    keywords: [
      "Magnetic Control Gear",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-electronic-control-gear",
    name: "Electronic Control Gear",
    brand: "",
    category: "Lighting",
    description: "Electronic Control Gear. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electronic Control Gear.",
    image: [],
    keywords: [
      "Electronic Control Gear",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-hid-lamp",
    name: "HID Lamp",
    brand: "",
    category: "Lighting",
    description: "HID Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "HID Lamp.",
    image: [],
    keywords: [
      "HID Lamp",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-hid-luminaire",
    name: "HID Luminaire",
    brand: "",
    category: "Lighting",
    description: "HID Luminaire. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "HID Luminaire.",
    image: [],
    keywords: [
      "HID Luminaire",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-ballast",
    name: "Ballast",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting Control Gear",
    description: "Ballast. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ballast.",
    image: [],
    keywords: [
      "Ballast",
      "Lighting",
      "Lighting Control Gear"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-ignitor",
    name: "Ignitor",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting Control Gear",
    description: "Ignitor. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ignitor.",
    image: [],
    keywords: [
      "Ignitor",
      "Lighting",
      "Lighting Control Gear"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-capacitor",
    name: "Capacitor",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting Control Gear",
    description: "Capacitor. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Capacitor.",
    image: [],
    keywords: [
      "Capacitor",
      "Lighting",
      "Lighting Control Gear"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-cable-lug",
    name: "Cable Lug",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Cable Lug. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Lug.",
    image: [],
    keywords: [
      "Cable Lug",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-bw-cable-gland",
    name: "BW Cable Gland",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "BW Cable Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "BW Cable Gland.",
    image: [],
    keywords: [
      "BW Cable Gland",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-cw-cable-gland",
    name: "CW Cable Gland",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "CW Cable Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "CW Cable Gland.",
    image: [],
    keywords: [
      "CW Cable Gland",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-a1a2-cable-gland",
    name: "A1A2 Cable Gland",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "A1A2 Cable Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "A1A2 Cable Gland.",
    image: [],
    keywords: [
      "A1A2 Cable Gland",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-e1w-cable-gland",
    name: "E1W Cable Gland",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "E1W Cable Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "E1W Cable Gland.",
    image: [],
    keywords: [
      "E1W Cable Gland",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-bi-metallic-lug",
    name: "Bi-Metallic Lug",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Bi-Metallic Lug. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bi-Metallic Lug.",
    image: [],
    keywords: [
      "Bi-Metallic Lug",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pin-type-lug",
    name: "Pin Type Lug",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Pin Type Lug. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pin Type Lug.",
    image: [],
    keywords: [
      "Pin Type Lug",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-ferrule",
    name: "Ferrule",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Ferrule. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ferrule.",
    image: [],
    keywords: [
      "Ferrule",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-earth-rod",
    name: "Earth Rod",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Earth Rod. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earth Rod.",
    image: [],
    keywords: [
      "Earth Rod",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-earth-rod-accessories",
    name: "Earth Rod Accessories",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Earth Rod Accessories. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earth Rod Accessories.",
    image: [],
    keywords: [
      "Earth Rod Accessories",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-copper-c-clamp",
    name: "Copper C Clamp",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Copper C Clamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Copper C Clamp.",
    image: [],
    keywords: [
      "Copper C Clamp",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-conduit",
    name: "PVC Conduit",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Conduit & Accessories",
    description: "PVC Conduit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Conduit.",
    image: [],
    keywords: [
      "PVC Conduit",
      "Electrical Accessories",
      "Conduit & Accessories"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-conduit-accessories",
    name: "PVC Conduit Accessories",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Conduit & Accessories",
    description: "PVC Conduit Accessories. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Conduit Accessories.",
    image: [],
    keywords: [
      "PVC Conduit Accessories",
      "Electrical Accessories",
      "Conduit & Accessories"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-adaptable-box",
    name: "PVC Adaptable Box",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Conduit & Accessories",
    description: "PVC Adaptable Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Adaptable Box.",
    image: [],
    keywords: [
      "PVC Adaptable Box",
      "Electrical Accessories",
      "Conduit & Accessories"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-glue",
    name: "PVC Glue",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Conduit & Accessories",
    description: "PVC Glue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Glue.",
    image: [],
    keywords: [
      "PVC Glue",
      "Electrical Accessories",
      "Conduit & Accessories"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-cable-management-system",
    name: "Cable Management System",
    brand: "",
    category: "Cable Management",
    description: "Cable Management System. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Management System.",
    image: [],
    keywords: [
      "Cable Management System",
      "Cable Management"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-cable-tray",
    name: "GI Cable Tray",
    brand: "",
    category: "Cable Management",
    description: "GI Cable Tray. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Cable Tray.",
    image: [],
    keywords: [
      "GI Cable Tray",
      "Cable Management"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-pvc-coated-flexible-conduit",
    name: "GI PVC Coated Flexible Conduit",
    brand: "",
    category: "Cable Management",
    description: "GI PVC Coated Flexible Conduit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI PVC Coated Flexible Conduit.",
    image: [],
    keywords: [
      "GI PVC Coated Flexible Conduit",
      "Cable Management"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-timer-switch",
    name: "Timer Switch",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Controls",
    description: "Timer Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Timer Switch.",
    image: [],
    keywords: [
      "Timer Switch",
      "Electrical Accessories",
      "Controls"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-photo-cell",
    name: "Photo Cell",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Controls",
    description: "Photo Cell. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Photo Cell.",
    image: [],
    keywords: [
      "Photo Cell",
      "Electrical Accessories",
      "Controls"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-switch",
    name: "Switch",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Switch.",
    image: [],
    keywords: [
      "Switch",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-socket",
    name: "Socket",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Socket.",
    image: [],
    keywords: [
      "Socket",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-conduit",
    name: "GI Conduit",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "GI Conduit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Conduit.",
    image: [],
    keywords: [
      "GI Conduit",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-hot-dip-galvanised-conduit",
    name: "Hot Dip Galvanised Conduit",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Hot Dip Galvanised Conduit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hot Dip Galvanised Conduit.",
    image: [],
    keywords: [
      "Hot Dip Galvanised Conduit",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-pvc-coated-conduit",
    name: "GI PVC Coated Conduit",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "GI PVC Coated Conduit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI PVC Coated Conduit.",
    image: [],
    keywords: [
      "GI PVC Coated Conduit",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-pipe",
    name: "PVC Pipe",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "PVC Pipe. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Pipe.",
    image: [],
    keywords: [
      "PVC Pipe",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-pipe-accessories",
    name: "PVC Pipe Accessories",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "PVC Pipe Accessories. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Pipe Accessories.",
    image: [],
    keywords: [
      "PVC Pipe Accessories",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-solvent-cement-glue",
    name: "Solvent Cement Glue",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Solvent Cement Glue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Solvent Cement Glue.",
    image: [],
    keywords: [
      "Solvent Cement Glue",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-waterproof-box",
    name: "PVC Waterproof Box",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "PVC Waterproof Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Waterproof Box.",
    image: [],
    keywords: [
      "PVC Waterproof Box",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-floor-box-under-floor",
    name: "Floor Box - Under Floor",
    brand: "",
    category: "Cable Management",
    description: "Floor Box - Under Floor. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Floor Box - Under Floor.",
    image: [],
    keywords: [
      "Floor Box - Under Floor",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-floor-box-flush-floor",
    name: "Floor Box - Flush Floor",
    brand: "",
    category: "Cable Management",
    description: "Floor Box - Flush Floor. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Floor Box - Flush Floor.",
    image: [],
    keywords: [
      "Floor Box - Flush Floor",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-box",
    name: "GI Box",
    brand: "",
    category: "Cable Management",
    description: "GI Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Box.",
    image: [],
    keywords: [
      "GI Box",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-adaptable-box",
    name: "GI Adaptable Box",
    brand: "",
    category: "Cable Management",
    description: "GI Adaptable Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Adaptable Box.",
    image: [],
    keywords: [
      "GI Adaptable Box",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-metal-enclosure",
    name: "Metal Enclosure",
    brand: "",
    category: "Cable Management",
    description: "Metal Enclosure. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Enclosure.",
    image: [],
    keywords: [
      "Metal Enclosure",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-din-rail",
    name: "DIN Rail",
    brand: "",
    category: "Cable Management",
    description: "DIN Rail. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "DIN Rail.",
    image: [],
    keywords: [
      "DIN Rail",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-neutral-bar",
    name: "Neutral Bar",
    brand: "",
    category: "Cable Management",
    description: "Neutral Bar. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Neutral Bar.",
    image: [],
    keywords: [
      "Neutral Bar",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-earth-bar",
    name: "Earth Bar",
    brand: "",
    category: "Cable Management",
    description: "Earth Bar. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earth Bar.",
    image: [],
    keywords: [
      "Earth Bar",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-cable-tie",
    name: "PVC Cable Tie",
    brand: "",
    category: "Cable Management",
    description: "PVC Cable Tie. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Cable Tie.",
    image: [],
    keywords: [
      "PVC Cable Tie",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-cable-tie",
    name: "GI Cable Tie",
    brand: "",
    category: "Cable Management",
    description: "GI Cable Tie. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Cable Tie.",
    image: [],
    keywords: [
      "GI Cable Tie",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-pvc-coated-cable-tie",
    name: "GI PVC Coated Cable Tie",
    brand: "",
    category: "Cable Management",
    description: "GI PVC Coated Cable Tie. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI PVC Coated Cable Tie.",
    image: [],
    keywords: [
      "GI PVC Coated Cable Tie",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pin-type-busbar",
    name: "Pin Type Busbar",
    brand: "",
    category: "Cable Management",
    description: "Pin Type Busbar. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pin Type Busbar.",
    image: [],
    keywords: [
      "Pin Type Busbar",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-u-type-busbar",
    name: "U Type Busbar",
    brand: "",
    category: "Cable Management",
    description: "U Type Busbar. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "U Type Busbar.",
    image: [],
    keywords: [
      "U Type Busbar",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-spiral-wrapping",
    name: "Spiral Wrapping",
    brand: "",
    category: "Cable Management",
    description: "Spiral Wrapping. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spiral Wrapping.",
    image: [],
    keywords: [
      "Spiral Wrapping",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pg-gland",
    name: "PG Gland",
    brand: "",
    category: "Cable Management",
    description: "PG Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PG Gland.",
    image: [],
    keywords: [
      "PG Gland",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-stuffing-gland",
    name: "Stuffing Gland",
    brand: "",
    category: "Cable Management",
    description: "Stuffing Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Stuffing Gland.",
    image: [],
    keywords: [
      "Stuffing Gland",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-bentonite-powder",
    name: "Bentonite Powder",
    brand: "",
    category: "Earthing",
    description: "Bentonite Powder. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bentonite Powder.",
    image: [],
    keywords: [
      "Bentonite Powder",
      "Earthing"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "dupro-pvc-switch-socket",
    name: "PVC Switch Socket",
    brand: "DUPRO",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "PVC Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Switch Socket.",
    image: [],
    keywords: [
      "DUPRO",
      "PVC Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "dupro-weatherproof-switch-socket",
    name: "Weatherproof Switch Socket",
    brand: "DUPRO",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Weatherproof Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Switch Socket.",
    image: [],
    keywords: [
      "DUPRO",
      "Weatherproof Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "dupro-metal-clad-switch-socket",
    name: "Metal Clad Switch Socket",
    brand: "DUPRO",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Metal Clad Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Clad Switch Socket.",
    image: [],
    keywords: [
      "DUPRO",
      "Metal Clad Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "dupro-metal-clad-accessories",
    name: "Metal Clad Accessories",
    brand: "DUPRO",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Metal Clad Accessories. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Clad Accessories.",
    image: [],
    keywords: [
      "DUPRO",
      "Metal Clad Accessories",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "dupro-chrome-switch-socket",
    name: "Chrome Switch Socket",
    brand: "DUPRO",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Chrome Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Chrome Switch Socket.",
    image: [],
    keywords: [
      "DUPRO",
      "Chrome Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "dupro-silver-switch-socket",
    name: "Silver Switch Socket",
    brand: "DUPRO",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Silver Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Silver Switch Socket.",
    image: [],
    keywords: [
      "DUPRO",
      "Silver Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "dupro-gold-switch-socket",
    name: "Gold Switch Socket",
    brand: "DUPRO",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Gold Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Gold Switch Socket.",
    image: [],
    keywords: [
      "DUPRO",
      "Gold Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "dupro-pop-up-floor-socket",
    name: "Pop-Up Floor Socket",
    brand: "DUPRO",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Pop-Up Floor Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pop-Up Floor Socket.",
    image: [],
    keywords: [
      "DUPRO",
      "Pop-Up Floor Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-flexible-conduit",
    name: "GI Flexible Conduit",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Flexible Conduit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Flexible Conduit.",
    image: [],
    keywords: [
      "GI Flexible Conduit",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pulling-spring",
    name: "Pulling Spring",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Pulling Spring. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pulling Spring.",
    image: [],
    keywords: [
      "Pulling Spring",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-bending-spring",
    name: "Bending Spring",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Bending Spring. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bending Spring.",
    image: [],
    keywords: [
      "Bending Spring",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-brass-bush",
    name: "Brass Bush",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Brass Bush. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Brass Bush.",
    image: [],
    keywords: [
      "Brass Bush",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-brass-lock-nut",
    name: "Brass Lock Nut",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Brass Lock Nut. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Brass Lock Nut.",
    image: [],
    keywords: [
      "Brass Lock Nut",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-brass-reducer",
    name: "Brass Reducer",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Brass Reducer. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Brass Reducer.",
    image: [],
    keywords: [
      "Brass Reducer",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-dome-cover",
    name: "GI Dome Cover",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Dome Cover. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Dome Cover.",
    image: [],
    keywords: [
      "GI Dome Cover",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-dome-hook",
    name: "GI Dome Hook",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Dome Hook. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Dome Hook.",
    image: [],
    keywords: [
      "GI Dome Hook",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-weatherproof-pvc-cover",
    name: "Weatherproof PVC Cover",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Weatherproof PVC Cover. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof PVC Cover.",
    image: [],
    keywords: [
      "Weatherproof PVC Cover",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-heat-shrink-sleeve",
    name: "Heat Shrink Sleeve",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Heat Shrink Sleeve. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Heat Shrink Sleeve.",
    image: [],
    keywords: [
      "Heat Shrink Sleeve",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-slotted-channel",
    name: "GI Slotted Channel",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Slotted Channel. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Slotted Channel.",
    image: [],
    keywords: [
      "GI Slotted Channel",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-gi-trunking",
    name: "GI Trunking",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Trunking. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Trunking.",
    image: [],
    keywords: [
      "GI Trunking",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-micc-clip",
    name: "MICC Clip",
    brand: "",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "MICC Clip. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MICC Clip.",
    image: [],
    keywords: [
      "MICC Clip",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-bending-machine",
    name: "Bending Machine",
    brand: "",
    category: "Electrical Tools",
    subcategory: "Installation Tools",
    description: "Bending Machine. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bending Machine.",
    image: [],
    keywords: [
      "Bending Machine",
      "Electrical Tools",
      "Installation Tools"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-cable-cutter",
    name: "Cable Cutter",
    brand: "",
    category: "Electrical Tools",
    subcategory: "Installation Tools",
    description: "Cable Cutter. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Cutter.",
    image: [],
    keywords: [
      "Cable Cutter",
      "Electrical Tools",
      "Installation Tools"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-multicore-cable",
    name: "PVC Multicore Cable",
    brand: "",
    category: "Cables & Wires",
    description: "PVC Multicore Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Multicore Cable.",
    image: [],
    keywords: [
      "PVC Multicore Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-communication-cable",
    name: "PVC Communication Cable",
    brand: "",
    category: "Cables & Wires",
    description: "PVC Communication Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Communication Cable.",
    image: [],
    keywords: [
      "PVC Communication Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-cat6-data-cable",
    name: "Cat6 Data Cable",
    brand: "",
    category: "Cables & Wires",
    description: "Cat6 Data Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cat6 Data Cable.",
    image: [],
    keywords: [
      "Cat6 Data Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-cat5-data-cable",
    name: "Cat5 Data Cable",
    brand: "",
    category: "Cables & Wires",
    description: "Cat5 Data Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cat5 Data Cable.",
    image: [],
    keywords: [
      "Cat5 Data Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-dish-wire",
    name: "Dish Wire",
    brand: "",
    category: "Cables & Wires",
    description: "Dish Wire. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Dish Wire.",
    image: [],
    keywords: [
      "Dish Wire",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-speaker-cable",
    name: "Speaker Cable",
    brand: "",
    category: "Cables & Wires",
    description: "Speaker Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Speaker Cable.",
    image: [],
    keywords: [
      "Speaker Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-flood-light",
    name: "LED Flood Light",
    brand: "",
    category: "Lighting",
    description: "LED Flood Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Flood Light.",
    image: [],
    keywords: [
      "LED Flood Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-cob-light",
    name: "LED COB Light",
    brand: "",
    category: "Lighting",
    description: "LED COB Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED COB Light.",
    image: [],
    keywords: [
      "LED COB Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-mirror-light",
    name: "LED Mirror Light",
    brand: "",
    category: "Lighting",
    description: "LED Mirror Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Mirror Light.",
    image: [],
    keywords: [
      "LED Mirror Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-panel-light",
    name: "LED Panel Light",
    brand: "",
    category: "Lighting",
    description: "LED Panel Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Panel Light.",
    image: [],
    keywords: [
      "LED Panel Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-ufo-light",
    name: "UFO Light",
    brand: "",
    category: "Lighting",
    description: "UFO Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "UFO Light.",
    image: [],
    keywords: [
      "UFO Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-prismatic-dust-proof-fitting",
    name: "Prismatic Dust Proof Fitting",
    brand: "",
    category: "Lighting",
    description: "Prismatic Dust Proof Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Prismatic Dust Proof Fitting.",
    image: [],
    keywords: [
      "Prismatic Dust Proof Fitting",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-t5-fitting",
    name: "T5 Fitting",
    brand: "",
    category: "Lighting",
    description: "T5 Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "T5 Fitting.",
    image: [],
    keywords: [
      "T5 Fitting",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-tube",
    name: "LED Tube",
    brand: "",
    category: "Lighting",
    description: "LED Tube. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube.",
    image: [],
    keywords: [
      "LED Tube",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-bulb",
    name: "LED Bulb",
    brand: "",
    category: "Lighting",
    description: "LED Bulb. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Bulb.",
    image: [],
    keywords: [
      "LED Bulb",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-candle-lamp",
    name: "LED Candle Lamp",
    brand: "",
    category: "Lighting",
    description: "LED Candle Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Candle Lamp.",
    image: [],
    keywords: [
      "LED Candle Lamp",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-mr16-lamp",
    name: "MR16 Lamp",
    brand: "",
    category: "Lighting",
    description: "MR16 Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MR16 Lamp.",
    image: [],
    keywords: [
      "MR16 Lamp",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-highway-fitting",
    name: "LED Highway Fitting",
    brand: "",
    category: "Lighting",
    description: "LED Highway Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Highway Fitting.",
    image: [],
    keywords: [
      "LED Highway Fitting",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-emergency-light",
    name: "Emergency Light",
    brand: "",
    category: "Lighting",
    description: "Emergency Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Emergency Light.",
    image: [],
    keywords: [
      "Emergency Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-strip-light",
    name: "LED Strip Light",
    brand: "",
    category: "Lighting",
    description: "LED Strip Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Strip Light.",
    image: [],
    keywords: [
      "LED Strip Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-60x60-led-panel-light",
    name: "60x60 LED Panel Light",
    brand: "",
    category: "Lighting",
    description: "60x60 LED Panel Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "60x60 LED Panel Light.",
    image: [],
    keywords: [
      "60x60 LED Panel Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-led-weatherproof-fitting",
    name: "LED Weatherproof Fitting",
    brand: "",
    category: "Lighting",
    description: "LED Weatherproof Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Weatherproof Fitting.",
    image: [],
    keywords: [
      "LED Weatherproof Fitting",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-batten-fitting",
    name: "Batten Fitting",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Batten Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Batten Fitting.",
    image: [],
    keywords: [
      "Batten Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-weatherproof-fitting",
    name: "Weatherproof Fitting",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Weatherproof Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Fitting.",
    image: [],
    keywords: [
      "Weatherproof Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-prismatic-fitting",
    name: "Prismatic Fitting",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Prismatic Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Prismatic Fitting.",
    image: [],
    keywords: [
      "Prismatic Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-louvre-fitting",
    name: "Louvre Fitting",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Louvre Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Louvre Fitting.",
    image: [],
    keywords: [
      "Louvre Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-mirror-light",
    name: "Mirror Light",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Mirror Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Mirror Light.",
    image: [],
    keywords: [
      "Mirror Light",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-metal-halide-fitting",
    name: "Metal Halide Fitting",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Metal Halide Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Halide Fitting.",
    image: [],
    keywords: [
      "Metal Halide Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-halogen-fitting",
    name: "Halogen Fitting",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Halogen Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Halogen Fitting.",
    image: [],
    keywords: [
      "Halogen Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-hand-lamp",
    name: "Hand Lamp",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Hand Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hand Lamp.",
    image: [],
    keywords: [
      "Hand Lamp",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-metal-halide-lamp",
    name: "Metal Halide Lamp",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Metal Halide Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Halide Lamp.",
    image: [],
    keywords: [
      "Metal Halide Lamp",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-halogen-lamp",
    name: "Halogen Lamp",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Halogen Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Halogen Lamp.",
    image: [],
    keywords: [
      "Halogen Lamp",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-red-alarm-bell",
    name: "Red Alarm Bell",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Red Alarm Bell. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Red Alarm Bell.",
    image: [],
    keywords: [
      "Red Alarm Bell",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-door-bell",
    name: "Door Bell",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Door Bell. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Door Bell.",
    image: [],
    keywords: [
      "Door Bell",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-magnetic-ballast",
    name: "Magnetic Ballast",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Magnetic Ballast. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Magnetic Ballast.",
    image: [],
    keywords: [
      "Magnetic Ballast",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-electronic-ballast",
    name: "Electronic Ballast",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Electronic Ballast. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electronic Ballast.",
    image: [],
    keywords: [
      "Electronic Ballast",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-starter",
    name: "Starter",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Starter. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Starter.",
    image: [],
    keywords: [
      "Starter",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-bulkhead-fitting",
    name: "Bulkhead Fitting",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Bulkhead Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bulkhead Fitting.",
    image: [],
    keywords: [
      "Bulkhead Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-tube-holder",
    name: "Tube Holder",
    brand: "",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Tube Holder. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Tube Holder.",
    image: [],
    keywords: [
      "Tube Holder",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-elcb-box",
    name: "ELCB Box",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "ELCB Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "ELCB Box.",
    image: [],
    keywords: [
      "ELCB Box",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-motion-sensor",
    name: "Motion Sensor",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Motion Sensor. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Motion Sensor.",
    image: [],
    keywords: [
      "Motion Sensor",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-smoke-detector",
    name: "Smoke Detector",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Smoke Detector. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Smoke Detector.",
    image: [],
    keywords: [
      "Smoke Detector",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-wire-clip",
    name: "Wire Clip",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Wire Clip. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Wire Clip.",
    image: [],
    keywords: [
      "Wire Clip",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-trunking-sleeve",
    name: "Trunking Sleeve",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Trunking Sleeve. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Trunking Sleeve.",
    image: [],
    keywords: [
      "Trunking Sleeve",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-binding-wrap",
    name: "Binding Wrap",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Binding Wrap. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Binding Wrap.",
    image: [],
    keywords: [
      "Binding Wrap",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-fishing-tape",
    name: "Fishing Tape",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Fishing Tape. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fishing Tape.",
    image: [],
    keywords: [
      "Fishing Tape",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-isolator",
    name: "PVC Isolator",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "PVC Isolator. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Isolator.",
    image: [],
    keywords: [
      "PVC Isolator",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-electrical-tester",
    name: "Electrical Tester",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Electrical Tester. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical Tester.",
    image: [],
    keywords: [
      "Electrical Tester",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-hand-gloves",
    name: "Hand Gloves",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Hand Gloves. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hand Gloves.",
    image: [],
    keywords: [
      "Hand Gloves",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-round-exhaust-fan",
    name: "PVC Round Exhaust Fan",
    brand: "",
    category: "Ventilation",
    description: "PVC Round Exhaust Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Round Exhaust Fan.",
    image: [],
    keywords: [
      "PVC Round Exhaust Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pvc-square-auto-shutter-exhaust-fan",
    name: "PVC Square Auto Shutter Exhaust Fan",
    brand: "",
    category: "Ventilation",
    description: "PVC Square Auto Shutter Exhaust Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Square Auto Shutter Exhaust Fan.",
    image: [],
    keywords: [
      "PVC Square Auto Shutter Exhaust Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-metal-exhaust-fan",
    name: "Metal Exhaust Fan",
    brand: "",
    category: "Ventilation",
    description: "Metal Exhaust Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Exhaust Fan.",
    image: [],
    keywords: [
      "Metal Exhaust Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-mist-fan",
    name: "Mist Fan",
    brand: "",
    category: "Ventilation",
    description: "Mist Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Mist Fan.",
    image: [],
    keywords: [
      "Mist Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-pedestal-fan",
    name: "Pedestal Fan",
    brand: "",
    category: "Ventilation",
    description: "Pedestal Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pedestal Fan.",
    image: [],
    keywords: [
      "Pedestal Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-dust-ceiling-fan",
    name: "Dust Ceiling Fan",
    brand: "",
    category: "Ventilation",
    description: "Dust Ceiling Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Dust Ceiling Fan.",
    image: [],
    keywords: [
      "Dust Ceiling Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-telephone-box",
    name: "Telephone Box",
    brand: "",
    category: "Electrical Accessories",
    description: "Telephone Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Telephone Box.",
    image: [],
    keywords: [
      "Telephone Box",
      "Electrical Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alhama-alhama-weatherproof-led-light-fitting",
    name: "Alhama Weatherproof LED Light Fitting",
    brand: "ALHAMA",
    category: "Lighting",
    subcategory: "Weatherproof Lighting",
    description: "Alhama Weatherproof LED Light Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Alhama Weatherproof LED Light Fitting.",
    features: [
      "Prismatic design for light distribution",
      "Tool-free access to tray",
      "Designed for industrial applications"
    ],
    specifications: [
      {
        "label": "Ingress Protection",
        "value": "IP66"
      }
    ],
    image: [],
    keywords: [
      "ALHAMA",
      "Alhama Weatherproof LED Light Fitting",
      "Lighting",
      "Weatherproof Lighting"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "vortice-vortice-150-6-ar-wall-window-axial-fan",
    name: "Vortice 150/6 AR Wall/Window Axial Fan",
    brand: "VORTICE",
    sku: "12612",
    category: "Ventilation",
    description: "Vortice 150/6 AR Wall/Window Axial Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Vortice 150/6 AR Wall/Window Axial Fan.",
    image: [],
    keywords: [
      "VORTICE",
      "Vortice 150/6 AR Wall/Window Axial Fan",
      "Ventilation"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "vortice-vortice-230-9-ar-wall-window-axial-fan",
    name: "Vortice 230/9 AR Wall/Window Axial Fan",
    brand: "VORTICE",
    sku: "12452",
    category: "Ventilation",
    description: "Vortice 230/9 AR Wall/Window Axial Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Vortice 230/9 AR Wall/Window Axial Fan.",
    image: [],
    keywords: [
      "VORTICE",
      "Vortice 230/9 AR Wall/Window Axial Fan",
      "Ventilation"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "vortice-vortice-15-6-a-wall-window-axial-fan",
    name: "Vortice 15/6 A Wall/Window Axial Fan",
    brand: "VORTICE",
    sku: "12620",
    category: "Ventilation",
    description: "Vortice 15/6 A Wall/Window Axial Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Vortice 15/6 A Wall/Window Axial Fan.",
    image: [],
    keywords: [
      "VORTICE",
      "Vortice 15/6 A Wall/Window Axial Fan",
      "Ventilation"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "vortice-vortice-23-9-ar-wall-window-axial-fan",
    name: "Vortice 23/9 AR Wall/Window Axial Fan",
    brand: "VORTICE",
    sku: "12760",
    category: "Ventilation",
    description: "Vortice 23/9 AR Wall/Window Axial Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Vortice 23/9 AR Wall/Window Axial Fan.",
    image: [],
    keywords: [
      "VORTICE",
      "Vortice 23/9 AR Wall/Window Axial Fan",
      "Ventilation"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-window-type-ventilating-fan-6-inch",
    name: "Window Type Ventilating Fan 6 Inch",
    brand: "",
    category: "Ventilation",
    description: "Window Type Ventilating Fan 6 Inch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Window Type Ventilating Fan 6 Inch.",
    image: [],
    keywords: [
      "Window Type Ventilating Fan 6 Inch",
      "Ventilation"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-window-type-ventilating-fan-9-inch",
    name: "Window Type Ventilating Fan 9 Inch",
    brand: "",
    category: "Ventilation",
    description: "Window Type Ventilating Fan 9 Inch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Window Type Ventilating Fan 9 Inch.",
    image: [],
    keywords: [
      "Window Type Ventilating Fan 9 Inch",
      "Ventilation"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-timer-switch-30a",
    name: "Timer Switch 30A",
    brand: "",
    category: "Electrical Accessories",
    subcategory: "Controls",
    description: "Timer Switch 30A. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Timer Switch 30A.",
    specifications: [
      {
        "label": "Maximum Current",
        "value": "30",
        "unit": "A"
      },
      {
        "label": "Minimum Time Setting",
        "value": "15",
        "unit": "min"
      }
    ],
    image: [],
    keywords: [
      "Timer Switch 30A",
      "Electrical Accessories",
      "Controls"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-110-220v-step-up-down-single-phase-auto-transformer",
    name: "110/220V Step Up-Down Single Phase Auto Transformer",
    brand: "",
    category: "Electrical Equipment",
    subcategory: "Transformers",
    description: "110/220V Step Up-Down Single Phase Auto Transformer. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "110/220V Step Up-Down Single Phase Auto Transformer.",
    specifications: [
      {
        "label": "Reversible Voltages",
        "value": "110V / 220V AC"
      }
    ],
    image: [],
    keywords: [
      "110/220V Step Up-Down Single Phase Auto Transformer",
      "Electrical Equipment",
      "Transformers"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "gt-gt-cast-resin-cable-joint-kit",
    name: "GT Cast Resin Cable Joint Kit",
    brand: "GT",
    category: "Cable Accessories",
    subcategory: "Cast Resin Joints",
    description: "GT Cast Resin Cable Joint Kit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Cast Resin Cable Joint Kit.",
    features: [
      "Suitable for PVC, PE-X (XLP) and PE insulated cables",
      "Suitable for outdoor, indoor, earth, water and installation duct applications",
      "Halogen-free cast resin"
    ],
    image: [],
    keywords: [
      "GT",
      "GT Cast Resin Cable Joint Kit",
      "Cable Accessories",
      "Cast Resin Joints"
    ],
    source: source(11),
    dataQuality: "catalogue"
  },
  {
    id: "gt-gt-straight-joint",
    name: "GT Straight Joint",
    brand: "GT",
    category: "Cable Accessories",
    subcategory: "Cast Resin Joints",
    description: "GT Straight Joint. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Straight Joint.",
    image: [],
    keywords: [
      "GT",
      "GT Straight Joint",
      "Cable Accessories",
      "Cast Resin Joints"
    ],
    source: source(11),
    dataQuality: "catalogue"
  },
  {
    id: "gt-gt-branch-joint",
    name: "GT Branch Joint",
    brand: "GT",
    category: "Cable Accessories",
    subcategory: "Cast Resin Joints",
    description: "GT Branch Joint. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Branch Joint.",
    image: [],
    keywords: [
      "GT",
      "GT Branch Joint",
      "Cable Accessories",
      "Cast Resin Joints"
    ],
    source: source(11),
    dataQuality: "catalogue"
  },
  {
    id: "gt-gt-double-branch-joint",
    name: "GT Double Branch Joint",
    brand: "GT",
    category: "Cable Accessories",
    subcategory: "Cast Resin Joints",
    description: "GT Double Branch Joint. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Double Branch Joint.",
    image: [],
    keywords: [
      "GT",
      "GT Double Branch Joint",
      "Cable Accessories",
      "Cast Resin Joints"
    ],
    source: source(11),
    dataQuality: "catalogue"
  },
  {
    id: "gt-gt-transition-joint",
    name: "GT Transition Joint",
    brand: "GT",
    category: "Cable Accessories",
    subcategory: "Cast Resin Joints",
    description: "GT Transition Joint. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Transition Joint.",
    image: [],
    keywords: [
      "GT",
      "GT Transition Joint",
      "Cable Accessories",
      "Cast Resin Joints"
    ],
    source: source(11),
    dataQuality: "catalogue"
  },
  {
    id: "gt-gtz-cylindrical-joint",
    name: "GTZ Cylindrical Joint",
    brand: "GT",
    category: "Cable Accessories",
    subcategory: "Cast Resin Joints",
    description: "GTZ Cylindrical Joint. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GTZ Cylindrical Joint.",
    image: [],
    keywords: [
      "GT",
      "GTZ Cylindrical Joint",
      "Cable Accessories",
      "Cast Resin Joints"
    ],
    source: source(11),
    dataQuality: "catalogue"
  },
  {
    id: "gt-ga-2-component-polyurethane-cast-resin",
    name: "GA 2-Component Polyurethane Cast Resin",
    brand: "GT",
    category: "Cable Accessories",
    subcategory: "Cast Resin Joints",
    description: "GA 2-Component Polyurethane Cast Resin. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GA 2-Component Polyurethane Cast Resin.",
    features: [
      "High hydrolysis strength",
      "Thin-fluid after mixing",
      "Excellent adhesive strength on metal and synthetic material",
      "Soft and elastic after hardening"
    ],
    specifications: [
      {
        "label": "Nominal Voltage",
        "value": "Up to 10",
        "unit": "kV"
      },
      {
        "label": "Standard",
        "value": "DIN VDE 0291 Part 2"
      }
    ],
    image: [],
    keywords: [
      "GT",
      "GA 2-Component Polyurethane Cast Resin",
      "Cable Accessories",
      "Cast Resin Joints"
    ],
    source: source(11),
    dataQuality: "catalogue"
  },
  {
    id: "relite-metal-exhaust-fan",
    name: "Metal Exhaust Fan",
    brand: "RELITE",
    category: "Ventilation",
    description: "Metal Exhaust Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Exhaust Fan.",
    image: [],
    keywords: [
      "RELITE",
      "Metal Exhaust Fan",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-round-exhaust-fan",
    name: "PVC Round Exhaust Fan",
    brand: "RELITE",
    category: "Ventilation",
    description: "PVC Round Exhaust Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Round Exhaust Fan.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Round Exhaust Fan",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-square-auto-shutter-duct-fan",
    name: "PVC Square Auto Shutter Duct Fan",
    brand: "RELITE",
    category: "Ventilation",
    description: "PVC Square Auto Shutter Duct Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Square Auto Shutter Duct Fan.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Square Auto Shutter Duct Fan",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-window-type-duct-fan",
    name: "Window Type Duct Fan",
    brand: "RELITE",
    category: "Ventilation",
    description: "Window Type Duct Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Window Type Duct Fan.",
    image: [],
    keywords: [
      "RELITE",
      "Window Type Duct Fan",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-60x60-ceiling-fan-led",
    name: "60x60 Ceiling Fan + LED",
    brand: "RELITE",
    category: "Ventilation",
    description: "60x60 Ceiling Fan + LED. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "60x60 Ceiling Fan + LED.",
    image: [],
    keywords: [
      "RELITE",
      "60x60 Ceiling Fan + LED",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-square-design-ceiling-fan",
    name: "Square Design Ceiling Fan",
    brand: "RELITE",
    category: "Ventilation",
    description: "Square Design Ceiling Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Square Design Ceiling Fan.",
    image: [],
    keywords: [
      "RELITE",
      "Square Design Ceiling Fan",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-mist-and-stand-fan",
    name: "Mist & Stand Fan",
    brand: "RELITE",
    category: "Ventilation",
    description: "Mist & Stand Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Mist & Stand Fan.",
    image: [],
    keywords: [
      "RELITE",
      "Mist & Stand Fan",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-blower-fan-with-hose",
    name: "Blower Fan with Hose",
    brand: "RELITE",
    category: "Ventilation",
    description: "Blower Fan with Hose. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Blower Fan with Hose.",
    image: [],
    keywords: [
      "RELITE",
      "Blower Fan with Hose",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-wall-fan",
    name: "Wall Fan",
    brand: "RELITE",
    category: "Ventilation",
    description: "Wall Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Wall Fan.",
    image: [],
    keywords: [
      "RELITE",
      "Wall Fan",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-16-inch-orbit-fan",
    name: "16 Inch Orbit Fan",
    brand: "RELITE",
    category: "Ventilation",
    description: "16 Inch Orbit Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "16 Inch Orbit Fan.",
    image: [],
    keywords: [
      "RELITE",
      "16 Inch Orbit Fan",
      "Ventilation"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-motion-sensor",
    name: "Motion Sensor",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Motion Sensor. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Motion Sensor.",
    image: [],
    keywords: [
      "RELITE",
      "Motion Sensor",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-smoke-detector",
    name: "Smoke Detector",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Smoke Detector. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Smoke Detector.",
    image: [],
    keywords: [
      "RELITE",
      "Smoke Detector",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-metal-enclosure",
    name: "Metal Enclosure",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Metal Enclosure. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Enclosure.",
    image: [],
    keywords: [
      "RELITE",
      "Metal Enclosure",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-box",
    name: "PVC Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "PVC Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Box.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Box",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-gi-box",
    name: "GI Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "GI Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Box.",
    image: [],
    keywords: [
      "RELITE",
      "GI Box",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-gi-ring",
    name: "GI Ring",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "GI Ring. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Ring.",
    image: [],
    keywords: [
      "RELITE",
      "GI Ring",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-aluminium-weatherproof-box",
    name: "Aluminium Weatherproof Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Aluminium Weatherproof Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Aluminium Weatherproof Box.",
    image: [],
    keywords: [
      "RELITE",
      "Aluminium Weatherproof Box",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-waterproof-box",
    name: "Waterproof Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Waterproof Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Waterproof Box.",
    image: [],
    keywords: [
      "RELITE",
      "Waterproof Box",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-dome",
    name: "PVC Dome",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "PVC Dome. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Dome.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Dome",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-conduit",
    name: "PVC Conduit",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "PVC Conduit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Conduit.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Conduit",
      "Electrical Accessories"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-trunking",
    name: "PVC Trunking",
    brand: "RELITE",
    category: "Cable Management",
    description: "PVC Trunking. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Trunking.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Trunking",
      "Cable Management"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-floor-trunking",
    name: "Floor Trunking",
    brand: "RELITE",
    category: "Cable Management",
    description: "Floor Trunking. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Floor Trunking.",
    image: [],
    keywords: [
      "RELITE",
      "Floor Trunking",
      "Cable Management"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-slotted-trunking",
    name: "Slotted Trunking",
    brand: "RELITE",
    category: "Cable Management",
    description: "Slotted Trunking. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Slotted Trunking.",
    image: [],
    keywords: [
      "RELITE",
      "Slotted Trunking",
      "Cable Management"
    ],
    source: source(12),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-cable-tie",
    name: "PVC Cable Tie",
    brand: "RELITE",
    category: "Cable Management",
    description: "PVC Cable Tie. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Cable Tie.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Cable Tie",
      "Cable Management"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-coated-cable-tie",
    name: "PVC Coated Cable Tie",
    brand: "RELITE",
    category: "Cable Management",
    description: "PVC Coated Cable Tie. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Coated Cable Tie.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Coated Cable Tie",
      "Cable Management"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-stainless-steel-cable-tie",
    name: "Stainless Steel Cable Tie",
    brand: "RELITE",
    category: "Cable Management",
    description: "Stainless Steel Cable Tie. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Stainless Steel Cable Tie.",
    image: [],
    keywords: [
      "RELITE",
      "Stainless Steel Cable Tie",
      "Cable Management"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-cable-tie-base",
    name: "Cable Tie Base",
    brand: "RELITE",
    category: "Cable Management",
    description: "Cable Tie Base. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Tie Base.",
    image: [],
    keywords: [
      "RELITE",
      "Cable Tie Base",
      "Cable Management"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-fishing-tape",
    name: "Fishing Tape",
    brand: "RELITE",
    category: "Cable Management",
    description: "Fishing Tape. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fishing Tape.",
    image: [],
    keywords: [
      "RELITE",
      "Fishing Tape",
      "Cable Management"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-wire-clip",
    name: "Wire Clip",
    brand: "RELITE",
    category: "Cable Management",
    description: "Wire Clip. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Wire Clip.",
    image: [],
    keywords: [
      "RELITE",
      "Wire Clip",
      "Cable Management"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-metal-pulling-spring",
    name: "Metal Pulling Spring",
    brand: "RELITE",
    category: "Cable Management",
    description: "Metal Pulling Spring. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Pulling Spring.",
    image: [],
    keywords: [
      "RELITE",
      "Metal Pulling Spring",
      "Cable Management"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-carrier-strip",
    name: "PVC Carrier Strip",
    brand: "RELITE",
    category: "Cable Management",
    description: "PVC Carrier Strip. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Carrier Strip.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Carrier Strip",
      "Cable Management"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-cable-marker",
    name: "Cable Marker",
    brand: "RELITE",
    category: "Cable Management",
    description: "Cable Marker. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Marker.",
    image: [],
    keywords: [
      "RELITE",
      "Cable Marker",
      "Cable Management"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-industrial-plug",
    name: "Industrial Plug",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Industrial Plug. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Plug.",
    image: [],
    keywords: [
      "RELITE",
      "Industrial Plug",
      "Electrical Accessories"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-industrial-switched-socket",
    name: "Industrial Switched Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Industrial Switched Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Switched Socket.",
    image: [],
    keywords: [
      "RELITE",
      "Industrial Switched Socket",
      "Electrical Accessories"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-isolator",
    name: "PVC Isolator",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "PVC Isolator. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Isolator.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Isolator",
      "Electrical Accessories"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pipe-accessories",
    name: "Pipe Accessories",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Pipe Accessories. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pipe Accessories.",
    image: [],
    keywords: [
      "RELITE",
      "Pipe Accessories",
      "Electrical Accessories"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pg-gland",
    name: "PG Gland",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "PG Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PG Gland.",
    image: [],
    keywords: [
      "RELITE",
      "PG Gland",
      "Electrical Accessories"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-tube-holder",
    name: "Tube Holder",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Tube Holder. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Tube Holder.",
    image: [],
    keywords: [
      "RELITE",
      "Tube Holder",
      "Electrical Accessories"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-bending-machine",
    name: "Bending Machine",
    brand: "RELITE",
    category: "Electrical Tools",
    description: "Bending Machine. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bending Machine.",
    image: [],
    keywords: [
      "RELITE",
      "Bending Machine",
      "Electrical Tools"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-die-set",
    name: "Die Set",
    brand: "RELITE",
    category: "Electrical Tools",
    description: "Die Set. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Die Set.",
    image: [],
    keywords: [
      "RELITE",
      "Die Set",
      "Electrical Tools"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-crimping-tool",
    name: "Crimping Tool",
    brand: "RELITE",
    category: "Electrical Tools",
    description: "Crimping Tool. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Crimping Tool.",
    image: [],
    keywords: [
      "RELITE",
      "Crimping Tool",
      "Electrical Tools"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-cable-cutter",
    name: "Cable Cutter",
    brand: "RELITE",
    category: "Electrical Tools",
    description: "Cable Cutter. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Cutter.",
    image: [],
    keywords: [
      "RELITE",
      "Cable Cutter",
      "Electrical Tools"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-float-switch",
    name: "Float Switch",
    brand: "RELITE",
    category: "Pumps & Controls",
    description: "Float Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Float Switch.",
    image: [],
    keywords: [
      "RELITE",
      "Float Switch",
      "Pumps & Controls"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-insect-killer",
    name: "Insect Killer",
    brand: "RELITE",
    category: "Pest Control",
    description: "Insect Killer. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Insect Killer.",
    image: [],
    keywords: [
      "RELITE",
      "Insect Killer",
      "Pest Control"
    ],
    source: source(13),
    dataQuality: "catalogue"
  },
  {
    id: "relite-rail-mounting-connector",
    name: "Rail Mounting Connector",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Rail Mounting Connector. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Rail Mounting Connector.",
    image: [],
    keywords: [
      "RELITE",
      "Rail Mounting Connector",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-e27-holder",
    name: "E27 Holder",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "E27 Holder. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "E27 Holder.",
    image: [],
    keywords: [
      "RELITE",
      "E27 Holder",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-ceiling-rose",
    name: "Ceiling Rose",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Ceiling Rose. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ceiling Rose.",
    image: [],
    keywords: [
      "RELITE",
      "Ceiling Rose",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pendant-holder",
    name: "Pendant Holder",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Pendant Holder. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pendant Holder.",
    image: [],
    keywords: [
      "RELITE",
      "Pendant Holder",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-earthing-connector",
    name: "Earthing Connector",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Earthing Connector. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earthing Connector.",
    image: [],
    keywords: [
      "RELITE",
      "Earthing Connector",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-insulation-tape",
    name: "Insulation Tape",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Insulation Tape. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Insulation Tape.",
    image: [],
    keywords: [
      "RELITE",
      "Insulation Tape",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-insulated-lug",
    name: "PVC Insulated Lug",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "PVC Insulated Lug. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Insulated Lug.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Insulated Lug",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-heat-shrink-sleeve",
    name: "Heat Shrink Sleeve",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Heat Shrink Sleeve. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Heat Shrink Sleeve.",
    image: [],
    keywords: [
      "RELITE",
      "Heat Shrink Sleeve",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-trunking-sleeve",
    name: "Trunking Sleeve",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Trunking Sleeve. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Trunking Sleeve.",
    image: [],
    keywords: [
      "RELITE",
      "Trunking Sleeve",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-caution-tape",
    name: "Caution Tape",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Caution Tape. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Caution Tape.",
    image: [],
    keywords: [
      "RELITE",
      "Caution Tape",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-porcelain-holder",
    name: "Porcelain Holder",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Porcelain Holder. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Porcelain Holder.",
    image: [],
    keywords: [
      "RELITE",
      "Porcelain Holder",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-adjustable-earth-bonding-clamp",
    name: "Adjustable Earth Bonding Clamp",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Adjustable Earth Bonding Clamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Adjustable Earth Bonding Clamp.",
    image: [],
    keywords: [
      "RELITE",
      "Adjustable Earth Bonding Clamp",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-extension-drum",
    name: "Extension Drum",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Extension Drum. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Extension Drum.",
    image: [],
    keywords: [
      "RELITE",
      "Extension Drum",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-extension-board",
    name: "Extension Board",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Extension Board. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Extension Board.",
    image: [],
    keywords: [
      "RELITE",
      "Extension Board",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-weatherproof-connector",
    name: "Weatherproof Connector",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Weatherproof Connector. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Connector.",
    image: [],
    keywords: [
      "RELITE",
      "Weatherproof Connector",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-alarm-bell",
    name: "Alarm Bell",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Alarm Bell. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Alarm Bell.",
    image: [],
    keywords: [
      "RELITE",
      "Alarm Bell",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-s2-starter",
    name: "S2 Starter",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "S2 Starter. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "S2 Starter.",
    image: [],
    keywords: [
      "RELITE",
      "S2 Starter",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-s10-starter",
    name: "S10 Starter",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "S10 Starter. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "S10 Starter.",
    image: [],
    keywords: [
      "RELITE",
      "S10 Starter",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-telephone-box",
    name: "Telephone Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Telephone Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Telephone Box.",
    image: [],
    keywords: [
      "RELITE",
      "Telephone Box",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-db-box",
    name: "DB Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "DB Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "DB Box.",
    image: [],
    keywords: [
      "RELITE",
      "DB Box",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-din-rail",
    name: "DIN Rail",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "DIN Rail. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "DIN Rail.",
    image: [],
    keywords: [
      "RELITE",
      "DIN Rail",
      "Electrical Accessories"
    ],
    source: source(14),
    dataQuality: "catalogue"
  },
  {
    id: "relite-led-tube-fitting",
    name: "LED Tube Fitting",
    brand: "RELITE",
    category: "Lighting",
    description: "LED Tube Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube Fitting.",
    image: [],
    keywords: [
      "RELITE",
      "LED Tube Fitting",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-led-strip-light",
    name: "LED Strip Light",
    brand: "RELITE",
    category: "Lighting",
    description: "LED Strip Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Strip Light.",
    image: [],
    keywords: [
      "RELITE",
      "LED Strip Light",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-led-candle-light",
    name: "LED Candle Light",
    brand: "RELITE",
    category: "Lighting",
    description: "LED Candle Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Candle Light.",
    image: [],
    keywords: [
      "RELITE",
      "LED Candle Light",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-led-bulb",
    name: "LED Bulb",
    brand: "RELITE",
    category: "Lighting",
    description: "LED Bulb. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Bulb.",
    image: [],
    keywords: [
      "RELITE",
      "LED Bulb",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-cob-light",
    name: "COB Light",
    brand: "RELITE",
    category: "Lighting",
    description: "COB Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "COB Light.",
    image: [],
    keywords: [
      "RELITE",
      "COB Light",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-60x60-led-panel",
    name: "60x60 LED Panel",
    brand: "RELITE",
    category: "Lighting",
    description: "60x60 LED Panel. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "60x60 LED Panel.",
    image: [],
    keywords: [
      "RELITE",
      "60x60 LED Panel",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-spot-light",
    name: "Spot Light",
    brand: "RELITE",
    category: "Lighting",
    description: "Spot Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spot Light.",
    image: [],
    keywords: [
      "RELITE",
      "Spot Light",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-highway-fitting",
    name: "Highway Fitting",
    brand: "RELITE",
    category: "Lighting",
    description: "Highway Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Highway Fitting.",
    image: [],
    keywords: [
      "RELITE",
      "Highway Fitting",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-flood-light",
    name: "Flood Light",
    brand: "RELITE",
    category: "Lighting",
    description: "Flood Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flood Light.",
    image: [],
    keywords: [
      "RELITE",
      "Flood Light",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-led-strip-light-roll",
    name: "LED Strip Light Roll",
    brand: "RELITE",
    category: "Lighting",
    description: "LED Strip Light Roll. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Strip Light Roll.",
    image: [],
    keywords: [
      "RELITE",
      "LED Strip Light Roll",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-panel-surface-light",
    name: "Panel Surface Light",
    brand: "RELITE",
    category: "Lighting",
    description: "Panel Surface Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Panel Surface Light.",
    image: [],
    keywords: [
      "RELITE",
      "Panel Surface Light",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-round-panel-light",
    name: "Round Panel Light",
    brand: "RELITE",
    category: "Lighting",
    description: "Round Panel Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Round Panel Light.",
    image: [],
    keywords: [
      "RELITE",
      "Round Panel Light",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-square-panel-light",
    name: "Square Panel Light",
    brand: "RELITE",
    category: "Lighting",
    description: "Square Panel Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Square Panel Light.",
    image: [],
    keywords: [
      "RELITE",
      "Square Panel Light",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-batten-fitting",
    name: "Batten Fitting",
    brand: "RELITE",
    category: "Lighting",
    description: "Batten Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Batten Fitting.",
    image: [],
    keywords: [
      "RELITE",
      "Batten Fitting",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-led-tube-light",
    name: "LED Tube Light",
    brand: "RELITE",
    category: "Lighting",
    description: "LED Tube Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube Light.",
    image: [],
    keywords: [
      "RELITE",
      "LED Tube Light",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-mr16-gu5-3-lamp",
    name: "MR16 GU5.3 Lamp",
    brand: "RELITE",
    category: "Lighting",
    description: "MR16 GU5.3 Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MR16 GU5.3 Lamp.",
    image: [],
    keywords: [
      "RELITE",
      "MR16 GU5.3 Lamp",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-magnetic-ballast",
    name: "Magnetic Ballast",
    brand: "RELITE",
    category: "Lighting",
    description: "Magnetic Ballast. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Magnetic Ballast.",
    image: [],
    keywords: [
      "RELITE",
      "Magnetic Ballast",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-energy-saver-lamp",
    name: "Energy Saver Lamp",
    brand: "RELITE",
    category: "Lighting",
    description: "Energy Saver Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Energy Saver Lamp.",
    image: [],
    keywords: [
      "RELITE",
      "Energy Saver Lamp",
      "Lighting"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-bending-spring",
    name: "Bending Spring",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Bending Spring. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bending Spring.",
    image: [],
    keywords: [
      "RELITE",
      "Bending Spring",
      "Electrical Accessories"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-micc-fire-clip",
    name: "MICC Fire Clip",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "MICC Fire Clip. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MICC Fire Clip.",
    image: [],
    keywords: [
      "RELITE",
      "MICC Fire Clip",
      "Electrical Accessories"
    ],
    source: source(15),
    dataQuality: "catalogue"
  },
  {
    id: "relite-cat6-wire",
    name: "Cat6 Wire",
    brand: "RELITE",
    category: "Cables & Wires",
    description: "Cat6 Wire. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cat6 Wire.",
    image: [],
    keywords: [
      "RELITE",
      "Cat6 Wire",
      "Cables & Wires"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-coaxial-cable",
    name: "Coaxial Cable",
    brand: "RELITE",
    category: "Cables & Wires",
    description: "Coaxial Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Coaxial Cable.",
    image: [],
    keywords: [
      "RELITE",
      "Coaxial Cable",
      "Cables & Wires"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-insect-killer-tube",
    name: "Insect Killer Tube",
    brand: "RELITE",
    category: "Pest Control",
    description: "Insect Killer Tube. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Insect Killer Tube.",
    image: [],
    keywords: [
      "RELITE",
      "Insect Killer Tube",
      "Pest Control"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-bentonite-powder",
    name: "Bentonite Powder",
    brand: "RELITE",
    category: "Earthing",
    description: "Bentonite Powder. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bentonite Powder.",
    image: [],
    keywords: [
      "RELITE",
      "Bentonite Powder",
      "Earthing"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-hook-plate",
    name: "Hook Plate",
    brand: "RELITE",
    category: "Cable Management",
    description: "Hook Plate. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hook Plate.",
    image: [],
    keywords: [
      "RELITE",
      "Hook Plate",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-dome-cover",
    name: "Dome Cover",
    brand: "RELITE",
    category: "Cable Management",
    description: "Dome Cover. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Dome Cover.",
    image: [],
    keywords: [
      "RELITE",
      "Dome Cover",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-ball-and-socket",
    name: "Ball & Socket",
    brand: "RELITE",
    category: "Cable Management",
    description: "Ball & Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ball & Socket.",
    image: [],
    keywords: [
      "RELITE",
      "Ball & Socket",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-galvanised-steel-cable-drum",
    name: "Galvanised Steel Cable Drum",
    brand: "RELITE",
    category: "Cable Management",
    description: "Galvanised Steel Cable Drum. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Galvanised Steel Cable Drum.",
    image: [],
    keywords: [
      "RELITE",
      "Galvanised Steel Cable Drum",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-angle-corner-roller",
    name: "Angle Corner Roller",
    brand: "RELITE",
    category: "Cable Management",
    description: "Angle Corner Roller. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Angle Corner Roller.",
    image: [],
    keywords: [
      "RELITE",
      "Angle Corner Roller",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-triple-cable-roller",
    name: "Triple Cable Roller",
    brand: "RELITE",
    category: "Cable Management",
    description: "Triple Cable Roller. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Triple Cable Roller.",
    image: [],
    keywords: [
      "RELITE",
      "Triple Cable Roller",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-straight-cable-roller",
    name: "Straight Cable Roller",
    brand: "RELITE",
    category: "Cable Management",
    description: "Straight Cable Roller. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Straight Cable Roller.",
    image: [],
    keywords: [
      "RELITE",
      "Straight Cable Roller",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-cable-roller",
    name: "Cable Roller",
    brand: "RELITE",
    category: "Cable Management",
    description: "Cable Roller. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Roller.",
    image: [],
    keywords: [
      "RELITE",
      "Cable Roller",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-gi-channel",
    name: "GI Channel",
    brand: "RELITE",
    category: "Cable Management",
    description: "GI Channel. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Channel.",
    image: [],
    keywords: [
      "RELITE",
      "GI Channel",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-channel-end-cap",
    name: "Channel End Cap",
    brand: "RELITE",
    category: "Cable Management",
    description: "Channel End Cap. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Channel End Cap.",
    image: [],
    keywords: [
      "RELITE",
      "Channel End Cap",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-floor-box",
    name: "Floor Box",
    brand: "RELITE",
    category: "Cable Management",
    description: "Floor Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Floor Box.",
    image: [],
    keywords: [
      "RELITE",
      "Floor Box",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-spiral-sleeve",
    name: "Spiral Sleeve",
    brand: "RELITE",
    category: "Cable Management",
    description: "Spiral Sleeve. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spiral Sleeve.",
    image: [],
    keywords: [
      "RELITE",
      "Spiral Sleeve",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-pulling-spring",
    name: "PVC Pulling Spring",
    brand: "RELITE",
    category: "Cable Management",
    description: "PVC Pulling Spring. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Pulling Spring.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Pulling Spring",
      "Cable Management"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-glue",
    name: "PVC Glue",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "PVC Glue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Glue.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Glue",
      "Electrical Accessories"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-photo-cell",
    name: "Photo Cell",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Photo Cell. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Photo Cell.",
    image: [],
    keywords: [
      "RELITE",
      "Photo Cell",
      "Electrical Accessories"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-packing-tape",
    name: "Packing Tape",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Packing Tape. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Packing Tape.",
    image: [],
    keywords: [
      "RELITE",
      "Packing Tape",
      "Electrical Accessories"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-masking-tape",
    name: "Masking Tape",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Masking Tape. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Masking Tape.",
    image: [],
    keywords: [
      "RELITE",
      "Masking Tape",
      "Electrical Accessories"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-bulkhead-fitting",
    name: "Bulkhead Fitting",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Bulkhead Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bulkhead Fitting.",
    image: [],
    keywords: [
      "RELITE",
      "Bulkhead Fitting",
      "Electrical Accessories"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-chrome-switch-socket",
    name: "Chrome Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Chrome Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Chrome Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "Chrome Switch Socket",
      "Electrical Accessories"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-electronic-ballast",
    name: "Electronic Ballast",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Electronic Ballast. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electronic Ballast.",
    image: [],
    keywords: [
      "RELITE",
      "Electronic Ballast",
      "Electrical Accessories"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-hand-lamp",
    name: "Hand Lamp",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Hand Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hand Lamp.",
    image: [],
    keywords: [
      "RELITE",
      "Hand Lamp",
      "Electrical Accessories"
    ],
    source: source(16),
    dataQuality: "catalogue"
  },
  {
    id: "relite-fisher-plug",
    name: "Fisher Plug",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Fisher Plug. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fisher Plug.",
    image: [],
    keywords: [
      "RELITE",
      "Fisher Plug",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-cotton-sleeve",
    name: "Cotton Sleeve",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Cotton Sleeve. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cotton Sleeve.",
    image: [],
    keywords: [
      "RELITE",
      "Cotton Sleeve",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-capacitor",
    name: "Capacitor",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Capacitor. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Capacitor.",
    image: [],
    keywords: [
      "RELITE",
      "Capacitor",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-metal-halide-ballast",
    name: "Metal Halide Ballast",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Metal Halide Ballast. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Halide Ballast.",
    image: [],
    keywords: [
      "RELITE",
      "Metal Halide Ballast",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-ignitor",
    name: "Ignitor",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Ignitor. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ignitor.",
    image: [],
    keywords: [
      "RELITE",
      "Ignitor",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-busbar-insulator",
    name: "Busbar Insulator",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Busbar Insulator. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Busbar Insulator.",
    image: [],
    keywords: [
      "RELITE",
      "Busbar Insulator",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-busbar",
    name: "Busbar",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Busbar. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Busbar.",
    image: [],
    keywords: [
      "RELITE",
      "Busbar",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-gi-conduit-accessories",
    name: "GI Conduit Accessories",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "GI Conduit Accessories. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Conduit Accessories.",
    image: [],
    keywords: [
      "RELITE",
      "GI Conduit Accessories",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-weatherproof-box",
    name: "PVC Weatherproof Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "PVC Weatherproof Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Weatherproof Box.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Weatherproof Box",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pvc-adaptable-box",
    name: "PVC Adaptable Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "PVC Adaptable Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Adaptable Box.",
    image: [],
    keywords: [
      "RELITE",
      "PVC Adaptable Box",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-switch-box",
    name: "Switch Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Switch Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Switch Box.",
    image: [],
    keywords: [
      "RELITE",
      "Switch Box",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-nickel-adaptor",
    name: "Nickel Adaptor",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Nickel Adaptor. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Nickel Adaptor.",
    image: [],
    keywords: [
      "RELITE",
      "Nickel Adaptor",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-tube-clip",
    name: "Tube Clip",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Tube Clip. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Tube Clip.",
    image: [],
    keywords: [
      "RELITE",
      "Tube Clip",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-metal-clad-switch-socket",
    name: "Metal Clad Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Metal Clad Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Clad Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "Metal Clad Switch Socket",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-pop-up-floor-socket",
    name: "Pop-Up Floor Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Pop-Up Floor Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pop-Up Floor Socket.",
    image: [],
    keywords: [
      "RELITE",
      "Pop-Up Floor Socket",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-shaver-socket",
    name: "Shaver Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    description: "Shaver Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Shaver Socket.",
    image: [],
    keywords: [
      "RELITE",
      "Shaver Socket",
      "Electrical Accessories"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-gi-pvc-coated-flexible-conduit-15m-roll",
    name: "GI PVC Coated Flexible Conduit 15m Roll",
    brand: "RELITE",
    category: "Cable Management",
    description: "GI PVC Coated Flexible Conduit 15m Roll. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI PVC Coated Flexible Conduit 15m Roll.",
    image: [],
    keywords: [
      "RELITE",
      "GI PVC Coated Flexible Conduit 15m Roll",
      "Cable Management"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-ceiling-fan",
    name: "Ceiling Fan",
    brand: "RELITE",
    category: "Ventilation",
    description: "Ceiling Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ceiling Fan.",
    image: [],
    keywords: [
      "RELITE",
      "Ceiling Fan",
      "Ventilation"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-emergency-light",
    name: "Emergency Light",
    brand: "RELITE",
    category: "Lighting",
    description: "Emergency Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Emergency Light.",
    image: [],
    keywords: [
      "RELITE",
      "Emergency Light",
      "Lighting"
    ],
    source: source(17),
    dataQuality: "catalogue"
  },
  {
    id: "relite-switch-socket",
    name: "Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-weatherproof-switch-socket",
    name: "Weatherproof Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Weatherproof Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "Weatherproof Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-2-gang-switch-socket",
    name: "2 Gang Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "2 Gang Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "2 Gang Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-3-gang-1-way-plate-switch",
    name: "3 Gang 1 Way Plate Switch",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "3 Gang 1 Way Plate Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "3 Gang 1 Way Plate Switch.",
    image: [],
    keywords: [
      "RELITE",
      "3 Gang 1 Way Plate Switch",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-1-gang-1-way-plate-switch",
    name: "1 Gang 1 Way Plate Switch",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "1 Gang 1 Way Plate Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang 1 Way Plate Switch.",
    image: [],
    keywords: [
      "RELITE",
      "1 Gang 1 Way Plate Switch",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-1-gang-switch-socket",
    name: "1 Gang Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "1 Gang Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "1 Gang Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-13a-1-gang-switch-socket",
    name: "13A 1 Gang Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "13A 1 Gang Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 1 Gang Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "13A 1 Gang Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-13a-1-gang-dp-2-usb-switch-socket",
    name: "13A 1 Gang DP + 2 USB Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "13A 1 Gang DP + 2 USB Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 1 Gang DP + 2 USB Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "13A 1 Gang DP + 2 USB Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-10a-3-gang-1-way-switch-socket",
    name: "10A 3 Gang 1 Way Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "10A 3 Gang 1 Way Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "10A 3 Gang 1 Way Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "10A 3 Gang 1 Way Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-1-gang-light-wooden-cover",
    name: "1 Gang Light Wooden Cover",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "1 Gang Light Wooden Cover. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang Light Wooden Cover.",
    image: [],
    keywords: [
      "RELITE",
      "1 Gang Light Wooden Cover",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-2-gang-light-wooden-cover",
    name: "2 Gang Light Wooden Cover",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "2 Gang Light Wooden Cover. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Light Wooden Cover.",
    image: [],
    keywords: [
      "RELITE",
      "2 Gang Light Wooden Cover",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-13a-2-gang-dp-2-usb-switch-socket",
    name: "13A 2 Gang DP + 2 USB Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "13A 2 Gang DP + 2 USB Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 2 Gang DP + 2 USB Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "13A 2 Gang DP + 2 USB Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-1-gang-grey-cover",
    name: "1 Gang Grey Cover",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "1 Gang Grey Cover. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang Grey Cover.",
    image: [],
    keywords: [
      "RELITE",
      "1 Gang Grey Cover",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-2-gang-grey-cover",
    name: "2 Gang Grey Cover",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "2 Gang Grey Cover. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Grey Cover.",
    image: [],
    keywords: [
      "RELITE",
      "2 Gang Grey Cover",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-13a-2-gang-single-pole-switch-socket",
    name: "13A 2 Gang Single Pole Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "13A 2 Gang Single Pole Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 2 Gang Single Pole Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "13A 2 Gang Single Pole Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-13a-2-gang-switch-socket",
    name: "13A 2 Gang Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "13A 2 Gang Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 2 Gang Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "13A 2 Gang Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-45a-1-gang-dp-neon-switch",
    name: "45A 1 Gang DP + Neon Switch",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "45A 1 Gang DP + Neon Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "45A 1 Gang DP + Neon Switch.",
    image: [],
    keywords: [
      "RELITE",
      "45A 1 Gang DP + Neon Switch",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-gold-switch-socket",
    name: "Gold Switch Socket",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Gold Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Gold Switch Socket.",
    image: [],
    keywords: [
      "RELITE",
      "Gold Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(18),
    dataQuality: "catalogue"
  },
  {
    id: "relite-1-gang-blank-plate",
    name: "1 Gang Blank Plate",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "1 Gang Blank Plate. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang Blank Plate.",
    image: [],
    keywords: [
      "RELITE",
      "1 Gang Blank Plate",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-2-gang-blank-plate",
    name: "2 Gang Blank Plate",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "2 Gang Blank Plate. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Blank Plate.",
    image: [],
    keywords: [
      "RELITE",
      "2 Gang Blank Plate",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-40mm-1-gang-metal-clad-box",
    name: "40mm 1 Gang Metal Clad Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "40mm 1 Gang Metal Clad Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "40mm 1 Gang Metal Clad Box.",
    image: [],
    keywords: [
      "RELITE",
      "40mm 1 Gang Metal Clad Box",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-40mm-2-gang-metal-clad-box",
    name: "40mm 2 Gang Metal Clad Box",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "40mm 2 Gang Metal Clad Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "40mm 2 Gang Metal Clad Box.",
    image: [],
    keywords: [
      "RELITE",
      "40mm 2 Gang Metal Clad Box",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-e27-batten-lamp-holder",
    name: "E27 Batten Lamp Holder",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "E27 Batten Lamp Holder. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "E27 Batten Lamp Holder.",
    image: [],
    keywords: [
      "RELITE",
      "E27 Batten Lamp Holder",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-plug-in-type-ceiling-rose",
    name: "Plug-In Type Ceiling Rose",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "Plug-In Type Ceiling Rose. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Plug-In Type Ceiling Rose.",
    image: [],
    keywords: [
      "RELITE",
      "Plug-In Type Ceiling Rose",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-t2-e27-lamp-holder",
    name: "T2 E27 Lamp Holder",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "T2 E27 Lamp Holder. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "T2 E27 Lamp Holder.",
    image: [],
    keywords: [
      "RELITE",
      "T2 E27 Lamp Holder",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-2-gang-1-way-plate-switch",
    name: "2 Gang 1 Way Plate Switch",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "2 Gang 1 Way Plate Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang 1 Way Plate Switch.",
    image: [],
    keywords: [
      "RELITE",
      "2 Gang 1 Way Plate Switch",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-rotary-switch",
    name: "Rotary Switch",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "Rotary Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Rotary Switch.",
    image: [],
    keywords: [
      "RELITE",
      "Rotary Switch",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-cut-out-fuse",
    name: "Cut Out Fuse",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "Cut Out Fuse. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cut Out Fuse.",
    image: [],
    keywords: [
      "RELITE",
      "Cut Out Fuse",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-weather-resistant-cable-cleat",
    name: "Weather Resistant Cable Cleat",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "Weather Resistant Cable Cleat. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weather Resistant Cable Cleat.",
    image: [],
    keywords: [
      "RELITE",
      "Weather Resistant Cable Cleat",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-stainless-steel-machine-screw",
    name: "Stainless Steel Machine Screw",
    brand: "RELITE",
    category: "Electrical Accessories",
    subcategory: "Switches, Boxes & Accessories",
    description: "Stainless Steel Machine Screw. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Stainless Steel Machine Screw.",
    image: [],
    keywords: [
      "RELITE",
      "Stainless Steel Machine Screw",
      "Electrical Accessories",
      "Switches, Boxes & Accessories"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-trunking-sleeve-edge-guard",
    name: "Trunking Sleeve Edge Guard",
    brand: "RELITE",
    category: "Cable Management",
    description: "Trunking Sleeve Edge Guard. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Trunking Sleeve Edge Guard.",
    image: [],
    keywords: [
      "RELITE",
      "Trunking Sleeve Edge Guard",
      "Cable Management"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "relite-high-bay-ufo-led-light",
    name: "High Bay UFO LED Light",
    brand: "RELITE",
    category: "Lighting",
    description: "High Bay UFO LED Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "High Bay UFO LED Light.",
    image: [],
    keywords: [
      "RELITE",
      "High Bay UFO LED Light",
      "Lighting"
    ],
    source: source(19),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-2-gang-switch-socket",
    name: "2 Gang Switch Socket",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "2 Gang Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Switch Socket.",
    image: [],
    keywords: [
      "REXANS",
      "2 Gang Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-2-gang-1-way-plate-switch",
    name: "2 Gang 1 Way Plate Switch",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "2 Gang 1 Way Plate Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang 1 Way Plate Switch.",
    image: [],
    keywords: [
      "REXANS",
      "2 Gang 1 Way Plate Switch",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-universal-socket-usb-c-port",
    name: "Universal Socket USB + C Port",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Universal Socket USB + C Port. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Universal Socket USB + C Port.",
    image: [],
    keywords: [
      "REXANS",
      "Universal Socket USB + C Port",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-weatherproof-switch-socket",
    name: "Weatherproof Switch Socket",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Weatherproof Switch Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Switch Socket.",
    image: [],
    keywords: [
      "REXANS",
      "Weatherproof Switch Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-16a-13a-double-socket",
    name: "16A + 13A Double Socket",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "16A + 13A Double Socket. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "16A + 13A Double Socket.",
    image: [],
    keywords: [
      "REXANS",
      "16A + 13A Double Socket",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-40mm-1-gang-metal-clad-box",
    name: "40mm 1 Gang Metal Clad Box",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "40mm 1 Gang Metal Clad Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "40mm 1 Gang Metal Clad Box.",
    image: [],
    keywords: [
      "REXANS",
      "40mm 1 Gang Metal Clad Box",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-40mm-2-gang-metal-clad-box",
    name: "40mm 2 Gang Metal Clad Box",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "40mm 2 Gang Metal Clad Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "40mm 2 Gang Metal Clad Box.",
    image: [],
    keywords: [
      "REXANS",
      "40mm 2 Gang Metal Clad Box",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-13a-1-gang-multi-socket-2-usb-neon",
    name: "13A 1 Gang Multi Socket 2 USB + Neon",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "13A 1 Gang Multi Socket 2 USB + Neon. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 1 Gang Multi Socket 2 USB + Neon.",
    image: [],
    keywords: [
      "REXANS",
      "13A 1 Gang Multi Socket 2 USB + Neon",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-13a-2-gang-multi-socket-2-usb-neon",
    name: "13A 2 Gang Multi Socket 2 USB + Neon",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "13A 2 Gang Multi Socket 2 USB + Neon. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 2 Gang Multi Socket 2 USB + Neon.",
    image: [],
    keywords: [
      "REXANS",
      "13A 2 Gang Multi Socket 2 USB + Neon",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-2-gang-2-way-switch-ip66",
    name: "2 Gang 2 Way Switch IP66",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "2 Gang 2 Way Switch IP66. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang 2 Way Switch IP66.",
    image: [],
    keywords: [
      "REXANS",
      "2 Gang 2 Way Switch IP66",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-1-gang-ip66-bell-switch",
    name: "1 Gang IP66 Bell Switch",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "1 Gang IP66 Bell Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang IP66 Bell Switch.",
    image: [],
    keywords: [
      "REXANS",
      "1 Gang IP66 Bell Switch",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-weatherproof-box-knockout",
    name: "Weatherproof Box Knockout",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Weatherproof Box Knockout. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Box Knockout.",
    image: [],
    keywords: [
      "REXANS",
      "Weatherproof Box Knockout",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-13a-plug-top",
    name: "13A Plug Top",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "13A Plug Top. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A Plug Top.",
    image: [],
    keywords: [
      "REXANS",
      "13A Plug Top",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-15a-plug-top",
    name: "15A Plug Top",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "15A Plug Top. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "15A Plug Top.",
    image: [],
    keywords: [
      "REXANS",
      "15A Plug Top",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-pvc-isolator",
    name: "PVC Isolator",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "PVC Isolator. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Isolator.",
    image: [],
    keywords: [
      "REXANS",
      "PVC Isolator",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-pvc-weatherproof-box",
    name: "PVC Weatherproof Box",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "PVC Weatherproof Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Weatherproof Box.",
    image: [],
    keywords: [
      "REXANS",
      "PVC Weatherproof Box",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-smoke-detector",
    name: "Smoke Detector",
    brand: "REXANS",
    category: "Electrical Accessories",
    subcategory: "Switches & Sockets",
    description: "Smoke Detector. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Smoke Detector.",
    image: [],
    keywords: [
      "REXANS",
      "Smoke Detector",
      "Electrical Accessories",
      "Switches & Sockets"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-24-inch-stand-fan",
    name: "24 Inch Stand Fan",
    brand: "REXANS",
    category: "Ventilation",
    description: "24 Inch Stand Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "24 Inch Stand Fan.",
    image: [],
    keywords: [
      "REXANS",
      "24 Inch Stand Fan",
      "Ventilation"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-industrial-wall-fan",
    name: "Industrial Wall Fan",
    brand: "REXANS",
    category: "Ventilation",
    description: "Industrial Wall Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Wall Fan.",
    image: [],
    keywords: [
      "REXANS",
      "Industrial Wall Fan",
      "Ventilation"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-duct-fan",
    name: "Duct Fan",
    brand: "REXANS",
    category: "Ventilation",
    description: "Duct Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Duct Fan.",
    image: [],
    keywords: [
      "REXANS",
      "Duct Fan",
      "Ventilation"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-mccb",
    name: "MCCB",
    brand: "REXANS",
    category: "Switchgear",
    description: "MCCB. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MCCB.",
    image: [],
    keywords: [
      "REXANS",
      "MCCB",
      "Switchgear"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-dust-proof-fitting",
    name: "Dust Proof Fitting",
    brand: "REXANS",
    category: "Lighting",
    description: "Dust Proof Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Dust Proof Fitting.",
    image: [],
    keywords: [
      "REXANS",
      "Dust Proof Fitting",
      "Lighting"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-led-weatherproof-fitting",
    name: "LED Weatherproof Fitting",
    brand: "REXANS",
    category: "Lighting",
    description: "LED Weatherproof Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Weatherproof Fitting.",
    image: [],
    keywords: [
      "REXANS",
      "LED Weatherproof Fitting",
      "Lighting"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-led-tube-light",
    name: "LED Tube Light",
    brand: "REXANS",
    category: "Lighting",
    description: "LED Tube Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube Light.",
    image: [],
    keywords: [
      "REXANS",
      "LED Tube Light",
      "Lighting"
    ],
    source: source(20),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-rubber-flexible-wire",
    name: "Rubber Flexible Wire",
    brand: "REXANS",
    category: "Cables & Wires",
    description: "Rubber Flexible Wire. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Rubber Flexible Wire.",
    image: [],
    keywords: [
      "REXANS",
      "Rubber Flexible Wire",
      "Cables & Wires"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-pvc-flexible-wire",
    name: "PVC Flexible Wire",
    brand: "REXANS",
    category: "Cables & Wires",
    description: "PVC Flexible Wire. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Flexible Wire.",
    image: [],
    keywords: [
      "REXANS",
      "PVC Flexible Wire",
      "Cables & Wires"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-insect-killer",
    name: "Insect Killer",
    brand: "REXANS",
    category: "Pest Control",
    description: "Insect Killer. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Insect Killer.",
    image: [],
    keywords: [
      "REXANS",
      "Insect Killer",
      "Pest Control"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-flood-light",
    name: "Flood Light",
    brand: "REXANS",
    category: "Lighting",
    description: "Flood Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flood Light.",
    image: [],
    keywords: [
      "REXANS",
      "Flood Light",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-high-bay-fitting",
    name: "High Bay Fitting",
    brand: "REXANS",
    category: "Lighting",
    description: "High Bay Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "High Bay Fitting.",
    image: [],
    keywords: [
      "REXANS",
      "High Bay Fitting",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-led-mirror-light",
    name: "LED Mirror Light",
    brand: "REXANS",
    category: "Lighting",
    description: "LED Mirror Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Mirror Light.",
    image: [],
    keywords: [
      "REXANS",
      "LED Mirror Light",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-mr16-gu5-3-lamp",
    name: "MR16 GU5.3 Lamp",
    brand: "REXANS",
    category: "Lighting",
    description: "MR16 GU5.3 Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MR16 GU5.3 Lamp.",
    image: [],
    keywords: [
      "REXANS",
      "MR16 GU5.3 Lamp",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-e14-led-candle-lamp",
    name: "E14 LED Candle Lamp",
    brand: "REXANS",
    category: "Lighting",
    description: "E14 LED Candle Lamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "E14 LED Candle Lamp.",
    image: [],
    keywords: [
      "REXANS",
      "E14 LED Candle Lamp",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-prismatic-universal-socket-led-panel",
    name: "Prismatic Universal Socket LED Panel",
    brand: "REXANS",
    category: "Lighting",
    description: "Prismatic Universal Socket LED Panel. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Prismatic Universal Socket LED Panel.",
    image: [],
    keywords: [
      "REXANS",
      "Prismatic Universal Socket LED Panel",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-led-batten-fitting",
    name: "LED Batten Fitting",
    brand: "REXANS",
    category: "Lighting",
    description: "LED Batten Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Batten Fitting.",
    image: [],
    keywords: [
      "REXANS",
      "LED Batten Fitting",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-led-t5-fitting",
    name: "LED T5 Fitting",
    brand: "REXANS",
    category: "Lighting",
    description: "LED T5 Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED T5 Fitting.",
    image: [],
    keywords: [
      "REXANS",
      "LED T5 Fitting",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-backlit-led-panel",
    name: "Backlit LED Panel",
    brand: "REXANS",
    category: "Lighting",
    description: "Backlit LED Panel. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Backlit LED Panel.",
    image: [],
    keywords: [
      "REXANS",
      "Backlit LED Panel",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-industrial-plug-ip67",
    name: "Industrial Plug IP67",
    brand: "REXANS",
    category: "Electrical Accessories",
    description: "Industrial Plug IP67. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Plug IP67.",
    image: [],
    keywords: [
      "REXANS",
      "Industrial Plug IP67",
      "Electrical Accessories"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-industrial-socket-ip67",
    name: "Industrial Socket IP67",
    brand: "REXANS",
    category: "Electrical Accessories",
    description: "Industrial Socket IP67. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Socket IP67.",
    image: [],
    keywords: [
      "REXANS",
      "Industrial Socket IP67",
      "Electrical Accessories"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-weatherproof-cover",
    name: "Weatherproof Cover",
    brand: "REXANS",
    category: "Electrical Accessories",
    description: "Weatherproof Cover. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Cover.",
    image: [],
    keywords: [
      "REXANS",
      "Weatherproof Cover",
      "Electrical Accessories"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-pvc-junction-box",
    name: "PVC Junction Box",
    brand: "REXANS",
    category: "Electrical Accessories",
    description: "PVC Junction Box. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Junction Box.",
    image: [],
    keywords: [
      "REXANS",
      "PVC Junction Box",
      "Electrical Accessories"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "rexans-wire-clip",
    name: "Wire Clip",
    brand: "REXANS",
    category: "Electrical Accessories",
    description: "Wire Clip. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Wire Clip.",
    image: [],
    keywords: [
      "REXANS",
      "Wire Clip",
      "Electrical Accessories"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "ar-ar-pulling-spring-rope",
    name: "Pulling Spring Rope",
    brand: "AR-AR",
    category: "Cable Management",
    description: "Pulling Spring Rope. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pulling Spring Rope.",
    image: [],
    keywords: [
      "AR-AR",
      "Pulling Spring Rope",
      "Cable Management"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "ar-ar-flexible-wire",
    name: "Flexible Wire",
    brand: "AR-AR",
    category: "Cables & Wires",
    description: "Flexible Wire. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flexible Wire.",
    image: [],
    keywords: [
      "AR-AR",
      "Flexible Wire",
      "Cables & Wires"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "ar-ar-bi-metallic-lug",
    name: "Bi-Metallic Lug",
    brand: "AR-AR",
    category: "Electrical Accessories",
    description: "Bi-Metallic Lug. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bi-Metallic Lug.",
    image: [],
    keywords: [
      "AR-AR",
      "Bi-Metallic Lug",
      "Electrical Accessories"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "ar-ar-cable-gland",
    name: "Cable Gland",
    brand: "AR-AR",
    category: "Electrical Accessories",
    description: "Cable Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Gland.",
    image: [],
    keywords: [
      "AR-AR",
      "Cable Gland",
      "Electrical Accessories"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "ar-ar-lockable-weatherproof-cover",
    name: "Lockable Weatherproof Cover",
    brand: "AR-AR",
    category: "Electrical Accessories",
    description: "Lockable Weatherproof Cover. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Lockable Weatherproof Cover.",
    image: [],
    keywords: [
      "AR-AR",
      "Lockable Weatherproof Cover",
      "Electrical Accessories"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "ar-ar-led-tube-fitting-combo",
    name: "LED Tube Fitting Combo",
    brand: "AR-AR",
    category: "Lighting",
    description: "LED Tube Fitting Combo. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube Fitting Combo.",
    image: [],
    keywords: [
      "AR-AR",
      "LED Tube Fitting Combo",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "ar-ar-weatherproof-fitting",
    name: "Weatherproof Fitting",
    brand: "AR-AR",
    category: "Lighting",
    description: "Weatherproof Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Fitting.",
    image: [],
    keywords: [
      "AR-AR",
      "Weatherproof Fitting",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "ar-ar-led-flood-light",
    name: "LED Flood Light",
    brand: "AR-AR",
    category: "Lighting",
    description: "LED Flood Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Flood Light.",
    image: [],
    keywords: [
      "AR-AR",
      "LED Flood Light",
      "Lighting"
    ],
    source: source(21),
    dataQuality: "catalogue"
  },
  {
    id: "ramm-flexible-cable",
    name: "Flexible Cable",
    brand: "RAMM",
    category: "Cables & Wires",
    description: "Flexible Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flexible Cable.",
    image: [],
    keywords: [
      "RAMM",
      "Flexible Cable",
      "Cables & Wires"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "ramm-speaker-wire",
    name: "Speaker Wire",
    brand: "RAMM",
    category: "Cables & Wires",
    description: "Speaker Wire. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Speaker Wire.",
    image: [],
    keywords: [
      "RAMM",
      "Speaker Wire",
      "Cables & Wires"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "ramm-gi-flexible-conduit",
    name: "GI Flexible Conduit",
    brand: "RAMM",
    category: "Cable Management",
    description: "GI Flexible Conduit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Flexible Conduit.",
    image: [],
    keywords: [
      "RAMM",
      "GI Flexible Conduit",
      "Cable Management"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "ramm-pvc-trunking",
    name: "PVC Trunking",
    brand: "RAMM",
    category: "Cable Management",
    description: "PVC Trunking. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Trunking.",
    image: [],
    keywords: [
      "RAMM",
      "PVC Trunking",
      "Cable Management"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "ramm-smoke-detector",
    name: "Smoke Detector",
    brand: "RAMM",
    category: "Electrical Accessories",
    description: "Smoke Detector. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Smoke Detector.",
    image: [],
    keywords: [
      "RAMM",
      "Smoke Detector",
      "Electrical Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "ramm-weatherproof-fitting",
    name: "Weatherproof Fitting",
    brand: "RAMM",
    category: "Electrical Accessories",
    description: "Weatherproof Fitting. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Fitting.",
    image: [],
    keywords: [
      "RAMM",
      "Weatherproof Fitting",
      "Electrical Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "ramm-flood-light",
    name: "Flood Light",
    brand: "RAMM",
    category: "Lighting",
    description: "Flood Light. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flood Light.",
    image: [],
    keywords: [
      "RAMM",
      "Flood Light",
      "Lighting"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "dupro-electrical-tester",
    name: "Electrical Tester",
    brand: "DUPRO",
    category: "Electrical Tools",
    description: "Electrical Tester. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical Tester.",
    image: [],
    keywords: [
      "DUPRO",
      "Electrical Tester",
      "Electrical Tools"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-copper-tape",
    name: "Copper Tape",
    brand: "",
    category: "Earthing",
    description: "Copper Tape. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Copper Tape.",
    image: [],
    keywords: [
      "Copper Tape",
      "Earthing"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-hanging-clamp",
    name: "Hanging Clamp",
    brand: "",
    category: "Electrical Accessories",
    description: "Hanging Clamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hanging Clamp.",
    image: [],
    keywords: [
      "Hanging Clamp",
      "Electrical Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-cable-tray-coupler",
    name: "Cable Tray Coupler",
    brand: "",
    category: "Electrical Accessories",
    description: "Cable Tray Coupler. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Tray Coupler.",
    image: [],
    keywords: [
      "Cable Tray Coupler",
      "Electrical Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-lsf-shroud",
    name: "LSF Shroud",
    brand: "",
    category: "Electrical Accessories",
    description: "LSF Shroud. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LSF Shroud.",
    image: [],
    keywords: [
      "LSF Shroud",
      "Electrical Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-cable-tray",
    name: "Cable Tray",
    brand: "",
    category: "Cable Management",
    description: "Cable Tray. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Tray.",
    image: [],
    keywords: [
      "Cable Tray",
      "Cable Management"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "mk-mk-switch",
    name: "MK Switch",
    brand: "MK",
    category: "Electrical Accessories",
    description: "MK Switch. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MK Switch.",
    image: [],
    keywords: [
      "MK",
      "MK Switch",
      "Electrical Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "ghosia-ghosia-fan",
    name: "Ghosia Fan",
    brand: "GHOSIA",
    category: "Ventilation",
    description: "Ghosia Fan. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ghosia Fan.",
    image: [],
    keywords: [
      "GHOSIA",
      "Ghosia Fan",
      "Ventilation"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "cellpack-cellpack-cable-joint-kit",
    name: "Cellpack Cable Joint Kit",
    brand: "CELLPACK",
    category: "Cable Accessories",
    description: "Cellpack Cable Joint Kit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cellpack Cable Joint Kit.",
    image: [],
    keywords: [
      "CELLPACK",
      "Cellpack Cable Joint Kit",
      "Cable Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-u-bolt-clamp",
    name: "U Bolt Clamp",
    brand: "",
    category: "Cable Management",
    description: "U Bolt Clamp. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "U Bolt Clamp.",
    image: [],
    keywords: [
      "U Bolt Clamp",
      "Cable Management"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-cable-drum-lifting-jack-hydraulic",
    name: "Cable Drum Lifting Jack Hydraulic",
    brand: "",
    category: "Cable Management",
    description: "Cable Drum Lifting Jack Hydraulic. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Drum Lifting Jack Hydraulic.",
    image: [],
    keywords: [
      "Cable Drum Lifting Jack Hydraulic",
      "Cable Management"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-electrical-hand-gloves-11kv",
    name: "Electrical Hand Gloves 11kV",
    brand: "",
    category: "Safety Equipment",
    description: "Electrical Hand Gloves 11kV. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical Hand Gloves 11kV.",
    image: [],
    keywords: [
      "Electrical Hand Gloves 11kV",
      "Safety Equipment"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-electrical-hand-gloves-33kv",
    name: "Electrical Hand Gloves 33kV",
    brand: "",
    category: "Safety Equipment",
    description: "Electrical Hand Gloves 33kV. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical Hand Gloves 33kV.",
    image: [],
    keywords: [
      "Electrical Hand Gloves 33kV",
      "Safety Equipment"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-fire-cable",
    name: "Fire Cable",
    brand: "",
    category: "Cables & Wires",
    description: "Fire Cable. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fire Cable.",
    image: [],
    keywords: [
      "Fire Cable",
      "Cables & Wires"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "hex-braco-cw-cable-gland",
    name: "CW Cable Gland",
    brand: "HEX / BRACO",
    category: "Electrical Accessories",
    description: "CW Cable Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "CW Cable Gland.",
    image: [],
    keywords: [
      "HEX / BRACO",
      "CW Cable Gland",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "hex-braco-bw-cable-gland",
    name: "BW Cable Gland",
    brand: "HEX / BRACO",
    category: "Electrical Accessories",
    description: "BW Cable Gland. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "BW Cable Gland.",
    image: [],
    keywords: [
      "HEX / BRACO",
      "BW Cable Gland",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-terminal-block",
    name: "Terminal Block",
    brand: "",
    category: "Electrical Accessories",
    description: "Terminal Block. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Terminal Block.",
    image: [],
    keywords: [
      "Terminal Block",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-spring-nut",
    name: "Spring Nut",
    brand: "",
    category: "Electrical Accessories",
    description: "Spring Nut. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spring Nut.",
    image: [],
    keywords: [
      "Spring Nut",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-line-tap",
    name: "Line Tap",
    brand: "",
    category: "Electrical Accessories",
    description: "Line Tap. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Line Tap.",
    image: [],
    keywords: [
      "Line Tap",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-spiral-bolt",
    name: "Spiral Bolt",
    brand: "",
    category: "Electrical Accessories",
    description: "Spiral Bolt. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spiral Bolt.",
    image: [],
    keywords: [
      "Spiral Bolt",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-zinc-plated-steel-screw",
    name: "Zinc Plated Steel Screw",
    brand: "",
    category: "Electrical Accessories",
    description: "Zinc Plated Steel Screw. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Zinc Plated Steel Screw.",
    image: [],
    keywords: [
      "Zinc Plated Steel Screw",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "taparia-taparia-tester-813",
    name: "Taparia Tester 813",
    brand: "TAPARIA",
    category: "Electrical Tools",
    description: "Taparia Tester 813. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Taparia Tester 813.",
    image: [],
    keywords: [
      "TAPARIA",
      "Taparia Tester 813",
      "Electrical Tools"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "taparia-taparia-tester-814",
    name: "Taparia Tester 814",
    brand: "TAPARIA",
    category: "Electrical Tools",
    description: "Taparia Tester 814. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Taparia Tester 814.",
    image: [],
    keywords: [
      "TAPARIA",
      "Taparia Tester 814",
      "Electrical Tools"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "taparia-taparia-tester-818",
    name: "Taparia Tester 818",
    brand: "TAPARIA",
    category: "Electrical Tools",
    description: "Taparia Tester 818. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Taparia Tester 818.",
    image: [],
    keywords: [
      "TAPARIA",
      "Taparia Tester 818",
      "Electrical Tools"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-earth-pit",
    name: "Earth Pit",
    brand: "",
    category: "Earthing",
    description: "Earth Pit. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earth Pit.",
    image: [],
    keywords: [
      "Earth Pit",
      "Earthing"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-industrial-salt",
    name: "Industrial Salt",
    brand: "",
    category: "Earthing",
    description: "Industrial Salt. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Salt.",
    image: [],
    keywords: [
      "Industrial Salt",
      "Earthing"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "electrical-earthing-charcoal",
    name: "Earthing Charcoal",
    brand: "",
    category: "Earthing",
    description: "Earthing Charcoal. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earthing Charcoal.",
    image: [],
    keywords: [
      "Earthing Charcoal",
      "Earthing"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
];