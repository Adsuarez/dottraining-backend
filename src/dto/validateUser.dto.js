import { badRequest, unauthorized } from '#Helpers/errors.js'
import { AMOUNT_OF_VALUES_LOGIN } from '#Config/constants.js'
import { validateEmail } from '#Schemas/email.schema.js'
import { validatePassword } from '#Schemas/password.schema.js'

export function validateUserDTO(req, res, next) {
	const { body } = req
	const { email, password } = body
	const amountInBody = Object.keys(body).length
	if (amountInBody !== AMOUNT_OF_VALUES_LOGIN) return badRequest(res)

	validateEmail(email).then((checkEmail) => {
		if (checkEmail === false) return unauthorized(res, 401)
		validatePassword(password, email).then((checkPassword) => {
			if (checkPassword === false) return unauthorized(res, 401)
			next()
		})
	})
}
