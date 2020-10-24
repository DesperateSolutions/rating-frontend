module.exports = {
  outputDir: 'docs',
  lintOnSave: true,
  assetsDir: '',
  runtimeCompiler: true,
  productionSourceMap: true,
  parallel: true,
  css: {
    sourceMap: true,
  },
  devServer: {
    proxy: {
      '/*': {
        target: 'https://glickorater.desperate.solutions',
      },
    },
  },
};
