import { removeExpiredTrainingFromDB } from '#Helpers/removeExpiredTrainingFromDB.js'

export const removeExpiredTrainings = async (req, res, next) => {
	await removeExpiredTrainingFromDB()
	next()
}
