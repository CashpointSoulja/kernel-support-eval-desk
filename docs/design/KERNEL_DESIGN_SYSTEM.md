# Kernel marketing design reference

This is an independent, documentation-only reference for matching the public Kernel marketing language in a future support-desk restyle. It records supplied live-site measurements dated 1 October 2026. The live page could not be fetched in this environment, so unmeasured values are deliberately not invented. Product content in examples is synthetic.

## Design principles

1. **Quiet confidence.** Off-white space, near-black type, and deep green actions communicate precision without visual noise.
2. **Editorial hierarchy.** Large, medium-weight display headlines contrast with compact body copy and uppercase operational labels.
3. **Visible structure.** Thin green rules, simple cards, and diagrams explain a process instead of decorating it.
4. **Restrained depth.** The observed interface uses no shadow; hierarchy comes from colour, line, radius, and spacing.

## Colour palette

Frequency uses the supplied computed-style occurrence count. “Core” tokens without an occurrence count were supplied from the live root stylesheet; their relative frequency is not asserted.

| Token | Value | Role and usage | Observed frequency |
|---|---:|---|---:|
| `--kernel-text`, `--kernel-dark-bg` | `#2C2E33` | Default text; dark section background | 3,808 (dominant) |
| `--kernel-white` | `#FFFFFF` | Text on green/dark, cards, translucent nav base | 277 |
| `--kernel-primary-site` | `#8FA998` | Soft brand accent and legacy `--primary` | 230 |
| `--kernel-secondary` | `#32343A` | Secondary heading/text colour | 188 |
| `--kernel-primary` | `#0C3922` | Primary actions, uppercase labels, outlines | 58 |
| `--kernel-text-muted`, `--kernel-secondary-splash` | `#6B7280` | Body copy and secondary copy | 46 |
| `--kernel-dark-highlight` | `#3C4E53` | Highlight on dark surfaces | 27 |
| `--kernel-field-label` | `#8C9CAD` | Compact field and pill labels | 24 |
| `--kernel-off-white` | `#F5F5F4` | Page canvas | 22 |
| `--kernel-pastel-grey` | `#E5E7EB` | Quiet dividers and neutral panels | supplied |
| `--kernel-pastel-green` | `#D7E3DB` | Soft positive/brand panels | supplied |
| `--kernel-mid-grey` | `#D1D5DB` | Stronger neutral divider | supplied |
| `--kernel-primary-tint` | `rgba(12,57,34,.08)` | Subtle selected/hover fill | supplied |
| `--kernel-primary-tint-strong` | `rgba(12,57,34,.16)` | Strong selected fill | supplied |
| `--kernel-label-on-dark` | `#BCCBC1` | Uppercase labels on dark panels | measured |
| `--kernel-label-old-way` | `#E88A8A` | Exception/contrast “old way” label | measured |

Do not broaden the palette. Use green for actions and structure, not large fields of decorative saturation. Use muted text for supporting prose only; retain near-black for primary meaning.

## Typography

Use **Clash Display Variable** for display-led messages and **General Sans Variable** for readable interface/body content. Both span weights 200–700 and are distributed by Fontshare. The repository does not bundle font binaries; local `@font-face` templates and system fallbacks are in `design/tokens.css`. Letter spacing is `normal` throughout the measured styles.

| Style | Family | Size / line height | Weight | Usage |
|---|---|---:|---:|---|
| Hero H1 | Clash Display | `70px / 70px` | 500 | One decisive page promise |
| Section H2 | Clash Display | `42px / 50px` | 500 | Major section statements |
| Testimonial quote | Clash Display | `23px / 27px` | 500 | White quotation on dark |
| Feature H3 | Clash Display | `18px / 30px` | 500 | Diagram/card title |
| Menu feature | Clash Display | `22px / 30px` | 400 | Featured dark-menu story |
| Small feature | Clash Display | `15px / 18px` | 400 | Announcement title |
| Large eyebrow | General Sans | `24px / 20px` | 400 | Rare process lead-in, uppercase |
| Eyebrow | General Sans | `16px / 20px` | 400 | Category and section label, uppercase |
| Primary action | General Sans | `16px / 20px` | 400 | Full-size primary button |
| Secondary action | Clash Display | `16px / 20px` | 400 | Outlined button on light |
| Navigation | General Sans | `14px / 20px` | 400 | Navigation links |
| Body | General Sans | `13.5px / 21.6px` | 400 | Supporting paragraphs |
| Compact nav action | Clash Display | `13.6px / 20px` | 400 | Small “Book a demo” button |
| Field/meta | General Sans | `12.5px / normal` | 500 | Inputs; pill labels use `20px` line height |
| Footer | General Sans | `12px / 20px` | 400 | Legal and address copy |

