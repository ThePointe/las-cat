# CLAUDE.md
Expert Architect & UX/UI Lead Guidance for the Las Catalinas Guest Concierge Site.

@AGENTS.md

## Project Mission: The Concierge Experience
- **Target Audience:** Guests who have ALREADY booked and paid. Focus on hospitality, not sales.
- **Purpose:** A "Digital House Manual" and hyper-local guide. Be the guest's "best friend" on the ground to solve problems before they ask.
- **Tone:** "Expert Friend" and "Curated." The UI should reflect a premium, customized feel based on personal recommendations in `data.ts`.
- **Interactivity:** Every feature must be actionable (e.g., "Open in Google Maps," "View Menu PDF," "WhatsApp Host").

## Architectural Standards (CRITICAL)
- **Separation of Concerns:** Keep interactive logic (the 'smarts') strictly separate from the styling (the 'looks').
- **Styling Protection:** Ensure a beginner can safely edit Tailwind colors/fonts without breaking component functionality.
- **Single Source of Truth:** [app/data.ts] is the ONLY source for guest info. No hard-coded text in UI components. Use JSX only for layout/logic.
- **Protected files:** Do not edit `app/globals.css`, `app/layout.tsx`, `next.config.ts`, `tsconfig.json`, or `package.json` unless Sheila explicitly asks.

## Localization Strategy (Deferred)
- **Architecture Only:** Implement bilingual objects `{ en: "", es: "" }` in `app/data.ts` now to prevent future refactoring.
- **Immediate Focus:** Populate ONLY the `en` keys. Leave `es` as an empty string `""` or a copy of the English text.
- **No Active Translation:** Do not spend tokens translating to Spanish in this iteration. Build the "pipes" today; fill them later.

## Stack & Commands
- **Stack:** Next.js 16.2 (App Router), React 19, Tailwind 4, Lucide-React.
- `npm run dev`: Start local concierge preview (localhost:3000).
- `npm run build`: Production sanity check and TypeScript verification.

## Mobile-First Mandate
- **Context:** Guests will be standing on cobblestone streets in Costa Rica looking at their phones.
- **Design:** "Thumb-friendly" navigation. Use "scannable" content: big buttons, short sentences, clear icons, and zero dense text blocks.

## Workflow & Verification
- **Mentor Mode:** Explain the "why" behind your technical or UX choices in simple, non-engineer terms.
- **Asset Hygiene:** `/public` is for production-ready assets only. No backups or spare files. Use Git history for version control.
- **Interactive Testing:** For any new interactivity, provide the specific URL/step for the user to test in the local preview.
- **Final Check:** Run `npm run build` after changes to ensure no TypeScript or build errors exist.
- **UI task done = build passes + looks good in browser at mobile and desktop viewports + no regressions in adjacent sections.**
- **Ask before creating files:** Do not create new components, pages, hooks, or utilities unless explicitly instructed. Prefer editing existing files.
- **No AI attribution:** Do not add "Generated with Claude Code," "Co-Authored-By," or AI attribution footers/trailers to commit messages or PR descriptions unless Sheila explicitly asks.

## Preview URLs
- **Main project:** http://localhost:3000 — Sheila's canonical dev server (run from `/Users/sheila/Documents/Claude/las-cat`).
- **Worktree preview:** http://localhost:3001 — separate preview for the active worktree. Fall back to 3002+ if 3001 is busy.
- Before running `preview_start`, check `preview_list` — Sheila usually already has a server running. Don't spin up duplicates.
- `.claude/launch.json` is gitignored — it's per-worktree dev-server config, not shared. Each worktree gets (or skips) its own.
