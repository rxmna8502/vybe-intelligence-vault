---
title: "urbanmorph/yellide"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "SQLite", "MCP (Model Context Protocol)", "POSIX utilities (sips, qlmanage)", "SHA-256 hashing"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["local media search", "content-based indexing", "privacy-first", "MCP server", "offline indexing"]
source: "https://github.com/urbanmorph/yellide"
stars: 0
language: "JavaScript"
last_updated: "2026-08-09T15:32:29Z"
discovered_at: "2026-08-09T15:35:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Yellide is a local, privacy-focused media indexing tool that searches photos, videos, and audio files by their content rather than filenames. It operates as an MCP server, enabling natural language queries via tools like Claude without making network calls or modifying files.

## Key Features
- Indexes media files by content (not filenames) using SHA-256 hashing for identity
- Runs entirely on-device as an MCP server with no network calls or external dependencies
- Supports natural language queries via tools like Claude for intuitive search
- Detects cloud placeholders and avoids unnecessary downloads using POSIX block checks
- Propagates metadata and captions across related files (e.g., shoots) to optimize indexing

## Why It Matters for RAG Builders
Yellide enables RAG builders to integrate robust, privacy-preserving media indexing into AI workflows without relying on cloud services or exposing sensitive data.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### POSIX utilities (sips, qlmanage)
Automated review identified **POSIX utilities (sips, qlmanage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256 hashing
Automated review identified **SHA-256 hashing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
