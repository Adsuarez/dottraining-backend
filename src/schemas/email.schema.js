import { isEmailInDB } from '#Helpers/isEmailInDB.js'

export const emailSchema = {
	required: true,
	type: 'string',
	format: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
}

export const validateEmail = async (email) => {
	if (emailSchema.required && !email) return false
	if (typeof email !== typeof emailSchema.type) return false
	if (emailSchema.format.test(email) !== true) return false
	const existEmailInDB = await isEmailInDB(email)
	if (existEmailInDB === false) return false
	return true
}
