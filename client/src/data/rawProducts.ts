import type { Product } from "./productTypes";

import { legacyProducts } from "./catalogues/legacy";
import { tuffixProducts } from "./catalogues/tuffix";
import { stanleyProducts } from "./catalogues/stanley";
import { electricalProducts } from "./catalogues/electrical";
import { dongchengProducts } from "./catalogues/dongcheng";

/*
  Raw catalogue data only.

  IMPORTANT:
  Do not resolve product images in this file.

  Keeping this module free of Vite-specific image handling means
  the same catalogue data can later be reused safely by build-time
  scripts for SEO manifests, sitemaps, and other server-side tasks.
*/
export const rawProducts: Product[] = [
  ...legacyProducts,
  ...tuffixProducts,
  ...stanleyProducts,
  ...electricalProducts,
  ...dongchengProducts
];
