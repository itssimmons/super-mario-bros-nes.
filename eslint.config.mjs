import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: globals.browser } },
	...tseslint.configs.recommended,
	{
		rules: {
			"brace-style": ["error", "allman"],
			curly: ["error", "all"],
			"space-in-parens": ["error", "always"],
		},
	},
  {
    rules: {
      "@typescript-eslint/explicit-member-accessibility": "error"
    }
  }
];
