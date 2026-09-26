# Configuration Reference – Project Portfolio

All configuration lives under the standard SPFx / Heft layout.

## Root-level

| File | Purpose |
|------|---------|
| `package.json` | Package identity (`project-portfolio`), scripts, dependencies, Node engine (`>=22.14.0 <23`) |
| `.yo-rc.json` | Yeoman / SPFx generator settings (library name, version 1.24.0-beta.2, component type) |
| `tsconfig.json` | TypeScript configuration (extends SPFx web-build-rig) |
| `eslint.config.js` | ESLint flat config (SPFx rules) |
| `.gitignore` / `.npmignore` | Ignore rules for build output, node_modules, etc. |

## `config/` directory

| File | Purpose |
|------|---------|
| `config.json` | **Main bundle definition**. Lists all 31 Copilot Component entry points + localized resource mappings. Single shared bundle. |
| `package-solution.json` | Solution packaging (name, GUID, version, feature, output path of `.sppkg`) |
| `copilot-agent.json` | Declarative agent definition – name, description, ordered list of component GUIDs that form the agent |
| `serve.json` | Local workbench settings (port 4321, HTTPS, initial Copilot Workbench page). Replace `{tenantDomain}`. |
| `rig.json` | Heft / SPFx web-build-rig profile |
| `typescript.json` | TypeScript compiler options for the rig |
| `sass.json` | Sass processing settings |
| `deploy-azure-storage.json` | Optional Azure storage deployment settings |
| `write-manifests.json` | Manifest writing configuration |

## Other notable locations

| Path | Purpose |
|------|---------|
| `src/copilotComponents/*/...manifest.json` | Per-component SPFx + Copilot manifests (id, alias, properties, tool schema) |
| `copilot/ai-plugin.json` | Generated / base API plugin metadata |
| `assets/sample.json` | Gallery / screenshot metadata used by validation scripts |
| `scripts/*.mjs` | Validation & generation scripts (`check:intents`, `check:gallery`, `check:generated-plugin`, etc.) |

## Key scripts (from `package.json`)

| Script | What it does |
|--------|--------------|
| `npm run build` | Full production gate: intent validation → mock-media check → gallery check → tests → package-solution → plugin + package audits |
| `npm start` | Local development (Heft) |
| `npm run start:ux-review` | Tenant-free UX review harness |
| `npm run check:*` | Individual validation steps |

## Node & SPFx requirements

- Node.js `>=22.14.0 <23.0.0`
- SPFx / Copilot Components `1.24.0-beta.2`
- React 17 + Fluent UI React v9
