module.exports = {
  // TypeScript and JavaScript files
  "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],

  // JSON, Markdown, YAML files
  "*.{json,md,yml,yaml}": ["prettier --write"],

  // Package.json specifically
  "package.json": ["prettier --write"],
};
