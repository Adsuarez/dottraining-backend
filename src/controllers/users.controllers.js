import jwt from 'jsonwebtoken'
import { getUserFromDB } from '#Helpers/getUserFromDB.js'
import { JWT_SECRET_KEY } from '#Config/environment.js'
import { createDefaultUsername } from '#Helpers/createDefaultUsername.js'

export const getUsers = (req, res, next) => {
	return res.json([
		{
			email: 'fulanito@ful.com',
		},
	])
}

export const createUser = (req, res, next) => {
	const { email, password } = req.body
	console.log({ email, password })
	return res.json()
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
