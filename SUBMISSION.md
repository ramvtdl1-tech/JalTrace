# HackWithAditya submission preparation
Verified against https://hackathon.adityauniversity.in/rules and https://hackathon.adityauniversity.in/ on 24 November 2026 (IST).

## Project abstract
JalTrace helps campus maintenance teams turn scattered water-leak observations into an actionable repair queue. Students report a location, estimated flow and affected population. A transparent score prioritizes reports; staff can track repair progress and export records. The dashboard translates continuous-flow estimates into litres per day and aggregates active loss by campus zone. The prototype works without paid services and keeps demonstration records in the browser. It targets Smart Infrastructure & Water, with sustainability as a secondary benefit. It does not claim measured savings or AI capabilities.

## Rule alignment and remaining submission work
- Team: 4–6 currently enrolled college/university students in India; inter-college teams permitted. User-provided Devpost eligibility also requires age of majority. Confirm every member's eligibility; no team details have been invented.
- Level 1: free working-prototype screening. Official close: 25 November 2026, 11:59 PM IST. Devpost header shows 11:45 PM; submit before 11:45 PM to avoid that discrepancy.
- Include team/member details, this project statement, target users, abstract, project document, features/limitations, source files or GitHub URL with setup, technology/dependencies, and a demo video under five minutes.
- Prepare for the 10-minute ownership viva, commit-history review and similarity check. Preserve genuine commits; do not fabricate history. This generated code has not been committed or uploaded by the assistant.
- Screening: relevance 25%, prototype credibility 25%, 48-hour feasibility 20%, technical clarity 20%, originality 10%.
- Level 2: shortlisted students pay ₹800 each and upload documents by 9 December. Baseline freezes 17 December. On-site build runs 18–20 December, with two organizer-assigned mandatory enhancements and one optional stretch goal. Do not represent the suggestions below as assigned requirements.
- During Level 2 all members must be on site; remote contributors are excluded; mentors guide rather than write code; shared-repository commits are required at least every three hours. Disclose external code. Observe the official conduct and campus safety rules.
- Final judging: enhancement completion 35%, engineering 25%, user value 15%, creativity 10%, team understanding 10%, demo 5%.

## AI and external-code disclosure
Initial implementation and documentation were generated with OpenAI Codex before the event. Coding-assistant use must be disclosed. Team members must review, test and understand all submitted code. No third-party application libraries, remote APIs, external image assets or pretrained models are included. Runtime: Node.js; browser APIs and system fonts. No AI inference runs in this app. The official rules permit assistants and AI APIs with disclosure; code the team cannot explain is not accepted. Outside people or paid services building during the event are prohibited. Verify any updated policies before attending.

## Suggested team ownership (assign actual names)
For four members: interface/accessibility; data validation/calculation; deployment/quality; user research/submission/demo. With five or six members, split field measurement and persistence/authentication work. Everyone should explain the complete flow.

## Four-minute demo script
0:00–0:35: Explain the target user: campus maintenance staff receiving scattered leak reports. State that sample records are fictional.
0:35–1:20: Report a leak at a recognizable location, flow 5 L/min, affected people 200. Show the new queue entry and daily estimate (7,200 litres).
1:20–2:05: Explain the priority calculation and show zone/status/search filters.
2:05–2:45: Move the report to In progress, then Resolved. Explain why ongoing estimated loss decreases without claiming verified savings.
2:45–3:15: Refresh to demonstrate browser persistence and export CSV.
3:15–4:00: Explain architecture, single-device limitation, measurement uncertainty and next steps. Disclose Codex assistance and team review.

## Feasible enhancement plan
Adapt to the actual briefs. First implement a shared database with authenticated reporter/maintainer roles, server validation and an audit trail; next add field-verification evidence and duplicate detection. A stretch goal could be an offline submission queue with conflict handling. Do not collect personal data or claim a municipal pilot without authorization. Validate water estimates with timed container measurements and compare estimated versus measured flow. Keep actual outcome metrics separate from projections.

## Still required from your team
Actual names/eligibility, a reviewed repository and real commit history, hosted URL if desired, a recorded demo, and registration/submission by the team lead. No account registration, payment or Devpost submission has been performed. Browser visual QA and Docker execution have not been completed in this environment.
