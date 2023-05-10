// const AMOUNT_OF_VALUES = 2

import { badRequest } from '#Helpers/errors.js'

export default function validateUserDTO(req, res, next) {
	console.log({ req })
	const { body } = req
	console.log({ body })
	if (Object.keys(body).length === 0) return badRequest(res)
	const { email, password } = body
	console.log({ email, password })
	next()
}
