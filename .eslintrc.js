module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
    'plugin:prettier/recommended',
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': {
      tabWidth: 2,
      trailingComma: 'es5',
      singleQuote: true,
      printWidth: 120,
    }
  },

  parserOptions: {
    parser: 'babel-eslint',
  }
};
