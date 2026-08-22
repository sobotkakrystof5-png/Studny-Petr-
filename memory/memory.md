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
- **2026-08-22** — Redesign podle klientova briefu (kritické opravy + nový obsah), design systém/tech stack/one-pager struktura beze změny:
  - **Formulář — Resend + Vercel serverless funkce.** Klient/uživatel v chatu výslovně zvolil Resend přes doporučené Formspree/Web3Forms; protože Resend vyžaduje tajný API klíč (nejde bezpečně volat z klientského JS), vzniklo `api/kontakt.js` (Vercel Node serverless funkce, žádné npm závislosti, volá Resend REST API přes `fetch`). Hosting: **Vercel** (uživatel potvrdil, MCP nástroje pro Vercel jsou v této session připojené). `mailto:` handoff je pryč. Server-side validace + honeypot re-check v `api/kontakt.js` (obranná vrstva navíc, protože endpoint je teď veřejný). `script.js` má loading/success/error stavy, `style.css` `.form-status` je teď barevný callout box, ne jen barva textu.
  - **Galerie — Varianta A.** Redukce z 8 nefunkčních placeholderů na 3, filtrovací pilulky (`.pills`/`.pill`) úplně odstraněny z HTML i CSS.
  - **Sticky mobilní CTA + desktop telefon v headeru.** `#stickyCall` (fixed dole, `tel:` odkaz, ikona telefonu, text "Zavolat — pohotovost 24/7") viditelný pouze do 860px; `.header-phone` (telefonní číslo vedle CTA tlačítka) viditelné jen od 861px. Sticky CTA dostává `inert`, když je otevřené mobilní menu (stejný vzor jako existující drawer).
  - **Nové sekce:** `#proces` ("Jak to probíhá", 4 kroky) a `#faq` ("Časté dotazy", `<details>/<summary>`, bez JS). Odpovědi na cenu a pohotovost jsou reálné/bezpečné; odpovědi na dobu realizace, povolení/ohlášení a typickou hloubku vrtu v okolí Nymburka jsou vědomě obecné placeholdery označené `<!-- OTEVŘENO: čeká na klienta -->` v HTML — nevymýšlet konkrétní čísla/postup.
  - **Reference/sociální důkaz** — žádná samostatná sekce s vymyšleným obsahem; místo toho jedna věta `.trust-note` v `#kontakt` s IČO a datem registrace (ARES).
  - **Ikonografie** — 7 nových stroke ikon (`icon-drill`, `icon-clean`, `icon-depth`, `icon-alert`, `icon-person`, `icon-leaf`, `icon-clipboard`, plus `icon-phone` pro CTA) v SVG spritu v `index.html`. Kapka (`icon-drop`, filled) zůstala výhradně pro wordmark/patičku.
  - **og:image** — meta tag přidán (`/og-image.jpg` + rozměry + twitter:card), soubor samotný zatím neexistuje.
  - Ověřeno lokálně přes `vercel dev --local` + Playwright (24 automatizovaných kontrol): žádné console chyby na desktopu/tabletu/mobilu, bez horizontálního scrollu, FAQ accordion funguje, sticky CTA + inert chování funguje, formulář reálně zavolal `api/kontakt.js` (chyba s falešným Resend klíčem se čistě propaguje jako `send_failed`; úspěšná cesta ověřena s mockovanou odpovědí API). Nové barevné kombinace (success/error callout) numericky ověřeny na WCAG AA (7.07:1 a 6.88:1).
- **2026-08-22 (týž den, doplněk)** — uživatel chtěl odstranit "šedé rámečky" ze Služby/Galerie/Kontakt. Šlo o `.section.alt` (grayish `--bg-alt` pozadí celé sekce) — odstraněna třída `alt` ze všech tří sekcí v `index.html` a smazáno teď nepoužívané pravidlo `.section.alt{background:var(--bg-alt);}` ze `style.css` (token `--bg-alt` sám zůstává, používá ho `.map-placeholder` a `.form-status.loading`). Vedlejší efekt: placeholder dlaždice v Galerii teď víc vystupují z (světlejšího) pozadí sekce místo aby s ním splývaly. Regresně ověřeno stejnou sadou 24 Playwright kontrol (0 chyb).

## Stav projektu

- **Aktuální fáze:** redesign z 2026-08-22 implementován a lokálně otestován (viz Changelog). Web má teď reálný formulář (Resend přes Vercel serverless funkci — čeká jen na účet/klíč a nasazení, viz Otevřené otázky), opravenou galerii, sticky pohotovostní CTA, sekce Proces a FAQ, odlišené ikony. Web ale **ještě není nasazený** — žije jen lokálně v repu, `vercel deploy` nebyl spuštěn (čeká na výslovné potvrzení uživatele, je to akce s reálným dopadem/účtem).
- **Další krok:** (1) uživatel/klient si musí založit účet na resend.com a vygenerovat `RESEND_API_KEY` (ověřovací e-mail chodí na `petran111@seznam.cz`, tenhle krok nejde udělat za ně); (2) tenhle klíč je pak potřeba nastavit jako environment variable v nastavení Vercel projektu; (3) propojit/vytvořit Vercel projekt (mám k tomu MCP nástroje, ale samotné nasazení je akce, kterou spouštím až na výslovné potvrzení); (4) doplnit od klienta zbývající otevřené otázky (logo, roky praxe, dojezdová vzdálenost, reference, reálné fotky, FAQ odpovědi — viz níže).
- DoD checklist (AGENTS.md §7) je splněný kromě: og:image (chybí reálný soubor), a formulář je otestovaný jen lokálně/end-to-end simulovaně — reálné odeslání e-mailu přes Resend nelze ověřit bez klientova API klíče.

## Otevřené otázky

Zbývající nepotvrzené body (plný detail viz `studny-prompt.md`):

- Zobrazovaný název na webu (varianty: "Karel Petráň" / "Petráň — studny" / "Studnařství Petráň" / jiné)
- Roky praxe / reálný začátek ve studnařství (ARES dává jen datum registrace OSVČ, ne praxi)
- Území / dojezdová vzdálenost (okruh v km, kraje/okresy) — pro lokální SEO
- Fotky — existují reálné? Kolik a odkud?
- Logo — existuje? Jaké barvy naznačuje?
- Reference / počet realizací — pouze pokud klient sám uvede číslo
- Význam poznámky "pátek 15:00" ze zadání — deadline, nebo něco jiného?
- **RESEND_API_KEY** — nutno vygenerovat na resend.com (viz Stav projektu výše), pak nastavit ve Vercel project env vars
- **FAQ odpovědi (`#faq` v `index.html`, označeno `<!-- OTEVŘENO: čeká na klienta -->`):** orientační doba realizace ve dnech; přesný postup ohlášení/povolení k vrtání studny, který klient se zákazníky reálně řeší; typická hloubka vrtu v okolí Nymburka
- **og-image.jpg** — soubor neexistuje, meta tag na něj ukazuje. Potřeba buď reálná fotka od klienta, nebo grafika s brand barvami/kapkou (lze vyrobit i bez klientských fotek)
- **Nasazení na Vercel** — projekt zatím není propojený/nasazený, čeká na výslovné potvrzení uživatele (viz Stav projektu)

## Changelog

Surový trail změn je v `memory/activity.log` (append hookem při každé změně souboru). Při budoucích sessions se relevantní řádky z něj destilují sem.

- *(zatím žádné destilované záznamy)*
