---
title: "dhakarshailendra829/codefix-env"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Gymnasium", "FastAPI", "Docker", "AST (Abstract Syntax Tree)", "OS-level process isolation", "GitHub API"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["reinforcement learning", "code debugging", "sandboxed execution", "LLM agent training", "test-driven feedback"]
source: "https://github.com/dhakarshailendra829/codefix-env"
stars: 3
language: "Python"
last_updated: "2026-07-11T05:33:22Z"
discovered_at: "2026-07-11T05:39:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
CodeFix-Env is a sandboxed reinforcement learning environment designed for training and evaluating LLM agents on automated code debugging tasks. It provides a fast, verifiable feedback loop with secure execution isolation and dense reward shaping based on test-pass-rate deltas.

## Key Features
- Sandboxed execution with layered isolation (AST filtering, restricted builtins, OS-level process isolation)
- Dense reward shaping based on per-step test-pass-rate deltas and step penalties
- Task registry mined from real GitHub bug-fix pull requests for authenticity
- Gymnasium-style interface compatible with standard RL frameworks (PPO, GRPO, etc.)
- HTTP server mode for remote or multi-language client integration

## Why It Matters for RAG Builders
It provides a secure, scalable, and realistic environment for training LLM agents to autonomously debug and fix code, bridging the gap between static benchmarks and slow repository-scale evaluations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gymnasium
Automated review identified **Gymnasium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST (Abstract Syntax Tree)
Automated review identified **AST (Abstract Syntax Tree)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS-level process isolation
Automated review identified **OS-level process isolation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
