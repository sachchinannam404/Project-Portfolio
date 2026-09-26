# Project Portfolio

**Intent-driven Project & Portfolio management experiences for Microsoft 365 Copilot**

This repository is an improved, rebranded derivation of the excellent [Zava Project Tracker](https://github.com/pnp/spfx-copilot-components/tree/main/samples/zava-project-tracker) sample from the PnP SPFx Copilot Components repository.

## Summary

Project Portfolio demonstrates intent-driven UX inside Microsoft Copilot. Thirty independently routed operational Copilot Components answer personal delivery, project, portfolio, AI investment, capacity, submission, and approval intents. A catalog-driven capability explorer helps users discover them.

Inline dynamic UX is the primary experience: a project-health question renders evidence, a comparison renders aligned trade-offs, and a request renders an editable review flow. Operational components can expand into a shared full-screen workspace with **My Work**, **Project**, **Portfolio**, and **Decisions** dashboards. All data and confirmed actions are deterministic, offline, and sample-only.

## Improvements in this version

- **Rebranded** from Zava-specific naming to generic **Project Portfolio** for broader reuse.
- Cleaner package identity (`project-portfolio`).
- Streamlined README focused on quick start and architecture.
- Explicit attribution and license notes for the original PnP sample.
- Ready-to-fork structure with clear next steps for production hardening (real data sources, tenant validation, localization).
- Preserved the full architecture, 31 Copilot Components, validation scripts, and demo design from the upstream sample.

## Used SharePoint Framework Version

This sample targets the SPFx `1.24.0-beta.2` Copilot Component preview. Confirm the supported SPFx Copilot component version in your target tenant before production adoption.

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to the [Microsoft 365 developer program](https://developer.microsoft.com/microsoft-365/dev-program).

## Prerequisites

- Node.js `>=22.14.0 <23.0.0` for local development.
- A SharePoint app catalog and Microsoft Copilot access for deployment and tenant-host validation.
- No external API, Azure resource, or runtime network dependency is required for the sample data.
- For local Workbench testing, replace `{tenantDomain}` in `config/serve.json` with the target tenant domain.

## Quick Start – populate the full source

The upstream sample contains ~450 files (30+ Copilot Components, tests, assets, validation scripts). To bring the complete code into this repository:

```bash
# 1. Clone this improved repo
git clone https://github.com/sachchinannam404/Project-Portfolio.git
cd Project-Portfolio

# 2. Sparse-clone the original sample
git clone --depth 1 --filter=blob:none --sparse https://github.com/pnp/spfx-copilot-components.git /tmp/spfx-source
cd /tmp/spfx-source
git sparse-checkout set samples/zava-project-tracker

# 3. Copy everything into this repo (preserving history-free content)
cp -a samples/zava-project-tracker/. /path/to/Project-Portfolio/
cd /path/to/Project-Portfolio

# 4. Rebrand package identity
# Edit package.json → change "name": "project-portfolio"
# Search/replace remaining "zava-project-tracker" / "Zava" references as desired

npm install
npm run build
```

You can also download the [zava-project-tracker folder as a ZIP](https://github.com/pnp/spfx-copilot-components/tree/main/samples/zava-project-tracker) and extract it here.

Deploy the ready-made package from the original sample’s `sharepoint/solution/zava-project-tracker.sppkg` to your tenant app catalog for immediate testing.

### Local development after population

```bash
npm install
npm start
```

Add the generated agent to Microsoft Copilot and start with the conversation starters. Use the prompt catalog for deterministic routing checks.

## Features

- 30 purpose-designed operational Copilot Components + one capability explorer
- Information, review/decision, and request/submit operation models
- Shared responsive full-screen shell with four useful default dashboards
- Explicit Draft → Review → Confirm → session receipt workflows
- Typed invocation versioning and supported inline-to-full-screen context continuation
- Deterministic mock project/portfolio data, bundled personas, and no external writes
- Fluent UI v9, React 17, Griffel owner-document styling, and focused D3 / Vega visualizations
- Tenant-free UX review harness with responsive, dark, reduced-motion, and zoom evidence
- Optimized shared production bundle with generated plugin and package-output validation

## Data and safety

- Projects, people, financials, capacity, AI usage, risks, and approvals are deterministic mock data.
- Named people are standard fictional Microsoft 365 demo personas.
- Prompt values prefill or filter UX but never submit, approve, reject, assign, or write automatically.
- Confirmed sample actions persist only in browser-session state and can be reset from Decisions.
- No live Graph, SharePoint, Planner, Project, Fabric, finance, or AI-service call is made at runtime.

## Accessibility and responsive design

- Keyboard-accessible tabs, forms, queues, controls, and icon-button names
- Visible text/icon semantics accompany status colors
- Reduced-motion behavior and real 200% browser zoom validated in the tenant-free review harness
- Inline layouts validated at 340 px and 760 px; full-screen dashboards validated from 340 px through keynote width in light and dark themes

## Validation status (upstream)

- 168/168 tests pass with zero build warnings
- All 31 manifests, tools, schemas, registrations, and optional prompt properties validate
- Generated API plugin and final `.sppkg` pass automated output audits

## Demo materials (from upstream)

- [3-minute dynamic UX demo](https://github.com/pnp/spfx-copilot-components/blob/main/samples/zava-project-tracker/Zava-Project-Tracker-3-Minute-Demo.md)
- [10-minute business value demo](https://github.com/pnp/spfx-copilot-components/blob/main/samples/zava-project-tracker/Zava-Project-Tracker-10-Minute-Business-Demo.md)
- [5-minute technical demo](https://github.com/pnp/spfx-copilot-components/blob/main/samples/zava-project-tracker/Zava-Project-Tracker-5-Minute-Technical-Demo.md)
- [31-component demo prompt catalog](https://github.com/pnp/spfx-copilot-components/blob/main/samples/zava-project-tracker/Zava-Project-Tracker-Demo-Prompts.md)

## Attribution

Original sample: **Zava Project Tracker / Zava AI Project Portfolio Agent**  
Authors: Microsoft 365 & Power Platform Community (PnP)  
Source: https://github.com/pnp/spfx-copilot-components/tree/main/samples/zava-project-tracker

This repository rebrands and organizes that work for easier adoption as a generic Project Portfolio agent. All credit for the architecture, components, tests, and demo design belongs to the original authors.

## License

The original sample is provided under the terms of the PnP repository. This derivative follows the same spirit: code is provided **as-is** without warranty of any kind.

## Next steps for production

1. Replace mock data services with real Microsoft Graph / SharePoint / Planner / Project Online connectors.
2. Add proper authentication and least-privilege scopes.
3. Complete tenant CSP, high-contrast, and screen-reader validation.
4. Localize strings and support additional currencies / locales.
5. Add CI/CD (GitHub Actions or Azure DevOps) using the existing validation scripts.

---

**Sharing is caring.**
