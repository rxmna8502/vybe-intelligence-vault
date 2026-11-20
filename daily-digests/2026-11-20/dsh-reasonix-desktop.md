---
title: "sealfly/dsh-reasonix-desktop"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Wails", "Electron (legacy)", "RPC", "JSON", "OS/Exec"]
quality_score: 8
rag_relevance: 5
deployment_complexity: "Medium"
tags: ["desktop shell", "Wails", "Electron replacement", "RPC bridge", "UI stability"]
source: "https://github.com/sealfly/dsh-reasonix-desktop"
stars: 2
language: "Go"
last_updated: "2026-09-01T02:47:43Z"
discovered_at: "2026-09-01T02:49:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Wails-based desktop shell for the Reasonix frontend, replacing Electron to resolve rendering artifacts like sidebar logo ghosting. It bridges the Reasonix UI to the DSH backend via RPC, ensuring native window drag behavior and stability.

## Key Features
- Native window drag handling via Wails runtime (no Chromium synthetic layer artifacts)
- Zero frontend modifications—dist assets reused from Electron version
- DSH backend RPC transparency (no capability restrictions)
- Structured error handling to prevent frontend crashes (e.g., theme, diagnostics)
- Local terminal integration with spawn and event handling

## Why It Matters for RAG Builders
Provides a stable, native desktop shell for AI tooling frontends while eliminating common Electron rendering issues.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wails
Automated review identified **Wails** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron (legacy)
Automated review identified **Electron (legacy)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RPC
Automated review identified **RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS/Exec
Automated review identified **OS/Exec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
