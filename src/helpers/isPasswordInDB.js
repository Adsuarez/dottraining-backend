import { pool } from '#Config/db.js'

export const isPasswordInDB = async (password, email) => {
	const [[foundedPassword]] = await pool.query(
		'SELECT `password` FROM `user` WHERE `email` = ? AND `password` = ?',
		[email, password]
	)
	if (!foundedPassword) return false
	return true
}
