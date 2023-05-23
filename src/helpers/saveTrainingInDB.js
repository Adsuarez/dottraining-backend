import { pool } from '#Config/db.js'

export const saveTrainingInDB = async (newTraining) => {
	const { createdBy, name, quotas, studyDays } = newTraining
	const parseStudyDays = JSON.stringify(studyDays)
	console.log({ parseStudyDays })
	// "[{\"date\":\"2023-05-19\",\"startTime\":\"17:15\",\"endTime\":\"19:15\"}]"
	return pool
		.query(
			'INSERT INTO training (createdBy, name, quotas, studyDays) VALUES (?, ?, ?, ?)',
			[createdBy, name, quotas, parseStudyDays]
		)
		.then(([row]) => {
			if (!row.affectedRows) return false
			return true
		})
}
