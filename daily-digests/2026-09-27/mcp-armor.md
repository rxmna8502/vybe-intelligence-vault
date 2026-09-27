---
title: "studiomeyer-io/mcp-armor"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Ed25519", "Sigstore Rekor", "OpenTelemetry (OTLP)", "Aho-Corasick", "Unicode Normalization (NFKC)", "UTS-39 Confusable Detection", "JSON-RPC", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP security", "prompt injection defense", "tool poisoning prevention", "Rust sidecar", "runtime validation"]
source: "https://github.com/studiomeyer-io/mcp-armor"
stars: 1
language: "Rust"
last_updated: "2026-07-19T10:17:13Z"
discovered_at: "2026-07-19T10:26:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-armor is a Rust-based drop-in sidecar that wraps any MCP server to provide runtime security defenses against prompt injection, tool poisoning, and marketplace attacks. It validates Ed25519 manifest signatures, strips malicious environment variables, and enforces a multi-stage Unicode-aware scanner to detect evasion attempts.

## Key Features
- Multi-stage scanner with Aho-Corasick prefilter, regex, Unicode normalization, and confusable detection (p99 <5ms)
- Ed25519 manifest signature validation with TOFU keystore and Sigstore Rekor bridge
- Strips malicious environment variables (LD_PRELOAD, NODE_OPTIONS, etc.) from spawned processes
- Detects tool-name homoglyph collisions and directory-traversal patterns in tool calls
- Layer 8 tool-description/schema poisoning detection for model-directed instructions hidden in tool metadata

## Why It Matters for RAG Builders
mcp-armor provides critical runtime defenses against emerging MCP-specific attack vectors like prompt injection and tool poisoning, which are out-of-scope for the official MCP specification but essential for secure AI stack deployments.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519
Automated review identified **Ed25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sigstore Rekor
Automated review identified **Sigstore Rekor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry (OTLP)
Automated review identified **OpenTelemetry (OTLP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Aho-Corasick
Automated review identified **Aho-Corasick** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unicode Normalization (NFKC)
Automated review identified **Unicode Normalization (NFKC)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UTS-39 Confusable Detection
Automated review identified **UTS-39 Confusable Detection** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
