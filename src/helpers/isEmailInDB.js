import { pool } from '#Config/db.js'

export const isEmailInDB = async (email) => {
	const [[result]] = await pool.query(
		'SELECT `email` FROM `user` WHERE `email` = ?',
		[email]
	)
	if (!result) return false
	return true
}
