# Screenshot → Compare → Fix loop

Run this loop after every visual change. Do not report a page as done after a single screenshot pass.

1. **Serve on localhost.** Start `node serve.mjs` in the background (serves the project root at `http://localhost:3000`). If it is already running, do not start a second instance. Never screenshot a `file:///` URL.
2. **Screenshot with Playwright MCP.** Resize first with `browser_resize`, then `browser_navigate` to `http://localhost:3000`, then `browser_take_screenshot` with `fullPage: true` and `scale: "css"`.
   - Save to `temporary screenshots/screenshot-N-label.png` (e.g. `screenshot-3-desktop.png`). Increment N, never overwrite.
   - Always check at least two widths: desktop `1440x900` and mobile `390x844`.
3. **Read the PNG** with the Read tool and compare it against the reference (image, URL, or the user's description).
4. **List the differences specifically** (spacing, font size/weight, color hex, alignment, radius, shadow, image sizing), using the style in `design-rules.md`. Then fix them in the code.
5. **Re-screenshot and re-compare.** Do at least 2 comparison rounds. Stop only when no visible differences remain or the user says to stop.
6. **Check the console.** Read the console log after navigation. Fix any errors. The Tailwind CDN warning is expected and can be ignored.

## Checking a scrolled state (sticky headers, scroll effects)

- `scroll-behavior: smooth` makes `window.scrollTo` asynchronous, so `scrollY` reads 0 right after the call. Set `document.documentElement.style.scrollBehavior = 'auto'` and wait ~300ms before taking the screenshot.
- Take a viewport screenshot (not `fullPage`) when verifying fixed elements. Full-page captures do not show scroll-dependent overlap.

## Gotchas

- Do not use `loading="lazy"` on images that need to appear in full-page screenshots; they stay blank because the page never scrolls.
- Hover, focus-visible and active states are not covered by static screenshots. Use `browser_hover` or `browser_press_key` and screenshot again when changing them.
- Screenshots in `temporary screenshots/` are generated output. Do not treat them as source assets.
