const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  let config
  if (isProduction) {
    config = merge(common, require('./webpack.prod.js'))
  } else {
    config = merge(common, require('./webpack.dev.js'))
  }
  return config
}
