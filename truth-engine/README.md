# 🛡️ The Anti-Slop AI Truth Engine & Reproducibility Standard (VRS)

> **"In the era of AI hype, code is only as real as its execution sandbox."**

The open-source AI ecosystem is currently plagued by **benchmark fraud, synthetic star farming, and abandoned wrappers**. Thousands of repositories claim to be "SOTA autonomous agents" or "Zero-shot revolutionary reasoning models", but:
- Fail to install due to unpinned or conflicting dependency hell.
- Contain empty stubs or mocked API calls disguised as proprietary models.
- Never release weights or valid endpoints despite claiming empirical superiority.
- Rot into abandonware within 3 weeks of going viral on social media.

**Vybe Intelligence Vault does not tolerate vaporware.**

The **Vybe Truth Engine** is our automated watchdog pipeline that stress-tests, reproduces, and verifies AI repositories before indexing them into the global knowledge graph.

---

## 🏛️ The 5 Pillars of the Vybe Reproducibility Standard (VRS v1.0)

Every AI candidate harvested or submitted to the vault is graded against five non-negotiable vectors (100-point composite index):

| Vector | Focus | Threshold |
|---|---|:---:|
| **1. Execution Sandbox** | Can the codebase install and execute its sample pipeline in an isolated clean Docker container in < 90s? | 25 pts |
| **2. Star Authenticity** | Fork-to-star ratio, contributor activity graphs, and commit entropy to filter out paid bot farms. | 20 pts |
| **3. Grounded Code vs Hype** | Static AST analysis detecting mocked responses, placeholder functions, and empty wrappers. | 25 pts |
| **4. Architectural Durability** | Clean separation of concerns, pinned lockfiles (`poetry.lock`, `package-lock.json`, `uv.lock`), zero deprecated dependencies. | 15 pts |
| **5. Interface Protocol** | Adherence to standard agent/LLM communication protocols (MCP, OpenAI format, vLLM, standard REST/stdio). | 15 pts |

---

## 🎖️ Official Verification Badges

Projects verified by the Vybe Truth Engine earn official reproducible status.

### 1. Reproducible Standard
For codebases verified to build and run cleanly out-of-the-box:
```markdown
[![Vybe Verified: Reproducible](https://img.shields.io/badge/VYBE%20AUDIT-REPRODUCIBLE-00f0ff?style=for-the-badge&logo=shield)](https://github.com/rxmna8502/vybe-intelligence-vault)
```
[![Vybe Verified: Reproducible](https://img.shields.io/badge/VYBE%20AUDIT-REPRODUCIBLE-00f0ff?style=for-the-badge&logo=shield)](https://github.com/rxmna8502/vybe-intelligence-vault)

### 2. SOTA Tier Gold (Score > 90)
For top 1% benchmarked architectural achievements:
```markdown
[![Vybe Tier: SOTA Gold](https://img.shields.io/badge/VYBE%20TIER-SOTA%20GOLD-ffd700?style=for-the-badge)](https://github.com/rxmna8502/vybe-intelligence-vault)
```
[![Vybe Tier: SOTA Gold](https://img.shields.io/badge/VYBE%20TIER-SOTA%20GOLD-ffd700?style=for-the-badge)](https://github.com/rxmna8502/vybe-intelligence-vault)

---

## 🔍 How to Run a Local Audit

You can audit any repository right from your terminal with one command:

```bash
npx vybe audit <owner/repo>
```

To submit your project for autonomous verification and indexing in the 3D graph, open an issue using the [Resource Suggestion Template](https://github.com/rxmna8502/vybe-intelligence-vault/issues).
