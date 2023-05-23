import { pool } from '#Config/db.js'

export const getUserFromDB = async (email) => {
	const [[result]] = await pool.query(
		'SELECT `id`, `email`, `permissions` FROM `user` WHERE `email` = ?',
		[email]
	)
	return result
}
