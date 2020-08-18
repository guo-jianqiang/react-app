const { override, fixBabelImports } = require('customize-cra')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'little-deer-ui',
    libraryDirectory: 'dist/lib',
    camel2DashComponentName: false
  }, 'little-deer-ui')
)