import { Router } from 'express'
import {
	createTraining,
	getTrainings,
} from '#Controllers/trainings.controllers.js'
import { userExtractor } from '#Middleware/userExtractor.js'

const router = Router()

router.post('/trainings', userExtractor, createTraining)
router.get('/trainings', getTrainings)

export default router
