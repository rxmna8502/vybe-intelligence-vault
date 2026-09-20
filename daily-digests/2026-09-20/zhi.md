---
title: "miruamel/zhi"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun Runtime", "Zig (WASM)", "Node.js (>=20)", "Git", "Doxygen Universal (Documentation)", "JSDoc", "Vitest", "Mermaid (Diagrams)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["autonomous coding", "state machine", "multi-critic evaluation", "bounded recovery", "trunk-based development"]
source: "https://github.com/miruamel/zhi"
stars: 1
language: "TypeScript"
last_updated: "2026-09-03T21:56:27Z"
discovered_at: "2026-09-03T22:07:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Zhi is an autonomous terminal coding agent that automates the entire development cycle from goal intake to PR creation, using a state machine with 15 weighted critics and real toolchain verification (build, test, security scans). It operates as a Bun-native CLI with Zig WASM optimizations and enforces bounded recovery loops for reliability.

## Key Features
- Autonomous dev cycle with 8-state machine (INTAKE → PLAN → ISOLATE → EXECUTE → CRITIQUE → EVALUATE → COMMIT → PR_OPEN → CI_WATCH → DONE)
- 15 weighted critics (Security, Perf, Architecture, Testing, Legal, etc.) using Pareto frontier for decision-making
- Real toolchain integration (build, test, lint, secret scanning) with circuit breaker and bounded retries
- Bun-native runtime with Zig WASM hot paths for performance-critical operations
- Offline mode with optional GitHub PR automation (ZHI_AUTO_PR=1)

## Why It Matters for RAG Builders
Zhi provides a closed-loop autonomous coding agent with rigorous, measurable gates that ensure production-ready code, making it essential for RAG/AI stack builders seeking reliable, self-correcting automation.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun Runtime
Automated review identified **Bun Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zig (WASM)
Automated review identified **Zig (WASM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (>=20)
Automated review identified **Node.js (>=20)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Doxygen Universal (Documentation)
Automated review identified **Doxygen Universal (Documentation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSDoc
Automated review identified **JSDoc** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid (Diagrams)
Automated review identified **Mermaid (Diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
