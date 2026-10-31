---
title: "SmartAI/ava"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["C++23", "Boost.Asio", "Zstandard", "CMake", "vcpkg", "HTTP/SSE", "TLS"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "High"
tags: ["coding agent", "durable runtime", "C++23", "session logging", "crash recovery"]
source: "https://github.com/SmartAI/ava"
stars: 0
language: "C++"
last_updated: "2026-09-01T09:03:00Z"
discovered_at: "2026-09-01T09:07:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Ava is a durable coding-agent runtime written in modern C++ designed for native and containerized services. It provides a reusable headless runtime with multiple interfaces (TUI, CLI, Web UI) and supports crash recovery, replay, and observability through append-only session logs.

## Key Features
- Append-only, crash-repairable session logs with compressed frames for durability and reduced storage
- Unified async lifecycle using Boost.Asio for cancellation, timeouts, and streaming
- Explicit ownership and failure handling via RAII, move semantics, and std::expected
- Single event stream for model output, tool results, and user input, avoiding split-brain state
- Modular C++23 components for transport, LLM, tool execution, and agent logic

## Why It Matters for RAG Builders
Ava provides a robust, modular foundation for building durable agent-based AI systems with built-in recovery and observability.

## Tech Stack Deep Dive
### C++23
Automated review identified **C++23** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Boost.Asio
Automated review identified **Boost.Asio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zstandard
Automated review identified **Zstandard** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CMake
Automated review identified **CMake** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### vcpkg
Automated review identified **vcpkg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/SSE
Automated review identified **HTTP/SSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS
Automated review identified **TLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
