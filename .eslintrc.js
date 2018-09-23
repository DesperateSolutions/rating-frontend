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
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': {
      'tabWidth': 2,
      'trailingComma': 'es5',
      'singleQuote': true,
      'printWidth': 80,
    }
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
