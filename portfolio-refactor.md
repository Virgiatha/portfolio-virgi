# Portfolio Refactor Brief — Virgi Atha Raditya

**Live site:** https://portfolio-virgi-swart.vercel.app/
**Stack:** Next.js (App Router assumed; confirm in repo)
**Role to assume:** Senior UI/UX engineer + frontend developer
**Goal:** Simpler, cleaner, more intentional, more professional. Not generic. Not "AI template".

> Note: this brief is based on the live page's content and structure. Before changing anything, open the repo and read the actual components, CSS/Tailwind config, and fonts so you preserve what works and replace only what's needed.

---

## 0. Anti-slop setup (do this first)

This refactor runs with the **anti-slop** rule set: https://github.com/miqdadbadjuber/anti-slop

What it is: a rulebook of skills for AI coding agents that filters out generic AI-generated UI, copy, and code. It is a **filter, not a style guide**. It removes slop (invented stats, sparkle logos, beta pills, hype copy, emoji bullets, decorative comments) but does not create direction. Direction comes from a `DESIGN.md` file you provide. In the repo's own comparison, anti-slop alone gives "honest but plain", and `DESIGN.md` alone gives "good layout but slop survives". You need both.

> Before installing: `npx` runs third-party code on your machine. Skim the repo (`cli/`, `skills/`, `antislop.md`) first, as you would with any package.

### 0.1 Install (pick one)

From the root of the portfolio repo:

```bash
# Recommended: interactive installer (asks which skills, scope, and agents)
npx antislop-ai

# Or via the skills directory
npx skills add miqdadbadjuber/anti-slop
```

Agent-specific routes:

```bash
# Claude Code
/plugin marketplace add https://github.com/miqdadbadjuber/anti-slop
/plugin install antislop@anti-slop

# Codex
codex plugin marketplace add miqdadbadjuber/anti-slop
codex plugin add antislop@anti-slop

# Cursor
agent plugin marketplace add https://github.com/miqdadbadjuber/anti-slop
# then Customize > antislop > Install
```

No agent or no installer? Use the single file. It works in any chat window:

```bash
curl -o antislop.md https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/antislop.md
```

Start a **new** agent session after installing; skills load at session start.

### 0.2 Skills to enable for this project

| Skill | Why it matters here |
|---|---|
| `antislop` (core) | Always on. Rules plus the Delivery Gate PASS/FAIL report. |
| `antislop-ui` | Layout, color, components, decoration, motion. |
| `antislop-copywriting` | Kills the slogan headlines ("Work that makes an impact", "Proof of progress"), hype words, and filler. |
| `antislop-human` | Contrast, keyboard, focus, states (matches the accessibility checklist below). |
| `antislop-layoutmobile` | Reflow, breakpoints, overflow, tap targets. |
| `antislop-code` | Removes AI-style comments in the codebase. |

Install all six. This is a UI + copy + code cleanup.

### 0.3 Usage mode

Anti-slop asks at session start whether to run **During** (rules guide the build, then a Delivery Gate report) or **After** (audit existing work, numbered findings, you approve fixes).

For this portfolio, use both in sequence:

1. **After** first: audit the current site and get the numbered findings list. Approve the fixes that match this brief.
2. **During** second: build the refactor with the rules active.

Optionally save a default: `npx antislop-ai --mode during` (or `after`, `ask`).

### 0.4 Create `DESIGN.md` in the repo root

Anti-slop explicitly needs this file for direction. If the result feels sterile, the direction was missing, not the filter. Starter content, drawn from sections 1 and 3 of this brief:

```markdown
# DESIGN.md — Virgi Atha Raditya portfolio

## Voice
A calm, precise engineer who ships real systems across data, AI, web, and IoT.
Technical notebook meets editorial portfolio. Plain, first-person, specific.

## Palette
- bg #FAF9F6, surface #FFFFFF, ink #16181D, muted #5B606B, line #E6E3DC
- One accent: #B4232A (pulled from the hero photo's red)
- No gradients, glows, glassmorphism, or colored shadows

## Type
- Headings: sober serif or grotesk (Fraunces / Newsreader / Instrument Serif)
- Body: Inter / Geist / IBM Plex Sans
- Sentence case. Caps only for tiny labels.

## Shape and space
- One radius (12px), pills 999px, 1px borders instead of shadows
- Container 1120px, generous whitespace, 8px spacing scale

## Motion
- Reveal: opacity + 8px translate, 200–300ms. Link transitions 150ms.
- Respect prefers-reduced-motion. Nothing auto-plays.

## Content rules
- Real facts only: dates, stack, outcomes, links to the paper/repo
- Never invent metrics, testimonials, or user counts
- No hype words: intelligent, seamless, impactful, passionate, cutting-edge

## One memorable detail
Distinctive heading typeface plus the single red accent. Everything else stays quiet.
```

