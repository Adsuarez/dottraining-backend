import { pool } from '#Config/db.js'

export const saveTrainingInDB = async (newTraining) => {
	const { name, quotas, date, startTime, endTime } = newTraining
	const studyDays = [{ date, startTime, endTime }]
	const parseStudyDays = JSON.stringify(studyDays)
	const parserQuotas = Number(quotas)
	return pool
		.query(
			'INSERT INTO training (name, quotas, studyDays) VALUES (?, ?, ?, ?)',
			[name, parserQuotas, parseStudyDays]
		)
		.then(([row]) => {
			if (!row.affectedRows) return false
			return true
		})
}
