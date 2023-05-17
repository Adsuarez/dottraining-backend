import { describe, it, after } from 'node:test'
import assert from 'node:assert/strict'
import { validateEmail } from '#Schemas/email.schema.js'
import { closeDBConnections } from '#Helpers/closeDBConnections.js'
import { existingEmail, nonexistingEmailInDB } from '#Tests/constants.js'

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

describe.skip('Testing -> Email Schema', async () => {
	describe('given an incorrect argument', async () => {
		it('should respond false with nulish argument', async () => {
			for (const information of nulishInformation) {
				const response = await validateEmail(information)
				assert.strictEqual(response, false)
			}
		})

		it('should respond false with invalid type', async () => {
			for (const information of invalidType) {
				const response = await validateEmail(information)
				assert.strictEqual(response, false)
			}
		})

		it('should respond false with invalid format', async () => {
			for (const information of invalidFormat) {
				const response = await validateEmail(information)
				assert.strictEqual(response, false)
			}
		})
		it('should respond false with nonextisting email in database', async () => {
			for (const information of nonexistingEmailInDB) {
				const response = await validateEmail(information)
				assert.strictEqual(response, false)
			}
		})
	})
	after(async () => await closeDBConnections())
	describe('given a correct argument', async () => {
		it('should respond true with existing email in database', async () => {
			for (const information of existingEmail) {
				const response = await validateEmail(information)
				assert.strictEqual(response, true)
			}
		})
	})
})
