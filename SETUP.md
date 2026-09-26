# Setup Guide – Project Portfolio

This repository starts as a clean, rebranded shell. The full implementation lives in the upstream PnP sample. Follow these steps to bring the complete code here and apply the improvements.

## 1. Clone this repository

```bash
git clone https://github.com/sachchinannam404/Project-Portfolio.git
cd Project-Portfolio
```

## 2. Obtain the full upstream source

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/pnp/spfx-copilot-components.git /tmp/spfx-source
cd /tmp/spfx-source
git sparse-checkout set samples/zava-project-tracker
```

## 3. Copy the entire sample into this repo

```bash
# From the Project-Portfolio root
cp -a /tmp/spfx-source/samples/zava-project-tracker/. .
```

This brings in:
- `src/copilotComponents/` (all 31 components)
- `config/`, `scripts/`, `assets/`, `copilot/`, `teams/`, `ux-review/`
- Demo markdown files, validation scripts, and the ready-made `.sppkg`

## 4. Apply the rebrand improvements

```bash
# Update package name (already present in this repo’s package.json)
# If the copy overwrote it, restore the improved version or run:
sed -i 's/"name": "zava-project-tracker"/"name": "project-portfolio"/' package.json

# Optional: bulk replace branding (review the diff carefully)
# find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.md" \) \
#   -exec sed -i 's/zava-project-tracker/project-portfolio/g; s/Zava Project Tracker/Project Portfolio/g; s/Zava/Project Portfolio/g' {} +
```

## 5. Install and validate

```bash
npm install
npm run build          # runs full validation + package
npm start              # local workbench (set tenant domain in config/serve.json first)
```

## 6. Deploy for demo

Upload `sharepoint/solution/zava-project-tracker.sppkg` (or the rebuilt package) to your SharePoint App Catalog, then add the agent in Microsoft Copilot.

## Why this approach?

The original sample contains hundreds of files, binary assets, and a large `package-lock.json`. Shipping the entire tree through GitHub’s file API in one go is impractical. This repository therefore provides:

- Clear ownership and improved documentation
- Rebranded identity ready for your organization
- A one-command path to the complete, production-quality sample code
- Explicit next-step guidance for real data integration

Once the source is copied you have a fully working Project Portfolio agent that you can evolve independently.
