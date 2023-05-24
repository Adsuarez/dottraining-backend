import { jsonErrorResponse } from '#Config/constants.js'
import { saveTrainingInDB } from '#Helpers/saveTrainingInDB.js'
import { notAceptable } from '#Helpers/errors.js'
import { getTrainingsFromDB } from '#Helpers/getTrainingsFromDB.js'

export const createTraining = (req, res, next) => {
	const { body, userId } = req
	const { name, quotas, date, startTime, endTime } = body
	const newTraining = {
		createdBy: userId,
		name,
		quotas,
		date,
		startTime,
		endTime,
	}
	saveTrainingInDB(newTraining)
		.then((savedOk) => {
			if (!savedOk) return res.status(406).json(jsonErrorResponse[406])
			return res.status(201).json(newTraining)
		})
		.catch(({ code }) => notAceptable(code, res))
}

export const getTrainings = (req, res, next) => {
	getTrainingsFromDB()
		.then((rows) => {
			if (rows) return res.status(200).json(rows)
		})
		.catch(({ code }) => res.status(404).json({ errorMessage: code }))
}
