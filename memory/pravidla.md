# pravidla.md — provozní pravidla projektu

Toto je zkrácený, rychle prohledatelný výtah pravidel z `CLAUDE.md` a `AGENTS.md`. Tento soubor nic nemění ani nedoplňuje — je to sekundární přehled, ne zdroj pravdy. Při konfliktu mezi tímto souborem a `CLAUDE.md`/`AGENTS.md` platí vždy ony dva. Sesterské soubory `memory/index.md` a `memory/memory.md` spravuje jiný proces, sem nepatří.

---

## Fakta a obsah

### Nikdy nevymýšlet fakta o klientovi
**Pravidlo:** Roky praxe, počty realizací, ceny, reference — pokud to klient sám neuvedl, zůstává to otevřená otázka. Nikdy nedoplňovat vlastní odhad ani přibližné číslo.
**Proč:** Vymyšlený fakt o firmě je nedůvěryhodný a nedohledatelný — riziko pro klienta i pro důvěryhodnost webu.
**Zdroj:** CLAUDE.md §3, AGENTS.md §3, AGENTS.md §6

### Chybějící vstup = otázka, ne domněnka
**Pravidlo:** Pokud chybí fakt potřebný k psaní obsahu (název firmy, IČO, kontakty, rok založení, seznam služeb, území působnosti, fotky, logo, tón komunikace), zeptej se uživatele. Nehádej a nenech prázdné ticho, ale ani nezaplňuj tichou domněnkou.
**Proč:** Bez potvrzených vstupů jde psát jen kostra/placeholder, ne finální text.
**Zdroj:** AGENTS.md §3, CLAUDE.md §3

## Struktura a design

### One-pager podle šablony Zámečnictví MB je závazný
**Pravidlo:** Struktura webu (scrollovací one-pager s kotvovou navigací `#hero`, `#o-nas`, `#sluzby`, `#galerie`, `#kontakt`, podle skillu `onepage-craftsman-site-layout`) je stanovené rozhodnutí, ne návrh otevřený k tiché revizi.
**Proč:** Přechod na jinou strukturu (např. multi-page) je nevratné rozhodnutí, které se nedělá potichu.
**Zdroj:** CLAUDE.md §4

### Web nesmí vypadat jako "AI šablona"
**Pravidlo:** Vyhýbat se: symetrickému centrovanému hero s ilustrací vpravo beze změny proporcí, identickým feature-kartám se stejnou ikonou nahoře, obecným gradientům/glassmorphism, fade-in-na-všechno animacím, lorem-ipsum frázím typu "Kvalita je naší prioritou". Místo toho jeden konkrétní vizuální motiv z oboru studnařství, opakovaný jako signatura, ne dekorace.
**Proč:** Generický "AI vzhled" podkopává důvěryhodnost řemeslnické firmy a je to hlavní projektová priorita (originalita).
**Zdroj:** AGENTS.md §6

### Žádné stock fotky jako výplň
**Pravidlo:** Dokud klient nedodá reálné fotky, používat jasně označený placeholder rámeček (šedé pozadí, ikona kamery, popisek co tam bude, správný aspect-ratio, aby se layout po vložení reálné fotky neposunul) — ne stock fotky.
**Proč:** Stock fotky vytvářejí falešný dojem reálného obsahu a maskují, že fakta/materiály ještě chybí.
**Zdroj:** AGENTS.md §6

### Jedna primární + jedna sekundární CTA
**Pravidlo:** Jedna primární CTA barva/styl a jedna sekundární — žádná třetí úroveň tlačítek.
**Proč:** Stejná disciplína jako v referenční šabloně; víc úrovní CTA ředí vedení návštěvníka k poptávce.
**Zdroj:** AGENTS.md §6

### GDPR souhlas musí být plná věta
**Pravidlo:** Souhlas u formuláře musí být plná věta o účelu zpracování dat a o tom, že se data nesdílí s třetími stranami — ne jednořádkové "souhlasím".
**Proč:** Jednořádkový souhlas bez účelu zpracování je právně i eticky nedostatečný.
**Zdroj:** CLAUDE.md §3, AGENTS.md §6

## Proces

### Povinný proces před každým krokem
**Pravidlo:** Před jakoukoli změnou kódu nebo novým promptem: (1) parafrázuj požadavek uživatele jednou větou, (2) ověř kolizi s existující strukturou/designem/obsahem, (3) ověř, jestli něco nerozbíjí (formulář, navigace, responzivita, SEO), (4) ověř soulad s principem "žádná AI šablona", (5) potichu neměněný tech stack/strukturu (např. one-pager → multi-page) nahlas jako nevratné rozhodnutí a nech ho na uživateli. Pokud je problém, řekni to dřív, než cokoliv implementuješ.
**Proč:** Zabraňuje tichým, nevratným rozhodnutím a implementaci špatných požadavků jen proto, že o ně uživatel požádal.
**Zdroj:** CLAUDE.md §2

### Definition of Done
**Pravidlo:** Před označením čehokoli za "hotové" ověřit kompletní checklist v `AGENTS.md` §7 (meta tagy, sitemap/robots, schema.org, OG tagy, formulář včetně GDPR, mapa, responzivita, kontrast/přístupnost, žádné console chyby, humanizační průchod, lokální SEO záměr, žádný vymyšlený fakt). Zde se neduplikuje celý seznam — jen odkaz.
**Proč:** Jediný ucelený gate před odevzdáním; duplikace by časem zdriftovala od zdroje.
**Zdroj:** AGENTS.md §7

### Konflikt mezi promptem uživatele a dokumenty
**Pravidlo:** Konflikt nahlásit, vysvětlit ho v jedné až dvou větách a vyžádat si potvrzení, než se udělá nevratná změna (tech stack, one-pager → multi-page, design systém, placeholder → reálný obsah bez zdrojového materiálu). U vratných/drobných věcí stačí upozornění, pak pokračovat podle uživatele.
**Proč:** Nevratné změny se nedělají na základě jednoho promptu bez explicitního potvrzení.
**Zdroj:** CLAUDE.md §6

---

## Nová pravidla z práce na projektu

Sem se postupně doplňují nová provozní pravidla, která vyplynou z reálné práce na projektu (opravy od uživatele typu "tohle nedělej", potvrzené funkční postupy) — aby se nemusela vysvětlovat znovu každou session. Pokud nové pravidlo koliduje s `CLAUDE.md` nebo `AGENTS.md`, nezapisuje se sem jako tiché doplnění — konflikt se nahlásí uživateli k vyřešení v těch dokumentech.
