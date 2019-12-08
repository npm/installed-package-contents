const getContents = require('../')
const t = require('tap')

const {resolve} = require('path')
t.formatSnapshot = a => Array.isArray(a) ? a.sort() : a
t.cleanSnapshot = s => s.split(__dirname).join('{dir}')

const mkdirp = require('mkdirp').sync
const fixtures = resolve(__dirname, 'fixtures/node_modules')
// mkdirp these because we don't want to leave a .git-keep file in it,
// since the whole point is that the dirs are empty.
// no need to clean up, git will ignore it.
mkdirp(resolve(fixtures, 'empty'))
mkdirp(resolve(fixtures, 'no-deps/empty'))

const paths = [
  'bundle-all',
  'bundle-some',
  'bundle-none',
  'empty',
  'missing',
  'no-deps',
  'optional-only',
]

t.test('default depth', t => {
  t.plan(paths.length)
  paths.forEach(p => t.test(p, t =>
    t.resolveMatchSnapshot(getContents({ path: resolve(fixtures, p) }))))
})

t.test('depth:0', t => {
  t.plan(paths.length)
  paths.forEach(p => t.test(p, t =>
    t.resolveMatchSnapshot(getContents({
      path: resolve(fixtures, p),
      depth: 0,
    }))))
})

t.test('depth:1', t => {
  t.plan(paths.length)
  paths.forEach(p => t.test(p, t =>
    t.resolveMatchSnapshot(getContents({
      path: resolve(fixtures, p),
      depth: 1,
    }))))
})

t.test('depth:2', t => {
  t.plan(paths.length)
  paths.forEach(p => t.test(p, t =>
    t.resolveMatchSnapshot(getContents({
      path: resolve(fixtures, p),
      depth: 2,
    }))))
})

t.test('depth:Infinity', t => {
  t.plan(paths.length)
  paths.forEach(p => t.test(p, t =>
    t.resolveMatchSnapshot(getContents({
      path: resolve(fixtures, p),
      depth: Infinity,
    }))))
})
