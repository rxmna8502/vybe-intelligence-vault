---
title: "Hyeonu-Cha/dotnet-coverage-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["C#", ".NET 9.0", "Model Context Protocol (MCP)", "Cobertura XML", "reportgenerator", "Roslyn"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "code coverage", "AI automation", "test generation", "CI/CD integration"]
source: "https://github.com/Hyeonu-Cha/dotnet-coverage-mcp"
stars: 1
language: "C#"
last_updated: "2026-07-13T13:18:36Z"
discovered_at: "2026-07-13T13:22:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that exposes .NET test-coverage tooling as callable tools for AI assistants like Claude Code and Gemini CLI. It enables AI agents to run tests, parse coverage reports, identify uncovered branches, and append test code directly via stdio communication.

## Key Features
- Run `dotnet test` with coverage and parse results via MCP tools
- Identify uncovered branches and diff coverage between runs
- Append test code to existing test files atomically
- Support concurrent multi-agent isolation with session IDs
- Smart batching of source files by line budget for efficient coverage analysis

## Why It Matters for RAG Builders
It enables AI agents to automate test execution, coverage analysis, and test generation in .NET projects, reducing manual intervention and accelerating CI/CD workflows.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 9.0
Automated review identified **.NET 9.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cobertura XML
Automated review identified **Cobertura XML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### reportgenerator
Automated review identified **reportgenerator** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Roslyn
Automated review identified **Roslyn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
