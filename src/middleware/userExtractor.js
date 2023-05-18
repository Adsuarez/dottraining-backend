import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '#Config/environment.js'

export const userExtractor = (req, res, next) => {
	const authorization = req.get('authorization')
	let token = null

	if (authorization && authorization.toLowerCase().startsWith('bearer')) {
		token = authorization.substring(7)
	}

	if (!token || token.length < 10)
		return res.status(401).json({ errorMessage: 'token missing or invalid' })

	const decodedToken = jwt.verify(token, JWT_SECRET_KEY)

	if (!decodedToken.id)
		return res.status(401).json({ errorMessage: 'token missing or invalid' })

	const { id: userId } = decodedToken
	req.userId = userId

	next()
}
