# JalTrace
A working campus water-leak reporting and repair-prioritization prototype for HackWithAditya 2026, Smart Infrastructure & Water.

## Run and deploy
Requires Node.js 22+. No dependencies or API keys.

```sh
npm test
npm start
```
Open http://localhost:3000. Set PORT for your hosting platform. Deploy this directory as a Node service with `npm start`, or build the included Dockerfile. Health endpoint: `/health`. Alternatively publish `dist/` on any static host; it contains the entire application. No build step is required.

## Implemented
Create and validate leak reports; filter by search, zone and status; prioritize repairs; update repair status; calculate estimated daily loss; view zone totals; export CSV with formula escaping; restore sample data. Responsive layout, semantic controls and local browser persistence. Fictional seed reports are clearly labeled. No remote requests, keys or personal details required.

## Architecture and limitations
Vanilla ES modules separate pure validation and calculations from DOM rendering. Node serves an allowlisted set of static files with security headers. Data is stored in localStorage per browser and origin; this is a single-device prototype, not a shared municipal service. Clearing browser data removes reports. Export before switching origin. No authentication, cloud sync, sensors, machine learning, verified water savings or real deployment partnership is claimed. Priority is an explainable heuristic: 65×min(flow/20,1) + 35×min(people/500,1), rounded and capped at 100. Estimated daily loss = flow L/min × 1,440. On-site verification is necessary.

A real shared pilot needs authenticated roles, a database, server-side validation, audit logs, duplicate handling and field measurement calibration. These are future work, not implemented features.

## Verification
`npm test` checks invalid/nonfinite input, impact arithmetic, score caps, CSV quoting and spreadsheet formula mitigation. For a manual acceptance demo: add a report, filter it, mark it in progress, refresh to confirm persistence, resolve it and check active loss decreases, export CSV, cancel/reset demo. Test narrow screens and keyboard navigation before recording your demo.

See SUBMISSION.md for rule analysis, ownership disclosure and a demo script.

## Free hosting with GitHub Pages
The app has no OpenAI API or runtime dependency. Hosting uses GitHub Pages, available free for public repositories. In repository Settings → Pages, select Deploy from a branch, branch `gh-pages`, folder `/ (root)`, and Save. The deployment branch contains the contents of `dist/`. Site address after publishing: https://ramvtdl1-tech.github.io/JalTrace/ . To update it, publish the updated contents of `dist/` to `gh-pages`. Browser data from the former host does not migrate automatically; export CSV there first. The hackathon AI-assistance disclosure is retained as accurate provenance.
