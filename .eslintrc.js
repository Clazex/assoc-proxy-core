module.exports = {
	env: {
		"es6": true,
		"node": true
	},

	extends: [
		"eslint:recommended",
		"standard"
	],

	globals: {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},

	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 2018,
		sourceType: "module"
	},

	rules: {
		"generator-star-spacing": "off",
		"arrow-parens": "off",
		"one-var": "off",

		"import/first": "off",
		"import/named": "error",
		"import/namespace": "error",
		"import/default": "error",
		"import/export": "error",
		"import/extensions": "off",
		"import/no-unresolved": "off",
		"import/no-extraneous-dependencies": "off",
		"prefer-promise-reject-errors": "off",

		// Allow debugger during development only
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

		// Possible Errors
		"getter-return": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-constant-condition": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-parens": "error",
		"no-extra-semi": "error",
		"no-func-assign": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-misleading-character-class": "error",
		"no-obj-calls": "error",
		"no-prototype-builtins": "error",
		"no-regex-spaces": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"require-atomic-updates": "error",
		"use-isnan": "error",
		"valid-typeof": "error",

		// Best Practices
		curly: "error",
		"default-case": "error",
		"dot-location": ["error", "property"],
		"dot-notation": "error",
		"no-empty-function": "warn",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-fallthrough": "error",
		"no-floating-decimal": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "warn",
		"no-loop-func": "error",
		"no-multi-spaces": "error",
		"no-magic-numbers": "warn",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"wrap-iife": ["error", "inside"],
		yoda: "error",

		// Stylistic Issues
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": "error",
		"array-element-newline": ["error", "consistent"],
		"block-spacing": "error",
		"brace-style": [
			"error",
			"1tbs",
			{
				allowSingleLine: true
			}
		],
		camelcase: "error",
		"capitalized-comments": "warn",
		"comma-dangle": "error",
		"comma-spacing": "error",
		"comma-style": "error",
		"computed-property-spacing": "error",
		"eol-last": "error",
		"func-call-spacing": "error",
		"func-style": ["error", "declaration"],
		"implicit-arrow-linebreak": "error",
		indent: ["error", "tab"],
		"key-spacing": "error",
		"keyword-spacing": "error",
		"linebreak-style": "error",
		"lines-between-class-members": "error",
		"multiline-comment-style": "warn",
		"multiline-ternary": ["error", "always-multiline"],
		"newline-per-chained-call": [
			"error",
			{
				ignoreChainWithDepth: 3
			}
		],
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-mixed-spaces-and-tabs": "warn",
		"no-multiple-empty-lines": "warn",
		"no-tabs": "off",
		"no-trailing-spaces": "warn",
		"no-unneeded-ternary": "warn",
		"no-whitespace-before-property": "error",
		"object-curly-newline": [
			"warn",
			{
				minProperties: 1
			}
		],
		"object-curly-spacing": ["warn", "always"],
		"one-var-declaration-per-line": "error",
		"operator-assignment": "error",
		"operator-linebreak": ["warn", "before"],
		"quote-props": "off",
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"semi-spacing": "error",
		"semi-style": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"warn",
			{
				anonymous: "always",
				asyncArrow: "always",
				named: "never"
			}
		],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": ["warn", "always"],
		"switch-colon-spacing": "error",
		"template-tag-spacing": ["error", "always"],
		"unicode-bom": "error",
		"wrap-regex": "error"
	}
};
