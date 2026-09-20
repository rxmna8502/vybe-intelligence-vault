---
title: "beacoder/gptel-agent-harness"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Emacs Lisp", "gptel", "nadvice", "compat"]
quality_score: 7
rag_relevance: 6
deployment_complexity: "Low"
tags: ["agent supervision", "context management", "Emacs Lisp", "LLM reliability", "autonomous agents"]
source: "https://github.com/beacoder/gptel-agent-harness"
stars: 0
language: "Emacs Lisp"
last_updated: "2026-07-12T15:56:03Z"
discovered_at: "2026-07-12T15:58:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight Emacs Lisp harness for enhancing the reliability of gptel agent sessions by adding completion verification and context supervision to prevent premature termination and manage long-running agent workflows.

## Key Features
- Completion supervision to prevent premature agent termination by verifying task completion before allowing FSM transitions to DONE/ERRS states
- Context supervision that monitors and compacts context usage to avoid exceeding model window limits
- Configurable nudging mechanism to prompt agents for verification of incomplete tasks
- Integration with gptel agent FSM and request functions via advice-based extensions
- Support for model-specific context window sizes and custom compaction prompts

## Why It Matters for RAG Builders
It ensures AI agents complete tasks reliably by verifying completion and managing context, reducing failures in long-running autonomous workflows.

## Tech Stack Deep Dive
### Emacs Lisp
Automated review identified **Emacs Lisp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gptel
Automated review identified **gptel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nadvice
Automated review identified **nadvice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### compat
Automated review identified **compat** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
