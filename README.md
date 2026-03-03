# 🏥 HippocratAI

> *"First, do no harm. HippocratAI makes sure your code follows that oath too."*

HippocratAI is an open-source, AI-powered compliance reviewer built specifically for clinical software developers. It automatically reviews Pull Requests for regulatory compliance, medical research relevance, and interoperability standards — delivering a human-approved report directly in your GitHub workflow.

---

## The Problem

Clinical software developers sit at a brutal intersection — they write fast-moving code that must comply with HIPAA, FDA 21 CFR Part 11, FHIR, HL7, and IEC 62304. Today, cross-referencing code against regulations and medical research is almost entirely manual. It's slow, error-prone, and in healthcare, mistakes have patient consequences.

## The Solution

HippocratAI is a multi-agent AI pipeline that activates the moment a PR is opened. A team of specialized agents analyzes the code simultaneously — for clinical intent, regulatory compliance, interoperability conflicts, and relevant medical research. A human reviewer approves the report before it reaches the developer.

---

## How It Works
```
Developer opens PR
       ↓
GitHub Action triggers → sends PR diff to HippocratAI API
       ↓
Agent 1: Clinical Intent Analyzer
Agent 2: Regulatory Compliance Agent (HIPAA, FDA, FHIR, IEC 62304)
Agent 3: PubMed Research Agent
Agent 4: Standards Conflict Detector
Agent 5: Report Generator
       ↓
Human Approval Checkpoint (pipeline pauses)
       ↓
GitHub Poster → report lands in your PR
```

---

## Quick Setup

**Step 1 — Add the GitHub Action**

Copy the workflow file from `.github/workflows/hippocrat-review.yml` into your clinical repo.

**Step 2 — Add your secrets**

In your GitHub repo go to Settings → Secrets → Actions and add:

| Secret | Value |
|---|---|
| `HIPPOCRAT_API_URL` | Your Airia agent API endpoint |
| `HIPPOCRAT_API_KEY` | Your Airia API key |
| `GITHUB_PAT` | Your GitHub personal access token (repo scope) |

**Step 3 — Open a PR**

That's it. Open any Pull Request and HippocratAI will review it automatically.

---

## What You Get Back

Every PR gets a structured compliance report covering:

- **Clinical Context** — what the code is doing medically
- **Regulatory Findings** — HIPAA, FDA 21 CFR Part 11, FHIR R4, HL7, IEC 62304
- **Interoperability Check** — FHIR resource structure, HL7 messaging, clinical terminology
- **Research References** — relevant PubMed papers
- **Recommended Actions** — specific, actionable remediation steps
- **Overall Status** — APPROVED / REQUIRES_CHANGES / BLOCKED

---

## Contributing

HippocratAI is built to grow with the community. You can contribute by:

### Adding New Regulations
Add your country or domain-specific regulatory documents to the `knowledge-base/` folder and submit a PR. Follow the format in existing files.

### Supported Regulations (Current)
- HIPAA Security Rule (US)
- FDA 21 CFR Part 11 (US)
- HL7 FHIR R4
- IEC 62304
- GDPR Article 9 (EU)

### Wanted Contributions
- NAFDAC guidelines (Nigeria)
- MHRA guidelines (UK)
- TGA guidelines (Australia)
- CDSCO guidelines (India)
- Additional FHIR resource validators

---

## Built With

- [Airia](https://airia.ai) — Multi-agent orchestration platform
- [PubMed E-utilities API](https://www.ncbi.nlm.nih.gov/home/develop/api/) — Medical literature search
- [GitHub Actions](https://github.com/features/actions) — CI/CD integration
- GPT-4o — Clinical reasoning and compliance analysis

---

## Hackathon

Built for the [Airia AI Agents Hackathon](https://airia-hackathon.devpost.com/) — Track 2: Active Agents.

---

## License

MIT — free to use, modify, and distribute.
