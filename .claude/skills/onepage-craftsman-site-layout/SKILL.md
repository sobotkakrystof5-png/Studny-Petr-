---
name: onepage-craftsman-site-layout
description: Reusable single-page (scrolling, anchor-nav) layout template from the Zámečnictví MB reference site (a metalworking/locksmith craftsman site). Covers the sticky header with anchor nav, hero with inline stat strip, prose-led about section with a 4-item value-prop grid, plain text-card services grid, filterable gallery section, two-column contact section (info+map beside a form with inline validation hint text), and a compact footer. Colors, fonts, and copy are intentionally excluded — only structure, hierarchy, and layout. Use whenever the user wants a single-page ("one-pager", "jednostránkový web") marketing site for a craftsman, trade, workshop, or small local service business, especially something leaner than a full multi-page site, or when they reference "the Zámečnictví MB template/layout". If the user wants a full multi-page site instead, prefer a multi-page template skill if one is available.
---

# One-page craftsman site layout (Zámečnictví MB template)

A content-agnostic, color-agnostic layout system extracted from analyzing `zamecnictvi-mb.vercel.app` — a **single scrolling page** with anchor-linked navigation (as opposed to a multi-page site). It captures structure only: section order, hierarchy, and recurring layout components. Colors, typography, photos, and copy are placeholders to be replaced per project.

## When to use this

- User wants a lean, single-page marketing site for a craftsman/trade/local-service business — everything reachable by scrolling or by clicking an anchor nav item, no separate page loads.
- User explicitly references "Zámečnictví MB layout", "jednostránkový web", "scroll site", or wants something simpler than a full multi-page portfolio site.
- Good fit for smaller businesses that don't need a dedicated portfolio/blog/product catalog — just: who we are, what we do, proof of work, how to reach us.

## How this differs from a multi-page site

This is **one HTML page** with `id`-anchored sections (`#o-nas`, `#sluzby`, `#galerie`, `#kontakt`) and a nav that scrolls to them instead of navigating to new URLs. If the user's project needs dedicated sub-pages (a real portfolio with project detail pages, a priced product catalog, multiple service detail pages), a multi-page structure is a better fit — check whether a multi-page template skill is available before defaulting to this one. This template is deliberately leaner: fewer sections, no numbered-index motif, no timeline, no alternating image blocks — everything is compressed into 4 content sections plus hero.

## How to use this skill

1. **Read `references/section-templates.md`** — full breakdown of every section on the page, in scroll order, with what goes in each.
2. **Read `references/components.md`** — the recurring atomic patterns (value-prop grid, plain text-card grid, filterable gallery, two-column contact block with inline-validated form, etc.).
3. **Use `assets/skeleton.html`** as a working structural starting point — grayscale placeholder tokens (spacing/typography only), `[bracketed]` content placeholders, ready to restyle and re-copy for the new project.
4. Keep the section order, the anchor-nav pattern, and the header/footer structure intact. Swap in the new project's own palette, fonts, photography, and copy.
5. Never carry over Zámečnictví MB's real copy, phone numbers, address, or brand colors.

## Site-wide architecture

**Single page, anchor navigation.** Header nav items scroll to same-page section IDs rather than linking to separate URLs. A "skip to content" link precedes the header for accessibility.

**Header** (sticky across the single page):
- Logo/wordmark image — far left, links back to the top/hero
- Horizontal anchor nav — 4 items in the reference (About → Services → Gallery → Contact)
- One visually distinct primary CTA button — far right, anchors straight to the contact section
- Nav markup is duplicated in the source (one set for desktop bar, one for a mobile off-canvas/drawer menu) — build both if a mobile breakpoint needs a hamburger drawer

**Footer** (bottom of the single page), lighter/more compact than a multi-page footer:
- Logo image
- Legal ID line (business registration numbers)
- "Quick links" list mirroring the header nav
- Contact list (address / phone / email)
- Copyright line
- No long brand-mission paragraph column here — this footer is intentionally terser than a multi-page site's footer

## Section order (top to bottom)

1. **Hero** — full-bleed photo placeholder, H1 statement, one-line subhead, 2 CTAs (primary → contact anchor, secondary → gallery anchor), plus a lightweight **2-item stat strip** directly below/overlapping the hero (not a full 4-column animated stats bar — just two short "years of experience" / "founding year" style facts)
2. **About** (`#o-nas`) — H2 + multi-paragraph prose description (no timeline device) → **4-item value-prop grid** (icon + short title + one-line description) → single supporting photo
3. **Services** (`#sluzby`) — H2 + grid of plain text service cards (title + paragraph, no images, no per-card CTA — flatter than a multi-page site's alternating image blocks)
4. **Gallery** (`#galerie`) — H2 + category filter pills + filtered image grid + a "view full gallery" button/expand action (kept in-page, not a separate route)
5. **Contact** (`#kontakt`) — H2 + intro line → two-column layout: (a) billing/contact-info list + call/email buttons + embedded map, (b) inquiry form with per-field inline validation hint text and a honeypot field
6. **Footer**

See `references/section-templates.md` for full detail on every section and `references/components.md` for how to build each reusable block.
