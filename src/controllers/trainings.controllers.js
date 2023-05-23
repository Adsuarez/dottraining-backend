import { saveTrainingInDB } from '#Helpers/saveTrainingInDB.js'
import { jsonErrorResponse } from '#Config/constants.js'
import { notAceptable } from '#Helpers/errors.js'

export const createTraining = (req, res, next) => {
	const { body, userId } = req
	const { name, quotas, studyDays } = body
	const newTraining = {
		createdBy: userId,
		name,
		quotas,
		studyDays,
	}
	saveTrainingInDB(newTraining)
		.then((savedOk) => {
			if (!savedOk) return res.status(406).json(jsonErrorResponse[406])
			return res.sendStatus(201)
		})
		.catch(({ code }) => notAceptable(code, res))
}
