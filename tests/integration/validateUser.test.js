import { describe, it, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { AssertionError } from 'node:assert'
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
	// before(() => console.log(`\n\n\n\n--------->🧪Testing Start👨‍🔬<---------`))
	// after(() => console.log(`\n\n\n\n--------->🧪Testing Finish👨‍🔬<---------`))
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
	describe.skip('given anauthorized email or password', async () => {
		it('should response 401 status code with nonexistig email-password in database', async () => {
			// for (const data of nonexistingUserInDB) {
			const response = await request(BASE_URL)
				.post(API_USERS_LOGIN)
				.send({ email: 'something', password: 'nothing' })

			if (response) return assert.strictEqual(response.statusCode, 401)
			assert.strictEqual(503, 401)
			// 	}
		})
	})
})

/*
Code to catch error "ECONNREFUSED" when server is not running Pending define if it uses
let responseStatus
				request(BASE_URL)
					.post(API_USERS_LOGIN)
					.send(data)
					.then((res) => {
						responseStatus = res.statusCode
						assert.strictEqual(responseStatus, 401)
						console.log('Finish THEN')
					})
					.catch((error) => {
						if (error.name !== AssertionError) {
							console.log(`\n\n\nCatching error----->${error}`)
							responseStatus = 503
							assert.strictEqual(responseStatus, 401)
						}
						console.log('Finish CATCH')
					}) */
