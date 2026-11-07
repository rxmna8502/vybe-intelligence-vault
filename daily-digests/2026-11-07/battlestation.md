---
title: "stevekinney/battlestation"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "TOML", "JSON", "Model Context Protocol (MCP)", "Node.js (optional)", "macOS defaults command"]
quality_score: 9
rag_relevance: 6
deployment_complexity: "Low"
tags: ["macOS configuration", "system preferences", "declarative restoration", "TOML serialization", "MCP server"]
source: "https://github.com/stevekinney/battlestation"
stars: 0
language: "TypeScript"
last_updated: "2026-08-04T21:14:00Z"
discovered_at: "2026-08-04T21:15:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A CLI tool and MCP server for capturing, diffing, and restoring macOS system preferences to/from an auditable TOML file. It manages ~150 curated settings, including hidden preferences not exposed in System Settings, and supports declarative restoration on new machines.

## Key Features
- Captures ~150 macOS system settings to a structured TOML file with detailed annotations
- Supports diffing live system against stored preferences for auditing changes
- Declarative apply command restores settings and removes unspecified ones to reset to defaults
- Includes an MCP server for programmatic access via AI assistants or scripts
- Provides undo snapshots and dry-run modes for safe, reversible operations

## Why It Matters for RAG Builders
It enables AI engineers to programmatically capture and restore macOS system configurations, ensuring consistent development environments and reducing setup friction for new machines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (optional)
Automated review identified **Node.js (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS defaults command
Automated review identified **macOS defaults command** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
