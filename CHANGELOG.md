# Changelog

## [4.0.0](https://github.com/npm/installed-package-contents/compare/v3.0.0...v4.0.0) (2025-10-23)
### ⚠️ BREAKING CHANGES
* `@npmcli/installed-package-contents` now supports node `^20.17.0 || >=22.9.0`
### Bug Fixes
* [`5fc091d`](https://github.com/npm/installed-package-contents/commit/5fc091d8bdc32efc6bc909037aef22b1edf57532) [#101](https://github.com/npm/installed-package-contents/pull/101) align to npm 11 node engine range (@owlstronaut)
### Dependencies
* [`93a5316`](https://github.com/npm/installed-package-contents/commit/93a53167f2f90cc0336974708407f0ef2d5ca82a) [#101](https://github.com/npm/installed-package-contents/pull/101) `npm-normalize-package-bin@5.0.0`
* [`db873b6`](https://github.com/npm/installed-package-contents/commit/db873b6db12ff7f16499fd1c2950315b421792f7) [#101](https://github.com/npm/installed-package-contents/pull/101) `npm-bundled@5.0.0`
### Chores
* [`fe53276`](https://github.com/npm/installed-package-contents/commit/fe532764e3f73a4fbcc60d46b5c764f78b4c2d18) [#101](https://github.com/npm/installed-package-contents/pull/101) template-oss-apply (@owlstronaut)
* [`8dc53d8`](https://github.com/npm/installed-package-contents/commit/8dc53d8b383b5aac60efb5180f82d2bb10ebf952) [#93](https://github.com/npm/installed-package-contents/pull/93) postinstall workflow updates (#93) (@owlstronaut)
* [`5b2a8e5`](https://github.com/npm/installed-package-contents/commit/5b2a8e5f28e554cdba846c58b88cf0e28b737684) [#98](https://github.com/npm/installed-package-contents/pull/98) bump @npmcli/template-oss from 4.26.0 to 4.27.1 (#98) (@dependabot[bot], @npm-cli-bot)

## [3.0.0](https://github.com/npm/installed-package-contents/compare/v2.1.0...v3.0.0) (2024-09-25)
### ⚠️ BREAKING CHANGES
* `@npmcli/installed-package-contents` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`ea967c6`](https://github.com/npm/installed-package-contents/commit/ea967c6634cde5efa39827d135714c8dae3843aa) [#89](https://github.com/npm/installed-package-contents/pull/89) align to npm 10 node engine range (@reggi)
### Dependencies
* [`08fef39`](https://github.com/npm/installed-package-contents/commit/08fef397e6586bef50ae43285678450106e61ae1) [#89](https://github.com/npm/installed-package-contents/pull/89) `npm-normalize-package-bin@4.0.0`
* [`8ebdc76`](https://github.com/npm/installed-package-contents/commit/8ebdc7624ecaba7385871f487a74c7bc64d4efe2) [#89](https://github.com/npm/installed-package-contents/pull/89) `npm-bundled@4.0.0`
### Chores
* [`b4dd93c`](https://github.com/npm/installed-package-contents/commit/b4dd93ccd04dfda3a56a1b7fe7a8da4dfedc7dee) [#89](https://github.com/npm/installed-package-contents/pull/89) run template-oss-apply (@reggi)
* [`8c4baa0`](https://github.com/npm/installed-package-contents/commit/8c4baa02e2c0a20503887adc75783aa15505a757) [#86](https://github.com/npm/installed-package-contents/pull/86) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`09751b7`](https://github.com/npm/installed-package-contents/commit/09751b75f0b7ab9b320da1b60e44239b31474b13) [#74](https://github.com/npm/installed-package-contents/pull/74) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`da8cd83`](https://github.com/npm/installed-package-contents/commit/da8cd8398d838f50d2b8fbc91976ce35203b1cf4) [#87](https://github.com/npm/installed-package-contents/pull/87) postinstall for dependabot template-oss PR (@hashtagchris)
* [`698f46b`](https://github.com/npm/installed-package-contents/commit/698f46b47d7ccb8f6704c3011b6c01e3c7084b1e) [#87](https://github.com/npm/installed-package-contents/pull/87) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

## [2.1.0](https://github.com/npm/installed-package-contents/compare/v2.0.2...v2.1.0) (2024-04-23)

### Features

* [`a7f49ef`](https://github.com/npm/installed-package-contents/commit/a7f49ef75f92eb521bd1e05bd73a3f7b9403314b) [#72](https://github.com/npm/installed-package-contents/pull/72) remove fs.promises and separate bin script (@lukekarrys)

### Bug Fixes

* [`4327480`](https://github.com/npm/installed-package-contents/commit/43274801eafbcc5cff003865015508c3f9a2fa06) [#72](https://github.com/npm/installed-package-contents/pull/72) linting (@lukekarrys)

### Chores

* [`3813829`](https://github.com/npm/installed-package-contents/commit/3813829f1636fa1ee7e0cd43615d760434541112) [#73](https://github.com/npm/installed-package-contents/pull/73) auto publish (#73) (@lukekarrys)
* [`a9cf35e`](https://github.com/npm/installed-package-contents/commit/a9cf35eb306220659833c6048a763617b57d9609) [#72](https://github.com/npm/installed-package-contents/pull/72) remove fileTypesSupport test (@lukekarrys)
* [`e9bc949`](https://github.com/npm/installed-package-contents/commit/e9bc949f68c7524019f43155e3379199a7cd48f3) [#71](https://github.com/npm/installed-package-contents/pull/71) postinstall for dependabot template-oss PR (@lukekarrys)
* [`c5b6bfb`](https://github.com/npm/installed-package-contents/commit/c5b6bfb958ab0a97c871146fe7d4f4a9713b8222) [#71](https://github.com/npm/installed-package-contents/pull/71) bump @npmcli/template-oss from 4.21.3 to 4.21.4 (@dependabot[bot])

## [2.0.2](https://github.com/npm/installed-package-contents/compare/v2.0.1...v2.0.2) (2023-02-27)

### Bug Fixes

* [`4a51e49`](https://github.com/npm/installed-package-contents/commit/4a51e49e462055422492f693e20d4e07b0fdcb5b) add shell line so bin works (#37) (@ShamimIslam)

## [2.0.1](https://github.com/npm/installed-package-contents/compare/v2.0.0...v2.0.1) (2022-10-19)

### Bug Fixes

* [`48e60e0`](https://github.com/npm/installed-package-contents/commit/48e60e0c69702daef7efbdcb6ff5a28a965722f8) [#26](https://github.com/npm/installed-package-contents/pull/26) bin entry (#26) (@raineorshine)

## [2.0.0](https://github.com/npm/installed-package-contents/compare/v1.0.7...v2.0.0) (2022-10-14)

### ⚠️ BREAKING CHANGES

* `@npmcli/installed-package-contents` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`
* update engines to ^12.13.0 || ^14.15.0 || >=16.0.0

### Features

* [`73c0db2`](https://github.com/npm/installed-package-contents/commit/73c0db2f11bfbef5d89090e766896b861742d59a) [#14](https://github.com/npm/installed-package-contents/pull/14) postinstall for dependabot template-oss PR (@lukekarrys)
* [`7839326`](https://github.com/npm/installed-package-contents/commit/78393260db7c806d69087a174f2e393d9e961dc2) template-oss (@lukekarrys)

### Bug Fixes

* [`5ca1ba2`](https://github.com/npm/installed-package-contents/commit/5ca1ba291053cae7ec41031214762b484ddc0ebb) linting (@lukekarrys)

### Dependencies

* [`8c53d60`](https://github.com/npm/installed-package-contents/commit/8c53d60062e85163b1e42a5aadd8421a70fa4c61) [#22](https://github.com/npm/installed-package-contents/pull/22) bump npm-bundled from 2.0.1 to 3.0.0
* [`2241f43`](https://github.com/npm/installed-package-contents/commit/2241f432d1e6b93a802c7638029bd46c76041dae) [#21](https://github.com/npm/installed-package-contents/pull/21) bump npm-normalize-package-bin from 2.0.0 to 3.0.0
* [`d36ab64`](https://github.com/npm/installed-package-contents/commit/d36ab648eae592a66c1e7689a2983ab6bc244f8e) [#12](https://github.com/npm/installed-package-contents/pull/12) `npm-normalize-package-bin@2.0.0`
* [`2ff51f4`](https://github.com/npm/installed-package-contents/commit/2ff51f40e8a0391ef07b2d6b6629b1504f8f76cd) `npm-bundled@2.0.1`
