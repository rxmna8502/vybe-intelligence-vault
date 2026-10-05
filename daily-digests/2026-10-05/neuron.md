---
title: "kovartravis/neuron"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "SQLite", "Transformers.js", "Tree-Sitter", "ONNX", "Node.js", "CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["local-first", "agent memory", "markdown storage", "schema enforcement", "deterministic recall"]
source: "https://github.com/kovartravis/neuron"
stars: 2
language: "TypeScript"
last_updated: "2026-08-08T13:08:51Z"
discovered_at: "2026-08-08T13:49:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Neuron is a local-first CLI tool that provides persistent memory for AI coding agents by storing context as plain markdown files in the repository. It enforces schema validation to prevent malformed entries and integrates with agent harnesses to inject recall deterministically before prompts are processed.

## Key Features
- Stores agent memory as human-readable markdown files in `.neuron/` for easy inspection and version control
- Enforces schema validation via `neuron.yaml` to prevent malformed entries, ensuring data integrity
- Integrates with supported agent harnesses (e.g., Claude Code, OpenAI Codex CLI) to inject recall deterministically before prompts
- Uses SQLite for semantic search indexing while keeping markdown files as the authoritative source
- Provides deterministic architecture blueprints via Tree-Sitter parsing for codebase structure awareness

## Why It Matters for RAG Builders
It ensures AI coding agents have persistent, inspectable, and schema-compliant memory directly tied to the repository, reducing hallucinations and improving traceability for RAG systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Transformers.js
Automated review identified **Transformers.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-Sitter
Automated review identified **Tree-Sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
