import { pool } from '#Config/db.js'

export const isEmailInDB = async (email) => {
	return pool
		.query('SELECT * FROM user WHERE email = ?', [email])
		.then(([[rows]]) => {
			if (rows) return true
			return false
		})
		.catch((error) => {
			console.error(error)
		})
}
