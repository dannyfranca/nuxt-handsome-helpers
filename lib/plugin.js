const Helpers = require('@dannyfranca/handsome-helpers').default

export default async function (ctx, inject) {
  const options = JSON.parse('<%= options %>')
  const { scope = 'helpers' } = options
  
  inject(scope, Helpers)
}
