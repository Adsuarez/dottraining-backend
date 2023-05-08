import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { validateEmail } from '#Schemas/email.schema.js'

const nulishInformation = [undefined, null, '', 0]
const invalidType = [123, false, true, [], {}, Symbol]
const invalidFormat = [
	'@',
	'@.com',
	'#@example.com',
	'tester@%.com',
	'tester@example',
	'tester&example.com',
	'@example.com',
	'tester@@.com',
]

describe('given incorrect information', () => {
	it('should response false with nulish argument', async () => {
		for (const information of nulishInformation) {
			const response = await validateEmail(information)
			assert.strictEqual(response, false)
		}
	})

	it('should response false with invalid type', async () => {
		for (const information of invalidType) {
			const response = await validateEmail(information)
			assert.strictEqual(response, false)
		}
	})

	it('should response false with invalid format', async () => {
		for (const information of invalidFormat) {
			const response = await validateEmail(information)
			assert.strictEqual(response, false)
		}
	})
})
