# memory/index.md — mapa paměťového systému

Tento soubor a `memory/memory.md` se načítají automaticky na začátku každé session přes importy v `CLAUDE.md`. Přečti celý `memory/` na startu session, ne jen tento index.

## Co je kde

- **`memory/memory.md`** — strukturovaná, kurátorovaná paměť projektu: potvrzené fakty o klientovi, log rozhodnutí, aktuální fáze, otevřené otázky. Tohle je hlavní zdroj kontinuity mezi sessions.
- **`memory/activity.log`** — surový, automaticky generovaný trail změn souborů (append přes hook při každé změně v projektu). Není určený ke čtení v surové podobě — během session ho projdi a destiluj relevantní řádky do strukturovaných sekcí `memory/memory.md` (hlavně `## Changelog`).
- **`memory/pravidla.md`** — destilovaná operační pravidla, spravuje jiný proces. Slouží jako rychlý checklist chování a obsahových pravidel, zdrojovaný z `CLAUDE.md` a `AGENTS.md`, udržovaný v souladu s nimi. Obsah tohoto souboru nespravuje tento index ani `memory.md` — jen na něj odkazujeme.

## Protokol

1. **Na začátku session:** přečti celý `memory/` (děje se automaticky přes importy v `CLAUDE.md`, ale ověř, že jsi obsah skutečně zohlednil, ne jen načetl).
2. **Během session:** aktualizuj `memory/memory.md` průběžně, jakmile nastane něco rozhodovací váhy — potvrzený fakt o klientovi, designové rozhodnutí, změna fáze projektu. Nečekej na konec session.
3. **Na konci session:** zkontroluj, že `memory/memory.md` odpovídá skutečnému stavu, případně proveď destilaci nových řádků z `activity.log`.

## Pravidlo o neprotiřečení

Obsah `memory/` nikdy nesmí odporovat `CLAUDE.md` nebo `AGENTS.md`. Pokud něco zjištěné během práce vyžaduje změnu pravidla v `CLAUDE.md`/`AGENTS.md`, nezapisuje se to sem jako tiché přepsání — zapíše se to do `memory/memory.md` jako otevřená/označená položka čekající na výslovné potvrzení uživatele. `CLAUDE.md` a `AGENTS.md` zůstávají nejvyšší autoritou; `memory/` je vrstva kontinuity pod nimi, ne náhrada.
