Kompletní SEO rámec A–O
Zdroj pravdy pro seo-complete-optimization skill. Obsahuje všech 15 tematických bloků od technické infrastruktury po strategický copywriting, měření a iteraci.
A. Technická infrastruktura a hosting
Rychlost serveru – TTFB pod 200 ms, kvalitní hosting/CDN (Cloudflare, Fastly)
HTTPS všude, žádný mixed content, platný a automaticky obnovovaný certifikát
HTTP/2 nebo HTTP/3
Jedna kanonická doména – www vs. non-www, trailing slash, redirect chain na jedno místo
Redirecty – 301 pro trvalé změny, žádné redirect řetězy (A→B→C), žádné redirect loopy
Chybové stavy – vlastní 404 stránka s navigací zpět, 410 pro trvale smazaný obsah
Server logy – pravidelná log file analýza (jak crawluje Googlebot, kde plýtvá crawl budgetem)
B. Crawlovatelnost a indexace
XML sitemapa – aktuální, rozdělená (stránky/produkty/blog), odkázaná v robots.txt
robots.txt – správně nastavený, neblokuje omylem CSS/JS
Crawl budget – blokace nekonečných URL parametrů, filtrů, duplicitních variant
Kanonizace (rel=canonical) – na každé stránce, správně směřovaná
Noindex/nofollow – u tenkého obsahu, admin sekcí, interních vyhledávání
Indexovatelnost ověřená v GSC – Coverage report, žádné „Discovered – currently not indexed"
Interní prolinkování – logická hierarchie, žádné orphan stránky (bez odkazu odnikud)
Paginace – správně řešená z pohledu UX a crawl logiky
Redirect mapa při migraci – každá stará URL má definovaný cíl před spuštěním nové verze webu
C. Architektura webu
Plochá struktura – klíčové stránky do 3 kliků od homepage
Silo/tematické clustery – pillar page + podpůrné články provázané interním linkingem
Přehledná URL struktura – krátké, čitelné, s klíčovým slovem, bez zbytečných parametrů
Breadcrumbs – s odpovídajícím strukturovaným datem
Navigace odrážející prioritní byznysové kategorie, ne interní organizační strukturu firmy
D. Výkon a Core Web Vitals
LCP (Largest Contentful Paint) < 2,5 s
INP (Interaction to Next Paint) < 200 ms
CLS (Cumulative Layout Shift) < 0,1
Optimalizace obrázků – moderní formáty (WebP/AVIF), lazy loading, správné rozměry, srcset
Minifikace a komprese CSS/JS, odstranění render-blocking zdrojů
Font loading strategie (font-display: swap), preload klíčových assetů
Caching (browser cache, server-side cache, CDN edge cache)
Mobile-first výkon – testováno na reálném 4G, ne jen na wifi vývojářského notebooku
Bundle size pod kontrolou – žádné zbytečné knihovny přidané „protože to AI navrhla"
E. Mobile a responzivita
Mobile-first index – Google hodnotí primárně mobilní verzi
Tap targets dostatečně velké, žádné horizontální scrollování
Viewport meta tag správně nastavený
Žádné intersticiály blokující obsah hned po příchodu
F. On-page SEO
Title tag – unikátní na každé stránce, s hlavním klíčovým slovem na začátku, do ~60 znaků
Meta description – prodejní, s CTA, do ~155 znaků (nepřímý ranking faktor, ale ovlivňuje CTR)
H1 – přesně jeden na stránku, obsahuje hlavní téma
Hierarchie H2–H6 – logická, odráží strukturu odpovídající search intentu (ne jen vizuální styl)
Alt texty u obrázků – popisné, ne keyword stuffing, ne generické ("image1")
Interní odkazy s relevantním anchor textem, ne "klikni sem"
Struktura odstavců – čitelnost, skenovatelnost (bullet listy, tučné klíčové fráze)
URL obsahující klíčové slovo, bez zbytečných stopwords
Open Graph / Twitter Card tagy nastavené per-page pro sdílení na sociálních sítích
G. Strukturovaná data (Schema.org)
Organization / LocalBusiness schema
BreadcrumbList
Product, Review/AggregateRating (pokud e-shop)
FAQPage / HowTo (tam, kde má obsah tuto formu)
Article/BlogPosting pro blog
Validace přes Rich Results Test – žádné chyby ani warningy
H. Keyword a search intent strategie
Keyword research postavený na skutečném search volume + obtížnosti + byznysové hodnotě, ne jen objemu
Mapování search intentu (informační / navigační / transakční / komerční průzkum) na konkrétní typ stránky
Content gap analýza vůči konkurenci, která reálně vede v SERP
Topical authority – pokrytí tématu do šířky i hloubky, ne jen jeden článek na klíčové slovo
Kanibalizace klíčových slov – kontrola, že si vlastní stránky nekonkurují
Keyword mapa – jedna primární + několik sekundárních frází na stránku, zdokumentovaná před psaním textu
I. Strategický copywriting a obsah
Psaní pro čtenáře na prvním místě, klíčová slova přirozeně integrovaná (ne keyword stuffing)
E-E-A-T – Experience, Expertise, Authoritativeness, Trust: autor, jeho odbornost, reference, zdroje
Obsah odpovídající skutečně na otázku, kterou uživatel má – žádné zbytečné úvodní omáčky
Unikátnost – žádný duplicitní/přebíraný obsah (i mírně přepsaný z konkurence škodí)
Aktuálnost/freshness – pravidelná aktualizace klíčového obsahu, datum poslední úpravy
Formát podle intentu – návod → kroky, srovnání → tabulka, produkt → benefity + specifikace
CTA přirozeně zakomponované do textu, ne jen na konci
Tone of voice odpovídající cílové skupině a brandu
Délka obsahu – tolik, kolik je potřeba k plnohodnotnému pokrytí tématu, ne umělé natahování
Diferenciace od konkurence – text by neměl znít jako by mohl být na jakémkoliv jiném webu ve stejném oboru (typické riziko AI-generovaného textu)
J. UX a konverzní prvky
Soft ranking faktory přes chování uživatele.
Nízký bounce rate / vysoký engagement rate díky relevanci obsahu
Jasná vizuální hierarchie, kontrast, čitelné písmo
Rychlé a intuitivní vyhledávání na webu
Formuláře s minimem polí, jasná validace
Trust signály – recenze, certifikace, kontaktní údaje, o nás
K. Lokální SEO (pokud relevantní)
Google Business Profile – kompletně vyplněný, aktivní, s recenzemi
NAP konzistence (Name, Address, Phone) napříč weby a katalogy
LocalBusiness schema
Lokalizované landing pages pro jednotlivé pobočky/regiony
Lokální recenze a citace (katalogy, mapy)
L. Off-page a autorita
Link building – kvalita nad kvantitou, relevantní domény, přirozený anchor text profil
Digital PR – zmínky v médiích, guest posty na relevantních webech
Brand mentions – i bez odkazu mají signální hodnotu
Sociální signály – nejsou přímý ranking faktor, ale ženou traffic a brand awareness
Backlink monitoring – disavow toxických odkazů, pokud reálně škodí
M. Bezpečnost a důvěryhodnost
SSL, žádné bezpečnostní warningy v prohlížeči
GDPR compliance, cookie lišta neblokující indexaci
Impressum/kontaktní údaje, obchodní podmínky
Ochrana proti spamu/hackingu (zejména u WordPressu – pravidelné aktualizace)
N. Měření a iterace
Google Search Console – pravidelná kontrola Coverage, Performance, Core Web Vitals reportů
Google Analytics 4 – správně nastavené konverze/eventy
Rank tracking nástroj (Ahrefs, Semrush, Sistrix…)
A/B testování meta titulků/description dle CTR dat
Pravidelný technický audit (min. kvartálně) – broken linky, nové crawl errory, výkon
O. Content a link strategie v čase
Content plán navázaný na byznysové cíle a sezónnost
Pravidelná aktualizace stárnoucího obsahu ("content refresh")
Budování interních "hubů" – rozšiřování pillar stránek o nové podpůrné články
Shrnutí logiky rámce
Technická SEO (A–E) zajišťuje, že Google web vůbec dokáže najít, projít a pochopit. On-page a strukturovaná data (F–G) mu řeknou, o čem stránka je. Keyword strategie a copywriting (H–I) rozhodují, jestli stránka skutečně odpoví na potřebu uživatele lépe než konkurence. UX (J) ovlivňuje, jestli uživatel zůstane a konvertuje. Lokální a off-page vrstva (K–L) rozšiřuje dosah a autoritu. Bezpečnost (M) je předpoklad důvěry. Měření a iterace (N–O) zajišťují, že se SEO neděje jednorázově, ale jako trvalý proces.