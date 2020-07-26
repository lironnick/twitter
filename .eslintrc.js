module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'eslint-disable-next-line': 'off',
    'react/prop-types': 'off',
    'no-new': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_'
      }
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true
        }
      }
    ],
    'no-underscore-dangle': 'off',
    '@typescript-eslint/camelcase': 'off',
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
}
