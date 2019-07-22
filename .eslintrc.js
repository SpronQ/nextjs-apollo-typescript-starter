module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "import/prefer-default-export": "warn",
    "import/order": [
      "error",
      { "newlines-between": "always-and-inside-groups" },
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"]
      }
    ],
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", "tsx"] }],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        bracketSpacing: true,
        jsxBracketSameLine: true
      }
    ]
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],

      parserOptions: {
        ecmaFeatures: { jsx: true }
      },

      rules: {
        // Prevent TypeScript-specific constructs from being erroneously flagged as unused
        "@typescript-eslint/no-unused-vars": "error",
        // Require PascalCased class and interface names
        "@typescript-eslint/class-name-casing": "error",
        // Require a specific member delimiter style for interfaces and type literals
        // Default Semicolon style
        "@typescript-eslint/member-delimiter-style": "error",
        // Require a consistent member declaration order
        "@typescript-eslint/member-ordering": "error",
        // Require consistent spacing around type annotations
        "@typescript-eslint/type-annotation-spacing": "error"
      }
    }
  ]
};
