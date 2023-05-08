import express from 'express'
import userRoutes from '#Routes/user.routes.js'

const expressApp = express()

console.clear()
expressApp.use(express.json())

expressApp.use('/api', userRoutes)

export default expressApp
