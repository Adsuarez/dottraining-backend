import { pool } from '#Config/db.js'

export const getTrainingsFromDB = async () => {
	return pool.query('SELECT * FROM training').then(([rows]) => rows)
}
