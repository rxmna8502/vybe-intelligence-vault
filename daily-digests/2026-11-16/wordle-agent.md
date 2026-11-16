---
title: "rbutera/wordle-agent"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Bun", "TypeScript", "Bun.WebView", "Hurdle (constraint solver)", "WebKit/Chrome DevTools Protocol"]
quality_score: 8
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["Wordle automation", "AI agent interface", "constraint solver", "headless browser", "game state parsing"]
source: "https://github.com/rbutera/wordle-agent"
stars: 0
language: "None"
last_updated: "2026-09-03T08:26:50Z"
discovered_at: "2026-09-03T08:30:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Bun CLI tool that enables AI agents to interact with the NYT Wordle game via a headless browser, providing real-time game state as JSON and candidate suggestions from a Wordle constraint solver (Hurdle).

## Key Features
- Headless browser automation using Bun.WebView for real-time Wordle gameplay without external dependencies like Puppeteer or Playwright.
- Persistent browser profile for multi-turn agent interactions, enabling stateful gameplay.
- JSON output of game state, including board, keyboard, and candidate suggestions from Hurdle.
- Built-in Hurdle constraint solver for generating optimal guesses based on current board state.
- Configurable via file, environment variables, or CLI flags for flexibility in deployment.

## Why It Matters for RAG Builders
It provides a standardized way for AI agents to interact with and solve Wordle puzzles, offering real-time game state and constraint-based suggestions for RAG systems.

## Tech Stack Deep Dive
### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun.WebView
Automated review identified **Bun.WebView** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hurdle (constraint solver)
Automated review identified **Hurdle (constraint solver)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebKit/Chrome DevTools Protocol
Automated review identified **WebKit/Chrome DevTools Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
