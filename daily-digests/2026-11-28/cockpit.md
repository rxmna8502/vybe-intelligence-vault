---
title: "jordan-thirkle/cockpit"
content_type: "repo"
engine: "v2"
category: "UI Component"
tech_stack: ["TypeScript", "React 19", "Vite", "FastAPI", "WebSocket", "xterm.js", "CSS"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Hermes Agent", "Dashboard", "Session Management", "UI Customization", "Workspace Organization"]
source: "https://github.com/jordan-thirkle/cockpit"
stars: 0
language: "TypeScript"
last_updated: "2026-09-02T02:01:26Z"
discovered_at: "2026-09-02T02:11:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cockpit is a customizable dashboard shell and chat organizer for the Hermes Agent framework, enabling users to organize chat sessions into folders and workspaces while providing a branded, calm UI. It operates as a separate SPA served via the Hermes dashboard without modifying the core Hermes backend.

## Key Features
- Organizes Hermes chat sessions into folders and workspaces (Inbox, Archive, custom folders) with persistent metadata storage
- Survives Hermes updates by operating as a separate SPA via HERMES_WEB_DIST environment variable
- Supports basic auth and LAN access with a calm, branded UI (byjtt.com theme)
- Stores folder metadata externally in HERMES_HOME/data/cockpit/*.json, avoiding interference with Hermes internals
- Pluggable themes and customizable default folders for rebranding and personalization

## Why It Matters for RAG Builders
Cockpit enhances Hermes Agent usability by providing structured session organization and a premium UI, making it easier for developers to manage and navigate agentic workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React 19
Automated review identified **React 19** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### xterm.js
Automated review identified **xterm.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSS
Automated review identified **CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
