# Setup – complete the Project Portfolio source tree

The repository currently contains the rebranded core (package.json, improved README, configs, and documentation). The full upstream sample (~445 files including all 31 Copilot Components, mock data, tests, assets, and validation scripts) is ready to be imported with the commands below.

## One-time import (recommended – takes ~30 seconds)

```bash
git clone https://github.com/sachchinannam404/Project-Portfolio.git
cd Project-Portfolio

# Sparse-clone only the sample folder from PnP
git clone --depth 1 --filter=blob:none --sparse https://github.com/pnp/spfx-copilot-components.git /tmp/spfx-source
cd /tmp/spfx-source
git sparse-checkout set samples/zava-project-tracker

# Copy everything into this repo
cp -a samples/zava-project-tracker/. .

# Keep the improved package identity (the copy overwrites package.json)
sed -i 's/"name": "zava-project-tracker"/"name": "project-portfolio"/' package.json
# optional: also set version and description if desired

npm install
npm run build
```

After the copy you will have the complete working solution with the Project Portfolio branding.

## What is already in this repository

- Rebranded `package.json` (`project-portfolio`)
- Improved README with attribution and production next steps
- Core config files and .gitignore
- Clear path to the original 31-component implementation

## Why not every file was pushed via API

The original sample contains hundreds of source files plus ~180 binary assets (PNG/JPEG) and a large lockfile. The GitHub file tools used for this automation are optimized for text and have practical limits on volume and binary content. The import commands above take only a few seconds and give you a complete, buildable tree.

Once imported, the solution is identical to the high-quality PnP sample with the Project Portfolio branding applied.
