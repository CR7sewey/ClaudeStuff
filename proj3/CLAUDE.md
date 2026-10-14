# CLAUDE.md — Frontend Website Rules

Detailed rules live in `.claude/rules/`; this file holds the project-level essentials:

- `.claude/rules/workflow.md`: the screenshot → compare → fix loop (server, Playwright screenshots, widths, scroll checks).
- `.claude/rules/technical-defaults.md`: Tailwind CDN, placeholders, responsive defaults, typography, motion, depth.
- `.claude/rules/design-rules.md`: matching a reference and how to phrase comparisons.

## Always Do Last

- **Invoke the `tell-me-time` agent** at the very end of every response, after all work for the prompt is finished, and show its one-line output (`Hello Miguel, the current time is HH:MM:SS WET|WEST (Lisbon).`) as the final line. Do this for every prompt, including questions and small edits.

## Always Do First

- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If the reference is a website the user points to, take its structure, copy, and styling cues; it does not need to be an exact clone unless the user asks for one.
- Never size the page to the width of a reference screenshot; capture widths are incidental. Build responsively (see `technical-defaults.md`).
- If no reference: design from scratch with high craft (see guardrails below).
- Follow the loop in `workflow.md` after every visual change. Do not stop after one screenshot pass.

## Local Server

- Always serve on localhost: `node serve.mjs` (serves the project root at `http://localhost:3000`). Never screenshot a `file:///` URL.
- Start it in the background. If it is already running, do not start a second instance.

## Brand Assets

- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails

- **Colors:** Never use the default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use a flat `shadow-md`. Use layered, low-opacity shadows.
- **Typography:** Never use the same font for headings and body without distinct weights. Tight tracking (`-0.03em`) on large headings, line-height `1.7` on body.
- **Gradients:** Layer multiple radial gradients. Add grain via an SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Light gradient overlay (`from-black/20`) and an optional low-opacity `mix-blend-multiply` color layer.
- **Spacing:** Use intentional, consistent spacing tokens, not random Tailwind steps.
- **Depth:** Surfaces use a layering system (base → elevated → floating), not one flat plane.

## Hard Rules

- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
