/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/bin.js TAP  > expect resolving Promise 1`] = `
object {
  "code": 1,
  "signal": null,
  "stderr": string(
    error: no path provided
    usage:
      installed-package-contents <path> [-d<n> --depth=<n>]
    
    lists the files installed for a package specified by <path>.
    
    options:
      -d<n> --depth=<n>   provide a numeric value ("infinity" is allowed)
                          to specify how deep in the file tree to traverse.
                          default=1
      -h --help           show this usage information
    
  ),
  "stdout": "",
}
`

exports[`test/bin.js TAP -d0 node_modules/bundle-all > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/all
    node_modules/bundle-all
    
  ),
}
`

exports[`test/bin.js TAP -d0 node_modules/bundle-none > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/bundle-none
    node_modules/bundle-none
    
  ),
}
`

exports[`test/bin.js TAP -d0 node_modules/bundle-some > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/some
    node_modules/bundle-some
    
  ),
}
`

exports[`test/bin.js TAP -d0 node_modules/empty > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/empty/n",
}
`

exports[`test/bin.js TAP -d0 node_modules/missing > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/missing/n",
}
`

exports[`test/bin.js TAP -d0 node_modules/no-deps > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/no-deps/n",
}
`

exports[`test/bin.js TAP -d0 node_modules/optional-only > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/optional-only/n",
}
`

exports[`test/bin.js TAP -d1 node_modules/bundle-all > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/all
    node_modules/bundle-all/node_modules/.bin/bar
    node_modules/bundle-all/node_modules/.bin/foo
    node_modules/bundle-all/node_modules/.bin/quux
    node_modules/bundle-all/node_modules/@scope/baz
    node_modules/bundle-all/node_modules/@scope/quux
    node_modules/bundle-all/node_modules/bar
    node_modules/bundle-all/node_modules/foo
    node_modules/bundle-all/package.json
    
  ),
}
`

exports[`test/bin.js TAP -d1 node_modules/bundle-none > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/bundle-none
    node_modules/bundle-none/package.json
    
  ),
}
`

exports[`test/bin.js TAP -d1 node_modules/bundle-some > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/some
    node_modules/bundle-some/node_modules/.bin/foo
    node_modules/bundle-some/node_modules/@scope/baz
    node_modules/bundle-some/node_modules/foo
    node_modules/bundle-some/package.json
    
  ),
}
`

exports[`test/bin.js TAP -d1 node_modules/empty > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP -d1 node_modules/missing > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP -d1 node_modules/no-deps > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/no-deps/empty
    node_modules/no-deps/index.js
    node_modules/no-deps/package.json
    
  ),
}
`

exports[`test/bin.js TAP -d1 node_modules/optional-only > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/optional-only/node_modules/.bin/bar
    node_modules/optional-only/node_modules/.bin/foo
    node_modules/optional-only/node_modules/@scope/baz
    node_modules/optional-only/node_modules/@scope/quux
    node_modules/optional-only/node_modules/bar
    node_modules/optional-only/node_modules/foo
    node_modules/optional-only/package.json
    
  ),
}
`

exports[`test/bin.js TAP -d2 node_modules/bundle-all > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/all
    node_modules/bundle-all/node_modules/.bin/bar
    node_modules/bundle-all/node_modules/.bin/foo
    node_modules/bundle-all/node_modules/.bin/quux
    node_modules/bundle-all/node_modules/@scope/baz/package.json
    node_modules/bundle-all/node_modules/@scope/quux/package.json
    node_modules/bundle-all/node_modules/bar/package.json
    node_modules/bundle-all/node_modules/foo/package.json
    node_modules/bundle-all/node_modules/foo/xyz
    node_modules/bundle-all/package.json
    
  ),
}
`

exports[`test/bin.js TAP -d2 node_modules/bundle-none > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/bundle-none
    node_modules/bundle-none/package.json
    
  ),
}
`

exports[`test/bin.js TAP -d2 node_modules/bundle-some > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/some
    node_modules/bundle-some/node_modules/.bin/foo
    node_modules/bundle-some/node_modules/@scope/baz/package.json
    node_modules/bundle-some/node_modules/foo/package.json
    node_modules/bundle-some/node_modules/foo/xyz
    node_modules/bundle-some/package.json
    
  ),
}
`

exports[`test/bin.js TAP -d2 node_modules/empty > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP -d2 node_modules/missing > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP -d2 node_modules/no-deps > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/no-deps/empty
    node_modules/no-deps/index.js
    node_modules/no-deps/package.json
    
  ),
}
`

exports[`test/bin.js TAP -d2 node_modules/optional-only > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/optional-only/node_modules/.bin/bar
    node_modules/optional-only/node_modules/.bin/foo
    node_modules/optional-only/node_modules/@scope/baz/package.json
    node_modules/optional-only/node_modules/@scope/quux/package.json
    node_modules/optional-only/node_modules/bar/package.json
    node_modules/optional-only/node_modules/foo/package.json
    node_modules/optional-only/node_modules/foo/xyz
    node_modules/optional-only/package.json
    
  ),
}
`

exports[`test/bin.js TAP -dInfinity node_modules/bundle-all > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/all
    node_modules/bundle-all/node_modules/.bin/bar
    node_modules/bundle-all/node_modules/.bin/foo
    node_modules/bundle-all/node_modules/.bin/quux
    node_modules/bundle-all/node_modules/@scope/baz/package.json
    node_modules/bundle-all/node_modules/@scope/quux/package.json
    node_modules/bundle-all/node_modules/bar/package.json
    node_modules/bundle-all/node_modules/foo/package.json
    node_modules/bundle-all/node_modules/foo/xyz/abc
    node_modules/bundle-all/package.json
    
  ),
}
`

exports[`test/bin.js TAP -dInfinity node_modules/bundle-none > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/bundle-none
    node_modules/bundle-none/package.json
    
  ),
}
`

exports[`test/bin.js TAP -dInfinity node_modules/bundle-some > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/some
    node_modules/bundle-some/node_modules/.bin/foo
    node_modules/bundle-some/node_modules/@scope/baz/package.json
    node_modules/bundle-some/node_modules/foo/package.json
    node_modules/bundle-some/node_modules/foo/xyz/abc
    node_modules/bundle-some/package.json
    
  ),
}
`

exports[`test/bin.js TAP -dInfinity node_modules/empty > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP -dInfinity node_modules/missing > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP -dInfinity node_modules/no-deps > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/no-deps/empty
    node_modules/no-deps/index.js
    node_modules/no-deps/package.json
    
  ),
}
`

exports[`test/bin.js TAP -dInfinity node_modules/optional-only > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/optional-only/node_modules/.bin/bar
    node_modules/optional-only/node_modules/.bin/foo
    node_modules/optional-only/node_modules/@scope/baz/package.json
    node_modules/optional-only/node_modules/@scope/quux/package.json
    node_modules/optional-only/node_modules/bar/package.json
    node_modules/optional-only/node_modules/foo/package.json
    node_modules/optional-only/node_modules/foo/xyz/abc
    node_modules/optional-only/package.json
    
  ),
}
`

exports[`test/bin.js TAP -h > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    usage:
      installed-package-contents <path> [-d<n> --depth=<n>]
    
    lists the files installed for a package specified by <path>.
    
    options:
      -d<n> --depth=<n>   provide a numeric value ("infinity" is allowed)
                          to specify how deep in the file tree to traverse.
                          default=1
      -h --help           show this usage information
    
  ),
}
`

exports[`test/bin.js TAP node_modules/bundle-all > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/all
    node_modules/bundle-all/node_modules/.bin/bar
    node_modules/bundle-all/node_modules/.bin/foo
    node_modules/bundle-all/node_modules/.bin/quux
    node_modules/bundle-all/node_modules/@scope/baz
    node_modules/bundle-all/node_modules/@scope/quux
    node_modules/bundle-all/node_modules/bar
    node_modules/bundle-all/node_modules/foo
    node_modules/bundle-all/package.json
    
  ),
}
`

exports[`test/bin.js TAP node_modules/bundle-none > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/bundle-none
    node_modules/bundle-none/package.json
    
  ),
}
`

exports[`test/bin.js TAP node_modules/bundle-some > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/.bin/some
    node_modules/bundle-some/node_modules/.bin/foo
    node_modules/bundle-some/node_modules/@scope/baz
    node_modules/bundle-some/node_modules/foo
    node_modules/bundle-some/package.json
    
  ),
}
`

exports[`test/bin.js TAP node_modules/empty > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP node_modules/missing > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP node_modules/no-deps > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/no-deps/empty
    node_modules/no-deps/index.js
    node_modules/no-deps/package.json
    
  ),
}
`

exports[`test/bin.js TAP node_modules/optional-only > expect resolving Promise 1`] = `
object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": string(
    node_modules/optional-only/node_modules/.bin/bar
    node_modules/optional-only/node_modules/.bin/foo
    node_modules/optional-only/node_modules/@scope/baz
    node_modules/optional-only/node_modules/@scope/quux
    node_modules/optional-only/node_modules/bar
    node_modules/optional-only/node_modules/foo
    node_modules/optional-only/package.json
    
  ),
}
`
