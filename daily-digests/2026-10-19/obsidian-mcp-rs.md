---
title: "MrRefactoring/obsidian-mcp-rs"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "BM25 Search", "Rayon (Parallel Processing)", "Serde (YAML Parsing)", "Ignore Crate (File Filtering)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "Obsidian integration", "RAG tooling", "AI client connector", "Rust"]
source: "https://github.com/MrRefactoring/obsidian-mcp-rs"
stars: 0
language: "Rust"
last_updated: "2026-07-12T21:46:17Z"
discovered_at: "2026-07-12T21:47:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP (Model Context Protocol) server that enables AI clients like Claude, Cursor, and OpenClaw to interact with Obsidian vaults. It provides read/write access to notes, search, frontmatter management, and link-aware operations via a single static binary with zero runtime dependencies.

## Key Features
- 13 tools for note CRUD, search, frontmatter, and link operations with Obsidian vaults
- BM25-ranked search with field boosts and parallel processing for high performance
- Link-aware moves and backlink tracking to prevent broken references
- Read-only mode (`--no-edit`) for secure, non-destructive access
- Cross-platform support (macOS, Linux, Windows) with static binaries

## Why It Matters for RAG Builders
It bridges AI clients with Obsidian vaults, enabling seamless RAG pipelines to read, search, and edit notes programmatically for enhanced AI-driven knowledge management.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 Search
Automated review identified **BM25 Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rayon (Parallel Processing)
Automated review identified **Rayon (Parallel Processing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Serde (YAML Parsing)
Automated review identified **Serde (YAML Parsing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ignore Crate (File Filtering)
Automated review identified **Ignore Crate (File Filtering)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
