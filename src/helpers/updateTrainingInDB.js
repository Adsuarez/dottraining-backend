import { pool } from '#Config/db.js'
import { getEnrolledStudentsFromDB } from '#Helpers/getEnrolledStudentsFromDB.js'

export const updateTrainingInDB = async ({ trainingId, userId }) => {
	getEnrolledStudentsFromDB(trainingId).then((array) => {
		// pending insert new user in array
	})
}
