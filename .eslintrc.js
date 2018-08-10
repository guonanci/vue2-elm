module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: 'standard',
  // required to lint .vue files
  plugins: [
    'html'
  ],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'semi': [2, 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
