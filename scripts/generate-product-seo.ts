import fs from "fs";
import path from "path";

import {
  rawProducts
} from "../client/src/data/rawProducts";

const ROOT =
  process.cwd();

const PRODUCT_IMAGE_SOURCE_DIR =
  path.resolve(
    ROOT,
    "client",
    "src",
    "assets",
    "product-images"
  );

const DIST_PUBLIC_DIR =
  path.resolve(
    ROOT,
    "dist",
    "public"
  );

const OUTPUT_FILE =
  path.resolve(
    ROOT,
    "dist",
    "product-seo.json"
  );

const IMAGE_EXTENSIONS =
  new Set([
    ".webp",
    ".png",
    ".jpg",
    ".jpeg",
    ".avif"
  ]);

interface FileEntry {
  absolutePath: string;
  relativePath: string;
  filename: string;
  stem: string;
  extension: string;
}

interface ProductSEOEntry {
  id: string;
  name: string;
  description: string;
  image?: string;
}

function walkFiles(
  directory: string
): FileEntry[] {
  if (
    !fs.existsSync(
      directory
    )
  ) {
    return [];
  }

  const results:
    FileEntry[] = [];

  const visit = (
    currentDirectory: string
  ) => {
    const entries =
      fs.readdirSync(
        currentDirectory,
        {
          withFileTypes:
            true
        }
      );

    for (
      const entry
      of entries
    ) {
      const absolutePath =
        path.join(
          currentDirectory,
          entry.name
        );

      if (
        entry.isDirectory()
      ) {
        visit(
          absolutePath
        );

        continue;
      }

      if (
        !entry.isFile()
      ) {
        continue;
      }

      const extension =
        path
          .extname(
            entry.name
          )
          .toLowerCase();

      if (
        !IMAGE_EXTENSIONS.has(
          extension
        )
      ) {
        continue;
      }

      results.push({
        absolutePath,

        relativePath:
          path
            .relative(
              directory,
              absolutePath
            )
            .split(
              path.sep
            )
            .join(
              "/"
            ),

        filename:
          entry.name,

        stem:
          path.basename(
            entry.name,
            extension
          ),

        extension
      });
    }
  };

  visit(
    directory
  );

  return results;
}

function getImageOrder(
  stem: string,
  productId: string
) {
  if (
    stem === productId
  ) {
    return 1;
  }

  const prefix =
    `${productId}--`;

  if (
    stem.startsWith(
      prefix
    )
  ) {
    const suffix =
      Number(
        stem.slice(
          prefix.length
        )
      );

    if (
      Number.isFinite(
        suffix
      ) &&
      suffix >= 2
    ) {
      return suffix;
    }
  }

  return Number.MAX_SAFE_INTEGER;
}

function cleanDescription(
  text: string,
  maxLength = 155
) {
  const cleaned =
    text
      .replace(
        /\s+/g,
        " "
      )
      .trim();

  if (
    cleaned.length <=
    maxLength
  ) {
    return cleaned;
  }

  const shortened =
    cleaned
      .slice(
        0,
        maxLength - 3
      )
      .trim();

  const lastSpace =
    shortened.lastIndexOf(
      " "
    );

  const safeText =
    lastSpace > 100
      ? shortened.slice(
          0,
          lastSpace
        )
      : shortened;

  return `${safeText}...`;
}

function toPublicUrl(
  relativePath: string
) {
  const encodedPath =
    relativePath
      .split(
        "/"
      )
      .map(
        (
          segment
        ) =>
          encodeURIComponent(
            segment
          )
      )
      .join(
        "/"
      );

  return `/${encodedPath}`;
}

