import { Router } from 'express'
import {
	createTraining,
	getTrainings,
	enrollTraining,
	cancelTraining,
} from '#Controllers/trainings.controllers.js'
import { userExtractor } from '#Middleware/userExtractor.js'
import { removeExpiredTrainings } from '#Middleware/removeExpiredTrainings.js'

const router = Router()

router.post('/trainings', userExtractor, createTraining)
router.get('/trainings', removeExpiredTrainings, getTrainings)
router.post('/trainings/enroll', userExtractor, enrollTraining)
router.post('/trainings/cancel', userExtractor, cancelTraining)

export default router
