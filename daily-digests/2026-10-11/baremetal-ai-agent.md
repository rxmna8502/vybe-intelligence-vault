---
title: "gcgarriga/baremetal-ai-agent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "httpx", "rich", "GitHub Models API", "pytest", "ruff"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Low"
tags: ["agent runtime", "tool-use loop", "raw LLM API", "inspectable agent", "educational"]
source: "https://github.com/gcgarriga/baremetal-ai-agent"
stars: 0
language: "Python"
last_updated: "2026-09-01T22:08:05Z"
discovered_at: "2026-09-01T22:18:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A minimalist Python framework-free agent runtime that demonstrates raw LLM API calls, tool-use loops, and inspectable agent behavior without relying on abstractions like LangChain or CrewAI. It focuses on transparency, safety, and educational value for understanding agent internals.

## Key Features
- Framework-free agent loop with explicit tool-use schema and raw API calls
- Inspectable by default with payload logging, trajectory export, and offline replay
- Safety features like path traversal protection, secret redaction, and confirmation gates for dangerous tools
- Minimalist design with only 3 core files defining the agent logic (agent.py, tools.py, client.py)
- Deterministic eval harness and streaming support for advanced use cases

## Why It Matters for RAG Builders
It provides a clear, minimal reference implementation of an agent loop and tool-use system, making it ideal for learning, debugging, and building custom agent frameworks without abstraction overhead.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rich
Automated review identified **rich** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Models API
Automated review identified **GitHub Models API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
