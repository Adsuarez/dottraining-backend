import { pool } from '#Config/db.js'

export const closeDBConnections = async () => {
	pool.end()
}
