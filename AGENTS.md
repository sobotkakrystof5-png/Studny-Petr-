# AGENTS.md — Petráň, studny

Tento dokument je technický a procesní návod pro jakéhokoli agenta (Claude Code, Cursor, Codex, Copilot...), který na tomto repu pracuje. Popisuje, co se staví, jaké skilly použít, v jakém pořadí a co musí platit, než je stránka hotová. Chování vůči uživateli a projektový log jsou v `CLAUDE.md` — tenhle soubor je "jak", ten druhý "jak se chovat" a "kde jsme".

## 1. Co se staví

Jednostránkový ("one-pager") marketingový web pro živnostníka/firmu v oboru **studny**. Aktuální rozsah služeb je v `studny-prompt.md`; firma realizuje kopané studny a servisuje stávající vrtané studny, nové vrtané studny nevrtá. Cíl webu: působit důvěryhodně a generovat poptávky telefonem nebo e-mailem.

Vzor struktury: šablona **Zámečnictví MB** (skill `onepage-craftsman-site-layout`, viz sekce 4) — scrollovací stránka s kotvovou navigací, ne multi-page web.

## 2. Aktuální stav repa (2026-08-18)

- `index.html`, `style.css`, `script.js` — založené, **prázdné (0 B)**. Žádný kód zatím nevznikl.
- `studny-prompt.md` — založený, **prázdný (0 B)**. Zadání od klienta/uživatele do něj ještě nebylo vloženo.
- Žádný framework, žádný build krok — čistý HTML/CSS/JS stack (odpovídá tomu, co je založené).
- V `.claude/skills/` je kompletní sada skillů popsaná níže — ty jsou hotové a připravené k použití.

**Než vznikne jakýkoliv finální obsah, musí se `studny-prompt.md` doplnit nebo musí uživatel odpovědět na otázky v sekci 3.** Bez toho nejde napsat nic, co by nebylo buď prázdný placeholder, nebo vymyšlený fakt — a vymýšlet fakta o klientovi je zakázané (viz sekce 6).

## 3. Chybějící vstupy — zjistit dřív, než se píše finální obsah

Toto je prakticky krok 1 skillu `web-project-brief` (sekce 4). Dokud nejsou zodpovězené, pracuje se jen se strukturou/kostrou, ne s reálným textem:

- **Přesný název firmy/OSVČ**, jak má být na webu (a v patičce/IČO řádku)
- **IČO / DIČ** (pokud plátce)
- **Adresa** (fakturační i případně sídlo/provozovna, pokud jiná)
- **Telefon, e-mail** pro CTA tlačítka
- **Rok založení / počet let praxe** — pro hero stat strip (šablona chce "25+ let praxe" / "rok založení")
- **Přesný seznam služeb** (šablona počítá s 5 kartami — např. vrtané studny, kopané studny, čištění a údržba, opravy a servis čerpadel, průzkumné vrty — ale toto musí potvrdit klient, ne vymyslet AI)
- **Území / dojezdová vzdálenost** (lokální SEO blok K potřebuje vědět, kde firma reálně působí)
- **Fotky** — existují už, nebo je web zatím návrh s placeholdery? Kolik a odkud (realizace, tým, technika)?
- **Logo** — existuje? Jaké barvy naznačuje? Potřebuje úpravu pozadí?
- **Tón** — má majitel osobní příběh (rodinná firma, generace studnařů), nebo jde o věcnou prezentaci bez storytellingu? Tohle rozhoduje, jestli sekce "O nás" dostane osobní rovinu, nebo zůstane věcná.
- **Reference/roky zkušeností/počty realizací** — pouze pokud je klient sám uvedl. Nikdy nedoplňovat vlastní odhad.

Pokud něco z tohoto chybí v okamžiku psaní obsahu, **zeptej se uživatele** (viz `web-project-brief` skill) — nehádej a nenech prázdné ticho, ale i nedávej si vlastní čísla/roky/počty.

## 4. Skill stack — co použít a kdy

Repo obsahuje víc skillů, některé jsou **duplicitní kopie stejného obsahu pod jiným názvem složky** — nepoužívat obě verze zvlášť, je to tentýž text:

