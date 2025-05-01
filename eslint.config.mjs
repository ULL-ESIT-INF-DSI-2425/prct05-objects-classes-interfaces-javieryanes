// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";
// import { defineConfig } from "eslint/config";


//export default defineConfig([
//  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
//  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
//  tseslint.configs.recommended,
//]);

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsdoc from "eslint-plugin-tsdoc"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { tsdoc }
  },
  {
    rules: {
      "prefeer-const": "off",
      "tsdoc/syntax": "warn",
      "no-unused-vars": "warn"
    }
  },
  {
    ignores: [
      "eslint.config.mjs",
      "docs/*",
      "dist/*"
    ]    
  }
];
