import { badRequest } from '#Helpers/errors.js'
import { AMOUNT_OF_VALUES_LOGIN } from '#Config/constants.js'
import { validateEmail } from '#Schemas/email.schema.js'

export function validateUserDTO(req, res, next) {
	console.log('\n\n\nInside validateUserDTO 👍\n\n')
	const { body } = req
	const { email } = body
	if (Object.keys(body).length !== AMOUNT_OF_VALUES_LOGIN)
		return badRequest(res)

	validateEmail(email).then((check) => {
		console.log({ check })
		if (check === false) return res.status(402).json()
		next()
	})
}
