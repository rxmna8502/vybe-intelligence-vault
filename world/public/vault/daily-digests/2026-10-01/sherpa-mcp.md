---
title: "Tongas/sherpa-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Ollama", "llama.cpp", "LM Studio", "ripgrep"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Claude Code", "local LLM", "code analysis", "token optimization", "batch editing"]
source: "https://github.com/Tongas/sherpa-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-09-03T01:58:26Z"
discovered_at: "2026-09-03T02:23:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude Code plugin that offloads code-related tasks such as reading, searching, and batch-editing to a local LLM, reducing token usage in Claude's context while leveraging local processing power for heavy lifting.

## Key Features
- Delegates code exploration and transformation tasks to a local LLM, reducing token load in Claude's context by up to 99%
- Provides five MCP tools: health_check, delegate_exploration, delegate_search, delegate_transform, and apply_transform
- Supports automatic and explicit invocation with configurable backend settings (Ollama, llama.cpp, LM Studio)
- Includes path confinement and security checks to prevent unauthorized file access or execution
- Offers project-level and user-level configuration via JSON files or environment variables

## Why It Matters for RAG Builders
It enables RAG and AI stack builders to offload resource-intensive code analysis and editing tasks to local models, significantly reducing token usage and context overhead in AI assistants.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio
Automated review identified **LM Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ripgrep
Automated review identified **ripgrep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
