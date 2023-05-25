import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '#Config/environment.js'
import { getUserFromDB } from '#Helpers/getUserFromDB.js'
import { createDefaultUsername } from '#Helpers/createDefaultUsername.js'
import { saveUserInDB } from '#Helpers/saveUserInDB.js'
import { badRequest, notAceptable } from '#Helpers/errors.js'

export const getUsers = (req, res, next) => {
	return res.json([
		{
			email: 'fulanito@ful.com',
		},
	])
}

export const createUser = (req, res, next) => {
	const { email, password } = req.body
	saveUserInDB({ email, password })
		.then((isSavedOk) => {
			if (!isSavedOk) return badRequest(res)
			return res.status(201).json({ email })
		})
		.catch(({ code }) => notAceptable(code, res))
}

export const validateUser = async (req, res, next) => {
	const { email } = req.body
	const userForToken = await getUserFromDB(email)
	const token = jwt.sign(userForToken, JWT_SECRET_KEY, {
		expiresIn: 60 * 60 * 24 * 7,
	})
	const username = createDefaultUsername(email)
	const userId = userForToken.id
	const permissions = userForToken.permissions
	return res.status(202).json({ token, username, userId, permissions })
}
