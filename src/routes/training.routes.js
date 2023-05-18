import { Router } from 'express'
import { createTraining } from '#Controllers/trainings.controllers.js'
import { userExtractor } from '#Middleware/userExtractor.js'

const router = Router()

router.post('/trainings', userExtractor, createTraining)

export default router
