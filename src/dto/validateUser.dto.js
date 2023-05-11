import { badRequest, unauthorized } from '#Helpers/errors.js'
import { AMOUNT_OF_VALUES_LOGIN } from '#Config/constants.js'
import { validateEmail } from '#Schemas/email.schema.js'

export function validateUserDTO(req, res, next) {
	const { body } = req
	const { email } = body
	const amountInBody = Object.keys(body).length
	if (amountInBody !== AMOUNT_OF_VALUES_LOGIN) return badRequest(res)

	validateEmail(email).then((check) => {
		if (check === false) return unauthorized(res)
		next()
	})
}
