---
title: "andypgray/resharper-cli-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["C#", "MCP (Model Context Protocol)", "JetBrains ReSharper CLI", ".NET 10 SDK", "NuGet"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["C# code analysis", "MCP server", "code cleanup", "ReSharper integration", "headless inspection"]
source: "https://github.com/andypgray/resharper-cli-mcp"
stars: 0
language: "C#"
last_updated: "2026-07-15T16:16:07Z"
discovered_at: "2026-07-15T16:21:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
resharper-cli-mcp is an MCP server that wraps JetBrains' ReSharper command-line tools to provide C# coding agents with real-time code inspection and cleanup capabilities via stdio. It enables agents to perform ReSharper inspections and apply code cleanup rules without requiring an IDE or JetBrains license.

## Key Features
- Exposes ReSharper InspectCode for real-time code issue detection via `resharper_inspect` tool
- Applies ReSharper CleanupCode in-place for code formatting and style normalization via `resharper_cleanup` tool
- Supports deriving intentional style guides for legacy codebases using the `derive_style_guide` prompt
- Configurable via environment variables and MCP client settings for solution path, cache location, and ReSharper plugins
- Provides detailed issue reporting with file, line, severity, rule ID, and message for each detected problem

## Why It Matters for RAG Builders
It enables AI coding agents to leverage JetBrains ReSharper's powerful static analysis and code cleanup capabilities in headless environments, improving code quality and consistency in automated workflows.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JetBrains ReSharper CLI
Automated review identified **JetBrains ReSharper CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 10 SDK
Automated review identified **.NET 10 SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NuGet
Automated review identified **NuGet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
