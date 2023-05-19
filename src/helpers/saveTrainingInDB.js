import { pool } from '#Config/db.js'

export const saveTrainingInDB = async (newTraining) => {
	const { createdBy, name, quotas, studyDays, enrolledStudents } = newTraining
	return pool
		.query(
			'INSERT INTO training (createdBy, name, quotas, studyDays, enrolledStudents) VALUES (?, ?, ?, ?, ?)',
			[createdBy, name, quotas, studyDays, enrolledStudents]
		)
		.then(([row]) => {
			if (!row.affectedRows) return false
			return true
		})
}
