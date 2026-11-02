---
title: "cgallic/wpguard-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "WP-CLI", "WordPress", "SSH", "REST API", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["WordPress automation", "MCP server", "guarded execution", "AI safety", "dry-run previews"]
source: "https://github.com/cgallic/wpguard-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-20T22:53:03Z"
discovered_at: "2026-07-20T22:59:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
wpguard-mcp is a guarded WordPress MCP server that enables AI clients to interact with WordPress sites through named, typed verbs instead of raw PHP execution. It enforces a closed-by-default architecture with dry-run previews, pre-write backups, and human-in-the-loop approval for all modifications, while demoting raw PHP execution to a deliberately gated escape hatch.

## Key Features
- Named, typed verbs for WordPress operations (no raw PHP by default)
- Tiered access model: recon (read-only), guarded mutations, and gated raw eval
- Dry-run previews enabled by default with `apply=False`
- Pre-write backups and rollback capabilities for all modifications
- Human-in-the-loop approval required for all writes via change packets

## Why It Matters for RAG Builders
It provides a safer, structured approach to WordPress AI automation by enforcing named verbs as the primary interface and gating raw execution, reducing the risk of catastrophic AI-driven changes.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WP-CLI
Automated review identified **WP-CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WordPress
Automated review identified **WordPress** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
