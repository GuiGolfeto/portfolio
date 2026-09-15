import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = "http://localhost:3000/";

const viewports = [
  { name: "320 iPhone SE min", width: 320, height: 640, shot: true },
  { name: "360 Android",       width: 360, height: 780 },
  { name: "390 iPhone 14",     width: 390, height: 844, shot: true },
  { name: "430 iPhone Pro Max",width: 430, height: 932 },
  { name: "768 iPad",          width: 768, height: 1024, shot: true },
  { name: "1024 iPad Pro",     width: 1024, height: 1366 },
  { name: "1440 desktop",      width: 1440, height: 900, shot: true },
];

const browser = await chromium.launch({ executablePath: CHROME });
let problems = 0;

for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2 });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(String(e)));

  await page.goto(URL, { waitUntil: "networkidle" });
  // percorre a página para disparar os reveals e o lazy-load das imagens
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
  });
  await page.waitForTimeout(900);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  const res = await page.evaluate(() => {
    const docW = document.documentElement.clientWidth;

    const decorative = (el) => {
      for (let n = el; n && n !== document.body; n = n.parentElement) {
        if (n.getAttribute("aria-hidden") === "true") return true;
        if (n.classList.contains("sr-only")) return true;
      }
      return false;
    };
    const clippedByAncestor = (el) => {
      for (let n = el.parentElement; n && n !== document.documentElement; n = n.parentElement) {
        const o = getComputedStyle(n);
        if (o.overflowX === "hidden" || o.overflowX === "clip" || o.overflowX === "auto") return true;
      }
      return false;
    };

    const wide = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (getComputedStyle(el).position === "fixed") continue;
      if (decorative(el) || clippedByAncestor(el)) continue;
      if (r.right > docW + 1 || r.left < -1) {
        wide.push({ tag: el.tagName.toLowerCase(), cls: (el.className || "").toString().slice(0, 60),
                    left: Math.round(r.left), right: Math.round(r.right) });
      }
    }

    const clipped = [];
    for (const el of document.querySelectorAll("h1,h2,h3,p,a,button,li,dd,dt")) {
      if (decorative(el)) continue;
      if (el.scrollWidth > el.clientWidth + 2) {
        const cs = getComputedStyle(el);
        if (cs.overflow === "visible" || cs.textOverflow === "ellipsis") continue;
        clipped.push({ tag: el.tagName.toLowerCase(), text: (el.textContent || "").trim().slice(0, 45) });
      }
    }

    // alvos de toque menores que 40px (recomendação: 44)
    const small = [];
    for (const el of document.querySelectorAll("a[href],button,input,select,textarea")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (getComputedStyle(el).opacity === "0") continue;
      // inputs sr-only são acionados por um botão visível; não são alvo de toque
      if (el.classList.contains("sr-only")) continue;
      if (r.height < 40) small.push({ tag: el.tagName.toLowerCase(), h: Math.round(r.height),
                                      text: (el.textContent || "").trim().slice(0, 28) });
    }

    return { docW, scrollW: document.documentElement.scrollWidth, wide, clipped,
             small: small.slice(0, 6), smallCount: small.length };
  });

  const hScroll = res.scrollW > res.docW + 1;
  const bad = hScroll || res.wide.length > 0 || res.clipped.length > 0 || errors.length > 0;
  if (bad) problems++;

  console.log(`${bad ? "✗" : "✓"} ${vp.name.padEnd(22)} scrollW ${res.scrollW}/${res.docW}` +
              `${hScroll ? "  ← SCROLL HORIZONTAL" : ""}` +
              `${res.wide.length ? `  fora: ${res.wide.length}` : ""}` +
              `${res.clipped.length ? `  cortado: ${res.clipped.length}` : ""}` +
              `${res.smallCount ? `  toque<40px: ${res.smallCount}` : ""}` +
              `${errors.length ? `  erros: ${errors.length}` : ""}`);
  for (const w of res.wide) console.log(`      fora → <${w.tag}> ${w.left}..${w.right}  .${w.cls}`);
  for (const c of res.clipped) console.log(`      cortado → <${c.tag}> "${c.text}"`);
  for (const s of res.small) console.log(`      toque → <${s.tag}> ${s.h}px "${s.text}"`);
  for (const e of errors.slice(0, 3)) console.log(`      erro → ${e.slice(0, 120)}`);

  if (vp.shot) {
    await page.screenshot({ path: `shot-${vp.width}-top.png` });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);
    await page.screenshot({ path: `shot-${vp.width}-bottom.png` });
  }
  await page.close();
}
await browser.close();
console.log(`\n=== ${problems === 0 ? "TODOS OS TAMANHOS OK" : problems + " tamanho(s) com problema"} ===`);
