---
name: seo-ai-risk-guard
description: "Use this skill whenever building, generating, reviewing, or fixing a website that is created or co-built with AI (Claude Code, Cursor, Lovable, v0, bolt.new, vibecoding workflows in general). AI-built sites carry a systematic, predictable set of SEO failure modes — this skill detects and fixes them BEFORE the site ships. Trigger this skill whenever the user asks to 'udělej web', 'postav landing page', 'vytvoř e-shop/web/aplikaci', 'zkontroluj SEO', 'oprav SEO', 'SEO audit', mentions Next.js/React/Vite project setup, or any time you (Claude) are about to finish scaffolding a new site, page, route, or component and mark it as done. Also trigger proactively at the end of any coding session that touched routing, page templates, metadata, or the build config — treat it as a pre-ship gate, not an optional extra. This skill focuses on the CODE and INFRASTRUCTURE layer; for content/copywriting/keyword strategy use the seo-complete-optimization skill alongside it."
---

# SEO Risk Guard pro AI-generované weby

## Proč tento skill existuje

Weby postavené pomocí AI (Claude Code, Cursor, Lovable, v0, bolt.new a podobné nástroje) mají systematicky opakující se SEO chyby, protože AI vždy udělá přesně to, o co je požádaná — a "udělej mi web" typicky neobsahuje SEO požadavky jako implicitní součást zadání. Výsledkem je funkční, hezky vypadající web, který ale:

- Google nedokáže pořádně indexovat (CSR bez SSR/SSG)
- nemá meta tagy, sitemap, robots.txt, schema
- má generický obsah bez search intentu
- má pomalý výkon kvůli neoptimalizovaným assetům a zbytečným závislostem

Tento skill funguje jako **pre-ship gate**: než se stránka/projekt označí za hotový, projde se proti checklistu níže a rizika se aktivně opraví, ne jen zmíní.

Tento skill neřeší strategii obsahu a copywriting do hloubky — na to slouží skill `seo-complete-optimization`, který se má konzultovat souběžně, hlavně u bloků F (on-page), H (keywords) a I (copywriting).

## Krok 1 — Detekuj stack a rendering strategii

Než cokoliv opravuješ, zjisti, s čím pracuješ:

```bash
# zjisti framework
cat package.json | grep -E "next|react|vite|astro|gatsby|remix"
```

| Framework | Výchozí riziko | Co ověřit |
|---|---|---|
| Next.js (App Router) | Client Components bez server renderingu tam, kde má být obsah indexovatelný | `'use client'` na stránkách s hlavním obsahem = riziko; ověř `generateMetadata` |
| Next.js (Pages Router) | Chybějící `getServerSideProps`/`getStaticProps` u obsahových stránek | CSR-only stránky bez fallbacku |
| Vite + React (SPA) | Čistě client-side rendering — Google renderuje pomaleji a nespolehlivěji | Zvaž přechod na Next.js/Astro, nebo minimálně prerendering (`vite-plugin-ssr`, `react-snap`) |
| Astro | Obvykle SSG by default — nižší riziko, ale zkontroluj `client:*` direktivy u obsahu | Islands by neměly obsahovat hlavní textový obsah |
| Čisté HTML/statický web | Nejnižší riziko renderingu, ale nejvyšší riziko chybějících meta/schema, protože se dělá ručně | Projdi každý `.html` soubor |

Pokud je hlavní obsah stránky renderovaný pouze na klientovi (CSR bez hydratace ze serveru), **toto je nejzávažnější nález a řeš ho jako první** — nic dalšího nemá smysl opravovat, dokud Google fyzicky neuvidí obsah.

## Krok 2 — Projdi kódovou základnu proti risk-checklistu

Projdi projekt systematicky a u každého bodu buď oprav, nebo napiš do reportu proč to není relevantní.

**Plný checklist se všemi kontrolními body je v `references/risk-checklist.md` — přečti si ho a projdi bod po bodu, než označíš web za hotový.** Osm kategorií, které pokrývá:

1. Indexovatelnost a rendering — je hlavní obsah v initial HTML response?
2. Povinné soubory — robots.txt, sitemap.xml, favicon, manifest.json
3. Meta tagy per-page — title, description, OG tagy, canonical
4. Sémantická struktura HTML — jeden H1, hierarchie nadpisů, alt texty
5. Strukturovaná data (schema.org) — Organization/LocalBusiness, Product/Article/FAQPage
6. Výkon a Core Web Vitals — obrázky, bundle size, fonty, render-blocking skripty
7. URL struktura a routing — čitelné URL, canonical, konzistentní www/trailing slash
8. Bezpečnost a technické základy — HTTPS, vlastní 404, žádné vystavené API klíče

## Krok 3 — Obsahová rizika specifická pro AI generování

I když text psal člověk přes AI asistenta, hlídej tyto vzorce (detailní copywriting pravidla jsou ve skillu `seo-complete-optimization`, blok I):

- **Generický, nediferencovaný text** — AI má tendenci psát podobně napříč projekty ve stejném oboru. Pokud text čte jako "mohl by být na jakémkoliv webu v tomto oboru", je to red flag.
- **Chybějící E-E-A-T signály** — žádný autor, žádné konkrétní zkušenosti, čísla, reference.
- **Duplicitní/přeformulovaný obsah** — hlavně u produktových popisků generovaných z výrobcových dat.
- **Text bez search intentu** — obsah odpovídá na to, co si AI myslí, že je důležité, ne na to, co lidé reálně hledají (chybí keyword research před psaním).

## Krok 4 — Definition of Done (než označíš stránku/projekt za hotový)

Než řekneš uživateli "hotovo", potvrď si:

- [ ] `curl -s <url> | grep -i "<title>"` vrací smysluplný, stránce odpovídající title — ne prázdný shell
- [ ] sitemap.xml a robots.txt existují a jsou dostupné na produkční URL
- [ ] Každá nová stránka má vlastní title/description/canonical/OG tagy
- [ ] Lighthouse SEO score ≥ 95 a Performance score reálně změřený (ne odhad)
- [ ] Aspoň základní schema.org je na místě
- [ ] Žádný `<h1>` duplikát, žádná chybějící alt
- [ ] Pokud šlo o obsahovou stránku: zkontrolováno proti blokům F/H/I skillu `seo-complete-optimization`

Pokud něco z toho není splněno, řekni to uživateli explicitně — neschovávej to jako "drobnost". AI weby přesně tímhle způsobem ztrácí SEO výkon: jednotlivě to vypadají jako maličkosti, souhrnně to znamená, že web nikdy nezačne rankovat.

## Jak reportovat výsledek

Po provedení auditu/oprav vždy shrň uživateli:

1. Co bylo nalezeno (stručně, podle kategorií 2.1–2.8 v `references/risk-checklist.md`)
2. Co bylo opraveno přímo v kódu
3. Co vyžaduje rozhodnutí uživatele (např. volba mezi migrací na SSR framework vs. prerendering patch)
4. Co zůstává mimo scope kódu (obsahová strategie, link building — odkázat na `seo-complete-optimization`)

Nikdy nekonči hlášením "SEO je v pořádku" bez toho, aby byl checklist výše skutečně projitý bod po bodu.
