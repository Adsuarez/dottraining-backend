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

export const validateUser = (req, res, next) => {
	return res.json(req.body)
}
