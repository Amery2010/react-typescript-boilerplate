const { override, addWebpackPlugin, fixBabelImports } = require('customize-cra')

module.exports = {
  webpack: override(
    // 按需加载 lodash
    fixBabelImports('lodash', {
      libraryDirectory: '',
      camel2DashComponentName: false,
    }),
  ),
}
