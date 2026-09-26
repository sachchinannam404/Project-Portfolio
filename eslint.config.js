const { defineConfig } = require("eslint/config");
const spfxConfig = require("@microsoft/eslint-config-spfx");

module.exports = defineConfig([
  ...spfxConfig,
]);
