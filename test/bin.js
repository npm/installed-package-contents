const {spawn} = require('child_process')
const {resolve} = require('path')
const t = require('tap')
const fixtures = resolve(__dirname, 'fixtures')
const bin = require.resolve('../')
const run = args => new Promise((res, rej) => {
  const child = spawn(process.execPath, [bin, ...args], { cwd: fixtures })
  const stdout = []
  const stderr = []
  child.stdout.on('data', c => stdout.push(c))
  child.stderr.on('data', c => stderr.push(c))
  child.on('close', (code, signal) => {
    res({
      code,
      signal,
      stdout: Buffer.concat(stdout).toString('utf8'),
      stderr: Buffer.concat(stderr).toString('utf8'),
    })
  })
})

const mkdirp = require('mkdirp').sync
// mkdirp this because we don't want to leave a .git-keep file in it
// no need to clean up, git will ignore it.
mkdirp(resolve(fixtures, 'node_modules/empty'))

const paths = [
  'node_modules/bundle-all',
  'node_modules/bundle-some',
  'node_modules/bundle-none',
  'node_modules/empty',
  'node_modules/missing',
  'node_modules/no-deps',
  'node_modules/optional-only',
]


const cases = [
  ['-h'],
  [],
  ...paths.map(path => [path]),
  ...paths.map(path => ['-d0', path]),
  ...paths.map(path => ['-d1', path]),
  ...paths.map(path => ['-d2', path]),
  ...paths.map(path => ['-dInfinity', path]),
]

t.plan(cases.length)
t.jobs = cases.length
cases.forEach(args => t.test(args.join(' '), t =>
  t.resolveMatchSnapshot(run(args))))
