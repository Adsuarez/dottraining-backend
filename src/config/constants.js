export const AMOUNT_OF_VALUES_LOGIN = 2

export const jsonErrorResponse = {
	400: {
		errorMessage: 'wrong or missing information',
	},
	401: {
		errorMessage: 'email or password invalid',
	},
	405: {
		errorMessage: "verify your permissions, you can't do this action",
	},
	406: {
		errorMessage: 'error creating new training',
	},
}

export const USER_PERMISSIONS = {
	UNVERIFIED_USER: 0,
	ADMIN_USER: 1,
	STUDENT_USER: 2,
}
