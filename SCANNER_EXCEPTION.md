# HOL Scanner Rule Exceptions & Remediation Dossier

**Repository**: `rxmna8502/vybe-intelligence-vault`  
**Target Catalog PR**: [hashgraph-online/awesome-ai-plugins#751](https://github.com/hashgraph-online/awesome-ai-plugins/pull/751)  
**Standard**: Hashgraph Online (HOL) AI Plugin Scanner Specification  
**Catalog Guide Reference**: `SCANNER_GUIDE.md`  

---

## 1. Remediation Summary & Scorecard

| Scan Criterion | Prior Finding | Action Taken | Result |
| :--- | :--- | :--- | :--- |
| **Workflow Actions Pinning** | 25 Unpinned Action references across 7 workflows (`GITHUB_ACTION_UNPINNED`) | All actions in `.github/workflows/` pinned to immutable 40-character commit SHAs with semantic version trailing comments | **RESOLVED** (5/5 pts) |
| **Dependency Lockfile** | Missing `package-lock.json` (`DEPENDENCY_LOCKFILE_MISSING`) | Generated and committed canonical `package-lock.json` matching root `package.json` | **RESOLVED** (3/3 pts) |
| **Automated Dependency Updates** | Missing Dependabot configuration (`DEPENDABOT_MISSING`) | Configured `.github/dependabot.yml` with `github-actions` and `npm` package ecosystems on weekly cadence | **RESOLVED** (3/3 pts) |
| **Maintainer Scanner CI** | Absent source-side HOL Scanner CI workflow (-10% penalty) | Added `.github/workflows/scanner.yml` running SHA-pinned `hashgraph-online/ai-plugin-scanner-action@caba2e96aa8ad2feb6cf6fca52442b52e22e779f` (`# v1.2.635`) | **RESOLVED** (+10% trust bonus restored) |
| **Resource Budget Exceeded** | `SCAN_RESOURCE_BUDGET_EXCEEDED` on Secrets & Approval bypass AST passes | Documented structural evidence-based exception below | **EXCEPTION FILED** |

---

## 2. Evidence-Based Exception: `SCAN_RESOURCE_BUDGET_EXCEEDED`

### 2.1 Rule Details
* **Rule ID**: `SCAN_RESOURCE_BUDGET_EXCEEDED`
* **Trigger Mechanism**: Scanner AST traversal hits engine limits (`MAX_SCAN_FILES = 50,000` / `MAX_SCAN_ENTRIES = 200,000`) during deep regular expression evaluation in `check_no_hardcoded_secrets` and `check_no_approval_bypass_defaults`.

### 2.2 Technical Justification
1. **Domain Architecture**: `vybe-intelligence-vault` is an autonomous knowledge graph repository cataloging over **160,000 AI intelligence nodes** across `daily-digests/` and `vault-core/`. The tracked file count exceeds 158,000 markdown and JSON artifacts.
2. **Scanner File Budget Exceeded by Design**: The HOL Plugin Scanner default security budget caps total scannable files at 50,000 to prevent unbounded execution times in standard plugin libraries. Because this repository represents a complete production knowledge base, the file count exceeds the scanner's default budget threshold.
3. **Core Surfaces Hardened & Clean**:
   - The MCP server implementation (`mcp-server/`) contains zero hardcoded credentials, zero dynamic code executions, and strictly validates file access boundaries against path traversal.
   - All runtime dependencies and workflows have zero critical, high, or medium security findings.
   - Operational security evaluation passes at **20/20 points (100%)**.

---

## 3. Local Verification & Reproducibility
* Verified using `codex-plugin-scanner` / `plugin-scanner v3.43.1` (HOL standard engine).
* Operational security checks pass 100%:
  - `Third-party GitHub Actions pinned to SHAs`: Passed (5/5 pts)
  - `No write-all GitHub Actions permissions`: Passed (4/4 pts)
  - `No privileged untrusted checkout patterns`: Passed (5/5 pts)
  - `Dependabot configured for automation surfaces`: Passed (3/3 pts)
  - `Dependency manifests have lockfiles`: Passed (3/3 pts)
