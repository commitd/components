module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: false,
    es6: true,
    jest: false,
  },
  ignorePatterns: [
    '**/node_modules/',
    '**/storybook-static',
    '**/build/',
    '**/coverage',
    '**/.eslintrc.js',
    '**/.eslintcache',
    '**/setupTests.tsx',
    '**/package-lock.json',
    '**/*.spec.ts',
    '**/*.test.ts*',
    '**/*.stories.tsx',
    '**/*.cy.js',
    '**/*.cy.ts',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: '2020', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: [
    'import',
    '@typescript-eslint',
    'security-node',
    'security',
    'prettier',
  ],
  extends: [
    //'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:security-node/recommended',
    'plugin:security/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    typescript: {
      alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
    },
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-misused-promises': 'warn',
    'security-node/detect-unhandled-async-errors': 'warn',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'security/detect-object-injection': 'off',
    'turbo/no-undeclared-env-vars': [
      'off',
      // TODO: turn on with an allow list e.g.
      // {
      //   allowList: ["^ENV_[_A-Z]+$"],
      // },
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
