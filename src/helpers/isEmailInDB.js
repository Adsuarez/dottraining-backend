import { pool } from '#Config/db.js'

export const isEmailInDB = async (email) => {
	/* return pool
		.query('SELECT email FROM user WHERE email = ?', [email])
		.then(([[rows]]) => {
			if (rows) return true
			return false
		})
		.catch((error) => {
			console.error(error)
			console.log('catch error in pool query to DB')
		}) */
	let validation
	pool.query(
		'SELECT `email` FROM `user` WHERE `email` = ?',
		[email],
		function (error, results, fields) {
			pool.end()
			results && console.log(results[0].email)
			if (error || !results[0].email) {
				return false
			} else {
				return true
			}
		}
	)

	return validation
}
