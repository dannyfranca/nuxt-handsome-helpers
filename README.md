# @dannyfranca/nuxt-handsome-helpers

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Implementation of js-handsome-helpers for Nuxt

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `@dannyfranca/nuxt-handsome-helpers` dependency with `yarn` or `npm` to your project
2. Add `@dannyfranca/nuxt-handsome-helpers` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    'nuxt-handsome-helpers',

    // With options
    ['nuxt-handsome-helpers', {
      scope: 'helpers' // default: 'helpers'. Scope name injected (will generate this.$helpers)
    }]
  ]
}
```

## Methods
Check the methods in the [original repository](https://github.com/dannyfranca/js-handsome-helpers).

## License

[MIT License](./LICENSE)

Copyright (c) Danny França <contato@dannyfranca.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@dannyfranca/nuxt-handsome-helpers.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dannyfranca/nuxt-handsome-helpers

[npm-downloads-src]: https://img.shields.io/npm/v/@dannyfranca/nuxt-handsome-helpers/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dannyfranca/nuxt-handsome-helpers

[circle-ci-src]: https://img.shields.io/circleci/project/github/dannyfranca/nuxt-handsome-helpers.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/dannyfranca/nuxt-handsome-helpers

[codecov-src]: https://img.shields.io/codecov/c/github/dannyfranca/nuxt-handsome-helpers.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/dannyfranca/nuxt-handsome-helpers

[david-dm-src]: https://david-dm.org/dannyfranca/nuxt-handsome-helpers/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dannyfranca/nuxt-handsome-helpers

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
