export const passwordSchema = {
	required: true,
	type: 'string',
	format: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
}

export const validatePassword = async (password) => {
	if (passwordSchema.required && !password) return false
	if (typeof passwordSchema.type !== typeof password) return false
	if (passwordSchema.format.test(password) !== true) return false
	return true
}
