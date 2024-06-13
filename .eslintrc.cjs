/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:astro/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "object-curly-newline": "off",
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true },
    ],
    curly: ["error", "multi-line"],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:astro/recommended",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
};
