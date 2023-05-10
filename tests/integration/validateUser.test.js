import { describe, it, before, after } from 'node:test'
import assert from 'node:assert/strict'
import request from 'supertest'
import { BASE_URL, API_USERS_LOGIN } from '#Tests/constants.js'
import { jsonErrorResponse } from '#Config/constants.js'

const nulishData = [undefined, null, '', 0]
/* const wrongAmountOfValues = [
	{
		email: '',
		password: '',
		anotherValue: '',
	},
	{
		email: '',
	},
	{
		password: '',
	},
] */
const invalidDataType = [
	5,
	true,
	false,
	Symbol,
	[],
	['testingItem'],
	{},
	{ testingKey: 'testingValue' },
]
describe(`POST ${API_USERS_LOGIN}`, async () => {
	before(() => console.log(`\n\n\n\n--------->🧪Testing Start👨‍🔬<---------`))
	after(() => console.log(`\n\n\n\n--------->🧪Testing Finish👨‍🔬<---------`))
	describe('given incorrect information in body', async () => {
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
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
				assert.deepStrictEqual(response.body, jsonErrorResponse[400])
			}
		})
		it('should respond with 400 status code given invalid data type', async () => {
			for (const data of invalidDataType) {
				const response = await request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
				assert.strictEqual(response.statusCode, 400)
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
