import { describe, it, before, after } from 'node:test'
import assert from 'node:assert/strict'
import request from 'supertest'
import {
	BASE_URL,
	API_USERS_LOGIN,
	nonexistingUserInDB,
} from '#Tests/constants.js'
import { jsonErrorResponse } from '#Config/constants.js'

const nulishData = [undefined, null, '', 0]
const wrongAmountOfValues = [
	{ email: 'something', password: 'empty', anotherValue: 'nothing' },
	{ email: 'something' },
	{ password: 'empty' },
	{},
]

describe(`POST ${API_USERS_LOGIN}`, async () => {
	before(() => console.log(`\n\n\n\n--------->🧪Testing Start👨‍🔬<---------`))
	after(() => console.log(`\n\n\n\n--------->🧪Testing Finish👨‍🔬<---------`))
	describe.skip('given incorrect information in body', async () => {
		it.skip('should respond with 400 status code with nulish data', async () => {
			for (const data of nulishData) {
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
				assert.strictEqual(response.statusCode, 400)
			}
		})
		it.skip('should respond with an error message within the JSON given nulish data', async () => {
			for (const data of nulishData) {
				console.log({ data })
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
					.send(data)
				assert.strictEqual(response.statusCode, 400)
			}
		})
	})
	describe('given anauthorized email or password', async () => {
		it('should response 401 status code with nonexistig email-password in database', async () => {
			for (const data of nonexistingUserInDB) {
				let connectionError = null
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
					.catch((error) => {
						connectionError = error
					})
				if (connectionError)
					return console.log(`\n\n\nCatching error----->${connectionError}`)
				assert.strictEqual(response.statusCode, 401)
			}
		})
	})
})

/*
Code to catch error "ECONNREFUSED" when server is not running Pending define if it uses
let response = {}
request(BASE_URL)
	.post(`${API_USERS_LOGIN}`)
	.send(data)
	.then((result) => {
		response = result
		console.log(`\n\n\n --------> ${response}`)
	})
	.catch((error) => {
		response = error
		console.log(`\n\n\n --------> ${response.code}`)
	})
*/