| Skill (adresář) | Účel | Kdy použít |
|---|---|---|
| `web builder` (interně `web-project-brief`) | Sběr zadání od klienta → PROJECT-BRIEF.md + CLAUDE.md šablona | Na začátku, pokud `studny-prompt.md` je prázdný nebo neúplný (viz sekce 3) |
| `antos skill` **=** `onepage-craftsman-site-layout` (duplicitní, stejný obsah) | Strukturální šablona jednostránkového řemeslnického webu (Zámečnictví MB) — pořadí sekcí, komponenty, `assets/skeleton.html` | Při stavbě `index.html` — je to výchozí kostra stránky |
| `seo-ai-risk-guard` **=** `SEO skill 1` (duplicitní) | Technická/infrastrukturní SEO gate pro AI-generované weby (meta tagy, sitemap, schema, výkon, sémantika HTML) | Před označením čehokoliv za hotové — pre-ship gate, ne volitelný krok |
| `seo-complete-optimization` **=** `SEO skills 2` (duplicitní) | Kompletní A–O SEO rámec (obsah, keywords, lokální SEO, copywriting, měření) | Při psaní/úpravě jakéhokoli textu, meta popisků, struktury — hlavně bloky F (on-page), H (keywords/intent), I (copywriting), K (lokální SEO — tady vysoce relevantní, jde o lokální řemeslníka) |
| `non ai skills` (interně `humanize-text-cs`) | Odstranění typických AI stylistických tiků z české sazby (pomlčky jako spojky, trojkolonky, klišé fráze, umělá vyváženost) | Poslední průchod přes veškerý český text před odevzdáním sekce/webu |

## 5. Krok za krokem — postup stavby webu

1. **Zajisti zadání.** Pokud `studny-prompt.md` je prázdný, spusť proces skillu `web-project-brief`: veď s uživatelem rozhovor podle sekce 3 tohoto souboru, výstupem je vyplněný brief (fakta o klientovi, tón, tech stack — ten už je daný: vanilla HTML/CSS/JS).
2. **Postav kostru podle šablony.** Vezmi `,.claude/skills/antos skill/` → `assets/skeleton.html` jako strukturální základ pro `index.html`. Zachovej pořadí sekcí a kotvy: Header → Hero (`#hero`) → O nás (`#o-nas`) → Služby (`#sluzby`) → Galerie (`#galerie`) → Kontakt (`#kontakt`) → Footer.
3. **Navrhni vlastní design systém** — barvy, typografii, vizuální motiv inspirovaný oborem studnařství (voda, vrt, hlubina, technický nákres pažnice — najdi konkrétní, ne obecný motiv). Nikdy nepřebírej barvy/fonty ze skeletonu, ten je záměrně šedý placeholder.
4. **Naplň obsah reálnými fakty** ze sekce 3 — nikdy ne vymyšlenými. Kde fakt chybí, nech viditelný placeholder a označ to v `CLAUDE.md` sekci 5 jako otevřenou otázku, nezaplňuj tichou domněnkou.
5. **Aplikuj `seo-complete-optimization`** při psaní každé sekce/meta popisku — hlavně bloky F, H a I. Působnost po celé ČR musí odpovídat meta tagům a schema.org.
6. **Projeď `humanize-text-cs`** přes všechen český text před tím, než ho ukážeš jako hotový.
7. **Kontakt drž na telefonu a e-mailu.** Klient výslovně nechce kontaktní formulář; `api/kontakt.js` ani formulářové prvky na web nevracet bez nové instrukce.
8. **Projeď `seo-ai-risk-guard` checklist** (viz `references/risk-checklist.md`) jako pre-ship gate — meta tagy per-page, sitemap.xml, robots.txt, schema.org (`LocalBusiness`), sémantika HTML, výkon.
9. **Over responzivitu, přístupnost a konzoli bez chyb** (viz sekce 7 níže) — na mobilu, tabletu, desktopu.
10. **Shrň uživateli** co je hotové, co čeká na jeho rozhodnutí/fakta, a aktualizuj `CLAUDE.md` sekci 5 (stav projektu).