On narrow screens, preserve family, weight, and hierarchy. The source provides no measured mobile type sizes, so choose responsive sizes during implementation only after a fresh mobile inspection; do not present inferred sizes as brand tokens.

## Spacing and layout

- **Canvas:** `#F5F5F4`.
- **Outer container:** `1280px` at the measured viewport; inner navigation/content width `1216px`, produced by `32px` left and right padding.
- **Navigation:** `70px` high; measured inner region `58px` high. Floating white card at 85% opacity, `10px` radius, `0 32px` padding.
- **Hero:** observed section height `632px`; use generous negative space around the one-line H1 and short support copy.
- **Section rhythm:** the measured trust section uses `40px 0 80px`. Treat `40px` top and `80px` bottom as the documented section cadence where the same composition applies; other section padding was not measured.
- **Spacing tokens:** `0, 6, 8, 10, 14, 16, 20, 24, 32, 40, 48, 58, 70, 80px`. These are exact supplied/measured dimensions, not a claim that every value is a universal step.
- **Radii:** buttons `6px`; general/root radius `8px`; floating nav `10px`; circular controls `50%`.
- **Borders:** outlined actions use `2px solid #0C3922` on light and `2px solid #FFFFFF` on dark. Diagram cards use a thin `1px solid #0C3922` outline.
- **Shadows:** `none` in measured nav, buttons, sections, and cards. Do not add elevation shadows.
- **Responsive behaviour:** cap content at the container width, preserve comfortable page gutters, allow specimens/grids to become one column, and let actions wrap. No exact mobile gutter was supplied.

## Components

### Floating navigation card

A single translucent white bar (`rgba(255,255,255,.85)`), `1280px × 70px`, with `32px` horizontal padding and `10px` corners. Set links in 14/20 General Sans, regular, near-black. Place the black wordmark left and the compact green action right. No border or shadow. On smaller screens, reduce visible links rather than crowding; the exact breakpoint and mobile control were not measured.

### Primary filled button

- Full: `#0C3922` fill, white 16/20 General Sans, `16px 24px` padding, `6px` radius; measured example `161px × 52px`.
- Compact/nav: white 13.6/20 Clash Display, `14px 16px` padding, `6px` radius; measured example `115px × 48px`.
- No border or shadow. Keep labels short and outcome-led: “Start intake →” or “Run evaluation →”.

### Outlined secondary button

Transparent background with `2px solid #0C3922`, near-black 16/20 Clash Display, `14px 24px` padding, `6px` radius, and `52px` total height. Reverse to white text/border on a dark surface. Do not use a shadow.

### Hero

Build around one 70/70, weight-500 promise, followed by a short 13.5/21.6 muted explanation and one or two actions. A measured marketing example is “Accurate entity data, guaranteed.” For the desk, use an equally direct operational promise such as “Every support decision, traceable.” Keep imagery subordinate and preserve the open off-white field.

### Diagram cards

Use off-white or white planes with a thin dark-green (`1px`) outline, `8px` radius, and no shadow. Begin with a green uppercase 16/20 label, then an 18/30 Clash Display title and compact body. Connect cards with simple lines/arrows. Prefer clear process geometry over decorative charts.

### Labels and tags

Standard eyebrows are uppercase 16/20 General Sans, regular, `#0C3922`, normal tracking. A 24/20 variant is reserved for a major process lead-in. On dark, use `#BCCBC1`; use `#E88A8A` only to mark an exception or undesirable route. Compact metadata is 12.5/20, weight 500, `#8C9CAD`. Do not add letter spacing that was not observed.

### Testimonial blocks

Use a dark `#2C2E33` background, white 23/27 Clash Display medium quotation, and restrained attribution in General Sans. Logos or identifying marks should be monochrome. Cards remain flat; masonry arrangements may vary in height without added effects. In the desk, testimonials become evidence excerpts rather than endorsements.

