import { generateDtsBody } from './generateEvmtsBodyDts.js'
import { runSync } from 'effect/Effect'
import { describe, expect, it } from 'vitest'

describe('generateDtsBody', () => {
	const artifacts = {
		MyContract: {
			abi: [{ type: 'constructor', inputs: [], stateMutability: 'payable' }],
			userdoc: {
				kind: 'user',
				version: 1,
				notice: 'MyContract',
				methods: {
					'balanceOf(address)': {
						notice: 'Returns the amount of tokens owned by account',
					},
				},
			},
		},
		AnotherContract: {
			abi: [],
			userdoc: {
				kind: 'user',
				version: 1,
				notice: 'MyContract',
			},
		},
		MissingContract: {
			abi: [],
			userdoc: {
				kind: 'user',
				version: 1,
				notice: 'MyContract',
				methods: {
					'balanceOf(address)': {
						notice: 'Returns the amount of tokens owned by account',
					},
				},
			},
		},
	} as const

	it('should generate correct body with etherscan links', () => {
		expect(runSync(generateDtsBody(artifacts))).toMatchInlineSnapshot(`
			"const _abiMyContract = [\\"constructor() payable\\"] as const;
			const _nameMyContract = \\"MyContract\\" as const;
			/**
			 * MyContract EvmtsContract
			 * @notice MyContract
			 * @property balanceOf(address) Returns the amount of tokens owned by account
			 */
			export const MyContract: EvmtsContract<typeof _nameMyContract, typeof _abiMyContract>;
			const _abiAnotherContract = [] as const;
			const _nameAnotherContract = \\"AnotherContract\\" as const;
			/**
			 * AnotherContract EvmtsContract
			 * @notice MyContract
			 */
			export const AnotherContract: EvmtsContract<typeof _nameAnotherContract, typeof _abiAnotherContract>;
			const _abiMissingContract = [] as const;
			const _nameMissingContract = \\"MissingContract\\" as const;
			/**
			 * MissingContract EvmtsContract
			 * @notice MyContract
			 * @property balanceOf(address) Returns the amount of tokens owned by account
			 */
			export const MissingContract: EvmtsContract<typeof _nameMissingContract, typeof _abiMissingContract>;"
		`)
	})
})
