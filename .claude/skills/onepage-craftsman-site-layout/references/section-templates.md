# Section-by-section template (single scrolling page)

Full composition of the page, top to bottom. Component names refer to `components.md`. Content in [brackets] is a placeholder slot — fill with the new project's own content, never the reference site's.

---

## Header (sticky, present above all sections)

- Skip-to-content link
- Logo → links to top
- Anchor nav: [About] · [Services] · [Gallery] · [Contact]
- Primary CTA button → `#kontakt` style anchor: [Free inquiry]
- Duplicate nav markup for a mobile drawer if a hamburger breakpoint is needed

## 1. Hero (`components.md #2`)

- Full-bleed photo placeholder
- H1: [Precise statement about the core offering. Since [year].]
- Subhead: [One sentence elaborating: what kind of work, what makes the service complete.]
- CTAs: [Free inquiry] (primary, → contact) · [See our work] (secondary, → gallery)
- Stat strip (2 items): [25+ years of experience] · [1999 founding year]

## 2. About (`#o-nas`)

1. H2: [About us]
2. 2–3 paragraphs: [Company history/positioning], [range of services / full-service pitch], [specializations], [materials/technique note]
3. **Value-prop grid** (`#4`), 4 items:
   - [Quality] — [one-line description]
   - [Precision] — [one-line description]
   - [On-time delivery] — [one-line description]
   - [Individual approach] — [one-line description]
4. One supporting photo

## 3. Services (`#sluzby`)

1. H2: [Services]
2. **Plain text-card grid** (`#5`), N items (5 in the reference):
   - [Service 1 title] — [one paragraph]
   - [Service 2 title] — [one paragraph]
   - [Service 3 title] — [one paragraph]
   - [Service 4 title] — [one paragraph]
   - [Service 5 title] — [one paragraph]

## 4. Gallery (`#galerie`)

1. H2: [Gallery]
2. **Filter pills**: [All] · [Category 1] · [Category 2] · [Category 3] · [Category 4]
3. Image grid (filtered by pill selection)
4. [View full gallery] button (expand-in-place or lightbox — no separate route)

## 5. Contact (`#kontakt`)

1. H2: [Contact]
2. Intro line: [Call, email, or fill out the inquiry form — we'll get back to you with a proposal.]
3. **Two-column contact block** (`#7`):
   - Column A: [Billing & contact details] heading → Address / Phone / Email / Company reg. ID rows → [Call] + [Send email] buttons → embedded map
   - Column B: [Inquiry form] heading → honeypot → Full name* (+ inline hint) → Email* (+ inline hint) → Phone (optional) → Message* (+ inline hint) → consent checkbox (full sentence about data use) → Submit

## Footer (`#8`)

- Logo
- Legal ID line
- [Quick links]: same 4 anchor items as header nav
- [Contact]: address / phone / email
- © [year] [Company name]. [Rights reserved line.]

---

## Notes on adapting this template

- If the business needs a real portfolio with individual project pages, a priced product catalog, or more than ~5–6 total sections, consider the multi-page craftsman template instead — this one-pager works best when everything fits comfortably within 5 scrollable sections.
- The 2-item hero stat strip and 4-item value-prop grid are the two "quick trust" devices this template relies on instead of a full animated stats bar or a story timeline — keep at least one of them when adapting, since together they're what makes the page feel credible without much scrolling.
- If the project needs a blog, testimonials, or a dedicated pricing table, they can be inserted as additional anchor sections following the same H2 + component pattern used here — just add the new anchor to both the header nav and the footer quick-links list to keep them in sync.