### 0.5 Prompt to give the agent

> Read `DESIGN.md` and `portfolio-refactor.md`. Run antislop (all six skills) in **After** mode on the current site and show me the numbered findings. After I approve, switch to **During** mode and implement the refactor following the implementation plan. End with the Delivery Gate report and fix every FAIL before finishing.

### 0.6 Done criteria added by anti-slop

- [ ] Delivery Gate report shows **PASS** in all four blocks
- [ ] No invented numbers, ratings, or testimonials anywhere (including project case studies)
- [ ] No hype copy, emoji bullets, or "Designed with intention"-style filler
- [ ] No AI-style comments left in the code (banners, comments that restate the line)
- [ ] Result has a real direction from `DESIGN.md`, not just a plain, sterile layout

---

## 1. Design intent

The site should read as: **a calm, precise engineer who ships real systems** (data, AI, web, IoT). Think "technical notebook meets editorial portfolio", not "startup landing page".

Principles, in priority order:

1. **Content first.** Every element earns its place. If removing it loses nothing, remove it.
2. **One idea per section.** One heading, one supporting block, one action.
3. **Restraint.** One accent color, two typefaces max, one radius value, one shadow (or none).
4. **Evidence over adjectives.** Replace slogans with specifics (what was built, with what, for whom, result).
5. **Consistency.** Same spacing scale, same type scale, same card anatomy everywhere.

---

## 2. Diagnosis of the current page

### Structure and copy
- Section labels are numbered `02 / About me`, `03 / Selected projects` … but **there is no `01`** (the hero is unlabeled). Either number everything or drop numbering entirely. Recommendation: drop it.
- Headlines are all-caps slogans that say little and sound templated:
  - "BUILDING AT THE INTERSECTION OF IDEAS & SYSTEMS."
  - "WORK THAT MAKES AN IMPACT."
  - "LEARNING BY DOING."
  - "PROOF OF PROGRESS."
  - "GOT AN IDEA? LET'S MAKE IT REAL."
  These are the biggest "AI-generated" tell. Replace with plain, specific headings (see section 6).
- Hero copy ("turning complex ideas into useful experiences") is vague. It should say what he does and where he's strongest.
- Footer says "Designed with intention." That is self-congratulatory filler. Remove.
- "Click any certificate to view full size" is a UI instruction written as a section subtitle. Use a hover/focus affordance instead.
- Typo/awkward copy: "modern google sites" → "Google Sites". Also the CV Iqromaya role is much thinner than the others; tighten or combine.

### Hierarchy
- Projects are split into "Selected projects" (2 large) and "More explorations" (2 smaller). That is a reasonable idea but the labeling and numbering (`01`–`04`) plus tag clouds add noise.
- Skills are numbered `01 / 02 / 03` as if they were a sequence. They are not. Numbering implies order that doesn't exist.
- Experience is a numbered list `01–05`. Same problem. Use dates/years instead of index numbers (add them; they are currently missing, which hurts credibility).
- Certificates (6 images) compete visually with real work. Several are entry-level (Junior Computer Operator, Microsoft Office 2019). They should be quieter than projects.

### Data consistency
- **Two different LinkedIn URLs** exist: the contact section uses `/in/virgi-atha-raditya-5759531a4/` and the footer uses `/in/virgi-atha-raditya`. Pick one canonical URL and use it everywhere.
- Location is "Banjarbaru, South Kalimantan" in the contact section; meta description says "Banjarbaru, Indonesia". Fine, but keep one phrasing.
- Meta/SEO: `twitter:card` is `summary`; with a hero photo, use `summary_large_image` and add a real OG image.
- Title is "VAR | Portfolio". Better: "Virgi Atha Raditya — Data, AI & Web Engineer".

### Visual (verify in browser, these are what to look for)
- Hero photo has a **saturated red background with black suit**. Strong color the rest of the page probably doesn't relate to. Either crop/treat it to fit the palette or make the accent color derive from it deliberately.
- Image requests use `w=3840` for everything. That is oversized for cards and hurts LCP. Use proper `sizes`.
- Image filenames contain spaces (`pas foto latar merah jas hitam_compress.jpg`, certificate files). Rename to kebab-case.

