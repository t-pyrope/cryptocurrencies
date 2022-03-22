module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'react-app',
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript',
    // 'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'import/extensions': 'off',
  },
};
