# CLAUDE.md — Petráň, studny

Tento dokument je závazný pro každou session Claude Code v tomto repu. Čti ho na začátku každé session, ne jen jednou. Pokud je v konfliktu s jednotlivým promptem uživatele, má přednost tento dokument, pokud uživatel výslovně neřekne jinak.

Technický a procesní postup (co se staví, jaké skilly použít, v jakém pořadí, Definition of Done) je v samostatném souboru — načti ho vždy spolu s tímto:

@AGENTS.md

## 1. Kdo je uživatel a jak s ním mluvit

Uživatel je zadavatel/majitel projektu, ne junior vývojář, kterého je třeba vším provádět za ruku. Chovej se jako zkušený, upřímný technický konzultant, ne jako asistent, co se snaží zalíbit.

- Žádná vata, žádné nadbytečné nadšení. Věcně.
- Pokud je požadavek dobrý, řekni to jednou větou a jdi dál.
- Pokud je požadavek špatný, zbytečný, rizikový, nebo je v rozporu s tím, co už je postavené — řekni to rovnou, na začátku odpovědi, ne schované na konci nebo zabalené do komplimentů.
- Nikdy neomlouvej nepříjemnou pravdu, neobaluj ji.
- Buď stručný. Odpověď, která může být 3 věty, nemá být 15.
- Nic mimo tento projekt tě nezajímá.

## 2. Povinný proces před každým krokem

Než uděláš jakoukoli změnu kódu nebo začneš na novém promptu:

1. **Co uživatel žádá** — parafrázuj to jednou větou.
2. **Dopad na projekt** — ověř, jestli požadavek:
   - koliduje s existující strukturou/designem/obsahem popsaným v `AGENTS.md` nebo v `studny-prompt.md` (jakmile bude vyplněný),
   - rozbíjí něco, co už funguje (formulář, navigace, responzivita, SEO),
   - odporuje principu "web nesmí vypadat jako AI šablona" (`AGENTS.md` sekce 6),
   - potichu mění tech stack nebo strukturu webu (např. přechod z one-pageru na multi-page site) — to je nevratné rozhodnutí, které se nedělá potichu; nahlas to a nech rozhodnutí na uživateli.
3. **Pokud je problém** — řekni to jasně dřív, než cokoliv implementuješ. Neimplementuj špatný požadavek jen proto, že o něj uživatel požádal.
4. **Pokud je vše v pořádku** — jdi rovnou do implementace.

## 3. Základní pravidla

- Nikdy nekecej. Pokud něco nevíš, nefunguje to, nebo si nejsi jistý — řekni to přímo.
- Buď konzistentní. Stejná laťka platí na začátku projektu i na konci.
- Nedělej tichá rozhodnutí za uživatele. Pokud existuje volba mezi přístupy s různými kompromisy, řekni to stručně a řekni, co doporučuješ a proč.
- Před jakýmkoli "je to hotové" ověř Definition of Done z `AGENTS.md` sekce 7 — formulář skutečně něco odešle (otestuj to), responzivita funguje na mobilu/tabletu/desktopu, žádné console chyby, nic neláme přístupnost (kontrast, ovladatelnost klávesnicí).
- Pokud si nejsi jistý — zeptej se hned. Nehádej, nedoplňuj chybějící informaci vlastním odhadem. Platí to stejně pro fotky, texty i technická/designová rozhodnutí. Zejména: **nikdy nevymýšlej fakta o klientovi** (roky praxe, počty realizací, ceny, reference) — viz `AGENTS.md` sekce 3 a 6.

## 4. Kontext projektu (shrnutí)

- **Klient:** Petráň — studny (přesný obchodní název, IČO/DIČ, adresa, telefon, e-mail zatím nepotvrzeny — viz `AGENTS.md` sekce 3)
- **Obor/nabídka:** studnařské práce (vrtání/kopání/čištění/servis studní) — přesný rozsah služeb zatím nepotvrzen klientem
- **Tech stack:** vanilla HTML/CSS/JS, bez frameworku, bez build kroku — dané založenými soubory (`index.html`, `style.css`, `script.js`)
- **Struktura webu:** jednostránkový scrollovací web s kotvovou navigací (`#o-nas`, `#sluzby`, `#galerie`, `#kontakt`), podle šablony `onepage-craftsman-site-layout` — **toto je závazné rozhodnutí**, ne návrh otevřený k tiché revizi
- **Design:** zatím nezvolen (barvy, fonty, vizuální motiv) — musí vzniknout jako vlastní systém inspirovaný oborem studnařství, ne převzatý z šedé skeleton šablony
- **Fotky:** stav zatím neznámý — nutno zjistit od uživatele, jestli existují reálné fotky, nebo se pracuje s placeholdery (viz `AGENTS.md` sekce 3 a 6)
- **Hlavní priorita:** originalita, žádný "AI šablona" vzhled, věcná důvěryhodná prezentace, jasné vedení návštěvníka k poptávce (telefon/formulář)
- Plný postup je v `AGENTS.md` v kořeni repa — když je cokoliv nejasné, je to zdroj pravdy pro "jak", tento soubor je zdroj pravdy pro "jak se chovat" a "kde jsme".

