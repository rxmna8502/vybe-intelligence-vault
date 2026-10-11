---
title: "moxno/privacyscrubber-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "MCP (Model Context Protocol)", "JSON-RPC", "Smithery"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Low"
tags: ["PII sanitization", "zero-trust", "MCP server", "data privacy", "in-memory processing"]
source: "https://github.com/moxno/privacyscrubber-mcp"
stars: 0
language: "JavaScript"
last_updated: "2026-07-11T18:55:03Z"
discovered_at: "2026-07-11T18:59:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A zero-trust Model Context Protocol (MCP) server that locally sanitizes PII, secrets, and custom regex patterns from text or files before sending them to remote LLM providers. It replaces sensitive data with tokens, processes the sanitized input, and then reverses the tokens to restore original values in the output.

## Key Features
- Locally scrubs PII, secrets, and credentials from text or files before LLM processing
- Supports industry-specific sanitization profiles (e.g., Dev, Medical, Legal)
- In-memory tokenization and detokenization for secure data handling
- Integrates with MCP clients like Claude Desktop and Cursor
- Supports multiple file formats including plain text, JSON, CSV, and DOCX

## Why It Matters for RAG Builders
It ensures sensitive data is never exposed to remote LLM providers, enabling secure and compliant AI workflows without sacrificing functionality.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Smithery
Automated review identified **Smithery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
