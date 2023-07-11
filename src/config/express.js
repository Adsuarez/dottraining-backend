import express from 'express'
import cors from 'cors'
import userRoutes from '#Routes/user.routes.js'
import trainingRoutes from '#Routes/training.routes.js'
// import { FRONT_URL } from './environment.js'
const expressApp = express()

console.clear()
expressApp.use(cors({ origin: 'https://dot-training-frontend.vercel.app/' }))
expressApp.use(express.json())
expressApp.use((req, res, next) => {
	console.log('\n\n👀 Reading information 🖥️')
	console.log('method: ', req.method)
	console.log('path: ', req.path)
	console.log('body: ', req.body)
	console.log('\nFinished reading ✅\n\n')
	next()
})
expressApp.use('/api', userRoutes)
expressApp.use('/api', trainingRoutes)
expressApp.use((error, req, res, next) => {
	console.error(error.code)
	return res.status(500).json({
		errorMessage: error.message,
	})
})

export default expressApp
