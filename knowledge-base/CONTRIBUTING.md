# Contributing to HippocratAI Knowledge Base

The knowledge base is the regulatory brain of HippocratAI. It contains the documents that the Regulatory Compliance Agent queries when reviewing clinical code.

## How to Add a New Regulation

1. Create a new `.txt` file in this folder
2. Name it clearly: `[regulation-name]-[country/region].txt`
   - Example: `nafdac-guidelines-nigeria.txt`
   - Example: `mhra-guidelines-uk.txt`
3. Follow this format inside the file:
```
=== [REGULATION NAME] - [SECTION] ===
[Section content in plain, precise language]
Key requirements:
- Requirement 1
- Requirement 2
- Requirement 3
```

4. Submit a Pull Request with a brief description of what regulation you added and why it matters

## Current Files

| File | Regulation | Region |
|---|---|---|
| `regulatory-knowledge-base.txt` | HIPAA, FDA 21 CFR Part 11, FHIR R4, IEC 62304, GDPR Art. 9 | US / EU |

## Guidelines

- Use plain, precise language — the AI needs to reason from this text
- Include specific section numbers where possible
- Focus on technical requirements, not legal interpretation
- Keep each regulation section clearly separated with the `===` header format
```

Commit that, then we'll create one more file — a sample PR payload that developers can use to test HippocratAI in their own setup.

Click **"Add file" → "Create new file"** and type:
```
examples/sample-pr-payload.json

{
  "pr_title": "Add patient medication endpoint",
  "pr_description": "Adding a new REST endpoint to retrieve patient medication history from the database",
  "pr_diff": "+app.get('/api/patient/:id/medications', async (req, res) => {\n+  const patientId = req.params.id;\n+  const medications = await db.query('SELECT * FROM medications WHERE patient_id = ' + patientId);\n+  res.json(medications);\n+});",
  "repo_name": "your-org/your-clinical-repo",
  "pr_number": "1",
  "pr_url": "https://github.com/your-org/your-clinical-repo/pull/1",
  "author": "your-github-username",
  "github_token": "your-github-pat-token"
}
