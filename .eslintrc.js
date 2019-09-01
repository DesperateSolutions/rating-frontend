module.exports = {
  root: true,

  env: {
    node: true,
  },

  plugins: [
    'vuetify'
  ],

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
    },
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error',
  },

  parserOptions: {
    parser: 'babel-eslint',
  }
};
