import { createPool } from 'mysql'
import { HOST, USER, PASSWORD, DB_PORT, DATABASE } from '#Config/environment.js'

export const pool = createPool({
	host: HOST,
	user: USER,
	password: PASSWORD,
	port: DB_PORT,
	database: DATABASE,
})
