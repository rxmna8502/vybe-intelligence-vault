---
title: "DaizeDong/screen-vision"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "UI Automation (UIA)", "OCR (winocr, rapidocr-onnxruntime)", "Pillow", "ctypes", "MSS"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["desktop automation", "accessibility tree", "OCR fallback", "pixel-accurate UI", "Windows GUI"]
source: "https://github.com/DaizeDong/screen-vision"
stars: 0
language: "Python"
last_updated: "2026-07-17T08:01:59Z"
discovered_at: "2026-07-17T08:07:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A CLI toolkit for capturing desktop window screenshots and extracting structured UI elements (buttons, text) as pixel-accurate, clickable JSON. It prioritizes accessibility tree data (UIA) for reliability, with OCR as a fallback, and supports optional dry-run or actual clicks.

## Key Features
- Hybrid UI element detection using accessibility tree (UIA) with OCR fallback for gaps
- DPI-aware capture and coordinate mapping to avoid misalignment issues
- Read-only by default with optional dry-run and explicit click actions
- Stateless CLI scripts (probe, capture, click) for minimal resource overhead
- Supports native Windows apps, Electron, and WinUI with cross-platform OCR options

## Why It Matters for RAG Builders
It provides reliable, structured desktop UI data for RAG systems that need to interact with or analyze native applications beyond the browser.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UI Automation (UIA)
Automated review identified **UI Automation (UIA)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (winocr, rapidocr-onnxruntime)
Automated review identified **OCR (winocr, rapidocr-onnxruntime)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pillow
Automated review identified **Pillow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ctypes
Automated review identified **ctypes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MSS
Automated review identified **MSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
