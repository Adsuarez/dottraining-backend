import { pool } from '#Config/db.js'

export const saveTrainingInDB = async (newTraining) => {
	const { createdBy, name, quotas, date, startTime, endTime } = newTraining
	const studyDays = [{ date, startTime, endTime }]
	const parseStudyDays = JSON.stringify(studyDays)
	const parserQuotas = Number(quotas)
	return pool
		.query(
			'INSERT INTO training (createdBy, name, quotas, studyDays) VALUES (?, ?, ?, ?)',
			[createdBy, name, parserQuotas, parseStudyDays]
		)
		.then(([row]) => {
			if (!row.affectedRows) return false
			return true
		})
}