function findBuiltImage(
  sourceImage: FileEntry,
  builtImages: FileEntry[]
) {
  /*
    Vite normally emits imported assets as:

      original-stem-HASH.webp

    The exact hash is deliberately ignored here.

    We also accept an exact filename in case the asset naming
    strategy is changed later to preserve source names.
  */
  const matches =
    builtImages.filter(
      (
        builtImage
      ) => {
        if (
          builtImage.extension !==
          sourceImage.extension
        ) {
          return false;
        }

        return (
          builtImage.stem ===
            sourceImage.stem ||
          builtImage.stem.startsWith(
            `${sourceImage.stem}-`
          )
        );
      }
    );

  if (
    matches.length === 0
  ) {
    return undefined;
  }

  /*
    Prefer files under /assets/ when both a copied public file
    and a bundled Vite asset happen to share a similar name.
  */
  matches.sort(
    (
      a,
      b
    ) => {
      const aInAssets =
        a.relativePath.startsWith(
          "assets/"
        );

      const bInAssets =
        b.relativePath.startsWith(
          "assets/"
        );

      if (
        aInAssets !==
        bInAssets
      ) {
        return aInAssets
          ? -1
          : 1;
      }

      return a.relativePath.localeCompare(
        b.relativePath
      );
    }
  );

  return matches[0];
}

function main() {
  if (
    !fs.existsSync(
      DIST_PUBLIC_DIR
    )
  ) {
    throw new Error(
      `Client build directory not found: ${DIST_PUBLIC_DIR}. Run "vite build" before generating the SEO manifest.`
    );
  }

  const sourceImages =
    walkFiles(
      PRODUCT_IMAGE_SOURCE_DIR
    );

  const builtImages =
    walkFiles(
      DIST_PUBLIC_DIR
    );

  const manifest:
    Record<
      string,
      ProductSEOEntry
    > = {};

  let manualImageCount =
    0;

  let fallbackImageCount =
    0;

  let missingBuiltImageCount =
    0;

  for (
    const product
    of rawProducts
  ) {
    const productId =
      String(
        product.id
      );

    const manualSourceImages =
      sourceImages
        .filter(
          (
            image
          ) =>
            image.stem ===
              productId ||
            image.stem.startsWith(
              `${productId}--`
            )
        )
        .sort(
          (
            a,
            b
          ) =>
            getImageOrder(
              a.stem,
              productId
            ) -
            getImageOrder(
              b.stem,
              productId
            )
        );

    let image:
      string | undefined;

    if (
      manualSourceImages.length >
      0
    ) {
      const primarySourceImage =
        manualSourceImages[0];

      const builtImage =
        findBuiltImage(
          primarySourceImage,
          builtImages
        );

      if (
        builtImage
      ) {
        image =
          toPublicUrl(
            builtImage.relativePath
          );

        manualImageCount +=
          1;
      } else {
        /*
          This warning is important: it tells us that a source
          manual image exists but the expected Vite-built asset
          could not be located.

          We still fall back to the legacy/public image so one
          missing mapping does not break the whole deployment.
        */
        missingBuiltImageCount +=
          1;

        console.warn(
          `[product-seo] Could not locate built asset for ${productId}: ${primarySourceImage.relativePath}`
        );
      }
    }

    if (
      !image
    ) {
      const fallbackImage =
        product.image?.find(
          Boolean
        );

      if (
        fallbackImage
      ) {
        image =
          fallbackImage;

        fallbackImageCount +=
          1;
      }
    }

    manifest[
      productId
    ] = {
      id:
        productId,

      name:
        product.name,

      description:
        cleanDescription(
          product.shortDescription ||
            product.description
        ),

      ...(image
        ? {
            image
          }
        : {})
    };
  }

  fs.mkdirSync(
    path.dirname(
      OUTPUT_FILE
    ),
    {
      recursive:
        true
    }
  );

  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(
      manifest,
      null,
      2
    ),
    "utf-8"
  );

  console.log(
    `[product-seo] Generated ${Object.keys(
      manifest
    ).length} product entries.`
  );

  console.log(
    `[product-seo] Manual built images: ${manualImageCount}`
  );

  console.log(
    `[product-seo] Legacy/public fallbacks: ${fallbackImageCount}`
  );

  if (
    missingBuiltImageCount >
    0
  ) {
    console.warn(
      `[product-seo] Missing built manual-image mappings: ${missingBuiltImageCount}`
    );
  }

  console.log(
    `[product-seo] Wrote ${OUTPUT_FILE}`
  );
}

main();
