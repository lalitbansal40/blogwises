import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Apply ESLint rules globally
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // ❌ disables explicit 'any' rule
      "@typescript-eslint/no-unused-vars": "warn", // or "off", if you want no warnings
    },
  },
];

export default eslintConfig;
