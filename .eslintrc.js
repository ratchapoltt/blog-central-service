const base = {
  plugins: ["prettier", "promise", "sonarjs", "unused-imports"],
  extends: [
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended-legacy",
    "plugin:unicorn/recommended"
  ],
  rules: {
    "sonarjs/no-identical-functions": "off",
    "unicorn/no-null": "off",
    "unicorn/no-static-only-class": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-string-raw": "off",
    "unicorn/prevent-abbreviations": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_"
      }
    ]
  }
};

const baseJS = {
  plugins: [...base.plugins],
  extends: [...base.extends, "eslint:recommended"],
  rules: {
    "no-unused-vars": "off",
    ...base.rules
  }
};

const baseTS = {
  plugins: [...baseJS.plugins, "@typescript-eslint/eslint-plugin"],
  extends: [...baseJS.extends, "plugin:@typescript-eslint/recommended"],
  rules: {
    ...baseJS.rules,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
};

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  overrides: [
    {
      files: ["*.js"],
      parserOptions: {
        ecmaVersion: 2022
      },
      plugins: baseJS.plugins,
      extends: baseJS.extends,
      rules: baseJS.rules
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "tsconfig.json",
        ecmaVersion: 2022,
        sourceType: "module"
      },
      plugins: baseTS.plugins,
      extends: baseTS.extends,
      rules: baseTS.rules
    },
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
      parserOptions: {
        jsonSyntax: "JSON"
      },
      extends: ["plugin:jsonc/recommended-with-json"],
      rules: {
        "jsonc/array-bracket-newline": "error",
        "jsonc/array-bracket-spacing": "error",
        "jsonc/array-element-newline": "error",
        "jsonc/comma-style": "error",
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": "error",
        "jsonc/no-irregular-whitespace": "error",
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": "error",
        "jsonc/object-curly-spacing": "error",
        "jsonc/object-property-newline": "error"
      }
    },
    {
      files: ["*.md"],
      parser: "eslint-plugin-markdownlint/parser",
      extends: ["plugin:markdownlint/recommended"]
    }
  ]
};
