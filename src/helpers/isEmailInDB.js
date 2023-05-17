import { pool } from '#Config/db.js'

export const isEmailInDB = async (email) => {
	/* const [[rows]] = await pool.query(
		'SELECT `email` FROM `user` WHERE `email` = ?',
		[email]
	)
	console.log({ rows }) */
	return pool
		.promise()
		.query('SELECT `email` FROM `user` WHERE `email` = ?', [email])
		.then(([[rows]]) => {
			if (rows) return true
		})
		.catch(console.log)
	// .then(() => pool.end())
	/* .catch((error) => {
			if (error.message.includes(`add new command when`)) return null
		}) */
}
