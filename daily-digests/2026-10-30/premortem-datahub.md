---
title: "prasadt1/premortem-datahub"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "DataHub", "SQL", "MCP (Model Context Protocol)", "GraphQL", "Apache-2.0"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["schema change", "data lineage", "impact analysis", "CI/CD", "DataHub integration"]
source: "https://github.com/prasadt1/premortem-datahub"
stars: 0
language: "Python"
last_updated: "2026-08-10T16:04:48Z"
discovered_at: "2026-08-10T16:06:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Premortem is a schema-change rehearsal agent for DataHub that predicts and mitigates breaking changes before merging. It analyzes SQL query history to forecast how consumers will break (HARD, SOFT, UNKNOWN, or CLEARED) and provides repairs, CI gates, and catalog write-backs to prevent production failures.

## Key Features
- Predicts breaking changes (HARD/SOFT/UNKNOWN/CLEARED) from SQL query history
- Automated repair generation for safe schema changes
- CI gate integration with exit codes for merge blocking
- Catalog write-back of forecasts and repairs via DataHub MCP
- Offline evaluation with 97% accuracy (39/40) and 100% HARD precision (15/15)

## Why It Matters for RAG Builders
It prevents production failures by proactively identifying and mitigating schema change risks before they reach users.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DataHub
Automated review identified **DataHub** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache-2.0
Automated review identified **Apache-2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
