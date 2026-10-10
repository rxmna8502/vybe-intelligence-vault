---
title: basitalisandhu/agentdojo-mcp
content_type: repo
engine: v2
category: daily-digests/2026-10-10
tech_stack:
- Python
- JSON-RPC
- MCP (Model Context Protocol)
- AgentDojo
- YAML
- CLI
quality_score: 9
rag_relevance: 8
deployment_complexity: Medium
tags:
- MCP
- AgentDojo
- prompt injection
- benchmarking
- tool mapping
source: https://github.com/basitalisandhu/agentdojo-mcp
stars: 0
language: Python
last_updated: '2026-10-09T11:05:59Z'
discovered_at: '2026-10-09T12:03:29Z'
evaluated_by: mistral-small-latest
---

## Summary
agentdojo-mcp bridges AgentDojo benchmarks to real MCP servers by mapping suite tools to server tools, enabling evaluation of prompt injection and utility for agent stacks against actual tool surfaces without modifying AgentDojo or the server.

## Key Features
- Maps AgentDojo task suites to MCP server tools via YAML-based mapping for accurate benchmarking
- Supports stdio and Streamable HTTP MCP server connections without requiring MCP SDK
- Validates mappings and provides detailed reports on utility, attack success, and MCP call logs
- Enables offline replay of benchmark results for regression testing and documentation
- Integrates seamlessly with AgentDojo's existing attack models and task suites

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to rigorously evaluate prompt injection defenses and agent utility against real-world MCP servers using standardized benchmarks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AgentDojo
Automated review identified **AgentDojo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
