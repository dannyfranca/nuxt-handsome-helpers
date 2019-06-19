import Vue from 'vue'

export default async function (ctx, inject) {
  const options = JSON.parse('<%= options %>')
  const { scope = 'helpers', proxy = true } = options
  let helpers
  
  if (proxy) {
    helpers = require('@dannyfranca/handsome-helpers/lib/proxyHelpers').default
  } else {
    helpers = require('@dannyfranca/handsome-helpers').default
  }
  
  Vue.prototype['$' + scope] = helpers
  inject(scope, helpers)
}
