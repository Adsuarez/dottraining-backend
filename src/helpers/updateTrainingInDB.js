import { pool } from '#Config/db.js'
import { getEnrolledStudentsFromDB } from '#Helpers/getEnrolledStudentsFromDB.js'

export const updateTrainingInDB = async ({ trainingId, userId }) => {
	return getEnrolledStudentsFromDB({ trainingId }).then((array) => {
		let newArray
		if (array) {
			const userAlreadyExists = array.includes(userId)
			if (userAlreadyExists) return false
			newArray = array.concat(userId)
		} else {
			newArray = [userId]
		}

		return pool
			.query(
				'UPDATE training SET enrolledStudents = IFNULL("[?]", enrolledStudents) WHERE id = ?',
				[newArray, trainingId]
			)
			.then((rows) => {
				if (!rows.affectedRows) return false
				return true
			})
	})
}
