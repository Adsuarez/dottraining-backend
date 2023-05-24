import { AMOUNT_OF_VALUES_LOGIN } from '#Config/constants.js'
import { badRequest, unauthorized } from '#Helpers/errors.js'
import { validateEmailToRegister } from '#Schemas/email.schema.js'
import { validatePasswordToRegister } from '#Schemas/password.schema.js'

export const validateNewUserDTO = (req, res, next) => {
	const { body } = req
	const { email, password } = body
	const amountInBody = Object.keys(body).length
	if (amountInBody !== AMOUNT_OF_VALUES_LOGIN) return badRequest(res)
	validateEmailToRegister(email).then((checkEmail) => {
		if (checkEmail === false) return unauthorized(res, 401)
		validatePasswordToRegister(password).then((checkPassword) => {
			if (checkPassword === false) return unauthorized(res, 401)
			next()
		})
	})
}
