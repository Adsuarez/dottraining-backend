import { config } from 'dotenv'

config()

export const HOST_URL = process.env.BASE_URL
export const PORT = process.env.PORT || 8080
export const HOST = process.env.DB_HOST
export const USER = process.env.DB_USER
export const PASSWORD = process.env.DB_PASSWORD
export const DATABASE = process.env.DB_DATABASE
export const DB_PORT = process.env.DB_PORT
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
export const FRONT_URL = process.env.FRONT_URL
