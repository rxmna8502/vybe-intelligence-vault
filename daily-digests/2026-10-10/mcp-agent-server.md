---
title: "FlowMCP/mcp-agent-server"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Express.js", "MCP (Model Context Protocol)", "A2A (Agent-to-Agent) Protocol", "FlowMCP", "Anthropic SDK", "OpenRouter API", "JSON Schema"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP Server", "AI Agent Orchestration", "FlowMCP Integration", "A2A Protocol", "LLM Tool Calling"]
source: "https://github.com/FlowMCP/mcp-agent-server"
stars: 0
language: "TypeScript"
last_updated: "2026-07-12T14:43:41Z"
discovered_at: "2026-07-12T14:54:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-agent-server is an MCP-compatible server that integrates AI agent loops with FlowMCP schemas, enabling dynamic tool execution via LLM-powered agents. It supports both MCP and A2A protocols, allowing seamless integration with external APIs and agent-to-agent communication.

## Key Features
- MCP Server with StreamableHTTP transport and session-based interactions
- LLM Agent Loop with iterative tool calling via Anthropic SDK and OpenRouter
- Support for FlowMCP schemas as tool sources (in-process, no external server required)
- Optional A2A Adapter for agent-to-agent communication and discovery
- Configurable agent system prompts, models, and execution limits per tool

## Why It Matters for RAG Builders
It bridges MCP clients with dynamic AI agent loops, enabling RAG systems to leverage external APIs and tools through standardized protocols while maintaining flexibility in agent configuration.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express.js
Automated review identified **Express.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### A2A (Agent-to-Agent) Protocol
Automated review identified **A2A (Agent-to-Agent) Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FlowMCP
Automated review identified **FlowMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic SDK
Automated review identified **Anthropic SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter API
Automated review identified **OpenRouter API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
