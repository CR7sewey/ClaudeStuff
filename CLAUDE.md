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

## Claude Code configuration in this repo

- `.claude/agents/`: project subagents `code-improver` (read-only review) and `debugger`.
- `.claude/skills/`: `api-conventions` (RESTful naming, consistent error format, request validation for API endpoints) and `summarize-changes` (summarizes `git diff HEAD`).
- `.mcp.json`: MCP servers `claude-code-docs`, `playwright` (browser automation; snapshots go to `.playwright-mcp/`), and `sentry`.
