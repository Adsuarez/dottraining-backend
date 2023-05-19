import jwt from 'jsonwebtoken'
import { getUserFromDB } from '#Helpers/getUserFromDB.js'
import { JWT_SECRET_KEY } from '#Config/environment.js'

export const getUsers = (req, res, next) => {
	return res.json([
		{
			email: 'fulanito@ful.com',
		},
	])
}

export const createUser = (req, res, next) => {
	console.log(req.body)
	return res.json(req.body)
}

export const validateUser = async (req, res, next) => {
	const { email } = req.body
	const userForToken = await getUserFromDB(email)
	const token = jwt.sign(userForToken, JWT_SECRET_KEY, {
		expiresIn: 60 * 60 * 24 * 7,
	})
	return res.status(202).json({ token })
}
