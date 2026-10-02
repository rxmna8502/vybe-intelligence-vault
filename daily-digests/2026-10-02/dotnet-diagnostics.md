---
title: "pedrosakuma/dotnet-diagnostics"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["C#", ".NET 10", "MCP (Model Context Protocol)", "ClrMD", "EventCounters", "Docker", "Kubernetes", "HTTP", "stdio", "BenchmarkDotNet"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["diagnostics", "performance monitoring", "LLM integration", "MCP server", "CLI toolkit"]
source: "https://github.com/pedrosakuma/dotnet-diagnostics"
stars: 3
language: "C#"
last_updated: "2026-07-11T21:38:58Z"
discovered_at: "2026-07-11T21:47:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server and CLI toolkit for zero-instrumentation performance diagnostics of .NET 10 applications, enabling LLM-driven or human-driven triage of runtime issues like threadpool starvation, GC pressure, and memory leaks via diagnostic IPC.

## Key Features
- Zero-instrumentation diagnostics via diagnostic IPC (no code changes required)
- Unified MCP server and standalone CLI with identical diagnostic engine
- 16+ tools for triage, sampling, heap analysis, and event collection (GC, CPU, exceptions, etc.)
- IoT-style triage with auto-generated verdicts, severity scores, and actionable hints
- Cross-platform support (Linux, Windows) with containerized deployments and Kubernetes sidecar

## Why It Matters for RAG Builders
It enables AI-driven or human-driven performance diagnostics for .NET applications without code changes, streamlining root cause analysis for RAG builders integrating runtime insights.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 10
Automated review identified **.NET 10** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ClrMD
Automated review identified **ClrMD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EventCounters
Automated review identified **EventCounters** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### stdio
Automated review identified **stdio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BenchmarkDotNet
Automated review identified **BenchmarkDotNet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
