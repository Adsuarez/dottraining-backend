import { isPasswordInDB } from '#Helpers/isPasswordInDB.js'

export const passwordSchema = {
	required: true,
	type: 'string',
	format: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
}

export const validatePassword = async (password, email) => {
	if (passwordSchema.required && !password) return false
	if (typeof passwordSchema.type !== typeof password) return false
	if (passwordSchema.format.test(password) !== true) return false
	const passwordCorrespondsEmail = await isPasswordInDB(password, email)
	// console.log({ passwordCorrespondsEmail })
	return true
}
