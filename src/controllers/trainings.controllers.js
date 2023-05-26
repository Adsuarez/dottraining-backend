import { jsonErrorResponse, USER_PERMISSIONS } from '#Config/constants.js'
import { saveTrainingInDB } from '#Helpers/saveTrainingInDB.js'
import { notAceptable, unauthorized } from '#Helpers/errors.js'
import { getTrainingsFromDB } from '#Helpers/getTrainingsFromDB.js'
import { updateTrainingInDB } from '#Helpers/updateTrainingInDB.js'

export const createTraining = (req, res, next) => {
	const { body, userId } = req
	const { trainingToCreate, permissions } = body
	if (permissions !== USER_PERMISSIONS.ADMIN_USER) return unauthorized(res, 405)
	const { name, quotas, date, startTime, endTime } = trainingToCreate
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

export const enrollTraining = (req, res, next) => {
	const { userId, body } = req
	const { trainingId } = body
	updateTrainingInDB({ trainingId, userId, action: 'enroll' }).then(
		(isUpdating) => {
			if (!isUpdating) return res.status(409).json({ errorMessage: 'conflict' })
			res.status(202).json({ trainingId, userId })
		}
	)
}

export const cancelTraining = (req, res, next) => {
	const { userId, body } = req
	const { trainingId } = body
	updateTrainingInDB({ trainingId, userId, action: 'cancel' }).then(
		(isUpdating) => {
			if (!isUpdating) return res.status(409).json({ errorMessage: 'conflict' })
			res.status(202).json({ trainingId, userId })
		}
	)
}
