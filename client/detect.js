// detect.js (place in /client)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 🟡 THIS IS YOUR REAL SRC FOLDER
const SRC_DIR = path.join(__dirname, "src");

console.log("📁 Scanning directory:", SRC_DIR);

// Check if src folder exists
if (!fs.existsSync(SRC_DIR)) {
  console.error("❌ ERROR: src directory NOT found:", SRC_DIR);
  process.exit(1);
}

// Extensions we consider
const EXTS = [".tsx", ".ts"];

const allFiles = [];
const used = new Set();

// Recursively collect files
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const abs = path.join(dir, f);
    const stat = fs.statSync(abs);

    if (stat.isDirectory()) walk(abs);
    else if (EXTS.includes(path.extname(abs))) allFiles.push(abs);
  }
}

// Resolve import paths
function resolveImport(from, imp) {
  if (imp.startsWith("@/")) {
    // Convert @/ to real src directory
    imp = imp.replace("@/", SRC_DIR + "/");
  } else if (imp.startsWith(".")) {
    // relative import
    imp = path.resolve(path.dirname(from), imp);
  } else {
    return null; // ignore library imports
  }

  const tsx = imp + ".tsx";
  const ts = imp + ".ts";

  if (fs.existsSync(tsx)) return tsx;
  if (fs.existsSync(ts)) return ts;

  return null;
}

// Scan import statements
function scanFile(file) {
  const content = fs.readFileSync(file, "utf8");
  const regex = /import\s+.*?from\s+['"](.+?)['"]/g;

  let m;
  while ((m = regex.exec(content))) {
    const resolved = resolveImport(file, m[1]);
    if (resolved) used.add(resolved);
  }
}

console.log("🔍 Collecting files...");
walk(SRC_DIR);

console.log("📦 Total TS/TSX files:", allFiles.length);

// Entry file
const entry = path.join(SRC_DIR, "main.tsx");
if (!fs.existsSync(entry)) {
  console.error("❌ ERROR: Cannot find main.tsx at:", entry);
  process.exit(1);
}

used.add(entry);

let queue = [entry];
let index = 0;

// BFS scanning of imports
while (index < queue.length) {
  const file = queue[index++];
  scanFile(file);

  for (const f of Array.from(used)) {
    if (!queue.includes(f)) queue.push(f);
  }
}

console.log("📂 Used file count:", used.size);

console.log("\n==== UNUSED FILES ====");
let unused = 0;

for (const f of allFiles) {
  if (!used.has(f)) {
    console.log("❌", f.replace(SRC_DIR + "/", ""));
    unused++;
  }
}

if (unused === 0) console.log("🎉 No unused files detected!");
