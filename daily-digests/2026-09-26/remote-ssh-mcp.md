---
title: "the-nine-nation/remote-ssh-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js 20+", "Model Context Protocol (MCP)", "OpenSSH", "Bash"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["SSH", "MCP", "remote execution", "stateful sessions", "AI agents"]
source: "https://github.com/the-nine-nation/remote-ssh-mcp"
stars: 1
language: "TypeScript"
last_updated: "2026-08-05T05:27:58Z"
discovered_at: "2026-08-05T05:49:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Remote SSH MCP enables persistent, stateful remote Bash sessions for AI agents via the Model Context Protocol (MCP). It leverages the local OpenSSH client to maintain shell state (cwd, environment variables) across commands, reducing token waste and improving reliability for remote command execution.

## Key Features
- Persistent remote sessions with stable session IDs preserving shell state (cwd, environment variables)
- Native OpenSSH integration honoring ~/.ssh/config, ProxyJump, and SSH agent
- Long-running command support with non-blocking execution via ssh_run and ssh_peek
- Safety controls including host-alias allowlists, audit logging, and denylists
- 7 MCP tools for session management, command execution, and monitoring

## Why It Matters for RAG Builders
It eliminates token waste and state loss in remote command execution for AI agents by providing persistent, stateful SSH sessions through a standardized MCP interface.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js 20+
Automated review identified **Node.js 20+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSSH
Automated review identified **OpenSSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
