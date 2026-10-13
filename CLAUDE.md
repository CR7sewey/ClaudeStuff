# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Beginning

Always say "Hello Miguel, good to see you" before each response!

## Repository overview

A sandbox for learning Claude Code. There is no root `package.json`; each subproject is independent and has its own `node_modules`, so run npm commands from inside that subproject's directory.

- `main.js` (root): standalone scratch script, run with `node main.js`.
- `proj1/`: plain Node.js (CommonJS) project.
  - `npm run dev` runs `node index.js`.
  - There is no test runner yet; `npm test` is a placeholder that exits with an error.
- `proj2/`: React 19 + TypeScript + Vite app, scaffolded from the Vite template.
  - `npm run dev` starts the dev server with HMR.
  - `npm run build` runs `tsc -b` (project references: `tsconfig.app.json` + `tsconfig.node.json`), then `vite build` into `dist/`.
  - `npm run lint` runs ESLint (flat config in `eslint.config.js`: typescript-eslint, react-hooks, react-refresh).
  - `npm run preview` serves the production build.
  - No test framework is configured.
  - The React Compiler is on, through `@rolldown/plugin-babel` with `reactCompilerPreset()` in `vite.config.ts`. It slows dev and build, and it means manual `useMemo`/`useCallback` is usually unnecessary.

### proj2 structure

```
proj2/
├── index.html              # Vite entry; inline script applies saved theme before React loads
├── public/                 # Static assets served as-is (favicon.svg, icons.svg sprite)
└── src/
    ├── main.tsx            # Mounts <App /> in StrictMode, imports index.css
    ├── App.tsx / App.css   # Page layout (hero, docs/social sections)
    ├── index.css           # Global styles + CSS variables for light and dark themes
    ├── assets/             # Images imported from components (hero.png, react.svg, vite.svg)
    ├── hook/               # Custom React hooks (note: singular folder name)
    │   └── useTheme.ts     # Light/dark theme state
    └── components/         # Reusable UI components, each with a co-located .css file
        └── ThemeToggle.tsx # Fixed top-right button that toggles the theme
```

Theming: `useTheme` sets `data-theme="light|dark"` on `<html>` and saves it to `localStorage` under `theme`, but only when the user explicitly toggles. With no saved value it follows `prefers-color-scheme`. Storage access is wrapped in `try/catch` because `localStorage` can throw. The dark palette in `index.css` is scoped to `:root[data-theme='dark']`, so style new UI with the existing CSS variables (`--text`, `--bg`, `--accent`, …) rather than hard-coded colors. If you change the storage key or default logic, update the inline script in `index.html` too.

## Claude Code configuration in this repo

- `.claude/agents/`: project subagents `code-improver` (read-only review) and `debugger`.
- `.claude/skills/`: `api-conventions` (RESTful naming, consistent error format, request validation for API endpoints) and `summarize-changes` (summarizes `git diff HEAD`).
- `.mcp.json`: MCP servers `claude-code-docs`, `playwright` (browser automation; snapshots go to `.playwright-mcp/`), and `sentry`.
