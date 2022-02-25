const AuthRoute = async (fastify,  options, done) =>  {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
	})
	
	done()
}

export default AuthRoute