---

## 3. Design system (implement as tokens first)

Create/replace tokens in one place (`globals.css` CSS variables or `tailwind.config`). Components must only use tokens, never raw hex or arbitrary values.

### Color
Pick **one** direction and commit. Recommended: warm neutral base, ink text, one accent.

```css
:root {
  --bg:        #FAF9F6;   /* warm off-white */
  --surface:   #FFFFFF;
  --ink:       #16181D;   /* primary text */
  --ink-muted: #5B606B;   /* secondary text (min 4.5:1 on --bg) */
  --line:      #E6E3DC;   /* borders, dividers */
  --accent:    #B4232A;   /* single accent, tuned from the hero photo's red */
  --accent-ink:#FFFFFF;
}

:root[data-theme="dark"], @media (prefers-color-scheme: dark) {
  --bg:        #0F1115;
  --surface:   #161922;
  --ink:       #EDEEF0;
  --ink-muted: #9AA0AC;
  --line:      #262A35;
  --accent:    #E5484D;
}
```

Rules:
- Accent is used for: primary link/button, focus ring, one hover state. Nothing else.
- No gradients, no glows, no glassmorphism, no colored shadows.
- Dark mode is optional; if added, it must be tested, not auto-inverted.

### Typography
Two families maximum.

- **Headings:** a characterful but sober serif or grotesk (e.g. *Fraunces*, *Newsreader*, or *Instrument Serif* for headings).
- **Body/UI:** a clean sans (e.g. *Inter*, *Geist*, or *IBM Plex Sans*).
- **Optional mono** only for small labels like tech tags (*JetBrains Mono* / *Geist Mono*).

Load via `next/font` (no external CSS requests), `display: swap`, subset `latin`.

Scale (fluid with `clamp`):

| Token | Use | Size |
|---|---|---|
| `--text-hero` | Name | `clamp(2.5rem, 6vw, 4.5rem)` |
| `--text-h2` | Section title | `clamp(1.75rem, 3vw, 2.25rem)` |
| `--text-h3` | Card title | `1.25rem` |
| `--text-body` | Paragraphs | `1rem` / line-height 1.65 |
| `--text-small` | Meta, tags | `0.875rem` |

Rules:
- **Stop using all-caps for headlines.** Sentence case only. Caps allowed only for tiny labels with letter-spacing.
- Max paragraph width: `65ch`.
- Name in the hero: sentence/title case ("Virgi Atha Raditya"), not shouting.

### Spacing, layout, shape
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Section vertical padding: `clamp(64px, 10vw, 128px)`.
- Container: `max-width: 1120px`, side padding `24px` (mobile) / `32px` (desktop).
- 12-col grid on desktop; single column below `768px`.
- One radius: `12px` for cards and images, `999px` for pills. No mixing.
- Borders `1px solid var(--line)` instead of shadows. If a shadow is needed, one subtle token only.

### Motion
- Only: opacity/translate-Y 8px on section reveal (200–300ms), underline/color transitions on links (150ms).
- Respect `prefers-reduced-motion: reduce` (disable all transforms).
- No parallax, no cursor effects, no auto-playing anything.

---

## 4. Page architecture

Keep the same sections but simplify. Remove numbering. Remove redundant sub-labels.

```
Header (sticky, minimal)
Hero
About + Skills
Projects
Experience
Certifications (quiet)
Contact
Footer
```

### Header
- Left: wordmark `Virgi Atha Raditya` (text, not the "VA" box + name combo).
- Right: `About · Projects · Experience · Contact` + a single **"Email me"** text button (accent). Remove "Home" (the wordmark already goes home).
- Sticky with `backdrop-filter` **off**; use solid `--bg` with a bottom border appearing after scroll.
- Mobile: simple disclosure menu (button + list), focus-trapped, `Esc` closes.
- Active link: use `IntersectionObserver` to underline the current section.

### Hero
Two-column on desktop (text 7 cols / photo 5 cols), stacked on mobile with text first.

- Eyebrow (small, muted): `Computer Science graduate · Banjarbaru, Indonesia`
- H1: `Virgi Atha Raditya`
- Subline (1–2 sentences, specific). See copy section.
- Actions: **primary** `View projects`, **secondary** text link `Download CV` (only if a CV file exists; otherwise omit) and `LinkedIn`.
- Photo: rounded 12px, `aspect-ratio: 4/5`, `object-fit: cover`, `priority` prop, correct `sizes`. Consider a subtle border instead of any decorative frame/blob.
- Remove "/ 2026" from the eyebrow; it adds nothing.

