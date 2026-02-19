# Deep State Media — Project Hub

> **⚡ AGENT BRIEFING — Read this first when resuming work.**

## Project State (Last updated: Feb 19, 2026)

**What is this:** Deep State Media (`deepstatemedia.io`) is a political video production agency being launched by the user and his partner. They've been doing political video since 2008 and are now starting their own shop to pick up work in the 2026 midterm cycle.

**What the user cares about most right now:** Building a call list of people to phone. He wants to get prospects on the phone FIRST, then back it up with the site, reel, branding, and email collateral. He knows how to pitch — he needs the LIST and the MATERIALS.

### What's Been Built ✅

| Asset | Location | Status |
|-------|----------|--------|
| **Main website** | `site/index.html` + `styles.css` + `script.js` | ✅ Complete. Dark "Cipher Noir" aesthetic, particle network hero, Vimeo showreel, services grid, work portfolio, process section. Ready to deploy. |
| **Research Dashboard** | `research/dashboard.html` | ✅ Complete. Interactive spending data for 30+ political orgs from OpenSecrets (2022 & 2024 cycles). Filters by party/tier/cycle. 16 Democrat orgs have enriched contacts (key people, emails, phones, websites, FEC IDs) in expandable pulldown rows with a 3-section layout. |
| **Prospecting Strategy** | `research/PROSPECTING_STRATEGY.md` | ✅ Complete. OpenSecrets-based prospect list ranked by spend, tiered (Whale/Major/Mid), with outreach strategy and email template drafts. |
| **Outreach Battleplan** | `research/OUTREACH_BATTLEPLAN.md` | ✅ Complete. THE BIG STRATEGY DOC. Covers 10 categories of political video buyers (not just PACs — agencies, campaigns, state parties, unions, ballot measures, issue orgs, lobbying firms, trade associations). Grounded in current political climate (Trump at 36%, DOGE backlash, D+7 generic ballot). Includes 2026 competitive race map (Senate, Governor, House), outreach calendar (NOW→June is the window), and recommended deliverables. |
| **Political Ad Spotter Skill** | `SKILLS/political-ad-spotter/` | ✅ Complete. Agent skill for finding campaign ads on YouTube + Google Ads Transparency Center. Includes HTML gallery template. |

### What Needs to Be Built Next 🔲

**Priority order (user wants to get on the phone ASAP):**

1. **Master Call List** — Google Sheet with tabs for all 10 client categories. Each tab: org name, lean, key contact, title, phone, email, status, notes. This is the #1 deliverable.
2. **Deep dive contacts for Republican orgs** — Same enrichment done for Dem orgs needs to happen for the 10+ GOP orgs in the dashboard.
3. **Deep dive contacts for Bipartisan orgs** — Fairshake, AIPAC, etc.
4. **Pitch deck / one-pager** — PDF or web page. Who DSM is, reel link, turnaround times, "since '08."
5. **Phone scripts by category** — Different pitch for agencies ("vendor list"), campaigns ("hire us"), state parties, ballot measures, unions.
6. **Email templates by category** — Short, reel link, one CTA. Category-specific.
7. **Site variants** — `deepstatemedia.io/r` (GOP portfolio) and `/d` (Dem portfolio). Could be query-param driven from the same codebase.
8. **CRM / tracking system** — Track calls, responses, follow-ups.

### Key Context for Future Sessions

- The user is experienced in political video — don't over-explain political basics to him.
- He wants ACTIONABLE output, not theory. Lists, scripts, templates, dashboards.
- The 3-layer architecture in `AGENTS.md` describes how this workspace operates (directives → orchestration → execution).
- The research dashboard is a single self-contained HTML file with inline CSS/JS — no build step.
- The site uses vanilla HTML/CSS/JS — no frameworks. Cipher Noir aesthetic (dark bg, signal green accents).
- The site has placeholder Vimeo videos that need to be swapped with real DSM content when available.
- Political timing: the outreach window is NOW (Feb 2026) through June. After August, vendor lists are locked in. Election Day is Nov 3, 2026.
- There's a local dev server usually running: `python3 -m http.server 8082 -d "site/"`

---

# Site Documentation

