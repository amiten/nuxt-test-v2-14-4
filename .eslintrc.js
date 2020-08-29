module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'only-multiline'], // 末尾のセミコロンを許容する。
    'no-multiple-empty-lines': ['warn', { max: 1 }] // 空白行に対してwarnのみ出るようにする。
  },
}