### About + Skills
Left: 2 short paragraphs. Right (or below): skills as **plain grouped lists**, not numbered cards.

```
Data & AI          Python, NLP, machine learning, SQL, Power BI
Web                CodeIgniter, Laravel, Node.js, JavaScript, MySQL
IoT & Systems      ESP32, sensors, Telegram Bot, Linux, networking
```

Use a definition-list (`<dl>`) layout with a thin divider between rows. No icons, no numbers, no card boxes.

### Projects
One consistent card anatomy for all 4. Drop the "Selected / More explorations" split **or** keep it as a visual size difference only (2 featured large, 2 compact) without the extra heading and numbering.

Card anatomy:
1. Image (16:10, 12px radius, lazy except first)
2. Category (small, muted): `NLP research`
3. Title (H3)
4. One-sentence outcome
5. Tech tags: max 4, small pills, muted border, no fill
6. Link text: `Read case study →`

Interaction:
- Entire card is one link (stretched link pattern), with a visible focus ring.
- Hover: image scale 1.02 max + title underline. No lift/shadow.
- Cards are `<article>` elements.

### Experience
Timeline-less, text-first table-like list. **Add dates** (the biggest missing piece).

```
2025        Full Stack Developer · Stasiun Meteorologi Syamsudin Noor
            Built SiBisa, an inventory and internal-loan system with QR API and Telegram bot.
```

Layout: date column (fixed 120px) + content. Divider line between items. On mobile the date sits above the role.
Order: reverse chronological. If you don't want to share exact dates, use year ranges.

### Certifications (quiet)
- Smaller heading, smaller thumbnails, 3-column grid (2 on mobile).
- Show only what's relevant. Recommendation: lead with **MSIB Batch 7 — AI 4 Jobs** and the **DQLab R** certificates; consider collapsing BNSP/Office items into a "Show all" toggle or a simple text list.
- Open in a lightbox (accessible dialog: focus trap, `Esc`, labelled close button, arrow keys optional).
- Remove the subtitle "Click any certificate to view full size".

### Contact
Simple, not a slogan.

- Heading: `Contact`
- One line: `Open to full-stack, data, and AI engineering roles. The fastest way to reach me is email.`
- Large email link (`mailto:`), then LinkedIn link, then location.
- Make sure email is a real `<a href="mailto:...">` (it currently appears as plain text in the extracted page).

### Footer
- `© 2026 Virgi Atha Raditya` left, `LinkedIn · Email` right. Nothing else.

---

## 5. Case study pages (`/projects/[slug]`)

Template (reuse across all four projects):

1. Back link `← All projects`
2. Title, one-line summary, meta row (role · year · stack · link to repo/paper if available)
3. Hero image
4. Sections: **Problem → Approach → What I built → Result → Stack**
5. Next project link at the bottom

Rules: 680–720px reading column, images may go wider, captions under images, at least one real metric or outcome per project (e.g. published in JUTIF, accuracy comparisons, number of users/items managed). If there is no metric, state the concrete result in words.

---

## 6. Copy rewrite (drop-in replacements)

Tone: plain, first person, specific. No hype words (*intelligent, seamless, impactful, passionate, cutting-edge*).

**Hero subline**
> Computer Science graduate who builds data, AI, and web systems, with hands-on IoT experience. I recently published an NLP study on Indonesian sentiment and built an inventory system for a national weather station.

**About heading:** `About`
**About body**
> I'm a Computer Science graduate based in Banjarbaru. My work moves between data analysis, machine learning, web applications, and connected devices.
>
> I like problems where software meets the real world: a research question that needs clean data, an internal tool a team actually uses, or a sensor that needs a reliable dashboard.

**Projects heading:** `Selected projects`
**Projects intro:** `Research, software, and hardware work, each with a short case study.`

**Project one-liners (tighter)**
- **MBG Sentiment Analysis** — Published NLP study comparing static and contextual word embeddings with CapsNet to classify Indonesian public sentiment on Twitter.
- **SiBisa** — Inventory and internal-loan system for Stamet Banjarmasin, with approvals, QR scanning, and notifications on web and mobile.
- **EduTraffic** — Quiz platform that teaches traffic safety and gives participants instant, category-based feedback.
- **Smart Fish Feeder** — ESP32 system for automated feeding, water-quality monitoring, a live dashboard, and Telegram control.

**Experience heading:** `Experience`
**Experience intro:** remove it (the list speaks for itself).

