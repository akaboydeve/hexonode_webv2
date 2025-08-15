// eslint.config.ts (or .js if you prefer)
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Keep Next.js recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Our overrides to silence the reported errors/warnings
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      // Allow plain quotes/apostrophes in JSX text
      "react/no-unescaped-entities": "off",

      // Silence unused imports/vars (icons like Globe, Lock, etc. and axios)
      // If you prefer to only ignore underscored vars, switch this to:
      // ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }]
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",

      // Don’t force let->const refactors
      "prefer-const": "off",

      // Allow `any` in TypeScript
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
