---
title: "webpro255/agentlock"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Ed25519", "FastAPI", "Flask", "MCP", "Autogen", "CrewAI", "LangChain"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["agent security", "pre-action authorization", "prompt injection defense", "provenance tracking", "LLM tool gating"]
source: "https://github.com/webpro255/agentlock"
stars: 17
language: "Python"
last_updated: "2026-07-17T10:42:54Z"
discovered_at: "2026-07-17T10:46:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AgentLock is a framework-agnostic pre-action authorization system for LLM agents that enforces security policies based on content provenance rather than content analysis. It prevents indirect prompt injection attacks by blocking tool calls that originate from untrusted sources, ensuring actions align with user intent.

## Key Features
- Provenance-based authorization: Blocks tool calls based on the lineage of content sources (authoritative, derived, or untrusted) rather than content analysis.
- Selective action-class gating (v1.4+): Allows fine-grained control over which tool classes are gated, balancing security and utility.
- Parameter lineage enforcement: Tracks and denies tool-call parameters that trace back to untrusted content.
- Deferred commit mechanism: Re-evaluates queued actions at the end of a turn against complete session provenance.
- Audit and verification tools: Includes action-class auditing and replay-based verification to ensure policy correctness.

## Why It Matters for RAG Builders
AgentLock provides a critical security layer for RAG and AI agent systems by preventing unauthorized tool calls that could result from indirect prompt injection attacks, ensuring actions are aligned with user intent and provenance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519
Automated review identified **Ed25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Flask
Automated review identified **Flask** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Autogen
Automated review identified **Autogen** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CrewAI
Automated review identified **CrewAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
