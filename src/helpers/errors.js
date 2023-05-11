import { jsonErrorResponse } from '#Config/constants.js'

export const badRequest = (res) => {
	return res.status(400).json(jsonErrorResponse[400])
}

export const unauthorized = (res) => {
	return res.status(401).json()
}
