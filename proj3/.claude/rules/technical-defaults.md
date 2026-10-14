# Technical defaults

## Output

- Default to a single `index.html` with styles inline in a `<style>` block, unless the user asks for more files.
- `serve.mjs` in the project root serves the root at `http://localhost:3000`. Do not replace it with another server.

## Tailwind

- Load Tailwind via the CDN: `<script src="https://cdn.tailwindcss.com"></script>`.
- Define brand colors and fonts in an inline `tailwind.config` block. Do not use the default Tailwind palette (e.g. `indigo-500`, `blue-600`) for brand colors.
- Put shared patterns (buttons, surfaces, shadows) in the `<style>` block as small classes. Do not repeat long utility strings.
- The CDN is for prototyping. The "should not be used in production" console warning is expected.

## Placeholders

- Images: `https://placehold.co/WIDTHxHEIGHT/BGHEX/FGHEX?text=Label`. Use soft, light tones and a short label. Dark placeholders look heavy.
- Put a light gradient overlay on images (`bg-gradient-to-t from-black/20 to-transparent`) and an optional color layer with `mix-blend-multiply` at low opacity.
- Always give images a meaningful `alt` and an explicit aspect ratio (`aspect-[4/3]` etc.) so layout does not shift.
- Do not place text-bearing overlays (e.g. a play button) over the placeholder's label. Move them to a corner.
- If `brand_assets/` exists or the user supplies real images or a logo, use those instead of placeholders.
- Do not hotlink or copy images from third-party sites unless the user asks for it.

## Responsive

- Mobile-first. Verify at `390px` and `1440px` at minimum.
- Content container: `max-w-[1200px] mx-auto px-5 md:px-8`. Do not build the page around the width of a reference screenshot.
- Base body text is 16px with `line-height: 1.7`. Do not copy tiny font sizes captured from a narrow viewport.
- Grids collapse to a single column on mobile: `grid gap-* md:grid-cols-2 lg:grid-cols-4`.
- Fixed or sticky headers need a background (`bg-paper/85 backdrop-blur-md border-b`) so content does not show through when scrolling.

## Typography

- Pair a display face with a clean body face, or use one family with distinct weights. Do not use the browser default.
- Large headings: tight tracking (`-0.03em`). Body: generous line-height (`1.7`).

## Motion and interaction

- Only animate `transform` and `opacity`. Never use `transition-all`.
- Use spring-style easing, e.g. `cubic-bezier(.34, 1.56, .64, 1)`.
- Every clickable element needs hover, `focus-visible` and active states.
- Respect `prefers-reduced-motion`: disable marquees and transitions inside `@media (prefers-reduced-motion: reduce)`.

## Depth

- Use a layering system (base → elevated → floating) with layered, low-opacity shadows. Do not use a flat `shadow-md`.
- Add depth to backgrounds with layered radial gradients and an SVG-noise grain overlay.
