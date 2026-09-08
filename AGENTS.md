# AGENTS.md — Portfolio Website

Instructions for any AI agent (Antigravity, or others) working in this repository.
Read this in full before making changes. If something here conflicts with a
user instruction in chat, the chat instruction wins for that session, but flag
the conflict so this file can be updated.

## 1. Project summary

A personal developer portfolio site for job hunting. Single page, six sections:
Hero, About, Skills, Experience, Projects, Contact. Static site, no backend.

- **Owner's goal:** get hired as a developer. Content and design should read as
  professional and credible to a recruiter/hiring manager, not flashy for its
  own sake.
- **Design reference:** https://www.zayarshein.com — the owner wants this
  site closely followed as the template for design and structure. Its
  section breakdown already matches this project's six sections
  (Hero/About/Skills/Experience/Projects/Contact) roughly 1:1. This is a
  client-rendered (JS) site, so don't try to `fetch`/scrape it for structure —
  use Stitch's own URL/screenshot-based intake (see `stitch::generate-design`)
  or ask the owner for screenshots if the skill needs them.
  **Default to following the reference closely** for each section's layout
  and visual language. The owner will call out specific things to remove,
  change, or add *live, section by section*, during the approval step in
  §5 — don't try to guess those changes in advance. When the owner does flag
  a change for a given section, apply it and treat that as the new baseline
  for that section going forward (don't revert to the raw reference on a
  later revision of the same section).
  Structure must still flex to fit the real data in `content/*.ts` (§4) — if
  the reference shows, say, 3 projects in a row but the owner has 7, adapt
  the pattern (e.g. a grid or carousel) rather than truncating the owner's
  actual content to match the reference's example count.
- **Color palette is an intentional, project-wide deviation from the
  reference** — the owner does not want the site to feel identical to
  zayarshein.com and plans to specify a different palette during Hero's
  review. Once that palette is given, treat it as the project's palette for
  every section, not a Hero-specific exception — apply it via the design
  system (§5.2) so Navbar, About, Skills, Experience, Projects, and Contact
  all inherit it. Do not revert toward the reference's original colors in
  later sections.

## 2. Tech stack (do not deviate without asking)

| Layer | Choice |
|---|---|
| Build tool / framework | Vite + React + TypeScript |
| Styling | Tailwind CSS |
| Components | Plain React components; shadcn/ui only if a section genuinely needs one of its primitives (e.g. a mobile nav drawer) — don't default to it |
| Content | Typed data files in `content/`, see §4 |
| Design generation | Google Stitch via Stitch MCP |
| Deployment | GitHub Pages |
| Contact | `mailto:` link + LinkedIn + GitHub links. No contact form, no backend. |

Do not introduce a CMS, database, auth, or server-side rendering. This is
intentionally static.

## 3. MCP servers in use

- **Stitch MCP** — design generation and Design DNA fetch. Primary design
  tool. Raw tools available: `create_project`, `get_project`,
  `delete_project`, `list_projects`, `list_screens`, `get_screen`,
  `generate_screen_from_text`, `edit_screens`, `generate_variants`,
  `upload_design_md`, `create_design_system`, `create_design_system_from_design_md`,
  `update_design_system`, `list_design_systems`, `apply_design_system`. Named
  skills from `google-labs-code/stitch-skills` (§6) wrap these — use the
  named skill when installed, fall back to the raw tool directly otherwise.
  `generate_screen_from_text` and `edit_screens` can take a few minutes;
  don't retry on timeout, poll `get_screen` instead (per the tool's own
  instructions).
- **Context7** — live library docs (React, Tailwind, Vite) via
  `resolve-library-id` then `query-docs`. Both tools are capped at 3 calls
  per question by their own instructions — don't loop past that; use the
  best result found so far. Use when writing code against these libraries
  instead of relying on possibly-stale training knowledge, especially for
  Tailwind config and Vite build setup.
- **Chrome DevTools MCP** (if connected) — runtime inspection (console,
  network) when debugging. Not for routine visual review.
- Antigravity's built-in Browser Subagent is the default tool for visual
  review of each section (see §5). Playwright MCP is intentionally not
  installed — this project doesn't need an automated regression test suite at
  this stage.

## 4. Content architecture — READ BEFORE EDITING ANY SECTION COMPONENT

All real content (bio text, job history, project descriptions, skill lists,
links) lives in typed files under `content/`, not hardcoded in components.

```
content/
├── profile.ts       # name, role, tagline, bio, location, resume, contact links
├── education.ts      # timeline entries, rendered INSIDE About (not its own section)
├── experience.ts     # timeline entries: role, company, dates, description, optional tags[]
├── projects.ts        # cards: name, description, image, links, tags[]
└── skills.ts            # categories -> skills[], each skill has a name + icon slug
```

