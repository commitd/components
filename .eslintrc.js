module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    node: true
  },
  plugins: ['import'],
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:jsx-a11y/recommended', 'plugin:jest/recommended', 'plugin:jest/style', 'plugin:jest-dom/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'prettier', 'plugin:storybook/recommended'],
  settings: {
    react: {
      // to indicate latest version
      // https://github.com/yannickcr/eslint-plugin-react/blob/b8e91a571bc6b58cc3c78e9e62e8b60ecb45e233/lib/util/version.js#L48
      version: '999.999.999'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'import/default': 'off',
    'import/no-default-export': 'off',
    'react/display-name': 'off',
    'import/no-named-as-default-member': 'warn',
    // see for rational https://basarat.gitbook.io/typescript/main-1/defaultisbad
    'import/no-default-export': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-this-alias': 'warn'
  },
  overrides: [{
    // required because of https://github.com/yannickcr/eslint-plugin-react/issues/2353
    // otherwise get missing prop-types error in tsx files
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off'
    }
  }, {
    // allow node_module mocks to have default exports
    files: ['__mocks__/**/*'],
    rules: {
      'import/no-default-export': 'off'
    }
  }],
  ignorePatterns: ['dist', 'docs', 'example', 'node_modules', '**/*.stories.tsx', '**/*.test.ts']
};