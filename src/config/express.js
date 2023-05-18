import express from 'express'
import cors from 'cors'
import userRoutes from '#Routes/user.routes.js'

const expressApp = express()

console.clear()
expressApp.use(cors())
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
expressApp.use((error, req, res, next) => {
	return res.status(500).json({
		errorMessage: error.message,
	})
})

export default expressApp
