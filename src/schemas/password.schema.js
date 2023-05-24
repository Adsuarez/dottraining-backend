import { isPasswordInDB } from '#Helpers/isPasswordInDB.js'

export const passwordSchema = {
	required: true,
	type: 'string',
	format: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
}

export const validatePassword = async (password, email) => {
	if (passwordSchema.required && !password) return false
	if (typeof passwordSchema.type !== typeof password) return false
	if (passwordSchema.format.test(password) === false) return false
	const passwordCorrespondsEmail = await isPasswordInDB(password, email)
	if (passwordCorrespondsEmail === false) return false
	return true
}

export const validatePasswordToRegister = async (password) => {
	if (passwordSchema.required && !password) return false
	if (typeof passwordSchema.type !== typeof password) return false
	if (passwordSchema.format.test(password) === false) return false
	return true
}
