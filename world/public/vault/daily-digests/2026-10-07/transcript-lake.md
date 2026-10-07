---
title: "wisent-ai/transcript-lake"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "DuckDB", "NDJSON", "Parquet", "SQL"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["transcript aggregation", "privacy masking", "SQL query interface", "coding agents", "local data processing"]
source: "https://github.com/wisent-ai/transcript-lake"
stars: 1
language: "JavaScript"
last_updated: "2026-08-08T05:36:04Z"
discovered_at: "2026-08-08T05:46:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Transcript Lake aggregates and normalizes local coding-agent conversations into a privacy-masked, incrementally updated event archive accessible via SQL. It provides a provider-neutral transcript feed for operators and tools like Oko, eliminating the need for vendor-specific parsers.

## Key Features
- Incremental ingestion from multiple coding-agent transcript stores (Claude Code, Codex, OMP, Droid, Kimi)
- Provider-neutral NDJSON events with deterministic privacy masking before storage
- SQL query interface via DuckDB for cross-runtime analysis and evidence gathering
- Append-only daily partitions with Parquet compaction for efficient storage and querying
- Canonical export for Oko integration, enabling consistent indexing across runtimes

## Why It Matters for RAG Builders
Transcript Lake simplifies the integration of diverse coding-agent transcripts into RAG pipelines by providing a normalized, privacy-compliant, and queryable event archive.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NDJSON
Automated review identified **NDJSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Parquet
Automated review identified **Parquet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
