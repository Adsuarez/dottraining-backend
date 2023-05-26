import { pool } from '#Config/db.js'
import { getEnrolledStudentsFromDB } from '#Helpers/getEnrolledStudentsFromDB.js'

export const updateTrainingInDB = async ({ trainingId, userId, action }) => {
	let [[{ quotas }]] = await pool.query(
		'SELECT quotas FROM training WHERE id = ?',
		[trainingId]
	)

	console.log({ quotas })
	return getEnrolledStudentsFromDB({ trainingId }).then((array) => {
		let newArray

		if (action === 'enroll') {
			if (array) {
				const userAlreadyExists = array.includes(userId)
				if (userAlreadyExists) return false
				newArray = array.concat(userId)
				quotas--
			} else {
				newArray = [userId]
				quotas--
			}
		}

		if (action === 'cancel') {
			newArray = array.filter((users) => users !== userId)
			quotas++
		}

		return pool
			.query(
				'UPDATE training SET enrolledStudents = IFNULL("[?]", enrolledStudents), quotas = ? WHERE id = ?',
				[newArray, quotas, trainingId]
			)
			.then(([rows]) => {
				if (!rows.affectedRows) return false
				return true
			})
	})
}
