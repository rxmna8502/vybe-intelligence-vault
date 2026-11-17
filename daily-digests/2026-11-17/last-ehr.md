---
title: "cbetz/last-ehr"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Next.js", "React", "FHIR (HL7 standard)", "Medplum", "HAPI FHIR", "Firely Server", "Aidbox", "Vercel AI SDK", "Docker", "Node.js", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["FHIR", "AI writeback", "approval-gated", "MCP server", "clinical agents"]
source: "https://github.com/cbetz/last-ehr"
stars: 3
language: "TypeScript"
last_updated: "2026-07-18T16:55:03Z"
discovered_at: "2026-07-18T16:56:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Last EHR is an open-source agent layer that adds human-approved AI writeback to FHIR-based applications. It acts as a boundary between AI agents and FHIR backends (e.g., Medplum, HAPI FHIR), enabling agents to propose clinical writes that are only persisted after explicit user approval.

## Key Features
- Human-in-the-loop approval for AI-generated clinical writes to ensure safety and accuracy
- Read-only MCP server for bounded FHIR chart access (search_patients, show_patient_info)
- Multi-backend support (Medplum, HAPI FHIR, Firely Server, Aidbox) for synthetic and real-world evaluation
- Zero-key local synthetic demo for immediate evaluation without credentials or model keys
- Modular adapter system for extending support to additional FHIR backends

## Why It Matters for RAG Builders
It provides a critical safety layer for AI agents interacting with clinical data, ensuring writes are human-approved before persistence, which is essential for RAG/AI stack builders in healthcare.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FHIR (HL7 standard)
Automated review identified **FHIR (HL7 standard)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Medplum
Automated review identified **Medplum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HAPI FHIR
Automated review identified **HAPI FHIR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firely Server
Automated review identified **Firely Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Aidbox
Automated review identified **Aidbox** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel AI SDK
Automated review identified **Vercel AI SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
