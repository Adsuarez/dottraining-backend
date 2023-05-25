import { pool } from '#Config/db.js'
import { USER_PERMISSIONS } from '#Config/constants.js'

export const saveUserInDB = async ({ email, password }) => {
	return pool
		.query('INSERT INTO user (email, password, permissions) VALUES (?, ?, ?)', [
			email,
			password,
			USER_PERMISSIONS.UNVERIFIED_USER,
		])
		.then(([row]) => {
			if (!row.affectedRows) return false
			return true
		})
}