**Rule: a component reads from `content/*.ts` via props or import. It never
contains hardcoded copy that belongs to the person (name, bio, education,
job history, project descriptions).** Layout text like button labels ("View
Project", "Get in Touch") is fine to keep in the component.

**Rule: every list-shaped content file (`education`, `experience`,
`projects`, and each category's `skills` array) must render however many
entries actually exist — 1 or 20.** Never hardcode a specific count, a fixed
number of grid columns tied to an assumed count, or placeholder-only
rendering logic. Adding or removing an entry from the array is the intended
way the owner updates the site going forward; if that requires touching
component code, the architecture has failed its purpose.

Why this matters: the owner intends to update jobs/projects/education/skills
over time by editing these files, not by touching component/JSX code. If a
future task is "add a new project" or "update my experience," the correct
action is editing the relevant `content/*.ts` file — do not create a new
component or duplicate structure for it. Starter placeholder entries already
exist in each file (2-3 per list) so the layout has something to render
immediately; treat these as scaffolding to replace, not as the target count.

## 5. Build pipeline — how a section gets built

### 5.0 Content files already exist as scaffolding

`content/*.ts` (§4) already exists with the correct types/interfaces and 2-3
placeholder entries per list, enough for Stitch and the agent to design
against real field shapes (not guessed ones). The owner will replace
placeholder entries with real data over time — possibly before design starts,
possibly after, possibly never fully (that's fine, placeholders can ship).
**Never treat the placeholder count as a target.** Every layout must work
whether a given list ends up with 1 entry or 20 — see the scaling rule in
§4. If a design decision depends on knowing the real count (e.g. choosing a
grid vs. a carousel for Projects), ask the owner rather than assuming the
placeholder count is final.

### 5.1 Section order

Sections are built **one at a time**, in this order:

1. Hero
2. Navbar — built immediately after Hero, not last. The navbar needs the
   color palette/design tokens locked in during Hero's approval (see §5.2)
   so it inherits the real palette instead of the reference's original one.
   It also needs to exist early because it links to every other section
   (About, Skills, Experience, Projects, Contact) — building it last would
   mean retrofitting anchor links and header spacing across all five
   sections after the fact. The navbar was missing from the original section
   list entirely; this was an oversight, not an intentional "build it last."
3. About (includes bio + the Education & Growth timeline as a sub-block —
   see `content/education.ts`; this is NOT a separate top-level section,
   per the owner's explicit choice)
4. Skills
5. Experience
6. Projects
7. Contact

For each section:

1. **Design**: Use Stitch MCP (`stitch::generate-design`) to closely follow
   zayarshein.com's layout and visual language for this section (see §1),
   while reading the relevant `content/*.ts` file so the design fits the
   owner's actual data shape. Wording inside those files can still be
   placeholder at this stage. Present the first pass before assuming it's
   right — the owner may ask to remove, change, or add specific elements
   compared to the raw reference; apply those changes and treat the revised
   version as the new baseline for this section.
2. **Design tokens**: After Hero (the first section) is approved, establish
   the design system via Stitch's `create_design_system` tool (colors,
   typography, shape, and a freeform Design MD field), then
   `update_design_system` to apply it — this is how tokens actually get
   created at the tool level, regardless of which named skill (`design-md`,
   `taste-design`) wraps the call. `upload_design_md` is a different tool for
   the reverse case (you already have a DESIGN.md file to bring in) — don't
   use it to generate a file from an approved design. Starting with Navbar
   (the second section) and for every section after, use
   `apply_design_system` (or the `manage-design-system` skill if installed)
   so the whole site stays visually consistent with the palette/tokens
   locked in during Hero's approval, even if new inspiration is pulled in.
3. **Implement**: Translate the approved Stitch design into a React +
   Tailwind component, wired to the appropriate `content/*.ts` file (§4).
4. **Verify visually**: Use Antigravity's built-in Browser Subagent to open
   the page and check the section at mobile, tablet, and desktop widths.
   Don't ask the owner to verify something you can check yourself.
5. **Present to owner for approval.** Do not proceed to the next section
   until the current one is explicitly approved.
6. **Commit**: Once approved, commit the section with a clear atomic commit
   message (e.g. `feat: add hero section`). The agent handles commits — the
   owner does not need to commit manually during this build phase.

## 6. Skills installed and when to use them

**Stitch skills** (`google-labs-code/stitch-skills`):
- `generate-design` — generating/editing each section's design
- `design-md` / `taste-design` — establishing the design system (via
  `create_design_system`/`update_design_system`) after the first approved
  section; prefer `taste-design` for a more premium, anti-generic result
- `manage-design-system` — applying the established design system to every
  subsequent section via `apply_design_system`
- `stitch-loop` — reference for the overall multi-section build workflow if
  the process needs re-checking

**Engineering skills** (`addyosmani/agent-skills`):
- `frontend-ui-engineering` — component structure, responsive behavior,
  WCAG 2.1 AA accessibility. Apply to every section.
- `incremental-implementation` — thin vertical slices; maps directly to the
  one-section-at-a-time flow in §5.
- `code-review-and-quality` — self-review before presenting a section for
  approval.
- `git-workflow-and-versioning` — atomic commit conventions (§5.6).
- `performance-optimization` — check Core Web Vitals if a section adds
  images, fonts, or animation.

**Taste/quality skills**:
- `frontend-design` (anthropics/skills) and `stitch-design-taste`
  (leonxlnx/taste-skill) — use as a secondary quality check on visual
  execution, especially if a section looks generic or "AI-default."

If unsure which skill applies, check `using-agent-skills` from the
addyosmani pack first.

## 7. Deployment (GitHub Pages)

Vite needs explicit config for GitHub Pages — don't assume default settings work:

- Set `base` in `vite.config.ts` to `/<repo-name>/` (or `/` only if this is a
  `<username>.github.io` root repo).
- Use a GitHub Actions workflow (`.github/workflows/deploy.yml`) to build and
  publish to the `gh-pages` branch or Pages' native Actions deployment —
  prefer the native `actions/deploy-pages` flow over the older `gh-pages` npm
  package unless there's a reason not to.
- Verify all internal links/assets use relative paths that respect `base`,
  not hardcoded absolute paths.
- After first deploy, verify the live URL actually loads correctly — don't
  assume a successful build means a working deployment.

## 8. Things to never do

- Never hardcode personal content (bio, job history, project details) inside
  a component — see §4.
- Never add a contact form, backend, database, or auth.
- Never introduce Next.js, a CMS, or SSR "for future-proofing" unless the
  owner explicitly asks — this project is intentionally static and simple.
- Never skip the visual verification step (§5.4) before presenting a section.
- Never move to the next section without explicit approval of the current one.
