module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0, { ignore: true }],
    'react/jsx-props-no-spreading': 0,
    'no-alert': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 0,
  },
};
