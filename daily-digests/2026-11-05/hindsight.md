---
title: "gmassello/hindsight"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "React", "DataHub", "MCP (Model Context Protocol)", "Gemini/Anthropic/Bedrock LLMs", "Docker", "GraphQL", "TypeScript"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["DataHub integration", "Incident triage", "Automated root cause analysis", "Memory loop", "Postmortem generation"]
source: "https://github.com/gmassello/hindsight"
stars: 0
language: "Python"
last_updated: "2026-08-07T23:29:19Z"
discovered_at: "2026-08-07T23:36:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hindsight is an on-call agent for data platforms that automates incident triage by analyzing DataHub lineage, ranking blast radius, proposing root causes, and writing postmortems back into the catalog. It leverages past incidents to improve future investigations, creating a closed-loop memory system within DataHub.

## Key Features
- Multi-hop lineage traversal in both directions to compute blast radius and impact scores
- Deterministic phase pipeline with read-only investigation followed by grounded mutations
- Closed-loop memory system: postmortems written back to DataHub are retrieved in future incidents
- Human-in-the-loop approval for mutations with audit logging and rationale tracking
- Portable skill compatible with DataHub's official skills repository

## Why It Matters for RAG Builders
Hindsight transforms reactive incident response into a proactive, self-improving system by embedding memory directly into the data catalog, enabling faster and more accurate root cause analysis for future incidents.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DataHub
Automated review identified **DataHub** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini/Anthropic/Bedrock LLMs
Automated review identified **Gemini/Anthropic/Bedrock LLMs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
