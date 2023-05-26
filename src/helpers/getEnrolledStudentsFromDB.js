import { pool } from '#Config/db.js'

export const getEnrolledStudentsFromDB = async ({ trainingId }) => {
	return pool
		.query('SELECT enrolledStudents FROM training WHERE id = ?', [trainingId])
		.then(([[{ enrolledStudents }]]) => {
			return enrolledStudents
		})
}
