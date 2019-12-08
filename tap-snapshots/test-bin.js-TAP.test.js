/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/bin.js TAP  > expect resolving Promise 1`] = `
Object {
  "code": 1,
  "signal": null,
  "stderr": "ERROR: no path provided\\nUsage:\\n  installed-package-contents <path> [-d<n> --depth=<n>]\\n\\nLists the files installed for a package specified by <path>.\\n\\nOptions:\\n  -d<n> --depth=<n>   Provide a numeric value (\\"Infinity\\" is allowed)\\n                      to specify how deep in the file tree to traverse.\\n                      Default=1\\n  -h --help           Show this usage information\\n",
  "stdout": "",
}
`

exports[`test/bin.js TAP -d0 node_modules/bundle-all > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/all\\nnode_modules/bundle-all\\n",
}
`

exports[`test/bin.js TAP -d0 node_modules/bundle-none > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/bundle-none\\nnode_modules/bundle-none\\n",
}
`

exports[`test/bin.js TAP -d0 node_modules/bundle-some > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/some\\nnode_modules/bundle-some\\n",
}
`

exports[`test/bin.js TAP -d0 node_modules/empty > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/empty\\n",
}
`

exports[`test/bin.js TAP -d0 node_modules/missing > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/missing\\n",
}
`

exports[`test/bin.js TAP -d0 node_modules/no-deps > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/no-deps\\n",
}
`

exports[`test/bin.js TAP -d0 node_modules/optional-only > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/optional-only\\n",
}
`

exports[`test/bin.js TAP -d1 node_modules/bundle-all > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/all\\nnode_modules/bundle-all/node_modules/.bin/bar\\nnode_modules/bundle-all/node_modules/.bin/foo\\nnode_modules/bundle-all/node_modules/.bin/quux\\nnode_modules/bundle-all/node_modules/@scope/baz\\nnode_modules/bundle-all/node_modules/@scope/quux\\nnode_modules/bundle-all/node_modules/bar\\nnode_modules/bundle-all/node_modules/foo\\nnode_modules/bundle-all/package.json\\n",
}
`

exports[`test/bin.js TAP -d1 node_modules/bundle-none > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/bundle-none\\nnode_modules/bundle-none/package.json\\n",
}
`

exports[`test/bin.js TAP -d1 node_modules/bundle-some > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/some\\nnode_modules/bundle-some/node_modules/.bin/foo\\nnode_modules/bundle-some/node_modules/@scope/baz\\nnode_modules/bundle-some/node_modules/foo\\nnode_modules/bundle-some/package.json\\n",
}
`

exports[`test/bin.js TAP -d1 node_modules/empty > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/empty\\n",
}
`

exports[`test/bin.js TAP -d1 node_modules/missing > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP -d1 node_modules/no-deps > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/no-deps/index.js\\nnode_modules/no-deps/package.json\\n",
}
`

exports[`test/bin.js TAP -d1 node_modules/optional-only > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/optional-only/node_modules/.bin/bar\\nnode_modules/optional-only/node_modules/.bin/foo\\nnode_modules/optional-only/node_modules/@scope/baz\\nnode_modules/optional-only/node_modules/@scope/quux\\nnode_modules/optional-only/node_modules/bar\\nnode_modules/optional-only/node_modules/foo\\nnode_modules/optional-only/package.json\\n",
}
`

exports[`test/bin.js TAP -d2 node_modules/bundle-all > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/all\\nnode_modules/bundle-all/node_modules/.bin/bar\\nnode_modules/bundle-all/node_modules/.bin/foo\\nnode_modules/bundle-all/node_modules/.bin/quux\\nnode_modules/bundle-all/node_modules/@scope/baz/package.json\\nnode_modules/bundle-all/node_modules/@scope/quux/package.json\\nnode_modules/bundle-all/node_modules/bar/package.json\\nnode_modules/bundle-all/node_modules/foo/package.json\\nnode_modules/bundle-all/node_modules/foo/xyz\\nnode_modules/bundle-all/package.json\\n",
}
`

exports[`test/bin.js TAP -d2 node_modules/bundle-none > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/bundle-none\\nnode_modules/bundle-none/package.json\\n",
}
`

exports[`test/bin.js TAP -d2 node_modules/bundle-some > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/some\\nnode_modules/bundle-some/node_modules/.bin/foo\\nnode_modules/bundle-some/node_modules/@scope/baz/package.json\\nnode_modules/bundle-some/node_modules/foo/package.json\\nnode_modules/bundle-some/node_modules/foo/xyz\\nnode_modules/bundle-some/package.json\\n",
}
`

exports[`test/bin.js TAP -d2 node_modules/empty > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/empty\\n",
}
`

exports[`test/bin.js TAP -d2 node_modules/missing > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP -d2 node_modules/no-deps > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/no-deps/index.js\\nnode_modules/no-deps/package.json\\n",
}
`

exports[`test/bin.js TAP -d2 node_modules/optional-only > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/optional-only/node_modules/.bin/bar\\nnode_modules/optional-only/node_modules/.bin/foo\\nnode_modules/optional-only/node_modules/@scope/baz/package.json\\nnode_modules/optional-only/node_modules/@scope/quux/package.json\\nnode_modules/optional-only/node_modules/bar/package.json\\nnode_modules/optional-only/node_modules/foo/package.json\\nnode_modules/optional-only/node_modules/foo/xyz\\nnode_modules/optional-only/package.json\\n",
}
`

exports[`test/bin.js TAP -dInfinity node_modules/bundle-all > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/all\\nnode_modules/bundle-all/node_modules/.bin/bar\\nnode_modules/bundle-all/node_modules/.bin/foo\\nnode_modules/bundle-all/node_modules/.bin/quux\\nnode_modules/bundle-all/node_modules/@scope/baz/package.json\\nnode_modules/bundle-all/node_modules/@scope/quux/package.json\\nnode_modules/bundle-all/node_modules/bar/package.json\\nnode_modules/bundle-all/node_modules/foo/package.json\\nnode_modules/bundle-all/node_modules/foo/xyz/abc\\nnode_modules/bundle-all/package.json\\n",
}
`

exports[`test/bin.js TAP -dInfinity node_modules/bundle-none > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/bundle-none\\nnode_modules/bundle-none/package.json\\n",
}
`

exports[`test/bin.js TAP -dInfinity node_modules/bundle-some > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/some\\nnode_modules/bundle-some/node_modules/.bin/foo\\nnode_modules/bundle-some/node_modules/@scope/baz/package.json\\nnode_modules/bundle-some/node_modules/foo/package.json\\nnode_modules/bundle-some/node_modules/foo/xyz/abc\\nnode_modules/bundle-some/package.json\\n",
}
`

exports[`test/bin.js TAP -dInfinity node_modules/empty > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/empty\\n",
}
`

exports[`test/bin.js TAP -dInfinity node_modules/missing > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP -dInfinity node_modules/no-deps > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/no-deps/index.js\\nnode_modules/no-deps/package.json\\n",
}
`

exports[`test/bin.js TAP -dInfinity node_modules/optional-only > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/optional-only/node_modules/.bin/bar\\nnode_modules/optional-only/node_modules/.bin/foo\\nnode_modules/optional-only/node_modules/@scope/baz/package.json\\nnode_modules/optional-only/node_modules/@scope/quux/package.json\\nnode_modules/optional-only/node_modules/bar/package.json\\nnode_modules/optional-only/node_modules/foo/package.json\\nnode_modules/optional-only/node_modules/foo/xyz/abc\\nnode_modules/optional-only/package.json\\n",
}
`

exports[`test/bin.js TAP -h > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "Usage:\\n  installed-package-contents <path> [-d<n> --depth=<n>]\\n\\nLists the files installed for a package specified by <path>.\\n\\nOptions:\\n  -d<n> --depth=<n>   Provide a numeric value (\\"Infinity\\" is allowed)\\n                      to specify how deep in the file tree to traverse.\\n                      Default=1\\n  -h --help           Show this usage information\\n",
}
`

exports[`test/bin.js TAP node_modules/bundle-all > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/all\\nnode_modules/bundle-all/node_modules/.bin/bar\\nnode_modules/bundle-all/node_modules/.bin/foo\\nnode_modules/bundle-all/node_modules/.bin/quux\\nnode_modules/bundle-all/node_modules/@scope/baz\\nnode_modules/bundle-all/node_modules/@scope/quux\\nnode_modules/bundle-all/node_modules/bar\\nnode_modules/bundle-all/node_modules/foo\\nnode_modules/bundle-all/package.json\\n",
}
`

exports[`test/bin.js TAP node_modules/bundle-none > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/bundle-none\\nnode_modules/bundle-none/package.json\\n",
}
`

exports[`test/bin.js TAP node_modules/bundle-some > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/.bin/some\\nnode_modules/bundle-some/node_modules/.bin/foo\\nnode_modules/bundle-some/node_modules/@scope/baz\\nnode_modules/bundle-some/node_modules/foo\\nnode_modules/bundle-some/package.json\\n",
}
`

exports[`test/bin.js TAP node_modules/empty > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/empty\\n",
}
`

exports[`test/bin.js TAP node_modules/missing > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "",
}
`

exports[`test/bin.js TAP node_modules/no-deps > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/no-deps/index.js\\nnode_modules/no-deps/package.json\\n",
}
`

exports[`test/bin.js TAP node_modules/optional-only > expect resolving Promise 1`] = `
Object {
  "code": 0,
  "signal": null,
  "stderr": "",
  "stdout": "node_modules/optional-only/node_modules/.bin/bar\\nnode_modules/optional-only/node_modules/.bin/foo\\nnode_modules/optional-only/node_modules/@scope/baz\\nnode_modules/optional-only/node_modules/@scope/quux\\nnode_modules/optional-only/node_modules/bar\\nnode_modules/optional-only/node_modules/foo\\nnode_modules/optional-only/package.json\\n",
}
`
