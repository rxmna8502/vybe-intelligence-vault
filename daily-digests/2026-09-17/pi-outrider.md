---
title: "raft-computer/pi-outrider"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Pi Agent Framework", "OpenAI Codex API", "State Machine Logic"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["model handoff", "agent orchestration", "pi framework", "multi-model workflow", "code execution"]
source: "https://github.com/raft-computer/pi-outrider"
stars: 0
language: "TypeScript"
last_updated: "2026-08-01T03:41:45Z"
discovered_at: "2026-08-01T03:43:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A thin protocol for model handoffs in the Pi coding agent, enabling a guide model to plan and initiate a task before switching to a cheaper executor model within the same session. The handoff preserves the full conversation trajectory, including exploration, tool results, and code modifications.

## Key Features
- Seamless guide-to-executor model switching within the same session
- Preserves full conversation trajectory (exploration, tool results, checklist) during handoff
- Configurable model pairs and thinking levels for guide/executor phases
- Strict handoff semantics with state machine validation and retry policies
- Ignored paths configuration to prevent unnecessary handoffs

## Why It Matters for RAG Builders
It enables efficient multi-model workflows in AI agents by allowing a high-capability guide model to plan and initiate tasks before handing off to a cost-effective executor model, preserving context and reducing operational costs.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pi Agent Framework
Automated review identified **Pi Agent Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Codex API
Automated review identified **OpenAI Codex API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### State Machine Logic
Automated review identified **State Machine Logic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
