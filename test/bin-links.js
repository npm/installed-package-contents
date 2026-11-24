const t = require('tap')
const { mkdirSync, writeFileSync, symlinkSync, readdirSync, rmSync } = require('fs')
const { resolve, relative, dirname } = require('path')
const getContents = require('../')

const makePackage = (path, binPath, name = 'example') => {
  mkdirSync(path, { recursive: true })
  mkdirSync(binPath, { recursive: true })
  writeFileSync(resolve(path, 'package.json'), JSON.stringify({
    name,
    version: '1.0.0',
    bin: {
      live: 'live.js',
      dangling: 'removed.js',
      shims: 'shims.js',
      missing: 'not-installed.js',
    },
  }))
  writeFileSync(resolve(path, 'live.js'), '')
  symlinkSync(relative(binPath, resolve(path, 'live.js')), resolve(binPath, 'live'), 'file')
  symlinkSync(relative(binPath, resolve(path, 'removed.js')), resolve(binPath, 'dangling'), 'file')
  for (const binName of ['shims', 'shims.cmd', 'shims.ps1']) {
    writeFileSync(resolve(binPath, binName), '')
  }
  writeFileSync(resolve(binPath, 'unrelated'), '')
}

const expectedBins = ['dangling', 'live', 'shims', 'shims.cmd', 'shims.ps1']

for (const name of ['example', '@scope/example']) {
  t.test(`linked bins for ${name}`, async t => {
    const root = t.testdir({})
    const path = resolve(root, 'node_modules', name)
    const binPath = resolve(root, 'node_modules/.bin')
    makePackage(path, binPath, name)

    for (const depth of [0, 1, Infinity]) {
      const files = await getContents({ path, depth })
      t.same(files.filter(file => dirname(file) === binPath).sort(),
        expectedBins.map(binName => resolve(binPath, binName)).sort(),
        `includes existing bin entries at depth ${depth}, even if their target is missing`)
    }

    const files = await getContents({ path })
    files.forEach(file => rmSync(file, { recursive: true, force: true }))
    t.same(readdirSync(binPath), ['unrelated'], 'clearing package contents removes its dangling link')
  })
}

t.test('linked bins for bundled dependencies', async t => {
  const root = t.testdir({})
  const path = resolve(root, 'node_modules/parent')
  mkdirSync(path, { recursive: true })
  writeFileSync(resolve(path, 'package.json'), JSON.stringify({
    name: 'parent',
    dependencies: { example: '*' },
    bundleDependencies: ['example'],
  }))
  const binPath = resolve(path, 'node_modules/.bin')
  makePackage(resolve(path, 'node_modules/example'), binPath)

  for (const depth of [1, 2, Infinity]) {
    const files = await getContents({ path, depth })
    t.same(files.filter(file => dirname(file) === binPath).sort(),
      expectedBins.map(binName => resolve(binPath, binName)).sort(),
      `includes bundled bin entries at depth ${depth}, even if their target is missing`)
  }
})
