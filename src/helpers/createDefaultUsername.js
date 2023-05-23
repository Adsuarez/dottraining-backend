export const createDefaultUsername = (email) => {
	const index = email.indexOf('@')
	return email.substring(0, index)
}
