---
title: "zboralski/ida-headless-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "Python", "IDA Pro", "idalib", "Model Context Protocol (MCP)", "Connect RPC", "Protobuf", "Il2CppDumper", "unflutter"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["binary analysis", "MCP server", "IDA Pro integration", "reverse engineering", "automated analysis"]
source: "https://github.com/zboralski/ida-headless-mcp"
stars: 147
language: "Python"
last_updated: "2026-07-14T10:05:51Z"
discovered_at: "2026-07-14T10:08:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A headless IDA Pro binary analysis server exposing 52+ MCP tools via Model Context Protocol. It uses a Go-based MCP server with Python workers for IDA operations, enabling multi-session concurrency and advanced binary analysis workflows.

## Key Features
- Multi-session concurrency with process isolation for parallel binary analysis
- 52+ MCP tools for binary analysis, decompilation, and metadata import
- Support for Il2CppDumper and unflutter metadata imports for Unity and Flutter/Dart apps
- Configurable session timeouts and paginated results for scalability
- HTTP/SSE transport with Connect RPC over Unix sockets for robust communication

## Why It Matters for RAG Builders
It enables AI agents to perform advanced binary analysis and reverse engineering tasks by integrating IDA Pro's capabilities into automated workflows via the Model Context Protocol.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IDA Pro
Automated review identified **IDA Pro** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### idalib
Automated review identified **idalib** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Connect RPC
Automated review identified **Connect RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Il2CppDumper
Automated review identified **Il2CppDumper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### unflutter
Automated review identified **unflutter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
