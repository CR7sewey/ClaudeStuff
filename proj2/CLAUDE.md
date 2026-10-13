# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run from `proj2/`:

- `npm run dev`: Vite dev server with HMR.
- `npm run build`: `tsc -b` (project references: `tsconfig.app.json` + `tsconfig.node.json`), then `vite build` into `dist/` (generated; don't edit).
- `npm run lint`: ESLint, flat config in `eslint.config.js` (typescript-eslint, react-hooks, react-refresh).
- `npm run preview`: serves the production build.

No test framework is configured.

## Stack notes

- React 19 + TypeScript, scaffolded from the Vite template. Very recent majors are in use (TypeScript ~6.0, Vite 8, ESLint 10, `@vitejs/plugin-react` 6), so don't "fix" config or syntax based on older-version docs.
- The React Compiler is on, through `@rolldown/plugin-babel` with `reactCompilerPreset()` in `vite.config.ts`. It slows dev and build, and it means manual `useMemo`/`useCallback` is usually unnecessary.

## Structure

- `src/hook/` holds custom hooks (note: singular folder name), currently `useTheme.ts`.
- `src/components/` holds reusable UI components, each with a co-located `.css` file.
- `src/pages/` holds one component per page (with its co-located `.css`). `src/App.tsx` is only the shell: `ThemeToggle`, `Header`, and the router `<Routes>`, with `BrowserRouter` in `main.tsx`.
- **Always register every new page in `src/routes.tsx`.** Whenever you create a page in `src/pages/`, add one entry (`path`, `label`, `element`) to the `routes` array in the same change. That array is the single source of truth: it generates both the `<Route>`s in `App.tsx` and the header links in `Header.tsx`, so an unregistered page is unreachable and missing from the header. Don't add routes or header links anywhere else.
- `src/index.css` holds global styles and CSS variables for the light and dark themes.
- `index.html` has an inline script that applies the saved theme before React loads.

## Theming

`useTheme` sets `data-theme="light|dark"` on `<html>` and saves it to `localStorage` under `theme`, but only when the user explicitly toggles. With no saved value it follows `prefers-color-scheme`. Storage access is wrapped in `try/catch` because `localStorage` can throw.

The dark palette in `index.css` is scoped to `:root[data-theme='dark']`, so style new UI with the existing CSS variables (`--text`, `--bg`, `--accent`, …) rather than hard-coded colors. If you change the storage key or default logic, update the inline script in `index.html` too.
