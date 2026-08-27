import type { Product } from "./productTypes";

import { rawProducts } from "./rawProducts";
import { getProductImages } from "@/lib/productImages";

export type { Product } from "./productTypes";

/*
  Legacy category list retained for compatibility.

  This is not the main catalogue taxonomy.
  The current Products page uses catalogueTaxonomy.ts
  for the nested browsing experience.
*/
export const productCategories = [
  "Power Tools",
  "Safety Equipment",
  "Construction Equipment",
  "Material Handling",
  "Hand Tools",
  "Painting Equipment"
];

/*
  Browser-ready catalogue.

  rawProducts contains only catalogue data.
  Product images are resolved here because getProductImages()
  depends on Vite's asset handling.
*/
export const products: Product[] =
  rawProducts.map(
    (product) => ({
      ...product,

      image:
        getProductImages(
          product.id,
          product.image
        )
    })
  );
