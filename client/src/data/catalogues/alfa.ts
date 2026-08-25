import type { Product } from "../productTypes";

const ALFA_CATALOGUE = "Revise Alfa Catalogue New";

const source = (page: number) => ({
  type: "catalogue" as const,
  document: ALFA_CATALOGUE,
  page,
  year: 2025
});

export const alfaProducts: Product[] = [
  {
    id: "kabal-low-voltage-cable",
    name: "Low Voltage Cable",
    brand: "KABAL",
    category: "Cables & Wires",
    description: "Low Voltage Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Low Voltage Cable from the Alfa Electrical Materials catalogue.",
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
    description: "Medium Voltage Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Medium Voltage Cable from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Wires listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Wires from the Alfa Electrical Materials catalogue.",
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
    description: "LSZH Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LSZH Cable from the Alfa Electrical Materials catalogue.",
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
    description: "Single Core LSZH Wire listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Single Core LSZH Wire from the Alfa Electrical Materials catalogue.",
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
    description: "FP-400 / MICA Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "FP-400 / MICA Cable from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Flex / 105° Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Flex / 105° Cable from the Alfa Electrical Materials catalogue.",
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
    description: "Fire Performance Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fire Performance Cable from the Alfa Electrical Materials catalogue.",
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
    description: "MV/HV Cable up to 36kV listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MV/HV Cable up to 36kV from the Alfa Electrical Materials catalogue.",
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
    description: "VFD Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "VFD Cable from the Alfa Electrical Materials catalogue.",
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
    description: "Panel Wire 105° listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Panel Wire 105° from the Alfa Electrical Materials catalogue.",
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
    description: "Panel Wire LSZH listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Panel Wire LSZH from the Alfa Electrical Materials catalogue.",
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
    description: "Control Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Control Cable from the Alfa Electrical Materials catalogue.",
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
    description: "LIYC Screened Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LIYC Screened Cable from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Weatherproof Junction Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Weatherproof Junction Box from the Alfa Electrical Materials catalogue.",
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
    description: "Metal Weatherproof Junction Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Weatherproof Junction Box from the Alfa Electrical Materials catalogue.",
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
    description: "PG Cable Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PG Cable Gland from the Alfa Electrical Materials catalogue.",
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
    description: "Metric Cable Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metric Cable Gland from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Weatherproof Isolator listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Weatherproof Isolator from the Alfa Electrical Materials catalogue.",
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
    description: "Metal Weatherproof Isolator listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Weatherproof Isolator from the Alfa Electrical Materials catalogue.",
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
    description: "Weatherproof Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Switch from the Alfa Electrical Materials catalogue.",
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
    description: "Industrial Plug listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Plug from the Alfa Electrical Materials catalogue.",
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
    description: "Industrial Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Interlocking Switched Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Interlocking Switched Socket from the Alfa Electrical Materials catalogue.",
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
    id: "alfa-rubber-flexible-cable-h07rn-f",
    name: "Rubber Flexible Cable H07RN-F",
    brand: "ALFA",
    category: "Cables & Wires",
    description: "Rubber Flexible Cable H07RN-F listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Rubber Flexible Cable H07RN-F from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Rubber Flexible Cable H07RN-F",
      "Cables & Wires"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-welding-cable",
    name: "Welding Cable",
    brand: "ALFA",
    category: "Cables & Wires",
    description: "Welding Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Welding Cable from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Welding Cable",
      "Cables & Wires"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-strip-connector",
    name: "PVC Strip Connector",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Wiring Accessories",
    description: "PVC Strip Connector listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Strip Connector from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Strip Connector",
      "Electrical Accessories",
      "Wiring Accessories"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-electrical-pvc-insulation-tape",
    name: "Electrical PVC Insulation Tape",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Wiring Accessories",
    description: "Electrical PVC Insulation Tape listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical PVC Insulation Tape from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Electrical PVC Insulation Tape",
      "Electrical Accessories",
      "Wiring Accessories"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-crimping-tool",
    name: "Crimping Tool",
    brand: "ALFA",
    category: "Electrical Tools",
    subcategory: "Cable Tools",
    description: "Crimping Tool listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Crimping Tool from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Crimping Tool",
      "Electrical Tools",
      "Cable Tools"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-hydraulic-crimping-tool",
    name: "Hydraulic Crimping Tool",
    brand: "ALFA",
    category: "Electrical Tools",
    subcategory: "Cable Tools",
    description: "Hydraulic Crimping Tool listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hydraulic Crimping Tool from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Hydraulic Crimping Tool",
      "Electrical Tools",
      "Cable Tools"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-hydraulic-cable-cutter",
    name: "Hydraulic Cable Cutter",
    brand: "ALFA",
    category: "Electrical Tools",
    subcategory: "Cable Tools",
    description: "Hydraulic Cable Cutter listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hydraulic Cable Cutter from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Hydraulic Cable Cutter",
      "Electrical Tools",
      "Cable Tools"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-manual-cable-cutter",
    name: "Manual Cable Cutter",
    brand: "ALFA",
    category: "Electrical Tools",
    subcategory: "Cable Tools",
    description: "Manual Cable Cutter listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Manual Cable Cutter from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Manual Cable Cutter",
      "Electrical Tools",
      "Cable Tools"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-lamp",
    name: "LED Lamp",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Lamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Lamp",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-luminaire",
    name: "LED Luminaire",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Luminaire listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Luminaire from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Luminaire",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-conventional-lighting",
    name: "Conventional Lighting",
    brand: "ALFA",
    category: "Lighting",
    description: "Conventional Lighting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Conventional Lighting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Conventional Lighting",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-magnetic-control-gear",
    name: "Magnetic Control Gear",
    brand: "ALFA",
    category: "Lighting",
    description: "Magnetic Control Gear listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Magnetic Control Gear from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Magnetic Control Gear",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-electronic-control-gear",
    name: "Electronic Control Gear",
    brand: "ALFA",
    category: "Lighting",
    description: "Electronic Control Gear listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electronic Control Gear from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Electronic Control Gear",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-hid-lamp",
    name: "HID Lamp",
    brand: "ALFA",
    category: "Lighting",
    description: "HID Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "HID Lamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "HID Lamp",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-hid-luminaire",
    name: "HID Luminaire",
    brand: "ALFA",
    category: "Lighting",
    description: "HID Luminaire listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "HID Luminaire from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "HID Luminaire",
      "Lighting"
    ],
    source: source(5),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-ballast",
    name: "Ballast",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting Control Gear",
    description: "Ballast listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ballast from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Ballast",
      "Lighting",
      "Lighting Control Gear"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-ignitor",
    name: "Ignitor",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting Control Gear",
    description: "Ignitor listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ignitor from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Ignitor",
      "Lighting",
      "Lighting Control Gear"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-capacitor",
    name: "Capacitor",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting Control Gear",
    description: "Capacitor listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Capacitor from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Capacitor",
      "Lighting",
      "Lighting Control Gear"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-cable-lug",
    name: "Cable Lug",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Cable Lug listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Lug from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Cable Lug",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-bw-cable-gland",
    name: "BW Cable Gland",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "BW Cable Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "BW Cable Gland from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "BW Cable Gland",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-cw-cable-gland",
    name: "CW Cable Gland",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "CW Cable Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "CW Cable Gland from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "CW Cable Gland",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-a1a2-cable-gland",
    name: "A1A2 Cable Gland",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "A1A2 Cable Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "A1A2 Cable Gland from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "A1A2 Cable Gland",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-e1w-cable-gland",
    name: "E1W Cable Gland",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "E1W Cable Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "E1W Cable Gland from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "E1W Cable Gland",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-bi-metallic-lug",
    name: "Bi-Metallic Lug",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Bi-Metallic Lug listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bi-Metallic Lug from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Bi-Metallic Lug",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pin-type-lug",
    name: "Pin Type Lug",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Pin Type Lug listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pin Type Lug from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Pin Type Lug",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-ferrule",
    name: "Ferrule",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Ferrule listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ferrule from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Ferrule",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-earth-rod",
    name: "Earth Rod",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Earth Rod listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earth Rod from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Earth Rod",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-earth-rod-accessories",
    name: "Earth Rod Accessories",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Earth Rod Accessories listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earth Rod Accessories from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Earth Rod Accessories",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-copper-c-clamp",
    name: "Copper C Clamp",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Cable Termination & Earthing",
    description: "Copper C Clamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Copper C Clamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Copper C Clamp",
      "Electrical Accessories",
      "Cable Termination & Earthing"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-conduit",
    name: "PVC Conduit",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Conduit & Accessories",
    description: "PVC Conduit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Conduit from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Conduit",
      "Electrical Accessories",
      "Conduit & Accessories"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-conduit-accessories",
    name: "PVC Conduit Accessories",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Conduit & Accessories",
    description: "PVC Conduit Accessories listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Conduit Accessories from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Conduit Accessories",
      "Electrical Accessories",
      "Conduit & Accessories"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-adaptable-box",
    name: "PVC Adaptable Box",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Conduit & Accessories",
    description: "PVC Adaptable Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Adaptable Box from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Adaptable Box",
      "Electrical Accessories",
      "Conduit & Accessories"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-glue",
    name: "PVC Glue",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Conduit & Accessories",
    description: "PVC Glue listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Glue from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Glue",
      "Electrical Accessories",
      "Conduit & Accessories"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-cable-management-system",
    name: "Cable Management System",
    brand: "ALFA",
    category: "Cable Management",
    description: "Cable Management System listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Management System from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Cable Management System",
      "Cable Management"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-cable-tray",
    name: "GI Cable Tray",
    brand: "ALFA",
    category: "Cable Management",
    description: "GI Cable Tray listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Cable Tray from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Cable Tray",
      "Cable Management"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-pvc-coated-flexible-conduit",
    name: "GI PVC Coated Flexible Conduit",
    brand: "ALFA",
    category: "Cable Management",
    description: "GI PVC Coated Flexible Conduit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI PVC Coated Flexible Conduit from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI PVC Coated Flexible Conduit",
      "Cable Management"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-timer-switch",
    name: "Timer Switch",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Controls",
    description: "Timer Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Timer Switch from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Timer Switch",
      "Electrical Accessories",
      "Controls"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-photo-cell",
    name: "Photo Cell",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Controls",
    description: "Photo Cell listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Photo Cell from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Photo Cell",
      "Electrical Accessories",
      "Controls"
    ],
    source: source(6),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-switch",
    name: "Switch",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Switch from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Switch",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-socket",
    name: "Socket",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Socket from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Socket",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-conduit",
    name: "GI Conduit",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "GI Conduit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Conduit from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Conduit",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-hot-dip-galvanised-conduit",
    name: "Hot Dip Galvanised Conduit",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Hot Dip Galvanised Conduit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hot Dip Galvanised Conduit from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Hot Dip Galvanised Conduit",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-pvc-coated-conduit",
    name: "GI PVC Coated Conduit",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "GI PVC Coated Conduit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI PVC Coated Conduit from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI PVC Coated Conduit",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-pipe",
    name: "PVC Pipe",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "PVC Pipe listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Pipe from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Pipe",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-pipe-accessories",
    name: "PVC Pipe Accessories",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "PVC Pipe Accessories listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Pipe Accessories from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Pipe Accessories",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-solvent-cement-glue",
    name: "Solvent Cement Glue",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Solvent Cement Glue listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Solvent Cement Glue from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Solvent Cement Glue",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-waterproof-box",
    name: "PVC Waterproof Box",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "PVC Waterproof Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Waterproof Box from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Waterproof Box",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-floor-box-under-floor",
    name: "Floor Box - Under Floor",
    brand: "ALFA",
    category: "Cable Management",
    description: "Floor Box - Under Floor listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Floor Box - Under Floor from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Floor Box - Under Floor",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-floor-box-flush-floor",
    name: "Floor Box - Flush Floor",
    brand: "ALFA",
    category: "Cable Management",
    description: "Floor Box - Flush Floor listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Floor Box - Flush Floor from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Floor Box - Flush Floor",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-box",
    name: "GI Box",
    brand: "ALFA",
    category: "Cable Management",
    description: "GI Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Box from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Box",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-adaptable-box",
    name: "GI Adaptable Box",
    brand: "ALFA",
    category: "Cable Management",
    description: "GI Adaptable Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Adaptable Box from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Adaptable Box",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-metal-enclosure",
    name: "Metal Enclosure",
    brand: "ALFA",
    category: "Cable Management",
    description: "Metal Enclosure listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Enclosure from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Metal Enclosure",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-din-rail",
    name: "DIN Rail",
    brand: "ALFA",
    category: "Cable Management",
    description: "DIN Rail listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "DIN Rail from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "DIN Rail",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-neutral-bar",
    name: "Neutral Bar",
    brand: "ALFA",
    category: "Cable Management",
    description: "Neutral Bar listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Neutral Bar from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Neutral Bar",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-earth-bar",
    name: "Earth Bar",
    brand: "ALFA",
    category: "Cable Management",
    description: "Earth Bar listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earth Bar from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Earth Bar",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-cable-tie",
    name: "PVC Cable Tie",
    brand: "ALFA",
    category: "Cable Management",
    description: "PVC Cable Tie listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Cable Tie from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Cable Tie",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-cable-tie",
    name: "GI Cable Tie",
    brand: "ALFA",
    category: "Cable Management",
    description: "GI Cable Tie listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Cable Tie from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Cable Tie",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-pvc-coated-cable-tie",
    name: "GI PVC Coated Cable Tie",
    brand: "ALFA",
    category: "Cable Management",
    description: "GI PVC Coated Cable Tie listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI PVC Coated Cable Tie from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI PVC Coated Cable Tie",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pin-type-busbar",
    name: "Pin Type Busbar",
    brand: "ALFA",
    category: "Cable Management",
    description: "Pin Type Busbar listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pin Type Busbar from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Pin Type Busbar",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-u-type-busbar",
    name: "U Type Busbar",
    brand: "ALFA",
    category: "Cable Management",
    description: "U Type Busbar listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "U Type Busbar from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "U Type Busbar",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-spiral-wrapping",
    name: "Spiral Wrapping",
    brand: "ALFA",
    category: "Cable Management",
    description: "Spiral Wrapping listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spiral Wrapping from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Spiral Wrapping",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pg-gland",
    name: "PG Gland",
    brand: "ALFA",
    category: "Cable Management",
    description: "PG Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PG Gland from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PG Gland",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-stuffing-gland",
    name: "Stuffing Gland",
    brand: "ALFA",
    category: "Cable Management",
    description: "Stuffing Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Stuffing Gland from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Stuffing Gland",
      "Cable Management"
    ],
    source: source(7),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-bentonite-powder",
    name: "Bentonite Powder",
    brand: "ALFA",
    category: "Earthing",
    description: "Bentonite Powder listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bentonite Powder from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
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
    description: "PVC Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Weatherproof Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Metal Clad Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Clad Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Metal Clad Accessories listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Clad Accessories from the Alfa Electrical Materials catalogue.",
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
    description: "Chrome Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Chrome Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Silver Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Silver Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Gold Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Gold Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Pop-Up Floor Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pop-Up Floor Socket from the Alfa Electrical Materials catalogue.",
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
    id: "alfa-gi-flexible-conduit",
    name: "GI Flexible Conduit",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Flexible Conduit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Flexible Conduit from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Flexible Conduit",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pulling-spring",
    name: "Pulling Spring",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Pulling Spring listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pulling Spring from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Pulling Spring",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-bending-spring",
    name: "Bending Spring",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Bending Spring listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bending Spring from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Bending Spring",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-brass-bush",
    name: "Brass Bush",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Brass Bush listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Brass Bush from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Brass Bush",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-brass-lock-nut",
    name: "Brass Lock Nut",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Brass Lock Nut listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Brass Lock Nut from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Brass Lock Nut",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-brass-reducer",
    name: "Brass Reducer",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Brass Reducer listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Brass Reducer from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Brass Reducer",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-dome-cover",
    name: "GI Dome Cover",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Dome Cover listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Dome Cover from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Dome Cover",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-dome-hook",
    name: "GI Dome Hook",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Dome Hook listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Dome Hook from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Dome Hook",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-weatherproof-pvc-cover",
    name: "Weatherproof PVC Cover",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Weatherproof PVC Cover listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof PVC Cover from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Weatherproof PVC Cover",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-heat-shrink-sleeve",
    name: "Heat Shrink Sleeve",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "Heat Shrink Sleeve listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Heat Shrink Sleeve from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Heat Shrink Sleeve",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-slotted-channel",
    name: "GI Slotted Channel",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Slotted Channel listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Slotted Channel from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Slotted Channel",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-gi-trunking",
    name: "GI Trunking",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "GI Trunking listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Trunking from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "GI Trunking",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-micc-clip",
    name: "MICC Clip",
    brand: "ALFA",
    category: "Cable Management",
    subcategory: "Conduit & Cable Management",
    description: "MICC Clip listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MICC Clip from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "MICC Clip",
      "Cable Management",
      "Conduit & Cable Management"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-bending-machine",
    name: "Bending Machine",
    brand: "ALFA",
    category: "Electrical Tools",
    subcategory: "Installation Tools",
    description: "Bending Machine listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bending Machine from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Bending Machine",
      "Electrical Tools",
      "Installation Tools"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-cable-cutter",
    name: "Cable Cutter",
    brand: "ALFA",
    category: "Electrical Tools",
    subcategory: "Installation Tools",
    description: "Cable Cutter listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Cutter from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Cable Cutter",
      "Electrical Tools",
      "Installation Tools"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-multicore-cable",
    name: "PVC Multicore Cable",
    brand: "ALFA",
    category: "Cables & Wires",
    description: "PVC Multicore Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Multicore Cable from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Multicore Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-communication-cable",
    name: "PVC Communication Cable",
    brand: "ALFA",
    category: "Cables & Wires",
    description: "PVC Communication Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Communication Cable from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Communication Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-cat6-data-cable",
    name: "Cat6 Data Cable",
    brand: "ALFA",
    category: "Cables & Wires",
    description: "Cat6 Data Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cat6 Data Cable from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Cat6 Data Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-cat5-data-cable",
    name: "Cat5 Data Cable",
    brand: "ALFA",
    category: "Cables & Wires",
    description: "Cat5 Data Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cat5 Data Cable from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Cat5 Data Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-dish-wire",
    name: "Dish Wire",
    brand: "ALFA",
    category: "Cables & Wires",
    description: "Dish Wire listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Dish Wire from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Dish Wire",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-speaker-cable",
    name: "Speaker Cable",
    brand: "ALFA",
    category: "Cables & Wires",
    description: "Speaker Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Speaker Cable from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Speaker Cable",
      "Cables & Wires"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-flood-light",
    name: "LED Flood Light",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Flood Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Flood Light from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Flood Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-cob-light",
    name: "LED COB Light",
    brand: "ALFA",
    category: "Lighting",
    description: "LED COB Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED COB Light from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED COB Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-mirror-light",
    name: "LED Mirror Light",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Mirror Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Mirror Light from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Mirror Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-panel-light",
    name: "LED Panel Light",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Panel Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Panel Light from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Panel Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-ufo-light",
    name: "UFO Light",
    brand: "ALFA",
    category: "Lighting",
    description: "UFO Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "UFO Light from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "UFO Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-prismatic-dust-proof-fitting",
    name: "Prismatic Dust Proof Fitting",
    brand: "ALFA",
    category: "Lighting",
    description: "Prismatic Dust Proof Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Prismatic Dust Proof Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Prismatic Dust Proof Fitting",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-t5-fitting",
    name: "T5 Fitting",
    brand: "ALFA",
    category: "Lighting",
    description: "T5 Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "T5 Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "T5 Fitting",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-tube",
    name: "LED Tube",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Tube listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Tube",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-bulb",
    name: "LED Bulb",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Bulb listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Bulb from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Bulb",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-candle-lamp",
    name: "LED Candle Lamp",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Candle Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Candle Lamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Candle Lamp",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-mr16-lamp",
    name: "MR16 Lamp",
    brand: "ALFA",
    category: "Lighting",
    description: "MR16 Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MR16 Lamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "MR16 Lamp",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-highway-fitting",
    name: "LED Highway Fitting",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Highway Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Highway Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Highway Fitting",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-emergency-light",
    name: "Emergency Light",
    brand: "ALFA",
    category: "Lighting",
    description: "Emergency Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Emergency Light from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Emergency Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-strip-light",
    name: "LED Strip Light",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Strip Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Strip Light from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Strip Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-60x60-led-panel-light",
    name: "60x60 LED Panel Light",
    brand: "ALFA",
    category: "Lighting",
    description: "60x60 LED Panel Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "60x60 LED Panel Light from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "60x60 LED Panel Light",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-led-weatherproof-fitting",
    name: "LED Weatherproof Fitting",
    brand: "ALFA",
    category: "Lighting",
    description: "LED Weatherproof Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Weatherproof Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LED Weatherproof Fitting",
      "Lighting"
    ],
    source: source(8),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-batten-fitting",
    name: "Batten Fitting",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Batten Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Batten Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Batten Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-weatherproof-fitting",
    name: "Weatherproof Fitting",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Weatherproof Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Weatherproof Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-prismatic-fitting",
    name: "Prismatic Fitting",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Prismatic Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Prismatic Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Prismatic Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-louvre-fitting",
    name: "Louvre Fitting",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Louvre Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Louvre Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Louvre Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-mirror-light",
    name: "Mirror Light",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Mirror Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Mirror Light from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Mirror Light",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-metal-halide-fitting",
    name: "Metal Halide Fitting",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Metal Halide Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Halide Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Metal Halide Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-halogen-fitting",
    name: "Halogen Fitting",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Halogen Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Halogen Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Halogen Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-hand-lamp",
    name: "Hand Lamp",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Hand Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hand Lamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Hand Lamp",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-metal-halide-lamp",
    name: "Metal Halide Lamp",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Metal Halide Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Halide Lamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Metal Halide Lamp",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-halogen-lamp",
    name: "Halogen Lamp",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Halogen Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Halogen Lamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Halogen Lamp",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-red-alarm-bell",
    name: "Red Alarm Bell",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Red Alarm Bell listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Red Alarm Bell from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Red Alarm Bell",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-door-bell",
    name: "Door Bell",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Door Bell listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Door Bell from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Door Bell",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-magnetic-ballast",
    name: "Magnetic Ballast",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Magnetic Ballast listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Magnetic Ballast from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Magnetic Ballast",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-electronic-ballast",
    name: "Electronic Ballast",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Electronic Ballast listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electronic Ballast from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Electronic Ballast",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-starter",
    name: "Starter",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Starter listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Starter from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Starter",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-bulkhead-fitting",
    name: "Bulkhead Fitting",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Bulkhead Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bulkhead Fitting from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Bulkhead Fitting",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-tube-holder",
    name: "Tube Holder",
    brand: "ALFA",
    category: "Lighting",
    subcategory: "Lighting & Accessories",
    description: "Tube Holder listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Tube Holder from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Tube Holder",
      "Lighting",
      "Lighting & Accessories"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-elcb-box",
    name: "ELCB Box",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "ELCB Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "ELCB Box from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "ELCB Box",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-motion-sensor",
    name: "Motion Sensor",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Motion Sensor listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Motion Sensor from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Motion Sensor",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-smoke-detector",
    name: "Smoke Detector",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Smoke Detector listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Smoke Detector from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Smoke Detector",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-wire-clip",
    name: "Wire Clip",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Wire Clip listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Wire Clip from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Wire Clip",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-trunking-sleeve",
    name: "Trunking Sleeve",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Trunking Sleeve listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Trunking Sleeve from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Trunking Sleeve",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-binding-wrap",
    name: "Binding Wrap",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Binding Wrap listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Binding Wrap from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Binding Wrap",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-fishing-tape",
    name: "Fishing Tape",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Fishing Tape listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fishing Tape from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Fishing Tape",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-isolator",
    name: "PVC Isolator",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "PVC Isolator listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Isolator from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Isolator",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-electrical-tester",
    name: "Electrical Tester",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Electrical Tester listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical Tester from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Electrical Tester",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-hand-gloves",
    name: "Hand Gloves",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "General Electrical",
    description: "Hand Gloves listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hand Gloves from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Hand Gloves",
      "Electrical Accessories",
      "General Electrical"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-round-exhaust-fan",
    name: "PVC Round Exhaust Fan",
    brand: "ALFA",
    category: "Ventilation",
    description: "PVC Round Exhaust Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Round Exhaust Fan from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Round Exhaust Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pvc-square-auto-shutter-exhaust-fan",
    name: "PVC Square Auto Shutter Exhaust Fan",
    brand: "ALFA",
    category: "Ventilation",
    description: "PVC Square Auto Shutter Exhaust Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Square Auto Shutter Exhaust Fan from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "PVC Square Auto Shutter Exhaust Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-metal-exhaust-fan",
    name: "Metal Exhaust Fan",
    brand: "ALFA",
    category: "Ventilation",
    description: "Metal Exhaust Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Exhaust Fan from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Metal Exhaust Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-mist-fan",
    name: "Mist Fan",
    brand: "ALFA",
    category: "Ventilation",
    description: "Mist Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Mist Fan from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Mist Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-pedestal-fan",
    name: "Pedestal Fan",
    brand: "ALFA",
    category: "Ventilation",
    description: "Pedestal Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pedestal Fan from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Pedestal Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-dust-ceiling-fan",
    name: "Dust Ceiling Fan",
    brand: "ALFA",
    category: "Ventilation",
    description: "Dust Ceiling Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Dust Ceiling Fan from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Dust Ceiling Fan",
      "Ventilation"
    ],
    source: source(9),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-telephone-box",
    name: "Telephone Box",
    brand: "ALFA",
    category: "Electrical Accessories",
    description: "Telephone Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Telephone Box from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
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
    description: "Alhama Weatherproof LED Light Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Alhama Weatherproof LED Light Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "Vortice 150/6 AR Wall/Window Axial Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Vortice 150/6 AR Wall/Window Axial Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Vortice 230/9 AR Wall/Window Axial Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Vortice 230/9 AR Wall/Window Axial Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Vortice 15/6 A Wall/Window Axial Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Vortice 15/6 A Wall/Window Axial Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Vortice 23/9 AR Wall/Window Axial Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Vortice 23/9 AR Wall/Window Axial Fan from the Alfa Electrical Materials catalogue.",
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
    id: "alfa-window-type-ventilating-fan-6-inch",
    name: "Window Type Ventilating Fan 6 Inch",
    brand: "ALFA",
    category: "Ventilation",
    description: "Window Type Ventilating Fan 6 Inch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Window Type Ventilating Fan 6 Inch from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Window Type Ventilating Fan 6 Inch",
      "Ventilation"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-window-type-ventilating-fan-9-inch",
    name: "Window Type Ventilating Fan 9 Inch",
    brand: "ALFA",
    category: "Ventilation",
    description: "Window Type Ventilating Fan 9 Inch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Window Type Ventilating Fan 9 Inch from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Window Type Ventilating Fan 9 Inch",
      "Ventilation"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-timer-switch-30a",
    name: "Timer Switch 30A",
    brand: "ALFA",
    category: "Electrical Accessories",
    subcategory: "Controls",
    description: "Timer Switch 30A listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Timer Switch 30A from the Alfa Electrical Materials catalogue.",
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
      "ALFA",
      "Timer Switch 30A",
      "Electrical Accessories",
      "Controls"
    ],
    source: source(10),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-110-220v-step-up-down-single-phase-auto-transformer",
    name: "110/220V Step Up-Down Single Phase Auto Transformer",
    brand: "ALFA",
    category: "Electrical Equipment",
    subcategory: "Transformers",
    description: "110/220V Step Up-Down Single Phase Auto Transformer listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "110/220V Step Up-Down Single Phase Auto Transformer from the Alfa Electrical Materials catalogue.",
    specifications: [
      {
        "label": "Reversible Voltages",
        "value": "110V / 220V AC"
      }
    ],
    image: [],
    keywords: [
      "ALFA",
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
    description: "GT Cast Resin Cable Joint Kit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Cast Resin Cable Joint Kit from the Alfa Electrical Materials catalogue.",
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
    description: "GT Straight Joint listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Straight Joint from the Alfa Electrical Materials catalogue.",
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
    description: "GT Branch Joint listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Branch Joint from the Alfa Electrical Materials catalogue.",
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
    description: "GT Double Branch Joint listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Double Branch Joint from the Alfa Electrical Materials catalogue.",
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
    description: "GT Transition Joint listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GT Transition Joint from the Alfa Electrical Materials catalogue.",
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
    description: "GTZ Cylindrical Joint listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GTZ Cylindrical Joint from the Alfa Electrical Materials catalogue.",
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
    description: "GA 2-Component Polyurethane Cast Resin listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GA 2-Component Polyurethane Cast Resin from the Alfa Electrical Materials catalogue.",
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
    description: "Metal Exhaust Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Exhaust Fan from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Round Exhaust Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Round Exhaust Fan from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Square Auto Shutter Duct Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Square Auto Shutter Duct Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Window Type Duct Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Window Type Duct Fan from the Alfa Electrical Materials catalogue.",
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
    description: "60x60 Ceiling Fan + LED listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "60x60 Ceiling Fan + LED from the Alfa Electrical Materials catalogue.",
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
    description: "Square Design Ceiling Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Square Design Ceiling Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Mist & Stand Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Mist & Stand Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Blower Fan with Hose listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Blower Fan with Hose from the Alfa Electrical Materials catalogue.",
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
    description: "Wall Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Wall Fan from the Alfa Electrical Materials catalogue.",
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
    description: "16 Inch Orbit Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "16 Inch Orbit Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Motion Sensor listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Motion Sensor from the Alfa Electrical Materials catalogue.",
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
    description: "Smoke Detector listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Smoke Detector from the Alfa Electrical Materials catalogue.",
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
    description: "Metal Enclosure listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Enclosure from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Box from the Alfa Electrical Materials catalogue.",
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
    description: "GI Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Box from the Alfa Electrical Materials catalogue.",
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
    description: "GI Ring listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Ring from the Alfa Electrical Materials catalogue.",
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
    description: "Aluminium Weatherproof Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Aluminium Weatherproof Box from the Alfa Electrical Materials catalogue.",
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
    description: "Waterproof Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Waterproof Box from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Dome listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Dome from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Conduit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Conduit from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Trunking listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Trunking from the Alfa Electrical Materials catalogue.",
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
    description: "Floor Trunking listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Floor Trunking from the Alfa Electrical Materials catalogue.",
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
    description: "Slotted Trunking listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Slotted Trunking from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Cable Tie listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Cable Tie from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Coated Cable Tie listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Coated Cable Tie from the Alfa Electrical Materials catalogue.",
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
    description: "Stainless Steel Cable Tie listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Stainless Steel Cable Tie from the Alfa Electrical Materials catalogue.",
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
    description: "Cable Tie Base listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Tie Base from the Alfa Electrical Materials catalogue.",
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
    description: "Fishing Tape listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fishing Tape from the Alfa Electrical Materials catalogue.",
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
    description: "Wire Clip listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Wire Clip from the Alfa Electrical Materials catalogue.",
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
    description: "Metal Pulling Spring listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Pulling Spring from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Carrier Strip listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Carrier Strip from the Alfa Electrical Materials catalogue.",
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
    description: "Cable Marker listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Marker from the Alfa Electrical Materials catalogue.",
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
    description: "Industrial Plug listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Plug from the Alfa Electrical Materials catalogue.",
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
    description: "Industrial Switched Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Switched Socket from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Isolator listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Isolator from the Alfa Electrical Materials catalogue.",
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
    description: "Pipe Accessories listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pipe Accessories from the Alfa Electrical Materials catalogue.",
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
    description: "PG Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PG Gland from the Alfa Electrical Materials catalogue.",
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
    description: "Tube Holder listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Tube Holder from the Alfa Electrical Materials catalogue.",
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
    description: "Bending Machine listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bending Machine from the Alfa Electrical Materials catalogue.",
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
    description: "Die Set listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Die Set from the Alfa Electrical Materials catalogue.",
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
    description: "Crimping Tool listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Crimping Tool from the Alfa Electrical Materials catalogue.",
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
    description: "Cable Cutter listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Cutter from the Alfa Electrical Materials catalogue.",
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
    description: "Float Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Float Switch from the Alfa Electrical Materials catalogue.",
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
    description: "Insect Killer listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Insect Killer from the Alfa Electrical Materials catalogue.",
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
    description: "Rail Mounting Connector listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Rail Mounting Connector from the Alfa Electrical Materials catalogue.",
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
    description: "E27 Holder listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "E27 Holder from the Alfa Electrical Materials catalogue.",
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
    description: "Ceiling Rose listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ceiling Rose from the Alfa Electrical Materials catalogue.",
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
    description: "Pendant Holder listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pendant Holder from the Alfa Electrical Materials catalogue.",
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
    description: "Earthing Connector listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earthing Connector from the Alfa Electrical Materials catalogue.",
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
    description: "Insulation Tape listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Insulation Tape from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Insulated Lug listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Insulated Lug from the Alfa Electrical Materials catalogue.",
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
    description: "Heat Shrink Sleeve listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Heat Shrink Sleeve from the Alfa Electrical Materials catalogue.",
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
    description: "Trunking Sleeve listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Trunking Sleeve from the Alfa Electrical Materials catalogue.",
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
    description: "Caution Tape listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Caution Tape from the Alfa Electrical Materials catalogue.",
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
    description: "Porcelain Holder listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Porcelain Holder from the Alfa Electrical Materials catalogue.",
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
    description: "Adjustable Earth Bonding Clamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Adjustable Earth Bonding Clamp from the Alfa Electrical Materials catalogue.",
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
    description: "Extension Drum listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Extension Drum from the Alfa Electrical Materials catalogue.",
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
    description: "Extension Board listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Extension Board from the Alfa Electrical Materials catalogue.",
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
    description: "Weatherproof Connector listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Connector from the Alfa Electrical Materials catalogue.",
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
    description: "Alarm Bell listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Alarm Bell from the Alfa Electrical Materials catalogue.",
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
    description: "S2 Starter listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "S2 Starter from the Alfa Electrical Materials catalogue.",
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
    description: "S10 Starter listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "S10 Starter from the Alfa Electrical Materials catalogue.",
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
    description: "Telephone Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Telephone Box from the Alfa Electrical Materials catalogue.",
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
    description: "DB Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "DB Box from the Alfa Electrical Materials catalogue.",
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
    description: "DIN Rail listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "DIN Rail from the Alfa Electrical Materials catalogue.",
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
    description: "LED Tube Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "LED Strip Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Strip Light from the Alfa Electrical Materials catalogue.",
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
    description: "LED Candle Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Candle Light from the Alfa Electrical Materials catalogue.",
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
    description: "LED Bulb listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Bulb from the Alfa Electrical Materials catalogue.",
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
    description: "COB Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "COB Light from the Alfa Electrical Materials catalogue.",
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
    description: "60x60 LED Panel listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "60x60 LED Panel from the Alfa Electrical Materials catalogue.",
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
    description: "Spot Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spot Light from the Alfa Electrical Materials catalogue.",
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
    description: "Highway Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Highway Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "Flood Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flood Light from the Alfa Electrical Materials catalogue.",
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
    description: "LED Strip Light Roll listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Strip Light Roll from the Alfa Electrical Materials catalogue.",
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
    description: "Panel Surface Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Panel Surface Light from the Alfa Electrical Materials catalogue.",
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
    description: "Round Panel Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Round Panel Light from the Alfa Electrical Materials catalogue.",
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
    description: "Square Panel Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Square Panel Light from the Alfa Electrical Materials catalogue.",
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
    description: "Batten Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Batten Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "LED Tube Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube Light from the Alfa Electrical Materials catalogue.",
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
    description: "MR16 GU5.3 Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MR16 GU5.3 Lamp from the Alfa Electrical Materials catalogue.",
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
    description: "Magnetic Ballast listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Magnetic Ballast from the Alfa Electrical Materials catalogue.",
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
    description: "Energy Saver Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Energy Saver Lamp from the Alfa Electrical Materials catalogue.",
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
    description: "Bending Spring listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bending Spring from the Alfa Electrical Materials catalogue.",
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
    description: "MICC Fire Clip listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MICC Fire Clip from the Alfa Electrical Materials catalogue.",
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
    description: "Cat6 Wire listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cat6 Wire from the Alfa Electrical Materials catalogue.",
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
    description: "Coaxial Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Coaxial Cable from the Alfa Electrical Materials catalogue.",
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
    description: "Insect Killer Tube listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Insect Killer Tube from the Alfa Electrical Materials catalogue.",
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
    description: "Bentonite Powder listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bentonite Powder from the Alfa Electrical Materials catalogue.",
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
    description: "Hook Plate listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hook Plate from the Alfa Electrical Materials catalogue.",
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
    description: "Dome Cover listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Dome Cover from the Alfa Electrical Materials catalogue.",
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
    description: "Ball & Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ball & Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Galvanised Steel Cable Drum listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Galvanised Steel Cable Drum from the Alfa Electrical Materials catalogue.",
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
    description: "Angle Corner Roller listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Angle Corner Roller from the Alfa Electrical Materials catalogue.",
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
    description: "Triple Cable Roller listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Triple Cable Roller from the Alfa Electrical Materials catalogue.",
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
    description: "Straight Cable Roller listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Straight Cable Roller from the Alfa Electrical Materials catalogue.",
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
    description: "Cable Roller listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Roller from the Alfa Electrical Materials catalogue.",
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
    description: "GI Channel listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Channel from the Alfa Electrical Materials catalogue.",
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
    description: "Channel End Cap listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Channel End Cap from the Alfa Electrical Materials catalogue.",
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
    description: "Floor Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Floor Box from the Alfa Electrical Materials catalogue.",
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
    description: "Spiral Sleeve listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spiral Sleeve from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Pulling Spring listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Pulling Spring from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Glue listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Glue from the Alfa Electrical Materials catalogue.",
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
    description: "Photo Cell listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Photo Cell from the Alfa Electrical Materials catalogue.",
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
    description: "Packing Tape listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Packing Tape from the Alfa Electrical Materials catalogue.",
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
    description: "Masking Tape listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Masking Tape from the Alfa Electrical Materials catalogue.",
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
    description: "Bulkhead Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bulkhead Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "Chrome Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Chrome Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Electronic Ballast listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electronic Ballast from the Alfa Electrical Materials catalogue.",
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
    description: "Hand Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hand Lamp from the Alfa Electrical Materials catalogue.",
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
    description: "Fisher Plug listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fisher Plug from the Alfa Electrical Materials catalogue.",
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
    description: "Cotton Sleeve listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cotton Sleeve from the Alfa Electrical Materials catalogue.",
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
    description: "Capacitor listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Capacitor from the Alfa Electrical Materials catalogue.",
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
    description: "Metal Halide Ballast listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Halide Ballast from the Alfa Electrical Materials catalogue.",
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
    description: "Ignitor listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ignitor from the Alfa Electrical Materials catalogue.",
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
    description: "Busbar Insulator listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Busbar Insulator from the Alfa Electrical Materials catalogue.",
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
    description: "Busbar listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Busbar from the Alfa Electrical Materials catalogue.",
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
    description: "GI Conduit Accessories listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Conduit Accessories from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Weatherproof Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Weatherproof Box from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Adaptable Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Adaptable Box from the Alfa Electrical Materials catalogue.",
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
    description: "Switch Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Switch Box from the Alfa Electrical Materials catalogue.",
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
    description: "Nickel Adaptor listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Nickel Adaptor from the Alfa Electrical Materials catalogue.",
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
    description: "Tube Clip listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Tube Clip from the Alfa Electrical Materials catalogue.",
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
    description: "Metal Clad Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Metal Clad Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Pop-Up Floor Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pop-Up Floor Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Shaver Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Shaver Socket from the Alfa Electrical Materials catalogue.",
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
    description: "GI PVC Coated Flexible Conduit 15m Roll listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI PVC Coated Flexible Conduit 15m Roll from the Alfa Electrical Materials catalogue.",
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
    description: "Ceiling Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ceiling Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Emergency Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Emergency Light from the Alfa Electrical Materials catalogue.",
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
    description: "Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "Weatherproof Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "2 Gang Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "3 Gang 1 Way Plate Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "3 Gang 1 Way Plate Switch from the Alfa Electrical Materials catalogue.",
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
    description: "1 Gang 1 Way Plate Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang 1 Way Plate Switch from the Alfa Electrical Materials catalogue.",
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
    description: "1 Gang Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "13A 1 Gang Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 1 Gang Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "13A 1 Gang DP + 2 USB Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 1 Gang DP + 2 USB Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "10A 3 Gang 1 Way Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "10A 3 Gang 1 Way Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "1 Gang Light Wooden Cover listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang Light Wooden Cover from the Alfa Electrical Materials catalogue.",
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
    description: "2 Gang Light Wooden Cover listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Light Wooden Cover from the Alfa Electrical Materials catalogue.",
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
    description: "13A 2 Gang DP + 2 USB Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 2 Gang DP + 2 USB Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "1 Gang Grey Cover listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang Grey Cover from the Alfa Electrical Materials catalogue.",
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
    description: "2 Gang Grey Cover listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Grey Cover from the Alfa Electrical Materials catalogue.",
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
    description: "13A 2 Gang Single Pole Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 2 Gang Single Pole Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "13A 2 Gang Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 2 Gang Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "45A 1 Gang DP + Neon Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "45A 1 Gang DP + Neon Switch from the Alfa Electrical Materials catalogue.",
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
    description: "Gold Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Gold Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "1 Gang Blank Plate listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang Blank Plate from the Alfa Electrical Materials catalogue.",
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
    description: "2 Gang Blank Plate listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Blank Plate from the Alfa Electrical Materials catalogue.",
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
    description: "40mm 1 Gang Metal Clad Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "40mm 1 Gang Metal Clad Box from the Alfa Electrical Materials catalogue.",
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
    description: "40mm 2 Gang Metal Clad Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "40mm 2 Gang Metal Clad Box from the Alfa Electrical Materials catalogue.",
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
    description: "E27 Batten Lamp Holder listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "E27 Batten Lamp Holder from the Alfa Electrical Materials catalogue.",
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
    description: "Plug-In Type Ceiling Rose listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Plug-In Type Ceiling Rose from the Alfa Electrical Materials catalogue.",
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
    description: "T2 E27 Lamp Holder listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "T2 E27 Lamp Holder from the Alfa Electrical Materials catalogue.",
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
    description: "2 Gang 1 Way Plate Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang 1 Way Plate Switch from the Alfa Electrical Materials catalogue.",
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
    description: "Rotary Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Rotary Switch from the Alfa Electrical Materials catalogue.",
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
    description: "Cut Out Fuse listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cut Out Fuse from the Alfa Electrical Materials catalogue.",
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
    description: "Weather Resistant Cable Cleat listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weather Resistant Cable Cleat from the Alfa Electrical Materials catalogue.",
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
    description: "Stainless Steel Machine Screw listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Stainless Steel Machine Screw from the Alfa Electrical Materials catalogue.",
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
    description: "Trunking Sleeve Edge Guard listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Trunking Sleeve Edge Guard from the Alfa Electrical Materials catalogue.",
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
    description: "High Bay UFO LED Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "High Bay UFO LED Light from the Alfa Electrical Materials catalogue.",
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
    description: "2 Gang Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "2 Gang 1 Way Plate Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang 1 Way Plate Switch from the Alfa Electrical Materials catalogue.",
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
    description: "Universal Socket USB + C Port listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Universal Socket USB + C Port from the Alfa Electrical Materials catalogue.",
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
    description: "Weatherproof Switch Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Switch Socket from the Alfa Electrical Materials catalogue.",
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
    description: "16A + 13A Double Socket listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "16A + 13A Double Socket from the Alfa Electrical Materials catalogue.",
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
    description: "40mm 1 Gang Metal Clad Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "40mm 1 Gang Metal Clad Box from the Alfa Electrical Materials catalogue.",
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
    description: "40mm 2 Gang Metal Clad Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "40mm 2 Gang Metal Clad Box from the Alfa Electrical Materials catalogue.",
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
    description: "13A 1 Gang Multi Socket 2 USB + Neon listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 1 Gang Multi Socket 2 USB + Neon from the Alfa Electrical Materials catalogue.",
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
    description: "13A 2 Gang Multi Socket 2 USB + Neon listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A 2 Gang Multi Socket 2 USB + Neon from the Alfa Electrical Materials catalogue.",
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
    description: "2 Gang 2 Way Switch IP66 listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "2 Gang 2 Way Switch IP66 from the Alfa Electrical Materials catalogue.",
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
    description: "1 Gang IP66 Bell Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "1 Gang IP66 Bell Switch from the Alfa Electrical Materials catalogue.",
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
    description: "Weatherproof Box Knockout listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Box Knockout from the Alfa Electrical Materials catalogue.",
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
    description: "13A Plug Top listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "13A Plug Top from the Alfa Electrical Materials catalogue.",
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
    description: "15A Plug Top listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "15A Plug Top from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Isolator listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Isolator from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Weatherproof Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Weatherproof Box from the Alfa Electrical Materials catalogue.",
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
    description: "Smoke Detector listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Smoke Detector from the Alfa Electrical Materials catalogue.",
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
    description: "24 Inch Stand Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "24 Inch Stand Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Industrial Wall Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Wall Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Duct Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Duct Fan from the Alfa Electrical Materials catalogue.",
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
    description: "MCCB listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MCCB from the Alfa Electrical Materials catalogue.",
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
    description: "Dust Proof Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Dust Proof Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "LED Weatherproof Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Weatherproof Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "LED Tube Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube Light from the Alfa Electrical Materials catalogue.",
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
    description: "Rubber Flexible Wire listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Rubber Flexible Wire from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Flexible Wire listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Flexible Wire from the Alfa Electrical Materials catalogue.",
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
    description: "Insect Killer listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Insect Killer from the Alfa Electrical Materials catalogue.",
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
    description: "Flood Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flood Light from the Alfa Electrical Materials catalogue.",
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
    description: "High Bay Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "High Bay Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "LED Mirror Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Mirror Light from the Alfa Electrical Materials catalogue.",
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
    description: "MR16 GU5.3 Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MR16 GU5.3 Lamp from the Alfa Electrical Materials catalogue.",
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
    description: "E14 LED Candle Lamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "E14 LED Candle Lamp from the Alfa Electrical Materials catalogue.",
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
    description: "Prismatic Universal Socket LED Panel listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Prismatic Universal Socket LED Panel from the Alfa Electrical Materials catalogue.",
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
    description: "LED Batten Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Batten Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "LED T5 Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED T5 Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "Backlit LED Panel listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Backlit LED Panel from the Alfa Electrical Materials catalogue.",
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
    description: "Industrial Plug IP67 listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Plug IP67 from the Alfa Electrical Materials catalogue.",
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
    description: "Industrial Socket IP67 listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Socket IP67 from the Alfa Electrical Materials catalogue.",
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
    description: "Weatherproof Cover listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Cover from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Junction Box listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Junction Box from the Alfa Electrical Materials catalogue.",
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
    description: "Wire Clip listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Wire Clip from the Alfa Electrical Materials catalogue.",
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
    description: "Pulling Spring Rope listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Pulling Spring Rope from the Alfa Electrical Materials catalogue.",
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
    description: "Flexible Wire listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flexible Wire from the Alfa Electrical Materials catalogue.",
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
    description: "Bi-Metallic Lug listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Bi-Metallic Lug from the Alfa Electrical Materials catalogue.",
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
    description: "Cable Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Gland from the Alfa Electrical Materials catalogue.",
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
    description: "Lockable Weatherproof Cover listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Lockable Weatherproof Cover from the Alfa Electrical Materials catalogue.",
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
    description: "LED Tube Fitting Combo listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Tube Fitting Combo from the Alfa Electrical Materials catalogue.",
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
    description: "Weatherproof Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "LED Flood Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LED Flood Light from the Alfa Electrical Materials catalogue.",
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
    description: "Flexible Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flexible Cable from the Alfa Electrical Materials catalogue.",
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
    description: "Speaker Wire listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Speaker Wire from the Alfa Electrical Materials catalogue.",
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
    description: "GI Flexible Conduit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "GI Flexible Conduit from the Alfa Electrical Materials catalogue.",
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
    description: "PVC Trunking listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "PVC Trunking from the Alfa Electrical Materials catalogue.",
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
    description: "Smoke Detector listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Smoke Detector from the Alfa Electrical Materials catalogue.",
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
    description: "Weatherproof Fitting listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Weatherproof Fitting from the Alfa Electrical Materials catalogue.",
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
    description: "Flood Light listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Flood Light from the Alfa Electrical Materials catalogue.",
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
    description: "Electrical Tester listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical Tester from the Alfa Electrical Materials catalogue.",
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
    id: "alfa-copper-tape",
    name: "Copper Tape",
    brand: "ALFA",
    category: "Earthing",
    description: "Copper Tape listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Copper Tape from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Copper Tape",
      "Earthing"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-hanging-clamp",
    name: "Hanging Clamp",
    brand: "ALFA",
    category: "Electrical Accessories",
    description: "Hanging Clamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Hanging Clamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Hanging Clamp",
      "Electrical Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-cable-tray-coupler",
    name: "Cable Tray Coupler",
    brand: "ALFA",
    category: "Electrical Accessories",
    description: "Cable Tray Coupler listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Tray Coupler from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Cable Tray Coupler",
      "Electrical Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-lsf-shroud",
    name: "LSF Shroud",
    brand: "ALFA",
    category: "Electrical Accessories",
    description: "LSF Shroud listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "LSF Shroud from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "LSF Shroud",
      "Electrical Accessories"
    ],
    source: source(22),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-cable-tray",
    name: "Cable Tray",
    brand: "ALFA",
    category: "Cable Management",
    description: "Cable Tray listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Tray from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
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
    description: "MK Switch listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "MK Switch from the Alfa Electrical Materials catalogue.",
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
    description: "Ghosia Fan listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Ghosia Fan from the Alfa Electrical Materials catalogue.",
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
    description: "Cellpack Cable Joint Kit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cellpack Cable Joint Kit from the Alfa Electrical Materials catalogue.",
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
    id: "alfa-u-bolt-clamp",
    name: "U Bolt Clamp",
    brand: "ALFA",
    category: "Cable Management",
    description: "U Bolt Clamp listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "U Bolt Clamp from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "U Bolt Clamp",
      "Cable Management"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-cable-drum-lifting-jack-hydraulic",
    name: "Cable Drum Lifting Jack Hydraulic",
    brand: "ALFA",
    category: "Cable Management",
    description: "Cable Drum Lifting Jack Hydraulic listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Cable Drum Lifting Jack Hydraulic from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Cable Drum Lifting Jack Hydraulic",
      "Cable Management"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-electrical-hand-gloves-11kv",
    name: "Electrical Hand Gloves 11kV",
    brand: "ALFA",
    category: "Safety Equipment",
    description: "Electrical Hand Gloves 11kV listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical Hand Gloves 11kV from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Electrical Hand Gloves 11kV",
      "Safety Equipment"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-electrical-hand-gloves-33kv",
    name: "Electrical Hand Gloves 33kV",
    brand: "ALFA",
    category: "Safety Equipment",
    description: "Electrical Hand Gloves 33kV listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Electrical Hand Gloves 33kV from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Electrical Hand Gloves 33kV",
      "Safety Equipment"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-fire-cable",
    name: "Fire Cable",
    brand: "ALFA",
    category: "Cables & Wires",
    description: "Fire Cable listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Fire Cable from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
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
    description: "CW Cable Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "CW Cable Gland from the Alfa Electrical Materials catalogue.",
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
    description: "BW Cable Gland listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "BW Cable Gland from the Alfa Electrical Materials catalogue.",
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
    id: "alfa-terminal-block",
    name: "Terminal Block",
    brand: "ALFA",
    category: "Electrical Accessories",
    description: "Terminal Block listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Terminal Block from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Terminal Block",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-spring-nut",
    name: "Spring Nut",
    brand: "ALFA",
    category: "Electrical Accessories",
    description: "Spring Nut listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spring Nut from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Spring Nut",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-line-tap",
    name: "Line Tap",
    brand: "ALFA",
    category: "Electrical Accessories",
    description: "Line Tap listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Line Tap from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Line Tap",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-spiral-bolt",
    name: "Spiral Bolt",
    brand: "ALFA",
    category: "Electrical Accessories",
    description: "Spiral Bolt listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Spiral Bolt from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Spiral Bolt",
      "Electrical Accessories"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-zinc-plated-steel-screw",
    name: "Zinc Plated Steel Screw",
    brand: "ALFA",
    category: "Electrical Accessories",
    description: "Zinc Plated Steel Screw listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Zinc Plated Steel Screw from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
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
    description: "Taparia Tester 813 listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Taparia Tester 813 from the Alfa Electrical Materials catalogue.",
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
    description: "Taparia Tester 814 listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Taparia Tester 814 from the Alfa Electrical Materials catalogue.",
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
    description: "Taparia Tester 818 listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Taparia Tester 818 from the Alfa Electrical Materials catalogue.",
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
    id: "alfa-earth-pit",
    name: "Earth Pit",
    brand: "ALFA",
    category: "Earthing",
    description: "Earth Pit listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earth Pit from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Earth Pit",
      "Earthing"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-industrial-salt",
    name: "Industrial Salt",
    brand: "ALFA",
    category: "Earthing",
    description: "Industrial Salt listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Industrial Salt from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Industrial Salt",
      "Earthing"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
  {
    id: "alfa-earthing-charcoal",
    name: "Earthing Charcoal",
    brand: "ALFA",
    category: "Earthing",
    description: "Earthing Charcoal listed in the Alfa Electrical Materials catalogue. Contact SMT for current availability, specifications and quotation.",
    shortDescription: "Earthing Charcoal from the Alfa Electrical Materials catalogue.",
    image: [],
    keywords: [
      "ALFA",
      "Earthing Charcoal",
      "Earthing"
    ],
    source: source(23),
    dataQuality: "catalogue"
  },
];