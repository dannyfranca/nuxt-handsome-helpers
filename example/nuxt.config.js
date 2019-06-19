const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../') },
    ['../lib/module', {
      scope: 'helpers',
      proxy: true
    }]
  ],
  build: {
    extend: function (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
