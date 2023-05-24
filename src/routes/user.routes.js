import { Router } from 'express'
import {
	getUsers,
	createUser,
	validateUser,
} from '#Controllers/users.controllers.js'
import { validateUserDTO } from '#Dto/validateUser.dto.js'
import { validateNewUserDTO } from '#Dto/validateNewUser.dto.js'

const router = Router()

router.get('/users', getUsers)

router.post('/users', validateNewUserDTO, createUser)

router.post('/users/login', validateUserDTO, validateUser)

export default router
