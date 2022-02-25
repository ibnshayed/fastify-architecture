
import AuthRoute from './auth/AuthRoute.js'

const Routes = async (fastify, options, done) => {
	fastify.register(AuthRoute, { prefix: '/auth' })
	done()
}

export default Routes