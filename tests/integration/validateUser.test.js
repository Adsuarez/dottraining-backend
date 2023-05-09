import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import request from 'supertest'
import { BASE_URL, API_USERS_LOGIN } from '#Tests/constants.js'

const nulishData = [undefined, null, '', 0]

describe(`POST ${API_USERS_LOGIN}`, async () => {
	describe('given incorrect information', async () => {
		it('should respond with 400 status code with nulish argument', async () => {
			for (const data of nulishData) {
				const response = await request(BASE_URL)
					.post(`${API_USERS_LOGIN}`)
					.send(data)
				assert.strictEqual(response.statusCode, 400)
			}
		})
	})
})