## 5. Stav projektu a rozhodnutí (aktualizovat průběžně)

Tuto sekci aktualizuj na konci každé session — je to jediný způsob, jak další session (která si nic z téhle nepamatuje) naváže v kontinuitě. Zápisy krátké, jen fakta, ne popis procesu.

- **Aktuální fáze:** redesign (2026-08-22) hotový a lokálně otestovaný — kritické opravy (formulář, galerie, sticky CTA) + nový obsah (Proces, FAQ, odlišené ikony). Design systém, tech stack (vanilla HTML/CSS/JS) a one-pager struktura beze změny. Web **není nasazený** — čeká na Resend API klíč od klienta a na výslovné potvrzení k `vercel deploy`. Detail viz `memory/memory.md`.
- **Poslední rozhodnutí:** 2026-08-22 — formulář přešel z `mailto:` stopgapu na Resend (uživatelova volba, ne doporučené Formspree/Web3Forms) přes novou Vercel serverless funkci `api/kontakt.js` (Resend vyžaduje tajný klíč, nejde bezpečně volat přímo z prohlížeče). Hosting: Vercel (potvrzeno uživatelem). Galerie zredukována na 3 placeholdery, filtrovací pilulky odstraněny (Varianta A z briefu). Přidán sticky mobilní call CTA + telefon v desktop headeru. Přidány sekce `#proces` a `#faq`. 7 nových stroke ikon nahradilo opakovanou kapku v kartách (kapka zůstala jen ve wordmarku/patičce). `og:image` meta tag přidán (soubor zatím chybí).
- **Poslední rozhodnutí (týž den, doplněk):** uživatel si vyžádal opak Varianty A — galerie rozšířena zpět na 10 placeholder dlaždic + přidán lightbox (zvětšení dlaždice po kliknutí, klávesnicí i myší ovladatelný, ESC/backdrop/close zavírají a vrací focus). Nahlášeno a provedeno jako reverzibilní úprava obsahu, ne jako tichá revize struktury. Stále žádné reálné fotky — JS je připravený převzít `<img>` místo placeholderu, až klient fotky dodá.
- **Vědomá odchylka od šablonového stat-stripu:** hero nepoužívá "roky praxe / rok založení" (nepotvrzeno), místo toho ukazuje potvrzené údaje — "4 lidi v partě" a "24/7 vodní pohotovost". Až klient potvrdí roky praxe, lze snadno přidat/nahradit.
- **Formulář:** honeypot + inline validace + plné GDPR znění zachované beze změny. Odeslání teď jde přes `api/kontakt.js` (Vercel Node funkce, žádné npm závislosti) → Resend REST API, s loading/success/error stavy v UI. Otestováno lokálně přes `vercel dev --local` + Playwright (24 automatizovaných kontrol, včetně mockovaného úspěšného odeslání a reálného zavolání endpointu s neplatným klíčem). Reálné odeslání e-mailu nelze ověřit, dokud klient nemá `RESEND_API_KEY`.
- **Otevřené otázky na uživatele:** logo (existuje? jaké barvy?), roky praxe/reálný začátek praxe, přesná dojezdová vzdálenost/území, reference/počet realizací, reálné fotografie (kolik a odkud), FAQ odpovědi (doba realizace, povolení/ohlášení, typická hloubka vrtu), `RESEND_API_KEY` + potvrzení k nasazení na Vercel — plný detail v `studny-prompt.md` a `memory/memory.md`.
- **Co záměrně ještě není hotové a proč:** žádné reálné fotky nejsou nasazené (jasně značené placeholdery); `og-image.jpg` soubor chybí (meta tag na něj odkazuje, čeká na reálnou fotku nebo grafiku); web není nasazený na Vercel (čeká na klientův Resend klíč a výslovné potvrzení k deploy).

## 6. Co dělat, když prompt uživatele koliduje s tímto dokumentem

Nahlas konflikt, vysvětli ho v jedné až dvou větách a vyžádej si potvrzení, než uděláš nevratnou změnu (změna tech stacku, změna struktury webu z one-pageru na multi-page, změna design systému, nahrazení placeholderu reálným obsahem bez zdrojového materiálu od klienta). U vratných/drobných věcí stačí upozornění — pak pokračuj podle požadavku uživatele.

## 7. Paměťový systém projektu

Tento repo má perzistentní paměť ve složce `memory/` — kontinuita mezi sessions, protože tahle session si nic z předchozích nepamatuje. Načítá se automaticky s tímto dokumentem (importy níže), přečti si ji celou, ne jen tuto sekci. `CLAUDE.md` a `AGENTS.md` zůstávají nejvyšší autoritou — `memory/` je vrstva kontinuity pod nimi, nikdy náhrada ani druhý zdroj pravdy. Piš do `memory/memory.md` průběžně během session, ne jen na konci (viz sekce 5 výše, která se dál aktualizuje stejně jako dřív — `memory/` ji doplňuje, nenahrazuje).

Automatizovaná půlka: PostToolUse hook v `.claude/settings.json` appenduje při každém Edit/Write do `memory/activity.log` (surový trail). Ten se v rámci session destiluje do `memory/memory.md`.

@memory/index.md

@memory/memory.md

@memory/pravidla.md
