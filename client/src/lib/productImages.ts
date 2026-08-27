/*
  PRODUCT IMAGE RESOLVER
  ======================

  Add product images anywhere inside:

  client/src/assets/product-images/

  The image filename must match the product ID.

  Example product:
  /product/stanley-0-10-073

  Main image:
  stanley-0-10-073.webp

  Additional images:
  stanley-0-10-073--2.webp
  stanley-0-10-073--3.webp

  Folder structure is optional and only
  exists to keep images organised.

  Supported formats:
  .webp
  .png
  .jpg
  .jpeg
  .avif
*/

const imageModules = import.meta.glob(
  "../assets/product-images/**/*.{webp,png,jpg,jpeg,avif}",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
) as Record<string, string>;

interface IndexedImage {
  url: string;
  order: number;
}

/*
  Maps:

  product ID
      ↓
  array of image URLs
*/
const productImageIndex =
  new Map<
    string,
    IndexedImage[]
  >();

/*
  Extract only the filename from:

  ../assets/product-images/stanley/stanley-0-10-073.webp

  ↓

  stanley-0-10-073.webp
*/
function getFilename(
  path: string
) {
  return (
    path.split("/").pop() ?? ""
  );
}

/*
  Remove extension.

  stanley-0-10-073.webp

  ↓

  stanley-0-10-073
*/
function removeExtension(
  filename: string
) {
  return filename.replace(
    /\.[^.]+$/,
    ""
  );
}

/*
  Determine whether this is:

  product-id
  product-id--2
  product-id--3
  etc.

  The base image gets order 1.
*/
function parseImageName(
  filename: string
) {
  const stem =
    removeExtension(
      filename
    );

  const match =
    stem.match(
      /^(.*?)(?:--(\d+))?$/
    );

  if (!match) {
    return null;
  }

  const productId =
    match[1]
      .trim()
      .toLowerCase();

  if (!productId) {
    return null;
  }

  const order =
    match[2]
      ? Number(match[2])
      : 1;

  if (
    !Number.isFinite(order) ||
    order < 1
  ) {
    return null;
  }

  return {
    productId,
    order
  };
}

/*
  Build the image index once when
  the application loads.
*/
for (
  const [path, url]
  of Object.entries(
    imageModules
  )
) {
  const filename =
    getFilename(path);

  const parsed =
    parseImageName(
      filename
    );

  if (!parsed) {
    continue;
  }

  const existing =
    productImageIndex.get(
      parsed.productId
    ) ?? [];

  existing.push({
    url,
    order: parsed.order
  });

  productImageIndex.set(
    parsed.productId,
    existing
  );
}

/*
  Keep images in predictable order.

  product.webp
  product--2.webp
  product--3.webp
*/
productImageIndex.forEach(
  (images: IndexedImage[]) => {
    images.sort(
      (
        a: IndexedImage,
        b: IndexedImage
      ) =>
        a.order - b.order
    );
  }
);

/*
  Public function used by
  the catalogue.

  Manual images take priority.

  If no manually managed image
  exists yet, the old image array
  is preserved as fallback.
*/
export function getProductImages(
  productId: string,
  fallbackImages: string[] = []
) {
  const key =
    String(productId)
      .trim()
      .toLowerCase();

  const manualImages =
    productImageIndex.get(
      key
    );

  if (
    manualImages &&
    manualImages.length > 0
  ) {
    return manualImages.map(
      (image) =>
        image.url
    );
  }

  return fallbackImages.filter(
    Boolean
  );
}