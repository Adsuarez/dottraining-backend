export default function validateUserDTO(req, res, next) {
	const { email, password } = req.body

	next()
}
