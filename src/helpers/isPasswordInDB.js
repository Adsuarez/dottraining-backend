import { pool } from '#Config/db.js'

export const isPasswordInDB = async (password, email) => {
	const [[result]] = await pool.query(
		'SELECT `email` FROM `user` WHERE `email` = ?',
		[email]
	)
	console.log({ result })
	if (!result) return false
	return true
}
