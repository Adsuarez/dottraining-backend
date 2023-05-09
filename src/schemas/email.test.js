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
const nonexistingEmailInDB = [
	'test@example.com',
	'admin@dot.com',
	'something@dottraining.com',
	'aprendiz@ejemplo.com',
	'aprendiz01@dottraining.com',
	'aprendiz02@ejemplo.com',
]
const existingEmail = ['admin@dottraining.com', 'aprendiz01@ejemplo.com']

describe.skip('given an incorrect argument', async () => {
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

describe.skip('given a correct argument', async () => {
	it('should respond true with existing email in database', async () => {
		for (const information of existingEmail) {
			const response = await validateEmail(information)
			assert.strictEqual(response, true)
		}
	})
})
