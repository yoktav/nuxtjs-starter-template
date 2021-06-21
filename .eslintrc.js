module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'],
  },
  overrides: [
    {
      files: ['.nuxt/*.js'],
    },
  ],
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
