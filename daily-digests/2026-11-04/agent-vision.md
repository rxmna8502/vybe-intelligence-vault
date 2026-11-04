---
title: "SIMON-WORLD/agent-vision"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "OpenAI API", "CLI", "Proxy Server", "Environment Variables", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["image-to-text", "AI agent adapter", "vision proxy", "text-only models", "local processing"]
source: "https://github.com/SIMON-WORLD/agent-vision"
stars: 0
language: "Python"
last_updated: "2026-08-04T10:33:39Z"
discovered_at: "2026-08-04T10:39:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agent-vision is a local proxy and CLI tool that enables text-only AI agents (e.g., DeepSeek V4 Flash in Codex) to process images by converting them to text via a free OpenAI-compatible vision API. It integrates seamlessly with agents like Codex, OpenCode, Claude Code, and Cursor without requiring GPUs or model swaps.

## Key Features
- Automatically converts pasted images to text for text-only AI models via a local proxy
- Supports multiple AI agents (Codex, OpenCode, Claude Code, Cursor) with auto-patching or guided setup
- Pluggable vision providers (Zhipu, DashScope, OpenAI, Gemini, Groq, etc.) with free tiers available
- Runtime management (start/stop/restart/status) and rollback capabilities for safe configuration changes
- Zero GPU or Ollama dependency; privacy-focused local processing with configurable endpoints

## Why It Matters for RAG Builders
It bridges the gap between text-only AI models and image inputs, enabling seamless integration of vision capabilities without changing workflows or incurring additional costs for model upgrades.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Proxy Server
Automated review identified **Proxy Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Environment Variables
Automated review identified **Environment Variables** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
