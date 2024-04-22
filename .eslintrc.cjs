/* eslint-env node */
module.exports = {
  root: true,
  ignorePatterns: [
    'index.html'
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
