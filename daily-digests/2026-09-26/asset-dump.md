---
title: "KieranCoppins/Asset-Dump"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Unreal Engine 5.7", "C++", "UExporter", "FExportObjectInnerContext", "Commandlet System"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Unreal Engine", "Asset Inspection", "Blueprint Analysis", "Commandlet", "Data Export"]
source: "https://github.com/KieranCoppins/Asset-Dump"
stars: 0
language: "C++"
last_updated: "2026-08-02T10:36:30Z"
discovered_at: "2026-08-02T10:41:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Editor-only Unreal Engine plugin that exports `.uasset` packages to human-readable text via a commandlet, enabling inspection of Blueprint, State Tree, and other asset contents without opening the editor UI. Uses Unreal's native text-export pipeline with noise reduction for cleaner output.

## Key Features
- Exports `.uasset` packages to structured, human-readable text via Unreal's native `UExporter` pipeline
- Removes redundant/cosmetic noise (e.g., `SKEL_*` classes, default pin properties, GUID aliases) for cleaner output
- Provides distinct exit codes for detailed failure analysis (e.g., missing asset, partial export)
- Integrates with Unreal's commandlet system for scripted automation
- Ships with a ready-made Claude Code skill for agent-driven usage

## Why It Matters for RAG Builders
It enables AI agents and developers to programmatically inspect Unreal Engine assets without editor UI access, facilitating automated analysis, debugging, and RAG pipeline integration for game development workflows.

## Tech Stack Deep Dive
### Unreal Engine 5.7
Automated review identified **Unreal Engine 5.7** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C++
Automated review identified **C++** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UExporter
Automated review identified **UExporter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FExportObjectInnerContext
Automated review identified **FExportObjectInnerContext** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Commandlet System
Automated review identified **Commandlet System** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