**URL:** [deepstatemedia.io](https://deepstatemedia.io)  
**Type:** Political Video Production Company  
**Created:** February 19, 2026  
**Status:** Complete — ready for deployment

---

## Overview

Deep State Media is a full-service political video production company website. The site was built from a custom template with a **Cipher Noir** aesthetic — dark backgrounds, signal green accents, and covert intelligence / war room design language.

The site is a single-page scrolling experience with embedded video, animated backgrounds, and interactive elements.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5, semantic markup |
| Styling | Vanilla CSS, CSS Custom Properties (design tokens) |
| Interactivity | Vanilla JavaScript (no frameworks) |
| Fonts | Google Fonts (Anton, Barlow Condensed, IBM Plex Mono, Space Grotesk) |
| Video | Vimeo embeds (background + showreel) |
| Hosting | Static files — deploy anywhere (Netlify, Vercel, S3, etc.) |

---

## File Structure

```
site/
├── index.html          # Main page (all sections)
├── styles.css          # Complete design system + all component styles
├── script.js           # Client-side logic (animations, canvas, observers)
├── logo-canvas.js      # Logo canvas utility (from original template)
└── index.html.bak      # Backup of original Beyond Black Budget version
```

---

## Design System

### Color Palette — Cipher Noir

| Token | Value | Usage |
|-------|-------|-------|
| `--black` | `#030304` | Page background |
| `--black-rich` | `#070709` | Section alternating bg |
| `--black-warm` | `#0c0c0f` | About section bg |
| `--gray-900` | `#131318` | Card backgrounds |
| `--gray-800` | `#1a1a22` | Borders, dividers |
| `--gray-700` | `#2a2a35` | Subtle borders |
| `--gray-600` | `#44445a` | Muted text |
| `--gray-400` | `#7a7a95` | Secondary text |
| `--gray-200` | `#b8b8d0` | Body text |
| `--white` | `#e8e8f0` | Primary text |
| `--accent-primary` | `#00e676` | **Signal Green** — primary accent |
| `--accent-bright` | `#69f0ae` | Hover states, highlights |
| `--accent-deep` | `#00a651` | Dark green accents |
| `--accent-glow` | `rgba(0,230,118,0.35)` | Glow/shadow effects |
| `--amber` | `#ffab00` | Secondary accent (amber intel) |
| `--red-alert` | `#ff1744` | Alert/danger states |

### Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | Anton | Hero title, section titles, large headings |
| `--font-heading` | Space Grotesk | Secondary headings |
| `--font-body` | Barlow Condensed | Body text, descriptions |
| `--font-mono` | IBM Plex Mono | Labels, eyebrows, technical text, nav |

### Spacing

| Token | Value |
|-------|-------|
| `--section-pad` | `clamp(80px, 12vh, 160px)` |
| `--container-max` | `1400px` |
| `--gutter` | `clamp(20px, 4vw, 60px)` |

### Animation Easings

| Token | Value |
|-------|-------|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |

---

## Page Sections (in order)

### 1. Navigation
- Fixed top nav with blur backdrop on scroll
- Logo: **DEEP STATE MEDIA** (green accent on "STATE")
- Links: About, Services, Reel, Work, Process
- CTA button: "Get Briefed"
- Mobile hamburger toggle at 768px

### 2. Hero
- **Full-screen** with layered background:
  - Animated particle network canvas (120 particles, connecting lines, mouse-reactive glow, scan line sweep)
  - Vimeo background video (autoplay, muted, loop)
  - Dark gradient overlay for text readability
  - Green vertical accent line at 8%
- Eyebrow: "Political Video Production"
- Title: **DEEP STATE MEDIA** with glitch animation
- "MEDIA" word highlighted in green with glow
- Subtitle copy about political video production
- CTAs: "Start Your Campaign" (primary) + "Watch Reel" (ghost)
- Scroll indicator at bottom

### 3. Stats Ticker
- 140+ Races Won
- 500M Ad Impressions
- 38 States Covered
- 24/7 War Room Ready
- Animated counter on scroll (ease-out cubic)

### 4. About Section
- "Your Campaign's Secret Weapon"
- Two-column layout: text + terminal widget
- Terminal shows `dsm_ops.log` with typing animation
- `deepstatemedia.io` URL badge

### 5. Services Grid
- "Weapons-Grade Political Content"
- 6 cards in responsive grid:
  1. Campaign Ads
  2. Opposition Research
  3. Digital Strategy
  4. Rapid Response
  5. Documentary & Long-Form
  6. Analytics & Testing
- Hover effects: green border-left, icon glow, micro-glitch

### 6. Showreel
- "See The Work"
- Full-width 16:9 Vimeo embed (autoplay, loop, muted)
- Corner gradient border accent
- Label: "DSM_SHOWREEL_2026 — AUTOPLAY"

### 7. Work / Portfolio Grid
- "Campaigns That Changed The Game"
- 3-column grid (responsive to 2-col and 1-col)
- 6 project cards with Unsplash placeholder images:
  1. Operation Turnout (U.S. Senate Campaign)
  2. The Accountability Ads (Gubernatorial Race)
  3. Follow The Money (Super PAC)
  4. Swing State Blitz (Digital Campaign)
  5. The Record Exposed (Opposition Research)
  6. Deep Background (Documentary Series)
- Hover: 3D tilt, desaturate-to-color, overlay shift, arrow reveal

### 8. Approach / Process
- "Four Phases. Zero Compromises."
- 4-column grid:
  1. Intelligence — research & battlefield mapping
  2. Strategy — message architecture & creative direction
  3. Production — cinematic, broadcast-grade
  4. Deploy & Optimize — multi-platform + performance tracking
- Hover: green bottom line, number color shift

### 9. Quote / Testimonial
- "They don't just make ads — they build *narrative weapons*."
- Attribution: Senior Campaign Strategist, U.S. Senate Race 2024
- Large decorative quotation mark background element

### 10. Marquee
- Scrolling green banner:
- "CAMPAIGNS THAT WIN ◈ VIDEO THAT DOMINATES ◈ STRATEGY THAT DELIVERS ◈ DEEPSTATEMEDIA.IO"
- Infinite CSS animation loop

### 11. CTA
- "Ready To Win Your Race?"
- "Win" highlighted in green with glow
- Subtitle about confidential operations
- CTAs: "Request Briefing" (primary) + "deepstatemedia.io" (ghost)
- Encryption note: "All campaign communications are confidential and secure."

### 12. Footer
- Logo: DEEP STATE MEDIA
- Nav links
- Legal: © 2026 Deep State Media LLC

---

## JavaScript Features

| Feature | Description |
|---------|-------------|
| **Nav scroll** | Adds `.scrolled` class on scroll > 80px (blur backdrop, border) |
| **Intersection Observer reveals** | `.reveal`, `.reveal-left`, `.stagger` classes animate on scroll |
| **Animated counters** | Stats bar numbers count up with ease-out cubic |
| **Mobile nav toggle** | Hamburger menu for < 768px |
| **Smooth scroll** | All `#anchor` links scroll smoothly |
| **Hero glitch burst** | Random text-shadow glitch on hero title every 3-7 seconds |
| **Particle network canvas** | 120 floating particles with proximity connections, mouse-reactive glow, horizontal scan line |
| **Work card tilt** | 3D perspective tilt on mousemove |
| **Service card micro-glitch** | Slight translateX jitter on hover |
| **Terminal typing** | About section terminal lines animate in sequentially |

---

## CSS Architecture

- **Global overlays:** Scan lines (`body::after`) + noise texture (`body::before`) — fixed position, pointer-events: none
- **BEM naming:** Block__Element--Modifier throughout
- **Responsive breakpoints:**
  - `1024px` — 2-col grids
  - `768px` — single column, mobile nav, simplified layouts
- **Animation system:** `reveal` / `stagger` classes with Intersection Observer
- **Stagger delays:** nth-child(1-6) with 0.1s increments

---

## Vimeo Video IDs

| Location | Video ID | URL |
|----------|----------|-----|
| Hero background | `545053719` | `https://player.vimeo.com/video/545053719` |
| Showreel embed | `545053719` | Same (placeholder — replace with actual reel) |

> **Note:** Both currently use the same placeholder video. Replace with actual Deep State Media content when available.

---

## Deployment

This is a static site — no build step required. Deploy the `site/` folder to any static hosting:

```bash
# Local preview (already running)
python3 -m http.server 8082 -d "site/"

# Netlify (drag & drop site/ folder, or CLI)
npx netlify-cli deploy --dir=site --prod

# Vercel
cd site && npx vercel --prod

# GitHub Pages
# Push site/ contents to gh-pages branch
```

### Domain Setup
Point `deepstatemedia.io` DNS to your hosting provider.

---

## Contact Configuration

| Field | Current Value | Update To |
|-------|--------------|-----------|
| Email | `ops@deepstatemedia.io` | Real email |
| URL | `deepstatemedia.io` | Already set |

---

## Research & Prospecting Tools

### Research Dashboard (`research/dashboard.html`)

Interactive intelligence dashboard for political spending data. Single HTML file, dark cinematic aesthetic.

| Feature | Description |
|---------|-------------|
| **Data** | 30+ organizations from OpenSecrets, 2022 & 2024 cycles |
| **Filters** | By party (DEM/GOP/BI), by tier (1-3), by cycle, free-text search |
| **Sorting** | By rank, name, spend, lean, tier |
| **Bar chart** | Visual spend comparison for top 30 spenders |
| **Contact pulldowns** | Expandable rows with 3-section layout (see below) |
| **Stats cards** | Total orgs, combined spend, spend by party, contacts found |

#### Contact Pulldown Structure (Redesigned Feb 19, 2026)

Each expandable row has three clear sections:

| Section | What It Shows | Visual |
|---------|---------------|--------|
| **Key People** | Decision-makers with avatar initials, title, bio | Green circles (amber for agencies like GMMB) |
| **Contact Channels** | Email, phone, website as clickable chips | Horizontal bar, primary emails highlighted green |
| **Notes** | Budget, strategy tips, FEC IDs | Subtle amber-labeled text strip |

Contacts populated for all 16 Democrat organizations with verified emails, physical addresses, phone numbers, FEC IDs, and key personnel.

### Political Ad Spotter Skill (`SKILLS/political-ad-spotter/`)

Agent skill for finding and displaying political campaign video ads. Sources:

1. **YouTube Search** — proven query patterns for finding 15/30/60s spots
2. **Google Ads Transparency Center** — official paid ad database
3. **Known political ad channels** — campaign/PAC channels, aggregators
4. **Meta Ad Library** — cross-reference for discovery

Outputs a browsable HTML gallery with embedded YouTube players and DEM/GOP/BI filtering.

### 2026 Outreach Battleplan (`research/OUTREACH_BATTLEPLAN.md`)

Comprehensive business development strategy grounded in the Feb 2026 political climate. Covers **10 categories** of who buys political video — not just PACs:

1. Media buying agencies (GMMB, SKDK, Targeted Victory — the gatekeepers)
2. Candidate campaigns (2026 Senate/House/Governor competitive race map)
3. State party committees (100 committees, underserved)
4. Super PACs / Independent expenditures
5. Issue advocacy orgs / 501c4s (year-round spending)
6. Labor unions (SEIU $200M program, AFL-CIO, AFSCME)
7. Ballot measure campaigns (FL marijuana $100M+, CA, MO/NV/VA abortion)
8. Trade associations & industry groups
9. Lobbying / public affairs firms
10. Political consulting firms

Includes current political climate context (Trump at 36%, DOGE backlash, D+7 generic ballot, resistance spending surge), the 2026 competitive race map, outreach calendar/timing, and recommended deliverables to build.

---

## History

| Date | Change |
|------|--------|
| 2026-02-19 | Initial build — rebranded from Beyond Black Budget template |
| 2026-02-19 | Pivoted copy from investigative journalism to political video production |
| 2026-02-19 | Removed signal indicator, enhanced hero with particle network animation |
| 2026-02-19 | Documentation complete |
| 2026-02-19 | Research dashboard: deep dive contacts for all 16 Democrat orgs (emails, addresses, FEC IDs, key personnel) |
| 2026-02-19 | Research dashboard: redesigned pulldowns — 3-section layout (Key People → Contact Channels → Notes) |
| 2026-02-19 | Created Political Ad Spotter skill (`SKILLS/political-ad-spotter/`) |
| 2026-02-19 | Created 2026 Outreach Battleplan — 10 client categories, political climate analysis, competitive race map, outreach calendar |
