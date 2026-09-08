# Design System — Vincent Sutiono Portfolio

Established after Hero and Navbar approval. This document serves as the single source of truth for color tokens, typography, visual weight, and interaction physics across all sections.

---

## 1. Color Palette & Theming

### 1.1 Dual Theme Architecture

The site supports a persistent Light and Dark mode toggle.

| Role | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| **Canvas Background** | `#faf9f6` (warm parchment) | `#0c0d10` (matte obsidian) | Page canvas background with subtle dot grid |
| **Dot Grid Matrix** | `#cbd5e1` (slate-300) | `#27272a` (zinc-800) | 24px × 24px subtle background dot matrix |
| **Card / Surface BG** | `#ffffff` (pure white) | `#14151a` (deep charcoal) | Terminal windows, cards, content blocks |
| **Drawer / Sub-surface** | `#eeeeee` (neutral gray-200) | `#181920` (elevated charcoal) | Mobile/tablet navigation drawer, nested panels |
| **Borders** | `#18181b` (zinc-900) | `#27272a` / `#3f3f46` (zinc-700/800) | 2px solid brutalist frames and structural dividers |
| **Hard Shadows** | `#18181b` (zinc-900) | `#000000` (pure black) | Unblurred hard offset drop shadows (`4px 4px`, `6px 6px`) |
| **Primary Text** | `#18181b` (zinc-900) | `#f4f4f5` (zinc-100) | Headings, primary commands, bold titles |
| **Muted Text** | `#52525b` (zinc-600) | `#a1a1aa` (zinc-400) | Subtitles, secondary copy, dates, tags |

### 1.2 Dark Mode Gold/Yellow Accent Rule

**Key Directive:** Gold / amber yellow (`#f59e0b` / `#fbbf24` / `amber-400`/`amber-500`) is the signature dark mode accent. It is **sprinkled around here and there**, not applied in massive blocks or full yellow card backgrounds.

#### Applications in Future Components:
- **About & Education / Growth:**
  - Milestone timeline nodes (e.g. glowing amber node ring or center dot)
  - Key metric callouts (e.g. GPA or years of experience numbers)
  - Degree/certification highlight pills (`dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300`)
- **Skills:**
  - Proficiency indicators, featured skills badge stars, or active category tabs
- **Experience:**
  - "Current" job timeline node or tenure duration badge
- **Projects:**
  - "Featured Project" indicator badge, demo link hover accent
- **Contact:**
  - Status beacon ("Available for hire") amber pulse

---

## 2. Typography

- **Headings & Structural Text:** `Plus Jakarta Sans` / `Space Grotesk` (clean modern sans-serif with bold geometry).
- **Code, Metadata, Timestamps & Prompts:** `JetBrains Mono` (monospace) — used for terminal headers, timestamps, badges, tags, and interactive commands.

---

## 3. Elevation & Elevation Physics

- **Zero blurs or ambient glow:** Depth is achieved strictly through sharp hard-cast shadows.
- **Elevation levels:**
  - Level 1 (Buttons, Badges): `3px 3px 0px 0px var(--shadow-color)`
  - Level 2 (Standard Cards): `4px 4px 0px 0px var(--shadow-color)`
  - Level 3 (Terminal Windows & Featured Blocks): `6px 6px 0px 0px var(--shadow-color)`
- **Tactile press physics:**
  - Default: `translate(0, 0)` with hard shadow
  - Hover: `translate(-2px, -2px)` with expanded shadow
  - Active / Click: `translate(2px, 2px)` with shadow collapsed to `0px 0px`

---

## 4. Components & Content Rules

- **Zero hardcoded personal copy:** All copy, bio text, job history, and project details reside in `content/*.ts`.
- **Dynamic rendering:** Arrays must support any count (1 or 20+ entries) without layout breakage.
