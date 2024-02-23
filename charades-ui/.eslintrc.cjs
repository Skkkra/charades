module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react-refresh',
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'simple-import-sort',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'no-param-reassign': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'react/jsx-curly-newline': 0,
    'no-restricted-syntax': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/no-implied-eval': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/indent': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