**CV Iqromaya entry (fix wording)**
> Built landing pages for small businesses (UMKM) using Google Sites.

**Certifications heading:** `Certifications`
**Contact heading:** `Contact`

---

## 7. Implementation plan (do in this order)

1. **Audit:** read `app/` (or `pages/`), components, global CSS, Tailwind config, fonts, image usage. List what's reusable.
2. **Tokens:** add the color, type, spacing, radius tokens. Replace hard-coded values.
3. **Primitives:** `Container`, `Section` (with `id`, `aria-labelledby`), `Heading`, `Tag`, `LinkButton`, `Card`.
4. **Header + Footer.**
5. **Hero.**
6. **About + Skills (`<dl>`).**
7. **Projects grid + card.**
8. **Experience list (with dates).**
9. **Certifications + lightbox.**
10. **Contact.**
11. **Case study template.**
12. **SEO/meta, performance pass, accessibility pass.**
13. Delete dead components, unused CSS, and unused images.

Commit after each step so changes are reviewable.

---

## 8. Accessibility checklist

- [ ] One `<h1>`, logical `<h2>`/`<h3>` order
- [ ] `<header>`, `<nav aria-label="Primary">`, `<main>`, `<footer>` landmarks
- [ ] "Skip to content" link as the first focusable element
- [ ] Visible `:focus-visible` ring using `--accent` (2px, 2px offset)
- [ ] Text contrast ≥ 4.5:1 (check `--ink-muted` on `--bg`)
- [ ] Tap targets ≥ 44×44px
- [ ] Every image has meaningful `alt` (certificates: "Certificate: R Fundamental for Data Science, DQLab")
- [ ] Lightbox is a proper dialog with focus trap and return focus
- [ ] `prefers-reduced-motion` respected
- [ ] Works with keyboard only, and at 200% zoom with no horizontal scroll
- [ ] `lang="en"` on `<html>`

---

## 9. Performance and SEO checklist

- [ ] Use `next/image` with accurate `sizes` (cards ≈ `(min-width: 1024px) 560px, 100vw`); stop requesting `w=3840` for thumbnails
- [ ] Hero image: `priority`, explicit width/height, no layout shift
- [ ] Everything below the fold: lazy-loaded
- [ ] Convert large PNGs (`skripsi.png`, `sibisa3.png`, `edu.png`, `iot.png`) to WebP/AVIF at the right dimensions
- [ ] Rename files to kebab-case (no spaces)
- [ ] Fonts via `next/font`, no render-blocking external CSS
- [ ] Target Lighthouse: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100
- [ ] `metadata`: unique `title` and `description` per page, canonical URL, `openGraph.images`, `twitter.card = "summary_large_image"`
- [ ] Add `sitemap.xml`, `robots.txt`, and Person JSON-LD (name, jobTitle, url, sameAs: LinkedIn)
- [ ] One canonical LinkedIn URL across the whole site

---

## 10. "Not generic" guardrails

Avoid these, they make a portfolio look templated:

- Gradient text, glowing blobs, animated backgrounds, glass cards
- Emoji as icons, icon-in-a-circle feature grids
- Numbered `01 / 02 / 03` decoration with no meaning
- Giant all-caps slogans
- "Passionate", "innovative", "turning ideas into reality" phrasing
- Identical rounded cards with shadows everywhere

Do instead:

- Let **typography and spacing** carry the design
- Use real project screenshots, cropped consistently
- Use thin rules, small labels, and generous whitespace
- Show specifics: dates, stack, outcomes, links to the paper/repo
- Keep one memorable detail (for example a distinctive heading typeface or the accent red pulled from your photo) and stay disciplined everywhere else

---

## 11. Definition of done

- Visiting the page, a recruiter understands **who you are, what you build, and how to contact you** within 10 seconds.
- Every section has one heading and one purpose.
- No visual element exists without a reason.
- All tokens live in one place; no magic numbers in components.
- Lighthouse and accessibility checklists pass.
- Mobile (360px), tablet (768px), and desktop (1280px+) all look intentional, not merely "not broken".

---

## 12. Open questions for the owner (answer before or during implementation)

1. Is there a CV PDF to link from the hero?
2. Which LinkedIn URL is the correct one?
3. Do you want dark mode, or a single light theme?
4. Exact dates for each role (or just years)?
5. Any measurable results for SiBisa, EduTraffic, and Smart Fish Feeder (users, items tracked, time saved)?
6. Are you comfortable replacing the red-background photo with a neutral one, or should the palette be built around it?