### Footer

Close with the wordmark, compact navigation, and muted 12/20 General Sans legal text. The measured address line is muted grey. A dark footer may reverse the mark and primary text, but the supplied asset is specifically the black wordmark and should remain black on light.

### Cookie banner

Use a white card, concise body copy, `8px` radius, and no decorative shadow unless a future direct measurement establishes one. “Accept” is green; “Reject” is grey. Keep both choices equally legible and directly adjacent to the explanation. Banner dimensions and padding were not supplied and must be remeasured before a pixel-exact implementation.

## Logo treatment

Use `design/assets/kernel-wordmark-black.svg` without redrawing, recolouring, effects, or altered proportions. Its viewBox is `1920 × 456.6` (about 4.2:1). Place it at the left edge of the floating navigation and in the footer. The live wordmark’s measured clear-space rule was not provided: until remeasured, use whitespace around it and do not encode an invented numeric minimum. Never place the black mark on a dark or busy image.

## Imagery and illustration

The supplied asset inventory shows monochrome customer marks, simple menu icons, editorial resource imagery, a speech-mark motif, and product/process diagrams. Match that system with crisp, diagrammatic illustrations: flat shapes, thin green outlines, muted green fills, minimal colour, and generous negative space. Photography should be editorial and purposeful rather than a generic backdrop. Avoid glossy gradients, heavy shadows, skeuomorphism, crowded dashboards, or invented customer marks. Use synthetic names and records in all desk captures.

## Tone of voice

Copy is brief, declarative, specific, and outcome-first. It uses plain verbs (“resolve,” “enrich,” “handle,” “explore”) and confident proof language (“guaranteed,” “accurate”) without hype. Headings generally use sentence case; eyebrows use uppercase.

Reference samples from the supplied heading list:

- “Accurate entity data, guaranteed.”
- “Imagine you had expert humans continuously fix and enrich every record.”
- “Entity data guaranteed to be accurate.”
- “Resolve every record to a unique and persistent ID.”
- “Enrich with hierarchies and firmographic data.”
- “Handle errors to enforce accuracy.”
- “Explore Kernel data.”
- “Entity data underpins decisions across your business.”
- “Founder sessions.” / “Expert interviews.” / “Documentation.” / “Trust center.”

Desk copy should mirror the construction, not reuse claims that do not apply: “Route every request to a clear owner.” “Review every response before it leaves the queue.” “Decisions backed by visible evidence.”

## How to apply this to the support desk app

| Screen | Marketing-system mapping | Suggested synthetic headline / labels |
|---|---|---|
| **Intake** | Hero composition for the task promise; outlined diagram card around the form; filled button for submission; compact metadata for ticket fields | “Capture every request with the right context.” / `NEW REQUEST` / “Start intake →” |
| **Route** | Three-step diagram cards connected in sequence; green eyebrow for normal path; red exception label only for unresolved routing | “Route every request to a clear owner.” / `TRIAGE`, `MATCH`, `ASSIGN` |
| **Draft** | Large editorial workspace title; body copy in muted grey; primary save/continue and outlined secondary action | “Draft a response grounded in the record.” / “Continue to review →” |
| **Review queue** | Testimonial-block language repurposed as dark evidence excerpts; flat cards; monochrome status/owner metadata | “Review every response before it leaves the queue.” / `READY FOR REVIEW` |
| **Eval runner** | Process lead-in at 24/20, outlined step cards, and one clear green run action; results use pastel green/grey fields | “Test the workflow against known outcomes.” / `THREE STEPS, ONE OUTCOME:` / “Run evaluation →” |
| **Audit log** | Structured editorial list inside thin-outline cards; General Sans meta; restrained filters styled like outlined controls | “Every support decision, traceable.” / `EVENT`, `OWNER`, `TIME`, `OUTCOME` |

Across every screen, retain the current information architecture until a separate product decision changes it. Restyling should replace visual expression—not behaviours, meanings, or auditability.

## Implementation reference

`design/tokens.css` is the canonical token file. `docs/design/visual-guide.html` embeds the same values so it opens directly from disk with no requests. When values change after a verified inspection, update both files together and annotate the measurement date here.
