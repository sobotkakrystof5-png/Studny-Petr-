# Risk checklist — detailní kontrolní body (2.1–2.8)

Zdroj pravdy pro `seo-ai-risk-guard`. U každého bodu buď oprav, nebo napiš do reportu, proč není relevantní.

## 2.1 Indexovatelnost a rendering

- [ ] Hlavní obsah (ne jen shell/skeleton) je přítomný v initial HTML response (`curl -s URL | grep`, ne jen dev tools)
- [ ] Žádné nekonečné loading spinnery místo obsahu při prvním requestu
- [ ] `<title>` a meta description nejsou prázdné/placeholder ve zdrojovém HTML (ne jen po JS hydrataci)

## 2.2 Povinné soubory (typicky úplně chybí)

- [ ] robots.txt existuje a odkazuje na sitemapu
- [ ] sitemap.xml existuje, je generovaná dynamicky (ne ručně psaná), obsahuje jen indexovatelné URL
- [ ] favicon, manifest.json (pokud PWA) jsou nastavené

> Next.js App Router: použij `app/sitemap.ts` a `app/robots.ts` (built-in metadata routes), ne statické soubory.

## 2.3 Meta tagy — musí být per-page, ne globální

- [ ] Každá stránka má unikátní `<title>` (ne zkopírovaný layout title na všech stránkách)
- [ ] Každá stránka má unikátní meta description (do ~155 znaků, s CTA)
- [ ] Open Graph tagy (`og:title`, `og:description`, `og:image`) jsou nastavené per-page
- [ ] canonical URL je nastavená na každé stránce a směřuje správně (hlavně u query paramů/filtrů)

> Kontrola v Next.js: hledej, jestli projekt používá `generateMetadata()` per route, nebo jestli je metadata jen v root `layout.tsx` a zbytek dědí stejný title.

## 2.4 Sémantická struktura HTML

- [ ] Přesně jeden `<h1>` na stránku
- [ ] Logická hierarchie `<h2>`–`<h6>` (AI má tendenci skákat rovnou na `<h3>` kvůli vizuálnímu stylu, ne sémantice)
- [ ] Obrázky mají popisný `alt`, ne prázdný nebo generický (`alt="image1"`)
- [ ] Interní odkazy používají popisný anchor text, ne "klikni sem" / "více"

## 2.5 Strukturovaná data (schema.org)

- [ ] Existuje alespoň Organization/LocalBusiness JSON-LD
- [ ] Produktové/článkové stránky mají odpovídající schema (Product, Article, FAQPage)
- [ ] Schema je validní — ověř přes Rich Results Test po nasazení

> AI generátory schema často zapomenou, protože není vizuálně vidět — je to přesně ten typ neviditelné-ale-kritické práce, kterou je třeba explicitně dohlídat.

## 2.6 Výkon a Core Web Vitals

- [ ] Obrázky používají moderní formát (WebP/AVIF) a `next/image` nebo ekvivalentní optimalizovanou komponentu — ne syrové `<img>` s neoptimalizovanými soubory
- [ ] Nejsou naimportované zbytečné knihovny "protože AI je navrhla" — zkontroluj `package.json` a bundle size (`npx next build` output, nebo `vite-bundle-visualizer`)
- [ ] Fonty mají `font-display: swap`, nejsou blokující render
- [ ] Žádné render-blocking third-party skripty v `<head>` bez `defer`/`async`
- [ ] Zkontroluj skutečný Lighthouse/PageSpeed Insights výsledek, ne jen "vypadá to rychle na localhostu"

## 2.7 URL struktura a routing

- [ ] URL jsou čitelné a obsahují klíčové slovo (`/sluzby/tvorba-webu`, ne `/page?id=42`)
- [ ] Žádné duplicitní cesty ke stejnému obsahu bez canonical (např. `/produkt/1` i `/produkty/nazev-produktu` vedoucí na totéž)
- [ ] Trailing slash a www/non-www chování je konzistentní (jedna kanonická varianta, zbytek 301 redirect)

## 2.8 Bezpečnost a technické základy

- [ ] HTTPS vynucené, žádný mixed content
- [ ] Vlastní 404 stránka existuje (ne default frameworku bez navigace zpět)
- [ ] `.env`/API klíče nejsou vystavené v client-side bundlu (bonus: bezpečnostní i SEO riziko, pokud to shodí web)
