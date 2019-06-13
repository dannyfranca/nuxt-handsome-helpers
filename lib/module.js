const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['nuxt-handsome-helpers'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-handsome-helpers.js',
    options: JSON.stringify(options)
  })
}

module.exports.meta = require('../package.json')
