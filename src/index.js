import httpServer from '#Config/http.js'
import { PORT } from '#Config/environment.js'
const bootstrapping = () => {
	httpServer.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`)
	})
}

bootstrapping()
