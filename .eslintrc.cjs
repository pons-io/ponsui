/* eslint-env node */
module.exports = {
  root: true,
  ignorePatterns: [
    'index.html'
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
