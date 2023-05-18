import { HOST_URL, PORT } from '#Config/environment.js'

export const BASE_URL = `${HOST_URL}:${PORT}/`
export const API_USERS = 'api/users/'
export const API_USERS_LOGIN = 'api/users/login'
export const nonexistingEmailInDB = [
	'test@example.com',
	'admin@dot.com',
	'something@dottraining.com',
	'aprendiz@ejemplo.com',
	'aprendiz01@dottraining.com',
	'aprendiz02@ejemplo.com',
]
export const existingEmail = ['admin@dottraining.com', 'aprendiz01@ejemplo.com']
export const nonexistingUserInDB = [
	{ email: nonexistingEmailInDB[0], password: 'Testing1234' },
	{ email: nonexistingEmailInDB[1], password: 'Testing1234' },
	{ email: nonexistingEmailInDB[2], password: 'Testing1234' },
	{ email: nonexistingEmailInDB[3], password: 'Testing1234' },
	{ email: nonexistingEmailInDB[4], password: 'Testing1234' },
	{ email: nonexistingEmailInDB[5], password: 'Testing1234' },
]
export const existingEmailWithWrongPassword = [
	{ email: existingEmail[0], password: 'NonexsistingPassword1234' },
	{ email: existingEmail[1], password: 'NonexsistingPassword1234' },
]
export const existingPassword = ['AdminPassword123', 'AprendizPassword789']
export const existingUserInDB = [
	{ email: existingEmail[0], password: existingPassword[0] },
	{ email: existingEmail[1], password: existingPassword[1] },
]
