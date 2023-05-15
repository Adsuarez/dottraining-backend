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
	pool.query(
		'SELECT email FROM user WHERE email = ?',
		[email],
		function (error, results, fields) {
			console.log({ results })
			if (error) {
				console.error(error)
			}
		}
	)
}
