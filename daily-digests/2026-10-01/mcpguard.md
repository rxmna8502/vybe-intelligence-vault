---
title: "ChenLaoshiYF/mcpguard"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "PyInstaller", "Regular Expressions", "CLI", "JSON"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["AI security", "prompt injection", "tool poisoning", "MCP", "local scanning"]
source: "https://github.com/ChenLaoshiYF/mcpguard"
stars: 0
language: "Python"
last_updated: "2026-08-10T03:55:50Z"
discovered_at: "2026-08-10T03:58:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCPGuard is a local security scanner designed to protect AI Agents from tool poisoning and prompt injection attacks by detecting malicious instructions hidden in MCP server configurations and skill descriptions. It performs local scans without external dependencies or data transmission.

## Key Features
- Detects Unicode hidden characters, homoglyph attacks, and silent data exfiltration in tool descriptions
- Scans local MCP configurations and skill directories for suspicious patterns (e.g., command overrides, sensitive path references)
- Zero external dependencies and fully offline operation with automatic credential redaction in reports
- Supports multiple deployment methods (exe, pip, source) and provides CI-friendly JSON output
- Includes self-test suite and SHA256 verification for secure downloads

## Why It Matters for RAG Builders
It proactively identifies malicious tool descriptions that could compromise AI Agents before deployment, reducing the risk of prompt injection and tool poisoning attacks in production environments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyInstaller
Automated review identified **PyInstaller** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regular Expressions
Automated review identified **Regular Expressions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
