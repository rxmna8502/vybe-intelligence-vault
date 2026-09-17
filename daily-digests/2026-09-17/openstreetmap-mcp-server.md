---
title: "cyanheads/openstreetmap-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "Nominatim API", "Overpass API", "Zod", "OpenTelemetry"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["Geocoding", "Spatial Queries", "OpenStreetMap", "MCP Server", "Agent Integration"]
source: "https://github.com/cyanheads/openstreetmap-mcp-server"
stars: 4
language: "TypeScript"
last_updated: "2026-08-02T16:03:15Z"
discovered_at: "2026-08-02T16:11:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides geocoding, reverse geocoding, and spatial query capabilities against OpenStreetMap data. It enables agents to interact with OSM via tools like place search, nearby POI queries, and raw Overpass QL execution.

## Key Features
- 6 specialized tools for geocoding, reverse geocoding, and spatial queries (e.g., nearby POI search, bounding box queries, raw Overpass QL execution)
- Supports both STDIO and Streamable HTTP transport modes for MCP clients
- Built-in failover and rate-limiting for Overpass API endpoints to ensure reliability
- Structured error handling with actionable recovery hints and OSM attribution
- Modular architecture with pluggable storage backends and authentication options

## Why It Matters for RAG Builders
It provides essential geospatial data access and query capabilities for RAG systems, enabling accurate location-based context and spatial reasoning in AI applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nominatim API
Automated review identified **Nominatim API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Overpass API
Automated review identified **Overpass API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
