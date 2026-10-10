---
title: "ANFAIA/ClimaSafe"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "XGBoost", "RandomForest", "LSTM", "MLflow", "Jupyter Notebook", "ERA5 (ECMWF)", "AEMET OpenData", "Open-Meteo API", "Open UV", "MoMo (ISCIII)", "Telegram Bot API", "Groq API", "Gemini API", "SHAP", "Conformal Prediction"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "High"
tags: ["early warning system", "heat and cold risk prediction", "machine learning ensemble", "meteorological data integration", "mortality risk modeling"]
source: "https://github.com/ANFAIA/ClimaSafe"
stars: 3
language: "Jupyter Notebook"
last_updated: "2026-08-07T14:11:16Z"
discovered_at: "2026-08-07T14:19:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ClimaSafe is an early-stage early warning system that predicts heat and cold risk levels by province and day using machine learning models (XGBoost, RandomForest, LSTM) trained on ERA5 meteorological data and MoMo mortality statistics. It prioritizes recall to avoid missing high-risk days, with deployment-ready pipelines and a Telegram bot for alerts.

## Key Features
- Multi-model ensemble (XGBoost for heat, RandomForest for cold, LSTM hybrid) with calibrated recall-focused performance
- Integration with ERA5, AEMET, Open-Meteo, and MoMo datasets for accurate risk estimation
- Temporal cross-validation and conformal prediction for uncertainty-aware predictions
- Telegram bot (spacebot) for real-time alerts and personalized risk communication
- SHAP explainability and km² risk mapping for interpretability and actionable insights

## Why It Matters for RAG Builders
ClimaSafe provides a critical early warning system for heat and cold risks, enabling proactive public health interventions and reducing mortality by leveraging AI-driven predictions from meteorological and mortality data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XGBoost
Automated review identified **XGBoost** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RandomForest
Automated review identified **RandomForest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSTM
Automated review identified **LSTM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MLflow
Automated review identified **MLflow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jupyter Notebook
Automated review identified **Jupyter Notebook** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ERA5 (ECMWF)
Automated review identified **ERA5 (ECMWF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AEMET OpenData
Automated review identified **AEMET OpenData** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open-Meteo API
Automated review identified **Open-Meteo API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open UV
Automated review identified **Open UV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MoMo (ISCIII)
Automated review identified **MoMo (ISCIII)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Groq API
Automated review identified **Groq API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHAP
Automated review identified **SHAP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Conformal Prediction
Automated review identified **Conformal Prediction** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
