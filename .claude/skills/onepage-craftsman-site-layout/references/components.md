# Reusable layout components — one-page template

Atomic blocks that make up the single-page site. No colors or copy — structure and hierarchy only.

---

## 1. Sticky header with anchor nav
- Skip-to-content link, visually hidden until focused (accessibility) — first element in the DOM.
- Logo image, links to the hero/top.
- Horizontal nav: plain anchor links (`#section-id`), not page routes.
- One primary CTA button, visually distinct (filled), anchors to the contact section — present in both the desktop nav bar and (duplicated) in a mobile drawer/off-canvas menu.
- No dropdowns, no utility bar, no search — same minimalism as the multi-page template but even leaner (4 nav items instead of 8).

## 2. Hero with inline stat strip
- Full-bleed background photo placeholder behind the content.
- H1: one strong declarative statement, can include a short trailing fragment (e.g. "...since [year].") as its own visual beat rather than a full second line.
- One-line supporting paragraph.
- Two CTAs side by side: primary (filled, → contact) + secondary (outline, → gallery).
- **Stat strip**: just 2 short facts (not 4), positioned directly below or overlapping the hero's lower edge — e.g. "[25+] years of experience" and "[1999] founding year". Much lighter-weight than a full stats-bar section; treat as part of the hero, not its own section.

## 3. Prose-led about section
- H2 heading.
- 2–3 full paragraphs of plain descriptive copy (company history/positioning/capabilities) — no numbered timeline, no index-number motif. This section is copy-first, not device-led.
- Followed by a **value-prop grid** (see #4).
- Followed by one single supporting photo (not a gallery, not a portrait+quote — just one image reinforcing the section).

## 4. Value-prop grid (4 items)
- 4-column grid (wraps to 2×2 on mobile).
- Each item: small icon (or icon placeholder) + short title (1–3 words) + one-line supporting description.
- No images, no borders/cards — pure icon+text, lighter than the multi-page template's photo-led card grid.
- This is the signature differentiator of this template vs. the multi-page one: value props are icon-led abstractions, not photo-led content pillars.

## 5. Plain text-card services grid
- H2 heading.
- Grid of N service items (5 in the reference), each just:
  - H3 title
  - One paragraph description
  - No image, no numbered index, no per-card CTA link
- Flatter and more compact than the multi-page template's alternating photo+text service blocks — appropriate when the business has many small offerings rather than 2–3 major ones worth a full block each.

## 6. Filterable gallery section
- H2 heading.
- Category filter pill row: "All" + N category pills (client-side filter).
- Image grid below, each image tagged by category for filtering.
- A single "view full gallery" button/link at the end — since this is a one-pager, treat this as an **expand-in-place or lightbox trigger**, not a navigation to a new URL (no dedicated `/galerie` route in this template).

## 7. Two-column contact section
- H2 heading + one intro sentence.
- **Left/first column — billing & contact info**:
  - Labeled rows: Address, Phone, Email, Company registration ID(s)
  - Two CTA buttons side by side: "Call" (tel: link) and "Send email" (mailto: link)
  - Embedded map (iframe) below the info list
- **Right/second column — inquiry form**:
  - Honeypot hidden field (spam trap)
  - Full name (required) — with inline validation hint text shown under the field (e.g. "please enter a name of at least 2 characters")
  - Email (required) — inline validation hint text
  - Phone (optional)
  - Message (required, multi-line) — inline validation hint text
  - Consent checkbox (required), with a fuller explanatory sentence about data use (not just "I agree" — spells out that data is used only for contact and not shared with third parties)
  - Submit button
- **Key difference from the multi-page template's contact form**: this one shows per-field inline validation/help text permanently under each required field (not just on error), and the consent copy is longer/more explicit about data handling.

## 8. Compact footer
- Logo image (can repeat the header logo).
- Legal ID line (registration numbers) directly under the logo — no separate mission paragraph.
- "Quick links" list — mirrors the anchor nav exactly.
- "Contact" list — address / phone / email, plain text (no icons required).
- Single copyright line at the bottom — no separate credit/"built by" bar needed (optional).

---

## Cross-cutting notes

- **No numbered-index motif** in this template — unlike the multi-page craftsman template, this site doesn't use large index numbers as a design device anywhere. Keep it out when replicating this specific layout.
- **Icon-led over photo-led**: the about section's USPs and the services grid both favor small icons/typography over large photography — photography is reserved for the hero, one about-section image, and the gallery only.
- **Sections compress what would be separate pages elsewhere**: About, Services, Gallery, and Contact are each a single scrollable section rather than a dedicated page — keep each section's content tight enough to work at "one screenful or two" of scrolling, since there's no page-level real estate to spread out.
- **Inline form validation copy**: carry forward the pattern of showing help/validation text under each required field, and a fuller GDPR-style consent sentence (what the data is used for + that it isn't shared) rather than a one-line checkbox label.
- **CTA hierarchy**: exactly one primary filled-button style + one secondary/outline style, same discipline as the multi-page template.
