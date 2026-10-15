---
title: "hypnguyen1209/codex-free"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "@modelcontextprotocol/sdk", "Node.js", "Streamable HTTP", "ngrok/Cloudflare Tunnel"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP bridge", "ChatGPT integration", "local development", "file operations", "git automation"]
source: "https://github.com/hypnguyen1209/codex-free"
stars: 2
language: "TypeScript"
last_updated: "2026-08-06T15:11:32Z"
discovered_at: "2026-08-06T15:20:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codex Free is a local MCP (Model Context Protocol) bridge server that enables ChatGPT Web Pro to interact with a user's machine by executing tools like file operations, shell commands, and git operations. It acts as an intermediary between ChatGPT and a local project directory via a public tunnel URL.

## Key Features
- Enables ChatGPT Web Pro to execute tools on a local machine via MCP protocol over Streamable HTTP
- Supports file operations (read/write/list/tree), shell commands, and git operations with path safety checks
- Configurable via CLI flags or a JSON config file for allowed commands, timeouts, and directory exclusions
- Secure by default with path traversal prevention and command allowlisting
- Exposes a local server via public tunnels (ngrok/Cloudflare) for remote ChatGPT access

## Why It Matters for RAG Builders
It bridges the gap between ChatGPT and local development environments, enabling AI-driven coding assistants to perform real-world file and system operations securely.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @modelcontextprotocol/sdk
Automated review identified **@modelcontextprotocol/sdk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ngrok/Cloudflare Tunnel
Automated review identified **ngrok/Cloudflare Tunnel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
