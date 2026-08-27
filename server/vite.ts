import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const resolvedConfig =
    typeof viteConfig === "function"
      ? viteConfig({
          mode: "development",
          command: "serve",
        })
      : viteConfig;

  const vite = await createViteServer({
    ...resolvedConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      let template = await fs.promises.readFile(
        clientTemplate,
        "utf-8",
      );

      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );

      const page = await vite.transformIndexHtml(
        url,
        template,
      );

      res
        .status(200)
        .set({
          "Content-Type": "text/html",
        })
        .end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(
    import.meta.dirname,
    "public",
  );

  const rootDistPath = path.resolve(
    import.meta.dirname,
  );

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  /*
   * Serve static assets.
   */
  app.use(express.static(distPath));

  /*
   * Product SEO pages.
   *
   * product-seo.json is generated at:
   *
   *   dist/product-seo.json
   *
   * while the client build lives at:
   *
   *   dist/public/
   */
  app.get("/product/:id", async (req, res, next) => {
    try {
      const seoPath = path.join(
        rootDistPath,
        "product-seo.json",
      );

      if (!fs.existsSync(seoPath)) {
        throw new Error(
          `Product SEO file not found: ${seoPath}`,
        );
      }

      const seoData = JSON.parse(
        await fs.promises.readFile(
          seoPath,
          "utf-8",
        ),
      );

      const product = seoData[req.params.id];

      if (!product) {
        return res
          .status(404)
          .send("Product not found");
      }

      const indexPath = path.join(
        distPath,
        "index.html",
      );

      let html = await fs.promises.readFile(
        indexPath,
        "utf-8",
      );

      const title =
        `${product.name} | Saleh Mohsin Trading LLC`;

      const description =
        product.description ||
        `View ${product.name} from Saleh Mohsin Trading LLC.`;

      const canonical =
        `https://www.salehmohsin.com/product/${encodeURIComponent(
          product.id,
        )}`;

      const image =
        product.image
          ? new URL(
              product.image,
              "https://www.salehmohsin.com",
            ).toString()
          : "https://www.salehmohsin.com/SMTLogo.png";

      const canonicalTag =
        `<link rel="canonical" href="${canonical}" />`;

      html = html
        .replace(
          /<title>[\s\S]*?<\/title>/i,
          `<title>${escapeHtml(title)}</title>`,
        )
        .replace(
          /<link\s+rel=["']canonical["'][^>]*>/i,
          canonicalTag,
        );

      if (!/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
        html = html.replace(
          /<\/head>/i,
          `${canonicalTag}\n</head>`,
        );
      }

      html = html
        .replace(
          /<meta\s+name="description"[\s\S]*?>/i,
          `<meta name="description" content="${escapeHtml(
            description,
          )}" />`,
        )
        .replace(
          /<link\s+rel="canonical"[\s\S]*?>/i,
          `<link rel="canonical" href="${canonical}" />`,
        )
        .replace(
          /<meta\s+property="og:title"[\s\S]*?>/i,
          `<meta property="og:title" content="${escapeHtml(
            title,
          )}" />`,
        )
        .replace(
          /<meta\s+property="og:description"[\s\S]*?>/i,
          `<meta property="og:description" content="${escapeHtml(
            description,
          )}" />`,
        )
        .replace(
          /<meta\s+property="og:url"[\s\S]*?>/i,
          `<meta property="og:url" content="${canonical}" />`,
        )
        .replace(
          /<meta\s+property="og:image"[\s\S]*?>/i,
          `<meta property="og:image" content="${image}" />`,
        )
        .replace(
          /<meta\s+property="og:image:alt"[\s\S]*?>/i,
          `<meta property="og:image:alt" content="${escapeHtml(
            product.name,
          )}" />`,
        )
        .replace(
          /<meta\s+name="twitter:title"[\s\S]*?>/i,
          `<meta name="twitter:title" content="${escapeHtml(
            title,
          )}" />`,
        )
        .replace(
          /<meta\s+name="twitter:description"[\s\S]*?>/i,
          `<meta name="twitter:description" content="${escapeHtml(
            description,
          )}" />`,
        )
        .replace(
          /<meta\s+name="twitter:image"[\s\S]*?>/i,
          `<meta name="twitter:image" content="${image}" />`,
        );

      return res
        .status(200)
        .set("Content-Type", "text/html")
        .send(html);
    } catch (error) {
      next(error);
    }
  });

  /*
   * Valid client-side routes.
   */
  const validRoutes = new Set([
    "/",
    "/products",
    "/quote",
    "/about",
    "/services",
    "/contact",
  ]);

  /*
   * SPA fallback only for known routes.
   */
  app.get("*", async (req, res, next) => {
    try {
      if (!validRoutes.has(req.path)) {
        return res
          .status(404)
          .send("Page not found");
      }

      const indexPath = path.join(
        distPath,
        "index.html",
      );

      const html = await fs.promises.readFile(
        indexPath,
        "utf-8",
      );

      res
        .status(200)
        .set("Content-Type", "text/html")
        .send(html);
    } catch (error) {
      next(error);
    }
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}