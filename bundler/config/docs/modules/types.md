[@evmts/config](../README.md) / [Modules](../modules.md) / types

# Module: types

## Table of contents

### Type Aliases

- [CompilerConfig](types.md#compilerconfig)
- [ConfigFactory](types.md#configfactory)
- [DefineConfig](types.md#defineconfig)
- [DefineConfigErrorType](types.md#defineconfigerrortype)
- [ResolvedCompilerConfig](types.md#resolvedcompilerconfig)

## Type Aliases

### CompilerConfig

Ƭ **CompilerConfig**: `Object`

Configuration of the solidity compiler
When resolved with defaults it is a [ResolvedCompilerConfig](types.md#resolvedcompilerconfig)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `foundryProject?` | `boolean` \| `string` | If set to true it will resolve forge remappings and libs Set to "path/to/forge/executable" to use a custom forge executable |
| `libs?` | readonly `string`[] | Sets directories to search for solidity imports in Read autoamtically for forge projects if forge: true |
| `remappings?` | `ReadonlyRecord`\<`string`\> | Remap the location of contracts |

#### Defined in

[bundler/config/src/types.ts:11](https://github.com/evmts/evmts-monorepo/blob/main/bundler/config/src/types.ts#L11)

___

### ConfigFactory

Ƭ **ConfigFactory**: () => [`CompilerConfig`](types.md#compilerconfig)

#### Type declaration

▸ (): [`CompilerConfig`](types.md#compilerconfig)

##### Returns

[`CompilerConfig`](types.md#compilerconfig)

#### Defined in

[bundler/config/src/types.ts:31](https://github.com/evmts/evmts-monorepo/blob/main/bundler/config/src/types.ts#L31)

___

### DefineConfig

Ƭ **DefineConfig**: (`configFactory`: [`ConfigFactory`](types.md#configfactory)) => \{ `configFn`: (`configFilePath`: `string`) => `Effect`\<`never`, [`DefineConfigError`](../classes/defineConfig.DefineConfigError.md), [`ResolvedCompilerConfig`](types.md#resolvedcompilerconfig)\>  }

#### Type declaration

▸ (`configFactory`): `Object`

Creates an EVMts config
Takes a user provided configFactory

##### Parameters

| Name | Type |
| :------ | :------ |
| `configFactory` | [`ConfigFactory`](types.md#configfactory) |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `configFn` | (`configFilePath`: `string`) => `Effect`\<`never`, [`DefineConfigError`](../classes/defineConfig.DefineConfigError.md), [`ResolvedCompilerConfig`](types.md#resolvedcompilerconfig)\> |

**`Example`**

```ts
import { defineConfig } from 'evmts/config'
export default defineConfig({
	foundryProject: true,
		libs: ['libs/contracts'],
	})
```

#### Defined in

[bundler/config/src/types.ts:68](https://github.com/evmts/evmts-monorepo/blob/main/bundler/config/src/types.ts#L68)

___

### DefineConfigErrorType

Ƭ **DefineConfigErrorType**: `ValidateUserConfigError` \| `LoadFoundryConfigError`

#### Defined in

[bundler/config/src/types.ts:54](https://github.com/evmts/evmts-monorepo/blob/main/bundler/config/src/types.ts#L54)

___

### ResolvedCompilerConfig

Ƭ **ResolvedCompilerConfig**: `Object`

A fully resolved compiler config with defaults filled in
See [CompilerConfig](types.md#compilerconfig)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `foundryProject` | `boolean` \| `string` | If set to true it will resolve forge remappings and libs Set to "path/to/forge/executable" to use a custom forge executable |
| `libs` | readonly `string`[] | Sets directories to search for solidity imports in Read autoamtically for forge projects if forge: true |
| `remappings` | `ReadonlyRecord`\<`string`\> | Remap the location of contracts |

#### Defined in

[bundler/config/src/types.ts:37](https://github.com/evmts/evmts-monorepo/blob/main/bundler/config/src/types.ts#L37)
