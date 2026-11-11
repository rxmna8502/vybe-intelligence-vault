---
title: "meta-taro/sshboard"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Tauri 2", "SvelteKit", "xterm.js", "russh", "russh-sftp", "Node.js", "pnpm", "Docker"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP", "SSH terminal", "SFTP client", "AI collaboration", "read-only operations"]
source: "https://github.com/meta-taro/sshboard"
stars: 0
language: "Rust"
last_updated: "2026-09-03T02:08:45Z"
discovered_at: "2026-09-03T02:18:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
sshboard is a Tauri-based desktop application that provides an MCP-compatible SFTP client and SSH terminal, enabling AI agents to view remote server files and command outputs alongside human users over a single SSH session. It focuses on read-only operations to safely integrate AI into traditional server maintenance workflows.

## Key Features
- Built-in MCP server for AI agent integration without separate processes
- Shared terminal and file panes between humans and AI over a single SSH session
- Read-only command execution with strict allowlist-based permissions via `readonly.toml`
- Cross-platform support for macOS and Windows with Tauri
- Minisign-verified updates and OS credential store integration for secure authentication

## Why It Matters for RAG Builders
It eliminates the need for humans to manually relay server state to AI agents during maintenance, enabling seamless AI-assisted troubleshooting without exposing servers to write operations.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri 2
Automated review identified **Tauri 2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SvelteKit
Automated review identified **SvelteKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### xterm.js
Automated review identified **xterm.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### russh
Automated review identified **russh** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### russh-sftp
Automated review identified **russh-sftp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
