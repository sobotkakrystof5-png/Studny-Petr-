SKILL
name: seo-complete-optimization
description: "Use this skill for ANY task that touches SEO — writing or reviewing web copy, planning site structure, setting meta tags, choosing keywords, building schema markup, doing a technical SEO audit, planning content strategy, local SEO, link building, or measurement/reporting setup. This skill loads the complete A–O SEO framework (technical infrastructure through copywriting through off-page) so nothing is forgotten before finalizing any page, article, product listing, landing page, or SEO deliverable. Trigger this proactively — even if the user only asks for 'napiš text na stránku', 'over SEO', 'meta popisky', 'keyword strategie', 'audit webu', 'copywriting', or mentions ranking/vyhledávače/Google — do not wait for the user to say the word 'SEO' explicitly if the task is clearly SEO-adjacent (new page copy, product description, blog post, landing page). Works alongside seo-ai-risk-guard, which handles AI-specific code/infrastructure risks; this skill is the complete reference framework covering every SEO domain, used as a checklist gate before any SEO-relevant work is considered finished."
Kompletní SEO optimalizační rámec (A–O)
Účel tohoto skillu
Tenhle skill je referenční kontext, ne jednorázový návod. Jeho úkolem je zajistit, že u žádného úkolu souvisejícího s webem — psaní textu, úprava stránky, technický audit, plánování struktury — nezapomeneš na relevantní část SEO, protože je roztroušená napříč technickou, obsahovou a strategickou vrstvou a jednotlivé prompty na ni typicky nemyslí všechny najednou.
Plný detailní checklist (15 bloků A–O, technický kód → copywriting → měření) je v references/seo-framework-a-o.md. Přečti si ho vždy, když je úkol netriviální — u jednoduchých doplňkových úprav stačí použít mapování níže a vzít v úvahu jen relevantní bloky.
Jak tento skill použít podle typu úkolu
Nejdřív identifikuj, o jaký typ úkolu jde, a podle toho vytáhni relevantní bloky z references/seo-framework-a-o.md. Nemusíš aplikovat všech 15 bloků na každý drobný úkol — ale musíš vědomě zvážit, které jsou relevantní, ne je jen mlčky přeskočit.
Typ úkolu
Primárně relevantní bloky
Poznámka
Nová stránka/landing page
A, B, C, D, E, F, G, H, I, J
Skoro celý rámec — nová stránka je nejvyšší riziko na zapomenutí
Blogový článek / obsahová stránka
F, G, H, I, N
Důraz na search intent (H), E-E-A-T a strukturu (I), FAQ/Article schema (G)
Produktová stránka (e-shop)
F, G, I, J
Product schema, unikátní popisky (ne z feedu výrobce), trust signály (J)
Meta tagy / title / description
F
Ale zkontroluj i H (klíčové slovo musí odpovídat search intentu, ne jen být v textu)
Technický audit celého webu
A, B, C, D, E, M, N
Kompletní technická vrstva + měření
Copywriting / přepis textu
F, H, I
Vždy ověř proti keyword mapě, ne psát izolovaně
Redesign / migrace webu
A, B, C, celý technický blok
Nejvyšší riziko ztráty rankingu — nutná redirect mapa (bod B)
Lokální byznys / pobočky
K + standardní bloky
Nezapomenout i mimo čistě "lokální" projekty, pokud má firma fyzickou adresu
Link building / PR kampaň
L
Navázat na H (jaké stránky/klíčová slova podporovat odkazy)
Reporting / měření výkonu
N
Nastavit před spuštěním kampaně, ne až po ní
Pravidlo: „Definition of Done" pro SEO úkoly
Než označíš jakýkoliv SEO-relevantní úkol za hotový, projdi tuto rychlou kontrolu. Pokud narazíš na „ne" nebo „nevím", vrať se k danému bloku v references/seo-framework-a-o.md.
Search intent — Ví se, na jaký dotaz/potřebu uživatele tahle stránka/text odpovídá? (blok H)
Unikátnost — Title, description, hlavní obsah jsou unikátní vůči zbytku webu i konkurenci? (blok F, I)
Struktura — Jeden H1, logická hierarchie nadpisů, čitelná URL? (blok C, F)
Strukturovaná data — Odpovídá typ obsahu nějakému schema.org typu, a je nasazený? (blok G)
Technická indexovatelnost — Stránka je v sitemapě, není omylem noindex, canonical je správně? (blok B)
Výkon — Core Web Vitals nejsou tímto obsahem/kódem zhoršené (velké obrázky, blokující skripty)? (blok D)
Trust/E-E-A-T — Je jasné, kdo za obsahem stojí a proč mu věřit? (blok I)
Měření — Bude se dát ověřit, jestli to funguje (GSC, GA4, rank tracking zachytí tuhle stránku)? (blok N)
Pokud úkol byl čistě technický (např. jen oprava rychlosti), body 1/2/7 se nemusí týkat — ale rozhodni to vědomě, nepřeskakuj automaticky.
Jak pracovat souběžně s ostatními skills
seo-ai-risk-guard — použij ho společně, pokud je web postavený/upravovaný přes AI/Claude Code. Ten řeší kódovou a infrastrukturní vrstvu (A, B, C, D, E, G, M z rámce), tento skill pokrývá navíc strategickou a obsahovou vrstvu (F, H, I, J, K, L, N, O) a slouží jako úplný přehled, aby žádný blok nezůstal bez vlastníka.
Pokud uživatel žádá o dokument/report ze SEO auditu, over si nejdřív, zda existuje docx skill pro finální výstup jako Word dokument.
Reference
references/seo-framework-a-o.md — kompletní rozpracovaný checklist všech 15 bloků (A–O), od technické infrastruktury po copywriting a měření. Toto je zdroj pravdy pro detailní body — vždy nahlédni, pokud si nejsi jistý, co konkrétně daný blok obsahuje.