export interface ProductSpecification {
  label: string;
  value: string;
  unit?: string;
}

export interface ProductVariantAttribute {
  label: string;
  value: string;
}

export interface ProductVariant {
  sku?: string;
  model?: string;
  name?: string;
  packaging?: string;
  attributes?: ProductVariantAttribute[];
}

export interface ProductSource {
  type: "catalogue" | "manufacturer" | "supplier" | "manual";
  document?: string;
  page?: number;
  year?: number;
}

export type ProductDataQuality =
  | "basic"
  | "catalogue"
  | "technical"
  | "verified";

export interface Product {
  // Core identity
  id: string;
  name: string;
  brand: string;

  // Product codes
  model?: string;
  sku?: string;
  oldSku?: string;

  // Classification
  category: string;
  subcategory?: string;
  productFamily?: string;

  // Website content
  description: string;
  shortDescription?: string;
  features?: string[];

  // Technical data
  specifications?: ProductSpecification[];

  // Sizes, versions, packaging, etc.
  variants?: ProductVariant[];

  // Product relationships
  compatibleWith?: string[];
  accessories?: string[];
  relatedProducts?: string[];

  // Compliance / standards
  standards?: string[];

  // Media
  image: string[];

  // Search helpers
  keywords?: string[];

  // Catalogue/source tracking
  source?: ProductSource;

  // Internal data confidence
  dataQuality?: ProductDataQuality;
}