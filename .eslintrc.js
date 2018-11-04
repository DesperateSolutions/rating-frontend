module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
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
      printWidth: 80,
    }
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
    'plugin:prettier/recommended'
  ]
};
