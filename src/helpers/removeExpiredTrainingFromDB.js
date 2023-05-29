import { pool } from '#Config/db.js'

export const removeExpiredTrainingFromDB = async () => {
	const now = Date.now()

	return pool.query('SELECT id, studyDays FROM training').then(([rows]) => {
		for (const { id, studyDays } of rows) {
			const date = new Date(studyDays[0].date)
			const parseDate = date.valueOf()
			if (parseDate < now) {
				pool
					.query('DELETE FROM training WHERE id = ?', [id])
					.then(([row]) => {
						if (!row.affectedRows) return false
						return true
					})
					.catch((error) => {
						console.error(error)
						return false
					})
			}
		}
	})
}
