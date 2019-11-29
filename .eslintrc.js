module.exports = {
  root: true,

  env: {
    node: true,
  },

  plugins: [
    'vuetify',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/prettier',
  ],
};
