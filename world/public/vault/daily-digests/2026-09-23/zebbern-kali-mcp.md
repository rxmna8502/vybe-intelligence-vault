---
title: "zebbern/zebbern-kali-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Flask", "Docker", "Model Context Protocol (MCP)", "Kali Linux", "HTTP/REST APIs", "Shell scripting"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["penetration testing", "AI agent integration", "MCP server", "Kali Linux", "security tools"]
source: "https://github.com/zebbern/zebbern-kali-mcp"
stars: 44
language: "Python"
last_updated: "2026-09-01T22:15:14Z"
discovered_at: "2026-09-01T22:19:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Docker-based Model Context Protocol (MCP) server that provides AI agents (e.g., GitHub Copilot, Claude) with direct access to a full Kali Linux penetration testing toolkit. The server runs a Flask API inside a Kali container, executing tools in an isolated environment based on AI agent requests.

## Key Features
- 17 MCP tool modules exposing 131+ Kali Linux tools (e.g., Nmap, SQLMap, Hydra, Metasploit) to AI agents
- Isolated Docker-based execution environment for secure tool invocation
- Flask API backend translating MCP tool calls into Kali tool executions
- Configurable tool profiles (e.g., `core`, `recon`, `web`, `ad`, `full`) for tailored AI agent interactions
- Support for VPN, reverse shells, network pivoting, and AD attack tools

## Why It Matters for RAG Builders
It enables AI agents to autonomously execute penetration testing and security assessment tools, bridging the gap between AI-driven automation and real-world security operations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Flask
Automated review identified **Flask** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kali Linux
Automated review identified **Kali Linux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST APIs
Automated review identified **HTTP/REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting
Automated review identified **Shell scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
