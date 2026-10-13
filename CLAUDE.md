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
- `proj2/`: React 19 + TypeScript + Vite app (with `react-router-dom`). Commands, architecture, theming, and the rule for registering new pages are documented in `proj2/CLAUDE.md`, so read that when working there.

## Claude Code configuration in this repo

- `.claude/agents/`: project subagents `code-improver` (read-only review) and `debugger`. The root-level `agents/review/` directory is empty and unrelated; real subagents live only in `.claude/agents/`.
- `.claude/skills/`: `api-conventions` (RESTful naming, consistent error format, request validation for API endpoints) and `summarize-changes` (summarizes `git diff HEAD`).
- `.claude/settings.local.json` (root) and `proj2/.claude/settings.local.json` are separate local settings files.
- `.mcp.json`: MCP servers `claude-code-docs` and `sentry` (remote HTTP, so they need network access and may need re-authentication), and `playwright` (stdio via `npx`; browser automation, snapshots go to `.playwright-mcp/`, which is generated output).
