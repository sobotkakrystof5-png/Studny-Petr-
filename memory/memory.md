# memory/memory.md — paměť projektu Petráň, studny

Zdroj pravdy nejvyšší úrovně jsou `CLAUDE.md` a `AGENTS.md`. Tento soubor je jejich kontinuita mezi sessions — viz `memory/index.md` pro pravidla aktualizace a neprotiřečení.

## Kontext klienta

**Potvrzeno (2026-08-19, zdroj: chat + ARES podle IČO — plný detail v `studny-prompt.md`):**
- Oficiální název (ARES): Karel Petráň, OSVČ (fyzická osoba podnikající)
- IČO: 19298242; DIČ: neplátce DPH
- Datum vzniku živnosti: 27. 4. 2023 — POZOR: registrace OSVČ, ne nutně reálný začátek praxe, needomýšlet roky zkušeností
- Adresa: Kanín 26, 289 07 Opolany, okres Nymburk
- Telefon: +420 605 753 751; e-mail: petran111@seznam.cz
- Existující doména `studnarstvipetran.cz` vrací HTTP 402 (nefunkční hosting) — nepoužitelná jako zdroj obsahu/fotek
- Služby (potvrzeno klientem): vrtání studní, čištění studní, prohlubování studní, vodní pohotovost 24/7 — zbylé karty služeb placeholder
- Vizuální motiv (signatura): kapka vody — zadal klient přímo, používat jako opakující se prvek
- Tón: přátelský, tým 4 lidí (lehce osobní/týmová rovina), hero musí zabrat do ~5 vteřin

**Nepotvrzeno — viz sekce Otevřené otázky níže a `studny-prompt.md`.** Žádný z těchto faktů se nesmí domýšlet ani odhadovat.

## Rozhodnutí

- **2026-08-18** — Vytvořeny `CLAUDE.md` a `AGENTS.md` na základě dostupných skillů a názvu projektu.
- **2026-08-18** — Struktura webu závazně stanovena jako one-pager podle šablony Zámečnictví MB (skill `onepage-craftsman-site-layout`) — scrollovací stránka s kotvovou navigací (`#o-nas`, `#sluzby`, `#galerie`, `#kontakt`), ne multi-page web. Toto je nevratné rozhodnutí, ne návrh otevřený k tiché revizi.
- **2026-08-18** — Založen paměťový systém `memory/` (tento soubor, `memory/index.md`, `memory/activity.log`) pro kontinuitu mezi sessions.
- **2026-08-19** — Spuštěn skill `web-project-brief`, sesbírána první dávka faktů od uživatele + ověřeno přes ARES podle IČO. Zapsáno do `studny-prompt.md`. Web `studnarstvipetran.cz` je nefunkční (HTTP 402) — nelze čerpat obsah/fotky.
- **2026-08-19** — Postavena první funkční verze webu: kostra dle `onepage-craftsman-site-layout`, vlastní design systém (studniční modř + vápencová neutrál + měděná CTA, motiv kapky vody + hloubková ryska), obsah dle potvrzených faktů, placeholdery pro fotky/logo. Hero stat-strip vědomě nahrazen ("4 lidi v partě" / "24/7 vodní pohotovost" místo nepotvrzených let praxe). Formulář: honeypot + inline validace + plné GDPR, odeslání přes `mailto:` handoff jako stopgap (backend/API klíč čeká na rozhodnutí uživatele). Otestováno Playwrightem (desktop/tablet/mobil, 0 console chyb, WCAG AA kontrast numericky ověřen a jedna nedostatečná kombinace opravena, oprava přístupnostní chyby s tab-pořadím mobilního menu přes `inert`). Projet `humanize-text-cs` — odstraněny pomlčky jako spojky.

## Stav projektu

- **Aktuální fáze:** první funkční verze webu hotová a otestovaná (viz Changelog 2026-08-19). `index.html`, `style.css`, `script.js`, `sitemap.xml`, `robots.txt` naplněné a fungující.
- **Další krok:** doplnit od klienta zbývající otevřené otázky (logo, roky praxe, dojezdová vzdálenost, reference, reálné fotky) a rozhodnout mechanismus odesílání formuláře (mailto stopgap vs. Formspree/Web3Forms vs. serverless funkce — poslední dvě mění "bez backendu" předpoklad tech stacku, nutno nahlásit uživateli, ne rozhodnout potichu).
- DoD checklist (AGENTS.md §7) je splněný kromě: og:image (chybí reálná fotka) a plně automatického odeslání formuláře (viz výše).

## Otevřené otázky

Zbývající nepotvrzené body (plný detail viz `studny-prompt.md`):

- Zobrazovaný název na webu (varianty: "Karel Petráň" / "Petráň — studny" / "Studnařství Petráň" / jiné)
- Roky praxe / reálný začátek ve studnařství (ARES dává jen datum registrace OSVČ, ne praxi)
- Území / dojezdová vzdálenost (okruh v km, kraje/okresy) — pro lokální SEO
- Fotky — existují reálné? Kolik a odkud?
- Logo — existuje? Jaké barvy naznačuje?
- Reference / počet realizací — pouze pokud klient sám uvede číslo
- Význam poznámky "pátek 15:00" ze zadání — deadline, nebo něco jiného?

## Changelog

Surový trail změn je v `memory/activity.log` (append hookem při každé změně souboru). Při budoucích sessions se relevantní řádky z něj destilují sem.

- *(zatím žádné destilované záznamy)*
