// Tiny zero-dependency static server for the whole Design/ folder.
// Serves the gallery at / and every design under its own path.
// Run:  node serve.mjs   (or: npm run gallery)
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const PORT = process.env.PORT || 4321;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".map": "application/json; charset=utf-8",
};

const server = createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    // prevent path traversal
    let rel = normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
    let filePath = join(ROOT, rel);
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403).end("Forbidden");
      return;
    }

    // directory -> index.html
    let info = await stat(filePath).catch(() => null);
    if (info && info.isDirectory()) {
      filePath = join(filePath, "index.html");
      info = await stat(filePath).catch(() => null);
    }
    if (!info) {
      res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      res.end(
        `<body style="font-family:monospace;background:#0b0b08;color:#f4f0e6;padding:40px">
         <h1>404</h1><p>${urlPath}</p><p><a style="color:#1fe089" href="/">← Back to the gallery</a></p></body>`
      );
      return;
    }

    const data = await readFile(filePath);
    res.writeHead(200, {
      "content-type": MIME[extname(filePath).toLowerCase()] || "application/octet-stream",
      "cache-control": "no-cache",
    });
    res.end(data);
  } catch (err) {
    res.writeHead(500).end("Server error: " + err.message);
  }
});

server.listen(PORT, () => {
  console.log(`\n  ✦ Design gallery running`);
  console.log(`  ➜  http://localhost:${PORT}/\n`);
  console.log(`  Designs:`);
  console.log(`  01  http://localhost:${PORT}/designs/one/dist/index.html`);
  console.log(`  02  http://localhost:${PORT}/2/foundry.html`);
  console.log(`  03  http://localhost:${PORT}/3/index.html`);
  console.log(`  04  http://localhost:${PORT}/4/index.html`);
  console.log(`  05  http://localhost:${PORT}/5/index.html`);
  console.log(`  06  http://localhost:${PORT}/designs/two/dist/index.html\n`);
});