## 6. Pravidla obsahu a designu

- **Web nesmí vypadat jako "AI šablona".** Vyhýbej se: symetrickému centrovanému hero s ilustrací vpravo beze změny proporcí, identickým feature-kartám se stejnou ikonou nahoře, obecným gradientům/glassmorphism, fade-in-na-všechno animacím, lorem-ipsum frázím typu "Kvalita je naší prioritou". Místo toho: jeden konkrétní vizuální motiv z oboru studnařství, který se opakuje jako signatura, ne dekorace.
- **Nikdy nevymýšlet fakta o klientovi** — počet realizací, roky praxe, ceny, reference. Pokud klient číslo neuvedl, zůstává to otevřená otázka, ne odhad.
- **Jazyk webu: čeština**, po humanizačním průchodu (sekce 4, krok 6).
- Pokud se formulář v budoucnu na výslovný pokyn vrátí, **GDPR souhlas** musí být plná věta o účelu zpracování dat a že se nesdílí s třetími stranami, ne jednořádkové "souhlasím".
- **Fotky:** dokud klient nedodá reálné fotky, žádné stock fotky jako výplň — jasně označený placeholder rámeček (šedé pozadí, ikona kamery, popisek co tam bude, správný aspect-ratio, aby se layout po vložení reálné fotky neposunul).
- **Jedna primární CTA barva/styl + jedna sekundární** — stejná disciplína jako v šabloně, nepřidávat třetí úroveň tlačítek.

## 7. Definition of Done — než je cokoliv "hotovo"

Sloučený checklist z `seo-ai-risk-guard` a `seo-complete-optimization`, plus základní web-project-brief požadavky:

- [ ] `<title>` a meta description jsou unikátní a smysluplné přímo ve zdrojovém HTML (ne prázdné)
- [ ] `sitemap.xml` a `robots.txt` existují a odkazují na sebe
- [ ] Právě jeden `<h1>` na stránku, logická hierarchie `<h2>`–`<h3>`
- [ ] Všechny obrázky (včetně placeholderů) mají popisný `alt`
- [ ] `Organization`/`LocalBusiness` JSON-LD schema je na místě a validní (Rich Results Test)
- [ ] Open Graph tagy nastavené
- [ ] Kontakt nabízí funkční `tel:` a `mailto:` odkazy; formulář zde klient výslovně nepožaduje
- [ ] Mapa (Mapy.cz/Google Maps embed) v kontakt sekci, pokud je adresa/provozovna k dispozici
- [ ] Plně responzivní (mobil/tablet/desktop), žádné horizontální scrollování
- [ ] Kontrast textu min. WCAG AA, všechny ovládací prvky jsou ovladatelné klávesnicí
- [ ] Žádné console chyby v prohlížeči
- [ ] Text prošel `humanize-text-cs` průchodem
- [ ] Search intent je vědomě zvážen — stránka cílí na kopané studny, servis vrtaných studní a vyhledávání pramene po celé ČR
- [ ] Žádný fakt v textu není vymyšlený — vše dohledatelné buď v `studny-prompt.md`, nebo výslovně od uživatele

Pokud něco z tohoto není splněno, řekni to uživateli explicitně — nezamlčovat jako drobnost.

## 8. Jak projekt spustit lokálně

Žádný build krok. Stačí otevřít `index.html` v prohlížeči, nebo pro realistické testování (fetch, relativní cesty) spustit jednoduchý statický server z kořene repa, např.:

```bash
python3 -m http.server 8000
```

a otevřít `http://localhost:8000`.

## 9. Paměťový systém

Kontinuita mezi sessions je ve složce `memory/` (načítá se automaticky přes importy v `CLAUDE.md` sekce 7). `memory/pravidla.md` je zkrácený, zdrojovaný výtah procesních a obsahových pravidel z tohoto souboru a z `CLAUDE.md` — rychlý checklist, ne náhrada za tento dokument. `memory/memory.md` drží aktuální stav projektu a otevřené otázky nad rámec statického popisu v sekci 2 a 3 výše. Při rozporu mezi `memory/` a tímto souborem platí vždy tento soubor a `CLAUDE.md`.
