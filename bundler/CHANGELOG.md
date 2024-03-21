# @evmts/bundler

## 1.0.0-next.0

### Major Changes

- [#485](https://github.com/evmts/evmts-monorepo/pull/485) [`570c4ed6`](https://github.com/evmts/evmts-monorepo/commit/570c4ed60d494f36f0839113507f3725e13dc933) Thanks [@roninjin10](https://github.com/roninjin10)! - Removed global Address config and external contracts from EVMts to simplify the API

### Minor Changes

- [#498](https://github.com/evmts/evmts-monorepo/pull/498) [`b6260909`](https://github.com/evmts/evmts-monorepo/commit/b6260909bd7f916789792d912d5b8dc665ca391b) Thanks [@roninjin10](https://github.com/roninjin10)! - Added persistent cache support. When passed in an optional cache object to the bundler solc results are persisted across compilations. This is important to add before EVMts vm is added as it will require bytecode. Compiling bytecode can be as much as 80 times slower. This will improve performance in following situations:

  1. Importing the same contract in multiple places. With the cache the contract will only be compiled once
  2. Compiling in dev mode. Now if contracts don't change previous compilations will be cached

  In future the cache will offer ability to persist in a file. This will allow the cache to persist across different processes

### Patch Changes

- [#548](https://github.com/evmts/evmts-monorepo/pull/548) [`c12528a3`](https://github.com/evmts/evmts-monorepo/commit/c12528a3b1c16ecb7a6b4e3487070feebd9a8c3e) Thanks [@roninjin10](https://github.com/roninjin10)! - Updated all packages to automatically generate up to date reference docs

- [#564](https://github.com/evmts/evmts-monorepo/pull/564) [`125e77d1`](https://github.com/evmts/evmts-monorepo/commit/125e77d164a498f0910af750d7dcdfa738ed6992) Thanks [@roninjin10](https://github.com/roninjin10)! - Updated @evmts/bundler to NodeNext for improved compatibility

- [#564](https://github.com/evmts/evmts-monorepo/pull/564) [`125e77d1`](https://github.com/evmts/evmts-monorepo/commit/125e77d164a498f0910af750d7dcdfa738ed6992) Thanks [@roninjin10](https://github.com/roninjin10)! - Migrated @evmts/bundler to js with jsdoc. This will create better stack traces and easier debugging for end users and maintainers of EVMts

- [#611](https://github.com/evmts/evmts-monorepo/pull/611) [`747728d9`](https://github.com/evmts/evmts-monorepo/commit/747728d9e909906812472404a5f4155730127bd0) Thanks [@roninjin10](https://github.com/roninjin10)! - Added --declaration-map to typescript build. This generates source maps so LSPs can point to the original javascript code rather than the generated .d.ts files

- [#492](https://github.com/evmts/evmts-monorepo/pull/492) [`2349d58c`](https://github.com/evmts/evmts-monorepo/commit/2349d58ca90bc78a98db6284b65d6dd329ac140d) Thanks [@roninjin10](https://github.com/roninjin10)! - Upgraded all NPM dependencies to latest

- [#499](https://github.com/evmts/evmts-monorepo/pull/499) [`bc4b5a4f`](https://github.com/evmts/evmts-monorepo/commit/bc4b5a4f92ff5e1bbf3dd6acd8b5a69b84ac603d) Thanks [@roninjin10](https://github.com/roninjin10)! - Added in memory caching to all EVMts bundlers and LSP

- Updated dependencies [[`32c7f253`](https://github.com/evmts/evmts-monorepo/commit/32c7f2537555380dd8c48883729add6ea658d52e), [`570c4ed6`](https://github.com/evmts/evmts-monorepo/commit/570c4ed60d494f36f0839113507f3725e13dc933), [`64a404ce`](https://github.com/evmts/evmts-monorepo/commit/64a404ce56305c126847be15cf42ab14bfb38764), [`6d6d4344`](https://github.com/evmts/evmts-monorepo/commit/6d6d43441278c1a23ea708eec18beb1060525a56), [`c12528a3`](https://github.com/evmts/evmts-monorepo/commit/c12528a3b1c16ecb7a6b4e3487070feebd9a8c3e), [`eee7e7f5`](https://github.com/evmts/evmts-monorepo/commit/eee7e7f58934c5cd7d70e3dfc704408a4dfbfda8), [`7065f458`](https://github.com/evmts/evmts-monorepo/commit/7065f4585a2173548abda55cdeaf3fbf1679f033), [`daf9c962`](https://github.com/evmts/evmts-monorepo/commit/daf9c962d6a3d2051ff9a14021ecb4f35e97e5da), [`747728d9`](https://github.com/evmts/evmts-monorepo/commit/747728d9e909906812472404a5f4155730127bd0), [`1d6716ac`](https://github.com/evmts/evmts-monorepo/commit/1d6716ac0a21672c4618b8b31098c8491b769363), [`cec0648a`](https://github.com/evmts/evmts-monorepo/commit/cec0648abc816b445d5ca8756d05cc63b59ac825), [`21ea35e3`](https://github.com/evmts/evmts-monorepo/commit/21ea35e3989ecf5d5eb2946eab96234d170fa9e5), [`2349d58c`](https://github.com/evmts/evmts-monorepo/commit/2349d58ca90bc78a98db6284b65d6dd329ac140d), [`beab81a5`](https://github.com/evmts/evmts-monorepo/commit/beab81a580d810a2969867ad08ef9ec12502a894), [`bc4b5a4f`](https://github.com/evmts/evmts-monorepo/commit/bc4b5a4f92ff5e1bbf3dd6acd8b5a69b84ac603d), [`738e2fe8`](https://github.com/evmts/evmts-monorepo/commit/738e2fe80a30b27a7d96fb3e42ae1ae604a34804), [`7065f458`](https://github.com/evmts/evmts-monorepo/commit/7065f4585a2173548abda55cdeaf3fbf1679f033)]:
  - @evmts/config@1.0.0-next.0
  - @evmts/ts-plugin@1.0.0-next.0
  - @evmts/rollup-plugin@1.0.0-next.0
  - @evmts/esbuild-plugin@1.0.0-next.0
  - @evmts/webpack-plugin@1.0.0-next.0
  - @evmts/rspack-plugin@1.0.0-next.0
  - @evmts/vite-plugin@1.0.0-next.0
  - @evmts/bun-plugin@1.0.0-next.0