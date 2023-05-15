import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { validatePassword } from '#Schemas/password.schema.js'

const nulishInformation = [undefined, null, '', 0]
const invalidType = [123, false, true, [], {}, Symbol]
const invalidFormat = [
	'q',
	'qw',
	'qwerty',
	'qwer1234',
	'1',
	'123',
	'12345678',
	'#',
	'$1234567',
]
const correctPassword = ['Qwer12345', '1234qweR', 'ZXCvb789', '$%&Qw123']

describe.skip('Testing -> Password Schema', async () => {
	describe('given an incorrect argument', async () => {
		it('should respond false with nulish argument', async () => {
			for (const information of nulishInformation) {
				const response = await validatePassword(information)
				assert.strictEqual(response, false)
			}
		})

		it('should respond false with invalid type argument', async () => {
			for (const information of invalidType) {
				const response = await validatePassword(information)
				assert.strictEqual(response, false)
			}
		})

		it('should respond false with invalid format', async () => {
			for (const information of invalidFormat) {
				const response = await validatePassword(information)
				assert.strictEqual(response, false)
			}
		})
	})

	describe('given a correct argument', async () => {
		it('should respond true with a correct argument', async () => {
			for (const information of correctPassword) {
				const response = await validatePassword(information)
				assert.strictEqual(response, true)
			}
		})
	})
})
