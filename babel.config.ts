module.exports = {
  presets: [
    ['@babel/preset-env', { targets: 'defaults' }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        fileName: true,
        minify: true,
        pure: true,
        transpileTemplateLiterals: true,
      },
    ],
  ],
}
