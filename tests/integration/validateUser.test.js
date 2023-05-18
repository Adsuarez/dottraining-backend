import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import request from 'supertest'
import {
	BASE_URL,
	API_USERS_LOGIN,
	nonexistingUserInDB,
	existingEmailWithWrongPassword,
	existingUserInDB,
} from '#Tests/constants.js'
import { jsonErrorResponse } from '#Config/constants.js'

const nulishData = [undefined, null, '', 0]
const wrongAmountOfValues = [
	{ email: 'something', password: 'empty', anotherValue: 'nothing' },
	{ email: 'something' },
	{ password: 'empty' },
	{},
]

describe(`Testing -> POST ${API_USERS_LOGIN}`, async () => {
	describe('given incorrect information in body', async () => {
		it('should respond with 400 status code with nulish data', async () => {
			for (const data of nulishData) {
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
				assert.strictEqual(response.statusCode, 400)
			}
		})
		it('should respond with an error message within the JSON given nulish data', async () => {
			for (const data of nulishData) {
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
				assert.deepStrictEqual(response.body, jsonErrorResponse[400])
			}
		})
		it('should respond with 400 status code with wrong amount of values', async () => {
			for (const data of wrongAmountOfValues) {
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(JSON.stringify(data))
				assert.strictEqual(response.statusCode, 400)
			}
		})
	})
	describe('given unauthorized email or password', async () => {
		it('should response 401 status code with nonexistig email in database', async () => {
			for (const data of nonexistingUserInDB) {
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
				assert.strictEqual(response?.statusCode, 401)
			}
		})
		it('should response 401 status code with existing email in database but wrong password', async () => {
			for (const data of existingEmailWithWrongPassword) {
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
				assert.strictEqual(response?.statusCode, 401)
			}
		})
	})
	describe('given authorized email and password', async () => {
		it('should respond 202 status code with existing email and password', async () => {
			for (const data of existingUserInDB) {
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
				assert.strictEqual(response?.statusCode, 202)
			}
		})
	})
})
