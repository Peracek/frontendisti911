module.exports = {
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        trailingComma: 'all',
        parser: 'typescript',
      },
    },
  ],
}
