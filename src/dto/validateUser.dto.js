import { badRequest } from '#Helpers/errors.js'
import { AMOUNT_OF_VALUES_LOGIN } from '#Config/constants.js'
import { validateEmail } from '#Schemas/email.schema.js'

export default async function validateUserDTO(req, res, next) {
	console.log('\n\n\nStay inside validateUserDTO 👍\n\n')
	const { body } = req
	if (Object.keys(body).length !== AMOUNT_OF_VALUES_LOGIN)
		return badRequest(res)
	const { email } = body
	/*
	validateEmail(email).then((check) => {
		console.log({ check })
		if (check === false) return res.status(401)
		next()
	})
	*/

	const emailChecked = await validateEmail(email)
	if (emailChecked === false) return res.status(401)
	next()
}
