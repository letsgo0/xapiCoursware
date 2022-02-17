module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-multiple-template-root': 'off',
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "no-unreachable" : 'off',
    'no-mixed-spaces-and-tabs': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // "@typescript-eslint/no-this-alias": ['off'],
    // "no-this-alias": ['off'],
    // 'no-undef':'off'
  }
}
