import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function getWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

async function render(worker, path) {
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders development preview metadata", async () => {
  const response = await render(await getWorker(), "/");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("all public routes render one H1 with unique, clean SEO titles", async () => {
  const worker = await getWorker();
  const expected = new Map([
    ["/", "Beauté personnalisée | Cathy Bieri Beauty"],
    ["/a-propos", "Notre univers beauté | Cathy Bieri Beauty"],
    ["/contact", "Nous contacter | Cathy Bieri Beauty"],
    ["/galerie", "Galerie et univers beauté | Cathy Bieri Beauty"],
    ["/prestations", "Prestations beauté personnalisées | Cathy Bieri Beauty"],
    ["/prestations/corps-bien-etre", "Soins du corps et bien-être | Cathy Bieri Beauty"],
    ["/prestations/manucure-pedicure", "Manucure et pédicure professionnelles | Cathy Bieri Beauty"],
    ["/prestations/regard-maquillage", "Regard et maquillage personnalisés | Cathy Bieri Beauty"],
    ["/prestations/soins-du-visage", "Soins du visage personnalisés | Cathy Bieri Beauty"],
    ["/reservation", "Demander un rendez-vous beauté | Cathy Bieri Beauty"],
    ["/service-mobile", "Manucure et pédicure à domicile | Cathy Bieri Beauty"],
  ]);
  const titles = new Set();
  for (const [path, title] of expected) {
    const response = await render(worker, path);
    const html = await response.text();
    assert.equal(response.status, 200, path);
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${path} must contain one H1`);
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</title>`));
    assert.equal((title.match(/Cathy Bieri Beauty/g) ?? []).length, 1, `${path} duplicates the brand in its title`);
    titles.add(title);
  }
  assert.equal(titles.size, expected.size);
});

test("sitemap is stable and excludes unverified routes", async () => {
  const response = await render(await getWorker(), "/sitemap.xml");
  const xml = await response.text();
  assert.equal(response.status, 200);
  assert.doesNotMatch(xml, /<lastmod>/i);
  assert.doesNotMatch(xml, /soins-du-visage|corps-bien-etre|regard-maquillage/);
  assert.match(xml, /manucure-pedicure/);
});

test("TikTok is exposed consistently in the gallery, footer and structured data", async () => {
  const worker = await getWorker();
  const profile = "https://www.tiktok.com/@komobeauty";
  for (const path of ["/", "/galerie", "/contact"]) {
    const response = await render(worker, path);
    const html = await response.text();
    assert.equal(response.status, 200, path);
    assert.match(html, new RegExp(profile.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${path} must expose the TikTok profile`);
  }
});
