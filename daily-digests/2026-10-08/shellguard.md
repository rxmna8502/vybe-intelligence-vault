---
title: "fawdyinc/shellguard"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "SSH", "YAML", "Bash", "SFTP"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP server", "SSH access", "read-only shell", "LLM security", "diagnostics"]
source: "https://github.com/fawdyinc/shellguard"
stars: 16
language: "Go"
last_updated: "2026-08-01T13:15:25Z"
discovered_at: "2026-08-01T13:16:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ShellGuard is an MCP server that provides controlled, read-only shell access to remote servers over SSH for LLM agents. It enforces strict command validation and security policies to prevent destructive operations while enabling diagnostic and troubleshooting workflows.

## Key Features
- Enforces read-only command execution with command-level validation and allow/deny lists
- Supports two SSH modes (native and system) with configurable host key verification
- Provides 6 MCP tools for connecting, executing commands, provisioning tools, and downloading files
- Includes automatic toolkit provisioning for remote servers (ripgrep, jq, yq)
- Integrates with popular MCP clients like Cursor, Claude, VS Code, and Zed

## Why It Matters for RAG Builders
ShellGuard enables safe, hands-free LLM agent access to production servers for diagnostics and troubleshooting while preventing destructive operations through strict command validation and security policies.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SFTP
Automated review identified **SFTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
