import { createPool } from 'mysql2/promise'
import { HOST, USER, PASSWORD, DATABASE } from '#Config/environment.js'

export const pool = createPool({
	host: HOST,
	user: USER,
	password: PASSWORD,
	database: DATABASE,
	ssl: {
		rejectUnauthorized: false,
	},
})
