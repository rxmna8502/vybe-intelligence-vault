---
title: "sushiHex/vram-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "NVIDIA NVML", "Ollama", "MCP (Model Context Protocol)", "JSONL for audit logging", "uv for package management"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["GPU resource management", "multi-agent coordination", "VRAM monitoring", "MCP server", "Ollama integration"]
source: "https://github.com/sushiHex/vram-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-20T03:50:57Z"
discovered_at: "2026-07-20T03:52:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
vram-mcp is an MCP server that enables AI agents to safely share a single NVIDIA GPU by providing real-time VRAM visibility, cross-session model claims, and protected eviction mechanisms. It integrates with Ollama and uses NVML for GPU utilization tracking, ensuring safe multi-agent coordination on resource-constrained hardware.

## Key Features
- Real-time VRAM visibility across all GPU processes, not just Ollama models
- Cross-session model claims with TTL-based expiration for safe eviction
- Protected eviction mechanisms that prevent unloading claimed or actively computing models
- Per-process GPU utilization tracking via NVML for accurate busy detection
- Audit trail logging for tracking model lifecycles, disappearances, and actions

## Why It Matters for RAG Builders
It enables safe multi-agent AI workloads on a single GPU by preventing resource conflicts and providing visibility into VRAM usage, critical for RAG builders managing constrained hardware environments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NVIDIA NVML
Automated review identified **NVIDIA NVML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL for audit logging
Automated review identified **JSONL for audit logging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv for package management
Automated review identified **uv for package management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
