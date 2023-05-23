import { jsonErrorResponse } from '#Config/constants.js'

export const badRequest = (res) => {
	return res.status(400).json(jsonErrorResponse[400])
}

export const unauthorized = (res) => {
	return res.status(401).json(jsonErrorResponse[401])
}

export const notAceptable = (code, res) => {
	let errorResponse = {}
	if (code) {
		errorResponse = jsonErrorResponse[406]
		errorResponse.errorCode = code
		return res.status(406).json(errorResponse)
	}
	return res.status(406).json(jsonErrorResponse[406])
}
