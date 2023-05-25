import { Router } from 'express'
import {
	createTraining,
	getTrainings,
	enrollTraining,
} from '#Controllers/trainings.controllers.js'
import { userExtractor } from '#Middleware/userExtractor.js'

const router = Router()

router.post('/trainings', userExtractor, createTraining)
router.get('/trainings', getTrainings)
router.post('/trainings/enroll', userExtractor, enrollTraining)

export default router
